# SynapsAi website

Site corporate Next.js, exporté pour Firebase Hosting. La source reste modifiable normalement avec Next.js.

**En ligne : [synapsai.co](https://synapsai.co)** — publication du 17 septembre 2026, avec les cinq articles anglais approuvés.

## Développement

Utiliser Node.js 22.13+ et npm.

```sh
npm ci
npm run dev
```

Ouvrir http://localhost:3000 (anglais) ou http://localhost:3000/fr (pages françaises existantes).

## Vérification et publication

```sh
npm run lint
npm run typecheck
npm run build:preview
npm run test:e2e
```

Google Chrome et Firebase CLI sont nécessaires aux tests. Playwright démarre son propre émulateur Hosting au port 3100. Pour consulter manuellement l’export, utiliser `npm start` après le build.

`build:preview` désactive l’indexation. `build:production` active l’indexation et produit le site dans `out/`. La publication cible uniquement le site `synpasaico` du projet `imaginai-f4fca`, relié à https://synapsai.co.

Les commandes de publication, de test en mode production et la référence de retour arrière sont documentées dans [docs/firebase-hosting.md](docs/firebase-hosting.md).

## Organisation

- `src/app/` : routes, styles, layout statique par langue, métadonnées et 404.
- `src/components/` : navigation, pages et formulaire.
- `src/lib/` : contenu, équipe, écosystème, registre éditorial et SEO.
- `src/content/insights/` : cinq articles anglais approuvés.
- `public/media/` : logos, captures, polices et images ; provenance dans `manifest.json`.
- `tests/` : navigation, responsive, accessibilité automatisée, SEO et Hosting.
- `docs/` : décisions techniques, sources, QA et procédure Firebase.

Le formulaire de contact prépare un e-mail à envoyer dans la messagerie ; il n’envoie pas de message automatiquement. Aucun CMS, fournisseur d’e-mail ou outil d’analytics n’est configuré.
Les nouvelles itérations restent concentrées sur l’anglais, conformément à la décision du propriétaire.
