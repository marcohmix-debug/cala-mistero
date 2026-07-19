/* Cala Mistero — SPA */

const I18N = {
  it: {
    suspects: "Sospettati",
    howto: "clicca una carta e poi la griglia per piazzare; clicca la griglia senza selezione per segnare ✕",
    submit: "RISOLVI", submitSub: "(piazza tutti prima)", hint: "💡 Aiuto",
    undo: "ANNULLA", clear: "🧹 Svuota", back: "← Livelli",
    zone: "Zona 1 — Il Porto", pick: "Scegli un caso",
    winTitle: "Caso risolto!", winBody: (m) => `L'assassino era ${m}!`,
    loseTitle: "Non ci siamo…", loseBody: (k) => `${k} sospettati sono nel posto sbagliato.`,
    next: "Prossimo caso", home: "Livelli", retry: "Riprova",
    victim: "LA VITTIMA",
    tutorial: "TUTORIAL", tutWrong: "Non ancora — rileggi il suggerimento qui sopra.",
  },
  en: {
    suspects: "Suspects",
    howto: "click a card then the grid to place; click the grid with no selection to mark ✕",
    submit: "SUBMIT", submitSub: "(place all first)", hint: "💡 Hint",
    undo: "UNDO", clear: "🧹 Clear", back: "← Levels",
    zone: "Zone 1 — The Harbor", pick: "Pick a case",
    winTitle: "Case solved!", winBody: (m) => `The murderer was ${m}!`,
    loseTitle: "Not quite…", loseBody: (k) => `${k} suspects are in the wrong place.`,
    next: "Next case", home: "Levels", retry: "Retry",
    victim: "THE VICTIM",
    tutorial: "TUTORIAL", tutWrong: "Not yet — reread the hint above.",
  },
};

const S = {
  lang: localStorage.getItem("cm_lang") || "it",
  view: "home",
  index: null,
  level: null,
  placements: {},      // suspectId -> [r,c]
  marks: new Set(),    // "r,c" celle escluse dal giocatore
  selected: null,
  history: [],
  wrong: new Set(),
  tutStep: 0, tutFlash: false,
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
  if (!S.index.levels.some((l) => l.id === 0)) {
    S.index.levels.unshift({ id: 0, file: "tutorial.json", size: 6,
      name_it: "Tutorial — La Prima Indagine",
      name_en: "Tutorial — Your First Case" });
  }
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
    <div class="level-card ${d[l.id] ? "done" : ""} ${l.id === 0 ? "tut" : ""}" data-id="${l.id}">
      <div class="num">${l.id === 0 ? "🎓" : "#" + String(l.id).padStart(2, "0")}</div>
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
  S.marks = new Set();
  S.selected = null;
  S.history = [];
  S.wrong = new Set();
  S.tutStep = 0;
  S.tutFlash = false;
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
  const mobile = window.innerWidth <= 980;
  const avail = mobile ? Math.min(window.innerWidth, 560) - 36
                       : Math.min(640, window.innerWidth - 540);
  const cs = Math.max(34, Math.min(76, Math.floor(avail / L.size)));

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
        inner += a.img
          ? `<img class="furn img ${a.cat === "overlay" ? "overlay" : ""}" src="${a.img}" alt="">`
          : `<span class="furn ${a.cat === "overlay" ? "overlay" : ""}">${a.emoji}</span>`;
      }
      const sid = suspectAt(r, c);
      if (sid !== null) {
        const sp = L.suspects[sid];
        inner += `<span class="pawn ${S.wrong.has(sid) ? "wrong" : ""}"
          style="background:${AVATAR_COLORS[sid % AVATAR_COLORS.length]}">${sp.name[0]}</span>`;
      }
      if (sid === null && S.marks.has(r + "," + c))
        inner += `<span class="xmark">✕</span>`;
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

  // banner tutorial
  let tutBar = "";
  if (L.tutorial) {
    const T = L.tutorial;
    const txt = S.tutStep === 0 && !Object.keys(S.placements).length
      ? (S.lang === "it" ? T.intro_it : T.intro_en) + "<br><br>" +
        (S.lang === "it" ? T.steps[0].it : T.steps[0].en)
      : S.tutStep < T.steps.length
        ? (S.lang === "it" ? T.steps[S.tutStep].it : T.steps[S.tutStep].en)
        : (S.lang === "it" ? T.outro_it : T.outro_en);
    tutBar = `<div class="tutbar ${S.tutFlash ? "flash" : ""}">
      <span class="tag">${t().tutorial}</span> ${txt}
      ${S.tutFlash ? `<div class="tut-err">${t().tutWrong}</div>` : ""}</div>`;
    // auto-seleziona il sospettato del passo corrente
    if (S.tutStep < T.steps.length) S.selected = T.steps[S.tutStep].suspect;
  }

  app.innerHTML = headerHTML(`${nm} (${L.size}×${L.size})`) + tutBar + `
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
      <button id="clearBtn" ${L.tutorial ? "disabled" : ""}>${t().clear}</button>
      <button id="undoBtn" ${S.history.length && !L.tutorial ? "" : "disabled"}>${t().undo}</button>
      <button id="hintBtn" ${L.tutorial ? "disabled" : ""}>${t().hint}</button>
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
    S.history.push({ type: "bulk", prev: { ...S.placements },
                     prevMarks: new Set(S.marks) });
    S.placements = {}; S.marks.clear(); S.wrong.clear(); renderGame();
  };
  $("#undoBtn").onclick = undo;
  $("#hintBtn").onclick = hint;
  $("#submitBtn").onclick = submit;
}

function cellClick(r, c) {
  const f = furnAt(r, c);
  const here = suspectAt(r, c);
  S.wrong.clear();
  // modalita' tutorial: accetta solo il piazzamento del passo corrente
  const T = S.level.tutorial;
  if (T && S.tutStep < T.steps.length) {
    const st = T.steps[S.tutStep];
    if (here !== null) return;                 // niente rimozioni nel tutorial
    if (f && ASSETS[f.asset].cat === "block") return;
    if (r === st.cell[0] && c === st.cell[1]) {
      S.placements[st.suspect] = [r, c];
      S.marks.delete(r + "," + c);
      S.tutStep++;
      S.tutFlash = false;
      S.selected = null;
    } else if (S.selected !== null) {
      S.tutFlash = true;                       // cella sbagliata: feedback
    } else {
      const k = r + "," + c;                   // segni X permessi
      S.marks.has(k) ? S.marks.delete(k) : S.marks.add(k);
    }
    renderGame();
    return;
  }
  if (here !== null) {
    S.history.push({ type: "remove", id: here, cell: S.placements[here] });
    delete S.placements[here];
    S.selected = here;
    renderGame();
    return;
  }
  if (f && ASSETS[f.asset].cat === "block") return;
  if (S.selected === null) {
    // nessun sospettato selezionato: segna/dissegna la cella come esclusa
    const k = r + "," + c;
    S.marks.has(k) ? S.marks.delete(k) : S.marks.add(k);
    S.history.push({ type: "mark", cell: k });
    renderGame();
    return;
  }
  const prev = S.placements[S.selected] || null;
  S.history.push({ type: "place", id: S.selected, prev });
  S.marks.delete(r + "," + c);
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
    if (h.prevMarks) S.marks = h.prevMarks;
  } else if (h.type === "mark") {
    S.marks.has(h.cell) ? S.marks.delete(h.cell) : S.marks.add(h.cell);
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

let _rsz;
window.addEventListener("resize", () => {
  clearTimeout(_rsz);
  _rsz = setTimeout(() => { if (S.view === "game") renderGame(); }, 150);
});

boot();
