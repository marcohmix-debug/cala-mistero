// Manifest asset — immagini cartoon in assets/props/, emoji come fallback.
// Il renderer preferisce `img` all'emoji quando presente.
const ASSETS = {
  barile:     { emoji: "🛢️", cat: "block",   it: "un barile",     en: "a barrel",    img: "assets/props/barile.png" },
  cassa:      { emoji: "📦", cat: "block",   it: "una cassa",     en: "a crate",     img: "assets/props/cassa.png" },
  ancora:     { emoji: "⚓", cat: "block",   it: "un'ancora",     en: "an anchor",   img: "assets/props/ancora.png" },
  salvagente: { emoji: "🛟", cat: "block",   it: "un salvagente", en: "a life ring", img: "assets/props/salvagente.png" },
  pianta:     { emoji: "🪴", cat: "block",   it: "una pianta",    en: "a plant",     img: "assets/props/pianta.png" },
  scaffale:   { emoji: "🗄️", cat: "block",   it: "uno scaffale",  en: "a shelf",     img: "assets/props/scaffale.png" },
  cuccetta:   { emoji: "🛏️", cat: "block",   it: "una cuccetta",  en: "a bunk",      img: "assets/props/cuccetta.png" },
  lanterna:   { emoji: "🏮", cat: "block",   it: "una lanterna",  en: "a lantern",   img: "assets/props/lanterna.png" },
  timone:     { emoji: "☸️", cat: "block",   it: "un timone",     en: "a helm",      img: "assets/props/timone.png" },
  sedia:      { emoji: "🪑", cat: "sit",     it: "una sedia",     en: "a chair",     img: "assets/props/sedia.png" },
  rete:       { emoji: "🥅", cat: "overlay", it: "una rete",      en: "a net",       img: "assets/props/rete.png" },
  corda:      { emoji: "🪢", cat: "overlay", it: "una corda",     en: "a rope coil", img: "assets/props/corda.png" },
  pozza:      { emoji: "💧", cat: "overlay", it: "una pozza",     en: "a puddle",    img: "assets/props/pozza.png" },
};

// Texture pavimento per tipo di stanza (chiave = key stanza).
// Le stanze senza texture usano il pattern CSS + colore.
const FLOOR_IMG = {
  ponte:    "assets/floors/ponte.jpg",
  cabina:   "assets/floors/cabina.jpg",
  plancia:  "assets/floors/plancia.jpg",
  stiva:    "assets/floors/stiva.jpg",
  spiaggia: "assets/floors/spiaggia.jpg",
};

const AVATAR_COLORS = ["#7c5cbf", "#2e8b6e", "#c05a5a", "#3b7bbf",
                       "#b8862e", "#8a4f7d", "#4f8a8a", "#a0522d"];
