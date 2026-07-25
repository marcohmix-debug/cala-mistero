/* Config del progetto Firebase — OPZIONALE.
 *
 * Senza questo file (o con la config vuota) il gioco funziona lo stesso: il
 * profilo resta sul dispositivo, in localStorage. Compilandolo si accendono
 * login Google/Apple e sincronizzazione tra dispositivi.
 *
 * Come attivarlo (10 minuti, piano gratuito):
 *   1. console.firebase.google.com -> crea progetto (es. "susoku")
 *   2. Build > Authentication > Sign-in method -> abilita Google
 *      (Apple richiede un account Apple Developer a pagamento: si aggiunge
 *      dopo, il codice lo supporta gia')
 *   3. Build > Firestore Database -> crea in modalita' produzione
 *   4. Authentication > Settings > Authorized domains -> aggiungi
 *      marcohmix-debug.github.io
 *   5. Impostazioni progetto > le tue app > Web -> copia qui sotto la config
 *
 * Regole Firestore consigliate (ognuno scrive solo il proprio documento;
 * lettura aperta per la futura classifica):
 *   rules_version = '2';
 *   service cloud.firestore {
 *     match /databases/{db}/documents {
 *       match /users/{uid} {
 *         allow read: if true;
 *         allow write: if request.auth != null && request.auth.uid == uid;
 *       }
 *     }
 *   }
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
