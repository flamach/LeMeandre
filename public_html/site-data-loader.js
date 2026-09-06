// Le Méandre — écran de chargement : easing + tracé vectoriel du logo.
// Chargé avant index.html. Lu par Component._loaderVals() (index.html).
// Fichier à modifier pour changer le dessin ou le rythme de l'animation
// d'ouverture — pas pour changer un texte (→ site-data-ui.js).

// ── Easing (fonctions de courbe d'animation) ──
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
