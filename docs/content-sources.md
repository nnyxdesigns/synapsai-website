# Official content review — 2026-09-16

The owner requested content enrichment from the existing official websites. Facts are paraphrased in EN/FR; no biographies or business commitments are invented.

| Source                      | Used content                                                                                                                                                                                                   |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| https://synapsai.co/        | Founding in 2024; ambition to make AI accessible, inclusive and personal; support for learners, teachers and professionals; cofounder names/roles; official portraits; approved 143K+ baseline and PROMEX 2025 |
| https://imaginai.io/        | Mobile/web education ecosystem; guided learning, quizzes, corrections and progress tracking; teacher class management, reporting, resources and activities; collaboration with teachers                        |
| https://imaginai.io/apropos | Corroboration of Frank Arnaud Yap (CTO), Youssouf Nchetkou Ndam (CEO), Steve Mekam Kontche (Tech Lead); attention to local/mobile learning constraints                                                         |

## Reconciliation

- ImaginAi displays 142,000+ users while SynapsAi and the approved brief state 143K+. Retain the approved 143K+ baseline, without extrapolation.
- Country counts and reach wording vary. Do not introduce new numeric reach claims.
- Additional awards, store scores, resource counts and combined-experience claims are not needed for this revision and are not introduced.
- Several ImaginAi image filenames and alt attributes explicitly say “placeholder”; use the official corporate portraits instead. Those three assets were downloaded and visually inspected. No replacement faces or biographies were generated.
- Generic LinkedIn buttons on ImaginAi did not expose verified profile URLs in the retrieved source, so no guessed social profile links are added.
- Product imagery retains actual app colors within dark website frames. Images are never recolored to imply a different real application interface.
- Names use the readable spelling on the ImaginAi About page; roles match both sites. English role titles are preserved in French alongside “Cofondateur”.

Assets, source URLs and licenses are tracked in `public/media/manifest.json`.

## First English Insight

“AI for Africa Should Be Designed for Context, Not Just Translated” is an original editorial draft requested by the owner. Its design recommendations represent a proposed SynapsAi perspective; the learning scenario is explicitly illustrative, not a customer result or a claim of shipped functionality.

- [Masakhane participatory research paper (2020)](https://arxiv.org/abs/2010.02353): supports the discussion of participation and the wider challenges of low-resource language technology.
- [GSMA Africa research announcement (2025)](https://www.gsma.com/newsroom/press-release/gsma-research-charts-a-more-inclusive-digital-future-for-africa/): supports device affordability, digital skills and locally relevant content as adoption constraints. Reviewed through the primary-source search excerpt; direct automated access returned HTTP 403. No numerical statistics are reproduced.
- [UNESCO, AI for Africa by Africa (2025)](https://articles.unesco.org/sites/default/files/medias/fichiers/2025/10/AI_for_Africa_by_Africa_EN.pdf): supports the importance of governance, capacity and local context.

The ImaginAi learner/teacher ecosystem reference uses the official product information already recorded above. Recommendations are distinguished from current product capabilities. The later five-article brief explicitly authorizes CEO attribution and relevant CTO co-authorship, resolved from approved team data. No publication date, biography, testimonial or outcome metric is fabricated. No French adaptation was created.

## Five-article Insights research

- [UNESCO education guidance](https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research): human agency and pedagogical suitability in the classroom/product articles; no learning-effect statistic is inferred.
- [MDN navigator.onLine](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine): a connectivity flag does not establish service reachability.
- [AWS retry guidance](https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/retry-backoff.html): controlled backoff and idempotent operations; article engineering proposals are not claims about the private product implementation.
- [Sculley et al., 2015](https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems.pdf): system-level maintenance and data dependencies around ML.
- [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework): voluntary AI risk framing, without certification claims.
- Cohere's [reference article](https://cohere.com/blog/automations-early-footprint), [blog](https://cohere.com/blog) and [Linear Now](https://linear.app/now) informed hierarchy and editorial pacing only. No copy, statistics or visual assets were reused.

## IA reconciliation V2 evidence

The owner-supplied `synapsai-codex-ia-reconciliation-v2.md` validates the distinction between ImaginAi (learner mobile) and ImaginAi Prof (instructor web), the audience definitions, class/group management, assignments/tasks and reporting. Institutional requirements remain use cases to scope, not assertions of deployed institution integrations.

| Item                         | Evidence                                                                                                                                                                  | Allowed public wording                                                                                                |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| CONIA 2025                   | [Official ImaginAi recognition history](https://imaginai.io/en/apropos), founder/company account; [event site](https://www.conia.cm/) confirms dates, venue and organizer | Participation / project presentation, 7–8 July 2025, Yaoundé; not an award                                            |
| CITS 2026 Douala             | [SynapsAi company LinkedIn](https://www.linkedin.com/company/synapsai-co/) relays founder accounts of the bootcamp                                                        | Bootcamp participation and user discovery only; no sample counts, conversion, bandwidth or learning claims reproduced |
| Official social profiles     | Owner supplied Instagram, company LinkedIn and WhatsApp in this session; LinkedIn references synapsai.co                                                                  | Link to exact validated destinations in `src/lib/company.ts`                                                          |
| Three team LinkedIn profiles | Owner supplied exact URLs, also corroborated by the company LinkedIn page                                                                                                 | Direct person-profile links, no new credentials                                                                       |
| X/Twitter                    | Owner supplied an SVG icon asset only                                                                                                                                     | No profile link until an actual account URL is supplied                                                               |

The similar LinkedIn company at `synaps-artificial-intelligence` belongs to a different business and is not used. The old ImaginAi About page's generic LinkedIn buttons are replaced only with the now owner-validated URLs.

## Pending evidence register — not rendered

| Candidate item from V2                  | Validation still needed                                                                                                                    |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| GHSS Youth Innovation Challenge winner  | Winner announcement/certificate tying SynapsAi/ImaginAi to the challenge, exact year/category; organizer sponsorship alone is insufficient |
| Orange Digital Center Douala, July 2026 | Participation record for SynapsAi/team and accurate program title                                                                          |
| Microsoft for Startups/Azure, 2023–2025 | Program/beneficiary record, entity and period; reconcile pre-founding 2023 and avoid guessed grant value                                   |
| Friends of Figma Douala                 | Source defining the relationship and dates, without upgrading collaboration to partnership                                                 |
| Mountain Hub, Buea                      | Source establishing a distinct collaboration beyond tags or event association                                                              |
| X profile                               | Exact account URL; an icon does not validate a handle                                                                                      |
| Legal pages                             | Approved operator/legal details and actual privacy/terms content before publication                                                        |

No 2023 milestone, program logo wall or partner status was fabricated to fill the timeline. Real Prof UI is still unavailable; its visual is explicitly a conceptual workflow.

## Brand and product media refresh

The official SynapsAi SVG logo contains #7FFFD1. Its public stylesheet at https://synapsai.co/SynapsAi_files/synapsai.custom.css uses Archivo Variable and mint buttons with dark text. The exact normal variable font is stored locally with its OFL license. Four compositions supplied by the owner match https://imaginai.io/assets/img/hero-phone.png, hero-dashboard.png, students-feature.png and teachers-feature.png. Local WebP derivatives preserve the UI; provenance is recorded in public/media/manifest.json. Linear Now (https://linear.app/now) informs category navigation and the separate Press area, without copying its articles or assets.

## Owner-supplied Press videos

Verified on 2026-09-16 using YouTube oEmbed and watch-page publishDate. All eight are uploaded by Imaginai (@Imaginaiapp). Promotional/demo content is included at the owner?s request; it is not labeled independent media coverage.

- [SAGO 2026 : découvrez ImaginAi, l'appli Edtech qui innove avec l'IA | CRTV News](https://www.youtube.com/watch?v=Ms-mvda5R0I) ? published 2026-07-15.
- [SAGO 2026: How ImaginAi is Shaping the Future of Edtech in Africa | CRTV News](https://www.youtube.com/watch?v=LAsKP0t-Tlg) ? published 2026-07-15.
- [Zones rurales ou en crise... Comment ImaginAi change l'avenir des élèves africains ? | Canal Matin](https://www.youtube.com/watch?v=uRv6qxSw1sU) ? published 2026-07-14.
- [Spot ImaginAi 30s Fev 2026](https://www.youtube.com/watch?v=uQswJbqJOpE) ? published 2026-04-17.
- [ImaginAi sur Jambo TV : Comment l'IA transforme l'éducation en Afrique | Canal 2 International](https://www.youtube.com/watch?v=z1hgm1NO6ag) ? published 2026-07-14.
- [ImaginAi Demo v20260315 : Reinventing how the world learns](https://www.youtube.com/watch?v=iQQpq7e9w2w) ? published 2026-03-17.
- [Découvrez ImaginAi: l'IA taillée pour l'éducation - (Audio Off)](https://www.youtube.com/watch?v=SD6g7gPCCfM) ? published 2025-12-24.
- [Presentation SynapsAi 2025](https://www.youtube.com/watch?v=NcV3_oIXTns) ? published 2025-12-24.
