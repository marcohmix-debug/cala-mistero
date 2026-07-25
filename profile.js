/* SUSoku — profilo giocatore: statistiche locali + sync opzionale sul cloud.
 *
 * Livello 1 (sempre attivo): tutto in localStorage, nessun account.
 * Livello 2 (opzionale): se `firebase-config.js` definisce FIREBASE_CONFIG,
 *   compare il login Google/Apple e le statistiche si sincronizzano su
 *   Firestore (doc `users/{uid}`) -> stesso profilo su piu' dispositivi e
 *   base pronta per una classifica.
 *
 * Modello dati (identico in locale e sul cloud, cosi' il merge e' banale):
 *   { v:1, name, levels: { "zona:id": {best, last, plays, at} }, updated }
 *   `best`/`last` sono millisecondi; un livello presente = risolto.
 * Il merge non ha bisogno di un server: per ogni livello si tiene il tempo
 * migliore, quindi unire due dispositivi da' sempre lo stesso risultato.
 */

const PROFILE_KEY = "cm_profile";

const Profile = {
  data: { v: 1, name: "", levels: {}, updated: 0 },
  user: null,          // {uid, name, photo, provider} se loggato
  status: "local",     // local | signing | cloud | error
  onChange: null,      // callback per ridisegnare la UI

  load() {
    try {
      const raw = JSON.parse(localStorage.getItem(PROFILE_KEY) || "null");
      if (raw && raw.levels) this.data = raw;
    } catch { /* profilo illeggibile: si riparte da zero */ }
    this.migrateLegacy();
    return this;
  },

  // i progressi vecchi erano solo "fatto sì/no" in cm_done, senza tempi
  migrateLegacy() {
    let done = {};
    try { done = JSON.parse(localStorage.getItem("cm_done") || "{}"); } catch { }
    let changed = false;
    for (const key of Object.keys(done)) {
      if (done[key] && !this.data.levels[key]) {
        this.data.levels[key] = { best: null, last: null, plays: 1, at: 0 };
        changed = true;
      }
    }
    if (changed) this.save();
  },

  save() {
    this.data.updated = Date.now();
    localStorage.setItem(PROFILE_KEY, JSON.stringify(this.data));
    // cm_done resta allineato: lo leggono le schermate zone/livelli
    const done = {};
    for (const k of Object.keys(this.data.levels)) done[k] = true;
    localStorage.setItem("cm_done", JSON.stringify(done));
  },

  solved(key) { return !!this.data.levels[key]; },
  best(key) { return this.data.levels[key]?.best ?? null; },

  /** Registra una vittoria. -> {best, isRecord, first} */
  recordSolve(key, ms) {
    const prev = this.data.levels[key];
    const first = !prev;
    const isRecord = !prev || prev.best == null || ms < prev.best;
    this.data.levels[key] = {
      best: isRecord ? ms : prev.best,
      last: ms,
      plays: (prev?.plays || 0) + 1,
      at: Date.now(),
    };
    this.save();
    Cloud.push();               // best-effort, non blocca il gioco
    return { best: this.data.levels[key].best, isRecord, first };
  },

  /* ---- sfida quotidiana ----
   * Le sfide stanno nello stesso `levels` con chiave `daily:YYYY-MM-DD`,
   * così si sincronizzano e si fondono come tutto il resto. Streak e totali
   * si RICALCOLANO dalle date: non c'è un contatore da tenere allineato tra
   * dispositivi, quindi il merge non può sballarlo. */
  dailyKey(day) { return "daily:" + day; },

  dailyDays() {
    return Object.keys(this.data.levels)
      .filter((k) => k.startsWith("daily:"))
      .map((k) => k.slice(6)).sort();
  },

  /** {solved, streak, bestStreak, todayDone} — streak = giorni consecutivi. */
  dailyStats(today) {
    const days = this.dailyDays();
    const set = new Set(days);
    let best = 0, run = 0, prev = null;
    for (const d of days) {
      run = prev && dayNumber(d) - dayNumber(prev) === 1 ? run + 1 : 1;
      best = Math.max(best, run);
      prev = d;
    }
    // la serie corrente vale solo se include oggi (o ieri, in giornata)
    let streak = 0;
    let cursor = set.has(today) ? today : dayString(dayNumber(today) - 1);
    if (set.has(cursor)) {
      while (set.has(cursor)) {
        streak++;
        cursor = dayString(dayNumber(cursor) - 1);
      }
    }
    return { solved: days.length, streak, bestStreak: best,
             todayDone: set.has(today) };
  },

  /** Totali per la schermata profilo (e, domani, per la classifica). */
  totals(zones) {
    const lv = this.data.levels;
    const keys = Object.keys(lv);
    const timed = keys.filter((k) => lv[k].best != null);
    const totalMs = timed.reduce((s, k) => s + lv[k].best, 0);
    // le sfide quotidiane hanno una loro sezione: fuori dai totali di zona
    const zoneKeys = keys.filter((k) => !k.startsWith("daily:"));
    const perZone = (zones || []).map((z) => {
      const ids = z.levels.map((l) => z.id + ":" + l.id);
      const solved = ids.filter((k) => lv[k]).length;
      const zMs = ids.filter((k) => lv[k]?.best != null)
        .reduce((s, k) => s + lv[k].best, 0);
      return { zone: z, solved, total: ids.length, ms: zMs };
    });
    return {
      solved: zoneKeys.length,
      timed: timed.length,
      totalMs,
      avgMs: timed.length ? Math.round(totalMs / timed.length) : 0,
      perZone,
      available: perZone.reduce((s, z) => s + z.total, 0),
    };
  },

  /** Unione di due profili: per ogni livello vince il tempo migliore. */
  merge(remote) {
    if (!remote || !remote.levels) return false;
    let changed = false;
    for (const [k, r] of Object.entries(remote.levels)) {
      const l = this.data.levels[k];
      if (!l) {
        this.data.levels[k] = r;
        changed = true;
        continue;
      }
      const best = [l.best, r.best].filter((x) => x != null);
      const nb = best.length ? Math.min(...best) : null;
      const merged = {
        best: nb,
        last: (r.at || 0) > (l.at || 0) ? r.last : l.last,
        plays: Math.max(l.plays || 0, r.plays || 0),
        at: Math.max(l.at || 0, r.at || 0),
      };
      if (JSON.stringify(merged) !== JSON.stringify(l)) {
        this.data.levels[k] = merged;
        changed = true;
      }
    }
    if (!this.data.name && remote.name) { this.data.name = remote.name; changed = true; }
    if (changed) this.save();
    return changed;
  },
};

/* ---------------- sync cloud (opzionale) ---------------- */
const FB_VER = "10.12.2";

const Cloud = {
  cfg: null, app: null, auth: null, db: null, mods: null,
  ready: false, pending: false,

  /** true se il progetto Firebase e' configurato: senza, niente login. */
  get enabled() { return !!(window.FIREBASE_CONFIG && window.FIREBASE_CONFIG.apiKey); },

  async init() {
    if (!this.enabled || this.ready) return this.ready;
    try {
      const [appMod, authMod, dbMod] = await Promise.all([
        import(`https://www.gstatic.com/firebasejs/${FB_VER}/firebase-app.js`),
        import(`https://www.gstatic.com/firebasejs/${FB_VER}/firebase-auth.js`),
        import(`https://www.gstatic.com/firebasejs/${FB_VER}/firebase-firestore.js`),
      ]);
      this.mods = { ...appMod, ...authMod, ...dbMod };
      this.app = this.mods.initializeApp(window.FIREBASE_CONFIG);
      this.auth = this.mods.getAuth(this.app);
      this.db = this.mods.getFirestore(this.app);
      this.ready = true;
      this.mods.onAuthStateChanged(this.auth, (u) => {
        Profile.user = u ? {
          uid: u.uid,
          name: u.displayName || u.email || "Detective",
          photo: u.photoURL || "",
          provider: u.providerData[0]?.providerId || "",
        } : null;
        Profile.status = u ? "cloud" : "local";
        if (u) this.pull();
        else if (Profile.onChange) Profile.onChange();
      });
    } catch (e) {
      console.warn("cloud non disponibile:", e);
      Profile.status = "error";
    }
    return this.ready;
  },

  async signIn(which = "google") {
    if (!await this.init()) return;
    Profile.status = "signing";
    if (Profile.onChange) Profile.onChange();
    try {
      const p = which === "apple"
        ? new this.mods.OAuthProvider("apple.com")
        : new this.mods.GoogleAuthProvider();
      if (which === "apple") { p.addScope("email"); p.addScope("name"); }
      await this.mods.signInWithPopup(this.auth, p);
    } catch (e) {
      console.warn("login fallito:", e);
      Profile.status = "local";
      if (Profile.onChange) Profile.onChange();
    }
  },

  async signOut() {
    if (!this.ready) return;
    await this.mods.signOut(this.auth);   // i progressi restano in locale
  },

  ref() {
    return this.mods.doc(this.db, "users", Profile.user.uid);
  },

  /** Scarica il profilo remoto, lo fonde col locale e ricarica quello unito. */
  async pull() {
    if (!this.ready || !Profile.user) return;
    try {
      const snap = await this.mods.getDoc(this.ref());
      if (snap.exists()) Profile.merge(snap.data());
      if (!Profile.data.name) Profile.data.name = Profile.user.name;
      await this.push(true);
    } catch (e) {
      console.warn("pull fallito:", e);
    }
    if (Profile.onChange) Profile.onChange();
  },

  /** Carica il profilo locale sul cloud (debounced: il gioco non aspetta). */
  async push(now = false) {
    if (!this.ready || !Profile.user) return;
    if (!now) {
      if (this.pending) return;
      this.pending = true;
      setTimeout(() => { this.pending = false; this.push(true); }, 1500);
      return;
    }
    try {
      await this.mods.setDoc(this.ref(), {
        v: 1,
        name: Profile.data.name || Profile.user.name,
        levels: Profile.data.levels,
        updated: Date.now(),
        // denormalizzati: serviranno alla classifica senza rileggere i livelli
        solved: Object.keys(Profile.data.levels).length,
        totalMs: Profile.totals([]).totalMs,
      }, { merge: true });
    } catch (e) {
      console.warn("push fallito:", e);
    }
  },
};

/* ---------------- calendario sfide ----------------
 * Il "giorno" è quello LOCALE del giocatore (chi gioca alle 23:50 non deve
 * ritrovarsi la sfida cambiata a mezzanotte UTC). dayNumber conta i giorni da
 * un'epoca fissa: serve sia per la rotazione del pool sia per lo streak. */
function dayString(n) {
  const d = new Date(Date.UTC(1970, 0, 1 + n));
  return d.toISOString().slice(0, 10);
}
function dayNumber(s) {
  const [y, m, d] = s.split("-").map(Number);
  return Math.round(Date.UTC(y, m - 1, d) / 86400000);
}
function todayString() {
  const d = new Date();                       // data locale, non UTC
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${
    String(d.getDate()).padStart(2, "0")}`;
}

/** mm:ss (o h:mm:ss oltre l'ora) */
function fmtTime(ms) {
  if (ms == null) return "—";
  const s = Math.round(ms / 1000);
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), q = s % 60;
  const mm = String(h ? m : m).padStart(h ? 2 : 1, "0");
  return (h ? `${h}:` : "") + `${mm}:${String(q).padStart(2, "0")}`;
}

Profile.load();
if (Cloud.enabled) Cloud.init();
