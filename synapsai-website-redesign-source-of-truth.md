# SynapsAi Website Redesign — Project Source of Truth

> **Approved launch decision — 2026-09-17:** Deploy this Next.js project as a static export to existing Firebase Hosting site `synpasaico`, project `imaginai-f4fca`, replacing `https://synapsai.co`. The owner approved publication of all five English Insights. Their first-publication date is 2026-09-17. Existing French pages remain available; new French editorial work is deferred. Local development continues in Next.js. See `docs/firebase-hosting.md` for build, deployment, verification and rollback.

> **Document status:** ACTIVE — authoritative project reference  
> **Version:** 0.1.0  
> **Last updated:** 2026-09-16  
> **Primary audience:** SynapsAi team, Product/UX Designer, Developers, OpenAI Codex  
> **Website primary language:** English  
> **Secondary language:** French  
> **Production domain:** `https://synapsai.co`

---

## 0. How to use this document

This Markdown file is the **single source of truth** for the SynapsAi website redesign project.

During design and implementation:

1. Codex MUST use this document before making structural, UX, content, visual, localization, or information-architecture decisions.
2. Explicit decisions in this document override assumptions inferred from the current website.
3. Do **not** invent missing content, clients, testimonials, projects, metrics, press mentions, partnerships, articles, awards, certifications, capabilities, or business claims.
4. Placeholder content is allowed in local development or staging only. Placeholder content MUST NOT be shipped to production.
5. Sections or pages without approved real content should remain hidden from production navigation until ready.
6. The project is expected to evolve. Update this file whenever a major decision is approved.
7. Future copywriting, design-system, SEO, CMS, motion, and implementation decisions should be added here or linked from this document.
8. When a later approved specification conflicts with this document, update this document first so that Codex always works from the latest approved truth.

### Status vocabulary

Use the following labels where relevant:

- **APPROVED** — validated and expected to be implemented.
- **PLANNED** — part of the intended architecture but not necessarily available at launch.
- **CONTENT PENDING** — structure is approved but final content does not exist yet.
- **FUTURE** — explicitly deferred to a later phase.
- **DO NOT SHIP** — development-only or rejected production behavior.

---

# 1. Project context

SynapsAi is a Cameroonian technology startup focused on:

- custom software solutions;
- artificial intelligence;
- digital products;
- business-process digitalization and automation;
- product design and engineering.

SynapsAi has already developed an educational technology ecosystem centered around **ImaginAi**.

ImaginAi includes:

- a mobile application for learners in Sub-Saharan Africa;
- a responsive web platform for teachers;
- AI-powered learning experiences;
- production software deployed to real users.

The current SynapsAi website strongly emphasizes ImaginAi and education.

The redesigned website must reposition SynapsAi more broadly as a **technology company capable of designing and delivering sophisticated digital and AI solutions for organizations**, while keeping ImaginAi as one of its strongest proofs of execution.

---

# 2. Business objective

## 2.1 Primary objective

Build an international-standard company website that increases SynapsAi's perceived technical, strategic, and execution capabilities.

The website should support business development by helping SynapsAi attract organizations that need to:

- digitize operations;
- automate business workflows;
- build custom internal tools;
- build customer-facing digital products;
- adopt artificial intelligence;
- integrate AI into existing workflows;
- create web and mobile software;
- transform manual or fragmented processes into reliable digital systems.

## 2.2 Secondary objectives

The website should also:

- demonstrate SynapsAi's ability to build and operate real products;
- strengthen institutional credibility;
- present the ImaginAi ecosystem without turning the corporate website into an ImaginAi marketing site;
- support future inbound acquisition through high-quality Insights content;
- provide a scalable content architecture for future case studies;
- support English-first international communication;
- remain relevant as SynapsAi adds products, clients, industries, articles, partnerships, and projects.

---

# 3. Positioning principle

The redesigned website MUST NOT primarily communicate:

> “SynapsAi is the company that built ImaginAi.”

It SHOULD communicate:

> **SynapsAi is a technology company that designs, builds and deploys intelligent digital solutions for real-world needs. ImaginAi is a major proof of that capability.**

ImaginAi therefore serves two roles:

1. a SynapsAi product;
2. a technology/product-engineering case study demonstrating execution at scale.

---

# 4. Current verified baseline

The following information is supported by the current SynapsAi website and/or approved project context and can be used as baseline material, subject to copy review before publication.

## 4.1 Current public positioning

The current website states that SynapsAi develops smart solutions around technology, AI and education.

## 4.2 ImaginAi traction

Current public website baseline:

- **143K+ learners/users**
- presence/targeting across multiple African countries;
- currently presented countries include Cameroon, Côte d'Ivoire, Senegal, Togo and Gabon;
- ImaginAi is presented as a major SynapsAi product.

### Metric rule

Metrics MUST NOT be automatically updated or interpolated by Codex.

All changing figures must come from explicit approved data.

## 4.3 Current award

The current website presents:

- **Best Educational Digital Project — PROMEX 2025**

No additional awards should be created unless explicitly approved.

---

# 5. Inspiration references

Approved inspiration references:

1. **Cohere** — `https://cohere.com/`
2. **Linear** — `https://linear.app/`

These are **references, not templates**.

SynapsAi must not become a visual clone, content clone, or structural clone of either company.

## 5.1 What to learn from Cohere

Use Cohere as inspiration for:

- enterprise-oriented positioning;
- clear distinction between capabilities, solutions and industries;
- strong product/technical visualizations;
- high-value enterprise tone;
- clear paths toward contact/sales;
- progressive depth from homepage to specialist pages;
- strong use of imagery to materialize technical concepts;
- content/insights architecture;
- controlled, premium presentation.

Do NOT imitate:

- Cohere-specific product naming;
- visual assets;
- proprietary diagrams;
- exact page layouts;
- copy;
- enterprise claims that SynapsAi cannot substantiate.

## 5.2 What to learn from Linear

Use Linear as inspiration for:

- strong visual hierarchy;
- restrained page density;
- whitespace;
- high-quality typography;
- interface/product screenshots as storytelling;
- subtle motion;
- polished component design;
- demonstrating capability instead of merely claiming capability;
- reducing visual noise;
- showing exactly what deserves attention;
- concise navigation.

Do NOT imitate:

- Linear's exact color system;
- interface styling;
- components;
- layout;
- copy;
- product language.

## 5.3 SynapsAi design interpretation

The desired result should feel:

- technically sophisticated;
- calm;
- deliberate;
- premium;
- modern;
- credible;
- product-led;
- international;
- African without relying on clichés;
- visually distinctive from generic SaaS templates.

---

# 6. Key UX principle: Homepage ≠ site summary

**APPROVED**

The homepage must not reproduce every section available elsewhere on the website.

Its job is to:

1. establish the SynapsAi positioning;
2. create confidence;
3. show proof;
4. demonstrate capability visually;
5. route visitors toward the most relevant deeper page;
6. generate qualified contact.

The homepage should function as a **curated narrative**, not as an exhaustive table of contents.

Avoid:

- excessive scrolling created by repetitive sections;
- one homepage section for every internal page;
- long corporate paragraphs;
- repeating the same service descriptions in several places;
- card-grid fatigue;
- excessive KPI blocks;
- feature dumping.

---

# 7. Core audiences

The site should be useful to at least the following audiences.

## 7.1 Business decision-maker

Typical needs:

- automate operations;
- build internal software;
- integrate AI;
- modernize manual workflows;
- replace spreadsheets or fragmented tools;
- create a customer-facing digital solution.

Primary route:

`Home → Solutions → relevant solution → proof/work → Contact`

## 7.2 Institution / organization

Typical needs:

- custom digital platforms;
- workflow systems;
- data-enabled services;
- AI-enabled tools;
- citizen/user-facing applications;
- education or public-interest systems.

Primary route:

`Home → Solutions / Industries → Work → Company → Contact`

## 7.3 Education stakeholder

Examples:

- school leader;
- teacher organization;
- education partner;
- training organization;
- publisher;
- institution.

Primary route:

`Home → Products / Industries: Education → ImaginAi ecosystem → Contact`

## 7.4 Potential partner / investor / ecosystem actor

Primary route:

`Home → Company → Products → Work / Impact → Contact`

## 7.5 Technical or product professional

Primary route:

`Home → Solutions / Work → Insights → Company`

---

# 8. Primary navigation — target state

**APPROVED TARGET NAVIGATION**

```text
SynapsAi

Solutions ▾
Products ▾
Industries ▾
Work
Insights ▾
Company ▾

EN / FR
[Talk to us]
```

### Navigation principles

- Keep top-level navigation concise.
- Do not expose pages just because they technically exist.
- Only expose navigation items with meaningful production content.
- `Talk to us` is the primary corporate CTA.
- Avoid a generic `Contact` button as the only commercial CTA.
- Contact can still exist as a page and footer link.

---

# 9. Sitemap — target architecture

The target sitemap defines where the website may evolve.

Not every target page must be active at initial launch.

```text
/
│
├── solutions/
│   ├── ai-automation/
│   ├── custom-software/
│   ├── web-mobile-development/
│   ├── digital-transformation/
│   └── product-strategy/
│
├── products/
│   ├── imaginai/
│   ├── imaginai/learners/
│   └── imaginai/teachers/
│
├── industries/
│   ├── education/
│   ├── business/
│   └── institutions/
│
├── work/
│   ├── imaginai/
│   └── [future-case-studies]/
│
├── insights/
│   ├── [article-slug]/
│   ├── ai/
│   ├── digital-transformation/
│   ├── software-engineering/
│   ├── product-design/
│   ├── edtech/
│   └── company-news/
│
├── company/
│   ├── about/
│   ├── team/
│   ├── impact/
│   ├── press/
│   └── careers/
│
├── faq/
├── contact/
│
├── privacy/
├── terms/
├── cookies/
└── sitemap/
```

---

# 10. Launch architecture

The launch website should not wait until every planned content area is ready.

Only pages containing real, approved, useful content should be publicly accessible and promoted.

## 10.1 Recommended V1 launch structure

**APPROVED DIRECTION**

```text
/
│
├── solutions/
│   ├── ai-automation/
│   ├── custom-software/
│   ├── web-mobile-development/
│   └── digital-transformation/
│
├── products/
│   └── imaginai/
│
├── work/
│   └── imaginai/
│
├── company/
│   ├── about/
│   └── team/
│
├── faq/
├── contact/
├── privacy/
└── terms/
```

`product-strategy`, `industries`, `impact`, `press`, and other pages may be promoted into launch scope if enough approved content exists before release.

## 10.2 Conditional navigation

Codex should support conditional navigation/content visibility.

Examples:

- Do not display `Insights` if no meaningful article collection exists.
- Do not display `Careers` if no careers content or open-role strategy exists.
- Do not display `Press` if there is insufficient approved press content.
- Do not display customer-case-study navigation until real case studies exist.
- Do not render empty sections with “Coming soon” merely to fill the sitemap.

---

# 11. Progressive content launch

**APPROVED**

The site will evolve in content maturity.

## Phase A — Core corporate launch

Primary focus:

- positioning;
- services/solutions;
- ImaginAi;
- first case study;
- company;
- FAQ;
- contact.

## Phase B — Insights

Create the architecture during development, but activate publicly once a credible initial collection exists.

Recommended activation threshold:

- approximately **3–5 strong pillar articles**, not one isolated article.

Possible categories:

- AI & Automation;
- Digital Transformation;
- Software Engineering;
- Product & UX;
- EdTech;
- SynapsAi News.

## Phase C — Work expansion

Add real case studies as SynapsAi completes projects that can be publicly disclosed.

## Phase D — Extended corporate content

Possible additions:

- Press / Newsroom;
- Careers;
- Research;
- downloadable resources;
- customer stories;
- partner ecosystem;
- events.

---

# 12. Placeholder and fictitious-content policy

**NON-NEGOTIABLE**

## Allowed

Development/staging may use clearly identified placeholders for:

- card layout testing;
- CMS testing;
- article component testing;
- imagery aspect-ratio testing;
- skeleton loading states.

## DO NOT SHIP

Production must not contain invented:

- customer names;
- client logos;
- quotes;
- testimonials;
- user counts;
- countries;
- revenue;
- project metrics;
- team biographies;
- case studies;
- articles;
- partnerships;
- certifications;
- press coverage;
- awards;
- business capabilities that have not been approved.

If production content does not exist, **remove or hide the section**.

Never make the interface look populated by manufacturing fake proof.

---

# 13. Homepage architecture

**APPROVED DIRECTION**

Target: approximately **6–7 major narrative sequences**, excluding header and footer.

The final number can change if design exploration proves a better composition, but the homepage must remain curated and avoid repetitive length.

---

## 13.1 Section 1 — Hero

### Purpose

Immediately establish SynapsAi as a technology company serving real business needs.

### Required components

- strong headline;
- concise supporting copy;
- primary CTA: `Talk to us` / equivalent final approved copy;
- optional secondary CTA to explore work/solutions;
- signature visual or motion piece.

### Visual expectation

The hero must not be only text on a gradient.

Preferred directions include:

- AI/system workflow visualization;
- abstract but meaningful system visualization;
- carefully staged product/interface fragments;
- animated nodes, data paths or layered system components;
- a proprietary SynapsAi visual metaphor.

---

## 13.2 Section 2 — Proof / credibility

### Purpose

Answer: “Why should I believe SynapsAi can build serious technology?”

Keep this section compact.

Potential approved proof types:

- 143K+ ImaginAi users/learners;
- production since 2024;
- real multi-platform deployment;
- geographic reach;
- recognized project/award;
- other metrics only after approval.

### Rule

Prefer 3–4 strong proof points over a large KPI wall.

---

## 13.3 Section 3 — What we build

### Purpose

Explain SynapsAi's core capabilities without duplicating all Solutions pages.

Recommended high-level capability grouping:

1. **AI & Automation**
2. **Custom Software**
3. **Digital Products**

Alternative labels may be approved during copywriting.

Each capability should:

- have concise copy;
- connect to deeper solution content;
- be accompanied by a meaningful visual or interaction where possible.

Avoid a generic equal-width icon-card grid if a stronger editorial composition is available.

---

## 13.4 Section 4 — Featured work: ImaginAi

### Purpose

Use the ImaginAi ecosystem as proof of product strategy, AI implementation, engineering and deployment.

### Content scope

Show only a curated preview:

- short challenge/context;
- result/product;
- selected metric(s);
- mobile and teacher-platform interfaces;
- link to full case study.

Do not explain every ImaginAi feature on the homepage.

### Preferred visual treatment

- real application interfaces;
- mobile device composition;
- teacher dashboard;
- selected AI interactions;
- subtle transitions/motion;
- layered product imagery.

---

## 13.5 Section 5 — Built for real business problems

### Purpose

Translate technology capabilities into business outcomes.

Potential themes:

- automate repetitive workflows;
- structure document-heavy processes;
- connect fragmented systems;
- build internal operating tools;
- create intelligent customer/user experiences;
- digitize manual services;
- turn operational data into usable workflows.

### Important

This section should talk about **problems and outcomes**, not merely technologies.

Avoid unsupported guarantees about:

- cost savings;
- percentages;
- speed improvements;
- revenue gains.

---

## 13.6 Section 6 — Why SynapsAi

### Purpose

Briefly express the company's approach.

Potential dimensions:

- product thinking;
- engineering execution;
- AI capability;
- pragmatic problem-solving;
- understanding of African operating contexts;
- building for real constraints;
- end-to-end design and delivery.

This section should be concise and visually strong.

Detailed corporate history belongs on Company/About.

---

## 13.7 Section 7 — Final conversion CTA

### Purpose

End the narrative with a clear business-development action.

Conceptual direction:

> Have a challenge?  
> Let’s design what should exist next.

Final copy is **CONTENT PENDING**.

CTA:

- `Talk to us`
- or a later approved equivalent.

---

# 14. Homepage content intentionally excluded by default

The following should NOT automatically receive dedicated homepage sections:

- full team;
- full FAQ;
- complete industry list;
- full awards list;
- every ImaginAi feature;
- all countries;
- all articles;
- careers;
- detailed methodology;
- exhaustive tech stack;
- company history;
- long testimonials;
- press archive.

These belong to deeper pages unless a later design decision justifies a small curated reference.

A tiny preview, strip or contextual link is acceptable if it strengthens the story without adding unnecessary length.

---

# 15. Visual content system

**APPROVED DIRECTION**

Images and visual storytelling are essential, not optional decoration.

The redesigned site should use several intentional visual families.

## 15.1 Product visuals

Use real SynapsAi product screens where possible:

- ImaginAi mobile application;
- ImaginAi teacher platform;
- dashboards;
- AI interactions;
- relevant workflows.

Screens should be:

- cleanly staged;
- cropped intentionally;
- presented within custom compositions;
- optimized for web;
- readable enough to feel real;
- not presented as random screenshots.

## 15.2 Technical visuals

Used to materialize abstract technical concepts.

Examples:

- AI workflow;
- business-process automation;
- data flow;
- API connections;
- document processing;
- agent/tool interactions;
- system pipelines;
- approval flows;
- orchestration.

### Principle

**Do not decorate the claim. Visualize the capability.**

Example concept:

```text
Incoming request
       ↓
AI classification
       ↓
Business rules
   ↙         ↘
 CRM        ERP
   ↘         ↙
Automated outcome
```

The final website should render concepts like this using refined bespoke visual design rather than ASCII diagrams.

## 15.3 Abstract SynapsAi brand visuals

Potential visual vocabulary:

- connected nodes;
- modular systems;
- neural/synaptic references;
- data pathways;
- depth;
- grids;
- restrained glow;
- light and shadow;
- layered translucent surfaces;
- controlled particles;
- geometric systems.

Avoid:

- generic AI brains;
- stock “robot” imagery;
- clichéd neural-network illustrations;
- cyberpunk overload;
- random glowing blue circuits;
- excessive sci-fi decoration.

## 15.4 Human/company imagery

Use when it adds trust.

Possible uses:

- team portraits;
- field activity;
- presentations/events;
- product usage;
- partnerships.

Photography should feel authentic.

Avoid generic stock-office imagery whenever possible.

---

# 16. Motion principles

**PLANNED — final motion specification pending**

Motion should:

- explain;
- orient;
- create depth;
- reveal relationships;
- demonstrate product behavior.

Motion should NOT:

- exist on every element;
- delay navigation;
- interfere with reading;
- make the site feel like a design demo;
- create large performance penalties.

Potential uses:

- hero visualization;
- workflow progression;
- interface transitions;
- subtle card reactions;
- scroll-linked reveals used sparingly;
- transitions between related system states.

Always respect `prefers-reduced-motion`.

---

# 17. Visual tone

Final design-system values are **CONTENT/DESIGN PENDING**, but the site should target:

- modern technical sophistication;
- restrained confidence;
- premium execution;
- generous whitespace;
- high contrast and readability;
- sharp hierarchy;
- high-quality UI compositions;
- intentional density;
- limited visual noise;
- refined rather than flashy motion.

Do not automatically preserve the current website's styling.

Do not automatically adopt Cohere's or Linear's design tokens.

A distinct SynapsAi design system will be defined in a later phase.

---

# 18. Language and localization

**APPROVED**

## 18.1 Primary language

English is the canonical/default site language.

Canonical English routes should use the root:

```text
/
 /solutions
 /products
 /work
 /company
 /contact
```

Do NOT use `/en/` for the primary English site unless this decision is explicitly revisited.

## 18.2 French

French is the secondary locale:

```text
/fr/
 /fr/solutions
 /fr/products
 /fr/work
 /fr/company
 /fr/contact
```

## 18.3 Locale selector

Use an obvious language selector:

```text
EN / FR
```

or an equivalent accessible interaction.

## 18.4 Locale behavior

Recommended behavior:

- English remains canonical.
- Browser language may inform a suggestion.
- Avoid aggressive forced redirects.
- Respect an explicit user's locale selection.
- Persist locale preference where appropriate.
- Users must always be able to switch languages easily.

## 18.5 SEO localization

Implementation should eventually support:

- locale-specific metadata;
- `hreflang`;
- canonical tags;
- localized Open Graph metadata;
- translated structured data where appropriate.

Do not machine-publish untranslated or low-quality French merely to fill pages.

---

# 19. Solutions architecture

## 19.1 Solutions overview

Route:

`/solutions`

Purpose:

- introduce SynapsAi's client-service capabilities;
- help prospects self-identify;
- route into dedicated solution pages.

## 19.2 AI & Automation

Route:

`/solutions/ai-automation`

Possible scope:

- AI-enabled workflows;
- document workflows;
- AI assistants;
- intelligent routing;
- business-process automation;
- integrations;
- custom AI experiences.

Avoid implying SynapsAi provides capabilities that have not been approved.

## 19.3 Custom Software

Route:

`/solutions/custom-software`

Possible scope:

- internal business tools;
- operational platforms;
- custom dashboards;
- workflow systems;
- domain-specific applications.

## 19.4 Web & Mobile Development

Route:

`/solutions/web-mobile-development`

Possible scope:

- responsive web applications;
- mobile applications;
- user-facing digital platforms;
- product engineering.

## 19.5 Digital Transformation

Route:

`/solutions/digital-transformation`

Possible scope:

- process digitization;
- modernization;
- workflow redesign;
- consolidation of fragmented operational processes;
- implementation strategy.

## 19.6 Product Strategy

Route:

`/solutions/product-strategy`

Status: **PLANNED / REVIEW BEFORE LAUNCH**

Do not expose publicly until the exact service scope has been approved.

---

# 20. Products architecture

## 20.1 Products overview

Route:

`/products`

Status: can exist at launch if its role is clear.

Purpose:

- distinguish SynapsAi-owned products from client services.

## 20.2 ImaginAi

Route:

`/products/imaginai`

Purpose:

- present the educational ecosystem;
- explain audiences;
- explain product value;
- route to relevant dedicated ImaginAi properties/app stores;
- connect the product back to SynapsAi technology capabilities.

Possible sub-routes:

```text
/products/imaginai/learners
/products/imaginai/teachers
```

Status: **PLANNED**

Avoid unnecessary fragmentation if the content can initially live on one strong ImaginAi page.

---

# 21. Work / case studies

## 21.1 Work overview

Route:

`/work`

Purpose:

Show what SynapsAi has actually built.

This section should become increasingly important as real external client projects become publishable.

## 21.2 ImaginAi case study

Route:

`/work/imaginai`

This is different from `/products/imaginai`.

### Product page answers:

- What is ImaginAi?
- Who is it for?
- What can users do with it?

### Case-study page answers:

- What problem did SynapsAi address?
- How was the ecosystem conceived?
- What was built?
- What product/technical challenges existed?
- What systems/platforms were involved?
- What measurable traction exists?
- What does this demonstrate about SynapsAi?

The case study must remain factual.

---

# 22. Industries

Target routes:

```text
/industries/education
/industries/business
/industries/institutions
```

Status: **PLANNED / CONDITIONAL**

Industries pages should only exist if SynapsAi can provide meaningful domain-specific content.

Do not create a long list of industries merely to appear larger.

Especially avoid unsupported claims in:

- banking;
- healthcare;
- aviation;
- government;
- energy;
- telecom;
- insurance;
- agriculture;

unless actual capabilities, projects or explicitly approved market positioning justify them.

Initial focus should remain credible.

---

# 23. Insights / editorial strategy

Status at initial project stage: **CONTENT PENDING**

## 23.1 Principle

Insights should be a business-development and expertise channel, not merely a company-news blog.

## 23.2 Possible categories

```text
AI & Automation
Digital Transformation
Software Engineering
Product & UX
EdTech
Company News
```

## 23.3 Activation

Do not expose Insights in main navigation while effectively empty.

Recommended initial content collection:

3–5 meaningful articles.

## 23.4 Example editorial territories

These are topics, NOT approved final titles:

- AI agents and document-heavy business processes;
- digitizing inefficient workflows;
- designing software around actual operations;
- lessons from deploying AI-powered learning products;
- building digital products for African constraints;
- integrating AI without rebuilding an entire information system.

All articles will be created and approved in a later content phase.

---

# 24. FAQ strategy

Route:

`/faq`

A global FAQ page is useful.

Possible categories:

- Working with SynapsAi;
- AI & Automation;
- Software Development;
- Project Process;
- Pricing & Proposals;
- Delivery;
- Support & Maintenance;
- Security & Data;
- ImaginAi.

Do not fabricate commitments around:

- SLAs;
- certifications;
- guaranteed timelines;
- minimum budgets;
- data-hosting arrangements;
- security standards;

until approved.

Relevant solution pages may also contain short contextual FAQs.

---

# 25. Company architecture

## 25.1 About

Route:

`/company/about` or `/about`

Final routing convention should be consistent site-wide.

Purpose:

- company story;
- mission;
- vision;
- approach;
- context;
- where SynapsAi operates.

Avoid generic startup slogans.

## 25.2 Team

Route:

`/company/team`

Use only current, approved team information.

## 25.3 Impact

Route:

`/company/impact`

Status: **PLANNED / CONTENT PENDING**

Should use verifiable metrics and real initiatives.

## 25.4 Press

Route:

`/company/press`

Status: **FUTURE / CONDITIONAL**

## 25.5 Careers

Route:

`/company/careers`

Status: **APPROVED FOR LOCAL IMPLEMENTATION — ENGLISH ONLY**

The owner requested a Careers page inspired by Cohere and Linear. Use verified company/product/team material, an original dark editorial layout and a contact route via the existing public email. Do not invent vacancies, benefits, work arrangements or hiring stages. Detailed job listings remain pending owner input. Link from English Company navigation and the footer; no French equivalent. This iteration is local only and must not be deployed without a new request.

## French rollout inventory and priorities — 2026-09-17

The owner approved the inventory and priority phase for a progressive French update, using the current English site as the structural reference. Existing French copy is unchanged in this phase. The next implementation lot is P0: `/fr` and the four French solution detail pages. English-only product, Impact, Careers and Insights routes remain without French equivalents until each lot receives approved adapted copy. See `docs/french-rollout.md` for the route matrix, sequence and acceptance gate.

Do not create fake vacancies.

---

# 26. Contact / business conversion

Route:

`/contact`

The contact experience should support qualified inbound requests.

Possible fields:

- Name;
- Work email;
- Organization;
- Role;
- What do you need help with?;
- Short project/challenge description;
- optional budget or project stage if later approved.

Do not make the form unnecessarily long.

Potential project-type options:

- AI & Automation;
- Custom Software;
- Web / Mobile Product;
- Digital Transformation;
- Partnership;
- Other.

Final contact flow will be specified later.

---

# 27. Internal linking principles

Internal navigation should support intentional user journeys.

## 27.1 Business prospect

```text
Home
→ Solution
→ Relevant capability/problem
→ Work / case study
→ FAQ if needed
→ Talk to us
```

## 27.2 Education stakeholder

```text
Home
→ Products / Education
→ ImaginAi
→ relevant ecosystem page
→ Contact
```

## 27.3 Partner / ecosystem

```text
Home
→ Company
→ Products
→ Work / Impact
→ Contact
```

## 27.4 Organic search visitor

Future:

```text
Insight article
→ relevant Solution
→ Work / proof
→ Contact
```

Every major page should provide an intentional next step.

Avoid dead-end pages.

---

# 28. Mega-menu principles

Mega menus can be used when content volume justifies them.

Do not implement visually heavy mega menus if the launch content is too small.

Potential Solutions menu content:

```text
AI & Automation
Automate workflows and build intelligent systems.

Custom Software
Software designed around real operations.

Web & Mobile Products
Design and build production-ready digital experiences.

Digital Transformation
Turn manual and fragmented processes into digital workflows.

[Talk to SynapsAi]
```

Final copy is **CONTENT PENDING**.

---

# 29. Footer architecture

Target footer groups:

```text
Solutions
Products
Company
Resources
Legal
```

Potential items:

### Solutions

- AI & Automation
- Custom Software
- Web & Mobile
- Digital Transformation

### Products

- ImaginAi
- additional future products

### Company

- About
- Team
- Work
- Contact
- Impact when available
- Careers when available

### Resources

- Insights when active
- FAQ
- Press when active

### Legal

- Privacy
- Terms
- Cookies if required

Also include:

- relevant social channels;
- location/company reference if approved;
- copyright.

Do not expose empty destination pages.

---

# 30. Content style

Detailed copywriting guidelines will be created in a later phase.

Current direction:

- confident;
- concise;
- human;
- technically literate;
- business-aware;
- international;
- clear;
- specific.

Avoid:

- generic AI marketing language;
- excessive superlatives;
- “revolutionary” claims without evidence;
- overuse of “innovative”;
- empty statements such as “we leverage cutting-edge technologies to transform businesses”;
- jargon without explanation;
- exaggerated African-development clichés;
- vague corporate prose.

The site should prefer concrete outcomes and examples.

---

# 31. Credibility rules

SynapsAi's site should earn trust through:

- real products;
- real interfaces;
- verified metrics;
- actual technical capability;
- case studies;
- thoughtful explanations;
- transparent positioning;
- professional visual execution.

Do not simulate maturity through fake scale.

A small number of strong, true signals is preferable to many weak ones.

---

# 32. Design-system requirements

Status: **NEXT PROJECT PHASE**

A dedicated design-system specification will later define:

- logo use;
- color palette;
- light/dark approach;
- typography;
- spacing;
- grid;
- radius;
- borders;
- elevation;
- buttons;
- inputs;
- cards;
- navigation;
- iconography;
- diagrams;
- motion;
- product mockups;
- illustration language;
- responsive breakpoints;
- accessibility;
- content-width rules.

Until that specification exists, Codex should avoid hard-coding a full final visual identity based solely on Cohere or Linear.

---

# 33. Responsive design

The website MUST be designed mobile-first/responsive even if the primary commercial audience often visits from desktop.

Requirements:

- all navigation accessible on mobile;
- no desktop-only information;
- large visual compositions must gracefully adapt;
- diagrams should remain understandable;
- readable typography;
- touch-friendly controls;
- no horizontal scrolling caused by decorative elements;
- product mockups must not become unreadable miniatures.

---

# 34. Accessibility baseline

Target strong modern accessibility practices.

At minimum:

- semantic HTML;
- keyboard-accessible navigation;
- visible focus states;
- accessible forms;
- sufficient contrast;
- alt text strategy;
- meaningful link labels;
- heading hierarchy;
- reduced-motion support;
- no critical information conveyed only by animation/color.

Final formal accessibility target may be defined later.

---

# 35. Performance principles

The site should feel technically credible.

Therefore:

- optimize images;
- lazy-load non-critical media;
- avoid unnecessary client JavaScript;
- keep animation efficient;
- avoid autoplay heavyweight videos unless strongly justified;
- use responsive images;
- optimize fonts;
- avoid bloated third-party scripts;
- prioritize Core Web Vitals.

Visual sophistication must not come at the cost of poor loading performance.

---

# 36. SEO foundation

Detailed SEO work is a later phase, but architecture must support it now.

Requirements:

- semantic route structure;
- crawlable server-rendered/static content where appropriate;
- unique title/meta description per page;
- canonical URLs;
- Open Graph metadata;
- sitemap;
- robots configuration;
- structured data where truthful and relevant;
- `hreflang` for EN/FR;
- article metadata for future Insights;
- meaningful image alt text.

Do not keyword-stuff copy.

---

# 37. CMS/content architecture

Exact CMS choice is **NOT YET APPROVED**.

The site architecture should make content such as the following maintainable without redesign:

- Insights/articles;
- case studies;
- team members;
- awards;
- press;
- jobs;
- FAQs;
- products;
- selected metrics.

Codex should not choose a CMS vendor as an irreversible assumption without approval.

Content schemas can be planned independently of CMS vendor.

---

# 38. Technical implementation

The website will be developed with assistance from **OpenAI Codex**.

**Framework APPROVED (2026-09-16): Next.js**, explicitly selected by the project owner. The local implementation uses App Router, React, TypeScript and npm. See [docs/implementation.md](docs/implementation.md) for reversible implementation choices and remaining decisions.

Codex should not silently select major architecture dependencies as permanent project decisions.

When implementation begins, the technical specification should document:

- framework;
- package manager;
- routing;
- styling approach;
- component architecture;
- i18n;
- content source / CMS;
- image pipeline;
- deployment platform;
- analytics;
- forms;
- testing;
- linting;
- SEO;
- environment variables.

These decisions should be added to this source of truth.

---

# 39. Analytics

Status: **PLANNED**

Future measurement should distinguish:

- general website traffic;
- solution-page visits;
- ImaginAi/product referrals;
- contact intent;
- form starts/completions;
- CTA clicks;
- article acquisition;
- language preference;
- case-study engagement.

No analytics vendor has been approved in this document.

---

# 40. Conversion strategy

Primary conversion:

> Start a qualified business conversation.

Primary CTA family:

- `Talk to us`
- later approved equivalent.

Secondary conversions may include:

- Explore Solutions;
- View Work;
- Discover ImaginAi;
- Read a case study;
- Read an Insight.

Avoid multiple competing primary CTAs on the same screen.

---

# 41. Content governance

All production content should have one of the following states:

```text
draft
review
approved
published
archived
```

Key facts and numbers should include a source and review date in the content workflow where practical.

Time-sensitive metrics should not become permanent hard-coded decorative assets if they are expected to change frequently.

---

# 42. Decision log

## 2026-09-16 — Initial approved direction

### Approved

- Website redesign targets international-standard presentation.
- SynapsAi should be positioned beyond EdTech.
- ImaginAi remains a flagship product and major proof of execution.
- Homepage should be shorter and curated rather than exhaustive.
- Homepage target is approximately 6–7 main narrative sequences.
- Visual storytelling is essential.
- Real interfaces, system diagrams and technical visuals should be used extensively where relevant.
- English is the primary/canonical language.
- French is secondary.
- English routes use root URLs rather than `/en/`.
- French routes use `/fr/`.
- The website will use a progressive-content-launch model.
- Missing production content must not be replaced by fictitious content.
- Empty future areas should remain hidden until sufficiently populated.
- Insights/Blog architecture should be prepared but not publicly promoted while empty.
- Cohere and Linear are inspiration references, not cloning targets.
- Codex will be used during implementation.

### Pending

- final copywriting;
- final service names;
- final homepage wording;
- exact design system;
- final illustration system;
- remaining infrastructure choices (CMS, hosting, contact delivery and analytics); framework resolved to Next.js in the implementation session below;
- CMS;
- contact form workflow;
- analytics platform;
- final SEO strategy;
- article content;
- final launch page list;
- exact header/mega-menu behavior;
- animation specification.

---

# 43. Immediate next phases

The recommended sequence from this point is:

## Phase 1 — Information architecture

- finalize sitemap;
- resolve route naming;
- decide launch vs future pages;
- finalize homepage narrative;
- define internal linking.

## Phase 2 — Copywriting

English first:

- Homepage;
- Solutions overview;
- each Solution page;
- Products / ImaginAi;
- ImaginAi case study;
- About;
- Team;
- FAQ;
- Contact.

French adaptation second.

## Phase 3 — Content model

Define schemas for:

- pages;
- case studies;
- articles;
- FAQs;
- team;
- metrics;
- awards.

## Phase 4 — Design system

Define the complete UI/visual foundation.

## Phase 5 — Visual asset direction

- product screenshots;
- mockups;
- diagrams;
- technical illustrations;
- motion prototypes;
- photography selection.

## Phase 6 — Implementation

Codex builds against approved specs.

## Phase 7 — QA

- responsive;
- copy;
- accessibility;
- performance;
- SEO;
- EN/FR behavior;
- forms;
- analytics;
- content validity.

## Phase 8 — Content expansion

- Insights;
- client case studies;
- press;
- careers;
- additional industries/products.

---

# 44. Definition of success

The redesign is successful if a first-time visitor can quickly understand:

1. **What SynapsAi is.**
2. **What kinds of problems SynapsAi can solve.**
3. **What SynapsAi has actually built.**
4. **Why SynapsAi is credible.**
5. **How to start a conversation.**

The website should make SynapsAi feel larger in capability and ambition **without pretending to be larger in proof than it is**.

---

# 45. Reference links

## Official current site

- `https://synapsai.co/`

## Inspiration

- `https://cohere.com/`
- `https://linear.app/`

---

# 46. Instructions to Codex

Before implementing or modifying a major page or system:

1. Read this document.
2. Identify whether the relevant decision is `APPROVED`, `PLANNED`, `CONTENT PENDING`, or `FUTURE`.
3. Do not convert future content into fake production content.
4. Prefer reusable components and scalable content models.
5. Maintain English-first routing and localization architecture.
6. Maintain a short, curated homepage.
7. Use imagery/visual systems to communicate capability.
8. Do not clone Cohere or Linear.
9. Do not invent SynapsAi facts.
10. Flag a decision for human review when this file does not provide enough information.
11. When an approved project decision changes, update this document as part of the same change.
12. Keep implementation consistent with the project's evolving source of truth.

---

## 2026-09-16 — Implementation session

### Approved by the project owner

- Framework: **Next.js**.
- Initial visual direction: **light base, warm accents, technical visuals**.
- Provide a dedicated media directory for official assets, generated images and other media.
- Verify UI, responsive behavior and stability throughout implementation.

### Local implementation — review state

- Technical specification and reversible implementation choices: [docs/implementation.md](docs/implementation.md).
- Local setup and checks: [README.md](README.md).
- Media directory and provenance: [public/media/README.md](public/media/README.md), [public/media/manifest.json](public/media/manifest.json).
- QA evidence: [docs/qa.md](docs/qa.md).
- The first implementation is a local review version. Detailed copy, design tokens and final launch content remain subject to review; no automatic production publication.
- Next.js resolves the earlier pending framework choice. CMS, analytics, deployment provider and server email workflow remain pending.

## 2026-09-16 — Dark design and sourced content revision

### APPROVED — supersedes the initial light visual direction

- Use `DESIGN-linear.app.md` as the visual specification for a fully dark website: near-black canvas, charcoal surface hierarchy, hairline borders, restrained lavender accents and strong sans-serif typography. Apply this direction across every page, navigation, form, diagram and footer.
- Preserve SynapsAi branding, original page composition and content; do not copy Linear assets or proprietary typefaces.
- Enrich EN/FR copy from `https://synapsai.co/` and `https://imaginai.io/`, especially the team information at `https://imaginai.io/apropos`.
- Activate `/company/team` and `/fr/company/team` using verified names and roles: Frank Arnaud Yap (cofounder, CTO), Youssouf Nchetkou Ndam (cofounder, CEO), Steve Mekam Kontche (cofounder, Tech Lead). Do not fabricate personal biographies or credentials.
- Use official corporate portraits with recorded provenance. Images labeled placeholder on ImaginAi require extra scrutiny and are not automatically adopted.
- Maintain the approved 143K+ learner baseline and PROMEX 2025 award. Conflicting counts on the source sites do not authorize automatic metric changes.

## 2026-09-16 — English-only iteration workflow

**APPROVED by the project owner:** subsequent iterations focus exclusively on the English version. French copy adaptation, equivalent page updates and dedicated French QA are deferred until the English changes are satisfactory and the owner requests their French rollout. Existing French pages remain available. Maintain bilingual routing architecture, but do not duplicate each English iteration into French. Shared CSS/components may naturally affect both locales; identify substantial shared effects without treating them as authorization for a full French adaptation.

## 2026-09-16 — First English Insight

**APPROVED scope:** write and build the first original English article, **AI for Africa Should Be Designed for Context, Not Just Translated**. English only; do not create a French article, translated listing, or French metadata alternates.

- Review routes: `/insights` and `/insights/ai-for-africa-designed-for-context`.
- Initial editorial state: `review`. Corporate byline: SynapsAi; no invented personal author, publication date or claimed product feature.
- Use primary research references and clearly distinguish illustrative examples and recommendations from deployed SynapsAi capabilities.
- Local/staging English navigation can expose the article for review. Production visibility remains governed by the existing progressive launch policy: review content is unavailable when `SITE_PUBLISHED=true`; Insights navigation requires at least three published entries. Draft/review URLs are excluded from the sitemap.
- Retain English article metadata, canonical URLs and structured data without claiming a French translation exists.

## 2026-09-16 — Insights V1 collection

**APPROVED newer Insights direction:** execute `synapsai-insights-first-5-articles-codex-brief.md`: five complete English articles, one featured article and four editorial cards, reusable structured content, distinctive conceptual visuals, sources, related reading and contextual links. The categories are Perspectives, AI & Africa, Product & Engineering, Field Notes and Inside SynapsAi; visible filters are deferred.

- The brief supersedes the corporate-only byline: default author is Youssouf Nchetkou Ndam, CEO; Frank Arnaud Yap, CTO, co-authors the connectivity article. Use approved names/roles without invented biographies.
- Adopt the first article's full suggested slug, `/insights/ai-for-africa-designed-for-context-not-just-translated`, preserving the previous URL with a permanent redirect.
- All five articles remain in review. Show the revision date, not a fictional publication date. Existing staging visibility and public publication gates remain.
- Classroom content distinguishes external evidence and design hypotheses from internal field findings. Unverified features are not described as live capabilities.
- No French adaptation or deployment is included.

## 2026-09-16 — IA reconciliation V2

**APPROVED newer product/architecture direction:** execute `synapsai-codex-ia-reconciliation-v2.md`, with gap analysis recorded in `docs/ia-reconciliation-v2.md`.

- Preserve the five Insights as V1 editorial content and integrate a compact three-article Home preview. Retain existing working routes, including `/work/imaginai` and `/solutions/web-mobile-development`.
- Distinguish **ImaginAi**, the mobile application for secondary/higher-education learners, from **ImaginAi Prof**, the web application for teachers/instructors. Add `/products/imaginai-prof` in English. The Products hub presents both; educational structures form a stakeholder/use-case layer, not a third app.
- The owner-supplied V2 brief validates Prof's class/group management, assignments/tasks, follow-up and reporting scope. Do not invent institutional deployments, integrations, private architecture or screenshots. Use a labeled workflow diagram while real Prof imagery is unavailable.
- Expand the existing Work case study around the ecosystem, stakeholder needs, two-platform design, engineering boundaries and supported evidence.
- Add `/company/impact` in English using verified founding, reach, PROMEX recognition, CONIA participation and CITS participation. Keep unsupported GHSS/Orange/Microsoft/collaboration claims in the internal evidence register until validated.
- Add only validated social/team profile URLs; distinguish identically named unrelated companies.
- The owner supplied Instagram, company LinkedIn, WhatsApp and all three team LinkedIn URLs during implementation. Use these exact destinations. The supplied X asset is only an icon; no account URL is inferred.
- CITS 2026 Douala participation is corroborated by the official company LinkedIn feed relaying founder accounts. Use participation wording only. Differentiate the Company overview from the longer About narrative, preserving both URLs.
- Continue English-only implementation. Existing French pages stay available; new English-only routes have no fictional French alternate. Legal pages still need approved substantive content before exposure.

## 2026-09-16 ? Brand identity and Insights browsing

**APPROVED by the owner:** adopt Archivo globally and the official logo mint #7FFFD1 as the primary color, keep the dark theme, reduce buttons by approximately 8px and show only social icons in the footer. Use the supplied real ImaginAi and ImaginAi Prof compositions. Shared typography/color/button changes affect both locales; content work remains English-only.

**APPROVED newer Insights direction:** reorganize the English index after Linear Now with functioning category tabs and a Press category. This supersedes the earlier decision to defer filters. Prepare Press for owner-supplied YouTube links without inventing entries or publication dates.

## 2026-09-16 ? Three-column Insights and populated Press

The owner approved retaining the featured article, showing following articles in three desktop columns, and matching Linear Now Press with thumbnail cards in four desktop columns. All previews four videos and View all selects Press with all eight supplied videos. Tablet uses two columns and mobile one. Video titles, channel and thumbnails were verified through YouTube oEmbed; original publication dates came from the public watch-page metadata. English display titles adapt the originals, retained in the registry for search and provenance. Local thumbnail assets avoid third-party requests until a visitor follows a video link. No video iframe or autoplay is loaded.

_End of current source of truth._

## 2026-09-18 - English homepage visual rhythm

**APPROVED direction from owner feedback:** improve the English homepage's sales clarity and visual energy without removing useful content. Alternate dark technical surfaces with light white/mint sections so the page has a clearer rhythm and stronger visual hierarchy.

- The English homepage opens with the existing SynapsAi systems visual; real ImaginAi and ImaginAi Prof compositions remain in the dedicated ecosystem showcase below.
- Proof points use a light surface; capabilities remain dark; the ImaginAi ecosystem uses a light product showcase with generous vertical spacing; real-world problems remain dark; the approach section uses a light surface with generous vertical spacing; recognition and Insights return to dark.
- Existing approved copy, metrics, product boundaries and evidence remain unchanged. No new claims, customers, testimonials or outcomes were added.
- The supplied ImaginAi and ImaginAi Prof media are used as product evidence. Generated or conceptual visuals remain subject to the media provenance rules.
- This is an English-only homepage iteration. The French homepage keeps its existing structure and copy for later review; shared brand styles may still affect common components.

## 2026-09-16 ? SEO and supplied brand assets

Approved: apply synapsai-seo-discoverability-social-sharing-requirements.md to all future routes, use the supplied green/white navbar logo, vector diagram symbol and 32px favicon. Implemented metadata, query map, social cards, structured data, build checks and staging-safe sitemap are documented in docs/seo.md. The exact supplied brand color #5EFFD9 supersedes the earlier #7FFFD1 source. Production verification, Search Console and real platform share-cache tests remain launch tasks; no deployment or French content adaptation is authorized by this change.

## Owner approval ? first five English Insights

The owner explicitly approved publication of all five review articles. Their individual status is now published, making them eligible for production navigation and the production sitemap. SITE_PUBLISHED remains false until deployment preparation is complete. No public deployment occurred. Publication dates remain unset until the actual first public release; approval is not a fabricated publication timestamp. Future articles must receive their own explicit status and approval.

## 2026-09-18 — Additional English Insights (editorial review)

**Owner-requested scope:** add five further original English Insights, kept in `review` until the owner explicitly approves publication. No French articles, French listing entries, French metadata alternates, sitemap entries or deployment are authorised by this request.

- **What Makes an AI Product Worth Using Every Day?** — Product / Strategy.
- **Designing AI for People Who Don’t Think Like Engineers** — Product Design / Perspective.
- **The Hidden Cost of Building AI Products in Emerging Markets** — Engineering / Business.
- **From Assistant to Learning System: Rethinking AI in Education** — Education / Product.
- **What We Measure When We Build AI for Learning** — Data / Field Notes.

The content must remain clear about the boundary between original recommendations, external evidence and verified SynapsAi facts. It must not invent product results, learning metrics, clients, deployments, providers, commercial terms or field research. Conceptual editorial visuals are permitted, provided they are labelled as such and recorded in `public/media/manifest.json`. The measurement article may later receive real ImaginAi charts only after the underlying data, definitions, population, time period and publication approval are documented.

## 2026-09-18 — Insights archive

**Owner-requested direction:** the English Insights index keeps at most seven current editorial cards. Once the collection exceeds that limit, older entries move into a compact **Archive** section at the bottom of the page, inspired by the information hierarchy of Linear Now but implemented with SynapsAi-specific styling and copy. Archive entries remain publicly readable at their existing canonical URLs; no content is removed, hidden from search engines when published, or assigned a replacement URL. The archive is deliberately a concise link list rather than an additional card grid, so the current collection never exceeds seven cards. English only; no French archive work is authorised.

## 2026-09-18 - Product mockup visual prototype

The English homepage ecosystem section now uses a Linear Mobile-inspired visual treatment: real ImaginAi and ImaginAi Prof screenshots sit in framed product stages with perspective, grid details, status labels and restrained floating motion. The treatment is SynapsAi-specific and does not reproduce Linear assets or copy. Motion respects reduced-motion preferences. Future approved product imagery can replace the current media without changing the component structure.

## 2026-09-18 - ImaginAi mobile product page

**APPROVED by the owner:** rebuild the English `/products/imaginai` page around the composition and visual pacing of Linear Mobile, then adapt every section to the ImaginAi interface and SynapsAi brand. The page uses a large product hero, paired editorial visuals, full-width feature chapters, compact capability blocks and a connected-product conclusion. `/products/imaginai-prof` remains unchanged.

The owner supplied the current ImaginAi mobile home screen and explicitly authorized temporary fictional presentation imagery. Generated smartphone scenes may use that interface as a reference, but must remain visibly labelled as concept visualizations and replaceable when final campaign assets arrive. They cannot be presented as real users, released hardware, customer evidence or measured results. Existing owner-approved product compositions remain the factual UI reference. This iteration is English only.
