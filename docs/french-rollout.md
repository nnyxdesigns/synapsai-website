# French rollout plan

Status: P0, P1, P2, Careers and the first French Insights pass are implemented locally and under review. The remaining French articles stay gated until their editorial copy is approved. This document does not publish content or authorize a Firebase deployment.

Editorial adaptation rules are in [french-content-adaptation.md](french-content-adaptation.md). The route gate is covered by `tests/french-rollout.spec.ts`.

## Baseline

The English site at the root routes is the structural reference: same page purpose, section hierarchy, interaction behavior, dark design tokens, responsive rules, media treatment and accessibility expectations. French pages remain under `/fr` and must keep their language-aware links and `lang="fr"` metadata.

The existing French baseline contains the 15 core corporate routes:

| Lot     | French route                           | English reference                   | Current state                                                                 | Priority |
| ------- | -------------------------------------- | ----------------------------------- | ----------------------------------------------------------------------------- | -------- |
| Core 1  | `/fr`                                  | `/`                                 | Existing French home; copy and section order predate the current English copy | P0       |
| Core 2  | `/fr/solutions`                        | `/solutions`                        | Existing overview and French solution data                                    | P0       |
| Core 3  | `/fr/solutions/ai-automation`          | `/solutions/ai-automation`          | Existing localized detail route                                               | P0       |
| Core 4  | `/fr/solutions/custom-software`        | `/solutions/custom-software`        | Existing localized detail route                                               | P0       |
| Core 5  | `/fr/solutions/web-mobile-development` | `/solutions/web-mobile-development` | Existing localized detail route                                               | P0       |
| Core 6  | `/fr/solutions/digital-transformation` | `/solutions/digital-transformation` | Existing localized detail route                                               | P0       |
| Core 7  | `/fr/products`                         | `/products`                         | Existing French product hub; needs current two-product framing                | P1       |
| Core 8  | `/fr/products/imaginai`                | `/products/imaginai`                | Existing ImaginAi French page                                                 | P1       |
| Core 9  | `/fr/work`                             | `/work`                             | Existing French work overview                                                 | P1       |
| Core 10 | `/fr/work/imaginai`                    | `/work/imaginai`                    | Existing French ecosystem case study                                          | P1       |
| Core 11 | `/fr/company`                          | `/company`                          | Existing French company overview                                              | P1       |
| Core 12 | `/fr/company/about`                    | `/company/about`                    | Existing French story page                                                    | P1       |
| Core 13 | `/fr/company/team`                     | `/company/team`                     | Existing French team page and verified profiles                               | P1       |
| Core 14 | `/fr/faq`                              | `/faq`                              | Existing French FAQ                                                           | P2       |
| Core 15 | `/fr/contact`                          | `/contact`                          | Existing French contact flow                                                  | P2       |
| Core 16 | `/fr/company/impact`                   | `/company/impact`                   | French evidence-led milestones page                                           | P2       |

## English additions not yet available in French

| English route             | French route today | Decision                                                                         | Priority |
| ------------------------- | ------------------ | -------------------------------------------------------------------------------- | -------- |
| `/products/imaginai-prof` | 404                | Translate after instructor terminology and positioning are approved              | P1       |
| `/company/impact`         | Implemented        | French evidence-led milestone adaptation is available for review                 | P2       |
| `/company/careers`        | Implemented        | French careers copy is available; no active vacancy or hiring promise is claimed | P3       |
| `/insights`               | Implemented        | French index, filters and Press tab are available for review                     | P3       |
| `/insights/[article]`     | First article only | Adapt remaining articles individually; do not mirror English dates automatically | P3       |

## Priority sequence

### P0 — French foundation

Bring `/fr` and the four `/fr/solutions/...` pages into parity with the current English structure. Update navigation labels, hero hierarchy, CTA language, capability framing and solution details. Keep claims sourced and the French wording idiomatic.

### P1 — Products, work and company

Update `/fr/products`, `/fr/products/imaginai`, `/fr/work`, `/fr/work/imaginai`, `/fr/company`, `/fr/company/about` and `/fr/company/team`. Reflect the distinction between ImaginAi for learners and ImaginAi Prof for instructors without exposing the English-only Prof page before its French content is ready.

### P2 — Conversion and evidence

Update `/fr/faq` and `/fr/contact`, then prepare the French Impact page once its evidence language is reviewed. Preserve the existing no-false-submission behavior of the mailto contact flow.

### P3 — Editorial and careers

The French Insights index, filters and Press tab are available. The first priority article is adapted; remaining articles stay unavailable until each translation is reviewed. Careers has a localized conversation-only page and remains free of unverified vacancies.

## Acceptance gate

For each lot, compare English and French side by side for section order, purpose, media, CTA behavior and footer/navigation links. Run build, lint, TypeScript and relevant Playwright checks; inspect 320px and desktop screenshots; check keyboard focus, contrast, reduced motion, internal links, canonical/hreflang metadata and French wrapping. Do not deploy a lot until its English reference and French wording are approved.

P0 covers **`/fr` plus the four French solution detail pages**. P1 covers **products, work and company routes** listed above. The French product and work pages explain the learner and teacher sides of the ImaginAi ecosystem without exposing the English-only ImaginAi Prof route. P2 includes the localized FAQ, contact `mailto:` flow and evidence-led Impact page. P3 includes Careers plus the French Insights index and the first adapted article; other articles remain gated. Validation is local only and no Firebase deployment is authorized by this document.
