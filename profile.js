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

// Versione del formato dati. Alzandola i progressi per livello vengono
// buttati UNA volta: serve quando gli id dei casi cambiano, perche' la chiave
// e' `zona:id` e progressi vecchi punterebbero a casi diversi. Alzata a 2 in
// v39, quando le zone sono state rinumerate in ordine di difficolta'. Alzata a
// 3 in v51, a 4 in v55 e a 5 in v59: la difficolta' tiene ora conto del costo
// d'apertura di un caso, e i riordini hanno cambiato di nuovo gli id. L'ultimo
// e' il piu' grosso: 848 casi sono stati proprio SOSTITUITI, perche' non si
// risolvevano senza sapere dov'e' la vittima.
const DATA_V = 5;

const Profile = {
  data: { v: DATA_V, name: "", levels: {}, runs: {}, recovered: [], updated: 0 },
  user: null,          // {uid, name, photo, provider} se loggato
  status: "local",     // local | signing | cloud | error
  onChange: null,      // callback per ridisegnare la UI
  onAuthError: null,   // callback per MOSTRARE un errore di login

  load() {
    try {
      const raw = JSON.parse(localStorage.getItem(PROFILE_KEY) || "null");
      if (raw && raw.levels) this.data = raw;
    } catch { /* profilo illeggibile: si riparte da zero */ }
    if ((this.data.v || 1) < DATA_V) {
      // gli id dei casi sono cambiati: tenere i progressi vecchi sarebbe
      // peggio che perderli, perche' sbloccherebbero casi a caso
      this.data = { v: DATA_V, name: this.data.name || "", levels: {},
                    runs: {}, recovered: [], updated: 0 };
      localStorage.removeItem("cm_done");
      this.save();
    }
    this.data.runs = this.data.runs || {};
    this.data.recovered = this.data.recovered || [];
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

  /* ---- cronometro in pausa ----
   * Uscendo da un caso il tempo non si azzera e non continua a correre: si
   * mette da parte qui e riparte da li' quando il caso viene riaperto. Sta
   * fuori da `levels` perche' `levels` significa "risolto" — un caso lasciato
   * a meta' non lo e'. */
  run(key) {
    const r = this.data.runs[key];
    return (typeof r === "number" ? r : r?.ms) || 0;
  },
  /** La griglia lasciata a meta': se si conserva il tempo va conservato anche
   *  il lavoro, se no si rientra con l'orologio avanti e la griglia vuota. */
  draft(key) {
    const r = this.data.runs[key];
    return typeof r === "object" && r ? r.st || null : null;
  },
  saveRun(key, ms, st) {
    if (!ms) return;
    this.data.runs[key] = st ? { ms, st } : { ms };
    this.save();
  },
  clearRun(key) {
    if (this.data.runs[key] == null) return;
    delete this.data.runs[key];
    this.save();
  },

  /* ---- sfide passate recuperate ---- */
  isRecovered(day) { return this.data.recovered.includes(day); },
  recover(day) {
    if (this.data.recovered.includes(day)) return;
    this.data.recovered.push(day);
    this.save();
  },

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
    delete this.data.runs[key];   // risolto: il cronometro riparte da zero
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

  /** Unione di due profili: per ogni livello vince il tempo migliore.
   *
   *  I progressi del cloud vanno scartati se sono di una generazione di id
   *  precedente. Senza questo controllo `DATA_V` non serve a niente: `load()`
   *  azzera in locale, `pull()` riscarica il documento vecchio e lo rimette
   *  dentro, con le chiavi `zona:id` che ora puntano a casi diversi. Il nome
   *  del giocatore si tiene: quello non dipende dagli id. */
  merge(remote) {
    if (!remote || !remote.levels) return false;
    if ((remote.dataV || 1) < DATA_V) {
      if (!this.data.name && remote.name) { this.data.name = remote.name; this.save(); }
      Cloud.push();          // riscrive il cloud con i progressi ripartiti da zero
      return false;
    }
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

/* ---------------- economia degli aiuti ----------------
 * Un aiuto piazza il PROSSIMO sospettato deducibile e spiega perche'.
 * Il saldo non e' un numero salvato e basta: si RICALCOLA come
 *     guadagnati (di partenza + meriti + acquisti/ad) - spesi
 * dove i meriti derivano dai progressi. Cosi' due dispositivi che si
 * sincronizzano non si regalano aiuti a vicenda ne' se li mangiano: i
 * contatori `spent`/`bought`/`ads` sono monotoni e in fusione vince il piu'
 * alto. `spent` viene salvato subito, prima di mostrare l'aiuto. */
const HINT_RULES = {
  start: 5,          // saldo iniziale, basta per il tutorial e i primi casi
  perDaily: 1,       // ogni sfida quotidiana completata
  perZone: 3,        // ogni zona completata (oltre allo sblocco dei bonus)
  adReward: 1,       // un annuncio guardato
  adDailyCap: 3,     // ...ma non piu' di 3 al giorno
  cost: 1,           // costo di un aiuto
  packs: [           // acquisti (i prezzi li decidera' lo store)
    { id: "small", hints: 5 },
    { id: "medium", hints: 15, badge: "+3" },
    { id: "large", hints: 50, badge: "+15" },
  ],
};

const Hints = {
  get state() {
    const h = Profile.data.hints || (Profile.data.hints =
      { spent: 0, bought: 0, ads: 0, adDay: "", adToday: 0 });
    return h;
  },

  /** Aiuti guadagnati coi progressi: derivati, mai salvati. */
  earned(zones) {
    const st = Profile.dailyStats(todayString());
    const zonesDone = (zones || []).filter((z) => {
      const base = z.levels.filter((l) => !l.bonus);
      return base.length && base.every((l) => Profile.solved(z.id + ":" + l.id));
    }).length;
    return HINT_RULES.start
         + st.solved * HINT_RULES.perDaily
         + zonesDone * HINT_RULES.perZone;
  },

  balance(zones) {
    const h = this.state;
    return Math.max(0, this.earned(zones) + h.bought + h.ads - h.spent);
  },

  spend(zones, n = HINT_RULES.cost) {
    if (this.balance(zones) < n) return false;
    this.state.spent += n;
    Profile.save();
    Cloud.push();
    return true;
  },

  /** Annuncio visto: +1, con tetto giornaliero. -> false se il tetto e' pieno */
  adsLeftToday() {
    const h = this.state;
    const today = todayString();
    if (h.adDay !== today) { h.adDay = today; h.adToday = 0; }
    return HINT_RULES.adDailyCap - h.adToday;
  },

  grantFromAd() {
    if (this.adsLeftToday() <= 0) return false;
    const h = this.state;
    h.adToday += 1;
    h.ads += HINT_RULES.adReward;
    Profile.save();
    Cloud.push();
    return true;
  },

  /** Acquisto andato a buon fine (lo store vero arriva dopo). */
  grantFromPurchase(packId) {
    const pack = HINT_RULES.packs.find((p) => p.id === packId);
    if (!pack) return false;
    this.state.bought += pack.hints;
    Profile.save();
    Cloud.push();
    return true;
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
      // Il database puo' NON chiamarsi "(default)": in questo progetto si
      // chiama `susoku`. Senza passarne il nome il client parla con
      // "(default)", che non esiste: le richieste non tornano piu' indietro e
      // `getDoc` finisce per rispondere dalla cache locale, dando l'illusione
      // che il salvataggio funzioni.
      const dbId = window.FIREBASE_CONFIG.databaseId;
      this.db = dbId ? this.mods.getFirestore(this.app, dbId)
                     : this.mods.getFirestore(this.app);
      this.ready = true;
      // `onAuthStateChanged` NON basta: collegando un account anonimo a Google
      // l'uid resta lo stesso, quindi per Firebase lo "stato" non e' cambiato e
      // l'evento non arriva. La schermata restava su "Accesso in corso...".
      // `onIdTokenChanged` invece scatta anche sul collegamento.
      this.mods.onAuthStateChanged(this.auth, (u) => this.applyUser(u));
      this.mods.onIdTokenChanged(this.auth, (u) => this.applyUser(u));
    } catch (e) {
      console.warn("cloud non disponibile:", e);
      Profile.status = "error";
    }
    return this.ready;
  },

  /** Accesso ANONIMO, subito e senza chiedere niente.
   *
   * Il salvataggio in cloud parte dal primo avvio: chi non fara' mai il login
   * non perde comunque i progressi cambiando telefono... a patto di collegare
   * l'account, ed e' per questo che il login vero resta offerto. Il punto
   * dell'anonimo e' un altro: quando poi il giocatore sceglie Google o Apple,
   * l'account si COLLEGA a quello anonimo (`linkWithCredential`) e l'uid non
   * cambia — quindi i progressi fatti prima del login non si perdono. Senza
   * anonimo, l'accesso creerebbe un utente nuovo e vuoto. */
  async signInAnon() {
    if (!await this.init()) return;
    // ASPETTARE che il SDK abbia finito di ripristinare la sessione salvata.
    // `currentUser` e' null finche' quel ripristino non e' finito: chiedendolo
    // subito si crede che non ci sia nessuno e si crea un anonimo NUOVO a ogni
    // avvio. Da li' l'account Google, gia' legato al primo, dava
    // "credential-already-in-use" e i progressi in cloud ripartivano da zero.
    try { await this.auth.authStateReady(); } catch { /* SDK piu' vecchio */ }
    if (this.auth.currentUser) return;
    try {
      await this.mods.signInAnonymously(this.auth);
    } catch (e) {
      // se l'accesso anonimo non e' abilitato in console il gioco continua
      // in locale: non e' un errore da mostrare al giocatore
      console.warn("anonimo non disponibile:", e.code || e);
    }
  },

  /** Il plugin di login NATIVO, se il gioco gira impacchettato.
   *
   * Serve perche' dentro l'app il login web non funziona: il gestore di
   * Firebase sta su `<progetto>.firebaseapp.com`, l'app su un'altra origine, e
   * i browser recenti separano lo storage tra origini. Il handler scrive lo
   * stato in sessionStorage e al ritorno non lo ritrova: e' l'errore
   * "missing initial state". Il login nativo non passa dal browser e il
   * problema non esiste. */
  /** Porta l'utente corrente dentro Profile e ridisegna. Chiamata sia dagli
   *  eventi sia SUBITO DOPO un accesso riuscito: non ci si affida solo agli
   *  eventi, perche' sul collegamento di un anonimo possono non arrivare. */
  applyUser(u) {
    clearTimeout(this._signTimer);
    Profile.user = u ? {
      uid: u.uid,
      anon: u.isAnonymous,
      name: u.displayName || u.email || "Detective",
      photo: u.photoURL || "",
      provider: u.providerData?.[0]?.providerId || "",
    } : null;
    Profile.status = u ? (u.isAnonymous ? "anon" : "cloud") : "local";
    if (u) this.pull();
    else if (Profile.onChange) Profile.onChange();
  },

  /** Fa arrivare l'errore al giocatore, non solo alla console. */
  report(e) {
    const code = e?.code || e?.message || String(e);
    console.warn("login:", code, e);
    if (Profile.onAuthError) Profile.onAuthError(code);
  },

  get nativeAuth() {
    const cap = window.Capacitor;
    if (!cap?.isNativePlatform?.()) return null;
    return cap.Plugins?.FirebaseAuthentication || null;
  },

  provider(which) {
    if (which === "apple") {
      const p = new this.mods.OAuthProvider("apple.com");
      p.addScope("email"); p.addScope("name");
      return p;
    }
    return new this.mods.GoogleAuthProvider();
  },

  async signIn(which = "google") {
    if (!await this.init()) return;
    Profile.status = "signing";
    if (Profile.onChange) Profile.onChange();
    clearTimeout(this._signTimer);
    this._signTimer = setTimeout(() => {
      if (Profile.status !== "signing") return;
      this.applyUser(this.auth.currentUser);       // sblocca comunque
      this.report({ code: "accesso-senza-risposta" });
    }, 20000);
    const cur = this.auth.currentUser;

    // --- app impacchettata: login nativo, poi la credenziale passa al SDK web
    const nat = this.nativeAuth;
    if (nat) {
      let cred = null;
      try {
        // `skipNativeAuth` lascia l'accesso al SDK web: e' quello che parla con
        // Firestore, e due sessioni separate si disallineerebbero
        const res = which === "apple"
          ? await nat.signInWithApple({ skipNativeAuth: true })
          : await nat.signInWithGoogle({ skipNativeAuth: true });
        const c = res.credential || {};
        cred = which === "apple"
          ? new this.mods.OAuthProvider("apple.com").credential({
              idToken: c.idToken, rawNonce: c.nonce })
          : this.mods.GoogleAuthProvider.credential(c.idToken, c.accessToken);
        if (cur && cur.isAnonymous) {
          await this.mods.linkWithCredential(cur, cred);
        } else {
          await this.mods.signInWithCredential(this.auth, cred);
        }
        this.applyUser(this.auth.currentUser);
        return;
      } catch (e) {
        if (e.code === "auth/credential-already-in-use" ||
            e.code === "auth/email-already-in-use") {
          // quell'account Google e' gia' legato a un utente Firebase: si entra
          // con lo stesso `cred` che abbiamo appena costruito, senza frugare
          // nei dettagli interni dell'errore. I progressi locali li fonde
          // `pull()`, che tiene il tempo migliore di ogni caso.
          try {
            await this.mods.signInWithCredential(this.auth, cred);
            this.applyUser(this.auth.currentUser);
            return;
          } catch (e2) { this.report(e2); }
        } else {
          this.report(e);
        }
        Profile.status = this.auth.currentUser
          ? (this.auth.currentUser.isAnonymous ? "anon" : "cloud") : "local";
        if (Profile.onChange) Profile.onChange();
      }
      return;
    }

    if (window.Capacitor?.isNativePlatform?.()) {
      // dentro l'app la via web non puo' funzionare (origini separate): meglio
      // dirlo che lasciar fallire una finestra che non si aprira' mai
      this.report({ code: "plugin-di-login-non-caricato" });
      Profile.status = "anon";
      if (Profile.onChange) Profile.onChange();
      return;
    }

    // --- browser: finestra di login classica
    const p = this.provider(which);
    try {
      if (cur && cur.isAnonymous) {
        // COLLEGA: stesso uid, quindi i progressi restano
        await this.mods.linkWithPopup(cur, p);
      } else {
        await this.mods.signInWithPopup(this.auth, p);
      }
      this.applyUser(this.auth.currentUser);
      return;
    } catch (e) {
      // l'account esisteva gia' su un altro dispositivo: allora si entra
      // normalmente e il merge dei progressi lo fa `pull()`
      if (e.code === "auth/credential-already-in-use" ||
          e.code === "auth/email-already-in-use") {
        try { await this.mods.signInWithPopup(this.auth, p); }
        catch (e2) { this.report(e2); }
      } else {
        this.report(e);
      }
      Profile.status = this.auth.currentUser ? "cloud" : "local";
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
        // generazione degli id dei casi a cui si riferiscono `levels`: senza,
        // dopo una rinumerazione il cloud rimetterebbe dentro chiavi vecchie
        dataV: DATA_V,
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
if (Cloud.enabled) Cloud.init().then(() => Cloud.signInAnon());

/* ---------------- distintivi ----------------
 * Solo cosmetici: non danno aiuti, non sbloccano niente. Si RICALCOLANO dai
 * progressi a ogni apertura del profilo, non sono uno stato da tenere
 * allineato — cosi' sincronizzando due dispositivi non possono divergere.
 * `icon` e' un emoji: non serve un asset e resta leggibile ovunque. */
const Badges = {
  defs: [
    { id: "primo", icon: "🔍", it: "Prime Indagini", en: "First Case",
      itDesc: "Risolvi il primo caso", enDesc: "Solve your first case",
      test: (s) => s.solved >= 1 },
    { id: "dieci", icon: "🗂️", it: "Fascicolo Aperto", en: "Open File",
      itDesc: "10 casi risolti", enDesc: "10 cases solved",
      test: (s) => s.solved >= 10 },
    { id: "cinquanta", icon: "🎖️", it: "Investigatore", en: "Investigator",
      itDesc: "50 casi risolti", enDesc: "50 cases solved",
      test: (s) => s.solved >= 50 },
    { id: "duecento", icon: "🏅", it: "Detective Capo", en: "Chief Detective",
      itDesc: "200 casi risolti", enDesc: "200 cases solved",
      test: (s) => s.solved >= 200 },
    { id: "cinquecento", icon: "👑", it: "Leggenda", en: "Legend",
      itDesc: "500 casi risolti", enDesc: "500 cases solved",
      test: (s) => s.solved >= 500 },
    { id: "zona", icon: "📍", it: "Zona Chiusa", en: "Zone Closed",
      itDesc: "Completa una zona intera", enDesc: "Complete a whole zone",
      test: (s) => s.zonesDone >= 1 },
    { id: "zone3", icon: "🗺️", it: "Tre Città", en: "Three Cities",
      itDesc: "Completa tre zone", enDesc: "Complete three zones",
      test: (s) => s.zonesDone >= 3 },
    { id: "zoneAll", icon: "🌍", it: "Nessun Caso Irrisolto", en: "No Case Left",
      itDesc: "Completa tutte le zone", enDesc: "Complete every zone",
      test: (s) => s.zones > 0 && s.zonesDone >= s.zones },
    { id: "maestro", icon: "🧠", it: "Mente Fine", en: "Sharp Mind",
      itDesc: "Chiudi una fascia Maestro", enDesc: "Clear a Master tier",
      test: (s) => s.maestroDone >= 1 },
    { id: "bonus", icon: "⭐", it: "Fuori Programma", en: "Off the Books",
      itDesc: "Risolvi un caso bonus", enDesc: "Solve a bonus case",
      test: (s) => s.bonusSolved >= 1 },
    { id: "daily7", icon: "🔥", it: "Sette di Fila", en: "Seven in a Row",
      itDesc: "7 sfide quotidiane consecutive", enDesc: "7 daily challenges in a row",
      test: (s) => s.bestStreak >= 7 },
    { id: "daily30", icon: "📅", it: "Un Mese Intero", en: "A Full Month",
      itDesc: "30 sfide quotidiane consecutive", enDesc: "30 daily challenges in a row",
      test: (s) => s.bestStreak >= 30 },
    { id: "veloce", icon: "⚡", it: "Colpo d'Occhio", en: "Quick Eye",
      itDesc: "Un caso 6×6 sotto il minuto", enDesc: "A 6×6 case under a minute",
      test: (s) => s.fastSmall },
    { id: "grande", icon: "🧩", it: "Griglia Grande", en: "Big Grid",
      itDesc: "Risolvi un caso 14×14 o più", enDesc: "Solve a 14×14 case or bigger",
      test: (s) => s.bigSolved >= 1 },
  ],

  /** Riassunto dei progressi su cui si valutano i distintivi. */
  stats(zones) {
    const lv = Profile.data.levels;
    const out = { solved: 0, zones: 0, zonesDone: 0, maestroDone: 0,
                  bonusSolved: 0, bigSolved: 0, fastSmall: false,
                  bestStreak: Profile.dailyStats(todayString()).bestStreak };
    for (const z of zones || []) {
      if (!z.levels?.length || z.id === "test") continue;
      out.zones++;
      const normali = z.levels.filter((l) => !l.bonus);
      let fatti = 0;
      const perBanda = {};
      for (const l of z.levels) {
        const e = lv[z.id + ":" + l.id];
        if (!e) continue;
        out.solved++;
        if (l.bonus) out.bonusSolved++;
        else fatti++;
        if (l.size >= 14) out.bigSolved++;
        if (l.size <= 6 && e.best != null && e.best < 60000) out.fastSmall = true;
        if (l.band) perBanda[l.band] = (perBanda[l.band] || 0) + 1;
      }
      if (normali.length && fatti >= normali.length) out.zonesDone++;
      const maestro = normali.filter((l) => l.band === "maestro").length;
      if (maestro && (perBanda.maestro || 0) >= maestro) out.maestroDone++;
    }
    return out;
  },

  /** -> [{def, ok}] nell'ordine di definizione. */
  list(zones) {
    const s = this.stats(zones);
    return this.defs.map((d) => ({ def: d, ok: !!d.test(s) }));
  },
};
