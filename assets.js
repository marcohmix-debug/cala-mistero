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
  albero:     { emoji: "🎄", cat: "block", it: "un albero di Natale", en: "a Christmas tree" },
  regalo:     { emoji: "🎁", cat: "block", it: "un regalo", en: "a present" },
  camino:     { emoji: "🧱", cat: "block", it: "un camino", en: "a fireplace" },
  slitta:     { emoji: "🛷", cat: "block", it: "una slitta", en: "a sleigh" },
  pupazzo:    { emoji: "⛄", cat: "block", it: "un pupazzo di neve", en: "a snowman" },
  calza:      { emoji: "🧦", cat: "block", it: "una calza", en: "a stocking" },
  biscotti:   { emoji: "🍪", cat: "block", it: "un vassoio di biscotti", en: "a tray of cookies" },
  campana:    { emoji: "🔔", cat: "block", it: "una campana", en: "a bell" },
  dondolo:    { emoji: "🪑", cat: "sit", it: "una sedia a dondolo", en: "a rocking chair" },
  neve:       { emoji: "❄️", cat: "overlay", it: "un cumulo di neve", en: "a snow pile" },
  nastri:     { emoji: "🎀", cat: "overlay", it: "dei nastri", en: "loose ribbons" },
  caramelle:  { emoji: "🍬", cat: "overlay", it: "delle caramelle", en: "candy canes" },
  letterine:  { emoji: "✉️", cat: "overlay", it: "un mucchio di letterine", en: "a pile of letters" },

  /* --- west --- */
  bancone:        { emoji: "🍺", cat: "block", it: "un bancone", en: "a bar counter" },
  pianoforte:     { emoji: "🎹", cat: "block", it: "un pianoforte", en: "a piano" },
  cavallo:        { emoji: "🐎", cat: "block", it: "un cavallo", en: "a horse" },
  carro:          { emoji: "🛻", cat: "block", it: "un carro", en: "a wagon" },
  cassaforte:     { emoji: "🏦", cat: "block", it: "una cassaforte", en: "a safe" },
  abbeveratoio:   { emoji: "🪣", cat: "block", it: "un abbeveratoio", en: "a water trough" },
  cactus:         { emoji: "🌵", cat: "block", it: "un cactus", en: "a cactus" },
  barile_west:    { emoji: "🛢️", cat: "block", it: "un barile di whisky", en: "a whiskey barrel" },
  cartello:       { emoji: "🪧", cat: "block", it: "un cartellone di taglia", en: "a wanted poster" },
  sgabello_west:  { emoji: "🪑", cat: "sit", it: "uno sgabello da saloon", en: "a saloon stool" },
  sputacchiera:   { emoji: "🥃", cat: "overlay", it: "una sputacchiera", en: "a spittoon" },
  sella:          { emoji: "🐴", cat: "overlay", it: "una sella", en: "a saddle" },
  fieno:          { emoji: "🌾", cat: "overlay", it: "una balla di fieno", en: "a hay bale" },

  /* --- egitto --- */
  sarcofago:    { emoji: "⚰️", cat: "block", it: "un sarcofago", en: "a sarcophagus" },
  colonna:      { emoji: "🏛️", cat: "block", it: "una colonna", en: "a column" },
  anubi:        { emoji: "🐕", cat: "block", it: "una statua di Anubi", en: "a statue of Anubis" },
  urna:         { emoji: "🏺", cat: "block", it: "un'urna canopa", en: "a canopic jar" },
  scarabeo:     { emoji: "🪲", cat: "block", it: "uno scarabeo di pietra", en: "a stone scarab" },
  obelisco:     { emoji: "🗼", cat: "block", it: "un obelisco", en: "an obelisk" },
  bracere:      { emoji: "🔥", cat: "block", it: "un braciere", en: "a brazier" },
  papiri:       { emoji: "📜", cat: "block", it: "una pila di papiri", en: "a stack of papyri" },
  grano:        { emoji: "🌾", cat: "block", it: "un sacco di grano", en: "a grain sack" },
  trono_eg:     { emoji: "🪑", cat: "sit", it: "un seggio di pietra", en: "a stone seat" },
  sabbia:       { emoji: "🏜️", cat: "overlay", it: "un cumulo di sabbia", en: "a sand drift" },
  geroglifici:  { emoji: "𓂀", cat: "overlay", it: "dei geroglifici", en: "hieroglyphs" },
  acqua_nilo:   { emoji: "💧", cat: "overlay", it: "una pozza d'acqua", en: "a water pool" },

  /* --- hotel --- */
  reception:     { emoji: "🛎️", cat: "block", it: "il bancone della reception", en: "the reception desk" },
  pianoforte_h:  { emoji: "🎼", cat: "block", it: "un pianoforte a coda", en: "a grand piano" },
  lampadario:    { emoji: "💡", cat: "block", it: "un lampadario", en: "a chandelier" },
  baule:         { emoji: "🧳", cat: "block", it: "un baule da viaggio", en: "a steamer trunk" },
  biliardo:      { emoji: "🎱", cat: "block", it: "un tavolo da biliardo", en: "a billiard table" },
  palma:         { emoji: "🌴", cat: "block", it: "una palma in vaso", en: "a potted palm" },
  grammofono:    { emoji: "📻", cat: "block", it: "un grammofono", en: "a gramophone" },
  carrello:      { emoji: "🍾", cat: "block", it: "un carrello dello champagne", en: "a champagne cart" },
  specchio:      { emoji: "🪞", cat: "block", it: "uno specchio", en: "a mirror" },
  poltrona_h:    { emoji: "🛋️", cat: "sit", it: "una poltrona di velluto", en: "a velvet armchair" },
  tappeto_h:     { emoji: "🟪", cat: "overlay", it: "un tappeto persiano", en: "a persian carpet" },
  bicchieri:     { emoji: "🥂", cat: "overlay", it: "dei bicchieri rotti", en: "broken glasses" },
  cappotto:      { emoji: "🧥", cat: "overlay", it: "un cappotto caduto", en: "a dropped coat" },
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
