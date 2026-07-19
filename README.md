# Le Méandre — site vitrine

Site vitrine one-page (Accueil / Restaurant / Gîtes / Spa / Contact) pour un
domaine familial (restaurant gastronomique, gîtes, spa). Bilingue FR/EN,
responsive, avec écran de chargement animé.

Format du fichier principal : `.dc.html`, le format de projet de
[Claude Design](https://claude.ai/design). Il peut être ouvert et édité
visuellement dans cet outil, ou modifié directement en texte comme n'importe
quel HTML.

## Fichiers du projet

| Fichier | Rôle | À éditer pour... |
|---|---|---|
| `lemeandre.html` | Structure des 5 pages + logique (classe `Component`) | Changer la mise en page, le comportement (nav, carrousel, langue, écran de chargement) |
| `site-data.js` | Tous les textes FR/EN, le menu, les gîtes, le spa | Changer un texte, un plat, un gîte, une traduction |
| `site-styles.css` | Feuille de style (nav, animations de révélation au scroll, écran de chargement) | Changer une couleur/taille fixe, une media query |
| `support.js` | Moteur du gabarit `.dc.html` (généré par Claude Design) | Ne pas éditer à la main |
| `image-slot.js` | Composant `<image-slot>` (photo déposable par glisser-déposer) | Ne pas éditer à la main |
| `images/` | Logos et visuels | Ajouter/remplacer des fichiers image |

**Pourquoi le contenu et le style sont séparés du HTML principal mais pas la
structure des pages** : le format `.dc.html` exige que le gabarit
(`<x-dc>…</x-dc>`) et le script du composant (`<script data-dc-script>`)
vivent dans le même fichier — c'est `support.js` qui les lit ensemble au
chargement. Le CSS et les données n'ont pas cette contrainte, d'où leur
externalisation.

## Aperçu en local

Depuis ce dossier :

```bash
python3 -m http.server 8080
```

puis ouvrir `http://localhost:8080/lemeandre.html`.

## Comment le site fonctionne

- **Une seule "page" HTML**, cinq sections (`<sc-if value="{{ pageAccueil }}">`,
  etc.) qui s'affichent/masquent selon `state.page`. La navigation ne
  recharge jamais la page.
- **Bilingue** : `state.lang` ('fr'/'en') sélectionne les textes dans
  `window.MEANDRE_UI` (voir `site-data.js`). Bouton de bascule dans la nav.
- **Écran de chargement** : joué une seule fois au montage
  (`Component._startLoader`), sauté si l'utilisateur préfère moins
  d'animations (`prefers-reduced-motion`).
- **Révélation au scroll** : les blocs marqués `class="reveal"` apparaissent
  en fondu-glissé à l'entrée dans le viewport, dans les deux sens de scroll
  (`Component._setupReveal`, un `IntersectionObserver`).
- **Photos** : chaque `<image-slot>` est un emplacement où glisser-déposer
  une image ; le fichier déposé est enregistré à côté du `.dc.html` dans un
  sidecar `.image-slots.state.json` (généré automatiquement, ne pas éditer).
- **Réglages éditables** sans toucher au code : dans l'éditeur Claude
  Design, un panneau expose couleurs, polices, coins arrondis, nom du
  domaine, coordonnées, options du carrousel, etc. (voir `data-props` sur la
  balise `<script data-dc-script>` dans `lemeandre.html`).

## Structure de `Component` (dans `lemeandre.html`)

`renderVals()` ne fait qu'assembler le résultat de méthodes plus petites,
chacune responsable d'une chose :

- `_themeVals()` — couleurs, polices, rayon de bordure (depuis les props)
- `_identityVals(t)` — nom du domaine, initiales du logo, bandeau du hero
- `_localizedContent(lang)` — textes et données traduits (`site-data.js`)
- `_navVals(page)` — page active, couleurs de surbrillance de la nav
- `_loaderVals()` — tout le calcul frame-par-frame de l'écran de chargement
- `_carouselVals(pool)` — diapositives, position, flèches du carrousel

Pour ajouter une nouvelle page ou un nouveau bloc de contenu, suivre le même
principe : une méthode dédiée qui retourne un petit objet, fusionné dans
`renderVals()`.
