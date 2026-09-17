# Launch update — 2026-09-17

Firebase Hosting is now the approved target. `npm run build:production` explicitly enables indexing and exports a 38-URL sitemap including the five approved English articles, dated 2026-09-17. `build:preview` keeps noindex and an empty sitemap. HTML language, canonical URLs, OG/Twitter cards and JSON-LD are generated statically. Firebase handles clean URLs and the legacy article redirect; Next proxy/redirect configuration is no longer used.

Correction to the earlier host-redirect note below: `www.synapsai.co` is not currently registered on this Hosting site and already has a TLS hostname mismatch. The verified production host is `synapsai.co`. A www redirect needs separate custom-domain/DNS setup. Search Console submission and third-party social preview validation remain owner-side launch follow-ups. See [firebase-hosting.md](firebase-hosting.md).

---

# SEO and social sharing

## Implemented

The SEO brief is a standing requirement for future routes. src/lib/seo-pages.json is the English query/metadata/image registry; src/lib/seo.ts composes native Next metadata. Existing stable URLs are retained. Every English route has unique metadata, a self canonical, OG metadata and a large Twitter card. Articles keep their own titles, images and accurate authorship; review dates are not fictional publication dates.

| Canonical path                    | Primary intent                                       | Search title                                            |
| --------------------------------- | ---------------------------------------------------- | ------------------------------------------------------- |
| /                                 | SynapsAi company discovery                           | SynapsAi — AI Products and Custom Software              |
| /solutions                        | AI and software development services                 | AI and Software Development Solutions                   |
| /solutions/ai-automation          | AI workflow automation                               | AI and Workflow Automation                              |
| /solutions/custom-software        | custom business software                             | Custom Software for Business Operations                 |
| /solutions/web-mobile-development | web and mobile application development               | Web and Mobile Application Development                  |
| /solutions/digital-transformation | organizational digital transformation                | Digital Transformation for Organizations                |
| /products                         | SynapsAi products                                    | Products Built by SynapsAi                              |
| /products/imaginai                | ImaginAi learner mobile application                  | ImaginAi — AI Learning App for Students                 |
| /products/imaginai-prof           | ImaginAi Prof instructor web platform                | ImaginAi Prof — AI Tools for Teachers                   |
| /work                             | SynapsAi project portfolio                           | Our Work — Products and Software by SynapsAi            |
| /work/imaginai                    | ImaginAi ecosystem design and engineering case study | ImaginAi Ecosystem — Product and Engineering Case Study |
| /company                          | SynapsAi company overview                            | Company — Meet SynapsAi                                 |
| /company/about                    | SynapsAi story and mission                           | Our Story and Mission                                   |
| /company/team                     | SynapsAi founders and team                           | The SynapsAi Team                                       |
| /company/impact                   | SynapsAi impact and recognition                      | Impact, Recognition and Milestones                      |
| /insights                         | SynapsAi articles and press                          | Insights on AI, Product and Education                   |
| /faq                              | SynapsAi services and collaboration questions        | Frequently Asked Questions                              |
| /contact                          | contact SynapsAi                                     | Contact SynapsAi — Discuss Your Project                 |

Each individual Insight owns the informational subject described by its unique title/slug in src/lib/insights.ts. No duplicate education landing page or mechanical ecosystem URL rename was added.

## Brand and sharing assets

The owner-provided green/white wordmark is used in the header, footer, Organization schema and social cards. The vector symbol replaces generic center marks in the system/orbit diagrams. The supplied 32px PNG is the browser favicon, also wrapped as a conventional favicon.ico; touch/manifest icons are rasterized from the vector for clean larger sizes. The supplied vector uses #5EFFD9, now the primary token.

All social cards are 1200?630 PNGs under public/media/og: default, 18 page-specific corporate/index cards, and five article cards. Product cards use actual mobile/instructor imagery. Cards are generated by scripts/generate-seo-media.mjs and linked with absolute production URLs. Original input SVG/PNG files are retained, with provenance in public/media/manifest.json. Larger icons use the vector rather than scaling the small favicon.

## Indexing and structured data

SITE_PUBLISHED=false remains in force. Staging emits noindex and robots disallow; its sitemap contains no page entries. The publication sitemap contains canonical corporate pages plus published editorial entries, excluding reviews, redirects and nonexistent French equivalents. The pure buildSitemap function verifies both modes without publishing anything.

Home has WebSite and Organization JSON-LD; Company also identifies the same Organization. Hierarchical pages have BreadcrumbList JSON-LD. Articles retain Article/Person metadata and link the same publisher entity and official logo. No ratings, fabricated dates, offices or unsupported awards were added. Reciprocal hreflang remains for existing translations; new English-only routes have no French alternate. Shared logo/icon/social fallback changes also affect existing French routes; French copy and full French QA remain deferred.

The www.synapsai.co host permanently redirects to https://synapsai.co while preserving paths. Next retains its no-trailing-slash behavior. Configure TLS/HTTP-to-HTTPS enforcement at the chosen hosting edge after deployment; local development must remain reachable over HTTP.

## Validation and release

- npm run check:seo checks duplicate/missing metadata and intent, mandatory assets and all image dimensions; npm run build runs it automatically.
- tests/seo.spec.ts validates actual SSR HTML with a social-crawler user agent, unique titles/descriptions/H1, canonicals, OG/Twitter, live image responses, JSON-LD parsing, stage/public sitemap policy, icons, host redirects and 404.
- Existing English browser suites cover navigation, references, mobile layouts, image loading, keyboard support and axe checks.
- Before launch: approve copy/publication states, supply actual article publication dates, set the canonical production host, verify TLS redirects, configure Search Console with the owner account, submit the production sitemap, and inspect the important URLs.
- Run Google Rich Results Test/Schema Markup Validator and real social preview debuggers against public production URLs after deployment. Local metadata/visual checks cannot prove cached previews on WhatsApp, LinkedIn or X. No external posts were sent.
- Measure real Core Web Vitals after deployment; no performance score or ranking guarantee is claimed. Analytics and Bing remain unconfigured because no provider/account was selected. No credentials or speculative AI crawler files are introduced.

Guidance consulted: [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization), and installed Next.js metadata documentation.
