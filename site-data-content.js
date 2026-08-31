// Le Méandre — données structurées : carte du restaurant, gîte, spa,
// réservoir de photos du carrousel, recrutement, agenda. Chargé avant
// index.html ; lu par Component._localizedContent() / Component._agendaVals()
// (index.html). Fichier à modifier pour changer un plat, un gîte, une date
// d'agenda — pour un texte d'interface, voir site-data-ui.js.

// ── Carte du restaurant (3 catégories × 3 plats) ──
window.MEANDRE_MENU = [
  { nom: { fr: 'Entrées', en: 'Starters', de: 'Vorspeisen', es: 'Entrantes', nl: 'Voorgerechten' }, plats: [
    { nom: { fr: 'Velouté de topinambour', en: 'Jerusalem artichoke velouté', de: 'Topinambur-Velouté', es: 'Velouté de topinambo', nl: 'Topinamboer-veloutésoep' }, desc: { fr: 'Noisettes torréfiées, huile de livèche', en: 'Toasted hazelnuts, lovage oil', de: 'Geröstete Haselnüsse, Liebstocköl', es: 'Avellanas tostadas, aceite de levístico', nl: 'Gebrande hazelnoten, lavasolie' }, prix: '18 €' },
    { nom: { fr: 'Foie gras de canard mi-cuit', en: 'Duck foie gras, mi-cuit', de: 'Entenfoie gras, mi-cuit', es: 'Foie gras de pato, mi-cuit', nl: 'Eendenfoie gras, mi-cuit' }, desc: { fr: 'Chutney de figues du verger, brioche toastée', en: 'Orchard fig chutney, toasted brioche', de: 'Feigenchutney aus dem Obstgarten, geröstete Brioche', es: 'Chutney de higos del huerto, brioche tostada', nl: 'Vijgenchutney uit de boomgaard, geroosterde brioche' }, prix: '24 €' },
    { nom: { fr: 'Tartare de truite', en: 'Trout tartare', de: 'Forellentatar', es: 'Tartar de trucha', nl: 'Forellentartaar' }, desc: { fr: "Crème d'aneth, pickles d'oignon rouge", en: 'Dill cream, pickled red onion', de: 'Dillcreme, eingelegte rote Zwiebeln', es: 'Crema de eneldo, encurtido de cebolla roja', nl: 'Dilroom, ingelegde rode ui' }, prix: '21 €' }] },
  { nom: { fr: 'Plats', en: 'Mains', de: 'Hauptgerichte', es: 'Platos principales', nl: 'Hoofdgerechten' }, plats: [
    { nom: { fr: 'Filet de bœuf des pâtures', en: 'Pasture-raised beef fillet', de: 'Rinderfilet von der Weide', es: 'Solomillo de ternera de pasto', nl: 'Runderfilet van de weide' }, desc: { fr: 'Jus corsé au vin rouge, légumes racines confits', en: 'Red wine jus, confit root vegetables', de: 'Kräftiger Rotweinjus, confierte Wurzelgemüse', es: 'Jugo intenso al vino tinto, verduras de raíz confitadas', nl: 'Krachtige rodewijnjus, geconfijte wortelgroenten' }, prix: '42 €' },
    { nom: { fr: 'Sandre rôti sur peau', en: 'Pan-roasted zander, crispy skin', de: 'Gebratener Zander mit knuspriger Haut', es: 'Lucioperca asada con piel crujiente', nl: 'Gebakken snoekbaars, krokante huid' }, desc: { fr: 'Beurre blanc au safran, poireaux brûlés', en: 'Saffron beurre blanc, charred leeks', de: 'Safran-Beurre-blanc, geröstete Lauch', es: 'Beurre blanc al azafrán, puerros tostados', nl: 'Saffraan-beurre-blanc, geschroeide prei' }, prix: '38 €' },
    { nom: { fr: 'Pigeon fermier en deux cuissons', en: 'Farmhouse pigeon, two ways', de: 'Bauernhof-Taube, zweifach gegart', es: 'Pichón de granja en dos cocciones', nl: 'Boerderijduif op twee bereidingswijzen' }, desc: { fr: 'Cerises acidulées, polenta crémeuse', en: 'Tart cherries, creamy polenta', de: 'Säuerliche Kirschen, cremige Polenta', es: 'Cerezas ácidas, polenta cremosa', nl: 'Zurige kersen, romige polenta' }, prix: '44 €' }] },
  { nom: { fr: 'Desserts', en: 'Desserts', de: 'Desserts', es: 'Postres', nl: 'Desserts' }, plats: [
    { nom: { fr: 'Soufflé chaud au Grand Marnier', en: 'Warm Grand Marnier soufflé', de: 'Warmes Grand-Marnier-Soufflé', es: 'Suflé caliente de Grand Marnier', nl: 'Warme Grand Marnier-soufflé' }, desc: { fr: 'Minute, pour deux personnes', en: 'Made to order, for two', de: 'Frisch zubereitet, für zwei Personen', es: 'Al momento, para dos personas', nl: 'Op het moment bereid, voor twee personen' }, prix: '16 €' },
    { nom: { fr: 'Tarte fine aux poires', en: 'Thin pear tart', de: 'Feine Birnentarte', es: 'Tarta fina de peras', nl: 'Fijne perentaart' }, desc: { fr: 'Glace miel-lavande maison', en: 'House-made honey-lavender ice cream', de: 'Hausgemachtes Honig-Lavendel-Eis', es: 'Helado de miel y lavanda de la casa', nl: 'Huisgemaakt honing-lavendelijs' }, prix: '14 €' },
    { nom: { fr: 'Sphère chocolat grand cru', en: 'Grand cru chocolate sphere', de: 'Grand-Cru-Schokoladenkugel', es: 'Esfera de chocolate grand cru', nl: 'Grand cru chocoladebol' }, desc: { fr: "Cœur caramel, feuille d'or", en: 'Caramel heart, gold leaf', de: 'Karamellkern, Blattgold', es: 'Corazón de caramelo, pan de oro', nl: 'Karamelhart, bladgoud' }, prix: '17 €' }] }
];

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

// ── Réservoir de légendes pour le carrousel photo du restaurant ──
// (le carrousel affiche automatiquement les entrées qui ont une photo (src) ;
// nbPhotosCarrousel, une prop éditable, ne sert qu'à plafonner ce nombre)
window.MEANDRE_POOL = [
  { slot: 'site-car-1', src: './images/restaurant/restaurant_1.JPG', ph: { fr: 'Photo 1 — plat', en: 'Photo 1 — dish', de: 'Foto 1 — Gericht', es: 'Foto 1 — plato', nl: 'Foto 1 — gerecht' } },
  { slot: 'site-car-2', src: './images/restaurant/restaurant_2.JPG', ph: { fr: 'Photo 2 — salle', en: 'Photo 2 — dining room', de: 'Foto 2 — Speisesaal', es: 'Foto 2 — sala', nl: 'Foto 2 — eetzaal' } },
  { slot: 'site-car-3', src: './images/restaurant/restaurant_4.JPG', ph: { fr: 'Photo 3 — ambiance', en: 'Photo 3 — atmosphere', de: 'Foto 3 — Atmosphäre', es: 'Foto 3 — ambiente', nl: 'Foto 3 — sfeer' } },
  { slot: 'site-car-4', ph: { fr: 'Photo 4 — dessert', en: 'Photo 4 — dessert', de: 'Foto 4 — Dessert', es: 'Foto 4 — postre', nl: 'Foto 4 — dessert' } },
  { slot: 'site-car-5', ph: { fr: 'Photo 5 — terrasse', en: 'Photo 5 — terrace', de: 'Foto 5 — Terrasse', es: 'Foto 5 — terraza', nl: 'Foto 5 — terras' } },
  { slot: 'site-car-6', ph: { fr: 'Photo 6 — cave', en: 'Photo 6 — cellar', de: 'Foto 6 — Weinkeller', es: 'Foto 6 — bodega', nl: 'Foto 6 — kelder' } },
  { slot: 'site-car-7', ph: { fr: 'Photo 7 — cuisine', en: 'Photo 7 — kitchen', de: 'Foto 7 — Küche', es: 'Foto 7 — cocina', nl: 'Foto 7 — keuken' } },
  { slot: 'site-car-8', ph: { fr: 'Photo 8 — détail', en: 'Photo 8 — detail', de: 'Foto 8 — Detail', es: 'Foto 8 — detalle', nl: 'Foto 8 — detail' } }
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
