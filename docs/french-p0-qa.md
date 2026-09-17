# French P0 QA

The P0, P1 and P2 French rollout is implemented locally for the home, Solutions, products, work, company, FAQ, contact and Impact routes.

Checks:

- `tests/french-p0.spec.ts` checks French language metadata, one H1, mobile overflow, internal French navigation and the four solution titles.
- `tests/french-p1.spec.ts` checks the seven products, work and company routes and verifies the localized ImaginAi ecosystem framing.
- `tests/french-p2.spec.ts` checks the FAQ questions, contact `mailto:` target and the absence of a false delivery confirmation.
- `tests/french-rollout.spec.ts` confirms `/fr/company/impact` is now localized while Careers and Insights remain gated.
- The same test runs an axe check on each P0 main region.
- The existing French route gate keeps Insights, Careers and other English-only routes unavailable until their copy is approved.

Run with `npm run test:e2e -- tests/french-p0.spec.ts` after a production preview is available. Firebase Hosting was not deployed for this iteration.
