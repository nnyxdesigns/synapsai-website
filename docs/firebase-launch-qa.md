# Firebase Hosting launch — 2026-09-17

- Static export build, ESLint and TypeScript passed. 38 pages plus metadata routes exported; 290 files deployed.
- Current English/Hosting suite: 31 passed on the production build, then the remaining sitemap assertion was corrected to account for production mode and passed in a targeted rerun (32 checks validated). Responsive checks cover 320px/mobile and desktop, real media, navigation and automated axe assertions. Desktop/mobile home screenshots were visually inspected.
- A Windows Hosting emulator glob normalization issue caused the old article redirect to return 404. Supported regex configuration fixed it; redirect and cache/security headers passed locally and remotely.
- An initial broad run also included the historical bilingual suite. Its old French 404 expectation was accommodated in the shared static 404. Two old visual checks still use the retired `.product-image` selector; they are not current English release checks. The default `test:e2e` command explicitly runs current English suites and Hosting checks; `test:legacy` retains the old suite for future migration. No French editorial update was undertaken.
- Non-indexable Firebase preview passed HTTPS, page/asset responses, noindex, redirect, 404 and Chrome navigation. The CLI's automatic Firebase Auth preview-domain addition was removed, restoring the previous domain list; future preview commands use `--no-authorized-domains`.
- Production published to **only** `synpasaico` in project `imaginai-f4fca`, version `c8ee1897a0e01e5b`. Existing `synapsai.co` custom domain remained active; no DNS change was made.
- Five post-deployment Playwright checks passed on `https://synapsai.co`: all English metadata and social image responses, production robots/sitemap (38 URLs), headers/caching, existing French HTML language smoke checks, 404, canonical redirects, client navigation, Insights category/search/Press interactions and mobile navigation. Live screenshots: `.qa/seo-brand-home-desktop.png` and `.qa/seo-brand-home-mobile.png`.
- Known pre-existing domain issue: `www.synapsai.co` has a TLS hostname mismatch and is not a custom domain on this site. The apex production domain works. Separate www/DNS setup, Search Console submission and platform-specific social preview cache checks remain follow-ups.
- Commands and previous live release for rollback: [firebase-hosting.md](firebase-hosting.md).

## Latest deployment — 2026-09-17 20:48 UTC

The current local version was rebuilt with Careers and the PC sharing/copy fallback, then deployed to `synpasaico` as version `244bce41bfa2c907`. Public checks passed for Hosting headers/indexing/404/French smoke, Careers metadata and contact, Copy link and Share article behavior. No other Firebase site was touched.
