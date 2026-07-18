// Manifest asset — placeholder emoji. Per usare immagini vere:
// aggiungi "img": "assets/barile.png" e il renderer la preferirà all'emoji.
const ASSETS = {
  barile:     { emoji: "🛢️", cat: "block",   it: "un barile",     en: "a barrel" },
  cassa:      { emoji: "📦", cat: "block",   it: "una cassa",     en: "a crate" },
  ancora:     { emoji: "⚓", cat: "block",   it: "un'ancora",     en: "an anchor" },
  salvagente: { emoji: "🛟", cat: "block",   it: "un salvagente", en: "a life ring" },
  pianta:     { emoji: "🪴", cat: "block",   it: "una pianta",    en: "a plant" },
  scaffale:   { emoji: "🗄️", cat: "block",   it: "uno scaffale",  en: "a shelf" },
  cuccetta:   { emoji: "🛏️", cat: "block",   it: "una cuccetta",  en: "a bunk" },
  lanterna:   { emoji: "🏮", cat: "block",   it: "una lanterna",  en: "a lantern" },
  timone:     { emoji: "☸️", cat: "block",   it: "un timone",     en: "a helm" },
  sedia:      { emoji: "🪑", cat: "sit",     it: "una sedia",     en: "a chair" },
  rete:       { emoji: "🥅", cat: "overlay", it: "una rete",      en: "a net" },
  corda:      { emoji: "🪢", cat: "overlay", it: "una corda",     en: "a rope coil" },
  pozza:      { emoji: "💧", cat: "overlay", it: "una pozza",     en: "a puddle" },
};

const AVATAR_COLORS = ["#7c5cbf", "#2e8b6e", "#c05a5a", "#3b7bbf",
                       "#b8862e", "#8a4f7d", "#4f8a8a", "#a0522d"];
