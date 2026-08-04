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
 * 2. **La musica invece e' un file per tema**, ed e' facoltativa. Il codice li
 *    cerca in `assets/audio/<tema>.m4a` — i sette temi piu' `menu`, che suona
 *    fuori dalle zone — e se non li trova tace, senza errori in console e
 *    senza bottoni che non fanno niente: l'interruttore della musica compare
 *    solo quando un brano c'e' davvero.
 *
 *    Non si usa `<audio loop>`: vedi il commento sopra `src()`, il formato
 *    stesso impedisce un giro senza buco.
 *
 * Niente vibrazione, per scelta.
 */

const Audio = {
  KEY_SFX: "cm_sfx",
  KEY_MUS: "cm_music",
  ctx: null,
  VOL: .35,             // la musica sta sotto: e' un tappeto, non un brano
  music: null,          // {src, g} in riproduzione
  musicTheme: null,
  known: {},            // tema -> true/false: il brano esiste?
  buffers: {},          // UN tema alla volta: il PCM decodificato pesa ~38 MB

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

  /* ---- musica per zona + tema del menu (facoltativa) ----
   *
   * Si passa da `<audio loop>` a Web Audio per una ragione precisa: MP3 e AAC
   * aggiungono campioni di riempimento in testa e in coda (AAC ne mette ~2112
   * di priming), e `loop = true` su un elemento <audio> li riproduce -- si
   * sente un buchino a ogni giro, e non e' un difetto del brano ma del
   * formato. Un AudioBufferSourceNode gira sul PCM gia' decodificato ed e'
   * campione-esatto.
   *
   * I punti di giro non si scelgono a occhio: `loopPoints` scandisce il buffer
   * e trova il primo e l'ultimo campione sopra la soglia di silenzio, cosi' il
   * riempimento del codec resta FUORI dal giro qualunque file gli si dia. */
  src(theme) { return `assets/audio/${theme}.m4a`; },

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

  /** Primo e ultimo campione udibile: il giro parte e finisce li', non agli
   *  estremi del file. -> [inizio, fine] in secondi. */
  loopPoints(buf) {
    const SOGLIA = 0.002;               // -54 dB: sotto e' silenzio digitale
    const n = buf.length;
    const canali = [];
    for (let c = 0; c < buf.numberOfChannels; c++) canali.push(buf.getChannelData(c));
    const forte = (i) => {
      for (const d of canali) if (Math.abs(d[i]) > SOGLIA) return true;
      return false;
    };
    let a = 0, b = n - 1;
    while (a < n && !forte(a)) a++;
    while (b > a && !forte(b)) b--;
    if (b <= a) return [0, buf.duration];       // tutto sotto soglia: si lascia
    return [a / buf.sampleRate, (b + 1) / buf.sampleRate];
  },

  /** Decodifica il brano di un tema. **Se ne tiene UNO SOLO in memoria**: il
   *  PCM decodificato di un brano da 100 s stereo a 48 kHz pesa 38 MB, e
   *  tenerne otto in cache ne farebbe 307 -- su un telefono e' il modo piu'
   *  rapido per farsi chiudere dal sistema. Ridecodificare costa ~130 ms, e il
   *  file arriva comunque dalla cache HTTP. */
  async buffer(theme) {
    if (this.buffers[theme]) return this.buffers[theme];
    const ctx = this.ensure();
    if (!ctx) return null;
    try {
      const r = await fetch(this.src(theme));
      if (!r.ok) { this.known[theme] = false; return null; }
      const buf = await ctx.decodeAudioData(await r.arrayBuffer());
      this.buffers = { [theme]: { buf, punti: this.loopPoints(buf) } };
      return this.buffers[theme];
    } catch {
      this.known[theme] = false;
      return null;
    }
  },

  async start(theme) {
    if (!this.musicOn || !theme) return;
    if (this.musicTheme === theme && this.music) return;
    const ctx = this.ensure();
    if (!ctx) return;
    const dati = await this.buffer(theme);
    if (!dati) return;
    // il brano puo' essere cambiato mentre si decodificava
    if (!this.musicOn) return;
    this.stop();
    const src = ctx.createBufferSource();
    src.buffer = dati.buf;
    src.loop = true;
    [src.loopStart, src.loopEnd] = dati.punti;
    const g = ctx.createGain();
    // mezzo secondo di salita: entrare a volume pieno di colpo fa sobbalzare
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(this.VOL, ctx.currentTime + .5);
    src.connect(g).connect(ctx.destination);
    src.start(0, dati.punti[0]);
    this.music = { src, g };
    this.musicTheme = theme;
  },

  /** Sfuma e stacca: tagliare un pad a meta' fa un click secco. */
  stop() {
    const m = this.music;
    this.music = null;
    this.musicTheme = null;
    if (!m) return;
    const ctx = this.ctx;
    try {
      m.g.gain.cancelScheduledValues(ctx.currentTime);
      m.g.gain.setValueAtTime(Math.max(0.0001, m.g.gain.value), ctx.currentTime);
      m.g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + .35);
      m.src.stop(ctx.currentTime + .4);
    } catch { try { m.src.stop(); } catch { /* gia' fermo */ } }
  },
};
