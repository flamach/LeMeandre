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
| `site-data-content.js` | Gîtes, spa, agenda, recrutement ; charge aussi `data/menu.json` et `data/galerie.json` en `fetch()` | Changer un gîte, ajouter une date à l'agenda |
| `data/menu.json` | Carte du restaurant (catégories, plats, description, prix, photo) | Éditable via `/admin` (Decap CMS) — voir plus bas |
| `data/galerie.json` | Galerie photo du restaurant (carrousel de la page Restaurant) | Éditable via `/admin` (Decap CMS) — voir plus bas |
| `admin/` | Interface Decap CMS (`index.html` + `config.yml`) | Ne pas éditer à la main sauf pour changer les champs du formulaire |
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

## Édition du menu et de la galerie sans coder (Decap CMS)

Le patron édite la carte du restaurant et la galerie photo depuis
`https://<domaine-du-site>/admin`, sans toucher au code. Ça écrit
directement dans `data/menu.json` / `data/galerie.json` via un commit Git ;
le site les lit en `fetch()` au chargement (voir `site-data-content.js` et
`Component.componentDidMount()` dans `index.html`).

**Pourquoi un backend GitHub OAuth (et pas Netlify Identity + Git Gateway)** :
Git Gateway dépend des fonctions serverless de Netlify — il cesse de
fonctionner dès que le site quitte Netlify. Le backend `github` de Decap CMS
n'a besoin que d'un petit proxy OAuth, qu'on héberge indépendamment sur
Cloudflare Workers (gratuit). Ce proxy ne connaît ni Netlify ni Hostinger :
il continue de fonctionner à l'identique après la migration, sans rien
reconfigurer côté CMS.

Contrepartie : la personne qui édite le contenu doit avoir un compte
GitHub avec un accès en écriture (collaborateur) sur le dépôt
`flamach/LeMeandre` — c'est ce compte qui sert d'identifiant pour se
connecter à `/admin`.

### Mise en place initiale (à faire une fois, manuellement)

1. **Créer une GitHub OAuth App** — github.com → Settings → Developer
   settings → OAuth Apps → New OAuth App.
   - Homepage URL : l'URL du site (Netlify pour l'instant).
   - Authorization callback URL : `https://<worker>.workers.dev/callback`
     (l'URL exacte dépend du proxy déployé à l'étape 2).
   - Noter le **Client ID** et générer un **Client Secret**.
2. **Déployer le proxy OAuth sur Cloudflare Workers** — utiliser un proxy
   OAuth pour Decap CMS déployable en un clic/`wrangler deploy`, par ex.
   [`ottmartens/decap-cms-github-oauth-provider-cloudflare`](https://github.com/ottmartens/decap-cms-github-oauth-provider-cloudflare)
   ou [`sterlingwes/decap-proxy`](https://github.com/sterlingwes/decap-proxy).
   Configurer le Client ID / Client Secret de l'étape 1 comme secrets du
   Worker (`wrangler secret put`), suivre le README du proxy choisi.
3. **Renseigner l'URL du Worker** dans `admin/config.yml` (`base_url`),
   remplacer `https://decap-oauth.VOTRE-SOUS-DOMAINE.workers.dev`, committer
   et pousser.
4. **Inviter le patron comme collaborateur** sur le dépôt GitHub
   (Settings → Collaborators → Add people), avec un compte GitHub à son nom.
5. Vérifier sur Netlify que le site se redéploie bien après le push (déjà
   le cas aujourd'hui — `admin/`, `data/` sont des fichiers statiques
   comme les autres, aucune configuration Netlify supplémentaire requise).

Test local avant d'avoir déployé le Worker : `npx decap-server` dans ce
dossier (en parallèle du serveur HTTP local), `local_backend: true` dans
`admin/config.yml` fait alors écrire directement dans les fichiers locaux
au lieu de GitHub.

### Checklist pour le jour de la migration vers Hostinger

- [ ] Rien à reconfigurer côté authentification CMS : le proxy Cloudflare
      Workers et la GitHub OAuth App sont indépendants de l'hébergeur.
- [ ] Copier l'intégralité du dépôt (y compris `admin/`, `data/`,
      `images/uploads/`) vers Hostinger — Hostinger n'ayant pas de
      déploiement Git natif, prévoir soit un envoi manuel (FTP/gestionnaire
      de fichiers) après chaque édition dans `/admin`, soit une GitHub
      Action de déploiement FTP déclenchée sur chaque push vers `main`
      (recommandé, pour que les modifications faites dans `/admin` arrivent
      sur Hostinger sans intervention manuelle).
- [ ] Vérifier que `data/menu.json` et `data/galerie.json` sont bien servis
      tels quels par Hostinger (fichiers statiques, aucun traitement serveur
      requis).
- [ ] Vérifier que le dossier `images/uploads/` (photos ajoutées via le CMS)
      est bien copié — c'est le seul dossier qui continue de changer après
      la mise en prod.
- [ ] Mettre à jour la Homepage URL de la GitHub OAuth App (étape 1
      ci-dessus) avec le nouveau nom de domaine, si le domaine change à
      cette occasion (cosmétique, sans impact sur l'authentification).
- [ ] Une fois Hostinger validé comme hébergement définitif, on peut
      retirer Netlify du DNS.
