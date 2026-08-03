/* Id AdMob.
 *
 * `testing` è l'interruttore che conta: finché è **true** il gioco mostra gli
 * annunci FINTI di prova di Google, anche se qui sotto ci sono gli id veri.
 * Serve a te: aprire la tua app e guardare i tuoi annunci veri conta come
 * traffico non valido, ed è il modo classico per farsi sospendere l'account
 * AdMob. Va messo a `false` solo per la build che carichi sullo store.
 *
 * In alternativa (o in più) registra il tuo telefono come dispositivo di test
 * in AdMob: così vedi annunci di prova anche con `testing: false`.
 *
 * L'id dell'APPLICAZIONE (quello con la tilde ~) non sta qui: è in
 * `android/app/src/main/AndroidManifest.xml`, dove l'SDK lo cerca.
 * Nessuno dei due è un segreto: viaggiano dentro il pacchetto.
 */
window.ADMOB_IDS = {
  testing: true,

  // unità "Con premio" dell'app Android
  rewardedAndroid: "ca-app-pub-2801047801189424/5629886141",

  // iOS non esiste ancora in AdMob: finché è vuoto, lì restano gli id di prova
  rewardedIos: "",
};
