// Manifest asset — immagini cartoon in assets/props/, emoji come fallback.
// Il renderer preferisce `img` all'emoji quando presente: per dare un'immagine
// a un arredo dei temi nuovi basta aggiungere `img: "assets/props/<id>.png"`.
// Gli id sono unici tra i temi e devono combaciare con tools/themes.py.
const ASSETS = {
  /* --- marino --- */
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

  /* --- spazio --- */
  consolle:      { emoji: "🖥️", cat: "block", it: "una consolle", en: "a console", img: "assets/props/consolle.png" },
  reattore:      { emoji: "⚛️", cat: "block", it: "un reattore", en: "a reactor", img: "assets/props/reattore.png" },
  criocapsula:   { emoji: "🧊", cat: "block", it: "una criocapsula", en: "a cryopod", img: "assets/props/criocapsula.png" },
  droide:        { emoji: "🤖", cat: "block", it: "un droide", en: "a droid", img: "assets/props/droide.png" },
  serbatoio:     { emoji: "⛽", cat: "block", it: "un serbatoio", en: "a fuel tank", img: "assets/props/serbatoio.png" },
  antenna:       { emoji: "📡", cat: "block", it: "un'antenna", en: "an antenna", img: "assets/props/antenna.png" },
  idroponica:    { emoji: "🌱", cat: "block", it: "una vasca idroponica", en: "a hydroponic tank", img: "assets/props/idroponica.png" },
  oblo:          { emoji: "🪟", cat: "block", it: "un oblò", en: "a porthole", img: "assets/props/oblo.png" },
  scafandro:     { emoji: "🧑‍🚀", cat: "block", it: "uno scafandro", en: "a spacesuit", img: "assets/props/scafandro.png" },
  poltrona:      { emoji: "💺", cat: "sit", it: "una poltrona", en: "a flight seat", img: "assets/props/poltrona.png" },
  cavi:          { emoji: "🔌", cat: "overlay", it: "un fascio di cavi", en: "a cable bundle", img: "assets/props/cavi.png" },
  grata:         { emoji: "🔲", cat: "overlay", it: "una grata", en: "a floor grate", img: "assets/props/grata.png" },
  refrigerante:  { emoji: "🧪", cat: "overlay", it: "una perdita di refrigerante", en: "a coolant spill", img: "assets/props/refrigerante.png" },

  /* --- fantasy --- */
  trono:      { emoji: "👑", cat: "block", it: "un trono", en: "a throne", img: "assets/props/trono.png" },
  armatura:   { emoji: "🛡️", cat: "block", it: "un'armatura", en: "a suit of armor", img: "assets/props/armatura.png" },
  calderone:  { emoji: "🍲", cat: "block", it: "un calderone", en: "a cauldron", img: "assets/props/calderone.png" },
  libreria:   { emoji: "📚", cat: "block", it: "una libreria", en: "a bookcase", img: "assets/props/libreria.png" },
  torcia:     { emoji: "🔥", cat: "block", it: "una torcia", en: "a torch", img: "assets/props/torcia.png" },
  statua:     { emoji: "🗿", cat: "block", it: "una statua", en: "a statue", img: "assets/props/statua.png" },
  botte:      { emoji: "🛖", cat: "block", it: "una botte", en: "an ale barrel", img: "assets/props/botte.png" },
  forziere:   { emoji: "💰", cat: "block", it: "un forziere", en: "a treasure chest", img: "assets/props/forziere.png" },
  sgabello:   { emoji: "🪑", cat: "sit", it: "uno sgabello", en: "a stool", img: "assets/props/sgabello.png" },
  tappeto:    { emoji: "🟥", cat: "overlay", it: "un tappeto", en: "a rug", img: "assets/props/tappeto.png" },
  paglia:     { emoji: "🌾", cat: "overlay", it: "della paglia", en: "a bed of straw", img: "assets/props/paglia.png" },
  catene:     { emoji: "⛓️", cat: "overlay", it: "delle catene", en: "loose chains", img: "assets/props/catene.png" },
  runa:       { emoji: "✨", cat: "overlay", it: "una runa", en: "a glowing rune", img: "assets/props/runa.png" },

  /* --- natale --- */
  albero:     { emoji: "🎄", cat: "block", it: "un albero di Natale", en: "a Christmas tree", img: "assets/props/albero.png" },
  regalo:     { emoji: "🎁", cat: "block", it: "un regalo", en: "a present", img: "assets/props/regalo.png" },
  camino:     { emoji: "🧱", cat: "block", it: "un camino", en: "a fireplace", img: "assets/props/camino.png" },
  slitta:     { emoji: "🛷", cat: "block", it: "una slitta", en: "a sleigh", img: "assets/props/slitta.png" },
  pupazzo:    { emoji: "⛄", cat: "block", it: "un pupazzo di neve", en: "a snowman", img: "assets/props/pupazzo.png" },
  calza:      { emoji: "🧦", cat: "block", it: "una calza", en: "a stocking", img: "assets/props/calza.png" },
  biscotti:   { emoji: "🍪", cat: "block", it: "un vassoio di biscotti", en: "a tray of cookies", img: "assets/props/biscotti.png" },
  campana:    { emoji: "🔔", cat: "block", it: "una campana", en: "a bell", img: "assets/props/campana.png" },
  dondolo:    { emoji: "🪑", cat: "sit", it: "una sedia a dondolo", en: "a rocking chair", img: "assets/props/dondolo.png" },
  neve:       { emoji: "❄️", cat: "overlay", it: "un cumulo di neve", en: "a snow pile", img: "assets/props/neve.png" },
  nastri:     { emoji: "🎀", cat: "overlay", it: "dei nastri", en: "loose ribbons", img: "assets/props/nastri.png" },
  caramelle:  { emoji: "🍬", cat: "overlay", it: "delle caramelle", en: "candy canes", img: "assets/props/caramelle.png" },
  letterine:  { emoji: "✉️", cat: "overlay", it: "un mucchio di letterine", en: "a pile of letters", img: "assets/props/letterine.png" },

  /* --- west --- */
  bancone:        { emoji: "🍺", cat: "block", it: "un bancone", en: "a bar counter", img: "assets/props/bancone.png" },
  pianoforte:     { emoji: "🎹", cat: "block", it: "un pianoforte", en: "a piano", img: "assets/props/pianoforte.png" },
  cavallo:        { emoji: "🐎", cat: "block", it: "un cavallo", en: "a horse", img: "assets/props/cavallo.png" },
  carro:          { emoji: "🛻", cat: "block", it: "un carro", en: "a wagon", img: "assets/props/carro.png" },
  cassaforte:     { emoji: "🏦", cat: "block", it: "una cassaforte", en: "a safe", img: "assets/props/cassaforte.png" },
  abbeveratoio:   { emoji: "🪣", cat: "block", it: "un abbeveratoio", en: "a water trough", img: "assets/props/abbeveratoio.png" },
  cactus:         { emoji: "🌵", cat: "block", it: "un cactus", en: "a cactus", img: "assets/props/cactus.png" },
  barile_west:    { emoji: "🛢️", cat: "block", it: "un barile di whisky", en: "a whiskey barrel", img: "assets/props/barile_west.png" },
  cartello:       { emoji: "🪧", cat: "block", it: "un cartellone di taglia", en: "a wanted poster", img: "assets/props/cartello.png" },
  sgabello_west:  { emoji: "🪑", cat: "sit", it: "uno sgabello da saloon", en: "a saloon stool", img: "assets/props/sgabello_west.png" },
  sputacchiera:   { emoji: "🥃", cat: "overlay", it: "una sputacchiera", en: "a spittoon", img: "assets/props/sputacchiera.png" },
  sella:          { emoji: "🐴", cat: "overlay", it: "una sella", en: "a saddle", img: "assets/props/sella.png" },
  fieno:          { emoji: "🌾", cat: "overlay", it: "una balla di fieno", en: "a hay bale", img: "assets/props/fieno.png" },

  /* --- egitto --- */
  sarcofago:    { emoji: "⚰️", cat: "block", it: "un sarcofago", en: "a sarcophagus", img: "assets/props/sarcofago.png" },
  colonna:      { emoji: "🏛️", cat: "block", it: "una colonna", en: "a column", img: "assets/props/colonna.png" },
  anubi:        { emoji: "🐕", cat: "block", it: "una statua di Anubi", en: "a statue of Anubis", img: "assets/props/anubi.png" },
  urna:         { emoji: "🏺", cat: "block", it: "un'urna canopa", en: "a canopic jar", img: "assets/props/urna.png" },
  scarabeo:     { emoji: "🪲", cat: "block", it: "uno scarabeo di pietra", en: "a stone scarab", img: "assets/props/scarabeo.png" },
  obelisco:     { emoji: "🗼", cat: "block", it: "un obelisco", en: "an obelisk", img: "assets/props/obelisco.png" },
  bracere:      { emoji: "🔥", cat: "block", it: "un braciere", en: "a brazier", img: "assets/props/bracere.png" },
  papiri:       { emoji: "📜", cat: "block", it: "una pila di papiri", en: "a stack of papyri", img: "assets/props/papiri.png" },
  grano:        { emoji: "🌾", cat: "block", it: "un sacco di grano", en: "a grain sack", img: "assets/props/grano.png" },
  trono_eg:     { emoji: "🪑", cat: "sit", it: "un seggio di pietra", en: "a stone seat", img: "assets/props/trono_eg.png" },
  sabbia:       { emoji: "🏜️", cat: "overlay", it: "un cumulo di sabbia", en: "a sand drift", img: "assets/props/sabbia.png" },
  geroglifici:  { emoji: "𓂀", cat: "overlay", it: "dei geroglifici", en: "hieroglyphs", img: "assets/props/geroglifici.png" },
  acqua_nilo:   { emoji: "💧", cat: "overlay", it: "una pozza d'acqua", en: "a water pool", img: "assets/props/acqua_nilo.png" },

  /* --- hotel --- */
  reception:     { emoji: "🛎️", cat: "block", it: "il bancone della reception", en: "the reception desk", img: "assets/props/reception.png" },
  pianoforte_h:  { emoji: "🎼", cat: "block", it: "un pianoforte a coda", en: "a grand piano", img: "assets/props/pianoforte_h.png" },
  lampadario:    { emoji: "💡", cat: "block", it: "un lampadario", en: "a chandelier", img: "assets/props/lampadario.png" },
  baule:         { emoji: "🧳", cat: "block", it: "un baule da viaggio", en: "a steamer trunk", img: "assets/props/baule.png" },
  biliardo:      { emoji: "🎱", cat: "block", it: "un tavolo da biliardo", en: "a billiard table", img: "assets/props/biliardo.png" },
  palma:         { emoji: "🌴", cat: "block", it: "una palma in vaso", en: "a potted palm", img: "assets/props/palma.png" },
  grammofono:    { emoji: "📻", cat: "block", it: "un grammofono", en: "a gramophone", img: "assets/props/grammofono.png" },
  carrello:      { emoji: "🍾", cat: "block", it: "un carrello dello champagne", en: "a champagne cart", img: "assets/props/carrello.png" },
  specchio:      { emoji: "🪞", cat: "block", it: "uno specchio", en: "a mirror", img: "assets/props/specchio.png" },
  poltrona_h:    { emoji: "🛋️", cat: "sit", it: "una poltrona di velluto", en: "a velvet armchair", img: "assets/props/poltrona_h.png" },
  tappeto_h:     { emoji: "🟪", cat: "overlay", it: "un tappeto persiano", en: "a persian carpet", img: "assets/props/tappeto_h.png" },
  bicchieri:     { emoji: "🥂", cat: "overlay", it: "dei bicchieri rotti", en: "broken glasses", img: "assets/props/bicchieri.png" },
  cappotto:      { emoji: "🧥", cat: "overlay", it: "un cappotto caduto", en: "a dropped coat", img: "assets/props/cappotto.png" },
};

// Texture pavimento per tipo di stanza (chiave = key stanza).
// Le stanze senza texture usano il pattern CSS + colore.
const FLOOR_IMG = {
  ponte:    "assets/floors/ponte.jpg",
  cabina:   "assets/floors/cabina.jpg",
  cambusa:  "assets/floors/cambusa.jpg",
  stiva:    "assets/floors/stiva.jpg",
  plancia:  "assets/floors/plancia.jpg",
  molo:     "assets/floors/molo.jpg",
  spiaggia: "assets/floors/spiaggia.jpg",
  faro:     "assets/floors/faro.jpg",

  /* spazio */
  comando:     "assets/floors/comando.jpg",
  laboratorio: "assets/floors/laboratorio.jpg",
  serra:       "assets/floors/serra.jpg",
  hangar:      "assets/floors/hangar.jpg",
  criosonno:   "assets/floors/criosonno.jpg",
  mensa:       "assets/floors/mensa.jpg",
  motori:      "assets/floors/motori.jpg",
  antenne:     "assets/floors/antenne.jpg",

  /* fantasy */
  trono_sala: "assets/floors/trono_sala.jpg",
  biblioteca: "assets/floors/biblioteca.jpg",
  armeria:    "assets/floors/armeria.jpg",
  cucine:     "assets/floors/cucine.jpg",
  segrete:    "assets/floors/segrete.jpg",
  torre:      "assets/floors/torre.jpg",
  cappella:   "assets/floors/cappella.jpg",
  cortile:    "assets/floors/cortile.jpg",

  /* west */
  saloon:    "assets/floors/saloon.jpg",
  emporio:   "assets/floors/emporio.jpg",
  sceriffo:  "assets/floors/sceriffo.jpg",
  stalle:    "assets/floors/stalle.jpg",
  banca:     "assets/floors/banca.jpg",
  stazione:  "assets/floors/stazione.jpg",
  canyon:    "assets/floors/canyon.jpg",
  miniera:   "assets/floors/miniera.jpg",

  /* hotel */
  hall:       "assets/floors/hall.jpg",
  sala_ballo: "assets/floors/sala_ballo.jpg",
  ristorante: "assets/floors/ristorante.jpg",
  suite:      "assets/floors/suite.jpg",
  cucine_h:   "assets/floors/cucine_h.jpg",
  giardino_i: "assets/floors/giardino_i.jpg",
  biliardo_s: "assets/floors/biliardo_s.jpg",
  cantina:    "assets/floors/cantina.jpg",

  /* natale */
  officina:   "assets/floors/officina.jpg",
  stalla:     "assets/floors/stalla.jpg",
  cucina_nat: "assets/floors/cucina_nat.jpg",
  magazzino:  "assets/floors/magazzino.jpg",
  salotto:    "assets/floors/salotto.jpg",
  ufficio:    "assets/floors/ufficio.jpg",
  giardino:   "assets/floors/giardino.jpg",
  lettere:    "assets/floors/lettere.jpg",

  /* egitto */
  camera_faraone: "assets/floors/camera_faraone.jpg",
  offerte:        "assets/floors/offerte.jpg",
  corridoio:      "assets/floors/corridoio.jpg",
  tesoro:         "assets/floors/tesoro.jpg",
  cripta:         "assets/floors/cripta.jpg",
  colonne:        "assets/floors/colonne.jpg",
  cortile_t:      "assets/floors/cortile_t.jpg",
  granaio:        "assets/floors/granaio.jpg",
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
    [n, `assets/faces/${th}/${n.toLowerCase()}.png`])),
]));

// Ritratto di un sospettato nel tema corrente; ripiega sul set generico
// (livelli vecchi con nomi fuori dai 16, zone senza avatar dedicati).
function faceFor(name, theme) {
  return (FACE_SETS[theme] && FACE_SETS[theme][name]) || FACE_IMG[name] || null;
}
