# QA â€” 2026-09-16

## Environment

- Windows, Node.js 22.11.0, npm 11.2.0.
- Next.js 16.3.5, React 19.3.0, TypeScript 6.0.3.
- Playwright 1.63.0, installed Google Chrome, production build.
- Dependency installation reported zero known vulnerabilities. One lint transitive dependency recommends Node 22.13+, which is the documented development requirement; installed tools nevertheless executed successfully on this workstation.

## Results

- Production build: passed.
- TypeScript: passed.
- ESLint: passed.
- Browser suite: 8 scenarios passed for the dark revision, against the production server on port 3100.
- All 30 English/French pages returned HTTP 200 and exactly one H1, unique titles, matching document language and correct canonical/language alternates.
- Internal navigation destinations matched implemented routes; no browser runtime errors observed. Unknown French URL returned a localized HTTP 404.
- Viewport overflow checks passed at 320, 390, 768 and 1440px on home, French home, French solutions, French contact, ImaginAi and French team.
- Desktop solution menu, keyboard Tab/Escape, mobile navigation and same-page locale switching passed.
- Form required-field validation, safe email composition and draft invalidation after input edits passed. No delivery is claimed or performed.
- Automated axe WCAG 2 A/AA and 2.1 AA checks passed on home EN/FR, solutions, French AI solution, ImaginAi product and case study, FAQ, contact EN/FR, company and team EN/FR (12 pages).
- Verified cofounder names, team navigation, same-page language switching, dark color scheme and near-black body surface passed.
- FAQ interaction, reduced-motion handling, noindex metadata, robots and XML sitemap passed.
- Genuine product image loading and absence of failed HTTP resources passed during the visual capture journeys.

## Visual review

Screenshots generated in `.qa/` (local, excluded from version control):

- `home-desktop.png` â€” 1440px, complete homepage.
- `home-mobile.png` â€” 390px, English homepage.
- `home-french-mobile.png` â€” 390px, French homepage.
- `solutions-desktop.png` â€” 1440px, solutions directory.
- `contact-mobile.png` â€” 390px, French contact page.
- `team-desktop.png` â€” 1440px, team page.
- `team-mobile.png` â€” 390px, French team page.
- Matching `*-viewport.png` captures are also available.

Dark desktop home, French mobile home, mobile contact and both team layouts were inspected directly. All website surfaces are dark; official product UI remains faithful to its source. The real mobile composition was subsequently adjusted to use contain sizing after visual review revealed clipping. Production build, TypeScript and lint passed after that adjustment. The requested targeted browser rerun was blocked by automatic approval review because its usage quota was exhausted; therefore the final image framing still needs visual rechecking. The 8 passing browser scenarios and saved screenshots describe the version immediately before this last framing adjustment.

Future checks focus on English, per the owner's latest instruction. Dedicated French verification resumes when the English iteration is approved for French adaptation.

## English Insights iteration

- Production build, TypeScript and ESLint: passed for the new Insights implementation.
- `npm run test:e2e -- tests/insights.spec.ts`: **5 passed** against the isolated production server.
- Verified home-to-Insights-to-article navigation, contents anchors, references, contact link and absence of browser runtime errors.
- Verified English document language, canonical URL, article metadata and structured data, staging noindex, review badge, no fabricated publication date, and draft exclusion from the sitemap.
- Verified staging/public editorial filtering and public navigation threshold. The missing French article URL returns 404; no French equivalent or full French QA pass was created.
- Overflow checks passed at 320, 390, 768, 1024 and 1440px for the English homepage, Insights index and article; mobile Insights navigation passed.
- Automated axe WCAG A/AA and 2.1 AA checks passed on the index and article, including the mobile article.
- Desktop index, desktop article, mobile article and desktop reading captures were inspected directly. Screenshots are in `.qa/insights-index*.png`, `.qa/insight-desktop*.png` and `.qa/insight-mobile*.png`.

These results cover the English Insights iteration. Earlier bilingual checks and the earlier product-image framing limitation remain recorded above.

## English Insights V1 and IA reconciliation V2

- Final production build, TypeScript and ESLint: passed.
- **26 distinct English browser scenarios validated** across the two targeted suites: 13 Insights scenarios and 13 IA scenarios. The combined initial run passed 24/25; the remaining test expected a trailing slash that Next.js correctly omits on the root canonical. After fixing that test assertion, it passed with two repeated technical-article visual checks (3/3). The subsequently differentiated Company page and English route audit passed together (2/2).
- All 17 English corporate routes returned 200 with one H1, distinct titles, English document language, correct canonicals and implemented internal destinations. All five article routes passed their dedicated content/metadata tests; index navigation and the old article URL's 308 redirect passed.
- Home exposes two distinct product entries, three real article previews and recognition navigation. The learner â†’ Prof â†’ case study â†’ Impact journey passed. Team and footer links match the exact owner-validated URLs and include safe external-link attributes.
- English-only Prof/Impact metadata and sitemap entries do not invent French alternates. Missing French equivalents and unpublished legal routes correctly return 404. Existing French pages were not rewritten or subjected to a full French QA pass.
- All five articles passed body/source integrity, bylines, tags, takeaways, related-content navigation, Article/Person schema, PNG social previews, noindex and review-state checks.
- Overflow checks passed at 320, 390, 768 and 1440px on Home, Products, both product details, the case study, Company, Impact, Solutions, digital transformation and Team. Insights index/articles additionally passed at 1024px.
- Automated axe WCAG 2 A/AA and 2.1 AA checks passed on desktop and mobile for those ten corporate routes and all six editorial routes. Index keyboard navigation and mobile navigation passed. No browser runtime errors were observed in the checked journeys.
- Real media loading was checked after scrolling each image into view. A first Insights run exposed a hanging cold optimization request for the CTO portrait; pre-sized 96px WebP author images eliminated this dependency. Below-fold captures now wait for loaded images rather than saving blank lazy placeholders.
- Visual review led to separately composed mobile SVG covers with larger labels. Desktop covers, social previews, mobile covers, inline diagrams, engineering comparison tables, product art, Home, Products, Prof, the case study, Impact and Company were inspected directly. The earlier product-image clipping concern is now resolved in the checked English compositions.
- Performance measures are structural: server-rendered editorial content, no new client/chart/animation library, small SVG covers, pre-sized author images, lazy media below the fold, explicit media dimensions and no overflow. No production Core Web Vitals claim is made.
- Local preview on port 3000 returned HTTP 200 for ImaginAi Prof after the final integration. No deployment, message delivery, account signup or other external mutation was performed.

Final screenshots are under `.qa/ia-v2-*.png` and `.qa/insights-v1-*.png`, including viewport, full-page, diagram and table captures. Tests use the isolated production server on port 3100. Historical results above refer to earlier versions.

## Limits

- These checks are local Chrome checks, not a cross-browser or formal accessibility certification.
- No production field performance data, real email delivery, CMS, analytics or hosting integration has been tested because those services are not configured.
- Final copy, service boundaries, media approval and legal content require review before launch.
- Screenshots and HTML report can be regenerated with `npm run build` then `npm run test:e2e`.

## Brand refresh and Insights tabs ? 2026-09-16

- Production build, ESLint and TypeScript passed after the brand/media changes, and again after the Insights browser integration.
- The 26 existing English corporate/editorial scenarios passed for the brand/media revision, including axe and responsive checks. After the index reorganization, all 13 existing Insights scenarios passed again. The additional filter test passed after correcting its expected engineering category count from two to one, matching the editorial registry.
- Verified category selection, search, no-result reset, Press empty state, arrows/Home/End keyboard navigation and selected-tab semantics at 390px and 1440px. Mobile Press accessibility passed. The index additionally passed overflow checks at 320, 390, 768, 1024 and 1440px.
- Inspected updated desktop home, mobile Prof page, product compositions, footer, desktop/mobile Insights and Press screenshots. Archivo loaded successfully from the local asset; the primary home button measures about 44px high (8px shorter). Each footer social link contains one icon and no visible text while retaining its accessible name.
- Four approved product compositions were matched to official imaginai.io sources and optimized as WebP. They load without clipping or altering product interface colors. Screenshots retain their original French UI within the English site.
- Evidence: .qa/brand-products-desktop.png, .qa/brand-footer-desktop.png, .qa/insights-v1-index-_.png, .qa/insights-press-_.png and refreshed .qa/ia-v2-*.png. Local preview remains available on port 3000.
- Shared typography, primary color and button sizing affect existing French routes; no French copy adaptation or dedicated French QA was performed. Press awaits owner-provided links; no entries or dates are fabricated.

## Three-column articles and eight Press videos ? 2026-09-16

Production build, ESLint and TypeScript passed. Four targeted browser scenarios passed: existing index navigation, responsive/accessibility checks, keyboard/filter/search behavior, and the new article/Press grid and link checks. Desktop computed layouts confirm three article columns and four Press columns; All shows four video cards and View all selects the eight-card Press tab. All eight exact YouTube destinations, dates, external-link attributes and thumbnail loads were verified. Press search and empty-result recovery passed; no iframe is loaded. Index overflow checks cover 320, 390, 768, 1024 and 1440px; mobile/desktop axe checks passed. Final index and Press screenshots were inspected at 390px and 1440px, saved under .qa/insights-v1-index-_.png and .qa/insights-press-_.png. English only; no deployment.

## SEO, discoverability and supplied brand assets ? 2026-09-16

- Production build and the new prebuild SEO asset/intent checks passed. The combined English IA/Insights/SEO run passed all 30 scenarios.
- Social crawler SSR checks cover 23 English routes: unique titles/descriptions, one H1, self canonical, complete OG metadata, summary_large_image Twitter cards, reachable PNGs and parseable JSON-LD.
- Staging sitemap now excludes every noindex route. Production policy is separately exercised without publishing the site; no fictional French equivalents or review articles are included.
- Official navbar/footer wordmark, supplied PNG favicon, conventional ICO, vector-derived touch/app icons and system/orbit brand marks are integrated. Desktop/mobile home and responsive corporate/article layouts passed; social-card home, product and article compositions were visually inspected. Transparent padding in the initial social artwork was corrected before final inspection.
- Host canonicalization to https://synapsai.co, legacy article redirect and real 404 behavior were checked. No deployment, external social post or Search Console account mutation occurred.
- Final small adjustments preserve logo proportions and isolate sitemap policy for testing. Release-only checks and query map are in docs/seo.md. Public platform preview caches and field Core Web Vitals remain untested until deployment.

Final confirmation: the three SEO scenarios passed after the last build; ESLint and TypeScript also passed. The distinct scenario count across this iteration is 31.

## English article publication approval â€” 2026-09-17

All five articles now have an explicit published status following owner approval. Build and SEO asset checks passed; prior lint and TypeScript checks passed. Nine targeted scenarios validated public eligibility, staging exclusion, production sitemap inclusion, article content/metadata/links, and responsive index accessibility. The five article tests were updated to expect no review badge and passed on rerun. The refreshed desktop index screenshot was inspected. Actual publication dates remain unset until first public deployment. SITE_PUBLISHED remains false; no Firebase deployment occurred.


## Firebase Hosting launch - 2026-09-17

Live deployment and validation results: [Firebase launch QA](firebase-launch-qa.md). Build, lint, TypeScript and 32 current English/Hosting checks validated; five additional checks passed on https://synapsai.co. See the linked report for corrected assertions, legacy test limitations and the pre-existing www issue.


## Careers - local English iteration

Preview build (39 pages), SEO asset checks (19 strategic routes), lint and TypeScript passed. The three shared SEO tests passed, including all English server HTML and social images. After fixing a 320px English Company navigation overflow, all seven targeted Careers/Company checks passed: contact/navigation/metadata, Careers at 1440/390/320px, and existing Company/Team/Impact responsive checks. Automated axe checks passed; reduced-motion and media loading checked. Desktop and 320px full-page screenshots inspected at `.qa/careers-1440.png` and `.qa/careers-320.png`. No Firebase deployment; development server available at http://localhost:3000/company/careers.


## Article sharing - local English iteration

Preview build, 19-route SEO asset checks, lint and TypeScript passed. Five targeted Playwright checks passed: real clipboard copy of the canonical URL (without local origin/query/hash), correctly encoded sharing destinations, Escape/focus behavior, denied clipboard/manual copy, native share payload and cancellation (mocked), plus article content/metadata and responsive accessibility regressions. Mobile 320px and desktop screenshots inspected in `.qa/article-share-mobile.png` and `.qa/article-share-desktop.png`. Sharing destinations were inspected only; no messages or posts were sent. Device OS share-sheet appearance was not manually tested.


### PC sharing correction
Reproduced native sharing leaving the primary button pending on Chrome PC. Clipboard success was reproducible on localhost; the reported failure across all user browsers was not reproduced. Five targeted tests now pass, including actual legacy copy after Clipboard API rejection and a never-settling clipboard promise. Lint and preview build/TypeScript passed. Real development-server Chrome check (no API mocks): copied confirmation visible, sharing panel opens, button enabled, no page errors. Desktop/mobile screenshots reviewed. No Firebase deployment.

## English homepage visual rhythm - 2026-09-18

Production build, TypeScript and ESLint passed after the English homepage visual pass. The homepage now alternates dark technical and light white/mint surfaces, keeps the hero systems diagram unobstructed, and retains the real ImaginAi and ImaginAi Prof product media in the dedicated ecosystem showcase. Automated axe checks passed on the targeted corporate suite. Desktop and 390px mobile captures were inspected under .qa/home-desktop.png and .qa/home-mobile.png.

The general responsive suite still reports a pre-existing 320px overflow in the French Company/Team tab navigation. The static Firebase emulator also returns 404 for Next RSC prefetch text requests during the legacy visual resource assertion; page HTML, media and the targeted accessibility checks remain valid. No French content restructuring or Firebase deployment was performed for this iteration.

## Product mockup visual prototype - 2026-09-18

Production build, TypeScript, ESLint and the focused English homepage Playwright check passed. The real ImaginAi and ImaginAi Prof compositions were inspected in the new framed product stages at desktop and mobile widths. The visual capture journey passed, and reduced-motion behavior remains covered by the shared accessibility checks. No new generated media was added; the current product media remains replaceable through the existing component boundary.

## English ImaginAi mobile product page - 2026-09-18

Production build, SEO checks, TypeScript and ESLint passed after the Linear Mobile-inspired rebuild of `/products/imaginai`. Three targeted Playwright scenarios passed: the Home-to-ImaginAi-to-case-study journey, ImaginAi responsive/accessibility/media checks at 320, 390, 768 and 1440px, and the unchanged ImaginAi Prof regression route. Automated axe checks passed at 390 and 1440px; every main-content image loaded with a positive natural width; no page errors or horizontal overflow were reported. Full-page and viewport captures at 390px and 1440px were inspected under `.qa/ia-v2-products-imaginai-*`. Generated product-photography concepts are recorded in the public media manifest and labelled on-page. English only; no Firebase deployment.

After owner review, display titles were reduced to match the homepage hierarchy. The production build, lint and TypeScript checks passed again; the focused ImaginAi responsive/accessibility scenario passed at all four viewport widths, and refreshed 390px/1440px hero captures were inspected.

The subsequent immersive hero revision passed the production build, SEO checks and the focused Playwright scenario at 320, 390, 768 and 1440px. The first responsive implementation exposed a hidden duplicate image to the media-loading test; it was replaced with one `<picture>` element and the rerun passed. Refreshed desktop and mobile viewport captures confirm that the gradient preserves copy contrast and the mobile product interface remains above the title. Store controls are disabled and the QR preview is intentionally non-scannable until verified destinations are supplied.

The hero was then shortened by about 15% at each responsive tier. Build, lint, TypeScript, SEO and the four-width Playwright check passed; refreshed captures show the title and the following section entering the viewport earlier. The mobile fade was strengthened where the product image meets the copy to preserve legibility after the height reduction.

## Insights archive

The earlier archive verification passed for the initial ten-entry limit. The seven-entry adjustment retains the same partition and browser assertions, now expecting seven current entries and three archived ones in the current collection. ESLint and SEO asset checks pass. Final TypeScript, production-build and browser verification are pending resolution of an unrelated local TypeScript error in `tests/ia.spec.ts` (`naturalWidth` is read from a locator inferred as `SVGElement | HTMLElement`). No French archive rollout or Firebase deployment was performed.

## Additional English Insights â€” 2026-09-18

TypeScript, ESLint, the SEO asset check and the production build passed. Focused Playwright checks passed for the five new articles: content, internal links, canonical/article metadata, social image delivery, review status, source references and production sitemap exclusion (six checks), plus responsive 320/390/768/1024/1440px, reduced-motion, axe, media-loading and screenshot coverage (five checks). A 390px full-page capture of the learning-measurement article was inspected at `.qa/insights-v1-10-390.png`; the dedicated social card was also inspected. No French adaptation or Firebase deployment was performed.

The Study Tools chapter was reorganized into a same-height desktop split: product image left and four capability cards right in a 2Ã—2 grid. Build, lint, TypeScript, SEO and the focused four-width Playwright scenario passed. The refreshed 1440px full-page capture was inspected; tablet and mobile fall back to the existing stacked responsive treatment without overflow or accessibility violations.

The interactive Study Tools pass added four generated concept mockups and a client-side tab interaction. The dedicated Playwright scenario passed hover, click, keyboard arrow navigation, selected-state changes, active-image loading and the mobile activation path. The selected translation state was inspected in `.qa/imaginai-study-tools-interaction.png`. Build, SEO, TypeScript, ESLint and the responsive/accessibility scenario also passed.
## Firebase deployment — v0.2.0 — 2026-09-18

- Production build: passed with `npm run build:production`; SEO checks passed for 19 strategic routes.
- Firebase Hosting site `synpasaico` in project `imaginai-f4fca`: deployed and released successfully.
- Firebase version: `eb18816f7e494dde`; live release: `1789760669591000`.
- Public smoke checks: `/`, `/insights`, `/products/imaginai`, `/robots.txt` and `/sitemap.xml` returned HTTP 200.
- Legacy Insights slug returned HTTP 301 to the current article URL.
- The production build uses `SITE_PUBLISHED=true`; review-only articles remain excluded from public navigation and sitemap.


## English homepage visual enrichment - 2026-09-19

- Production-style preview build: passed with 53 static pages; SEO asset/intent checks passed for 19 strategic routes.
- ESLint, TypeScript and SEO checks: passed.
- Targeted Playwright homepage scenario: passed at 390px and 1440px, including alternating surfaces, real product media and no horizontal overflow.
- Desktop and mobile homepage captures were inspected. New hero, context and approach visuals loaded and kept their concept labels; the first ecosystem product image is priority-loaded for the initial homepage journey.
- The broader legacy visual-capture test reached the screenshots but reports Firebase static-export RSC payload requests as HTTP 404s in the emulator; this is a test harness/static-export response issue, not a failed homepage image request. The targeted homepage scenario passed after the priority-loading adjustment.
- No French copy, French homepage structure or production deployment was changed in this iteration.

## English homepage proof refresh - 2026-09-19

- Production-style preview build, SEO checks, ESLint and TypeScript passed after replacing the English homepage proof copy.
- The focused homepage Playwright scenario passed at 390px and 1440px. The proof strip now renders `+145K users impacted` and the Mastercard Foundation-supported GHSS-YIC 2026 recognition.
- The Microsoft for Startups line is provisional local-review copy and remains blocked from launch publication until its program/beneficiary evidence is supplied.
- French homepage copy and detailed Impact/Work evidence were not changed; no Firebase deployment was performed.

## English homepage hero edge correction - 2026-09-21

- The hero visual was extended through the centered container's right gutter to remove the apparent dark strip beside the image.
- Preview build, ESLint, TypeScript and SEO checks passed.
- The focused English homepage Playwright scenario passed at 390px and 1440px with no horizontal overflow.
- This local correction has not been deployed to Firebase yet.

## English homepage hero cleanup - 2026-09-21

- `overflow-x: clip` contains the full-bleed hero extension without changing the image framing.
- The English hero no longer renders the `SCROLL TO DISCOVER` control or the fictional-team concept caption.
- Preview build, ESLint, TypeScript and the focused Playwright homepage scenario passed at 390px and 1440px; no horizontal overflow was reported.
- This cleanup remains local and is not deployed to Firebase yet.

## English homepage hero spacing - 2026-09-21

- Reduced the desktop and mobile hero minimum heights to remove the empty area left after the hero controls were removed.
- Preview build, ESLint, TypeScript and the focused homepage Playwright scenario passed at 390px and 1440px.
- This spacing adjustment remains local and is not deployed to Firebase yet.

## Firebase deployment - v0.2.2 - 2026-09-21

- Production build passed with `SITE_PUBLISHED=true`; SEO checks passed for 19 strategic routes.
- Firebase Hosting site `synpasaico` in project `imaginai-f4fca` released version `53e77be691a89b1e` at `1789982221277000`.
- Live smoke checks passed with HTTP 200 for `/`, `/products/imaginai`, `/insights`, `/robots.txt` and `/sitemap.xml`.
- The deployed version includes the contained hero image, reduced responsive hero spacing, and removed hero scroll/caption controls.

## Firebase deployment - v0.2.1 - 2026-09-19

- Production build passed with `SITE_PUBLISHED=true`; SEO checks passed for 19 strategic routes.
- Firebase Hosting site `synpasaico` in project `imaginai-f4fca` released version `f3bf61dcf2120e83` at `1789825344965000`.
- Live smoke checks passed with HTTP 200 for `/`, `/products/imaginai`, `/insights`, `/robots.txt` and `/sitemap.xml`.
- The live homepage contains the new `145K`, Mastercard Foundation and Microsoft for Startups proof copy. The Microsoft wording remains provisional pending evidence validation.
