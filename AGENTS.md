# SynapsAi project instructions

- Read `synapsai-website-redesign-source-of-truth.md` before major content, UX or architecture changes. It takes priority over the two design inspiration analyses.
- The approved framework is Next.js. The current approved direction is fully dark, following `DESIGN-linear.app.md`: near-black canvas, charcoal surfaces, restrained lavender accents, strong sans-serif typography and technical/product visuals. This supersedes the initial light direction. Keep SynapsAi branding and original layouts/copy. Detailed copy remains review material.
- Keep English at root routes and French under `/fr`. Language switching must preserve the current page, and SSR HTML language and metadata must match the route.
- Work exclusively on the English version for upcoming iterations. Do not translate new copy, create French equivalents or run a full French QA pass until the owner is comfortable with the English changes and asks to apply them to French. Keep existing French content available. Shared components/styles can affect both locales; flag material shared effects without undertaking a separate French adaptation. Prioritize English checks and screenshots to keep each iteration focused.
- Never invent clients, testimonials, screenshots, team details, case studies, articles, statistics, partnerships or service commitments. Keep incomplete sections out of navigation and the sitemap.
- Keep all public media in `public/media/`, organized by purpose. Update its provenance manifest. Generated imagery must not masquerade as a real product, person or business result.
- Check UI and stability for each meaningful website change. Run relevant lint/type checks and production build; for page, CSS or interaction changes, run the applicable Playwright tests and inspect desktop/mobile screenshots. The browser suite requires a production build and installed Google Chrome.
- Check French wrapping, 320px mobile width, keyboard navigation, visible focus, contrast, reduced motion, real media loading and valid link destinations. Do not equate automated axe checks with a complete accessibility certification.
- The contact form prepares an email; never show a sent/delivered state unless a real sending service confirms it. No email provider, CMS or analytics is approved. Firebase Hosting deployment to site `synpasaico` in project `imaginai-f4fca`, replacing `https://synapsai.co`, is explicitly authorized by the owner (2026-09-17). See `docs/firebase-hosting.md`.
- Keep staging non-indexable. `SITE_PUBLISHED=true` requires the final content/launch review and a rebuild. Do not deploy merely to validate a local implementation.
- Update `docs/implementation.md` and `docs/qa.md` when relevant. Keep the source of truth synchronized with new approved decisions.
- Apply `synapsai-seo-discoverability-social-sharing-requirements.md` to every new public route. Maintain the query/metadata registry and social images; run `npm run check:seo` and relevant browser SEO checks. Follow `docs/seo.md` for publication gates and launch-only verification. The supplied green/white logo, vector symbol, Archivo typography and primary #5EFFD9 supersede earlier lavender branding.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
