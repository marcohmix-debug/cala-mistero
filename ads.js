/* SUSoku — video pubblicitari con premio (AdMob).
 *
 * Un solo formato: il **rewarded video**. Il giocatore sceglie di guardarlo in
 * cambio di qualcosa — un aiuto, una sfida passata da recuperare. Non
 * interrompe mai niente di sua iniziativa: e' l'unico formato che si puo'
 * mettere in un puzzle senza rovinarlo, ed e' anche quello che rende di piu'.
 *
 * Il premio si accredita SOLO sull'evento `Rewarded` di AdMob, non alla
 * chiusura del video: chi lo salta non prende niente, ed e' cosi' che deve
 * essere. Se pero' l'annuncio non c'e' (nessun inventario, rete assente,
 * gioco aperto nel browser) il premio si da' lo stesso: il giocatore ha fatto
 * la sua parte, e punirlo per un problema nostro sarebbe assurdo.
 *
 * Fuori dall'app impacchettata il plugin non esiste e questo modulo lo sa:
 * `Ads.ready` resta falso e tutto ricade sul premio diretto, come prima.
 *
 * ID: oggi ci sono quelli **ufficiali di prova** di Google, che mostrano
 * annunci finti e si possono usare senza account. Vanno sostituiti con quelli
 * veri prima di pubblicare — un'app che va in store con gli id di prova non
 * guadagna, e usare gli id veri in sviluppo fa sospendere l'account.
 */

const ADMOB_TEST = {
  rewardedAndroid: "ca-app-pub-3940256099942544/5224354917",
  rewardedIos: "ca-app-pub-3940256099942544/1712485313",
};

const Ads = {
  plugin: null,
  ready: false,
  consentDone: false,

  /** true quando il video vero e' disponibile; se no si ripiega sul premio. */
  get available() { return this.ready; },

  async init() {
    if (this.ready) return true;
    const cap = window.Capacitor;
    if (!cap?.isNativePlatform?.()) return false;      // browser: niente SDK
    const p = cap.Plugins?.AdMob;
    if (!p) return false;
    this.plugin = p;
    try {
      await p.initialize({
        // niente pubblicita' personalizzata finche' il consenso non c'e':
        // e' il default corretto in Europa, e alza solo di poco il ricavo
        initializeForTesting: this.testing,
        tagForChildDirectedTreatment: false,
      });
      await this.consent();
      this.ready = true;
    } catch (e) {
      console.warn("AdMob non inizializzato:", e);
    }
    return this.ready;
  },

  /** Modulo di consenso di Google (UMP). Obbligatorio in Europa: senza, si
   *  possono mostrare solo annunci non personalizzati, e Play lo controlla. */
  async consent() {
    if (this.consentDone) return;
    try {
      const info = await this.plugin.requestConsentInfo();
      if (info.isConsentFormAvailable && info.status === "REQUIRED") {
        await this.plugin.showConsentForm();
      }
    } catch (e) {
      console.warn("consenso non richiesto:", e);
    }
    this.consentDone = true;
  },

  /** true finche' si devono mostrare annunci finti. */
  get testing() {
    const ids = window.ADMOB_IDS;
    return !ids || ids.testing !== false;
  },

  unitId() {
    const ids = window.ADMOB_IDS;
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const test = ios ? ADMOB_TEST.rewardedIos : ADMOB_TEST.rewardedAndroid;
    if (this.testing) return test;
    // se la piattaforma non ha ancora un'unita' sua (iOS oggi) si resta sui
    // finti: un id vuoto farebbe fallire la richiesta e basta
    return (ios ? ids.rewardedIos : ids.rewardedAndroid) || test;
  },

  /** Mostra un video con premio. -> true se il premio va dato.
   *
   * Ritorna true anche quando l'annuncio non e' disponibile: vedi sopra, il
   * giocatore non deve pagare per i nostri problemi di inventario. Ritorna
   * false solo quando l'annuncio c'e' stato e NON e' stato completato. */
  async rewarded() {
    if (!(await this.init())) return true;
    try {
      await this.plugin.prepareRewardVideoAd({ adId: this.unitId() });
      const res = await this.plugin.showRewardVideoAd();
      // il plugin restituisce il premio solo se il video e' stato visto
      return !!(res && (res.type || res.amount != null));
    } catch (e) {
      console.warn("video non mostrato:", e);
      return true;
    }
  },
};
