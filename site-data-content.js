// Le Méandre — données structurées : carte du restaurant, gîte, spa,
// réservoir de photos du carrousel, recrutement, agenda. Chargé avant
// index.html ; lu par Component._localizedContent() / Component._agendaVals()
// (index.html). Fichier à modifier pour changer un gîte, une date
// d'agenda — pour un texte d'interface, voir site-data-ui.js.
//
// Le menu et la galerie photo sont éditables sans coder via Decap CMS
// (voir /admin) : ils vivent dans data/menu.json et data/galerie.json et
// sont chargés ici en fetch(). window.MEANDRE_MENU / MEANDRE_POOL démarrent
// vides puis se remplissent quand la promesse ci-dessous se résout ;
// Component.componentDidMount() (index.html) attend cette promesse et
// redéclenche un rendu pour afficher les données une fois arrivées.

// ── Carte du restaurant — chargée depuis data/menu.json (édition via /admin) ──
window.MEANDRE_MENU = [];

// ── Réservoir de photos du carrousel — chargé depuis data/galerie.json (édition via /admin) ──
window.MEANDRE_POOL = [];

window.MEANDRE_DATA_READY = Promise.all([
  fetch('./data/menu.json').then(r => r.json()).then(d => { window.MEANDRE_MENU = d.categories || []; }).catch(() => {}),
  fetch('./data/galerie.json').then(r => r.json()).then(d => {
    window.MEANDRE_POOL = (d.photos || []).map((p, i) => ({ slot: 'site-car-' + (i + 1), src: p.photo, ph: p.legende }));
  }).catch(() => {}),
]);

// ── Le gîte (4 chambres louables indépendamment, au sein d'une même maison) ──
// (slotA-D sont les clés de persistance des photos déposées dans chaque
// image-slot — ne pas les modifier sans mettre à jour le gabarit)
window.MEANDRE_GITES = [
  { num: '01',
    nom: { fr: 'Chambre 1', en: 'Room 1', de: 'Zimmer 1', es: 'Habitación 1', nl: 'Kamer 1' },
    capacite: { fr: 'CHAMBRE INDÉPENDANTE', en: 'INDEPENDENT ROOM', de: 'UNABHÄNGIGES ZIMMER', es: 'HABITACIÓN INDEPENDIENTE', nl: 'ONAFHANKELIJKE KAMER' },
    desc: { fr: "L'une des quatre chambres du gîte, aménagée avec soin et réservable indépendamment des trois autres.", en: "One of the cottage's four rooms, carefully appointed and bookable independently of the other three.", de: 'Eines der vier Zimmer des Gîte, sorgfältig eingerichtet und unabhängig von den anderen drei buchbar.', es: 'Una de las cuatro habitaciones de la casa rural, cuidada con esmero y reservable de forma independiente de las otras tres.', nl: 'Een van de vier kamers van de gîte, zorgvuldig ingericht en onafhankelijk van de andere drie te boeken.' },
    equip: { fr: [], en: [], de: [], es: [], nl: [] },
    slotA: 'site-g1a', slotB: 'site-g1b', slotC: 'site-g1c', slotD: 'site-g1d', srcA: './images/gite/gite11.JPG', srcB: './images/gite/gite12.JPG', srcC: './images/gite/sbd13.JPG', srcD: './images/gite/sdb14.JPG',
    phA: { fr: 'Chambre 1 — vue', en: 'Room 1 — view', de: 'Zimmer 1 — Ansicht', es: 'Habitación 1 — vista', nl: 'Kamer 1 — aanzicht' } },
  { num: '02',
    nom: { fr: 'Chambre 2', en: 'Room 2', de: 'Zimmer 2', es: 'Habitación 2', nl: 'Kamer 2' },
    capacite: { fr: 'CHAMBRE INDÉPENDANTE', en: 'INDEPENDENT ROOM', de: 'UNABHÄNGIGES ZIMMER', es: 'HABITACIÓN INDEPENDIENTE', nl: 'ONAFHANKELIJKE KAMER' },
    desc: { fr: "L'une des quatre chambres du gîte, aménagée avec soin et réservable indépendamment des trois autres.", en: "One of the cottage's four rooms, carefully appointed and bookable independently of the other three.", de: 'Eines der vier Zimmer des Gîte, sorgfältig eingerichtet und unabhängig von den anderen drei buchbar.', es: 'Una de las cuatro habitaciones de la casa rural, cuidada con esmero y reservable de forma independiente de las otras tres.', nl: 'Een van de vier kamers van de gîte, zorgvuldig ingericht en onafhankelijk van de andere drie te boeken.' },
    equip: { fr: [], en: [], de: [], es: [], nl: [] },
    slotA: 'site-g2a', slotB: 'site-g2b', slotC: 'site-g2c', slotD: 'site-g2d', srcA: './images/gite/gite21.JPG', srcB: './images/gite/gite22.JPG', srcC: './images/gite/sdb33.JPG', srcD: './images/gite/sdb34.JPG',
    phA: { fr: 'Chambre 2 — vue', en: 'Room 2 — view', de: 'Zimmer 2 — Ansicht', es: 'Habitación 2 — vista', nl: 'Kamer 2 — aanzicht' } },
  { num: '03',
    nom: { fr: 'Chambre 3', en: 'Room 3', de: 'Zimmer 3', es: 'Habitación 3', nl: 'Kamer 3' },
    capacite: { fr: 'CHAMBRE INDÉPENDANTE', en: 'INDEPENDENT ROOM', de: 'UNABHÄNGIGES ZIMMER', es: 'HABITACIÓN INDEPENDIENTE', nl: 'ONAFHANKELIJKE KAMER' },
    desc: { fr: "L'une des quatre chambres du gîte, aménagée avec soin et réservable indépendamment des trois autres.", en: "One of the cottage's four rooms, carefully appointed and bookable independently of the other three.", de: 'Eines der vier Zimmer des Gîte, sorgfältig eingerichtet und unabhängig von den anderen drei buchbar.', es: 'Una de las cuatro habitaciones de la casa rural, cuidada con esmero y reservable de forma independiente de las otras tres.', nl: 'Een van de vier kamers van de gîte, zorgvuldig ingericht en onafhankelijk van de andere drie te boeken.' },
    equip: { fr: [], en: [], de: [], es: [], nl: [] },
    slotA: 'site-g3a', slotB: 'site-g3b', slotC: 'site-g3c', slotD: 'site-g3d', srcA: './images/gite/gite31.JPG', srcB: './images/gite/gite32.JPG', srcC: './images/gite/sdb33.JPG', srcD: './images/gite/sdb34.JPG',
    phA: { fr: 'Chambre 3 — vue', en: 'Room 3 — view', de: 'Zimmer 3 — Ansicht', es: 'Habitación 3 — vista', nl: 'Kamer 3 — aanzicht' } },
  { num: '04',
    nom: { fr: 'Chambre 4', en: 'Room 4', de: 'Zimmer 4', es: 'Habitación 4', nl: 'Kamer 4' },
    capacite: { fr: 'CHAMBRE INDÉPENDANTE', en: 'INDEPENDENT ROOM', de: 'UNABHÄNGIGES ZIMMER', es: 'HABITACIÓN INDEPENDIENTE', nl: 'ONAFHANKELIJKE KAMER' },
    desc: { fr: "L'une des quatre chambres du gîte, aménagée avec soin et réservable indépendamment des trois autres.", en: "One of the cottage's four rooms, carefully appointed and bookable independently of the other three.", de: 'Eines der vier Zimmer des Gîte, sorgfältig eingerichtet und unabhängig von den anderen drei buchbar.', es: 'Una de las cuatro habitaciones de la casa rural, cuidada con esmero y reservable de forma independiente de las otras tres.', nl: 'Een van de vier kamers van de gîte, zorgvuldig ingericht en onafhankelijk van de andere drie te boeken.' },
    equip: { fr: [], en: [], de: [], es: [], nl: [] },
    slotA: 'site-g4a', slotB: 'site-g4b', slotC: 'site-g4c', slotD: 'site-g4d', srcA: './images/gite/gite41.JPG', srcB: './images/gite/gite42.JPG', srcC: './images/gite/sdb43.JPG', srcD: './images/gite/sdb44.JPG',
    phA: { fr: 'Chambre 4 — vue', en: 'Room 4 — view', de: 'Zimmer 4 — Ansicht', es: 'Habitación 4 — vista', nl: 'Kamer 4 — aanzicht' } }
];

// ── Le spa ── (slotA-D = clés de persistance des photos déposées dans chaque image-slot)
window.MEANDRE_SPAS = [
  { nom: { fr: 'Le Spa', en: 'The Spa', de: 'Der Spa', es: 'El Spa', nl: 'De Spa' },
    sur: { fr: 'DÉTENTE · EAU CHAUDE', en: 'RELAXATION · WARM WATER', de: 'ENTSPANNUNG · WARMES WASSER', es: 'RELAJACIÓN · AGUA CALIENTE', nl: 'ONTSPANNING · WARM WATER' },
    desc: { fr: "Un spa privatif, pour se détendre en toute intimité. La lumière du jardin entre à travers les arbres ; on n'entend que l'eau.", en: 'A private spa, to unwind in complete privacy. Light from the garden filters through the trees; all you hear is the water.', de: 'Ein privater Spa, um sich in aller Ruhe zu entspannen. Das Licht des Gartens fällt durch die Bäume; man hört nur das Wasser.', es: 'Un spa privado, para relajarse con total intimidad. La luz del jardín se filtra entre los árboles; solo se oye el agua.', nl: 'Een privéspa, om in alle rust te ontspannen. Het licht van de tuin valt door de bomen; je hoort alleen het water.' },
    info: { fr: 'Eau chauffée', en: 'Heated water', de: 'Beheiztes Wasser', es: 'Agua climatizada', nl: 'Verwarmd water' },
    slotA: 'site-spa-a', slotB: 'site-spa-b', slotC: 'site-spa-c', slotD: 'site-spa-d',
    srcA: './images/spa/spa5.jpg', srcB: './images/spa/spa1.jpg', srcC: './images/spa/spa3.jpg', srcD: './images/spa/spa4.jpg',
    phA: { fr: 'Le Spa — vue', en: 'The Spa — view', de: 'Der Spa — Ansicht', es: 'El Spa — vista', nl: 'De Spa — aanzicht' }, dir: 'ltr' }
];

// ── Recrutement : postes ouverts (liste vide = candidatures spontanées uniquement) ──
window.MEANDRE_JOBS = [];

// ── Agenda : événements à venir au Méandre (concerts, marchés, soirées…) ──
// Une entrée par événement. `date` au format AAAA-MM-JJ : les événements
// sont triés et les dates passées disparaissent automatiquement de la page,
// pas besoin de les retirer à la main. Exemple à dupliquer :
// { date: '2026-09-12',
//   titre: { fr: 'Soirée jazz au jardin', en: 'Garden jazz evening', de: 'Jazzabend im Garten', es: 'Noche de jazz en el jardín', nl: 'Jazzavond in de tuin' },
//   desc: { fr: 'Un trio de jazz en terrasse, autour d’un verre.', en: 'A jazz trio on the terrace, drinks in hand.', de: 'Ein Jazztrio auf der Terrasse, bei einem Glas Wein.', es: 'Un trío de jazz en la terraza, copa en mano.', nl: 'Een jazztrio op het terras, glas in de hand.' } },
window.MEANDRE_AGENDA = [];
