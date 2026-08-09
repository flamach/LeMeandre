# Le Méandre — site vitrine

Site vitrine one-page (Accueil / Restaurant / À emporter / Gîtes / Spa /
Agenda / Contact, + Recrutement et Scène & Art accessibles depuis le pied
de page) pour un domaine familial (restaurant gastronomique, gîtes, spa).
Multilingue FR/EN/DE/ES/NL, responsive, avec écran de chargement animé.

Format du fichier principal : `.dc.html`, un format de projet éditable
visuellement dans son outil d'origine, ou modifiable directement en texte
comme n'importe quel HTML.

## Fichiers du projet

| Fichier | Rôle | À éditer pour... |
|---|---|---|
| `index.html` | Structure des pages + logique (classe `Component`) | Changer la mise en page, le comportement (nav, carrousel, langue, écran de chargement) |
| `site-data-ui.js` | Textes de l'interface FR/EN/DE/ES/NL (nav, titres, boutons, formulaires) | Changer un texte, ajouter/corriger une traduction |
| `site-data-content.js` | Menu du restaurant, gîtes, spa, agenda, réservoir de photos du carrousel, recrutement | Changer un plat, un gîte, ajouter une date à l'agenda |
| `site-data-loader.js` | Courbes d'animation + tracé vectoriel du logo de l'écran de chargement | Changer le dessin ou le rythme de l'écran de chargement |
| `site-styles.css` | Feuille de style : classes utilisées par le gabarit (nav, boutons, typographie, mise en page de chaque page) + animations (révélation au scroll, écran de chargement) | Changer une couleur/taille fixe, une media query, l'apparence d'une classe |
| `support.js` | Moteur du gabarit `.dc.html` (fichier généré) | Ne pas éditer à la main |
| `image-slot.js` | Composant `<image-slot>` (photo déposable par glisser-déposer) | Ne pas éditer à la main |
| `images/` | Logos et visuels | Ajouter/remplacer des fichiers image |

**Pourquoi le contenu et le style sont séparés du HTML principal mais pas la
structure des pages** : le format `.dc.html` exige que le gabarit
(`<x-dc>…</x-dc>`) et le script du composant (`<script data-dc-script>`)
vivent dans le même fichier — c'est `support.js` qui les lit ensemble au
chargement. Le CSS et les données n'ont pas cette contrainte, d'où leur
externalisation dans plusieurs fichiers dédiés.

**Pourquoi il reste du style inline dans `index.html`** : deux cas
seulement. (1) Les valeurs réellement calculées à l'affichage — couleur du
lien de nav actif, position du carrousel, opacité/transform de l'écran de
chargement, bandeau défilant — qui ne peuvent pas vivre dans un fichier CSS
statique puisqu'elles changent avec l'état (page courante, langue, image en
cours). (2) Les éléments qui portent un attribut `style-hover` : ce
mécanisme de survol est propre à l'éditeur visuel d'origine du fichier
`.dc.html`, son style de base reste donc inline pour rester cohérent avec
cet outil si le fichier y est réouvert. Tout le reste vit dans
`site-styles.css`, sous forme de
classes nommées par rôle (`.eyebrow`, `.btn-solid`, `.gite-card`, etc.).

## Aperçu en local

Depuis ce dossier :

```bash
python3 -m http.server 8080
```

puis ouvrir `http://localhost:8080/index.html`.

## Comment le site fonctionne

- **Une seule "page" HTML**, une section par page (`<sc-if value="{{ pageAccueil }}">`,
  etc.) qui s'affiche/masque selon `state.page`. La navigation ne
  recharge jamais la page.
- **Multilingue** : `state.lang` ('fr'/'en'/'de'/'es'/'nl') sélectionne les
  textes dans `window.MEANDRE_UI` (voir `site-data-ui.js`). Bouton de
  bascule dans la nav.
- **Écran de chargement** : joué une seule fois au montage
  (`Component._startLoader`), sauté si l'utilisateur préfère moins
  d'animations (`prefers-reduced-motion`).
- **Révélation au scroll** : les blocs marqués `class="reveal"` apparaissent
  en fondu-glissé à l'entrée dans le viewport, dans les deux sens de scroll
  (`Component._setupReveal`, un `IntersectionObserver`).
- **Photos** : chaque `<image-slot>` est un emplacement où glisser-déposer
  une image ; le fichier déposé est enregistré à côté du `.dc.html` dans un
  sidecar `.image-slots.state.json` (généré automatiquement, ne pas éditer).
- **Réglages éditables** sans toucher au code : dans l'éditeur visuel du
  fichier `.dc.html`, un panneau expose couleurs, polices, coins arrondis,
  nom du domaine, coordonnées, options du carrousel, etc. (voir
  `data-props` sur la balise `<script data-dc-script>` dans `index.html`).

## Structure de `Component` (dans `index.html`)

`renderVals()` ne fait qu'assembler le résultat de méthodes plus petites,
chacune responsable d'une chose :

- `_themeVals()` — couleurs, polices, rayon de bordure (depuis les props)
- `_identityVals(t)` — nom du domaine, initiales du logo, bandeau du hero
- `_localizedContent(lang)` — textes et données traduits (`site-data-ui.js`, `site-data-content.js`)
- `_navVals(page)` — page active, couleurs de surbrillance de la nav
- `_loaderVals()` — tout le calcul frame-par-frame de l'écran de chargement
- `_carouselVals(pool)` — diapositives, position, flèches du carrousel

Pour ajouter une nouvelle page ou un nouveau bloc de contenu, suivre le même
principe : une méthode dédiée qui retourne un petit objet, fusionné dans
`renderVals()`.
