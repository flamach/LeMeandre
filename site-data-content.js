// Le Méandre — données structurées : gîtes, spa (textes), recrutement.
// Chargé avant index.html ; lu par Component._localizedContent() /
// Component._agendaVals() (index.html). Fichier à modifier pour changer
// un texte de gîte/spa — pour un texte d'interface, voir site-data-ui.js.
//
// Le menu, la galerie, l'agenda et toutes les photos du site sont
// éditables sans coder via Decap CMS (voir /admin) : ils vivent dans les
// fichiers data/*.json et sont chargés ici en fetch(). Les globals
// correspondants démarrent vides/par défaut puis se remplissent quand la
// promesse MEANDRE_DATA_READY se résout ; Component.componentDidMount()
// (index.html) attend cette promesse et redéclenche un rendu.

// ── Carte du restaurant — chargée depuis data/menu.json ──
window.MEANDRE_MENU = [];

// ── Réservoir de photos du carrousel + bandeau page Restaurant — data/galerie.json ──
window.MEANDRE_POOL = [];
window.MEANDRE_GALERIE_BANDEAU = '';

// ── Agenda — chargé depuis data/agenda.json ──
window.MEANDRE_AGENDA = [];

// ── Photos uniques du site (hero, vignettes accueil, affiche à emporter,
//    photo contact) — chargées depuis data/images.json ──
window.MEANDRE_IMAGES = {};

// ── Bandeau de la page Spa — chargé depuis data/spa.json (avec les photos du spa) ──
window.MEANDRE_SPA_BANDEAU = '';

// ── Le gîte (4 chambres louables indépendamment, au sein d'une même maison) ──
// (slotA-D sont les clés de persistance des photos déposées dans chaque
// image-slot — ne pas les modifier sans mettre à jour le gabarit. Les
// photos elles-mêmes — srcA-D — viennent de data/gites.json, fusionnées
// dans ce tableau une fois chargées, voir plus bas.)
window.MEANDRE_GITES = [
  { num: '01',
    nom: { fr: 'Chambre 1', en: 'Room 1', de: 'Zimmer 1', es: 'Habitación 1', nl: 'Kamer 1' },
    capacite: { fr: 'CHAMBRE INDÉPENDANTE', en: 'INDEPENDENT ROOM', de: 'UNABHÄNGIGES ZIMMER', es: 'HABITACIÓN INDEPENDIENTE', nl: 'ONAFHANKELIJKE KAMER' },
    desc: { fr: "L'une des quatre chambres du gîte, aménagée avec soin et réservable indépendamment des trois autres.", en: "One of the cottage's four rooms, carefully appointed and bookable independently of the other three.", de: 'Eines der vier Zimmer des Gîte, sorgfältig eingerichtet und unabhängig von den anderen drei buchbar.', es: 'Una de las cuatro habitaciones de la casa rural, cuidada con esmero y reservable de forma independiente de las otras tres.', nl: 'Een van de vier kamers van de gîte, zorgvuldig ingericht en onafhankelijk van de andere drie te boeken.' },
    equip: { fr: [], en: [], de: [], es: [], nl: [] },
    slotA: 'site-g1a', slotB: 'site-g1b', slotC: 'site-g1c', slotD: 'site-g1d', srcA: '', srcB: '', srcC: '', srcD: '',
    phA: { fr: 'Chambre 1 — vue', en: 'Room 1 — view', de: 'Zimmer 1 — Ansicht', es: 'Habitación 1 — vista', nl: 'Kamer 1 — aanzicht' } },
  { num: '02',
    nom: { fr: 'Chambre 2', en: 'Room 2', de: 'Zimmer 2', es: 'Habitación 2', nl: 'Kamer 2' },
    capacite: { fr: 'CHAMBRE INDÉPENDANTE', en: 'INDEPENDENT ROOM', de: 'UNABHÄNGIGES ZIMMER', es: 'HABITACIÓN INDEPENDIENTE', nl: 'ONAFHANKELIJKE KAMER' },
    desc: { fr: "L'une des quatre chambres du gîte, aménagée avec soin et réservable indépendamment des trois autres.", en: "One of the cottage's four rooms, carefully appointed and bookable independently of the other three.", de: 'Eines der vier Zimmer des Gîte, sorgfältig eingerichtet und unabhängig von den anderen drei buchbar.', es: 'Una de las cuatro habitaciones de la casa rural, cuidada con esmero y reservable de forma independiente de las otras tres.', nl: 'Een van de vier kamers van de gîte, zorgvuldig ingericht en onafhankelijk van de andere drie te boeken.' },
    equip: { fr: [], en: [], de: [], es: [], nl: [] },
    slotA: 'site-g2a', slotB: 'site-g2b', slotC: 'site-g2c', slotD: 'site-g2d', srcA: '', srcB: '', srcC: '', srcD: '',
    phA: { fr: 'Chambre 2 — vue', en: 'Room 2 — view', de: 'Zimmer 2 — Ansicht', es: 'Habitación 2 — vista', nl: 'Kamer 2 — aanzicht' } },
  { num: '03',
    nom: { fr: 'Chambre 3', en: 'Room 3', de: 'Zimmer 3', es: 'Habitación 3', nl: 'Kamer 3' },
    capacite: { fr: 'CHAMBRE INDÉPENDANTE', en: 'INDEPENDENT ROOM', de: 'UNABHÄNGIGES ZIMMER', es: 'HABITACIÓN INDEPENDIENTE', nl: 'ONAFHANKELIJKE KAMER' },
    desc: { fr: "L'une des quatre chambres du gîte, aménagée avec soin et réservable indépendamment des trois autres.", en: "One of the cottage's four rooms, carefully appointed and bookable independently of the other three.", de: 'Eines der vier Zimmer des Gîte, sorgfältig eingerichtet und unabhängig von den anderen drei buchbar.', es: 'Una de las cuatro habitaciones de la casa rural, cuidada con esmero y reservable de forma independiente de las otras tres.', nl: 'Een van de vier kamers van de gîte, zorgvuldig ingericht en onafhankelijk van de andere drie te boeken.' },
    equip: { fr: [], en: [], de: [], es: [], nl: [] },
    slotA: 'site-g3a', slotB: 'site-g3b', slotC: 'site-g3c', slotD: 'site-g3d', srcA: '', srcB: '', srcC: '', srcD: '',
    phA: { fr: 'Chambre 3 — vue', en: 'Room 3 — view', de: 'Zimmer 3 — Ansicht', es: 'Habitación 3 — vista', nl: 'Kamer 3 — aanzicht' } },
  { num: '04',
    nom: { fr: 'Chambre 4', en: 'Room 4', de: 'Zimmer 4', es: 'Habitación 4', nl: 'Kamer 4' },
    capacite: { fr: 'CHAMBRE INDÉPENDANTE', en: 'INDEPENDENT ROOM', de: 'UNABHÄNGIGES ZIMMER', es: 'HABITACIÓN INDEPENDIENTE', nl: 'ONAFHANKELIJKE KAMER' },
    desc: { fr: "L'une des quatre chambres du gîte, aménagée avec soin et réservable indépendamment des trois autres.", en: "One of the cottage's four rooms, carefully appointed and bookable independently of the other three.", de: 'Eines der vier Zimmer des Gîte, sorgfältig eingerichtet und unabhängig von den anderen drei buchbar.', es: 'Una de las cuatro habitaciones de la casa rural, cuidada con esmero y reservable de forma independiente de las otras tres.', nl: 'Een van de vier kamers van de gîte, zorgvuldig ingericht en onafhankelijk van de andere drie te boeken.' },
    equip: { fr: [], en: [], de: [], es: [], nl: [] },
    slotA: 'site-g4a', slotB: 'site-g4b', slotC: 'site-g4c', slotD: 'site-g4d', srcA: '', srcB: '', srcC: '', srcD: '',
    phA: { fr: 'Chambre 4 — vue', en: 'Room 4 — view', de: 'Zimmer 4 — Ansicht', es: 'Habitación 4 — vista', nl: 'Kamer 4 — aanzicht' } }
];

// ── Le spa (textes) ── (slotA-D = clés de persistance des photos déposées
// dans chaque image-slot ; srcA-D viennent de data/spa.json, voir plus bas)
window.MEANDRE_SPAS = [
  { nom: { fr: 'Le Spa', en: 'The Spa', de: 'Der Spa', es: 'El Spa', nl: 'De Spa' },
    sur: { fr: 'DÉTENTE · EAU CHAUDE', en: 'RELAXATION · WARM WATER', de: 'ENTSPANNUNG · WARMES WASSER', es: 'RELAJACIÓN · AGUA CALIENTE', nl: 'ONTSPANNING · WARM WATER' },
    desc: { fr: "Un spa privatif, pour se détendre en toute intimité. La lumière du jardin entre à travers les arbres ; on n'entend que l'eau.", en: 'A private spa, to unwind in complete privacy. Light from the garden filters through the trees; all you hear is the water.', de: 'Ein privater Spa, um sich in aller Ruhe zu entspannen. Das Licht des Gartens fällt durch die Bäume; man hört nur das Wasser.', es: 'Un spa privado, para relajarse con total intimidad. La luz del jardín se filtra entre los árboles; solo se oye el agua.', nl: 'Een privéspa, om in alle rust te ontspannen. Het licht van de tuin valt door de bomen; je hoort alleen het water.' },
    info: { fr: 'Eau chauffée', en: 'Heated water', de: 'Beheiztes Wasser', es: 'Agua climatizada', nl: 'Verwarmd water' },
    slotA: 'site-spa-a', slotB: 'site-spa-b', slotC: 'site-spa-c', slotD: 'site-spa-d',
    srcA: '', srcB: '', srcC: '', srcD: '',
    phA: { fr: 'Le Spa — vue', en: 'The Spa — view', de: 'Der Spa — Ansicht', es: 'El Spa — vista', nl: 'De Spa — aanzicht' }, dir: 'ltr' }
];

// ── Recrutement : postes ouverts (liste vide = candidatures spontanées uniquement) ──
window.MEANDRE_JOBS = [];

// ── Chargement des données éditables via /admin, fusionnées dans les
//    globals ci-dessus une fois arrivées. ──
window.MEANDRE_DATA_READY = Promise.all([
  fetch('./data/menu.json').then(r => r.json()).then(d => { window.MEANDRE_MENU = d.categories || []; }).catch(() => {}),
  fetch('./data/galerie.json').then(r => r.json()).then(d => {
    window.MEANDRE_POOL = (d.photos || []).map((p, i) => ({ slot: 'site-car-' + (i + 1), src: p.photo, ph: p.legende }));
    window.MEANDRE_GALERIE_BANDEAU = d.bandeau || '';
  }).catch(() => {}),
  fetch('./data/agenda.json').then(r => r.json()).then(d => { window.MEANDRE_AGENDA = d.evenements || []; }).catch(() => {}),
  fetch('./data/images.json').then(r => r.json()).then(d => { window.MEANDRE_IMAGES = d || {}; }).catch(() => {}),
  fetch('./data/gites.json').then(r => r.json()).then(d => {
    (d.chambres || []).forEach((photos, i) => { if (window.MEANDRE_GITES[i]) Object.assign(window.MEANDRE_GITES[i], photos); });
  }).catch(() => {}),
  fetch('./data/spa.json').then(r => r.json()).then(d => {
    window.MEANDRE_SPA_BANDEAU = d.bandeau || '';
    if (window.MEANDRE_SPAS[0]) Object.assign(window.MEANDRE_SPAS[0], { srcA: d.srcA || '', srcB: d.srcB || '', srcC: d.srcC || '', srcD: d.srcD || '' });
  }).catch(() => {}),
]);
