// Manifest asset — immagini cartoon in assets/props/, emoji come fallback.
// Il renderer preferisce `img` all'emoji quando presente: per dare un'immagine
// a un arredo dei temi nuovi basta aggiungere `img: "assets/props/<id>.png"`.
// Gli id sono unici tra i temi e devono combaciare con tools/themes.py.
const ASSETS = {
  /* --- marino --- */
  barile:     { emoji: "🛢️", cat: "block",   it: "un barile",     en: "a barrel",    img: "assets/props/barile.webp" },
  cassa:      { emoji: "📦", cat: "block",   it: "una cassa",     en: "a crate",     img: "assets/props/cassa.webp" },
  ancora:     { emoji: "⚓", cat: "block",   it: "un'ancora",     en: "an anchor",   img: "assets/props/ancora.webp" },
  salvagente: { emoji: "🛟", cat: "block",   it: "un salvagente", en: "a life ring", img: "assets/props/salvagente.webp" },
  pianta:     { emoji: "🪴", cat: "block",   it: "una pianta",    en: "a plant",     img: "assets/props/pianta.webp" },
  scaffale:   { emoji: "🗄️", cat: "block",   it: "uno scaffale",  en: "a shelf",     img: "assets/props/scaffale.webp" },
  cuccetta:   { emoji: "🛏️", cat: "block",   it: "una cuccetta",  en: "a bunk",      img: "assets/props/cuccetta.webp" },
  lanterna:   { emoji: "🏮", cat: "block",   it: "una lanterna",  en: "a lantern",   img: "assets/props/lanterna.webp" },
  timone:     { emoji: "☸️", cat: "block",   it: "un timone",     en: "a helm",      img: "assets/props/timone.webp" },
  sedia:      { emoji: "🪑", cat: "sit",     it: "una sedia",     en: "a chair",     img: "assets/props/sedia.webp" },
  rete:       { emoji: "🥅", cat: "overlay", it: "una rete",      en: "a net",       img: "assets/props/rete.webp" },
  corda:      { emoji: "🪢", cat: "overlay", it: "una corda",     en: "a rope coil", img: "assets/props/corda.webp" },
  pozza:      { emoji: "💧", cat: "overlay", it: "una pozza",     en: "a puddle",    img: "assets/props/pozza.webp" },

  /* --- spazio --- */
  consolle:      { emoji: "🖥️", cat: "block", it: "una consolle", en: "a console", img: "assets/props/consolle.webp" },
  reattore:      { emoji: "⚛️", cat: "block", it: "un reattore", en: "a reactor", img: "assets/props/reattore.webp" },
  criocapsula:   { emoji: "🧊", cat: "block", it: "una criocapsula", en: "a cryopod", img: "assets/props/criocapsula.webp" },
  droide:        { emoji: "🤖", cat: "block", it: "un droide", en: "a droid", img: "assets/props/droide.webp" },
  serbatoio:     { emoji: "⛽", cat: "block", it: "un serbatoio", en: "a fuel tank", img: "assets/props/serbatoio.webp" },
  antenna:       { emoji: "📡", cat: "block", it: "un'antenna", en: "an antenna", img: "assets/props/antenna.webp" },
  idroponica:    { emoji: "🌱", cat: "block", it: "una vasca idroponica", en: "a hydroponic tank", img: "assets/props/idroponica.webp" },
  oblo:          { emoji: "🪟", cat: "block", it: "un oblò", en: "a porthole", img: "assets/props/oblo.webp" },
  scafandro:     { emoji: "🧑‍🚀", cat: "block", it: "uno scafandro", en: "a spacesuit", img: "assets/props/scafandro.webp" },
  poltrona:      { emoji: "💺", cat: "sit", it: "una poltrona", en: "a flight seat", img: "assets/props/poltrona.webp" },
  cavi:          { emoji: "🔌", cat: "overlay", it: "un fascio di cavi", en: "a cable bundle", img: "assets/props/cavi.webp" },
  grata:         { emoji: "🔲", cat: "overlay", it: "una grata", en: "a floor grate", img: "assets/props/grata.webp" },
  refrigerante:  { emoji: "🧪", cat: "overlay", it: "una perdita di refrigerante", en: "a coolant spill", img: "assets/props/refrigerante.webp" },

  /* --- fantasy --- */
  trono:      { emoji: "👑", cat: "block", it: "un trono", en: "a throne", img: "assets/props/trono.webp" },
  armatura:   { emoji: "🛡️", cat: "block", it: "un'armatura", en: "a suit of armor", img: "assets/props/armatura.webp" },
  calderone:  { emoji: "🍲", cat: "block", it: "un calderone", en: "a cauldron", img: "assets/props/calderone.webp" },
  libreria:   { emoji: "📚", cat: "block", it: "una libreria", en: "a bookcase", img: "assets/props/libreria.webp" },
  torcia:     { emoji: "🔥", cat: "block", it: "una torcia", en: "a torch", img: "assets/props/torcia.webp" },
  gargoyle:   { emoji: "🗿", cat: "block", it: "un gargoyle", en: "a gargoyle", img: "assets/props/gargoyle.webp" },
  botte:      { emoji: "🛖", cat: "block", it: "una botte", en: "an ale barrel", img: "assets/props/botte.webp" },
  forziere:   { emoji: "💰", cat: "block", it: "un forziere", en: "a treasure chest", img: "assets/props/forziere.webp" },
  sgabello:   { emoji: "🪑", cat: "sit", it: "uno sgabello", en: "a stool", img: "assets/props/sgabello.webp" },
  tappeto:    { emoji: "🟥", cat: "overlay", it: "un tappeto", en: "a rug", img: "assets/props/tappeto.webp" },
  paglia:     { emoji: "🌾", cat: "overlay", it: "della paglia", en: "a bed of straw", img: "assets/props/paglia.webp" },
  catene:     { emoji: "⛓️", cat: "overlay", it: "delle catene", en: "loose chains", img: "assets/props/catene.webp" },
  runa:       { emoji: "✨", cat: "overlay", it: "una runa", en: "a glowing rune", img: "assets/props/runa.webp" },

  /* --- natale --- */
  albero:     { emoji: "🎄", cat: "block", it: "un albero di Natale", en: "a Christmas tree", img: "assets/props/albero.webp" },
  regalo:     { emoji: "🎁", cat: "block", it: "un regalo", en: "a present", img: "assets/props/regalo.webp" },
  camino:     { emoji: "🧱", cat: "block", it: "un camino", en: "a fireplace", img: "assets/props/camino.webp" },
  slitta:     { emoji: "🛷", cat: "block", it: "una slitta", en: "a sleigh", img: "assets/props/slitta.webp" },
  pupazzo:    { emoji: "⛄", cat: "block", it: "un pupazzo di neve", en: "a snowman", img: "assets/props/pupazzo.webp" },
  calza:      { emoji: "🧦", cat: "block", it: "una calza", en: "a stocking", img: "assets/props/calza.webp" },
  biscotti:   { emoji: "🍪", cat: "block", it: "un vassoio di biscotti", en: "a tray of cookies", img: "assets/props/biscotti.webp" },
  campana:    { emoji: "🔔", cat: "block", it: "una campana", en: "a bell", img: "assets/props/campana.webp" },
  dondolo:    { emoji: "🪑", cat: "sit", it: "una sedia a dondolo", en: "a rocking chair", img: "assets/props/dondolo.webp" },
  neve:       { emoji: "❄️", cat: "overlay", it: "un cumulo di neve", en: "a snow pile", img: "assets/props/neve.webp" },
  nastri:     { emoji: "🎀", cat: "overlay", it: "dei nastri", en: "loose ribbons", img: "assets/props/nastri.webp" },
  caramelle:  { emoji: "🍬", cat: "overlay", it: "delle caramelle", en: "candy canes", img: "assets/props/caramelle.webp" },
  letterine:  { emoji: "✉️", cat: "overlay", it: "un mucchio di letterine", en: "a pile of letters", img: "assets/props/letterine.webp" },

  /* --- west --- */
  bancone:        { emoji: "🍺", cat: "block", it: "un bancone", en: "a bar counter", img: "assets/props/bancone.webp" },
  pianoforte:     { emoji: "🎹", cat: "block", it: "un pianoforte", en: "a piano", img: "assets/props/pianoforte.webp" },
  cavallo:        { emoji: "🐎", cat: "block", it: "un cavallo", en: "a horse", img: "assets/props/cavallo.webp" },
  carro:          { emoji: "🛻", cat: "block", it: "un carro", en: "a wagon", img: "assets/props/carro.webp" },
  cassaforte:     { emoji: "🏦", cat: "block", it: "una cassaforte", en: "a safe", img: "assets/props/cassaforte.webp" },
  abbeveratoio:   { emoji: "🪣", cat: "block", it: "un abbeveratoio", en: "a water trough", img: "assets/props/abbeveratoio.webp" },
  cactus:         { emoji: "🌵", cat: "block", it: "un cactus", en: "a cactus", img: "assets/props/cactus.webp" },
  barile_west:    { emoji: "🛢️", cat: "block", it: "un barile di whisky", en: "a whiskey barrel", img: "assets/props/barile_west.webp" },
  cartello:       { emoji: "🪧", cat: "block", it: "un cartellone di taglia", en: "a wanted poster", img: "assets/props/cartello.webp" },
  sgabello_west:  { emoji: "🪑", cat: "sit", it: "uno sgabello da saloon", en: "a saloon stool", img: "assets/props/sgabello_west.webp" },
  sputacchiera:   { emoji: "🥃", cat: "overlay", it: "una sputacchiera", en: "a spittoon", img: "assets/props/sputacchiera.webp" },
  sella:          { emoji: "🐴", cat: "overlay", it: "una sella", en: "a saddle", img: "assets/props/sella.webp" },
  fieno:          { emoji: "🌾", cat: "overlay", it: "una balla di fieno", en: "a hay bale", img: "assets/props/fieno.webp" },

  /* --- egitto --- */
  sarcofago:    { emoji: "⚰️", cat: "block", it: "un sarcofago", en: "a sarcophagus", img: "assets/props/sarcofago.webp" },
  colonna:      { emoji: "🏛️", cat: "block", it: "una colonna", en: "a column", img: "assets/props/colonna.webp" },
  anubi:        { emoji: "🐕", cat: "block", it: "una statua di Anubi", en: "a statue of Anubis", img: "assets/props/anubi.webp" },
  urna:         { emoji: "🏺", cat: "block", it: "un'urna canopa", en: "a canopic jar", img: "assets/props/urna.webp" },
  scarabeo:     { emoji: "🪲", cat: "block", it: "uno scarabeo di pietra", en: "a stone scarab", img: "assets/props/scarabeo.webp" },
  obelisco:     { emoji: "🗼", cat: "block", it: "un obelisco", en: "an obelisk", img: "assets/props/obelisco.webp" },
  bracere:      { emoji: "🔥", cat: "block", it: "un braciere", en: "a brazier", img: "assets/props/bracere.webp" },
  papiri:       { emoji: "📜", cat: "block", it: "una pila di papiri", en: "a stack of papyri", img: "assets/props/papiri.webp" },
  grano:        { emoji: "🌾", cat: "block", it: "un sacco di grano", en: "a grain sack", img: "assets/props/grano.webp" },
  trono_eg:     { emoji: "🪑", cat: "sit", it: "un seggio di pietra", en: "a stone seat", img: "assets/props/trono_eg.webp" },
  sabbia:       { emoji: "🏜️", cat: "overlay", it: "un cumulo di sabbia", en: "a sand drift", img: "assets/props/sabbia.webp" },
  geroglifici:  { emoji: "𓂀", cat: "overlay", it: "dei geroglifici", en: "hieroglyphs", img: "assets/props/geroglifici.webp" },
  acqua_nilo:   { emoji: "💧", cat: "overlay", it: "una pozza d'acqua", en: "a water pool", img: "assets/props/acqua_nilo.webp" },

  /* --- hotel --- */
  reception:     { emoji: "🛎️", cat: "block", it: "il bancone della reception", en: "the reception desk", img: "assets/props/reception.webp" },
  pianoforte_h:  { emoji: "🎼", cat: "block", it: "un pianoforte a coda", en: "a grand piano", img: "assets/props/pianoforte_h.webp" },
  lampadario:    { emoji: "💡", cat: "block", it: "un lampadario", en: "a chandelier", img: "assets/props/lampadario.webp" },
  baule:         { emoji: "🧳", cat: "block", it: "un baule da viaggio", en: "a steamer trunk", img: "assets/props/baule.webp" },
  biliardo:      { emoji: "🎱", cat: "block", it: "un tavolo da biliardo", en: "a billiard table", img: "assets/props/biliardo.webp" },
  palma:         { emoji: "🌴", cat: "block", it: "una palma in vaso", en: "a potted palm", img: "assets/props/palma.webp" },
  grammofono:    { emoji: "📻", cat: "block", it: "un grammofono", en: "a gramophone", img: "assets/props/grammofono.webp" },
  carrello:      { emoji: "🍾", cat: "block", it: "un carrello dello champagne", en: "a champagne cart", img: "assets/props/carrello.webp" },
  specchio:      { emoji: "🪞", cat: "block", it: "uno specchio", en: "a mirror", img: "assets/props/specchio.webp" },
  poltrona_h:    { emoji: "🛋️", cat: "sit", it: "una poltrona di velluto", en: "a velvet armchair", img: "assets/props/poltrona_h.webp" },
  tappeto_h:     { emoji: "🟪", cat: "overlay", it: "un tappeto persiano", en: "a persian carpet", img: "assets/props/tappeto_h.webp" },
  bicchieri:     { emoji: "🥂", cat: "overlay", it: "dei bicchieri rotti", en: "broken glasses", img: "assets/props/bicchieri.webp" },
  cappotto:      { emoji: "🧥", cat: "overlay", it: "un cappotto caduto", en: "a dropped coat", img: "assets/props/cappotto.webp" },
};

// Texture pavimento per tipo di stanza (chiave = key stanza).
// Le stanze senza texture usano il pattern CSS + colore.
const FLOOR_IMG = {
  ponte:    "assets/floors/ponte.webp",
  cabina:   "assets/floors/cabina.webp",
  cambusa:  "assets/floors/cambusa.webp",
  stiva:    "assets/floors/stiva.webp",
  plancia:  "assets/floors/plancia.webp",
  molo:     "assets/floors/molo.webp",
  spiaggia: "assets/floors/spiaggia.webp",
  faro:     "assets/floors/faro.webp",

  /* spazio */
  comando:     "assets/floors/comando.webp",
  laboratorio: "assets/floors/laboratorio.webp",
  serra:       "assets/floors/serra.webp",
  hangar:      "assets/floors/hangar.webp",
  criosonno:   "assets/floors/criosonno.webp",
  mensa:       "assets/floors/mensa.webp",
  motori:      "assets/floors/motori.webp",
  antenne:     "assets/floors/antenne.webp",

  /* fantasy */
  trono_sala: "assets/floors/trono_sala.webp",
  biblioteca: "assets/floors/biblioteca.webp",
  armeria:    "assets/floors/armeria.webp",
  cucine:     "assets/floors/cucine.webp",
  segrete:    "assets/floors/segrete.webp",
  torre:      "assets/floors/torre.webp",
  cappella:   "assets/floors/cappella.webp",
  cortile:    "assets/floors/cortile.webp",

  /* west */
  saloon:    "assets/floors/saloon.webp",
  emporio:   "assets/floors/emporio.webp",
  sceriffo:  "assets/floors/sceriffo.webp",
  stalle:    "assets/floors/stalle.webp",
  banca:     "assets/floors/banca.webp",
  stazione:  "assets/floors/stazione.webp",
  canyon:    "assets/floors/canyon.webp",
  miniera:   "assets/floors/miniera.webp",

  /* hotel */
  hall:       "assets/floors/hall.webp",
  sala_ballo: "assets/floors/sala_ballo.webp",
  ristorante: "assets/floors/ristorante.webp",
  suite:      "assets/floors/suite.webp",
  cucine_h:   "assets/floors/cucine_h.webp",
  giardino_i: "assets/floors/giardino_i.webp",
  biliardo_s: "assets/floors/biliardo_s.webp",
  cantina:    "assets/floors/cantina.webp",

  /* natale */
  officina:   "assets/floors/officina.webp",
  stalla:     "assets/floors/stalla.webp",
  cucina_nat: "assets/floors/cucina_nat.webp",
  magazzino:  "assets/floors/magazzino.webp",
  salotto:    "assets/floors/salotto.webp",
  ufficio:    "assets/floors/ufficio.webp",
  giardino:   "assets/floors/giardino.webp",
  lettere:    "assets/floors/lettere.webp",

  /* egitto */
  camera_faraone: "assets/floors/camera_faraone.webp",
  offerte:        "assets/floors/offerte.webp",
  corridoio:      "assets/floors/corridoio.webp",
  tesoro:         "assets/floors/tesoro.webp",
  cripta:         "assets/floors/cripta.webp",
  colonne:        "assets/floors/colonne.webp",
  cortile_t:      "assets/floors/cortile_t.webp",
  granaio:        "assets/floors/granaio.webp",
};

const AVATAR_COLORS = ["#7c5cbf", "#2e8b6e", "#c05a5a", "#3b7bbf",
                       "#b8862e", "#8a4f7d", "#4f8a8a", "#a0522d"];

// Ritratto per nome sospettato (fallback: iniziale su colore).
const FACE_IMG = {
  Anna: "assets/faces/anna.jpg",   Bruno: "assets/faces/bruno.jpg",
  Carla: "assets/faces/carla.jpg", Dario: "assets/faces/dario.jpg",
  Elena: "assets/faces/elena.jpg", Fabio: "assets/faces/fabio.jpg",
  Giada: "assets/faces/giada.jpg", Ugo: "assets/faces/ugo.jpg",
  Irene: "assets/faces/irene.jpg", Luca: "assets/faces/luca.jpg",
  Marta: "assets/faces/marta.jpg", Nino: "assets/faces/nino.jpg",
  Olga: "assets/faces/olga.jpg", Paolo: "assets/faces/paolo.jpg",
  Rosa: "assets/faces/rosa.jpg", Sergio: "assets/faces/sergio.jpg",
  Tea: "assets/faces/tea.jpg", Vito: "assets/faces/vito.jpg",
};

// Ritratti a tema: gli stessi 16 personaggi ridisegnati per ogni zona
// (tools/split_avatars.py ritaglia le griglie 4x4 in Avatar/).
// I file sono assets/faces/<tema>/<nome minuscolo>.png.
const FACE_THEMES = ["marino", "spazio", "fantasy", "natale",
                     "west", "egitto", "hotel"];
const FACE_NAMES = ["Bruno", "Anna", "Dario", "Carla",
                    "Fabio", "Elena", "Ugo", "Giada",
                    "Irene", "Luca", "Marta", "Nino",
                    "Paolo", "Sergio", "Olga", "Rosa"];
const FACE_SETS = Object.fromEntries(FACE_THEMES.map((th) => [
  th, Object.fromEntries(FACE_NAMES.map((n) =>
    [n, `assets/faces/${th}/${n.toLowerCase()}.webp`])),
]));

// Ritratto di un sospettato nel tema corrente; ripiega sul set generico
// (livelli vecchi con nomi fuori dai 16, zone senza avatar dedicati).
function faceFor(name, theme) {
  return (FACE_SETS[theme] && FACE_SETS[theme][name]) || FACE_IMG[name] || null;
}
