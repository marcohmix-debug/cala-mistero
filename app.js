/* Cala Mistero — SPA */

const I18N = {
  it: {
    suspects: "Sospettati", howto: "clicca per selezionare, poi clicca sulla griglia",
    submit: "RISOLVI", submitSub: "(piazza tutti prima)", hint: "💡 Aiuto",
    undo: "ANNULLA", clear: "🧹 Svuota", back: "← Livelli",
    zone: "Zona 1 — Il Porto", pick: "Scegli un caso",
    winTitle: "Caso risolto!", winBody: (m) => `L'assassino era ${m}!`,
    loseTitle: "Non ci siamo…", loseBody: (k) => `${k} sospettati sono nel posto sbagliato.`,
    next: "Prossimo caso", home: "Livelli", retry: "Riprova",
    victim: "LA VITTIMA",
  },
  en: {
    suspects: "Suspects", howto: "click to select, then click the grid",
    submit: "SUBMIT", submitSub: "(place all first)", hint: "💡 Hint",
    undo: "UNDO", clear: "🧹 Clear", back: "← Levels",
    zone: "Zone 1 — The Harbor", pick: "Pick a case",
    winTitle: "Case solved!", winBody: (m) => `The murderer was ${m}!`,
    loseTitle: "Not quite…", loseBody: (k) => `${k} suspects are in the wrong place.`,
    next: "Next case", home: "Levels", retry: "Retry",
    victim: "THE VICTIM",
  },
};

const S = {
  lang: localStorage.getItem("cm_lang") || "it",
  view: "home",
  index: null,
  level: null,
  placements: {},      // suspectId -> [r,c]
  selected: null,
  history: [],
  wrong: new Set(),
  t0: null, timerInt: null,
};

const $ = (sel) => document.querySelector(sel);
const t = () => I18N[S.lang];
const app = $("#app");

function doneMap() {
  try { return JSON.parse(localStorage.getItem("cm_done") || "{}"); }
  catch { return {}; }
}
function markDone(id) {
  const d = doneMap(); d[id] = true;
  localStorage.setItem("cm_done", JSON.stringify(d));
}

async function boot() {
  S.index = await (await fetch("levels/index.json")).json();
  renderHome();
}

/* ---------------- header ---------------- */
function headerHTML(sub) {
  return `<header>
    <div class="logo">CALA<span>MISTERO</span></div>
    <div class="sub">${sub || ""}</div>
    <div class="spacer"></div>
    <span id="timer"></span>
    <select id="langSel">
      <option value="it" ${S.lang === "it" ? "selected" : ""}>Italiano</option>
      <option value="en" ${S.lang === "en" ? "selected" : ""}>English</option>
    </select>
  </header>`;
}
function wireHeader() {
  $("#langSel").onchange = (e) => {
    S.lang = e.target.value;
    localStorage.setItem("cm_lang", S.lang);
    S.view === "home" ? renderHome() : renderGame();
  };
}

/* ---------------- home ---------------- */
function renderHome() {
  S.view = "home";
  stopTimer();
  const d = doneMap();
  const cards = S.index.levels.map((l) => `
    <div class="level-card ${d[l.id] ? "done" : ""}" data-id="${l.id}">
      <div class="num">#${String(l.id).padStart(2, "0")}</div>
      <div class="nm">${S.lang === "it" ? l.name_it : l.name_en}</div>
      <div class="sz">${l.size}×${l.size}</div>
    </div>`).join("");
  app.innerHTML = headerHTML(t().zone) + `
    <div class="home"><h1>${t().pick}</h1>
    <p class="zone">${t().zone}</p>
    <div class="level-grid">${cards}</div></div>`;
  wireHeader();
  document.querySelectorAll(".level-card").forEach((el) =>
    el.onclick = () => openLevel(+el.dataset.id));
}

async function openLevel(id) {
  const meta = S.index.levels.find((l) => l.id === id);
  S.level = await (await fetch("levels/" + meta.file)).json();
  S.placements = {};
  S.selected = null;
  S.history = [];
  S.wrong = new Set();
  S.t0 = Date.now();
  renderGame();
  startTimer();
}

/* ---------------- game ---------------- */
function startTimer() {
  stopTimer();
  S.timerInt = setInterval(() => {
    const s = Math.floor((Date.now() - S.t0) / 1000);
    const el = $("#timer");
    if (el) el.textContent =
      `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  }, 500);
}
function stopTimer() { if (S.timerInt) clearInterval(S.timerInt); S.timerInt = null; }

function furnAt(r, c) {
  return S.level.furniture.find((f) => f.r === r && f.c === c);
}
function suspectAt(r, c) {
  for (const [id, p] of Object.entries(S.placements))
    if (p && p[0] === r && p[1] === c) return +id;
  return null;
}
function roomLabelCells(L) {
  // per ogni stanza: cella con r massima, poi c minima
  const best = {};
  for (let r = 0; r < L.size; r++)
    for (let c = 0; c < L.size; c++) {
      const z = L.rooms[r][c];
      if (!(z in best) || r > best[z][0] || (r === best[z][0] && c < best[z][1]))
        best[z] = [r, c];
    }
  return best;
}

function renderGame() {
  S.view = "game";
  const L = S.level;
  const cs = Math.min(76, Math.floor(Math.min(640, window.innerWidth - 540) / L.size)) || 64;

  // suspect cards
  const cards = L.suspects.map((sp, i) => {
    const clue = L.clues.find((c) => c.suspect === i);
    const placed = S.placements[i] ? "placed" : "";
    const sel = S.selected === i ? "selected" : "";
    const vic = clue.victim ? "victim" : "";
    return `<div class="suspect-card ${placed} ${sel} ${vic}" data-id="${i}">
      <div class="avatar" style="background:${AVATAR_COLORS[i % AVATAR_COLORS.length]}">${sp.name[0]}</div>
      <div class="txt"><div class="nm">${sp.name}</div>
      <div class="clue">${S.lang === "it" ? clue.it : clue.en}</div></div>
    </div>`;
  }).join("");

  // board
  const labels = roomLabelCells(L);
  let cells = "";
  for (let r = 0; r < L.size; r++) {
    for (let c = 0; c < L.size; c++) {
      const z = L.rooms[r][c];
      const def = L.room_defs[z];
      const f = furnAt(r, c);
      const bT = r === 0 || L.rooms[r - 1][c] !== z;
      const bL = c === 0 || L.rooms[r][c - 1] !== z;
      const bB = r === L.size - 1 || L.rooms[r + 1][c] !== z;
      const bR = c === L.size - 1 || L.rooms[r][c + 1] !== z;
      const bw = (b) => b ? "2px solid #101420" : "1px solid rgba(16,20,32,.12)";
      let inner = "";
      if (f) {
        const a = ASSETS[f.asset];
        inner += `<span class="furn ${a.cat === "overlay" ? "overlay" : ""}">${a.emoji}</span>`;
      }
      const sid = suspectAt(r, c);
      if (sid !== null) {
        const sp = L.suspects[sid];
        inner += `<span class="pawn ${S.wrong.has(sid) ? "wrong" : ""}"
          style="background:${AVATAR_COLORS[sid % AVATAR_COLORS.length]}">${sp.name[0]}</span>`;
      }
      const lbl = Object.entries(labels).find(([zz, p]) => +zz === z && p[0] === r && p[1] === c);
      if (lbl) inner += `<span class="room-label">${S.lang === "it" ? def.it : def.en}</span>`;
      const blocked = f && ASSETS[f.asset].cat === "block";
      cells += `<div class="cell ${blocked ? "blocked" : ""}" data-r="${r}" data-c="${c}"
        style="background:${def.color};
        border-top:${bw(bT)};border-left:${bw(bL)};
        border-bottom:${bw(bB)};border-right:${bw(bR)}">${inner}</div>`;
    }
  }

  const allPlaced = L.suspects.every((_, i) => S.placements[i]);
  const nm = S.lang === "it" ? L.name_it : L.name_en;

  app.innerHTML = headerHTML(`${nm} (${L.size}×${L.size})`) + `
  <div class="game">
    <div class="suspects">
      <h2>${t().suspects}</h2>
      <div class="hint-line">${t().howto}</div>
      ${cards}
      <button id="backBtn" style="width:100%;font:inherit;padding:8px;border-radius:8px;
        border:2px solid #c9cdde;background:#fff;cursor:pointer">${t().back}</button>
    </div>
    <div class="board-wrap">
      <div class="board" style="--cs:${cs}px;grid-template-columns:repeat(${L.size},${cs}px)">
        ${cells}
      </div>
    </div>
    <div class="tools">
      <button id="clearBtn">${t().clear}</button>
      <button id="undoBtn" ${S.history.length ? "" : "disabled"}>${t().undo}</button>
      <button id="hintBtn">${t().hint}</button>
      <button id="submitBtn" class="primary" ${allPlaced ? "" : "disabled"}>
        ${t().submit}<br><span class="small" style="color:#dde">${allPlaced ? "" : t().submitSub}</span>
      </button>
    </div>
  </div>`;
  wireHeader();

  document.querySelectorAll(".suspect-card").forEach((el) =>
    el.onclick = () => {
      const id = +el.dataset.id;
      S.selected = S.selected === id ? null : id;
      renderGame();
    });
  document.querySelectorAll(".cell").forEach((el) =>
    el.onclick = () => cellClick(+el.dataset.r, +el.dataset.c));
  $("#backBtn").onclick = renderHome;
  $("#clearBtn").onclick = () => {
    S.history.push({ type: "bulk", prev: { ...S.placements } });
    S.placements = {}; S.wrong.clear(); renderGame();
  };
  $("#undoBtn").onclick = undo;
  $("#hintBtn").onclick = hint;
  $("#submitBtn").onclick = submit;
}

function cellClick(r, c) {
  const f = furnAt(r, c);
  const here = suspectAt(r, c);
  S.wrong.clear();
  if (here !== null) {
    S.history.push({ type: "remove", id: here, cell: S.placements[here] });
    delete S.placements[here];
    S.selected = here;
    renderGame();
    return;
  }
  if (S.selected === null) return;
  if (f && ASSETS[f.asset].cat === "block") return;
  const prev = S.placements[S.selected] || null;
  S.history.push({ type: "place", id: S.selected, prev });
  S.placements[S.selected] = [r, c];
  // auto-seleziona il prossimo non piazzato
  const nxt = S.level.suspects.findIndex((_, i) => !S.placements[i]);
  S.selected = nxt >= 0 ? nxt : null;
  renderGame();
}

function undo() {
  const h = S.history.pop();
  if (!h) return;
  S.wrong.clear();
  if (h.type === "place") {
    if (h.prev) S.placements[h.id] = h.prev; else delete S.placements[h.id];
  } else if (h.type === "remove") {
    S.placements[h.id] = h.cell;
  } else if (h.type === "bulk") {
    S.placements = h.prev;
  }
  renderGame();
}

function hint() {
  const L = S.level;
  for (let i = 0; i < L.suspects.length; i++) {
    const sol = L.solution[i];
    const cur = S.placements[i];
    if (!cur || cur[0] !== sol[0] || cur[1] !== sol[1]) {
      // libera la cella se occupata da altri
      const occ = suspectAt(sol[0], sol[1]);
      if (occ !== null && occ !== i) delete S.placements[occ];
      S.history.push({ type: "place", id: i, prev: cur || null });
      S.placements[i] = [sol[0], sol[1]];
      renderGame();
      return;
    }
  }
}

function submit() {
  const L = S.level;
  S.wrong = new Set();
  L.suspects.forEach((_, i) => {
    const p = S.placements[i], s = L.solution[i];
    if (!p || p[0] !== s[0] || p[1] !== s[1]) S.wrong.add(i);
  });
  if (S.wrong.size === 0) {
    stopTimer();
    markDone(L.id);
    const m = L.suspects[L.murderer].name;
    const isLast = L.id >= S.index.levels.length;
    modal(t().winTitle, t().winBody(m), [
      [t().home, renderHome],
      ...(isLast ? [] : [[t().next, () => openLevel(L.id + 1)]]),
    ]);
  } else {
    modal(t().loseTitle, t().loseBody(S.wrong.size), [[t().retry, renderGame]]);
  }
}

function modal(title, body, buttons) {
  const bg = document.createElement("div");
  bg.className = "modal-bg";
  bg.innerHTML = `<div class="modal"><h2>${title}</h2><p>${body}</p><div></div></div>`;
  const btnBox = bg.querySelector("div.modal > div");
  buttons.forEach(([label, fn], k) => {
    const b = document.createElement("button");
    if (k === 0 && buttons.length > 1) b.className = "alt";
    b.textContent = label;
    b.onclick = () => { bg.remove(); fn(); };
    btnBox.appendChild(b);
  });
  document.body.appendChild(bg);
}

boot();
