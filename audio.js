/* SUSoku — suoni ed eventuale musica.
 *
 * Due scelte che vale la pena spiegare:
 *
 * 1. **Gli effetti sono sintetizzati**, non file audio. Un click, un tonfo e
 *    un arpeggio di vittoria sono tre oscillatori: zero byte da scaricare,
 *    zero latenza al primo tocco, e niente da tenere in cache in un'app che
 *    abbiamo appena portato da 29 a 6 MB. Per suoni cosi' brevi la differenza
 *    con un campione registrato non si sente.
 *
 * 2. **La musica invece e' un file per zona**, ed e' facoltativa: i brani non
 *    ci sono ancora. Il codice li cerca in `assets/audio/<tema>.mp3` e se non
 *    li trova tace, senza errori in console e senza bottoni che non fanno
 *    niente — l'interruttore della musica compare solo quando un brano c'e'
 *    davvero. Per aggiungerli basta mettere i file: nient'altro da toccare.
 *
 * Niente vibrazione, per scelta.
 */

const Audio = {
  KEY_SFX: "cm_sfx",
  KEY_MUS: "cm_music",
  ctx: null,
  music: null,          // HTMLAudioElement in riproduzione
  musicTheme: null,
  known: {},            // tema -> true/false: il brano esiste?

  get sfxOn() { return localStorage.getItem(this.KEY_SFX) !== "0"; },
  set sfxOn(v) { localStorage.setItem(this.KEY_SFX, v ? "1" : "0"); },
  get musicOn() { return localStorage.getItem(this.KEY_MUS) === "1"; },
  set musicOn(v) { localStorage.setItem(this.KEY_MUS, v ? "1" : "0"); },

  /** Il contesto audio si crea al primo tocco: i browser non lo permettono
   *  prima, e crearlo all'avvio lascerebbe un contesto sospeso per sempre. */
  ensure() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      this.ctx = new AC();
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  },

  /** Una nota breve. `type` cambia il timbro, `to` fa il glissato. */
  tone(freq, ms, { type = "sine", gain = .06, to = null, delay = 0 } = {}) {
    const ctx = this.ensure();
    if (!ctx) return;
    const t0 = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (to) osc.frequency.exponentialRampToValueAtTime(to, t0 + ms / 1000);
    // attacco e coda morbidi: un'onda tagliata di netto fa "click"
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + .008);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + ms / 1000);
    osc.connect(g).connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + ms / 1000 + .02);
  },

  play(what) {
    if (!this.sfxOn) return;
    switch (what) {
      case "place":  this.tone(520, 90, { type: "triangle", gain: .05 }); break;
      case "pick":   this.tone(680, 60, { type: "sine", gain: .035 }); break;
      case "cross":  this.tone(300, 70, { type: "square", gain: .028 }); break;
      case "erase":  this.tone(380, 80, { type: "sine", gain: .03, to: 240 }); break;
      case "hint":   this.tone(760, 120, { type: "sine", gain: .05, to: 1140 }); break;
      case "wrong":  this.tone(200, 220, { type: "sawtooth", gain: .045, to: 130 }); break;
      case "win":
        [523, 659, 784, 1047].forEach((f, i) =>
          this.tone(f, 260, { type: "triangle", gain: .06, delay: i * .09 }));
        break;
    }
  },

  /* ---- musica per zona (facoltativa) ---- */
  src(theme) { return `assets/audio/${theme}.mp3`; },

  /** -> true se il brano di quel tema esiste. Il risultato resta in memoria,
   *  cosi' non si ritenta a ogni schermata. */
  async has(theme) {
    if (!theme) return false;
    if (theme in this.known) return this.known[theme];
    try {
      const r = await fetch(this.src(theme), { method: "HEAD" });
      this.known[theme] = r.ok;
    } catch { this.known[theme] = false; }
    return this.known[theme];
  },

  async start(theme) {
    if (!this.musicOn || !theme) return;
    if (this.musicTheme === theme && this.music && !this.music.paused) return;
    if (!(await this.has(theme))) return;
    this.stop();
    const a = new window.Audio(this.src(theme));
    a.loop = true;
    a.volume = .35;
    a.play().catch(() => { /* il browser puo' rifiutare senza un tocco */ });
    this.music = a;
    this.musicTheme = theme;
  },

  stop() {
    if (this.music) { this.music.pause(); this.music = null; }
    this.musicTheme = null;
  },
};
