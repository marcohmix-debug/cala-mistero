/* Id AdMob — VUOTI di proposito.
 *
 * Finché questo file resta così, il gioco usa gli **id ufficiali di prova** di
 * Google: mostrano annunci finti, funzionano senza account e non generano
 * ricavi. Servono proprio per sviluppare senza rischi — usare gli id VERI in
 * sviluppo, cliccando i propri annunci, è il modo classico per farsi
 * sospendere l'account AdMob.
 *
 * Per accendere quelli veri:
 *   1. apps.admob.com → crea l'app (Android e, quando ci sarà, iOS)
 *   2. crea un'unità pubblicitaria di tipo **Con premio** (rewarded)
 *   3. incolla qui sotto gli id delle unità, e l'**id dell'applicazione**
 *      (quello con la tilde, ca-app-pub-XXXX~YYYY) va invece messo in
 *      `android/app/src/main/AndroidManifest.xml`, dove ora c'è quello di prova
 *
 * L'id dell'app non è un segreto: sta nel pacchetto e chiunque può leggerlo.
 */
window.ADMOB_IDS = null;
// window.ADMOB_IDS = {
//   rewardedAndroid: "ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX",
//   rewardedIos:     "ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX",
// };
