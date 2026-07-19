// Le Méandre — contenu et données du site (français + anglais).
// Chargé en <script> classique avant que index.html n'évalue son
// Component : tout ici est posé sur `window` pour être lu depuis
// Component.renderVals(). C'est le fichier à modifier pour changer un texte,
// un plat de la carte, un gîte ou une traduction — pas besoin de toucher au
// gabarit HTML dans index.html pour ça.

// ── Easing (fonctions de courbe d'animation), utilisées par l'écran de
//    chargement dans Component._loaderVals(). ──
window.MeandreEasing = {
  outCubic: (t) => 1 - Math.pow(1 - t, 3),
  inOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
  inOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  clamp: (v, a, b) => Math.min(b, Math.max(a, v)),
};

// ── Tracé vectoriel du logo pour l'écran de chargement ──
// 3 volutes qui se dessinent comme une branche qui pousse.
// Chaque entrée : [d, largeur, début, durée] sur la progression de la scène "Tourbillon".
window.MEANDRE_LOADER_STROKES = [
  ['M 418 452 C 255 494, 76 432, 54 286 C 33 152, 138 42, 260 47 C 332 51, 346 112, 299 135 C 268 150, 243 128, 252 104', 9, 0.00, 0.42],
  ['M 100 248 C 118 358, 232 414, 342 363 C 400 336, 418 292, 398 268', 8, 0.22, 0.30],
  ['M 366 260 C 462 296, 492 396, 434 456 C 419 470, 400 466, 404 450', 8, 0.40, 0.28],
];
// feuilles : [x, y, rotation, échelle, début] — chacune se dessine puis se remplit
window.MEANDRE_LOADER_LEAVES = [
  [42, 82, -32, 1.15, 0.50], [102, 58, -4, 0.8, 0.56],
  [398, 88, 24, 1.0, 0.60], [448, 162, 62, 0.9, 0.66],
  [268, 332, 168, 1.0, 0.63], [150, 322, 198, 0.8, 0.70],
];

// ── Textes de l'interface (nav, en-têtes, appels à l'action, légendes) ──
window.MEANDRE_UI = {
  fr: {
    navRestaurant: 'RESTAURANT', navGites: 'GÎTES', navSpa: 'SPA', navContact: 'CONTACT', langBtn: 'EN',
    heroTagline: "Table gastronomique, gîtes de caractère et spa — un art de vivre au cœur du domaine.",
    cardRestTitle: 'Le Restaurant', cardRestDesc: 'Une cuisine gastronomique de terroir, au fil des saisons.',
    cardGitesTitle: 'Les Gîtes', cardGitesDesc: 'Quatre maisons de caractère pour prolonger le séjour.',
    cardSpaTitle: 'Le Spa', cardSpaDesc: 'Hammam, sauna et piscine intérieure, dans une quiétude absolue.',
    discover: 'DÉCOUVRIR →',
    artEyebrow: "L'ART DE RECEVOIR", artTitle1: 'Un domaine familial où chaque séjour', artTitle2: 'se vit comme une parenthèse.',
    artParagraph: "Entre étangs et forêts, ce domaine familial cultive depuis cinq générations une hospitalité discrète : une table exigeante, des maisons pleines d'âme et un spa dédié au repos.",
    ctaContact: 'NOUS CONTACTER',
    restEyebrow: 'GASTRONOMIE DE TERROIR', restTitle: 'Le Restaurant', restTagline: "Une cuisine de saison, enracinée dans le terroir du domaine.",
    menuEyebrow: 'LA CARTE', menuTitle: 'Le Menu',
    menuTerroirTitle: 'Menu Terroir', menuTerroirSub: 'Entrée · Plat · Dessert',
    menuEstreeTitle: 'Menu Signature', menuEstreeSub: 'Dégustation en six temps, accords mets & vins',
    galleryEyebrow: 'EN IMAGES', galleryTitle: "La table, la salle, l'ambiance",
    hoursEyebrow: 'HORAIRES', hoursText: 'Du mercredi au dimanche', hoursLunch: 'Déjeuner · 12h00 – 13h30', hoursDinner: 'Dîner · 19h30 – 21h30', hoursClosed: 'Fermé lundi et mardi',
    cuisineEyebrow: 'LA CUISINE', cuisineText: 'Gastronomique · Terroir', cuisineText2: 'Produits du domaine et de producteurs voisins', cuisineText3: 'Carte renouvelée à chaque saison',
    resaEyebrow: 'RÉSERVATION', resaText: 'Par téléphone uniquement',
    gitesEyebrow: 'SÉJOURNER AU DOMAINE', gitesTitle: 'Les Gîtes',
    gitesTagline: 'Quatre maisons restaurées avec soin, réparties dans le parc du domaine. Chacune a son caractère ; toutes partagent le même goût du calme et de la matière.',
    gitesDetail1: 'Détail 1', gitesDetail2: 'Détail 2', gitesDetail3: 'Détail 3',
    gitesCtaTitle: 'Envie de séjourner au domaine ?', gitesCtaText: 'Les gîtes se réservent simplement, par téléphone ou par écrit. Nous composerons votre séjour avec vous.',
    spaEyebrow: 'SILENCE · CHALEUR · EAU', spaTitle: 'Le Spa', spaTagline: 'Un lieu clos, feutré, réservé aux hôtes du domaine.',
    practiceEyebrow: 'EN PRATIQUE', practiceTitle: 'Accès au spa',
    practice1Title: 'Ouvert tous les jours', practice1Text: '10h00 – 20h00, sur créneaux privatisés',
    practice2Title: 'Réservé aux hôtes', practice2Text: 'Inclus pour les séjours en gîte, sur demande au restaurant',
    practice3Title: 'Linge fourni', practice3Text: 'Peignoirs, serviettes et chaussons à disposition',
    ctaBookSlot: 'RÉSERVER UN CRÉNEAU',
    contactEyebrow: 'CONTACT', contactTitle1: 'Écrivez-nous,', contactTitle2: 'ou passez nous voir.',
    addressLabel: 'ADRESSE', phoneLabel: 'TÉLÉPHONE', emailLabel: 'EMAIL',
    contactHours: 'Accueil du lundi au dimanche, 9h – 19h.', contactHours2: 'Restaurant, gîtes et spa : toute demande se fait par téléphone ou email — nous répondons sous 24h.',
    sinceWord: 'DEPUIS',
    phHero: 'Photo du domaine — vue extérieure, grand format', phAccRest: 'Plat signature', phAccGites: "Intérieur d'un gîte", phAccSpa: 'Piscine intérieure / spa',
    phRestHero: 'Salle du restaurant ou plat — bandeau large', phSpaHero: 'Piscine intérieure — grand format immersif', phContact: "Photo — allée, portail ou plan d'accès"
  },
  en: {
    navRestaurant: 'RESTAURANT', navGites: 'COTTAGES', navSpa: 'SPA', navContact: 'CONTACT', langBtn: 'FR',
    heroTagline: 'Fine dining, characterful cottages and a spa — a way of life at the heart of the estate.',
    cardRestTitle: 'The Restaurant', cardRestDesc: 'Seasonal fine dining rooted in local terroir.',
    cardGitesTitle: 'The Cottages', cardGitesDesc: 'Four characterful houses to extend your stay.',
    cardSpaTitle: 'The Spa', cardSpaDesc: 'Hammam, sauna and indoor pool, in absolute quiet.',
    discover: 'DISCOVER →',
    artEyebrow: 'THE ART OF HOSPITALITY', artTitle1: 'A family estate where every stay', artTitle2: 'feels like a pause from the world.',
    artParagraph: "Between ponds and forests, this family estate has cultivated quiet hospitality for five generations: a demanding table, houses full of character, and a spa devoted to rest.",
    ctaContact: 'CONTACT US',
    restEyebrow: 'FARM-TO-TABLE DINING', restTitle: 'The Restaurant', restTagline: "Seasonal cooking, rooted in the estate's terroir.",
    menuEyebrow: 'THE MENU', menuTitle: 'The Menu',
    menuTerroirTitle: 'Terroir Menu', menuTerroirSub: 'Starter · Main · Dessert',
    menuEstreeTitle: 'Signature Menu', menuEstreeSub: 'Six-course tasting menu, wine pairings',
    galleryEyebrow: 'GALLERY', galleryTitle: 'The table, the room, the atmosphere',
    hoursEyebrow: 'HOURS', hoursText: 'Wednesday to Sunday', hoursLunch: 'Lunch · 12:00 – 1:30 PM', hoursDinner: 'Dinner · 7:30 – 9:30 PM', hoursClosed: 'Closed Monday and Tuesday',
    cuisineEyebrow: 'THE KITCHEN', cuisineText: 'Fine dining · Terroir', cuisineText2: 'Estate produce and neighbouring producers', cuisineText3: 'Menu refreshed every season',
    resaEyebrow: 'RESERVATIONS', resaText: 'By phone only',
    gitesEyebrow: 'STAY ON THE ESTATE', gitesTitle: 'The Cottages',
    gitesTagline: "Four carefully restored houses scattered across the estate's grounds. Each has its own character; all share the same taste for calm and craftsmanship.",
    gitesDetail1: 'Detail 1', gitesDetail2: 'Detail 2', gitesDetail3: 'Detail 3',
    gitesCtaTitle: 'Fancy a stay on the estate?', gitesCtaText: "Booking a cottage is simple, by phone or in writing. We'll put together your stay with you.",
    spaEyebrow: 'SILENCE · WARMTH · WATER', spaTitle: 'The Spa', spaTagline: 'A hushed, enclosed retreat reserved for estate guests.',
    practiceEyebrow: 'GOOD TO KNOW', practiceTitle: 'Spa access',
    practice1Title: 'Open every day', practice1Text: '10:00 AM – 8:00 PM, in private slots',
    practice2Title: 'Reserved for guests', practice2Text: 'Included with cottage stays, on request at the restaurant',
    practice3Title: 'Linens provided', practice3Text: 'Robes, towels and slippers provided',
    ctaBookSlot: 'BOOK A SLOT',
    contactEyebrow: 'CONTACT', contactTitle1: 'Write to us,', contactTitle2: 'or come see us.',
    addressLabel: 'ADDRESS', phoneLabel: 'PHONE', emailLabel: 'EMAIL',
    contactHours: 'Open Monday to Sunday, 9 AM – 7 PM.', contactHours2: 'Restaurant, cottages and spa: all requests by phone or email — we reply within 24h.',
    sinceWord: 'SINCE',
    phHero: 'Estate photo — exterior view, large format', phAccRest: 'Signature dish', phAccGites: 'Cottage interior', phAccSpa: 'Indoor pool / spa',
    phRestHero: 'Dining room or dish — wide banner', phSpaHero: 'Indoor pool — large immersive format', phContact: 'Photo — driveway, gate or access map'
  }
};

// ── Carte du restaurant (3 catégories × 3 plats) ──
window.MEANDRE_MENU = [
  { nom: { fr: 'Entrées', en: 'Starters' }, plats: [
    { nom: { fr: 'Velouté de topinambour', en: 'Jerusalem artichoke velouté' }, desc: { fr: 'Noisettes torréfiées, huile de livèche', en: 'Toasted hazelnuts, lovage oil' }, prix: '18 €' },
    { nom: { fr: 'Foie gras de canard mi-cuit', en: 'Duck foie gras, mi-cuit' }, desc: { fr: 'Chutney de figues du verger, brioche toastée', en: 'Orchard fig chutney, toasted brioche' }, prix: '24 €' },
    { nom: { fr: 'Tartare de truite', en: 'Trout tartare' }, desc: { fr: "Crème d'aneth, pickles d'oignon rouge", en: 'Dill cream, pickled red onion' }, prix: '21 €' }] },
  { nom: { fr: 'Plats', en: 'Mains' }, plats: [
    { nom: { fr: 'Filet de bœuf des pâtures', en: 'Pasture-raised beef fillet' }, desc: { fr: 'Jus corsé au vin rouge, légumes racines confits', en: 'Red wine jus, confit root vegetables' }, prix: '42 €' },
    { nom: { fr: 'Sandre rôti sur peau', en: 'Pan-roasted zander, crispy skin' }, desc: { fr: 'Beurre blanc au safran, poireaux brûlés', en: 'Saffron beurre blanc, charred leeks' }, prix: '38 €' },
    { nom: { fr: 'Pigeon fermier en deux cuissons', en: 'Farmhouse pigeon, two ways' }, desc: { fr: 'Cerises acidulées, polenta crémeuse', en: 'Tart cherries, creamy polenta' }, prix: '44 €' }] },
  { nom: { fr: 'Desserts', en: 'Desserts' }, plats: [
    { nom: { fr: 'Soufflé chaud au Grand Marnier', en: 'Warm Grand Marnier soufflé' }, desc: { fr: 'Minute, pour deux personnes', en: 'Made to order, for two' }, prix: '16 €' },
    { nom: { fr: 'Tarte fine aux poires', en: 'Thin pear tart' }, desc: { fr: 'Glace miel-lavande du domaine', en: 'Estate honey-lavender ice cream' }, prix: '14 €' },
    { nom: { fr: 'Sphère chocolat grand cru', en: 'Grand cru chocolate sphere' }, desc: { fr: "Cœur caramel, feuille d'or", en: 'Caramel heart, gold leaf' }, prix: '17 €' }] }
];

// ── Les 4 gîtes ── (slotA-D sont les clés de persistance des photos déposées
// dans chaque image-slot — ne pas les modifier sans mettre à jour le gabarit)
window.MEANDRE_GITES = [
  { num: '01', nom: { fr: 'Le Pressoir', en: 'The Press House' }, capacite: { fr: '2 – 4 PERSONNES · 68 M²', en: '2–4 GUESTS · 68 M²' }, desc: { fr: "L'ancien pressoir du domaine, ouvert sur le verger. Pierres apparentes, poutres d'origine et cheminée pour les soirées d'hiver.", en: "The estate's former press house, opening onto the orchard. Exposed stone, original beams and a fireplace for winter evenings." }, equip: { fr: ['Cheminée', 'Cuisine équipée', 'Terrasse privée', 'Linge fourni'], en: ['Fireplace', 'Equipped kitchen', 'Private terrace', 'Linens provided'] }, slotA: 'site-g1a', slotB: 'site-g1b', slotC: 'site-g1c', slotD: 'site-g1d', phA: { fr: 'Le Pressoir — pièce principale', en: 'The Press House — main room' } },
  { num: '02', nom: { fr: 'La Grange', en: 'The Barn' }, capacite: { fr: '4 – 6 PERSONNES · 110 M²', en: '4–6 GUESTS · 110 M²' }, desc: { fr: 'La plus vaste des maisons : une grande pièce à vivre sous charpente, trois chambres et une vue dégagée sur les étangs.', en: 'The largest of the houses: a vast living space under exposed timber framing, three bedrooms and open views over the ponds.' }, equip: { fr: ['3 chambres', 'Poêle à bois', "Grande table d'hôte", 'Jardin clos'], en: ['3 bedrooms', 'Wood stove', 'Large communal table', 'Walled garden'] }, slotA: 'site-g2a', slotB: 'site-g2b', slotC: 'site-g2c', slotD: 'site-g2d', phA: { fr: 'La Grange — pièce à vivre', en: 'The Barn — living area' } },
  { num: '03', nom: { fr: 'Le Pigeonnier', en: 'The Dovecote' }, capacite: { fr: '2 PERSONNES · 42 M²', en: '2 GUESTS · 42 M²' }, desc: { fr: 'Un refuge pour deux, sur trois demi-niveaux. La chambre perchée regarde la cime des arbres — idéal pour une échappée.', en: 'A hideaway for two, spread across three split levels. The perched bedroom looks out over the treetops — perfect for a getaway.' }, equip: { fr: ['Lit king size', 'Baignoire îlot', 'Petit-déjeuner porté', 'Vue sur le parc'], en: ['King-size bed', 'Freestanding bathtub', 'Breakfast delivered', 'Park view'] }, slotA: 'site-g3a', slotB: 'site-g3b', slotC: 'site-g3c', slotD: 'site-g3d', phA: { fr: 'Le Pigeonnier — chambre perchée', en: 'The Dovecote — perched bedroom' } },
  { num: '04', nom: { fr: 'La Métairie', en: 'The Farmhouse' }, capacite: { fr: '6 – 8 PERSONNES · 145 M²', en: '6–8 GUESTS · 145 M²' }, desc: { fr: 'La maison de famille par excellence : quatre chambres, une cuisine généreuse et une longue terrasse orientée couchant.', en: 'The quintessential family house: four bedrooms, a generous kitchen and a long west-facing terrace.' }, equip: { fr: ['4 chambres', '2 salles de bain', 'Terrasse 40 m²', 'Accès spa inclus'], en: ['4 bedrooms', '2 bathrooms', '40 m² terrace', 'Spa access included'] }, slotA: 'site-g4a', slotB: 'site-g4b', slotC: 'site-g4c', slotD: 'site-g4d', phA: { fr: 'La Métairie — façade ou terrasse', en: 'The Farmhouse — façade or terrace' } }
];

// ── Les 3 espaces du spa ── (slot = clé de persistance de la photo déposée)
window.MEANDRE_SPAS = [
  { nom: { fr: 'La Piscine intérieure', en: 'The Indoor Pool' }, sur: { fr: 'BASSIN · 28°C', en: 'POOL · 82°F' }, desc: { fr: "Un bassin de nage de quinze mètres sous verrière, chauffé toute l'année. La lumière du parc entre à travers les arbres ; on n'entend que l'eau.", en: 'A fifteen-metre lap pool beneath a glass roof, heated year-round. Light from the park filters through the trees; all you hear is the water.' }, info: { fr: 'Longueur 15 m · Profondeur 1,40 m', en: 'Length 15 m · Depth 1.4 m' }, slot: 'site-spa-piscine', ph: { fr: 'Piscine intérieure', en: 'Indoor pool' }, dir: 'ltr' },
  { nom: { fr: 'Le Hammam', en: 'The Hammam' }, sur: { fr: 'VAPEUR · EUCALYPTUS', en: 'STEAM · EUCALYPTUS' }, desc: { fr: "Marbre sombre, vapeur d'eucalyptus et banquettes chauffées. Une chaleur humide et enveloppante, à vivre lentement.", en: 'Dark marble, eucalyptus steam and heated benches. An enveloping, humid warmth, best savoured slowly.' }, info: { fr: "45°C · 100 % d'humidité", en: '113°F · 100% humidity' }, slot: 'site-spa-hammam', ph: { fr: 'Hammam — marbre et vapeur', en: 'Hammam — marble and steam' }, dir: 'rtl' },
  { nom: { fr: 'Le Sauna', en: 'The Sauna' }, sur: { fr: 'BOIS · CHALEUR SÈCHE', en: 'WOOD · DRY HEAT' }, desc: { fr: 'Un sauna finlandais en épicéa, donnant sur le sous-bois. Chaleur sèche, silence, et une douche froide en sortie pour relancer le corps.', en: 'A Finnish spruce sauna overlooking the woods. Dry heat, silence, and a cold shower on the way out to revive the body.' }, info: { fr: '85°C · Séances de 15 min', en: '185°F · 15-min sessions' }, slot: 'site-spa-sauna', ph: { fr: 'Sauna — bois clair', en: 'Sauna — pale wood' }, dir: 'ltr' }
];

// ── Réservoir de légendes pour le carrousel photo du restaurant ──
// (nbPhotosCarrousel, une prop éditable, détermine combien d'entre elles sont utilisées)
window.MEANDRE_POOL = [
  { slot: 'site-car-1', ph: { fr: 'Photo 1 — plat', en: 'Photo 1 — dish' } }, { slot: 'site-car-2', ph: { fr: 'Photo 2 — salle', en: 'Photo 2 — dining room' } },
  { slot: 'site-car-3', ph: { fr: 'Photo 3 — ambiance', en: 'Photo 3 — atmosphere' } }, { slot: 'site-car-4', ph: { fr: 'Photo 4 — dessert', en: 'Photo 4 — dessert' } },
  { slot: 'site-car-5', ph: { fr: 'Photo 5 — terrasse', en: 'Photo 5 — terrace' } }, { slot: 'site-car-6', ph: { fr: 'Photo 6 — cave', en: 'Photo 6 — cellar' } },
  { slot: 'site-car-7', ph: { fr: 'Photo 7 — cuisine', en: 'Photo 7 — kitchen' } }, { slot: 'site-car-8', ph: { fr: 'Photo 8 — détail', en: 'Photo 8 — detail' } }
];
