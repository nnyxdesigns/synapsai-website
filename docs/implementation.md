# Firebase Hosting migration — 2026-09-17

The owner authorized deployment to the existing `synpasaico` site in `imaginai-f4fca`. Next.js now exports all 38 routes to `out/`. Language is resolved by the catch-all root layout during the build; request-dependent proxy/layout logic has been removed. A shared static 404 includes an English message and French home link. Metadata routes are force-static, images are served locally without an image optimization server, and Firebase owns headers, cache policy, clean URLs and the old article redirect. No SPA fallback is used.

All five approved English articles carry the first-publication date 2026-09-17. `build:preview` remains non-indexable; `build:production` enables indexing. `npm start` runs the Hosting emulator. Detailed commands and the previous live version for rollback are in [firebase-hosting.md](firebase-hosting.md). Earlier notes about dynamic rendering or an unapproved deployment target below are historical.

---

# Implementation — 2026-09-16

## Approved during this session

- Next.js, requested by the project owner.
- Fully dark visual direction based on `DESIGN-linear.app.md`, selected by the project owner and superseding the initial light proposal.
- Enriched company/product copy and team information from the official SynapsAi and ImaginAi websites.
- A dedicated directory for all website media.
- Ongoing UI and stability verification.

## Reversible implementation choices

- Next.js 16 App Router, React, TypeScript, npm lockfile.
- Native CSS with central design tokens; no UI framework or animation library.
- Server-rendered page content; small client components for navigation and contact preparation.
- English at `/`, French at `/fr`, matching deeper paths and language-preserving links. Request proxy sets an internal locale header, overriding incoming values; the root document renders the appropriate `lang`. No browser-language redirect.
- Local typed corporate/product content and a reusable five-article English Insights registry, prepared for a future CMS. Insights is part of V1 and accessible in staging, including a three-article Home preview. Review content remains noindex until the editorial launch operation.
- Real public mobile imagery and cofounder portraits from synapsai.co, delivered through Next Image. Archivo Variable from the official SynapsAi stylesheet is served locally with its SIL Open Font License. Earlier Inter/Manrope files are retained but no longer loaded. Native SVG diagrams explain systems rather than imitate product UI.
- Contact: browser-side, validated email preparation with explicit mailto link, copy action, readable fallback and no fabricated success state. No server data storage, email vendor or claimed delivery.
- SEO: unique localized titles/descriptions, canonical and EN/FR/x-default alternate links, Open Graph and Twitter metadata, XML sitemap and robots. Staging stays noindex by default.
- No analytics, marketing cookies, CMS vendor, hosting provider or deployment selected.
- Playwright against an isolated production server on port 3100 and installed Chrome; axe automated WCAG A/AA checks; ESLint and TypeScript. Tests never reuse the development server on port 3000.

## Content scope

**Current iteration workflow:** work and verification now focus exclusively on English. Existing French pages remain available; translate and adapt the next changes only after the owner validates English and requests the French rollout. Shared styles/components may naturally affect both locales. The earlier dark revision was applied bilingually before this workflow changed.

15 routes per locale: home, solutions overview and four detail pages, products overview and ImaginAi, work overview and ImaginAi case study, company, about, team, FAQ and contact.

English now adds `/products/imaginai-prof`, `/company/impact`, `/insights` and five article pages: 23 English pages in local review, with the existing 15 French pages retained. New English-only routes expose no French switch or alternate. The first article's earlier short URL permanently redirects to its full suggested slug. See `docs/insights.md` for authors, research, visuals and publication details.

IA reconciliation V2 separates the ImaginAi learner mobile application and ImaginAi Prof instructor web platform, expands `/work/imaginai` as an ecosystem case study, and introduces educational structures as a stakeholder/use-case layer. Existing semantic URLs are preserved. The new structured product registry supports additional products. Reusable components render product entries, real instructor screenshots, the three-stakeholder map, project method and evidence timeline. No teacher dashboard, client deployment or private architecture is invented.

Home retains the original B2B hero, capability preview, problems and operating perspective. Its existing featured section now distinguishes the two products, followed later by a compact recognition line and three real Insights. English Solutions pages gain a concise delivery method; digital transformation includes an explicitly labeled institutional scenario. Impact records founding, the approved 143K+ baseline, PROMEX, CONIA participation, CITS participation and current product scope. Unverified claims remain internal.

Owner-validated Instagram, LinkedIn and WhatsApp links appear in the English footer; all three team cards expose owner-validated LinkedIn profiles. The supplied X URL was an icon asset, not a profile, so X remains unlinked. Shared component changes are locale-guarded; no French copy adaptation was undertaken. Audit and visual decisions: `docs/ia-reconciliation-v2.md`.

The English Company overview now serves as a concise introduction and route to Story, Team, Impact and Solutions. About retains the deeper purpose/perspective narrative; their previous duplicated content is no longer rendered on both English pages.

Products explain who ImaginAi serves; the case study explains what SynapsAi built. Metrics remain at the approved 143K+ baseline. Award wording remains PROMEX 2025. No new numeric performance claims or fictional customer evidence.

Team names and roles are corroborated by synapsai.co and imaginai.io/apropos, and used under the project owner’s content-enrichment instruction. The Company pages and footer link to the team. No personal history or credentials are invented. Hidden pending approved material: industries, press, careers, product strategy and legal pages.

Teacher platform copy comes from the project brief and official ImaginAi site (class management, progress reporting, resources and activities); no teacher-dashboard image is manufactured. Owner-approved instructor screenshots now illustrate resources and learner follow-up. See `docs/content-sources.md` for source reconciliation.

## Visual proposal

The selected direction uses the reference near-black canvas (#010102), charcoal panels (#0f1011, #141516, #18191a), subtle borders, light text and mint actions (#7FFFD1), sampled from the official SynapsAi logo. Archivo matches the official brand typography. Navigation, forms, product frames, diagrams, CTA and footer are dark; authentic app screenshots retain their original UI colors. Founder portraits are presented in grayscale through CSS while source files remain intact. Original SynapsAi logo, page composition and copy are preserved. Detailed written copy remains in review.

## Publication checklist

1. Approve English/French copy, service boundaries, detailed visual tokens and current factual baseline.
2. Review the integrated owner-approved mobile and teacher-platform imagery.
3. Approve contact workflow; connect a real delivery service if email preparation is insufficient.
4. Supply approved privacy/terms content appropriate to the final site and providers. Add actual pages before promoting them.
5. Choose hosting; run production build and browser checks in that environment.
6. Enable indexing using `SITE_PUBLISHED=true` and rebuild only after launch approval.

No production deployment is part of this implementation.

## Brand and Insights browsing revision

Buttons use mint backgrounds and dark text, with 8px less total vertical padding. Footer social links display icons only, retaining accessible names. Four owner-supplied compositions were matched against official imaginai.io assets and compressed as WebP in public/media/products; no product UI was altered. English product layouts use these images; shared Archivo, button dimensions and brand tokens also affect existing French pages, without a French content adaptation.

The English Insights index now has category tabs, search, a compact editorial layout and a Press section inspired by Linear Now. A small client component controls server-rendered card slots; article bodies remain server-side. Tabs support arrows, Home/End and roving focus. Press entries live in src/lib/press.ts and remain empty until the owner supplies verified YouTube links; there are no fabricated videos or embeds.

## 2026-09-16 ? Three-column Insights and populated Press

The owner approved retaining the featured article, showing following articles in three desktop columns, and matching Linear Now Press with thumbnail cards in four desktop columns. All previews four videos and View all selects Press with all eight supplied videos. Tablet uses two columns and mobile one. Video titles, channel and thumbnails were verified through YouTube oEmbed; original publication dates came from the public watch-page metadata. English display titles adapt the originals, retained in the registry for search and provenance. Local thumbnail assets avoid third-party requests until a visitor follows a video link. No video iframe or autoplay is loaded.

## 2026-09-16 ? SEO and supplied brand assets

Approved: apply synapsai-seo-discoverability-social-sharing-requirements.md to all future routes, use the supplied green/white navbar logo, vector diagram symbol and 32px favicon. Implemented metadata, query map, social cards, structured data, build checks and staging-safe sitemap are documented in docs/seo.md. The exact supplied brand color #5EFFD9 supersedes the earlier #7FFFD1 source. Production verification, Search Console and real platform share-cache tests remain launch tasks; no deployment or French content adaptation is authorized by this change.

## Owner approval ? first five English Insights

The owner explicitly approved publication of all five review articles. Their individual status is now published, making them eligible for production navigation and the production sitemap. SITE_PUBLISHED remains false until deployment preparation is complete. No public deployment occurred. Publication dates remain unset until the actual first public release; approval is not a fabricated publication timestamp. Future articles must receive their own explicit status and approval.

## Careers - local English iteration

Added `/company/careers` following the owner request, with an original editorial layout, decorative animated SVG, real products and cofounder portraits, and contact via the existing public email. No vacancies, benefits or hiring commitments invented. English Company navigation and footer expose the page; only the English Company tabs wrap on small screens. SEO registry, social card, provenance and future sitemap inclusion added. No French page and no Firebase deployment. See [careers.md](careers.md).

## French rollout inventory — 2026-09-17

Read-only route and content inventory completed. Fifteen French corporate routes exist; English-only additions remain unavailable under `/fr`. The route matrix and P0–P3 sequence are documented in [french-rollout.md](french-rollout.md). No French copy or routes changed in the inventory step.

## Article sharing - local English iteration

All English articles now provide Share article and Copy link actions beneath the subtitle. A small client component receives the canonical production URL from the server-rendered article. Web Share is used when available; unsupported or failed sharing exposes LinkedIn, WhatsApp and email links. Cancellation does not open the fallback. Clipboard success is announced in a live region; denied/unavailable clipboard access exposes a focused selectable URL without a false success message. No third-party scripts or automatic posting. No Firebase deployment.

### PC sharing correction

Share article now always opens the inline sharing options. Native OS sharing is an explicit secondary action so Windows cannot block the primary control. Copy has a 1.5-second Clipboard API timeout, a legacy browser-copy fallback, a selectable manual fallback and a visible Link copied! button label only on success. Local only.

## French rollout

The first French rollout lots are implemented locally for `/fr`, `/fr/solutions`, the four solution details, products, work, company, FAQ, contact, Impact, Careers and the first Insights article. Remaining French Insights articles stay gated until their copy is approved. See [french-rollout.md](french-rollout.md) and [french-p0-qa.md](french-p0-qa.md).
