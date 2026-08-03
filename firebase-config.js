/* Config del progetto Firebase — OPZIONALE.
 *
 * Senza questo file (o con la config vuota) il gioco funziona lo stesso: il
 * profilo resta sul dispositivo, in localStorage. Compilandolo si accendono
 * login Google/Apple e sincronizzazione tra dispositivi.
 *
 * Come attivarlo (10 minuti, piano gratuito):
 *   1. console.firebase.google.com -> crea progetto (es. "susoku")
 *   2. Build > Authentication > Sign-in method -> abilita **Anonimo** e
 *      **Google**. L'anonimo NON e' un dettaglio: il gioco ci entra da solo al
 *      primo avvio, cosi' il salvataggio in cloud parte senza chiedere niente,
 *      e quando poi il giocatore sceglie Google l'account si COLLEGA a quello
 *      anonimo mantenendo lo stesso uid. Senza, chi fa il login dopo aver
 *      giocato si ritroverebbe un profilo nuovo e vuoto.
 *      (Apple richiede un account Apple Developer a pagamento: si aggiunge
 *      dopo, il codice lo supporta gia')
 *   3. Build > Firestore Database -> crea in **modalita' produzione**, MAI in
 *      modalita' test: quella lascia il database aperto a chiunque per 30
 *      giorni
 *   4. Firestore > Regole -> incolla il contenuto di `firestore.rules`
 *      (sta nella cartella del progetto) e pubblica
 *   5. Authentication > Settings > Authorized domains -> aggiungi
 *      marcohmix-debug.github.io
 *   6. Impostazioni progetto > le tue app > Web -> copia qui sotto la config
 *
 * Le regole Firestore stanno in `firestore.rules`, versionate col progetto:
 * ognuno legge e scrive SOLO il proprio documento. Quando arrivera' la
 * classifica non basta aprire la lettura di `users`: i pochi campi pubblici
 * andranno in una collezione a parte (`leaderboard/{uid}`), cosi' se un domani
 * in `users` finisce un'email non diventa pubblica per sbaglio.
 *
 * Nota: la apiKey di Firebase non e' un segreto (identifica il progetto, non
 * autorizza nulla). La sicurezza sta nelle regole qui sopra.
 */
window.FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  appId: "",
};
