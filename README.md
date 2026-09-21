# EcoVanLife

Première version française d’un site de voyage, vanlife et photographie. Next.js 16 (App Router), React 19, TypeScript strict et CSS responsive. Aucun CMS, paiement, compte utilisateur ou service de newsletter n’est connecté.

## Lancer le site

Prérequis : Node.js 22 LTS ou plus récent, npm.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Ouvrir http://localhost:3000. Définir `NEXT_PUBLIC_SITE_URL` avec l’URL publique du site (par défaut `https://ecovanlife.fr`). Cette valeur intervient dans les métadonnées et le sitemap au build.

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

`npm start` copie les fichiers statiques dans la sortie standalone puis démarre son serveur Node.js via `scripts/start.mjs`. `PORT` permet de changer le port. Le lint est exécuté séparément du build, conformément au fonctionnement de Next.js 16.

Dans l’environnement de création, Node.js système est en version 16. Un runtime temporaire a donc été installé dans `/tmp/ecovanlife-node` : `export PATH=/tmp/ecovanlife-node/node_modules/node/bin:$PATH` permet de l’utiliser durant cette session. Ce chemin n’est pas nécessaire sur une machine équipée de Node.js 22 et peut disparaître après un redémarrage.

## Architecture

- `src/app/` : pages, layout, styles globaux, métadonnées, sitemap et robots.
- `src/components/` : navigation mobile, cartes, sections, galerie avec filtres et agrandissement, newsletter et footer.
- `src/content/site.ts` : navigation, récits de démonstration, galerie, guides et URL du site.
- `public/images/` : photographies locales et sources dans `CREDITS.md`.
- `public/fonts/` : DM Sans et Manrope hébergées localement, licences OFL jointes.
- `next.config.ts` : sortie Node.js standalone, sans dépendance à Vercel.

Pages : `/`, `/voyages`, `/voyages/[slug]`, `/vanlife`, `/photos`, `/guides`, `/boutique`, `/a-propos`, `/mentions-legales`, `/confidentialite`, et page 404.

## Modifier les contenus

1. Remplacer les images dans `public/images/` par vos propres photographies. Préférer des fichiers WebP/JPEG de qualité, environ 1 400 px de large (2 400 px pour le hero). `next/image` génère des tailles adaptées et charge les images hors écran à la demande.
2. Modifier les titres, descriptions, textes alternatifs et chemins d’image dans `src/content/site.ts`. Les photographies sont des illustrations : les destinations fictives ne garantissent pas le lieu photographié.
3. Ajouter un objet à `adventures` pour créer un nouveau voyage : son slug produit automatiquement `/voyages/votre-slug` et son entrée dans le sitemap. Les étapes sont dans `stops`. Adapter `src/app/voyages/[slug]/page.tsx` pour enrichir la structure des récits, ou brancher ultérieurement un CMS/MDX.
4. Ajouter des entrées à `photos` pour étendre la galerie. Les filtres disponibles sont déclarés dans `src/components/gallery.tsx` ; les catégories initiales sont Nature, Montagne et Océan.
5. Modifier `guides` pour les maquettes d’ebooks. Les concepts boutique se trouvent dans `src/app/boutique/page.tsx`.
6. Personnaliser la présentation dans `src/app/a-propos/page.tsx`, puis les textes de l’accueil dans `src/app/page.tsx`.
7. Adapter les couleurs, espacements et typographies dans les variables de `src/app/globals.css`.

Toutes les données narratives, durées et étapes sont des exemples, pas des itinéraires vérifiés. Les mentions « démonstration » sont à retirer seulement après remplacement des contenus concernés.

## Newsletter et commerce

Le formulaire utilise la validation e-mail du navigateur et affiche un message explicite. Aucune adresse n’est envoyée ou enregistrée ; il ne prétend pas avoir inscrit le visiteur. Pour l’activer, ajouter une route serveur avec validation, protection contre les abus et intégration d’un prestataire. Conserver les clés uniquement côté serveur et adapter la confidentialité au service choisi.

Les guides et produits sont annoncés comme à venir. Il n’y a aucun panier, faux téléchargement, commande ou paiement.

## Déployer chez Hostinger sur une offre Node.js

Utiliser une offre disposant réellement d’un runtime Node.js (application Node.js ou VPS), avec Node.js 22+. Un hébergement PHP seul ne suffit pas à cette configuration. Les intitulés des réglages dépendent de l’offre et de son interface.

- Transférer le projet et son lockfile, sans `node_modules`, `.next` ni secrets.
- Renseigner `NEXT_PUBLIC_SITE_URL=https://ecovanlife.fr` avant compilation.
- Installer : `npm ci`.
- Construire : `npm run build`.
- Démarrer : `npm start` ; configurer le port donné par l’hébergeur et le routage du domaine vers l’application.
- Activer HTTPS et les redirections de domaine dans l’hébergement.

Si l’offre demande un fichier de démarrage autonome, préparer le dossier standalone après le build :

```bash
cp -r public .next/standalone/public
cp -r .next/static .next/standalone/.next/static
HOSTNAME=0.0.0.0 PORT=3000 node .next/standalone/server.js
```

Transférer le contenu de `.next/standalone` et utiliser `server.js` comme entrée, avec le port attendu par l’hébergeur. Reconstruire pour publier de nouveaux contenus.

Avant ouverture publique, renseigner l’identité et le contact de l’éditeur dans les mentions légales, confirmer les informations d’hébergement, remplacer les contenus fictifs et relire les textes de confidentialité. Pour une préproduction publique, activer une protection d’accès ou un en-tête `X-Robots-Tag: noindex` dans l’hébergement.

## Accessibilité et SEO

HTML sémantique, langue française, lien d’évitement, focus visible, menu avec état accessible, filtres avec `aria-pressed`, dialogue natif fermé par Échap, labels de formulaire et animations réduites selon les préférences système. Métadonnées par page, URL canoniques, Open Graph, carte Twitter, sitemap et robots. Les mentions légales et la confidentialité sont en `noindex` tant qu’elles sont des modèles.

Les polices et photographies sont servies localement. Aucun traceur ni script tiers n’est intégré.

Documentation technique : [installation Next.js](https://nextjs.org/docs/app/getting-started/installation) et [déploiement Node.js](https://nextjs.org/docs/app/getting-started/deploying).

## Vérifications réalisées

- Lint ESLint, compilation de production et vérification TypeScript réussis.
- Contrôle Playwright des 12 pages de contenu en HTTP 200 et d’un voyage absent en HTTP 404.
- Menu mobile, filtre photo, dialogue et fermeture par Échap, message newsletter vérifiés.
- Aucun débordement horizontal détecté à 390 px ; aucune erreur JavaScript relevée.
- Audit axe-core WCAG 2 A/AA et 2.1 AA sur ces 12 pages : aucune violation automatisée détectée après correction des contrastes. Ce contrôle ne remplace pas une revue manuelle exhaustive d’accessibilité.

Les outils navigateur ont été installés dans `/tmp/ecovanlife-browser` pour la validation, sans ajouter de dépendances de test au site.
