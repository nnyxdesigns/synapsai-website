# Insights V1 — editorial system

## Collection

Five complete English articles are integrated in the requested publishing order:

1. **AI for Africa Should Be Designed for Context, Not Just Translated** — AI & Africa; featured; CEO.
2. **Inside ImaginAi: Designing an AI Learning System Around How Students Actually Study** — Inside SynapsAi; CEO.
3. **Building AI Products for Imperfect Connectivity** — Product & Engineering; CEO + CTO.
4. **Beyond the AI Demo: What It Takes to Build Useful AI Products** — Perspectives; CEO.
5. **What We Learn When AI Meets the African Classroom** — Field Notes; CEO.

The approved team registry resolves Youssouf Nchetkou Ndam (CEO) and Frank Arnaud Yap (CTO). No invented biography or credential is used. Each entry has 3–5 tags, a standfirst, unique description, update date, computed reading time, source notes, key takeaways, a cover, inline visual content, and 2–3 related articles.

## Research briefs and argument structure

| Article         | Audience / primary question                                    | Thesis and outline                                                                                          | Main evidence                                             | Visual / site relationship                                             |
| --------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------- |
| Context         | Product builders: what makes local AI useful?                  | Specific users → language → access → task evaluation → trust → strategy                                     | Masakhane participatory MT; GSMA inclusion; UNESCO Africa | Layered context cover; four-layer framework; product link              |
| Inside ImaginAi | Education/product readers: how can learning modes connect?     | Study session → modes → material context → practice → teachers → progress → evidence                        | Official product overview; UNESCO education guidance      | Learning loop; real mobile artwork; learner product link               |
| Connectivity    | Engineers/product leaders: how does work survive interruption? | Conditions → latency → failure contract → transfers → cost → continuity → evaluation                        | MDN online-state limits; AWS retry guidance               | Interrupted path/recovery cover; lifecycle; response matrix; Work link |
| Beyond demo     | Buyers/founders: what makes a capability operable?             | Problem → information → interaction → reliability → economics → ownership → measurement                     | Sculley et al., technical debt; NIST AI RMF               | Model inside system; maturity model; review table; AI solution link    |
| Classroom       | Educators/product teams: what counts as useful support?        | Task → learning vs convenience → teacher interpretation → useful effort → conditions → product implications | UNESCO guidance; official learner/teacher ecosystem       | Relationship map; three-role framework; product link                   |

Recommendations are original editorial reasoning. External evidence is cited where used. The classroom article is explicitly a perspective and set of hypotheses, not an invented field study. No classroom quotes, research participants, internal results or performance numbers are fabricated. V2 research subsequently found a company-relayed CITS participation account; it is used narrowly in Impact/Work without retroactively manufacturing a classroom experiment.

Only documented product areas are represented as current. Document-analysis, offline-generation and recommendation workflows are discussed conditionally, not promised as live features.

## Implementation

- `src/lib/insights.ts`: reusable typed metadata registry, five categories, authors, publication state, related links, SEO and reading-time calculation.
- `src/content/insights/types.ts`: reusable body, paragraph, section, source, diagram, image and table shapes.
- `src/content/insights/*.ts`: one independent body per article. Adding metadata cannot silently reuse another article's text.
- `src/components/insights.tsx`: reusable cards, featured item, Home preview, article renderer, authors, sources and related content.
- `src/app/insights.css`: scoped reading/index layouts.
- `scripts/generate-insights-media.mjs`: original vector covers, mobile art direction, static PNG social previews and optimized official portrait thumbnails. Uses the existing Sharp dependency; no new content framework or client animation library.
- `public/media/insights/`: five desktop SVGs, five mobile SVGs, five 1200×630 PNGs, two WebP avatars; provenance in the media manifest. Covers are approximately 1–2 KB each; PNG previews approximately 45–51 KB.

Desktop covers use 1200×660 layouts. At 600px and below, a picture source selects redesigned 600×500 artwork with readable labels, rather than shrinking desktop diagrams. Inline diagrams use semantic HTML and adapt to mobile. Real ImaginAi artwork is displayed intact; no teacher dashboard is fabricated.

## URLs and metadata

`/insights` shows one featured entry and four others; no sparse category filters, fake pagination or newsletter. The first article's previous `/insights/ai-for-africa-designed-for-context` URL permanently redirects to `/insights/ai-for-africa-designed-for-context-not-just-translated`. V2 preserves these working routes.

Each article has a canonical English URL, Article/Person structured data, topic tags, Open Graph article metadata and a PNG social preview. No French equivalents or language alternates are invented. Publication dates remain absent until actual publication; the real revision date is shown as Updated.

Insights is an explicit V1 section. All five are accessible in local/staging navigation and three are integrated on Home. Editorial status remains review, and staging remains noindex. Public publication is still an explicit editorial operation: set reviewed entries to published with an actual publication date and rebuild under the approved launch configuration. This workflow does not remove Insights from V1; it prevents draft metadata from claiming an event that has not happened. No deployment was performed.

## Verification

Run build, lint, typecheck and the English suites `tests/insights.spec.ts` and `tests/ia.spec.ts`. See `docs/qa.md` for the final results. Tests cover distinct article bodies, citations, authors, related links, legacy redirects, SEO, media, mobile widths, accessibility and keyboard navigation.

## Category browsing and Press

The English index provides All, five editorial categories and Press tabs, plus title/topic search. Filtering supports keyboard arrows, Home/End and an announced result count. Press is a separate typed registry in src/lib/press.ts for verified external videos, interviews and articles; it is empty pending owner links. Add the exact URL, title, publisher, format and original publication date after verification. No YouTube iframe or remote tracking is loaded on the index.

## 2026-09-16 ? Three-column Insights and populated Press

The owner approved retaining the featured article, showing following articles in three desktop columns, and matching Linear Now Press with thumbnail cards in four desktop columns. All previews four videos and View all selects Press with all eight supplied videos. Tablet uses two columns and mobile one. Video titles, channel and thumbnails were verified through YouTube oEmbed; original publication dates came from the public watch-page metadata. English display titles adapt the originals, retained in the registry for search and provenance. Local thumbnail assets avoid third-party requests until a visitor follows a video link. No video iframe or autoplay is loaded.

## Owner approval ? first five English Insights

The owner explicitly approved publication of all five review articles. Their individual status is now published, making them eligible for production navigation and the production sitemap. SITE_PUBLISHED remains false until deployment preparation is complete. No public deployment occurred. Publication dates remain unset until the actual first public release; approval is not a fabricated publication timestamp. Future articles must receive their own explicit status and approval.

## 2026-09-18 — Five English Insight drafts

Five additional English-only articles extend the collection. They are deliberately marked `review`, so they are visible for local/staging editorial review but excluded from the production collection, navigation and sitemap until their own explicit publication approval:

6. **What Makes an AI Product Worth Using Every Day?** — Perspectives.
7. **Designing AI for People Who Don’t Think Like Engineers** — Perspectives.
8. **The Hidden Cost of Building AI Products in Emerging Markets** — Product & Engineering.
9. **From Assistant to Learning System: Rethinking AI in Education** — Field Notes.
10. **What We Measure When We Build AI for Learning** — Field Notes.

The articles use original editorial analysis, documented external references, internal contextual links and explicit limitations. They contain no fabricated SynapsAi usage data, learning results, customers, deployments, providers or financial claims. The final article reserves future charts for approved, documented ImaginAi data rather than creating illustrative metrics. Each draft has a dedicated original conceptual SVG cover, mobile variation and 1200×630 social preview generated by `scripts/generate-insights-media.mjs`; all are identified in the media provenance manifest as conceptual artwork, not product UI or evidence.

## Archive behaviour — 2026-09-18

The English Insights index has a strict current-collection limit of seven entries. Entries are ordered by publication date where available, otherwise by their real revision date. Older content appears in a compact Archive list after the main index and Press, with its category, title, date and direct article link. Archive entries remain normal canonical article pages and continue to be included in the sitemap once published. The archive uses no fabricated dates, pagination or duplicate card grid.
