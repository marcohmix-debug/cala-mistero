// La versione si legge dall'indirizzo con cui app.js registra questo file
// (`sw.js?v=BUILD`), NON si scrive qui: se fosse una costante da aggiornare a
// mano diventerebbe il terzo posto da toccare a ogni release, dopo index.html e
// app.js, e il giorno che lo si dimentica il service worker precaricherebbe la
// versione vecchia dei file mentre la pagina ne carica una nuova.
const V = new URL(self.location.href).searchParams.get("v") || "0";
const CACHE = "susoku-v" + V;
const APP_SHELL = [
  "./",
  "./index.html",
  `./style.css?v=${V}`,
  `./app.js?v=${V}`,
  `./assets.js?v=${V}`,
  `./audio.js?v=${V}`,
  `./profile.js?v=${V}`,
  `./firebase-config.js?v=${V}`,
  `./manifest.webmanifest?v=${V}`,
  `./levels/index.json?v=${V}`,
  `./levels/daily.json?v=${V}`,
  "./assets/brand/favicon-tropical.png",
  "./assets/brand/icon-tropical-180.png",
  "./assets/brand/icon-tropical-192.png",
  "./assets/brand/icon-tropical-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put("./index.html", copy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fresh = fetch(event.request).then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => cached);
      return cached || fresh;
    })
  );
});
