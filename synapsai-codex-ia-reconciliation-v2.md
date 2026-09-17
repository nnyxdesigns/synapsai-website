# SynapsAi Website 2026 — Information Architecture Reconciliation Brief

## Purpose

This document is an **implementation reconciliation brief for Codex**. It does **not** replace the existing SynapsAi Website Redesign Single Source of Truth (SSOT). It supplements it with the latest Information Architecture decisions so Codex can compare:

1. what is already implemented;
2. what should be preserved;
3. what can be completed or extended;
4. what should be adjusted;
5. what should not be duplicated or fabricated.

Codex must perform a **gap analysis against the current codebase before changing routes, components, content, or navigation**. Existing good work should be reused rather than rebuilt merely to match naming in this document.

---

## Evidence and verification note

This brief includes:
- architectural decisions from the existing SSOT/reconciliation work;
- new product/ecosystem facts supplied directly by SynapsAi;
- public facts that can be independently verified;
- additional company milestones that must remain subject to evidence validation before public wording is strengthened.

Publicly verifiable context currently includes:
- CONIA 2025 took place on 7–8 July 2025 at the Palais des Congrès, Yaoundé and was organized by MINPOSTEL.
- GHSS describes the Youth Innovation Challenge as organized by GHSS with support from the Mastercard Foundation.
- CITS presents itself as Cameroon's national technology/innovation/entrepreneurship platform and includes a National Innovation Bootcamp.
- The current public SynapsAi site already presents ImaginAi traction and PROMEX 2025 recognition.

Codex should use authoritative source links already available in project research where useful, but the website copy itself should remain concise and brand-led.

---

## 1. Non-negotiable principles

Preserve the SSOT decisions already established:

- SynapsAi is presented primarily as a **B2B technology/product company**.
- The website is **English-first**. English uses root URLs; French is secondary under `/fr/...`.
- The Home must remain relatively short and act as a **narrative router**, not a complete duplication of internal pages.
- Keep a clear conceptual separation between **Solutions**, **Products**, and **Work**.
- Use **real content and verifiable proof only**. Do not fabricate clients, case studies, metrics, testimonials, awards, partners, offices, team size, or business results.
- Visual storytelling should be an important part of the experience, drawing inspiration from the level of clarity and polish of Cohere and Linear without copying their identities.
- The architecture must support progressive content activation as SynapsAi grows.
- Reuse existing implementation whenever it already satisfies the intent of the SSOT and this brief.

---

## 2. Important update: Insights is now part of V1

Earlier planning considered keeping Insights/Blog outside the initial launch until real editorial content existed. **That condition has now changed.** Five real articles have already been added.

Therefore:

- **Keep Insights in the V1 website.**
- Do not remove, hide, or downgrade the existing five articles merely because an earlier sitemap excluded Insights.
- Preserve existing article routes when technically sound; avoid unnecessary URL changes that could create broken links.
- Treat `Insights` as the editorial/research/thought-leadership layer of SynapsAi, not as another services page.
- If the current implementation calls this area `Blog`, prefer the public-facing label **Insights** while preserving redirects/route compatibility if necessary.
- The Insights architecture should be scalable for future articles, categories/tags, authors, related content, SEO metadata, social preview metadata, and a future CMS.

Recommended conceptual structure:

```text
/insights
/insights/[article-slug]
```

The existing five articles should populate this section immediately. No placeholder articles should be generated simply to make the grid look fuller.

---

## 3. Target V1 information architecture

This is the **target conceptual architecture**. Codex should map existing routes/components to it rather than blindly recreating everything.

```text
/
├── /solutions
│   ├── /solutions/ai-automation
│   ├── /solutions/custom-software
│   ├── /solutions/web-mobile-products
│   └── /solutions/digital-transformation
│
├── /products
│   ├── /products/imaginai
│   └── /products/imaginai-prof
│
├── /work
│   └── /work/imaginai-ecosystem
│
├── /insights
│   └── /insights/[article-slug]
│
├── /company
│   ├── /company/about
│   ├── /company/team
│   └── /company/impact
│
├── /faq
├── /contact
├── /privacy
└── /terms

French locale:
/fr/...
```

### Reconciliation rule

If Codex already implemented equivalent pages with different but sensible route names, **do not rename mechanically**. First determine whether the semantic intent matches. Prefer minimal, migration-safe adjustments.

---

## 4. Primary navigation

Recommended navigation model:

```text
Logo | Solutions | Products | Work | Insights | Company | Contact us | EN/FR
```

`Company` may use a compact dropdown for About, Team, and Impact.

### What to avoid

Do not overload the primary navigation with every secondary page. FAQ, Privacy, Terms, individual company subpages, and other utility links can live in dropdowns and/or footer navigation.

If the current navigation already achieves this hierarchy with a slightly different interaction pattern, preserve the stronger implementation.

---

## 5. Semantic separation: Solutions vs Products vs Work vs Insights

Codex should inspect existing content for duplication and enforce the following distinction.

### Solutions — what SynapsAi can solve/build for organizations

User intent:

> “I have a business problem. Can SynapsAi help solve it?”

Solutions describe commercial capabilities and business problems, such as AI & Automation, Custom Software, Web & Mobile Products, and Digital Transformation.

### Products — what SynapsAi has created

User intent:

> “What products does SynapsAi make?”

SynapsAi owns the ImaginAi ecosystem, but the ecosystem must **not** be presented as one undifferentiated application.

Two distinct platforms must be visible:

- **ImaginAi** — the mobile application for secondary and higher-education learners.
- **ImaginAi Prof** — the web application for teachers and instructors.

They collaborate inside the same education ecosystem, but they have different audiences, objectives, interfaces, journeys, channels, and product value propositions.

`/products/imaginai` must therefore explain the learner-facing mobile product, while `/products/imaginai-prof` explains the instructor-facing web platform. The relationship between them should be made explicit without collapsing them into a single product page.

The broader ImaginAi ecosystem also creates a third value layer for **educational institutions**, which should be expressed through use cases and ecosystem storytelling: connecting learner activity, teacher workflows, classroom/group management, follow-up, and institutional education needs.

The dedicated ImaginAi property at `imaginai.io` remains the place for deeper product-specific detail and acquisition. The SynapsAi website should establish ownership, product strategy, technical capability, ecosystem scope, and selected proof, then route visitors to ImaginAi for deeper product exploration.

### Work — evidence of SynapsAi's ability to execute

User intent:

> “What has SynapsAi actually built and learned?”

`/work/imaginai-ecosystem` should treat the **ImaginAi ecosystem as a flagship case study**, not repeat either product marketing page. It should show how SynapsAi identified multiple education stakeholders and designed interoperable products for them.

The case study should make the three problem spaces legible:

1. learner challenges;
2. teacher/instructor challenges;
3. educational-structure challenges.

It should then explain the product strategy, architecture, UX, AI/engineering decisions, interoperability, execution, scale, outcomes, and lessons behind the ecosystem.

### Insights — what SynapsAi thinks, learns, and publishes

User intent:

> “What does SynapsAi know or have to say about its field?”

Insights contains editorial articles, technical/product thinking, AI perspectives, field observations, lessons, and research-oriented content. It should strengthen expertise and discoverability without pretending that opinion pieces are client case studies.

---

## 6. Home page — target role and structure

The Home should remain a **high-signal orientation page**. It should not reproduce every section of Solutions, Products, Work, Company, and Insights.

Recommended narrative sequence:

```text
01. Hero
02. Credibility / proof
03. What we build
04. Featured product ecosystem — ImaginAi + ImaginAi Prof
05. From problems to systems
06. Why SynapsAi
07. Recognition / ecosystem credibility
08. Insights preview
09. Final CTA
10. Footer
```

The Insights preview is now justified because real articles exist. It should remain compact: typically 3 recent/featured articles plus a link to `View all insights`.

### 6.1 Hero

Must quickly communicate:

- who SynapsAi is;
- what it builds;
- why that matters;
- one clear primary action.

Keep copy concise and allow strong visual/product storytelling.

### 6.2 Credibility / proof

Use only verifiable data. This can include real product traction, selected recognitions, ecosystem participation, or other confirmed proof.

Do not invent impressive-looking statistics.

### 6.3 What we build

Use 3–4 concise capability blocks. This is a preview of `/solutions`, not a complete services page.

CTA → `/solutions`.

### 6.4 Featured product ecosystem — ImaginAi + ImaginAi Prof

Use a visually strong product sequence that immediately communicates that SynapsAi owns and builds an **education technology ecosystem**, not a single monolithic app.

The section should clearly separate:

**ImaginAi**
- Mobile application.
- Primary audience: secondary and higher-education learners.
- Core role: learning, practice, understanding, academic support, progress, and access to AI-powered learning experiences.
- CTA → `/products/imaginai`.

**ImaginAi Prof**
- Web application.
- Primary audience: teachers and instructors.
- Core role: class/group creation and management, learner follow-up, instructional workflows, assignments/tasks, reporting, and teacher-facing capabilities.
- CTA → `/products/imaginai-prof`.

Then show the connection:

```text
Learner experience (ImaginAi)
        ↕
Shared education ecosystem
        ↕
Instructor experience (ImaginAi Prof)
        ↕
Educational structures / classroom operations
```

Do not compress these audiences into generic copy such as “for learners and educators.” The distinction is strategically important and should remain visible.

Use authentic product UI/assets where possible. The SynapsAi site should summarize and establish ownership/expertise; deeper product detail should link to `imaginai.io`.

Do not list every feature on the Home.

### 6.5 From problems to systems

Explain SynapsAi's product/engineering mindset through transformations such as:

```text
Manual processes → Intelligent automation
Fragmented information → Connected digital systems
Idea without a product → Designed and engineered software
```

This is positioning, not another services grid.

### 6.6 Why SynapsAi

Prefer concrete operating principles over generic values such as “innovation”, “passion”, or “excellence”. The final copy should express ideas such as real-world constraints, product-first thinking, and an African perspective combined with global standards.

### 6.7 Recognition / ecosystem credibility

Add a compact, premium credibility sequence using **verified** awards, institutional programs, ecosystem participation, and technology-support relationships.

The purpose is not to create a trophy wall. It is to demonstrate that SynapsAi has been building, shipping, participating, learning, and earning recognition within serious technology, entrepreneurship, education, and innovation ecosystems.

Candidate proof points supplied by SynapsAi include:

- PROMEX 2025 — winner / Best Educational Digital Project for ImaginAi.
- GHSS Youth Innovation Challenge in Cameroon — winner; the challenge is organized by Global Health Systems Solutions (GHSS) with support from the Mastercard Foundation.
- CONIA 2025 — participation at the Palais des Congrès in Yaoundé; CONIA 2025 was organized by Cameroon’s Ministry of Posts and Telecommunications (MINPOSTEL).
- Cameroon International Tech Summit (CITS) — participation in the 2026 Douala bootcamp / innovation ecosystem.
- Orange Digital Center Douala — participation in an entrepreneurship bootcamp in July 2026.
- Collaboration / ecosystem relationships with Friends of Figma Douala and Mountain Hub, Buea.
- Microsoft for Startups support during the 2023–2025 period, including Microsoft Azure credits/grants according to SynapsAi’s internal records.

**Verification rule:** Codex must not strengthen the wording beyond the evidence available. Distinguish carefully between `winner`, `participant`, `collaborator`, `supported by`, `program beneficiary`, and `partner`. These labels are not interchangeable.

Where a claim is not independently documented in the repository or an authoritative public source, preserve it as a content item requiring validation rather than inventing dates, award categories, grant values, partner status, or program terms.

Recommended presentation:
- Home: 3–5 high-signal proof points only.
- `/company/impact`: fuller timeline / recognition history.
- Relevant Work/Product pages: contextual proof where it strengthens the story.
- Avoid repeating the full list on every page.

### 6.8 Insights preview


Because five articles now exist, expose selected/recent articles on the Home.

Requirements:

- no fake article cards;
- use real title, author, date, category/tag, and image when available;
- keep the section compact;
- link to `/insights` and individual article routes.

### 6.8 Final CTA

One strong conversion moment leading to `/contact`.

---

## 7. Solutions hub

Target structure:

```text
Hero
→ Positioning / introduction
→ Solution families
→ How SynapsAi approaches projects
→ Relevant proof / selected work
→ CTA
```

The hub should orient visitors. Detailed capability explanations belong on individual solution pages.

---

## 8. Individual solution pages

Use a reusable architecture where appropriate:

```text
01. Hero
02. Business problems we address
03. What we can build
04. Typical applications / use cases
05. How we work
06. Relevant proof / work
07. CTA
```

Use cases may describe legitimate capabilities or scenarios. They must **not be presented as completed client engagements unless evidence exists**.

---

## 9. Products hub

`/products` must now communicate a **portfolio / ecosystem architecture**, even if both current products belong to ImaginAi.

```text
Products built by SynapsAi
→ ImaginAi ecosystem introduction
→ ImaginAi — learner mobile application
→ ImaginAi Prof — teacher/instructor web application
→ How the platforms interact
→ Value for educational structures
→ Explore the products / visit imaginai.io
```

The page must avoid the impression that ImaginAi Prof is merely a feature inside the learner app.

Build the component/data model so additional SynapsAi products can be added later without redesigning the page.

---

## 10. ImaginAi ecosystem and product pages

### 10.1 `/products/imaginai` — learner mobile application

This page should answer: **How does ImaginAi help secondary and higher-education learners learn, practise, understand, and progress?**

Suggested architecture:

```text
Hero + mobile product UI
→ Learner challenges
→ Product proposition
→ Key learner experiences
→ Learning / practice / assessment / AI support
→ Progress and continuity
→ Connection to teachers/classes through the ecosystem
→ Real traction / learner proof
→ Explore ImaginAi on imaginai.io / stores
```

Keep the learner audience explicit throughout. Do not dilute the page with teacher administration workflows.

### 10.2 `/products/imaginai-prof` — teacher/instructor web application

This page should answer: **How does ImaginAi Prof help teachers and instructors manage, support, and follow learners?**

Suggested architecture:

```text
Hero + web platform UI
→ Teacher/instructor challenges
→ Product proposition
→ Create/manage classes or learning groups
→ Assign / guide / follow learner activity
→ Reporting and instructional visibility
→ Connection with learner-side ImaginAi
→ Value for education delivery
→ Explore ImaginAi Prof on imaginai.io
```

This page must use desktop/web UI storytelling rather than visually presenting ImaginAi Prof as another mobile app.

### 10.3 Educational structures — ecosystem value layer

Educational institutions are not simply a third app. They are a distinct **stakeholder/use-case layer**.

Across `/products`, relevant Solution pages, and the Work case study, show how the ecosystem can address challenges such as:

- connecting instructors and learners in structured digital environments;
- improving visibility over learning activity and follow-up;
- supporting classroom/group workflows;
- extending access to learning support beyond physical classroom time;
- enabling scalable digital education experiences;
- creating a foundation for institution-level deployments and integrations where applicable.

Do not claim institution features, deployments, integrations, dashboards, contracts, or analytics that do not yet exist.

### 10.4 Relationship with imaginai.io

`imaginai.io` is the dedicated product property for the ImaginAi ecosystem.

The role split should be:

**synapsai.co**
- ownership;
- strategic product narrative;
- technical/product expertise;
- use cases;
- selected product proof;
- Work/case-study narrative;
- company credibility.

**imaginai.io**
- deeper product marketing;
- detailed capabilities;
- learner and teacher acquisition;
- platform-specific onboarding/access;
- downloads/sign-in/product conversion.

Avoid duplicating entire ImaginAi product sites inside SynapsAi.

---

## 11. Work hub

The Work section is the portfolio/case-study layer.

At launch it is acceptable for it to contain only strong, real work. Do not fabricate additional case studies to fill the page.

Suggested structure:

```text
Selected work
→ ImaginAi ecosystem case study
→ Future public work added progressively
```

If other legitimate SynapsAi projects are already implemented in the current site and can be publicly documented, Codex may retain them, but they should be reviewed for factual support and appropriate classification.

---

## 12. ImaginAi ecosystem case study

`/work/imaginai-ecosystem` should answer: **How did SynapsAi identify education challenges across learners, teachers, and educational structures, then conceive, build, connect, evolve, and scale an ecosystem of products around them?**

Suggested structure:

```text
01. Case study hero
02. Education context and stakeholder map
03. Learner challenge
04. Teacher/instructor challenge
05. Educational-structure challenge
06. Product strategy: why two distinct platforms
07. ImaginAi mobile — learner experience
08. ImaginAi Prof web — instructor experience
09. Ecosystem interoperability / shared workflows
10. UX / product design approach
11. Technology / AI / architecture decisions
12. Execution and iteration
13. Scale / actual results
14. Recognition and ecosystem milestones
15. Key learnings
16. What's next
```

This should be one of SynapsAi's strongest demonstrations of method and technical/product depth.

Where content overlaps with `/products/imaginai` or `/products/imaginai-prof`, link between pages rather than duplicating large blocks verbatim.

---

## 13. Insights hub and article pages

Since five articles are already integrated, Codex should **audit and strengthen the existing implementation rather than recreate it**.

### `/insights`

Recommended components:

```text
Hero / editorial positioning
→ Featured article (optional if one genuinely merits emphasis)
→ Article grid/list
→ Tags/categories when useful
→ Newsletter/CTA only if a real newsletter workflow exists
```

Do not create a fake newsletter signup that goes nowhere.

### `/insights/[slug]`

Recommended article architecture:

```text
Category / tag
Title
Dek / short introduction
Author + role
Publication date + reading time
Hero visual
Article body
Inline figures / diagrams / charts where useful
Pull quotes / key findings when editorially justified
Author block
Related insights
Final CTA
```

Article pages should prioritize reading quality: strong typography, comfortable measure, clear hierarchy, responsive figures, useful captions, accessible alt text, and restrained motion.

Codex should retain the five existing articles and their content unless there is a specific editorial reason to revise them.

---

## 14. Company architecture

### `/company/about`

```text
Why SynapsAi exists
→ Story
→ What we believe
→ Perspective / operating context
→ What we're building toward
```

### `/company/team`

Keep this human and factual. Use real team members and concise bios. Do not inflate team size.

Each team-member card/profile should include a **LinkedIn link when an official profile URL has been validated**. The LinkedIn icon/link should be visually discreet but easy to discover and must open the member's actual profile.

Do not guess profile URLs from names. Codex should source them from the current project content/configuration or a validated list supplied by SynapsAi.

### `/company/impact`

This page should become a substantive credibility layer, not a generic CSR page.

Use real, supportable material such as:

- product reach and adoption;
- learner/education impact;
- PROMEX 2025 recognition;
- GHSS / Mastercard Foundation-supported Youth Innovation Challenge recognition;
- CONIA 2025 participation;
- CITS 2026 participation;
- Orange Digital Center entrepreneurship program participation;
- Microsoft for Startups / Azure support where documented;
- ecosystem collaborations such as Friends of Figma Douala and Mountain Hub where the relationship can be accurately described;
- other significant 2023–2026 milestones that can be evidenced.

Recommended structure:

```text
Impact / credibility hero
→ Selected quantitative proof
→ Awards & recognition
→ Programs & ecosystem participation
→ Technology / startup support
→ Collaboration ecosystem
→ 2023–2026 milestone timeline
→ Related Work / Insights
→ CTA
```

Do not collapse all items into a logo wall. Use dates, context, role, and outcome where verified so visitors understand **why each milestone matters**.

If Codex currently has separate pages such as `Awards`, `News`, or `Recognition`, assess whether they contain enough real content to remain independent. Otherwise consolidate them under Impact or Insights as appropriate.

---

## 15. FAQ and Contact

### FAQ

Use it to remove commercial friction and answer actual questions about SynapsAi's work, engagement model, AI/software capabilities, location/market context, and project initiation.

### Contact

Keep the experience focused. Ask visitors what they are trying to build or solve. Avoid unnecessarily long forms.

---

## 16. English-first routing

Canonical English routes should remain at root level:

```text
/solutions
/products/imaginai
/work/imaginai
/insights/...
/company/about
```

French equivalents:

```text
/fr/solutions
/fr/products/imaginai
/fr/work/imaginai
/fr/insights/...
/fr/company/about
```

Do not introduce `/en/` unless the current technical architecture makes changing it materially riskier than preserving it. If `/en/` already exists, Codex should report the migration implications before changing production URLs.

---

## 17. Content/routes that remain optional or future-facing

The following should **not be created merely for sitemap completeness**:

```text
/industries
/research
/resources
/careers
/press
```

Activate them only when enough real content exists and they serve a distinct user need.

Important: `/insights` is no longer in this future-only list because real articles are already available.

---

## 18. Visual storytelling and image strategy

The current redesign should use **materially more visual content**. The site must not feel like a sequence of text cards on a neutral background.

Codex should audit every major page/section and identify where visual media can improve comprehension, hierarchy, emotion, or perceived product maturity.

### 18.1 Preferred visual sources

Use this priority order:

1. authentic SynapsAi / ImaginAi product UI;
2. authentic event, team, product, or company photography when quality is sufficient;
3. purpose-built diagrams / data visualizations;
4. AI-generated realistic imagery created specifically for the scene or concept;
5. AI-generated abstract/background compositions aligned with the visual identity;
6. restrained illustrations where they genuinely fit.

AI-generated images are acceptable as **brand/editorial visual assets**, but must not be presented as documentary evidence of real SynapsAi events, clients, offices, team members, awards, deployments, or partnerships.

### 18.2 Image direction

Images should:
- support the idea of the section rather than decorate empty space;
- feel contemporary, premium, technical, and internationally credible;
- reflect the site's existing brand palette and art direction;
- include realistic African/global contexts when contextually relevant without falling into generic “Africa tech” clichés;
- mix product UI, people, environments, abstract technology, diagrams, and spatial/background compositions;
- use strong cropping, scale, depth, and negative space;
- remain coherent across light/dark surfaces;
- be responsive and optimized.

Avoid:
- generic stock-photo aesthetics;
- random 3D blobs with no semantic role;
- excessive robot/brain/circuit-board clichés for AI;
- repeating the same illustration style in every section;
- fake screenshots;
- AI-generated imagery that could mislead visitors into believing a depicted event or partnership actually occurred.

### 18.3 Codex visual audit

For every major route, Codex should identify:
- current visual assets;
- missing visual opportunities;
- whether the best asset should be product UI, real photography, diagram, realistic generated scene, abstract background, or illustration;
- required aspect ratio / responsive behavior;
- alt text and accessibility treatment;
- whether the asset is evidence/documentary or decorative/editorial.

Codex may generate/propose visual assets where appropriate, but they should be easy to replace later without restructuring the section.

---

## 19. Footer, social presence, and team links

### Footer social links

The footer must expose SynapsAi's **validated official social profiles** at minimum.

Codex should inspect the current `synapsai.co` implementation, project configuration, existing content files, or validated company profile data and reuse the official URLs. Do **not** infer handles or fabricate URLs.

If the live site's rendered HTML does not currently expose every social URL, Codex should flag the missing URLs for validation rather than inventing them.

Recommended footer architecture:

```text
SynapsAi identity / short positioning
→ Solutions
→ Products
→ Work
→ Insights
→ Company
→ Contact
→ Legal
→ Language
→ Official social icons/links
```

External links must use appropriate security/accessibility attributes and accessible labels.

### Team LinkedIn links

Add validated LinkedIn links to team member cards/profiles in relevant Team sections. Do not guess LinkedIn profile URLs.

---

## 20. What Codex must preserve, complete, adjust, or remove

### PRESERVE

Preserve any existing implementation that already satisfies these principles, especially:

- functional and coherent routes;
- existing five Insights articles;
- strong reusable components;
- existing responsive behavior that works well;
- authentic SynapsAi/ImaginAi assets;
- good visual storytelling already aligned with the reference direction;
- SEO metadata and structured content that are already correct.

### COMPLETE

Complete existing work where the architecture is correct but incomplete:

- connect orphan pages into navigation/internal linking;
- add missing page-level CTAs;
- add Home preview links to deeper pages;
- strengthen Insights listing/article metadata;
- add Work/Product cross-linking for ImaginAi;
- complete English/French parity where translation is intended;
- ensure future CMS readiness for Insights and other repeatable content.

### ADJUST

Adjust where the current implementation conflicts with the target intent:

- reduce an overly long Home;
- eliminate repeated content across Home and internal pages;
- clarify Solutions vs Products vs Work;
- rename public `Blog` to `Insights` where appropriate;
- reorganize oversized navigation;
- remove unsupported claims or placeholder metrics;
- consolidate thin Company/News/Awards pages when they do not justify standalone routes;
- ensure English is the primary canonical experience;
- replace generic decorative sections with purposeful visual/product storytelling.

### REMOVE / DO NOT SHIP

Remove or keep unpublished:

- fabricated case studies;
- fake testimonials;
- placeholder client logos presented as real clients;
- invented statistics;
- empty content hubs;
- nonfunctional newsletter/forms presented as live;
- duplicate pages with no distinct user intent;
- lorem ipsum or “coming soon” cards used only to fill layouts.

---

## 21. Codex implementation procedure

Before editing the site, Codex should produce an internal/current-state audit using a table similar to:

| Target concept | Existing route/component | Status | Action | Notes |
|---|---|---|---|---|
| Home | `/` | Match / Partial / Conflict | Preserve / Complete / Adjust | ... |
| Solutions hub | ... | ... | ... | ... |
| AI & Automation | ... | ... | ... | ... |
| Products | ... | ... | ... | ... |
| ImaginAi learner product | ... | ... | ... | ... |
| ImaginAi Prof instructor product | ... | ... | ... | ... |
| Educational-structure use cases | ... | ... | ... | ... |
| Work | ... | ... | ... | ... |
| ImaginAi ecosystem case study | ... | ... | ... | ... |
| Insights | ... | ... | ... | ... |
| 5 existing articles | ... | ... | Preserve | ... |
| Company | ... | ... | ... | ... |
| FAQ | ... | ... | ... | ... |
| Contact | ... | ... | ... | ... |
| EN/FR routing | ... | ... | ... | ... |

Use these status definitions:

- **MATCH** — already satisfies the intended architecture; preserve.
- **PARTIAL** — direction is correct but content/links/components need completion.
- **CONFLICT** — current implementation contradicts the intended role or creates duplication; adjust.
- **MISSING** — genuinely absent and required for V1; implement.
- **FUTURE** — architecture may anticipate it, but do not expose it yet.

### Change policy

1. Audit first.
2. Prefer reuse.
3. Make the smallest coherent structural changes.
4. Preserve working URLs where possible.
5. Add redirects when route changes are unavoidable.
6. Do not overwrite stronger existing design decisions merely because this brief uses different wording.
7. Do not generate unsupported content to satisfy a component layout.
8. Record material architectural changes in the project's Decision Log / SSOT.

---

## 22. Priority order for the next implementation pass

Codex should prioritize the reconciliation in this order:

```text
P0 — Audit current implementation against this brief
P0 — Preserve and validate the 5 existing Insights articles
P0 — Fix primary navigation / route hierarchy if needed
P0 — Clarify Home role and remove major duplication

P1 — Reconcile Solutions / Products / Work boundaries
P1 — Separate ImaginAi learner product from ImaginAi Prof instructor product
P1 — Add educational-structure use-case layer
P1 — Reconcile both product pages vs ImaginAi ecosystem Case Study
P1 — Strengthen Insights hub + article template
P1 — Add/strengthen visual storytelling across priority pages
P1 — Validate English-first / French-secondary routing

P2 — Company / Impact consolidation and 2023–2026 credibility timeline
P2 — Validate footer social links and team LinkedIn links
P2 — FAQ / Contact refinement
P2 — Internal linking, related content, breadcrumbs where useful
P2 — SEO / structured data / accessibility / performance pass

P3 — Prepare future CMS/content scalability without exposing empty sections
```

---

## 23. Definition of done for IA reconciliation

This reconciliation pass is complete when:

- every visible V1 navigation item has a distinct purpose;
- every visible route contains real content or a legitimate functional purpose;
- the Home is concise and does not duplicate internal pages excessively;
- Solutions, Products, Work, and Insights are semantically distinct;
- ImaginAi and ImaginAi Prof are clearly presented as two distinct but interoperable platforms;
- learner, teacher/instructor, and educational-structure challenges are each legible;
- the ImaginAi ecosystem has a distinct Work/case-study narrative demonstrating SynapsAi's method and technical/product depth;
- SynapsAi's ownership of the ImaginAi ecosystem is clear, while `imaginai.io` remains the deeper product destination;
- verified awards, programs, support, collaborations, and milestones strengthen credibility without overstating relationships;
- the site contains substantially richer and more purposeful visual storytelling;
- official social links are present in the footer once validated;
- team LinkedIn links are present where validated;
- all five existing Insights articles remain accessible and properly integrated;
- no fabricated proof/content is used;
- English is the canonical primary experience and French is coherently supported;
- internal links create clear paths between Home → Solutions/Product/Work/Insights → Contact;
- responsive, accessibility, SEO, and performance requirements from the SSOT remain respected;
- future sections can be added without restructuring the entire site;
- material changes are reflected back into the SSOT/Decision Log.

---

## Final instruction to Codex

**Do not treat this document as a request to rebuild the website from scratch.** Treat it as the target semantic architecture against which the current implementation must be reconciled.

First inspect the existing site/codebase, then classify each relevant route/component as **MATCH, PARTIAL, CONFLICT, MISSING, or FUTURE**. Preserve good existing work, complete partial work, adjust conflicts, implement only genuine V1 gaps, and avoid unnecessary route churn.

The five existing Insights articles are an explicit part of V1 and should be retained and integrated into the Home/editorial architecture.

The ImaginAi ecosystem must now be reconciled as **two distinct products with connected workflows**: ImaginAi for learners and ImaginAi Prof for teachers/instructors, with a third stakeholder/use-case layer for educational structures. Use the Work section to demonstrate how SynapsAi designed and engineered this ecosystem.

Use verified 2023–2026 awards, programs, support relationships, ecosystem participation, and collaborations to strengthen SynapsAi's credibility. Increase purposeful visual storytelling across the site, add validated official social links to the footer, and add validated LinkedIn links to team profiles.

Do not overstate any relationship, award, grant, partnership, metric, or participation beyond the evidence available.
