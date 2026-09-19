# Firebase Hosting

**Live:** https://synapsai.co — v0.2.1 deployed 2026-09-19 at 14:42 Africa/Douala (13:42 UTC). Firebase version `f3bf61dcf2120e83`; live release `1789825344965000`. Public route checks passed after deployment.

Production target verified on 2026-09-17:

- Project: `imaginai-f4fca` (imaginAi).
- Hosting site: `synpasaico` (preserve this exact spelling).
- Existing custom domain: `https://synapsai.co`, ownership and hosting active.
- Only this Hosting site is deployed. Other ImaginAi sites and backend services are outside this deployment.

## Development and builds

Continue editing the Next.js source normally with `npm run dev`.
Node.js 22.13+ and Firebase CLI are required. The deployment was prepared with Firebase CLI 15.14.0.

```sh
npm ci
npm install -g firebase-tools@15.14.0
firebase login
npm run build:preview
npm start
```

`npm start` serves the static export through the Hosting emulator at http://127.0.0.1:3100. It is no longer `next start`.
Stop it before Playwright, which starts its own emulator.
`build:preview` explicitly disables indexing; `build:production` enables it regardless of `.env.local`.

```sh
npm run build:production
```

For production-mode browser checks in PowerShell:

```powershell
$env:SITE_PUBLISHED='true'
npm run test:e2e
Remove-Item Env:SITE_PUBLISHED
```

The default suite covers current English routes and a small existing-French routing check. `test:legacy` is the older bilingual suite; two of its visual cases still reference the retired `.product-image` selector and need migration before using it as a release gate.

## Publish changes

Build a non-indexable preview first when review is needed:

```sh
npm run build:preview
firebase hosting:channel:deploy redesign-review --only synpasaico --project imaginai-f4fca --expires 2d --no-authorized-domains
```

After checks, rebuild production and deploy only the approved site:

```sh
npm run build:production
firebase deploy --only hosting:synpasaico --project imaginai-f4fca
```

Never use a project-wide deployment for this website. No DNS change is required for the existing apex domain.
Do not add a SPA rewrite to `/index.html`: real missing pages must return 404 and each page has its own exported HTML.

## Architecture and limits

- `output: 'export'` produces 38 pages in `out/`, including existing French pages and five approved English articles.
- The catch-all root layout derives document language from route parameters at build time; no request proxy or server headers are required.
- `global-not-found.tsx` exports the shared 404 with an English message and French home link.
- Metadata routes are force-static. Sitemap, robots, social metadata and article publication dates are built into the output.
- `firebase.json` owns clean URLs, the old article redirect, security headers and caching. Regex rules also avoid Windows emulator glob normalization issues.
- Hashed Next assets are immutable; HTML and route payloads revalidate; media cache for one hour. Images use local static files without the Next image server.
- The contact form still prepares an email. Future server-only capabilities require a separately planned backend.
- `www.synapsai.co` was not configured as a custom domain on this Hosting site at launch and presented a TLS hostname mismatch before deployment. Set it up as a redirect to `synapsai.co` with the domain owner/DNS provider; this migration does not claim to fix it.

## Rollback reference

Before replacement, live version: `sites/synpasaico/versions/c63c1b0e779be4bd`.
Release: `sites/synpasaico/releases/1788254948844000`, 2026-09-01 09:29:08 UTC.
Use Hosting release history in the Firebase console, select **synpasaico**, then roll back to this release if needed. The original site used a catch-all rewrite to `/index.html`.

Reference: [Firebase Hosting configuration](https://firebase.google.com/docs/hosting/full-config).

