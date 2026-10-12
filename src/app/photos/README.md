# Galerie Photos

Cette galerie est propre à `/photos`. Le composant partagé `src/components/gallery.tsx`, ses données et les autres pages restent inchangés.

## Catalogue provisoire

`photographs.json` contient les 142 photos de la présélection. `id` reprend le chemin relatif original (collection et sous-dossier compris, pour éviter les collisions). Les titres et textes alternatifs issus des noms de fichiers sont provisoires et doivent être relus avant publication.

- Modifier `title` et `alt` pour personnaliser une photo.
- Modifier `order` pour choisir l’ordre global, toutes collections confondues : les plus petits nombres apparaissent en premier. Les filtres conservent cet ordre. En cas d’égalité, l’ordre du tableau est conservé.
- Renseigner `picfairUrl` avec l’URL exacte de la fiche photographique ; laisser `null` en son absence. Le lien d’achat apparaît uniquement dans l’agrandissement quand ce champ est renseigné.
- Passer `visible` à `false` pour masquer une photo dans « Tout » et dans sa collection sans supprimer ses données ni ses fichiers. Remettre `true` pour la réafficher. Les 142 photos sont actuellement visibles.

## Copies Web

Les copies sont dans `public/images/photos/`, séparées par collection : WebP de 1 000 px maximum pour les vignettes et de 2 200 px maximum pour l’agrandissement (plus grand côté). Les proportions sont conservées, l’orientation EXIF est appliquée et les métadonnées EXIF/GPS ne sont pas copiées. La grille conserve son recadrage actuel ; l’agrandissement montre toute la photo.

Avec Node.js 22 ou supérieur, depuis la racine du projet :

```bash
node src/app/photos/prepare-images.mjs
# Ou avec un autre emplacement des originaux :
node src/app/photos/prepare-images.mjs "/chemin/vers/la présélection"
```

Ce script lit seulement les originaux. Il régénère les copies et le catalogue en conservant les titres, descriptions, liens, champs `order` et `visible` déjà personnalisés. Les nouvelles photos sont visibles par défaut et placées après les ordres existants. Attention : il réintègre toutes les photos présentes dans le dossier source, y compris les entrées retirées manuellement du catalogue ; utiliser `visible: false` pour masquer durablement une photo.

## Relecture locale avant publication

```bash
npm run dev -- --hostname 127.0.0.1
```

Ouvrir `/photos`, vérifier les sept filtres, les portraits et paysages, les cadrages des vignettes, les agrandissements et les titres sur ordinateur et mobile. Affiner la sélection avant tout déploiement. Aucun déploiement n’est effectué par le script de préparation.
