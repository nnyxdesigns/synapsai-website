# French content adaptation rules

This is the editorial gate for the progressive French rollout. It uses the current English routes as the reference for structure and meaning, while preserving natural French writing.

For every French page, keep the same user goal, section order, visual hierarchy, interaction, CTA destination and factual scope as the English reference. Adapt sentence rhythm and terminology for French readers instead of translating word for word. Keep product names, official names, URLs, quantities and sourced evidence unchanged unless an approved French form exists.

Use a shared glossary before editing a lot: `AI` / `intelligence artificielle`, `workflow` / `flux de travail` where natural, `custom software` / `logiciel sur mesure`, `digital transformation` / `transformation numérique`, `learners` / `apprenants`, `instructors` / `enseignants or formateurs` according to context, and `product` / `produit numérique`. Keep ImaginAi and ImaginAi Prof capitalization exactly as official product names.

Each page review must cover the visible copy, navigation labels, buttons, image alt text, captions, headings, metadata, canonical/hreflang, structured data names and error/empty states. Avoid adding claims, testimonials, vacancies, benefits, locations or metrics that are absent from the approved English source.

The first implementation lot is P0: `/fr`, `/fr/solutions` and the four French solution details. P1 follows with products, work and company. P2 covers FAQ, Contact and Impact. P3 covers Careers and Insights; the first Insights article is now adapted while the remaining articles stay gated. The route gate is tested in `tests/french-rollout.spec.ts`.

French copy changes should be made in small reviewable batches. After each batch, run the relevant route and responsive tests at 320px and desktop, inspect French wrapping and keyboard focus, then request content approval before moving on.
