# Careers — local English iteration

Route: `/company/careers`. Requested by the owner after the Firebase launch; **local only, no deployment authorized for this iteration**.

Design references: [Linear careers](https://linear.app/careers) for the restrained editorial hierarchy and focus on the work; [Cohere careers](https://cohere.com/fr/careers) for the progression from mission to people and opportunities. All text, composition and diagram are original to SynapsAi. No benefits, offices, hiring process or vacancies from either company are reused.

The page includes an editorial hero, decorative isometric SVG with subtle layer motion, real ImaginAi product visuals, company/product context, questions drawn from existing product thinking, verified cofounder portraits and an email contact section. Reduced-motion preferences disable the animation. It is linked from the Company subnavigation and footer in both locales. The French route `/fr/company/careers` uses localized copy and preserves the same honest conversation-only opportunity flow; ImaginAi Prof is described without linking to an unapproved French product route.

No specific openings have been supplied. The page invites questions about opportunities through the existing `contact@synapsai.co` address without claiming an active vacancy, application receipt or a hiring commitment. Future roles need verified titles, descriptions, work arrangements, location and an application destination before adding listings or JobPosting structured data.

SEO: unique registry entry, title, description, canonical, original 1200×630 social card and existing BreadcrumbList integration. The route is available to future production sitemaps (39 routes total); the current preview build remains noindex with an empty sitemap. Media provenance is recorded in `public/media/manifest.json`; portraits and product visuals reuse their existing provenance.

Implementation: `src/components/careers.tsx` and its scoped stylesheet. Tests: `tests/careers.spec.ts`, `tests/french-careers.spec.ts` plus the shared SEO suite. Development URLs: http://localhost:3000/company/careers and http://localhost:3000/fr/company/careers.
