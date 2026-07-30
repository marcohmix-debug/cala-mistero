/* SUSoku — SPA */

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
    tutorial: "TUTORIAL", tutSkip: "Salta il tutorial →",
    mCross: "Croci", mPlace: "Piazza", mPencil: "Ipotesi", mErase: "Cancella", mUndo: "Annulla", mHint: "Aiuto",
    pencilOn: "✏️ Ipotesi attive", pencilOff: "✏️ Fai ipotesi",
    mSubmit: "Invia soluzione", mPick: "Scegli un sospettato qui sopra.",
    zonesTitle: "Scegli una zona", zonesSub: "Ogni zona è un caso a tema",
    zoneBack: "← Zone", zoneLevels: (n) => `${n} casi`,
    diff: ["", "Facile", "Medio", "Difficile"], soon: "Prossimamente",
    tutCard: "Tutorial — La Prima Indagine",
    genClues: "Indizi generali",
    profile: "Profilo", profileSub: "I tuoi progressi da detective",
    pSolved: "Casi risolti", pTime: "Tempo totale", pAvg: "Tempo medio",
    pBest: "Record", pNoTime: "senza tempo",
    pGuest: "Detective anonimo", pLocalOnly: "Progressi salvati su questo dispositivo",
    pSignedAs: (n) => `Connesso come ${n}`,
    pSignInGoogle: "Accedi con Google", pSignInApple: "Accedi con Apple",
    pSignOut: "Esci", pSigning: "Accesso in corso…",
    pSyncNote: "Accedi per ritrovare i tuoi progressi su ogni dispositivo.",
    pCloudOff: "Sincronizzazione cloud non configurata: i progressi restano su questo dispositivo.",
    pRename: "Cambia nome", pNamePrompt: "Come ti chiami, detective?",
    pNothing: "Nessun caso risolto. Il primo ti aspetta.",
    winTime: (tm) => `Tempo: ${tm}`, winRecord: "🏅 Nuovo record personale!",
    daily: "Sfida del giorno", dailyDone: "Completata ✓",
    dailyPlay: "Gioca",
    dailyStreak: (n) => n === 1 ? "🔥 1 giorno di fila" : `🔥 ${n} giorni di fila`,
    homeZones: "Zone",
    dailyNone: "Nessuna sfida disponibile",
    dailyTitle: (d) => `Sfida del ${d}`,
    pDaily: "Sfide quotidiane", pStreak: "Serie attuale", pBestStreak: "Serie record",
    dayNames: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"],
    hintTitle: (nm) => `Tocca a ${nm}`,
    hintLeft: (n) => `Aiuti rimasti: ${n}`,
    hintNoWhy: "Ho piazzato il prossimo sospettato al posto giusto.",
    hintShopTitle: "Aiuti esauriti",
    hintShopBody: "Guadagni aiuti risolvendo la sfida del giorno (+1) e completando una zona (+3).",
    hintAd: (n) => `🎬 Guarda un annuncio (+1) · ${n} oggi`,
    hintAdOut: "🎬 Annunci finiti per oggi",
    hintGotTitle: "Aiuto ottenuto",
    hintGot: (n) => `Ora ne hai ${n}.`,
    hintsWord: "aiuti", ok: "Ok",
    bonusTitle: "Casi bonus", bonusLocked: "🔒 Bloccato",
    bonusHow: (n) => `Risolvi tutti i ${n} casi della zona per sbloccare le 5 griglie più grandi.`,
    bonusUnlocked: "Sbloccati!",
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
    tutorial: "TUTORIAL", tutSkip: "Skip tutorial →",
    mCross: "Crosses", mPlace: "Place", mPencil: "Notes", mErase: "Erase", mUndo: "Undo", mHint: "Hint",
    pencilOn: "✏️ Notes active", pencilOff: "✏️ Add notes",
    mSubmit: "Submit solution", mPick: "Pick a suspect above.",
    zonesTitle: "Choose a zone", zonesSub: "Each zone is a themed case",
    zoneBack: "← Zones", zoneLevels: (n) => `${n} cases`,
    diff: ["", "Easy", "Medium", "Hard"], soon: "Coming soon",
    tutCard: "Tutorial — Your First Case",
    genClues: "General clues",
    profile: "Profile", profileSub: "Your detective record",
    pSolved: "Cases solved", pTime: "Total time", pAvg: "Average time",
    pBest: "Best", pNoTime: "untimed",
    pGuest: "Anonymous detective", pLocalOnly: "Progress saved on this device",
    pSignedAs: (n) => `Signed in as ${n}`,
    pSignInGoogle: "Sign in with Google", pSignInApple: "Sign in with Apple",
    pSignOut: "Sign out", pSigning: "Signing in…",
    pSyncNote: "Sign in to keep your progress on every device.",
    pCloudOff: "Cloud sync not configured: progress stays on this device.",
    pRename: "Change name", pNamePrompt: "What's your name, detective?",
    pNothing: "No cases solved yet. The first one awaits.",
    winTime: (tm) => `Time: ${tm}`, winRecord: "🏅 New personal best!",
    daily: "Daily challenge", dailyDone: "Completed ✓",
    dailyPlay: "Play", dailyStreak: (n) => `🔥 ${n} day streak`,
    homeZones: "Zones",
    dailyNone: "No challenge available",
    dailyTitle: (d) => `Challenge of ${d}`,
    pDaily: "Daily challenges", pStreak: "Current streak", pBestStreak: "Best streak",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    hintTitle: (nm) => `${nm} is next`,
    hintLeft: (n) => `Hints left: ${n}`,
    hintNoWhy: "I placed the next suspect in the right square.",
    hintShopTitle: "Out of hints",
    hintShopBody: "You earn hints by solving the daily challenge (+1) and by completing a zone (+3).",
    hintAd: (n) => `🎬 Watch an ad (+1) · ${n} today`,
    hintAdOut: "🎬 No ads left today",
    hintGotTitle: "Hint earned",
    hintGot: (n) => `You now have ${n}.`,
    hintsWord: "hints", ok: "Ok",
    bonusTitle: "Bonus cases", bonusLocked: "🔒 Locked",
    bonusHow: (n) => `Solve all ${n} cases in the zone to unlock the 5 largest grids.`,
    bonusUnlocked: "Unlocked!",
  },
};

const S = {
  lang: localStorage.getItem("cm_lang") || "it",
  view: "zones",
  index: null,
  zones: [],
  zone: null,          // zona corrente
  level: null,
  placements: {},      // suspectId -> [r,c]
  candidates: {},      // suspectId -> ["r,c", ...] posizioni provvisorie
  marks: new Set(),    // "r,c" celle escluse dal giocatore
  selected: null,
  history: [],
  wrong: new Set(),
  tutStep: 0, tutFlash: false,
  mode: "place",           // place | pencil | cross | erase
  t0: null, timerInt: null,
  profileBack: "zones",    // dove torna il ‹ dal profilo
};

const $ = (sel) => document.querySelector(sel);
const t = () => I18N[S.lang];
const app = $("#app");

// progressi: li tiene Profile (profile.js), qui solo le viste
const isDone = (key) => Profile.solved(key);
const bestOf = (key) => Profile.best(key);

// il cloud puo' rispondere in ritardo: quando arriva, ridisegna la vista
Profile.onChange = () => {
  if (S.view === "profile") renderProfile();
  else if (S.view === "zones") renderZones();
  else if (S.view === "levels") renderLevels(S.zone);
};

const BUILD = "28";

async function boot() {
  S.index = await (await fetch("levels/index.json?v=" + BUILD)).json();
  S.zones = S.index.zones || [];
  // pool della sfida quotidiana: opzionale, se manca la sezione sparisce
  try {
    S.daily = await (await fetch("levels/daily.json?v=" + BUILD)).json();
  } catch { S.daily = null; }
  renderZones();
}

/* ---------------- sfida quotidiana ----------------
 * Nessun server: la mappa del giorno è `ordine[(giorni dall'epoca) % N]`.
 * Tutti i giocatori nello stesso giorno locale vedono la stessa sfida e il
 * pool non si ripete finché non è esaurito. */
function dailyToday() {
  if (!S.daily || !S.daily.levels?.length) return null;
  const day = todayString();
  const n = dayNumber(day) - dayNumber(S.daily.epoch);
  const list = S.daily.levels;
  const entry = list[((n % list.length) + list.length) % list.length];
  return { day, entry, key: Profile.dailyKey(day) };
}

function dailyLabel(day) {
  const d = new Date(day + "T12:00:00");
  return `${t().dayNames[d.getDay()]} ${d.getDate()}/${d.getMonth() + 1}`;
}

async function openDaily() {
  const dd = dailyToday();
  if (!dd) return;
  S.zone = { id: "daily", name_it: t().daily, name_en: t().daily,
             levels: [], daily: true };
  S.level = await (await fetch("levels/" + dd.entry.file + "?v=" + BUILD)).json();
  S.level.id = dd.day;                 // la chiave del progresso è la data
  S.level.name_it = S.level.name_en = t().dailyTitle(dailyLabel(dd.day));
  S.placements = {}; S.candidates = {}; S.marks = new Set();
  S.selected = null; S.history = []; S.wrong = new Set();
  S.tutStep = 0; S.tutFlash = false;
  S.t0 = Date.now();
  renderGame();
  startTimer();
}

function dailyCardHTML() {
  const dd = dailyToday();
  if (!dd) return "";
  const st = Profile.dailyStats(dd.day);
  const df = dd.entry.difficulty || 2;
  const best = Profile.best(dd.key);
  return `<div class="daily-card ${st.todayDone ? "done" : ""}" id="dailyCard">
    <div class="dc-left">
      <div class="dc-day">${dailyLabel(dd.day)}</div>
      <div class="dc-title">${t().daily}</div>
      <div class="dc-meta">${dd.entry.size}×${dd.entry.size} · ${t().diff[df]}${
        st.streak ? " · " + t().dailyStreak(st.streak) : ""}</div>
    </div>
    <div class="dc-right">${st.todayDone
      ? `<span class="dc-done">${t().dailyDone}</span>
         <span class="dc-time">${fmtTime(best)}</span>`
      : `<span class="dc-play">${t().dailyPlay} ▶</span>`}</div>
  </div>`;
}

// tutte le mappe (livelli + tutorial) di una zona, per lookup e "prossimo"
function zoneLevelList(zone) {
  const tut = zone.tutorial
    ? [{ id: 0, file: zone.tutorial.file, size: 6, tutorial: true }]
    : [];
  return tut.concat(zone.levels);
}

/* ---------------- header ---------------- */
function headerHTML(sub, backTo) {
  return `<header>
    ${backTo ? `<button class="hback" id="hback">‹</button>` : ""}
    <div class="logo">SUS<span>oku</span></div>
    <div class="sub">${sub || ""}</div>
    <div class="spacer"></div>
    <span id="timer"></span>
    <button class="hprofile" id="hprofile" title="${t().profile}">${
      Profile.user?.photo
        ? `<img src="${Profile.user.photo}" alt="">`
        : "👤"}</button>
    <select id="langSel">
      <option value="it" ${S.lang === "it" ? "selected" : ""}>Italiano</option>
      <option value="en" ${S.lang === "en" ? "selected" : ""}>English</option>
    </select>
  </header>`;
}
function wireHeader(backFn) {
  $("#langSel").onchange = (e) => {
    S.lang = e.target.value;
    localStorage.setItem("cm_lang", S.lang);
    if (S.view === "zones") renderZones();
    else if (S.view === "levels") renderLevels(S.zone);
    else renderGame();
  };
  const hb = $("#hback");
  if (hb && backFn) hb.onclick = backFn;
  const hp = $("#hprofile");
  if (hp) hp.onclick = renderProfile;
}

/* ---------------- profilo ---------------- */
function renderProfile() {
  const back = S.view === "profile" ? null : S.view;
  if (back) S.profileBack = back === "game" ? "levels" : back;
  S.view = "profile";
  stopTimer();
  const tot = Profile.totals(S.zones);
  const dl = Profile.dailyStats(todayString());
  const u = Profile.user;
  const name = Profile.data.name || u?.name || t().pGuest;

  const stat = (label, value) =>
    `<div class="pstat"><div class="pv">${value}</div><div class="pl">${label}</div></div>`;

  const zoneRows = tot.perZone.map((z) => `
    <div class="prow">
      <div class="pz">${S.lang === "it" ? z.zone.name_it : z.zone.name_en}</div>
      <div class="pbar"><span style="width:${z.total ? (z.solved / z.total) * 100 : 0}%"></span></div>
      <div class="pn">${z.solved}/${z.total}</div>
      <div class="pt">${z.ms ? fmtTime(z.ms) : "—"}</div>
    </div>`).join("");

  // migliori tempi: i 5 casi risolti piu' in fretta
  const lv = Profile.data.levels;
  const named = [];
  for (const z of S.zones)
    for (const l of z.levels) {
      const e = lv[z.id + ":" + l.id];
      if (e && e.best != null)
        named.push({ nm: S.lang === "it" ? l.name_it : l.name_en, ms: e.best });
    }
  named.sort((a, b) => a.ms - b.ms);
  const bestList = named.slice(0, 5).map((x) =>
    `<li><span>${x.nm}</span><b>${fmtTime(x.ms)}</b></li>`).join("");

  let account;
  if (!Cloud.enabled) {
    account = `<p class="pnote">${t().pCloudOff}</p>`;
  } else if (Profile.status === "signing") {
    account = `<p class="pnote">${t().pSigning}</p>`;
  } else if (u) {
    account = `<p class="pnote">${t().pSignedAs(u.name)}</p>
      <div class="pbtns"><button id="signOut" class="alt">${t().pSignOut}</button></div>`;
  } else {
    account = `<p class="pnote">${t().pSyncNote}</p>
      <div class="pbtns">
        <button id="signGoogle">${t().pSignInGoogle}</button>
        <button id="signApple" class="alt">${t().pSignInApple}</button>
      </div>`;
  }

  app.innerHTML = headerHTML(t().profile, true) + `
    <div class="profile-wrap">
      <div class="phead">
        <div class="pavatar">${u?.photo ? `<img src="${u.photo}" alt="">` : "🕵️"}</div>
        <div>
          <h1>${name}</h1>
          <p class="subtitle">${u ? t().profileSub : t().pLocalOnly}</p>
        </div>
        <button id="renameBtn" class="plink">${t().pRename}</button>
      </div>
      <div class="pstats">
        ${stat(t().pSolved, `${tot.solved}<small>/${tot.available}</small>`)}
        ${stat(t().pTime, fmtTime(tot.totalMs))}
        ${stat(t().pAvg, tot.timed ? fmtTime(tot.avgMs) : "—")}
      </div>
      ${dl.solved || dl.streak ? `<div class="pcard"><h2>${t().pDaily}</h2>
        <div class="pstats">
          ${stat(t().pDaily, dl.solved)}
          ${stat(t().pStreak, dl.streak ? "🔥 " + dl.streak : "—")}
          ${stat(t().pBestStreak, dl.bestStreak || "—")}
        </div></div>` : ""}
      <div class="pcard"><h2>${t().zonesTitle}</h2>${zoneRows}</div>
      <div class="pcard"><h2>${t().pBest}</h2>
        ${bestList ? `<ul class="pbest">${bestList}</ul>`
                   : `<p class="pnote">${t().pNothing}</p>`}</div>
      <div class="pcard">${account}</div>
    </div>`;
  wireHeader();
  const hb = $("#hback");
  if (hb) hb.onclick = () =>
    S.profileBack === "levels" && S.zone ? renderLevels(S.zone) : renderZones();
  $("#renameBtn").onclick = () => {
    const v = prompt(t().pNamePrompt, Profile.data.name || "");
    if (v !== null) { Profile.data.name = v.trim(); Profile.save(); Cloud.push(); renderProfile(); }
  };
  const g = $("#signGoogle"), a = $("#signApple"), o = $("#signOut");
  if (g) g.onclick = () => Cloud.signIn("google");
  if (a) a.onclick = () => Cloud.signIn("apple");
  if (o) o.onclick = async () => { await Cloud.signOut(); renderProfile(); };
}

/* ---------------- zone select ---------------- */
function renderZones() {
  S.view = "zones";
  stopTimer();
  const cards = S.zones.map((z) => {
    const base = z.levels.filter((l) => !l.bonus);
    const done = base.filter((l) => isDone(z.id + ":" + l.id)).length;
    return `<div class="zone-card" data-zone="${z.id}"
      style="background-image:linear-gradient(180deg,rgba(20,16,40,.15),rgba(20,16,40,.78)),url(${z.bg})">
      <div class="zone-meta">
        <div class="zone-name">${S.lang === "it" ? z.name_it : z.name_en}</div>
        <div class="zone-sub">${S.lang === "it" ? z.subtitle_it : z.subtitle_en}</div>
        <div class="zone-prog">${done}/${base.length} · ${t().zoneLevels(base.length)}</div>
      </div>
      <div class="zone-play">▶</div>
    </div>`;
  }).join("");
  // slot "prossimamente" per le zone future
  const soon = `<div class="zone-card soon">
    <div class="zone-meta"><div class="zone-name">?</div>
    <div class="zone-sub">${t().soon}</div></div></div>`;
  app.innerHTML = headerHTML("") + `
    <div class="zones-wrap">
      ${dailyCardHTML()}
      <h1>${t().zonesTitle}</h1>
      <p class="subtitle">${t().zonesSub}</p>
      <div class="zone-grid">${cards}${soon}</div>
    </div>`;
  wireHeader();
  const dc = $("#dailyCard");
  if (dc) dc.onclick = openDaily;
  document.querySelectorAll(".zone-card[data-zone]").forEach((el) =>
    el.onclick = () => renderLevels(S.zones.find((z) => z.id === el.dataset.zone)));
}

/* ---------------- level select ---------------- */
function renderLevels(zone) {
  S.view = "levels";
  S.zone = zone;
  stopTimer();
  const key = (id) => zone.id + ":" + id;
  let cards = "";
  if (zone.tutorial) {
    cards += `<div class="level-card tut ${isDone(key(0)) ? "done" : ""}" data-id="0">
      <div class="lc-top"><span class="num">🎓</span></div>
      <div class="nm">${t().tutCard}</div>
      <div class="lc-bot"><span class="sz">6×6</span></div>
    </div>`;
  }
  const base = zone.levels.filter((l) => !l.bonus);
  const bonus = zone.levels.filter((l) => l.bonus);
  const cardFor = (l, locked) => {
    const df = l.difficulty || 2;
    const bt = bestOf(key(l.id));
    return `<div class="level-card d${df} ${isDone(key(l.id)) ? "done" : ""}
      ${l.bonus ? "bonus" : ""} ${locked ? "locked" : ""}" data-id="${l.id}">
      <div class="lc-top">
        <span class="num">${l.bonus ? "★" : "#" + String(l.id).padStart(2, "0")}</span>
        <span class="diff diff${df}">${"●".repeat(df)}${"○".repeat(3 - df)}</span>
      </div>
      <div class="nm">${locked ? t().bonusLocked
                               : (S.lang === "it" ? l.name_it : l.name_en)}</div>
      <div class="lc-bot"><span class="sz">${l.size}×${l.size}</span>
        <span class="difftext">${bt != null ? "⏱ " + fmtTime(bt) : t().diff[df]}</span></div>
    </div>`;
  };
  cards += base.map((l) => cardFor(l, false)).join("");
  // casi bonus: le griglie piu' grandi, in fondo, chiuse finche' la zona
  // non e' completata
  let bonusBlock = "";
  if (bonus.length) {
    const left = base.filter((l) => !isDone(key(l.id))).length;
    const unlocked = left === 0;
    bonusBlock = `<div class="bonus-sec ${unlocked ? "open" : ""}">
      <h2>${t().bonusTitle} ${unlocked ? `<span class="ok">${t().bonusUnlocked}</span>` : ""}</h2>
      <p class="subtitle">${unlocked ? "" : t().bonusHow(base.length)}</p>
      <div class="level-grid">${bonus.map((l) => cardFor(l, !unlocked)).join("")}</div>
    </div>`;
  }
  app.innerHTML = headerHTML(S.lang === "it" ? zone.name_it : zone.name_en, true) + `
    <div class="home">
      <h1>${S.lang === "it" ? zone.name_it : zone.name_en}</h1>
      <p class="subtitle">${S.lang === "it" ? zone.subtitle_it : zone.subtitle_en}</p>
      <div class="level-grid">${cards}</div>
      ${bonusBlock}
    </div>`;
  wireHeader(renderZones);
  document.querySelectorAll(".level-card").forEach((el) =>
    el.onclick = () => {
      if (el.classList.contains("locked")) {
        modal(t().bonusTitle, t().bonusHow(base.length), [[t().ok, () => {}]]);
        return;
      }
      openLevel(zone, +el.dataset.id);
    });
}

async function openLevel(zone, id) {
  S.zone = zone;
  const meta = zoneLevelList(zone).find((l) => l.id === id);
  S.level = await (await fetch("levels/" + meta.file + "?v=" + BUILD)).json();
  S.placements = {};
  S.candidates = {};
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
function candidatesAt(r, c) {
  const key = r + "," + c;
  return Object.entries(S.candidates)
    .filter(([, cells]) => cells.includes(key))
    .map(([id]) => +id);
}
function cloneCandidates() {
  return Object.fromEntries(
    Object.entries(S.candidates).map(([id, cells]) => [id, [...cells]])
  );
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
  // Ogni click ridisegna tutta la schermata: senza questo, la striscia dei
  // sospettati (e la pagina) tornano a inizio scorrimento e su una griglia
  // grande si perde il segno di dove si stava guardando.
  const keepScroll = {
    strip: $(".mstrip")?.scrollLeft || 0,
    list: $(".suspect-list")?.scrollTop || 0,
    page: window.scrollY || 0,
  };

  // avatar: ritratto (immagine) o fallback iniziale su colore
  const avatarInner = (sp, i) => FACE_IMG[sp.name]
    ? `<img src="${FACE_IMG[sp.name]}" alt="${sp.name}">`
    : sp.name[0];
  const avatarBg = (sp, i) => FACE_IMG[sp.name]
    ? "" : `background:${AVATAR_COLORS[i % AVATAR_COLORS.length]};`;

  // suspect cards
  // ordine di visualizzazione: la vittima sempre per ultima
  const order = L.suspects.map((_, i) => i)
    .sort((a, b) => (a === L.victim ? 1 : 0) - (b === L.victim ? 1 : 0));

  const cards = order.map((i) => {
    const sp = L.suspects[i];
    const clue = L.clues.find((c) => c.suspect === i);
    const placed = S.placements[i] ? "placed" : "";
    const candidateCount = (S.candidates[i] || []).length;
    const sel = S.selected === i ? "selected" : "";
    const vic = clue.victim ? "victim" : "";
    return `<div class="suspect-card ${placed} ${sel} ${vic} ${candidateCount ? "has-candidates" : ""}" data-id="${i}">
      <div class="avatar" style="${avatarBg(sp, i)}">${avatarInner(sp, i)}</div>
      <div class="txt"><div class="nm">${sp.name}</div>
      <div class="clue">${S.lang === "it" ? clue.it : clue.en}</div></div>
      ${candidateCount ? `<span class="candidate-count">${candidateCount}</span>` : ""}
    </div>`;
  }).join("");

  // board
  const labels = roomLabelCells(L);
  const usedR = new Set(), usedC = new Set();
  for (const p of Object.values(S.placements)) {
    if (p) { usedR.add(p[0]); usedC.add(p[1]); }
  }
  const XIMG = `<img src="assets/croce.png" alt="" aria-hidden="true">`;
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
      // linea di griglia interna ben visibile anche sopra la texture
      const bw = (b) => b ? "2px solid #101420" : "1px solid rgba(16,20,32,.38)";
      let inner = "";
      if (f) {
        const a = ASSETS[f.asset];
        inner += a.img
          ? `<img class="furn img ${a.cat === "overlay" ? "overlay" : ""}" src="${a.img}" alt="">`
          : `<span class="furn ${a.cat === "overlay" ? "overlay" : ""}">${a.emoji}</span>`;
      }
      const sid = suspectAt(r, c);
      const provisional = candidatesAt(r, c);
      if (sid !== null) {
        const sp = L.suspects[sid];
        inner += `<span class="pawn ${FACE_IMG[sp.name] ? "hasface" : ""} ${S.wrong.has(sid) ? "wrong" : ""}"
          style="${avatarBg(sp, sid)}">${avatarInner(sp, sid)}</span>`;
      }
      if (provisional.length) {
        inner += `<span class="pencils">${provisional.map((id) => {
          const sp = L.suspects[id];
          return `<span class="pencil" title="${sp.name}" style="${avatarBg(sp, id)}">${avatarInner(sp, id)}</span>`;
        }).join("")}</span>`;
      }
      const blockedCell = f && ASSETS[f.asset].cat === "block";
      if (sid === null && !blockedCell) {
        if (S.marks.has(r + "," + c))
          inner += `<span class="xmark manual">${XIMG}</span>`;
        else if (usedR.has(r) || usedC.has(c))
          inner += `<span class="xmark auto">${XIMG}</span>`;
      }
      const lbl = Object.entries(labels).find(([zz, p]) => +zz === z && p[0] === r && p[1] === c);
      if (lbl) inner += `<span class="room-label">${S.lang === "it" ? def.it : def.en}</span>`;
      const blocked = f && ASSETS[f.asset].cat === "block";
      // texture pavimento: il pattern scorre continuo a coprire la stanza
      // (tile ~3 celle), posizionato in base a riga/colonna della cella
      const tex = FLOOR_IMG[def.key];
      const texStyle = tex
        ? `background-image:url(${tex});background-repeat:repeat;` +
          `background-size:calc(var(--cs) * 3);` +
          `background-position:calc(var(--cs) * ${-c}) calc(var(--cs) * ${-r});`
        : "";
      const fname = f ? (S.lang === "it" ? ASSETS[f.asset].it : ASSETS[f.asset].en) : "";
      cells += `<div class="cell floor-${def.key} ${blocked ? "blocked" : ""} ${sid !== null && f ? "has-pawn-on-object" : ""} ${provisional.length ? "has-pencils" : ""}" data-r="${r}" data-c="${c}"
        ${fname ? `title="${fname}"` : ""}
        style="--floor:${def.color};background-color:${def.color};${texStyle}
        border-top:${bw(bT)};border-left:${bw(bL)};
        border-bottom:${bw(bB)};border-right:${bw(bR)}">${inner}</div>`;
    }
  }

  const allPlaced = L.suspects.every((_, i) => S.placements[i]);
  const nm = S.lang === "it" ? L.name_it : L.name_en;

  // banner tutorial (non vincolante: suggerisce, non obbliga)
  let tutBar = "";
  if (L.tutorial) {
    const T = L.tutorial;
    // il passo corrente deriva dallo stato della griglia: primi passi
    // consecutivi gia' eseguiti (cosi' undo/svuota/aiuto lo riallineano)
    S.tutStep = 0;
    while (S.tutStep < T.steps.length) {
      const st = T.steps[S.tutStep];
      const p = S.placements[st.suspect];
      if (p && p[0] === st.cell[0] && p[1] === st.cell[1]) S.tutStep++;
      else break;
    }
    const txt = S.tutStep === 0 && !Object.keys(S.placements).length
      ? (S.lang === "it" ? T.intro_it : T.intro_en) + "<br><br>" +
        (S.lang === "it" ? T.steps[0].it : T.steps[0].en)
      : S.tutStep < T.steps.length
        ? (S.lang === "it" ? T.steps[S.tutStep].it : T.steps[S.tutStep].en)
        : (S.lang === "it" ? T.outro_it : T.outro_en);
    tutBar = `<div class="tutbar">
      <div class="tut-head"><span class="tag">${t().tutorial}</span>
        <button id="tutSkip">${t().tutSkip}</button></div>
      ${txt}</div>`;
    // suggerisci il sospettato del passo solo se non ne hai selezionato uno
    if (S.selected === null && S.tutStep < T.steps.length
        && !S.placements[T.steps[S.tutStep].suspect])
      S.selected = T.steps[S.tutStep].suspect;
  }

  // striscia avatar (mobile) + indizio del selezionato — vittima per ultima
  const strip = order.map((i) => {
    const sp = L.suspects[i];
    const clue = L.clues.find((c) => c.suspect === i);
    const candidateCount = (S.candidates[i] || []).length;
    return `<div class="mav ${S.selected === i ? "sel" : ""} ${S.placements[i] ? "placed" : ""}
      ${clue.victim ? "victim" : ""}" data-id="${i}">
      <div class="ava" style="${avatarBg(sp, i)}">${avatarInner(sp, i)}</div>
      <div class="nm">${sp.name}</div>
      ${candidateCount ? `<span class="candidate-count">${candidateCount}</span>` : ""}
    </div>`;
  }).join("");
  const selClue = S.selected !== null
    ? (S.lang === "it" ? L.clues.find((c) => c.suspect === S.selected).it
                       : L.clues.find((c) => c.suspect === S.selected).en)
    : t().mPick;

  // pannello indizi generali (griglie grandi)
  let genBar = "";
  let mobileGenBar = "";
  if (L.general_clues && L.general_clues.length) {
    const items = L.general_clues
      .map((g) => `<li>${S.lang === "it" ? g.it : g.en}</li>`).join("");
    genBar = `<div class="genclues">
      <div class="gc-title">🔎 ${t().genClues}</div>
      <ul>${items}</ul></div>`;
    mobileGenBar = `<details class="genclues mobile-genclues" open>
      <summary>🔎 ${t().genClues}</summary>
      <ul>${items}</ul></details>`;
  }

  app.innerHTML = headerHTML(`${nm} (${L.size}×${L.size})`, true) + tutBar + `
  <div class="game ${L.size >= 12 ? "large-grid" : ""}">
    <div class="suspects">
      <h2>${t().suspects}</h2>
      <div class="hint-line">${t().howto}</div>
      ${genBar}
      <div class="suspect-list">${cards}</div>
      <button id="backBtn" style="width:100%;font:inherit;padding:8px;border-radius:8px;
        border:2px solid #c9cdde;background:#fff;cursor:pointer">${t().back}</button>
    </div>
    <div class="board-zone">
      ${mobileGenBar}
      <div class="board-wrap">
        <div class="board" style="--n:${L.size};grid-template-columns:repeat(${L.size},var(--cs))">
          ${cells}
        </div>
      </div>
      <div class="mbar">
        <button id="mCross" class="${S.mode === "cross" ? "active" : ""}">✕<span>${t().mCross}</span></button>
        <button id="mPlace" class="${S.mode === "place" ? "active" : ""}">✔<span>${t().mPlace}</span></button>
        <button id="mPencil" class="${S.mode === "pencil" ? "active pencil-mode" : ""}">✏️<span>${t().mPencil}</span></button>
        <button id="mErase" class="${S.mode === "erase" ? "active" : ""}">🧹<span>${t().mErase}</span></button>
        <button id="mUndo" ${S.history.length ? "" : "disabled"}>↩<span>${t().mUndo}</span></button>
        <button id="mHint">💡<span>${t().mHint} (${Hints.balance(S.zones)})</span></button>
      </div>
      <div class="mstrip">${strip}</div>
      <div class="mclue ${S.selected !== null && L.clues.find((c) => c.suspect === S.selected).victim ? "victim" : ""}">${selClue}</div>
      <button id="msubmitBtn" class="msubmit" ${allPlaced ? "" : "disabled"}>${t().mSubmit}</button>
    </div>
    <div class="tools">
      <button id="pencilBtn" class="${S.mode === "pencil" ? "mode-active" : ""}">${S.mode === "pencil" ? t().pencilOn : t().pencilOff}</button>
      <button id="clearBtn">${t().clear}</button>
      <button id="undoBtn" ${S.history.length ? "" : "disabled"}>${t().undo}</button>
      <button id="hintBtn">${t().hint} (${Hints.balance(S.zones)})</button>
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
  const hb = $("#hback");
  if (hb) hb.onclick = leaveGame;
  $("#backBtn").onclick = leaveGame;
  const skipBtn = $("#tutSkip");
  if (skipBtn) skipBtn.onclick = leaveGame;
  document.querySelectorAll(".mav").forEach((el) =>
    el.onclick = () => {
      S.selected = S.selected === +el.dataset.id ? null : +el.dataset.id;
      S.mode = "place";
      renderGame();
    });
  $("#mCross").onclick = () => { S.mode = "cross"; renderGame(); };
  $("#mPlace").onclick = () => { S.mode = "place"; renderGame(); };
  $("#mPencil").onclick = () => { S.mode = "pencil"; renderGame(); };
  $("#mErase").onclick = () => { S.mode = "erase"; renderGame(); };
  $("#mUndo").onclick = undo;
  $("#mHint").onclick = hint;
  $("#msubmitBtn").onclick = submit;
  $("#pencilBtn").onclick = () => {
    S.mode = S.mode === "pencil" ? "place" : "pencil";
    renderGame();
  };
  $("#clearBtn").onclick = () => {
    S.history.push({ type: "bulk", prev: { ...S.placements },
                     prevCandidates: cloneCandidates(), prevMarks: new Set(S.marks) });
    S.placements = {}; S.candidates = {}; S.marks.clear(); S.wrong.clear(); renderGame();
  };
  $("#undoBtn").onclick = undo;
  $("#hintBtn").onclick = hint;
  $("#submitBtn").onclick = submit;

  // rimette lo scorrimento dov'era prima del ridisegno
  const stripEl = $(".mstrip"), listEl = $(".suspect-list");
  if (stripEl && keepScroll.strip) stripEl.scrollLeft = keepScroll.strip;
  if (listEl && keepScroll.list) listEl.scrollTop = keepScroll.list;
  if (keepScroll.page) window.scrollTo({ top: keepScroll.page });
}

/** Uscita dal gioco: la sfida quotidiana torna alle zone, i casi ai livelli. */
function leaveGame() {
  if (S.zone?.daily) renderZones();
  else renderLevels(S.zone);
}

/** Etichetta al volo col nome dell'oggetto toccato: gli indizi lo chiamano
 *  per nome ("accanto a un calderone") e dal disegno non sempre si indovina. */
let _nameTimer;
function showObjectName(assetId) {
  const a = ASSETS[assetId];
  if (!a) return;
  const txt = S.lang === "it" ? a.it : a.en;
  let el = $("#objname");
  if (!el) {
    el = document.createElement("div");
    el.id = "objname";
    document.body.appendChild(el);
  }
  el.textContent = txt.charAt(0).toUpperCase() + txt.slice(1);
  el.classList.add("show");
  clearTimeout(_nameTimer);
  _nameTimer = setTimeout(() => el.classList.remove("show"), 1600);
}

function cellClick(r, c) {
  const f = furnAt(r, c);
  const here = suspectAt(r, c);
  if (f) showObjectName(f.asset);      // vale su qualsiasi cella con arredo
  S.wrong.clear();
  if (here !== null) {
    if (S.mode === "cross" || S.mode === "pencil") return;
    S.history.push({ type: "remove", id: here, cell: S.placements[here] });
    delete S.placements[here];
    S.selected = S.mode === "erase" ? S.selected : here;
    renderGame();
    return;
  }
  if (f && ASSETS[f.asset].cat === "block") return;
  // modo Croci: segna/dissegna la cella
  if (S.mode === "cross") {
    const k = r + "," + c;
    S.marks.has(k) ? S.marks.delete(k) : S.marks.add(k);
    S.history.push({ type: "mark", cell: k });
    renderGame();
    return;
  }
  // modo Ipotesi: aggiunge/toglie il sospettato in più celle senza creare X
  if (S.mode === "pencil") {
    if (S.selected === null) return;
    const k = r + "," + c;
    const cells = S.candidates[S.selected] || [];
    const added = !cells.includes(k);
    S.history.push({ type: "candidate", id: S.selected, cell: k, added });
    if (added) S.candidates[S.selected] = [...cells, k];
    else {
      const next = cells.filter((cell) => cell !== k);
      if (next.length) S.candidates[S.selected] = next;
      else delete S.candidates[S.selected];
    }
    renderGame();
    return;
  }
  // modo Cancella: togli il segno (i pedoni sono gestiti sopra da `here`)
  if (S.mode === "erase") {
    const k = r + "," + c;
    const provisional = candidatesAt(r, c);
    if (provisional.length) {
      S.history.push({ type: "eraseCandidates", cell: k,
        prev: Object.fromEntries(provisional.map((id) => [id, [...S.candidates[id]]])) });
      provisional.forEach((id) => {
        S.candidates[id] = S.candidates[id].filter((cell) => cell !== k);
        if (!S.candidates[id].length) delete S.candidates[id];
      });
      renderGame();
      return;
    }
    if (S.marks.has(k)) {
      S.marks.delete(k);
      S.history.push({ type: "mark", cell: k });
      renderGame();
    }
    return;
  }
  if (S.selected === null) {
    // nessun sospettato selezionato: segna/dissegna la cella come esclusa
    const k = r + "," + c;
    S.marks.has(k) ? S.marks.delete(k) : S.marks.add(k);
    S.history.push({ type: "mark", cell: k });
    renderGame();
    return;
  }
  const prev = S.placements[S.selected] || null;
  const prevCandidates = [...(S.candidates[S.selected] || [])];
  S.history.push({ type: "place", id: S.selected, prev, prevCandidates });
  S.marks.delete(r + "," + c);
  S.placements[S.selected] = [r, c];
  delete S.candidates[S.selected];
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
    if (h.prevCandidates?.length) S.candidates[h.id] = h.prevCandidates;
    else delete S.candidates[h.id];
  } else if (h.type === "remove") {
    S.placements[h.id] = h.cell;
  } else if (h.type === "bulk") {
    S.placements = h.prev;
    S.candidates = h.prevCandidates || {};
    if (h.prevMarks) S.marks = h.prevMarks;
  } else if (h.type === "mark") {
    S.marks.has(h.cell) ? S.marks.delete(h.cell) : S.marks.add(h.cell);
  } else if (h.type === "candidate") {
    const cells = S.candidates[h.id] || [];
    if (h.added) {
      const next = cells.filter((cell) => cell !== h.cell);
      if (next.length) S.candidates[h.id] = next;
      else delete S.candidates[h.id];
    } else {
      S.candidates[h.id] = [...cells, h.cell];
    }
  } else if (h.type === "eraseCandidates") {
    Object.entries(h.prev).forEach(([id, cells]) => { S.candidates[id] = cells; });
  }
  renderGame();
}

/** Il prossimo passo della catena deduttiva non ancora eseguito dal giocatore.
 *  Non e' "un sospettato a caso": e' quello che ORA si può dedurre, con la
 *  sua spiegazione. Se il livello non ha catena (o è finita) si ripiega sul
 *  primo sospettato fuori posto, senza spiegazione. */
function nextStep() {
  const L = S.level;
  const done = (i, cell) => {
    const p = S.placements[i];
    return p && p[0] === cell[0] && p[1] === cell[1];
  };
  for (const st of L.steps || []) {
    if (!done(st.suspect, st.cell)) return st;
  }
  for (let i = 0; i < L.suspects.length; i++) {
    if (!done(i, L.solution[i]))
      return { suspect: i, cell: L.solution[i], fallback: true };
  }
  return null;
}

function applyStep(st) {
  const occ = suspectAt(st.cell[0], st.cell[1]);   // libera la casella
  if (occ !== null && occ !== st.suspect) delete S.placements[occ];
  S.history.push({ type: "place", id: st.suspect,
    prev: S.placements[st.suspect] || null,
    prevCandidates: [...(S.candidates[st.suspect] || [])] });
  S.placements[st.suspect] = [st.cell[0], st.cell[1]];
  delete S.candidates[st.suspect];
  S.selected = null;
}

function hint() {
  const st = nextStep();
  if (!st) return;
  if (!Hints.spend(S.zones)) return hintShop();   // saldo a zero
  applyStep(st);
  renderGame();
  const nm = S.level.suspects[st.suspect].name;
  const why = st.fallback
    ? t().hintNoWhy
    : (S.lang === "it" ? st.it : st.en);
  modal(t().hintTitle(nm), why + `<br><span class="hintleft">${
    t().hintLeft(Hints.balance(S.zones))}</span>`, [[t().ok, () => {}]]);
}

/** Finiti gli aiuti: annuncio (in arrivo) o acquisto. */
function hintShop() {
  const left = Hints.adsLeftToday();
  const packs = HINT_RULES.packs.map((p) =>
    `<li><b>${p.hints}</b> ${t().hintsWord}${p.badge ? ` <em>${p.badge}</em>` : ""}</li>`
  ).join("");
  modal(t().hintShopTitle, `${t().hintShopBody}
    <div class="shop">
      <button id="adBtn" ${left > 0 ? "" : "disabled"}>${
        left > 0 ? t().hintAd(left) : t().hintAdOut}</button>
      <ul class="packs">${packs}</ul>
      <span class="soonlabel">${t().soon}</span>
    </div>`, [[t().ok, () => {}]]);
  const ad = $("#adBtn");
  if (ad) ad.onclick = () => {
    // qui andra' la rete pubblicitaria: per ora l'aiuto viene accreditato
    // subito, cosi' il flusso e' testabile end-to-end
    if (Hints.grantFromAd()) {
      document.querySelector(".modal-bg")?.remove();
      renderGame();
      modal(t().hintGotTitle, t().hintGot(Hints.balance(S.zones)), [[t().ok, () => {}]]);
    }
  };
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
    const ms = S.t0 ? Date.now() - S.t0 : null;
    const rec = Profile.recordSolve(S.zone.id + ":" + L.id, ms ?? 0);
    const m = L.suspects[L.murderer].name;
    const ids = zoneLevelList(S.zone).map((l) => l.id);
    const pos = ids.indexOf(L.id);
    const nextId = pos >= 0 && pos < ids.length - 1 ? ids[pos + 1] : null;
    let timeLine = ms == null ? "" :
      `<br><span class="wintime">${t().winTime(fmtTime(ms))}</span>` +
      (rec.isRecord && !rec.first ? `<br><span class="winrec">${t().winRecord}</span>` : "");
    if (S.zone.daily) {
      // la sfida del giorno premia la costanza: mostra la serie aggiornata
      const st = Profile.dailyStats(todayString());
      timeLine += `<br><span class="winrec">${t().dailyStreak(st.streak)}</span>`;
    }
    modal(t().winTitle, t().winBody(m) + timeLine, [
      [S.zone.daily ? t().homeZones : t().home, leaveGame],
      ...(nextId === null ? [] : [[t().next, () => openLevel(S.zone, nextId)]]),
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
