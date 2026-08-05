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
    tutAskTitle: "Prima indagine?",
    tutAskBody: "Un caso guidato che insegna le regole in due minuti. Si fa una volta sola, e puoi saltarlo.",
    tutAskGo: "Fai il tutorial", tutAskSkip: "Salta",
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
    pAnon: "I progressi sono già al sicuro su questo dispositivo. Collega un account per ritrovarli anche altrove.",
    pLinkGoogle: "Collega Google", pLinkApple: "Collega Apple",
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
    pgPrev: "‹ Precedenti", pgNext: "Successivi ›",
    pgOf: (a, b) => `Pagina ${a} di ${b}`,
    pgRange: (a, b) => `Casi ${a}–${b}`,
    ratingTip: "Quanto è tosto rispetto a tutti i casi del gioco (1-100)",
    againTitle: "L'hai già risolto",
    againBody: (tm) => `Il tuo tempo è ${tm}. Puoi rigiocarlo: il cronometro riparte, ma il tempo che conta resta il primo.`,
    againOk: "Rigioca", replayNote: "Ripetizione · il record non cambia",
    rules: "Come si gioca", rulesBtn: "📖 Regole",
    privacy: "Informativa sulla privacy",
    loginErrTitle: "Accesso non riuscito",
    loginErrBody: (c) => `Il collegamento dell'account non è andato a buon fine.<br><br><code>${c}</code><br><br>I tuoi progressi non sono stati toccati.`,
    adLoading: "Carico il video…",
    adSkipTitle: "Video non completato",
    adSkipBody: "Il premio si sblocca guardando il video fino alla fine.",
    sound: "Suoni", music: "Musica",
    tipTitle: "Novità in questo caso",
    tipDont: "Non mostrare più", gotIt: "Ho capito",
    tip9: "Da 9×9 in su cambiano due cose. Ogni sospettato può avere <b>più di un indizio</b>, uniti in una frase sola. E compaiono gli <b>indizi generali</b>: non parlano di una persona ma contano quante ne sono in una stanza, in una metà della mappa, sedute o accanto a un oggetto. Servono eccome: spesso è da lì che riparte la deduzione quando sembri bloccato.",
    tip12: "Da 12×12 la griglia non ci sta più tutta comoda: si scorre, e la barra in basso resta sempre raggiungibile. Consiglio pratico: usa le <b>ipotesi</b> (✏️) invece di piazzare e togliere. Con un sospettato selezionato, le celle dove l'hai ipotizzato si accendono di verde.",
    tip15: "I casi bonus sono 15×15 e 16×16, le griglie più grandi del gioco. Nessuna regola nuova, solo molto più da tenere insieme: prenditi il tempo e appoggiati alle ipotesi.",
    bands: { principiante: "Principiante", medio: "Medio",
             esperto: "Esperto", maestro: "Maestro" },
    bandLocked: "Chiudi le fasce Esperto e Maestro per sbloccare i bonus",
    resetLevel: "↺ Ricomincia", resetTitle: "Ricominciare il caso?",
    resetBody: "La griglia torna vuota. Il cronometro NON si azzera: continua da dov'è.",
    resetOk: "Ricomincia", cancel: "Annulla",
    leaveTitle: "Sei sicuro di voler uscire?",
    leaveBody: "Questo bloccherà il timer finché non torni a questo livello, ma non azzererà i tuoi progressi.",
    leaveOk: "Esci", stay: "Resta",
    archive: "Sfide passate", archiveSub: "Tutte le sfide quotidiane finora",
    archiveOpen: "📅 Sfide passate",
    archiveToday: "Oggi", archiveDone: "Risolta ✓", archiveMissed: "Persa",
    archiveRecover: "🎬 Recupera con un video",
    recoverTitle: "Recuperare questa sfida?",
    recoverBody: "Guarda un breve video e potrai giocare la sfida di quel giorno.",
    recovered: "Recuperata",
    badges: "Distintivi", badgesSub: (a, b) => `${a} di ${b}`,
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
    tutAskTitle: "First case?",
    tutAskBody: "A guided case that teaches the rules in two minutes. You only do it once, and you can skip it.",
    tutAskGo: "Take the tutorial", tutAskSkip: "Skip",
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
    pAnon: "Your progress is already safe on this device. Link an account to find it elsewhere too.",
    pLinkGoogle: "Link Google", pLinkApple: "Link Apple",
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
    pgPrev: "‹ Previous", pgNext: "Next ›",
    pgOf: (a, b) => `Page ${a} of ${b}`,
    pgRange: (a, b) => `Cases ${a}–${b}`,
    ratingTip: "How tough it is compared with every case in the game (1-100)",
    againTitle: "You already solved this",
    againBody: (tm) => `Your time is ${tm}. You can replay it: the clock restarts, but the time that counts stays the first one.`,
    againOk: "Replay", replayNote: "Replay · your record won't change",
    rules: "How to play", rulesBtn: "📖 Rules",
    privacy: "Privacy policy",
    loginErrTitle: "Sign-in failed",
    loginErrBody: (c) => `Linking the account didn't work.<br><br><code>${c}</code><br><br>Your progress is untouched.`,
    adLoading: "Loading the video…",
    adSkipTitle: "Video not finished",
    adSkipBody: "The reward unlocks by watching the video to the end.",
    sound: "Sound", music: "Music",
    tipTitle: "New in this case",
    tipDont: "Don't show again", gotIt: "Got it",
    tip9: "From 9×9 on, two things change. A suspect can have <b>more than one clue</b>, merged into a single sentence. And <b>general clues</b> appear: they don't name anyone, they count how many people are in a room, in half the map, seated, or beside an object. They matter — that's often where the deduction restarts when you feel stuck.",
    tip12: "From 12×12 the grid no longer fits comfortably: it scrolls, and the bottom bar stays reachable. Practical tip: use <b>notes</b> (✏️) instead of placing and removing. With a suspect selected, the squares where you noted them light up green.",
    tip15: "Bonus cases are 15×15 and 16×16, the biggest grids in the game. No new rules, just much more to hold together: take your time and lean on notes.",
    bands: { principiante: "Beginner", medio: "Medium",
             esperto: "Expert", maestro: "Master" },
    bandLocked: "Clear the Expert and Master tiers to unlock the bonus cases",
    resetLevel: "↺ Restart", resetTitle: "Restart the case?",
    resetBody: "The grid goes back to empty. The clock does NOT reset: it keeps going.",
    resetOk: "Restart", cancel: "Cancel",
    leaveTitle: "Are you sure you want to leave?",
    leaveBody: "This will pause the timer until you come back to this level, but it will not reset your progress.",
    leaveOk: "Leave", stay: "Stay",
    archive: "Past challenges", archiveSub: "Every daily challenge so far",
    archiveOpen: "📅 Past challenges",
    archiveToday: "Today", archiveDone: "Solved ✓", archiveMissed: "Missed",
    archiveRecover: "🎬 Recover with a video",
    recoverTitle: "Recover this challenge?",
    recoverBody: "Watch a short video and you can play that day's challenge.",
    recovered: "Recovered",
    badges: "Badges", badgesSub: (a, b) => `${a} of ${b}`,
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
  done: false,             // caso appena risolto in questa sessione
  replay: false,           // ripetizione: il cronometro e' solo estetico
  tutStep: 0, tutFlash: false,
  mode: "place",           // place | pencil | cross | erase
  t0: null, timerInt: null,
  base: 0,                 // ms gia' accumulati su questo caso prima di ora
  profileBack: "zones",    // dove torna il ‹ dal profilo
  pages: {},               // "zona:fascia" -> pagina della lista casi
  bands: {},               // zona -> fascia di difficolta' aperta
};

// casi per pagina nella lista di una zona (4 colonne x 6 righe da desktop)
const PAGE_SIZE = 24;

const $ = (sel) => document.querySelector(sel);
const t = () => I18N[S.lang];
const app = $("#app");

// progressi: li tiene Profile (profile.js), qui solo le viste
const isDone = (key) => Profile.solved(key);
const bestOf = (key) => Profile.best(key);

// il cloud puo' rispondere in ritardo: quando arriva, ridisegna la vista
// gli errori di login vanno mostrati: su un telefono la console non la legge
// nessuno, e un bottone che "non fa niente" e' il peggior messaggio possibile
Profile.onAuthError = (code) => modal(t().loginErrTitle, t().loginErrBody(code),
                                      [[t().ok, () => {}]]);

Profile.onChange = () => {
  if (S.view === "profile") renderProfile();
  else if (S.view === "zones") renderZones();
  else if (S.view === "levels") renderLevels(S.zone);
};

const BUILD = "63";

async function boot() {
  // l'interruttore della musica compare solo se un brano c'e' davvero:
  // un bottone che non fa niente e' peggio di nessun bottone
  // si controlla il tema del menu: e' il primo che suona, e se manca quello
  // manca tutto
  Audio.has("menu").then((v) => { S.musicAvail = v; });
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

/** La sfida di un giorno qualsiasi, con la stessa formula di `dailyToday`. */
function dailyOf(day) {
  if (!S.daily || !S.daily.levels?.length) return null;
  const n = dayNumber(day) - dayNumber(S.daily.epoch);
  if (n < 0) return null;
  const list = S.daily.levels;
  return { day, entry: list[((n % list.length) + list.length) % list.length],
           key: Profile.dailyKey(day) };
}

/** Elenco di tutte le sfide esistite, dalla piu' recente. */
function dailyArchive() {
  const oggi = todayString();
  const primo = dayNumber(S.daily?.epoch || oggi);
  const out = [];
  for (let d = dayNumber(oggi); d >= primo; d--) out.push(dayString(d));
  return out;
}

function renderArchive() {
  if (!S.daily) return renderZones();
  S.view = "archive";
  stopTimer();
  const oggi = todayString();
  const righe = dailyArchive().map((day) => {
    const dd = dailyOf(day);
    if (!dd) return "";
    const fatta = Profile.solved(dd.key);
    const best = Profile.best(dd.key);
    const recuperabile = day !== oggi && !fatta;
    const sbloccata = !recuperabile || Profile.isRecovered(day);
    const stato = fatta ? `<span class="ar-done">${t().archiveDone}</span>`
      : day === oggi ? `<span class="ar-today">${t().archiveToday}</span>`
      : sbloccata ? `<span class="ar-open">${t().recovered}</span>`
      : `<span class="ar-missed">${t().archiveMissed}</span>`;
    return `<div class="ar-row ${fatta ? "done" : ""}" data-day="${day}">
      <div class="ar-day">${dailyLabel(day)}</div>
      <div class="ar-meta">${dd.entry.size}×${dd.entry.size}${
        best != null ? " · ⏱ " + fmtTime(best) : ""}</div>
      <div class="ar-state">${stato}</div>
      <button class="ar-btn" data-day="${day}" data-lock="${sbloccata ? "" : "1"}">${
        sbloccata ? t().dailyPlay : t().archiveRecover}</button>
    </div>`;
  }).join("");

  app.innerHTML = headerHTML(t().archive, true) + `
    <div class="home">
      <h1>${t().archive}</h1>
      <p class="subtitle">${t().archiveSub}</p>
      <div class="archive">${righe}</div>
    </div>`;
  wireHeader(renderZones);
  document.querySelectorAll(".ar-btn").forEach((el) => el.onclick = () => {
    const day = el.dataset.day;
    if (!el.dataset.lock) return openDaily(day);
    modal(t().recoverTitle, t().recoverBody, [
      [t().archiveRecover, async () => {
        const visto = await Ads.rewarded();
        if (!visto) return modal(t().adSkipTitle, t().adSkipBody, [[t().ok, () => {}]]);
        Profile.recover(day);
        renderArchive();
      }],
      [t().cancel, () => {}],
    ]);
  });
}

async function openDaily(day) {
  const dd = day ? dailyOf(day) : dailyToday();
  if (!dd) return;
  S.zone = { id: "daily", name_it: t().daily, name_en: t().daily,
             levels: [], daily: true };
  S.level = await (await fetch("levels/" + dd.entry.file + "?v=" + BUILD)).json();
  S.level.id = dd.day;                 // la chiave del progresso è la data
  S.level.name_it = S.level.name_en = t().dailyTitle(dailyLabel(dd.day));
  S.placements = {}; S.candidates = {}; S.marks = new Set();
  S.selected = null; S.history = []; S.wrong = new Set();
  S.tutStep = 0; S.tutFlash = false;
  S.base = Profile.run("daily:" + S.level.id);
  restoreDraft("daily:" + S.level.id);
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
  </div>
  <div class="home-links">
    <button class="archive-link" id="archiveBtn">${t().archiveOpen}</button>
    <button class="archive-link" id="rulesBtn">${t().rulesBtn}</button>
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
// L'emoji 👤 la colora il sistema operativo e non si puo' rendere bianca:
// serve un disegno nostro, che prende il colore dal bottone (currentColor).
const PERSON_ICON = `<svg class="picon" viewBox="0 0 24 24" aria-hidden="true">
  <circle cx="12" cy="8" r="4"/>
  <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>`;

function headerHTML(sub, backTo) {
  return `<header>
    ${backTo ? `<button class="hback" id="hback">‹</button>` : ""}
    <div class="logo">SUS<span>oku</span></div>
    <div class="sub">${sub || ""}</div>
    <div class="spacer"></div>
    <span id="timer"></span>
    <button class="hinstall" id="hinstall" hidden
      title="${S.lang === "it" ? "Installa l'app" : "Install app"}">⇩</button>
    <button class="hprofile" id="hprofile" title="${t().profile}">${
      Profile.user?.photo
        ? `<img src="${Profile.user.photo}" alt="">`
        : PERSON_ICON}</button>
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
  wireInstallButton();
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

  const bl = Badges.list(S.zones);
  const presi = bl.filter((b) => b.ok).length;
  const badgeBlock = `<div class="pcard badges">
      <h2>${t().badges} <span class="bg-count">${t().badgesSub(presi, bl.length)}</span></h2>
      <div class="bg-grid">${bl.map(({ def, ok }) => `
        <div class="bg ${ok ? "on" : ""}" title="${S.lang === "it" ? def.itDesc : def.enDesc}">
          <span class="bg-ico">${ok ? def.icon : "🔒"}</span>
          <span class="bg-nm">${S.lang === "it" ? def.it : def.en}</span>
        </div>`).join("")}</div>
    </div>`;

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
  } else if (u && !u.anon) {
    account = `<p class="pnote">${t().pSignedAs(u.name)}</p>
      <div class="pbtns"><button id="signOut" class="alt">${t().pSignOut}</button></div>`;
  } else if (u && u.anon) {
    // gia' salvato in cloud, ma senza un account non lo ritrova nessun altro
    // dispositivo: il collegamento mantiene lo stesso uid e quindi i progressi
    account = `<p class="pnote">${t().pAnon}</p>
      <div class="pbtns">
        <button id="signGoogle">${t().pLinkGoogle}</button>
        <button id="signApple" class="alt">${t().pLinkApple}</button>
      </div>`;
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
      <div class="pcard">
        <h2>${t().sound}</h2>
        <div class="sw-row">
          <label class="sw"><input type="checkbox" id="sfxSw" ${Audio.sfxOn ? "checked" : ""}>
            <span>${t().sound}</span></label>
          <label class="sw ${S.musicAvail ? "" : "off"}">
            <input type="checkbox" id="musSw" ${Audio.musicOn ? "checked" : ""}
              ${S.musicAvail ? "" : "disabled"}>
            <span>${t().music}${S.musicAvail ? "" : " —"}</span></label>
        </div>
      </div>
      ${badgeBlock}
      <div class="pstats">
        ${stat(t().pSolved, `${tot.solved}<small>/${tot.available}</small>`)}
        ${stat(t().pTime, fmtTime(tot.totalMs))}
        ${stat(t().pAvg, tot.timed ? fmtTime(tot.avgMs) : "—")}
      </div>
      ${dl.solved || dl.streak ? `<div class="pcard"><h2>${t().pDaily}</h2>
        <div class="pcard">
        <h2>${t().sound}</h2>
        <div class="sw-row">
          <label class="sw"><input type="checkbox" id="sfxSw" ${Audio.sfxOn ? "checked" : ""}>
            <span>${t().sound}</span></label>
          <label class="sw ${S.musicAvail ? "" : "off"}">
            <input type="checkbox" id="musSw" ${Audio.musicOn ? "checked" : ""}
              ${S.musicAvail ? "" : "disabled"}>
            <span>${t().music}${S.musicAvail ? "" : " —"}</span></label>
        </div>
      </div>
      ${badgeBlock}
      <div class="pstats">
          ${stat(t().pDaily, dl.solved)}
          ${stat(t().pStreak, dl.streak ? "🔥 " + dl.streak : "—")}
          ${stat(t().pBestStreak, dl.bestStreak || "—")}
        </div></div>` : ""}
      <div class="pcard"><h2>${t().zonesTitle}</h2>${zoneRows}</div>
      <div class="pcard"><h2>${t().pBest}</h2>
        ${bestList ? `<ul class="pbest">${bestList}</ul>`
                   : `<p class="pnote">${t().pNothing}</p>`}</div>
      <div class="pcard">${account}
        <p class="privacy-link"><a href="privacy.html" target="_blank" rel="noopener">${t().privacy}</a></p>
      </div>
    </div>`;
  wireHeader();
  const hb = $("#hback");
  if (hb) hb.onclick = () =>
    S.profileBack === "levels" && S.zone ? renderLevels(S.zone) : renderZones();
  const sfx = $("#sfxSw");
  if (sfx) sfx.onchange = () => { Audio.sfxOn = sfx.checked; Audio.play("pick"); };
  const mus = $("#musSw");
  if (mus) mus.onchange = () => {
    Audio.musicOn = mus.checked;
    if (mus.checked) Audio.start(S.zone?.theme || "menu");
    else Audio.stop();
  };
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
  // fuori dalle zone suona il tema del menu, non il silenzio: `menu` e' un
  // tema finto, un file come gli altri in assets/audio/
  Audio.start("menu");
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
  const ab = $("#archiveBtn");
  if (ab) ab.onclick = renderArchive;
  const rb = $("#rulesBtn");
  if (rb) rb.onclick = renderRules;
  const dc = $("#dailyCard");
  if (dc) dc.onclick = () => openDaily();
  document.querySelectorAll(".zone-card[data-zone]").forEach((el) =>
    el.onclick = () => renderLevels(S.zones.find((z) => z.id === el.dataset.zone)));
  offriTutorial();
}

/** Il tutorial si propone QUI, prima della scelta della zona. Stava dentro la
 *  prima zona, e chi ne apriva un'altra non lo vedeva mai — cioe' quasi
 *  nessuno, visto che le zone si scelgono a gusto e non in ordine. Si chiede
 *  una volta sola: chi salta non se lo ritrova a ogni avvio. */
function offriTutorial() {
  if (Profile.tutAsked()) return;
  const zt = S.zones.find((z) => z.tutorial);
  if (!zt || isDone(zt.id + ":0")) return;
  Profile.markTutAsked();
  modal(t().tutAskTitle, t().tutAskBody, [
    [t().tutAskSkip, () => {}],
    [t().tutAskGo, () => openLevel(zt, 0)],
  ]);
}

/* ---------------- level select ---------------- */
function renderLevels(zone) {
  S.view = "levels";
  S.zone = zone;
  Audio.start(zone.theme);
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
    // in basso la fascia, con le stesse parole delle schede in cima
    // (Principiante/Medio/Esperto/Maestro): due vocabolari per la stessa cosa
    // costringevano a tradurre a mente
    const fascia = t().bands[l.band] || t().diff[df];
    return `<div class="level-card d${df} ${isDone(key(l.id)) ? "done" : ""}
      ${l.bonus ? "bonus" : ""} ${locked ? "locked" : ""}" data-id="${l.id}">
      <div class="lc-top">
        <span class="num">${l.bonus ? "★" : "#" + String(l.id).padStart(2, "0")}</span>
      </div>
      <div class="nm">${locked ? t().bonusLocked
                               : (S.lang === "it" ? l.name_it : l.name_en)}</div>
      <div class="lc-bot"><span class="sz">${l.size}×${l.size}</span>
        <span class="difftext">${bt != null ? "⏱ " + fmtTime(bt) : fascia}</span></div>
    </div>`;
  };

  // Fasce: i casi crescono di griglia, e mescolare un 6x6 e un 14x14 nella
  // stessa lista non aiuta nessuno. L'ordine e' quello degli id, che dopo la
  // rinumerazione e' gia' per difficolta' crescente.
  const bandsOrder = ["principiante", "medio", "esperto", "maestro"];
  const byBand = {};
  for (const l of base) (byBand[l.band || "principiante"] ??= []).push(l);
  const bandDone = (b) => (byBand[b] || []).every((l) => isDone(key(l.id)));
  // i bonus si aprono chiudendo le due fasce piu' toste
  const unlocked = bandDone("esperto") && bandDone("maestro");

  if (S.bands[zone.id] == null || !byBand[S.bands[zone.id]]) {
    // si apre sulla prima fascia non ancora finita
    S.bands[zone.id] = bandsOrder.find((b) => byBand[b]?.length && !bandDone(b))
                       || bandsOrder.find((b) => byBand[b]?.length);
  }
  const band = S.bands[zone.id];
  const inBand = byBand[band] || [];

  const tabs = bandsOrder.filter((b) => byBand[b]?.length).map((b) => {
    const list = byBand[b];
    const done = list.filter((l) => isDone(key(l.id))).length;
    return `<button class="band-tab ${b === band ? "on" : ""} ${
      done === list.length ? "full" : ""}" data-band="${b}">
      <span class="bt-name">${t().bands[b]}</span>
      <span class="bt-n">${done}/${list.length}</span>
    </button>`;
  }).join("");

  // dentro la fascia la paginazione resta, ma quasi sempre basta una pagina
  const pages = Math.max(1, Math.ceil(inBand.length / PAGE_SIZE));
  const pkey = zone.id + ":" + band;
  if (S.pages[pkey] == null) {
    const nextIdx = inBand.findIndex((l) => !isDone(key(l.id)));
    S.pages[pkey] = nextIdx < 0 ? 0 : Math.floor(nextIdx / PAGE_SIZE);
  }
  const page = Math.min(S.pages[pkey], pages - 1);
  S.pages[pkey] = page;
  const shown = inBand.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  cards += shown.map((l) => cardFor(l, false)).join("");

  let pager = "";
  if (pages > 1) {
    const dots = Array.from({ length: pages }, (_, i) =>
      `<button class="pg-dot ${i === page ? "on" : ""}" data-page="${i}">${i + 1}</button>`).join("");
    pager = `<div class="pager">
      <button class="pg-arrow" id="pgPrev" ${page === 0 ? "disabled" : ""}>${t().pgPrev}</button>
      <div class="pg-dots">${dots}</div>
      <button class="pg-arrow" id="pgNext" ${page === pages - 1 ? "disabled" : ""}>${t().pgNext}</button>
      <div class="pg-info">${t().pgOf(page + 1, pages)} · ${
        t().pgRange(shown[0].id, shown[shown.length - 1].id)}</div>
    </div>`;
  }

  let bonusBlock = "";
  if (bonus.length) {
    bonusBlock = `<div class="bonus-sec ${unlocked ? "open" : ""}">
      <h2>${t().bonusTitle} ${unlocked ? `<span class="ok">${t().bonusUnlocked}</span>` : ""}</h2>
      <p class="subtitle">${unlocked ? "" : t().bandLocked}</p>
      <div class="level-grid">${bonus.map((l) => cardFor(l, !unlocked)).join("")}</div>
    </div>`;
  }

  app.innerHTML = headerHTML(S.lang === "it" ? zone.name_it : zone.name_en, true) + `
    <div class="home">
      <h1>${S.lang === "it" ? zone.name_it : zone.name_en}</h1>
      <p class="subtitle">${S.lang === "it" ? zone.subtitle_it : zone.subtitle_en}</p>
      <div class="band-tabs">${tabs}</div>
      <div class="level-grid">${cards}</div>
      ${pager}
      ${bonusBlock}
    </div>`;
  wireHeader(renderZones);
  document.querySelectorAll(".band-tab").forEach((el) =>
    el.onclick = () => { S.bands[zone.id] = el.dataset.band; renderLevels(zone); });
  const goPage = (p) => {
    S.pages[pkey] = Math.max(0, Math.min(p, pages - 1));
    renderLevels(zone);
    // si riparte dall'inizio della lista: restare a meta' pagina dopo aver
    // cambiato pagina disorienta
    document.querySelector(".level-grid")?.scrollIntoView({ block: "start" });
  };
  $("#pgPrev")?.addEventListener("click", () => goPage(page - 1));
  $("#pgNext")?.addEventListener("click", () => goPage(page + 1));
  document.querySelectorAll(".pg-dot").forEach((el) =>
    el.onclick = () => goPage(+el.dataset.page));
  document.querySelectorAll(".level-card").forEach((el) =>
    el.onclick = () => {
      if (el.classList.contains("locked")) {
        modal(t().bonusTitle, t().bandLocked, [[t().ok, () => {}]]);
        return;
      }
      openLevel(zone, +el.dataset.id);
    });
}

async function openLevel(zone, id, replay) {
  const key = zone.id + ":" + id;
  // caso gia' chiuso: si puo' rigiocare, ma il tempo buono resta il primo —
  // se no basterebbe ripetere un caso che si sa gia' risolvere per farsi il
  // record, e la classifica di domani nascerebbe gia' falsa
  if (!replay && Profile.solved(key)) {
    const bt = Profile.best(key);
    return modal(t().againTitle, t().againBody(bt != null ? fmtTime(bt) : "—"), [
      [t().againOk, () => openLevel(zone, id, true)],
      [t().cancel, () => {}],
    ]);
  }
  const meta0 = zoneLevelList(zone).find((l) => l.id === id);
  if (meta0 && !S._tipDone) {
    return maybeTip(meta0.size, () => {
      S._tipDone = true;
      openLevel(zone, id, replay).finally(() => { S._tipDone = false; });
    });
  }
  S.zone = zone;
  S.replay = !!replay;
  S.done = false;
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
  S.base = Profile.run(zone.id + ":" + S.level.id);
  restoreDraft(zone.id + ":" + S.level.id);
  S.t0 = Date.now();
  renderGame();
  startTimer();
}

/* ---------------- avvisi e regole ---------------- */
const TIPS_KEY = "cm_tips";        // fasce gia' viste, o "off" per zittirli

function tipsState() {
  try { return JSON.parse(localStorage.getItem(TIPS_KEY) || "[]"); }
  catch { return []; }
}

/** Mostra una volta sola l'avviso della fascia, la prima volta che ci si
 *  arriva. Il tutorial copre le basi, non i formati che compaiono dopo: senza
 *  questo, chi apre il primo 9x9 trova gli indizi generali senza spiegazione. */
function maybeTip(size, then) {
  const st = tipsState();
  const tier = size >= 15 ? "15" : size >= 12 ? "12" : size >= 9 ? "9" : null;
  if (!tier || st.includes("off") || st.includes(tier)) return then();
  const salva = () => {
    const cur = tipsState();
    if (!cur.includes(tier)) cur.push(tier);
    localStorage.setItem(TIPS_KEY, JSON.stringify(cur));
  };
  modal(t().tipTitle, t()["tip" + tier], [
    [t().gotIt, () => { salva(); then(); }],
    [t().tipDont, () => {
      localStorage.setItem(TIPS_KEY, JSON.stringify(["off"]));
      then();
    }],
  ]);
}

function rulesHTML() {
  const it = S.lang === "it";
  const R = it ? [
    ["L'obiettivo", "In ogni caso c'è una vittima e un assassino. Devi capire <b>dove si trovava ciascun sospettato</b> al momento del delitto: quando la disposizione è quella giusta, l'assassino salta fuori da solo."],
    ["La griglia", "La mappa è divisa in <b>stanze</b> colorate. Ogni sospettato occupa una casella, e vale una regola ferrea: <b>uno per riga e uno per colonna</b>, come in un sudoku. Le caselle occupate da un ingombro (un armadio, una statua) non sono calpestabili."],
    ["La vittima", "La vittima era <b>sola con l'assassino</b>: nella sua stanza c'è lei e una persona sola, ed è il colpevole. La sua carta è marcata e il suo indizio lo dice."],
    ["Gli indizi", "Ogni sospettato ha almeno un indizio, che parla di righe, colonne, stanze, oggetti vicini, o della posizione rispetto a un altro (\"due righe a nord di Bruno\"). Sono <b>tutti veri</b> e insieme bastano: la soluzione è sempre una sola e si trova per deduzione, mai tirando a indovinare."],
    ["Indizi generali", "Dal 9×9 in su compaiono indizi che non nominano nessuno ma <b>contano</b>: quante persone in una stanza, in una metà della mappa, sedute, o accanto a un certo oggetto. Sono nel pannello a parte."],
    ["Gli strumenti", "<b>Piazza</b> mette il sospettato selezionato. <b>Croci</b> segna le caselle che hai escluso. <b>Ipotesi</b> (✏️) appunta un sospettato in più caselle senza deciderlo: selezionandolo, le sue ipotesi si accendono. <b>Cancella</b>, <b>Annulla</b> e <b>Ricomincia</b> tornano indietro — Ricomincia svuota la griglia ma non il cronometro."],
    ["Gli aiuti", "Un aiuto <b>piazza il prossimo sospettato deducibile e spiega perché</b>: non è una risposta a caso, è il passo che avresti dovuto fare. Se ne guadagnano risolvendo la sfida del giorno e completando le zone."],
    ["Fasce e bonus", "I 100 casi di una zona sono divisi in Principiante, Medio, Esperto e Maestro, per dimensione crescente. Chiudendo Esperto e Maestro si aprono i <b>5 casi bonus</b>, i più grandi."],
    ["Il punteggio 1-100", "Il numero sull'angolo della card dice quanto è tosto quel caso <b>rispetto a tutti gli altri del gioco</b>: lo calcola il solver contando quanto è lunga la catena di deduzioni. Non è il tempo che ci metterai, è quanto ragionamento serve."],
    ["Sfida del giorno", "Una mappa uguale per tutti, che cambia ogni giorno. Le sfide passate restano nell'archivio e si possono recuperare."],
  ] : [
    ["The goal", "Every case has a victim and a murderer. You must work out <b>where each suspect was</b> when it happened: once the arrangement is right, the murderer falls out by itself."],
    ["The grid", "The map is split into coloured <b>rooms</b>. Each suspect takes one square, with one iron rule: <b>one per row and one per column</b>, like a sudoku. Squares taken by a bulky object aren't walkable."],
    ["The victim", "The victim was <b>alone with the murderer</b>: their room holds them and exactly one other person, and that's the culprit. Their card is marked and their clue says so."],
    ["The clues", "Every suspect has at least one clue about rows, columns, rooms, nearby objects, or their position relative to someone else (\"two rows north of Bruno\"). They are <b>all true</b> and together they're enough: there is always exactly one solution, reachable by deduction and never by guessing."],
    ["General clues", "From 9×9 on, clues appear that name nobody but <b>count</b>: how many people are in a room, in half the map, seated, or beside a given object. They live in their own panel."],
    ["The tools", "<b>Place</b> puts down the selected suspect. <b>Crosses</b> marks squares you've ruled out. <b>Notes</b> (✏️) pencils a suspect into several squares without committing: select them and their notes light up. <b>Erase</b>, <b>Undo</b> and <b>Restart</b> walk it back — Restart empties the grid but not the clock."],
    ["Hints", "A hint <b>places the next deducible suspect and explains why</b>: it's not a random answer, it's the step you were meant to take. You earn them by solving the daily challenge and completing zones."],
    ["Tiers and bonus", "A zone's 100 cases are split into Beginner, Medium, Expert and Master by grid size. Clear Expert and Master to open the <b>5 bonus cases</b>, the largest ones."],
    ["The 1-100 score", "The number in the corner of a card says how tough that case is <b>compared with every other case in the game</b>: the solver works it out from how long the chain of deductions runs. It isn't how long you'll take, it's how much reasoning it needs."],
    ["Daily challenge", "One map, the same for everyone, changing every day. Past challenges stay in the archive and can be recovered."],
  ];
  return R.map(([h, b]) => `<div class="rule"><h3>${h}</h3><p>${b}</p></div>`).join("");
}

function renderRules() {
  S.view = "rules";
  stopTimer();
  app.innerHTML = headerHTML(t().rules, true) + `
    <div class="home">
      <h1>${t().rules}</h1>
      <div class="rules">${rulesHTML()}</div>
      <p class="privacy-link"><a href="privacy.html" target="_blank" rel="noopener">${t().privacy}</a></p>
    </div>`;
  wireHeader(renderZones);
}

/* ---------------- game ---------------- */
/** Chiave con cui questo caso salva progressi e tempo accumulato. */
function levelKey() { return S.zone ? S.zone.id + ":" + S.level.id : null; }

/** Millisecondi giocati su questo caso, comprese le sessioni precedenti. */
function elapsedNow() {
  return (S.base || 0) + (S.t0 ? Date.now() - S.t0 : 0);
}

/** Mette via il tempo accumulato: uscendo il cronometro non riparte da zero
 *  al rientro, ma nemmeno continua a correre mentre sei altrove. */
function pauseRun() {
  const k = levelKey();
  if (k && S.t0) {
    Profile.saveRun(k, elapsedNow(), {
      pl: S.placements,
      ca: S.candidates,
      mk: [...S.marks],
    });
  }
  stopTimer();
  S.t0 = null;
}

/** Rimette in griglia quello che c'era quando si e' usciti. */
function restoreDraft(key) {
  const st = Profile.draft(key);
  if (!st) return;
  S.placements = st.pl || {};
  S.candidates = st.ca || {};
  S.marks = new Set(st.mk || []);
}

function startTimer() {
  stopTimer();
  S.timerInt = setInterval(() => {
    const s = Math.floor(elapsedNow() / 1000);
    const txt = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
    const el = $("#timer");
    if (el) el.textContent = txt;
    const big = $("#bigTimer");
    if (big) big.textContent = txt;
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

  // avatar: ritratto (immagine) o fallback iniziale su colore.
  // I ritratti sono a tema: ogni zona ha i suoi 16 (la sfida quotidiana usa
  // il tema del livello, che porta il campo `theme`).
  const faceTheme = L.theme || S.zone?.theme;
  const face = (sp) => faceFor(sp.name, faceTheme);
  const avatarInner = (sp, i) => face(sp)
    ? `<img src="${face(sp)}" alt="${sp.name}">`
    : sp.name[0];
  const avatarBg = (sp, i) => face(sp)
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
        inner += `<span class="pawn ${face(sp) ? "hasface" : ""} ${S.wrong.has(sid) ? "wrong" : ""}"
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
      // le ipotesi del sospettato selezionato: sulle griglie grandi le
      // faccine sono minuscole e si perdono, quindi la cella intera si
      // accende del verde della carta selezionata
      const mine = S.selected !== null && provisional.includes(S.selected);
      cells += `<div class="cell floor-${def.key} ${blocked ? "blocked" : ""} ${sid !== null && f ? "has-pawn-on-object" : ""} ${provisional.length ? "has-pencils" : ""} ${mine ? "cand-sel" : ""}" data-r="${r}" data-c="${c}"
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
      <div class="playbar ${S.replay ? "replay" : ""}">
        <span class="pb-name">${nm}${S.replay ? ` <em>${t().replayNote}</em>` : ""}</span>
        <span class="pb-timer" id="bigTimer">${fmtTime(elapsedNow())}</span>
      </div>
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
        <button id="mReset">↺<span>${t().resetLevel.replace("↺ ", "")}</span></button>
      </div>
      <div class="mstrip">${strip}</div>
      <div class="mclue ${S.selected !== null && L.clues.find((c) => c.suspect === S.selected).victim ? "victim" : ""}">${selClue}</div>
      <button id="msubmitBtn" class="msubmit" ${allPlaced ? "" : "disabled"}>${t().mSubmit}</button>
    </div>
    <div class="tools">
      <button id="pencilBtn" class="${S.mode === "pencil" ? "mode-active" : ""}">${S.mode === "pencil" ? t().pencilOn : t().pencilOff}</button>
      <button id="clearBtn">${t().clear}</button>
      <button id="resetBtn">${t().resetLevel}</button>
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
      Audio.play("pick");
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
      Audio.play("pick");
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
  $("#resetBtn").onclick = resetLevel;
  $("#mReset").onclick = resetLevel;
  $("#hintBtn").onclick = hint;
  $("#submitBtn").onclick = submit;

  // rimette lo scorrimento dov'era prima del ridisegno
  const stripEl = $(".mstrip"), listEl = $(".suspect-list");
  if (stripEl && keepScroll.strip) stripEl.scrollLeft = keepScroll.strip;
  if (listEl && keepScroll.list) listEl.scrollTop = keepScroll.list;
  if (keepScroll.page) window.scrollTo({ top: keepScroll.page });
}

/** Uscita dal gioco: la sfida quotidiana torna alle zone, i casi ai livelli. */
/** Uscita dal caso. Il tempo si ferma e resta da parte, i progressi no: e'
 *  esattamente quello che il messaggio promette, quindi va detto. */
function leaveGame(skipAsk) {
  const esci = () => {
    pauseRun();
    if (S.zone?.daily) renderZones();
    else renderLevels(S.zone);
  };
  const iniziato = Object.keys(S.placements).length || Object.keys(S.candidates).length
                   || S.marks.size;
  // appena risolto la griglia e' piena per forza: chiedere "sei sicuro?"
  // dopo aver vinto non ha senso
  if (skipAsk === true || S.done || !iniziato) return esci();
  modal(t().leaveTitle, t().leaveBody, [[t().leaveOk, esci], [t().stay, () => {}]]);
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
    Audio.play("erase");
    renderGame();
    return;
  }
  if (f && ASSETS[f.asset].cat === "block") return;
  // modo Croci: segna/dissegna la cella
  if (S.mode === "cross") {
    const k = r + "," + c;
    S.marks.has(k) ? S.marks.delete(k) : S.marks.add(k);
    S.history.push({ type: "mark", cell: k });
    Audio.play("cross");
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
    Audio.play(added ? "cross" : "erase");
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
    Audio.play("cross");
    renderGame();
    return;
  }
  const prev = S.placements[S.selected] || null;
  const prevCandidates = [...(S.candidates[S.selected] || [])];
  S.history.push({ type: "place", id: S.selected, prev, prevCandidates });
  Audio.play("place");
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
 *  primo sospettato fuori posto, senza spiegazione.
 *
 *  La catena contiene anche PREMESSE (`premise: true`, senza `cell`): sono i
 *  restringimenti che non piazzano nessuno ma senza cui il passo dopo non è
 *  verificabile ("Fabio può stare solo nella 1ª colonna"). Non sono passi a
 *  sé: viaggiano insieme al piazzamento che sbloccano, dentro lo stesso
 *  aiuto, così il costo in aiuti non cambia. */
function nextStep() {
  const L = S.level;
  const done = (i, cell) => {
    const p = S.placements[i];
    return p && p[0] === cell[0] && p[1] === cell[1];
  };
  let premises = [];
  for (const st of L.steps || []) {
    if (st.premise) { premises.push(st); continue; }
    if (!done(st.suspect, st.cell)) return { ...st, premises };
    premises = [];            // consumate insieme al passo che sbloccavano
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
  Audio.play("hint");
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
  const txt = (s) => (S.lang === "it" ? s.it : s.en);
  const why = st.fallback ? t().hintNoWhy : txt(st);
  // le premesse vanno PRIMA della conclusione: sono quello che la regge
  const pre = (st.premises || [])
    .map((p) => `<li>${txt(p)}</li>`).join("");
  const body = (pre ? `<ul class="premesse">${pre}</ul>` : "") + why;
  modal(t().hintTitle(nm), body + `<br><span class="hintleft">${
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
  if (ad) ad.onclick = async () => {
    ad.disabled = true;
    ad.textContent = t().adLoading;
    const visto = await Ads.rewarded();     // fuori dall'app -> true e basta
    if (!visto) {                           // saltato: niente premio
      document.querySelector(".modal-bg")?.remove();
      return modal(t().adSkipTitle, t().adSkipBody, [[t().ok, () => {}]]);
    }
    if (Hints.grantFromAd()) {
      document.querySelector(".modal-bg")?.remove();
      renderGame();
      modal(t().hintGotTitle, t().hintGot(Hints.balance(S.zones)), [[t().ok, () => {}]]);
    }
  };
}

/** Svuota la griglia ma NON il cronometro: ricominciare il ragionamento non
 *  vuol dire non aver speso quel tempo. */
function resetLevel() {
  modal(t().resetTitle, t().resetBody, [
    [t().resetOk, () => {
      S.placements = {}; S.candidates = {}; S.marks = new Set();
      S.selected = null; S.history = []; S.wrong = new Set();
      renderGame();
    }],
    [t().cancel, () => {}],
  ]);
}

function submit() {
  const L = S.level;
  S.wrong = new Set();
  L.suspects.forEach((_, i) => {
    const p = S.placements[i], s = L.solution[i];
    if (!p || p[0] !== s[0] || p[1] !== s[1]) S.wrong.add(i);
  });
  if (S.wrong.size) Audio.play("wrong");
  if (S.wrong.size === 0) {
    const ms = elapsedNow() || null;
    stopTimer();
    S.t0 = null;
    S.done = true;
    Audio.play("win");
    // ripetizione: il cronometro e' solo estetico, il record non si tocca
    const rec = S.replay
      ? { best: Profile.best(S.zone.id + ":" + L.id), isRecord: false, first: false }
      : Profile.recordSolve(S.zone.id + ":" + L.id, ms ?? 0);
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
  // Un modale alla volta. Senza questo se ne impilano due — capita per davvero
  // quando un bottone apre un secondo messaggio (recupera sfida -> video non
  // completato) — e il giocatore finisce per premere quello sotto, che magari
  // si riferisce a un altro giorno o a un altro caso.
  document.querySelectorAll(".modal-bg").forEach((m) => m.remove());
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

/* ---------------- installable app ---------------- */
// Impacchettato con Capacitor il gioco NON gira su un sito: i file stanno gia'
// sul telefono. Li' il service worker e il bottone "installa" non solo sono
// inutili, sono dannosi — il worker metterebbe una cache davanti a file locali
// e il bottone proporrebbe di installare un'app gia' installata.
const NATIVE = !!window.Capacitor?.isNativePlatform?.();
let installPrompt = null;

function isStandalone() {
  return window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;
}

function wireInstallButton() {
  const btn = $("#hinstall");
  if (!btn) return;
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
  btn.hidden = NATIVE || isStandalone() || (!installPrompt && !ios);
  btn.onclick = async () => {
    if (installPrompt) {
      installPrompt.prompt();
      await installPrompt.userChoice;
      installPrompt = null;
      wireInstallButton();
      return;
    }
    modal(
      S.lang === "it" ? "Installa SUSoku" : "Install SUSoku",
      S.lang === "it"
        ? "In Safari tocca Condividi, poi “Aggiungi alla schermata Home”."
        : "In Safari tap Share, then “Add to Home Screen”.",
      [["OK", () => {}]]
    );
  };
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  wireInstallButton();
});

window.addEventListener("appinstalled", () => {
  installPrompt = null;
  wireInstallButton();
});

if (!NATIVE && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js?v=" + BUILD).catch(() => {});
  });
}

boot();
