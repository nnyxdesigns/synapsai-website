# SynapsAi — Insights V1 Content & Article Architecture Brief

> **Purpose:** Operational brief for Codex to design, write, illustrate, implement, and integrate the first five SynapsAi Insights articles into the 2026 SynapsAi website redesign.
>
> **Status:** Approved working direction for Insights V1.
>
> **Primary language:** English.
>
> **Secondary language:** French translation may be added after the English source version is complete and validated.
>
> **Important:** This document complements the main SynapsAi website redesign Source of Truth. If a conflict exists, the main Source of Truth takes precedence unless this document explicitly records a newer decision specific to Insights.

---

## 1. Strategic role of Insights

Insights is not intended to be a generic corporate blog or an SEO-content farm.

It should function as SynapsAi's editorial and intellectual layer: a place to publish clear thinking, product lessons, field observations, engineering constraints, data-informed perspectives, and selected behind-the-scenes stories about building useful AI products in African contexts.

The section should help establish SynapsAi as a company that:

- thinks from real-world African constraints rather than merely translating global AI narratives;
- builds AI products grounded in practical use cases;
- learns from users, institutions, technical constraints, and deployment realities;
- can articulate product, engineering, design, education, and business implications with rigor;
- distinguishes evidence from interpretation;
- avoids exaggerated claims, fabricated traction, generic thought leadership, and empty AI futurism.

The editorial inspiration is primarily:

- Cohere Blog: https://cohere.com/blog
- Reference article: https://cohere.com/blog/automations-early-footprint
- Linear Now: https://linear.app/now

The goal is **not** to reproduce these sites visually or textually. Extract the useful editorial and interaction principles, then express them through SynapsAi's own brand system.

---

## 2. Core editorial principles

### 2.1 One article = one strong idea

Each article must have one primary thesis.

Do not write articles that attempt to cover every aspect of AI, Africa, education, product design, and engineering at once.

The article should make a focused argument using this general logic when appropriate:

```text
Observation
→ Problem / tension
→ Thesis
→ Evidence / examples
→ Implications
→ SynapsAi perspective
→ Open question or conclusion
```

The structure may vary when a better narrative is justified.

### 2.2 Evidence before rhetoric

Important factual claims should be supported by credible sources.

Preferred sources include:

- peer-reviewed research;
- institutional publications;
- official government or multilateral datasets;
- recognized research organizations;
- high-quality technical documentation;
- reputable industry research;
- SynapsAi's own validated product or field data where available.

Do not invent proprietary SynapsAi statistics.

When no validated internal number is available, write qualitatively rather than creating a placeholder statistic.

Clearly distinguish:

- external evidence;
- SynapsAi internal observations/data;
- interpretation or hypothesis;
- opinion / perspective.

### 2.3 Avoid generic AI language

Do not use formulaic phrases such as:

- “In today's rapidly evolving digital landscape…”
- “AI is revolutionizing every industry…”
- “The future is here…”
- “At SynapsAi, we believe innovation is the key…”
- “In an increasingly interconnected world…”

Open with a concrete observation, tension, claim, scene, question, or insight.

### 2.4 Not every article needs to sell

Insights should strengthen trust and expertise first.

Commercial CTAs are optional and contextual.

Allowed examples:

- Explore ImaginAi
- Explore our work
- See how we build AI products
- Talk to SynapsAi
- Read the related Insight

Do not force a sales CTA into every article.

---

## 3. Article page architecture

The architecture should be strongly informed by the clarity and editorial hierarchy seen in Cohere's “Automation's Early Footprint” article, while remaining distinctly SynapsAi.

### 3.1 Recommended page flow

```text
GLOBAL NAVIGATION

ARTICLE HERO / HEADER
    Category / eyebrow
    Publication date
    Reading time
    H1 title
    Subtitle / standfirst
    Hero visual

ARTICLE META
    Written by
        CEO of SynapsAi — primary/default author
        CTO of SynapsAi — optional co-author when technically relevant
    Author role(s)
    Tags

OPTIONAL ARTICLE SUMMARY
    Key takeaways
        3–5 concise statements

ARTICLE BODY
    Strong opening
    Section 01
    Contextual visual
    Section 02
    Pull quote / statistic / callout when useful
    Section 03
    Diagram / chart / screenshot / illustration when useful
    Section 04
    Implications / interpretation
    Additional sections as required by subject

OPTIONAL METHODOLOGY / NOTES
    Use for data-heavy or research-heavy articles

CONCLUSION
    Main takeaway
    Open question / practical implication / SynapsAi perspective

OPTIONAL CONTEXTUAL CTA

AUTHOR BLOCK
    Author(s) repeated at end
    Name
    Role
    Short professional bio if already available in repository / approved content

RELATED INSIGHTS
    2–3 contextual articles

FOOTER
```

### 3.2 Hero/header behavior

The header should feel editorial rather than marketing-heavy.

Recommended hierarchy:

```text
AI & Africa                       category
Sep 2026 · 8 min read             metadata

AI for Africa Should Be
Designed for Context,
Not Just Translated               H1

A useful AI product does not become
African simply because its interface
has been translated.              standfirst
```

Do not use unnecessarily wide text measures. Long-form reading should remain comfortable on desktop and mobile.

### 3.3 Standfirst

Every article must include a short standfirst directly under the title.

Purpose:

- clarify the article's thesis or question;
- give the reader a reason to continue;
- remain distinct from the introduction;
- ideally fit within 1–3 short sentences.

### 3.4 Key takeaways

Use a prominent “Key takeaways” section when the article has enough analytical substance.

Recommended:

- 3–5 points;
- each point contains an actual finding or argument;
- no generic summary bullets;
- on desktop this may use a dedicated editorial layout/card;
- on mobile it should remain simple and readable.

Do **not** add Key takeaways mechanically if they provide no value.

### 3.5 Reading width

The body should use a constrained reading column rather than the full viewport.

Visuals may intentionally break beyond the text column when useful, especially:

- charts;
- diagrams;
- product screenshots;
- photographic spreads;
- full-width conceptual illustrations.

### 3.6 Visual rhythm

Avoid long uninterrupted walls of text.

Use a meaningful visual or structural interruption approximately every 2–4 major text sections when justified.

Possible elements:

- illustration;
- chart;
- diagram;
- table;
- screenshot;
- photo;
- numbered framework;
- short pull quote;
- large highlighted statement;
- small data callout.

These are not decorative quotas. Only use them when they help comprehension or pacing.

---

## 4. Author rules

### 4.1 Default author

The default author for SynapsAi Insights V1 is the **current CEO of SynapsAi**.

Codex must resolve the CEO's exact approved public name and title from the existing repository / team content / current Source of Truth.

Do not invent or infer a name if it is not available.

### 4.2 CTO co-authorship

The **CTO of SynapsAi** may appear as co-author for technically relevant pieces, especially:

- engineering architecture;
- connectivity constraints;
- AI infrastructure;
- reliability;
- model integration;
- deployment trade-offs;
- document processing;
- data pipelines;
- technical design of ImaginAi.

Likely use:

```text
Written by
[CEO Name], CEO, SynapsAi
with [CTO Name], CTO, SynapsAi
```

or use equal co-author presentation where both materially contribute.

### 4.3 No fabricated biographies

Only use biographies and credentials already present in approved project sources.

If no short bio exists, show name + role only.

---

## 5. Insights taxonomy

Prepare the content model for these categories:

1. `Perspectives`
2. `AI & Africa`
3. `Product & Engineering`
4. `Field Notes`
5. `Inside SynapsAi`

### Important V1 display rule

The CMS/data model may support all five categories immediately, but the `/insights` interface should **not necessarily show five category filters at launch**.

With only five articles, visible filtering could make the library feel artificially sparse.

Recommended V1 listing architecture:

```text
Insights
Editorial intro

Featured Insight
    large card / editorial layout

Latest / All Insights
    four article cards

Optional newsletter/contact/editorial CTA only if already part of site strategy
```

Add category filters later when there is enough content to justify them, approximately 8–12+ articles or when the distribution becomes meaningful.

---

## 6. Article metadata/content model

Use a reusable structured model rather than hardcoding page text directly into components.

Adapt the exact schema to the website stack, but retain equivalent fields.

Example:

```yaml
slug: ai-for-africa-designed-for-context-not-just-translated
title: AI for Africa Should Be Designed for Context, Not Just Translated
subtitle: "..."
excerpt: "..."
category: AI & Africa
tags:
  - AI in Africa
  - Product Design
  - Localization
  - Context
publishedAt: 2026-XX-XX
updatedAt: null
readingTime: 8 min
authors:
  - id: ceo
featured: true
hero:
  type: illustration
  src: /images/insights/...
  alt: "..."
seo:
  title: "..."
  description: "..."
  canonical: "..."
  ogImage: "..."
relatedInsights:
  - ...
```

The implementation can use Markdown, MDX, CMS objects, JSON, TypeScript content collections, or the architecture already selected by the main website project.

Do not introduce an unnecessary new content framework if the project already has one.

---

## 7. Tags

Tags should describe real themes and allow future cross-linking.

Keep tags precise. Avoid creating a unique tag for every article.

Initial vocabulary may include:

- AI in Africa
- African Markets
- Product Design
- Localization
- Context
- Education
- EdTech
- Learning
- Students
- Teachers
- Product Engineering
- Connectivity
- Mobile
- Infrastructure
- AI Products
- Generative AI
- AI UX
- Reliability
- ImaginAi
- Product Development
- Field Research

Target approximately **3–5 tags per article**.

Category ≠ tag.

---

## 8. Visual system for Insights

Codex has creative freedom to select the most appropriate visual treatment for each article while remaining consistent with the website's global visual direction and the existing SynapsAi design system.

### 8.1 Allowed visual forms

Depending on the subject, generate or create:

- editorial illustrations;
- custom diagrams;
- data visualizations;
- charts;
- UI fragments or screenshots;
- product architecture visuals;
- comparison matrices;
- typographic compositions;
- abstract editorial graphics;
- contextual photography when appropriate and legally usable;
- SVG diagrams / CSS compositions when more effective than raster art.

### 8.2 Visual principles

Visuals must:

- explain or reinforce the content;
- feel intentional and premium;
- use the SynapsAi visual language rather than generic AI imagery;
- work in responsive layouts;
- include meaningful alt text;
- be optimized for web performance;
- avoid excessive decorative complexity.

### 8.3 Avoid generic AI imagery

Avoid default visual clichés such as:

- humanoid robots;
- glowing synthetic brains;
- random neural-network meshes;
- cyberpunk African maps;
- floating binary code;
- generic “futuristic Africa” imagery;
- hands touching holograms;
- stock-photo-style corporate AI visuals.

If using a conceptual illustration, develop a clear visual metaphor specific to the article.

### 8.4 Graphs and charts

Do not generate a chart merely to make an article look analytical.

Every chart must be based on actual sourced or validated data.

If data is insufficient, use a conceptual diagram instead.

Clearly label:

- source;
- unit;
- timeframe;
- sample / scope where relevant.

### 8.5 Article visual identity

Each article should have its own hero art direction while still feeling part of one editorial family.

The five first articles should not all use the same card/gradient/illustration pattern.

---

# 9. The first five Insights

---

## Insight 01 — Featured launch article

### Title

**AI for Africa Should Be Designed for Context, Not Just Translated**

### Suggested slug

`/insights/ai-for-africa-designed-for-context-not-just-translated`

### Category

`AI & Africa`

### Suggested tags

- AI in Africa
- Product Design
- Localization
- African Markets
- Context

### Author

CEO of SynapsAi.

CTO not required unless a substantial technical section is introduced.

### Editorial role

This is the **featured launch Insight**.

It should establish SynapsAi's editorial voice and one of its central convictions: local relevance is a product design problem, not simply a translation problem.

### Core thesis

An AI product does not become useful in an African context simply because its interface or outputs are translated into local or colonial languages. Context affects product assumptions, device conditions, network quality, cost sensitivity, workflows, education systems, trust, examples, support models, and interaction design.

### Critical nuance

Do not write about “Africa” as if it were a homogeneous market.

Explicitly acknowledge differences between countries, languages, urban/rural contexts, infrastructure, purchasing power, education systems, and user segments.

### Suggested structure

```text
Opening tension
    Translation is visible. Context is deeper.

1. Localization is necessary — but insufficient
    language
    terminology
    cultural references

2. Context changes the product itself
    connectivity
    devices
    cost
    payments
    workflows
    trust

3. Designing around constraints can improve the product
    progressive loading
    low-bandwidth choices
    clear interfaces
    asynchronous flows

4. Local behavior is product data
    observation
    feedback
    real workflows

5. From adaptation to product strategy
    what builders should ask before entering a market

Conclusion
    design for context from the beginning
```

### Visual opportunities

Codex may choose among:

- a layered diagram: `Translation → Localization → Context → Product`; 
- a visual showing how context influences several product layers;
- an editorial illustration built around “surface translation vs underlying system”; 
- a framework graphic listing contextual dimensions.

### Desired outcome

The reader should leave with a sharper definition of what “local AI” or “AI designed for Africa” should mean in product practice.

---

## Insight 02

### Title

**What We Learn When AI Meets the African Classroom**

### Suggested slug

`/insights/what-we-learn-when-ai-meets-the-african-classroom`

### Category

`Field Notes`

### Suggested tags

- Education
- AI in Africa
- EdTech
- Students
- Teachers

### Author

CEO of SynapsAi.

CTO may be added only if the article includes meaningful technical product lessons.

### Editorial role

A field-oriented article rooted in lessons from building and deploying ImaginAi and interacting with learners, teachers, educational stakeholders, or institutions.

### Core thesis

The classroom changes the meaning of an AI feature. What looks useful in a product demo must survive actual pedagogical routines, learner habits, teacher expectations, school constraints, connectivity, assessment practices, and trust.

### Source discipline

Only describe SynapsAi field observations that can be supported by existing company experience or project sources.

Do not fabricate classroom interviews, quotations, school counts, research samples, teacher feedback, or outcomes.

When internal evidence is unavailable, frame a statement as an observation, hypothesis, or external research finding rather than pretending SynapsAi measured it.

### Suggested structure

```text
Opening
    AI behaves differently once it enters a real learning environment.

1. A learner is not simply a chatbot user
2. Convenience is not the same as learning
3. Teachers need visibility, not replacement
4. Educational UX has a different definition of friction
5. Connectivity and device constraints influence pedagogy
6. What these lessons changed in how we think about ImaginAi

Conclusion
    education gives AI a stricter test: usefulness must translate into learning.
```

### Visual opportunities

- classroom/product ecosystem diagram;
- learner ↔ AI ↔ teacher interaction model;
- selected ImaginAi interface screenshots if current and relevant;
- illustrated learning journey;
- contextual photography only when legitimately available.

### Desired outcome

Show that SynapsAi's educational product thinking is informed by operational reality, not only model capability.

---

## Insight 03

### Title

**Building AI Products for Imperfect Connectivity**

### Suggested slug

`/insights/building-ai-products-for-imperfect-connectivity`

### Category

`Product & Engineering`

### Suggested tags

- Product Engineering
- Connectivity
- Mobile
- Infrastructure
- AI Products

### Authors

Recommended co-authorship:

- CEO, SynapsAi
- CTO, SynapsAi

### Editorial role

This should be the most engineering-oriented of the first five articles.

### Core thesis

AI product quality cannot be defined only by model intelligence. In markets where bandwidth, latency, device performance, data cost, interrupted sessions, and payment/access conditions vary, reliability and graceful degradation are part of intelligence from the user's perspective.

### Important instruction

Do not expose confidential architecture, security-sensitive information, API secrets, vendor contracts, internal credentials, or proprietary implementation details that should remain private.

### Suggested structure

```text
Opening
    A model can respond in milliseconds in a benchmark and still feel unusable to a real user.

1. Connectivity is a product condition, not an edge case
2. Latency changes user behavior
3. Design the failure path before the ideal path
4. Reduce what must travel across the network
5. Make expensive interactions visible and intentional
6. Preserve continuity when sessions break
7. What imperfect connectivity teaches us about better AI UX

Optional technical framework
    latency
    payload
    retries
    caching
    state
    fallback
    perceived performance

Conclusion
    resilient design often benefits every user, not only users on weak networks.
```

### Visual opportunities

Strong candidate for custom technical visuals:

- request lifecycle diagram;
- “ideal network vs real network” flow;
- graceful degradation decision tree;
- latency stack diagram;
- conceptual architecture illustration;
- small table of engineering/product responses to connectivity conditions.

Only use charts if actual data exists.

### Desired outcome

Establish technical credibility while remaining readable for product leaders, founders, engineers, and enterprise buyers.

---

## Insight 04

### Title

**Beyond the AI Demo: What It Takes to Build Useful AI Products**

### Suggested slug

`/insights/beyond-the-ai-demo-building-useful-ai-products`

### Category

`Perspectives`

or `Product & Engineering` if the final article becomes substantially technical.

Choose one category based on final content, not both.

### Suggested tags

- AI Products
- Product Design
- Generative AI
- AI UX
- Reliability

### Author

CEO of SynapsAi.

CTO can co-author if engineering reliability becomes a major section.

### Editorial role

A B2B-facing strategic article explaining the gap between an impressive prototype and a product that can create durable user or business value.

### Core thesis

A compelling model demonstration proves capability, not product-market usefulness. Production AI requires workflow integration, clear UX, data boundaries, reliability, economics, monitoring, feedback, user trust, and a measurable definition of success.

### Suggested structure

```text
Opening
    The easiest part of many AI products is the first impressive minute.

1. A demo optimizes for possibility
2. A product must optimize for repeatable value
3. The workflow matters more than the chat box
4. Reliability is experienced through UX
5. Cost is part of the product architecture
6. Human oversight must be designed, not assumed
7. Measure outcomes, not AI activity

Framework
    Capability
    Context
    Workflow
    Reliability
    Economics
    Trust
    Measurement

Conclusion
    useful AI is a system, not a model wrapped in an interface.
```

### Visual opportunities

- `Demo → Product → System` maturity model;
- seven-layer AI product framework;
- comparison diagram: prototype vs production product;
- workflow illustration;
- simple product stack diagram.

### Desired outcome

Help potential partners understand the type of thinking SynapsAi brings to AI product work without turning the article into a direct sales pitch.

---

## Insight 05

### Title

**Inside ImaginAi: Designing an AI Learning System Around How Students Actually Study**

### Suggested slug

`/insights/inside-imaginai-designing-around-how-students-study`

### Category

`Inside SynapsAi`

### Suggested tags

- ImaginAi
- Education
- Product Development
- AI UX
- Learning

### Authors

Recommended:

- CEO, SynapsAi
- CTO, SynapsAi when technical/product-system explanations justify it.

### Editorial role

The first “how we built / how we think about the product” article.

It must **not** read like an ImaginAi landing page.

The goal is to expose product thinking, constraints, trade-offs, and selected lessons.

### Core thesis

Students do not study through one continuous AI conversation. They move between explanations, documents, exercises, revision, exams, teacher instructions, short sessions, and moments of confusion. ImaginAi should therefore be understood as a learning system composed around these behaviors, not merely as an educational chatbot.

### Product facts

Use only current, validated features from the actual ImaginAi product/repository/source material.

Where useful, current known product areas may include:

- AI text interaction;
- voice interaction;
- exam / past-paper workflows;
- learning plans;
- quizzes and exercises;
- document analysis;
- classroom / teacher-connected experiences;
- learner progress;
- relevant educational content formats.

Codex must confirm feature naming and current availability from the project's latest approved sources before publishing.

Do not present planned features as live unless they are explicitly marked as upcoming.

### Suggested structure

```text
Opening
    Students rarely learn in one straight line.

1. Start from the study session, not from the model
2. Different questions need different learning modes
3. Documents change the context of an answer
4. Practice matters as much as explanation
5. Teachers remain part of the system
6. Progress should connect isolated learning moments
7. The product is still learning from its users

Optional section
    A simplified ImaginAi learning loop

Conclusion
    the goal is not more AI interaction; it is better learning continuity.
```

### Visual opportunities

This should be the most product-rich article:

- actual ImaginAi UI screenshots;
- learning-loop diagram;
- learner journey;
- feature relationships rather than feature grid;
- product architecture diagram at conceptual level;
- before/after or flow sequences;
- illustrations using existing approved ImaginAi visual identity where appropriate.

Do not invent an alternate ImaginAi mascot or visual identity.

### Desired outcome

Show the reasoning behind the product rather than advertise its feature list.

---

# 10. Recommended publishing order

Use this order unless implementation constraints justify otherwise:

1. **AI for Africa Should Be Designed for Context, Not Just Translated** — featured article
2. **Inside ImaginAi: Designing an AI Learning System Around How Students Actually Study**
3. **Building AI Products for Imperfect Connectivity**
4. **Beyond the AI Demo: What It Takes to Build Useful AI Products**
5. **What We Learn When AI Meets the African Classroom**

The order intentionally alternates perspective, product, engineering, business thinking, and field learning.

All five may be generated during the same implementation phase, but the `/insights` page should visually emphasize Insight 01 as the initial featured article.

---

# 11. Article writing workflow for Codex

For **each article**, follow this sequence.

## Step 1 — Research

Before drafting:

1. identify the thesis;
2. list the claims that require evidence;
3. find credible sources;
4. check whether relevant internal SynapsAi evidence already exists in the repository/project context;
5. distinguish verified fact from interpretation;
6. discard weak, unverifiable, outdated, or irrelevant claims.

Research should not become a literature dump. Use only evidence that materially improves the article.

## Step 2 — Article brief

Create internally or as a working file:

```text
Audience
Primary question
Thesis
3–5 key takeaways
Main evidence
SynapsAi-specific relevance
Visual opportunities
Related site page
Potential CTA
```

## Step 3 — Outline

Build the argument before writing prose.

The outline should contain:

- opening tension;
- sequence of sections;
- evidence allocation;
- visual placement;
- conclusion.

## Step 4 — Draft English source version

Write the complete English article.

Target quality is more important than a fixed word count.

As a loose guide:

- perspective pieces: ~1,200–2,000 words;
- product/engineering pieces: ~1,500–2,500 words;
- field notes: ~1,200–2,000 words;
- data/research articles may exceed this when evidence requires it.

Do not pad an article to hit a word count.

## Step 5 — Visual production

Choose the visual language after the argument is clear.

Create/generate the hero and any supporting visual assets required for comprehension.

Prefer fewer strong visuals over many filler visuals.

## Step 6 — Fact and consistency pass

Verify:

- claims;
- numbers;
- dates;
- source links;
- product feature names;
- author names and roles;
- terminology;
- internal links;
- image captions;
- accessibility text.

## Step 7 — SEO and metadata

Create:

- slug;
- SEO title;
- meta description;
- Open Graph image;
- canonical URL;
- Article structured data where supported;
- author structured data where appropriate;
- alt text;
- social preview.

SEO must not distort editorial quality.

## Step 8 — French translation

If bilingual Insights are part of the current implementation phase, translate only after the English source article is finalized.

French must be natural editorial French rather than literal sentence-by-sentence translation.

If the multilingual routing architecture is not yet ready, keep English as the canonical source and prepare the content model for later translation without blocking V1.

---

# 12. Citation and source presentation

The articles should have a clean editorial reading experience.

Use the site's selected source/citation pattern consistently.

Possible patterns:

- inline linked source names;
- numbered footnotes;
- endnotes;
- Sources section for research-heavy articles.

Do not overload every paragraph with visible citations if a cleaner academically responsible system is available.

For charts and data graphics, source attribution should be directly available near the graphic.

Do not cite low-quality SEO blogs when a primary source exists.

---

# 13. Related-content system

Each article should support 2–3 related Insights when enough content exists.

Use semantic relationships rather than only chronology.

Examples:

- Insight 01 ↔ Insight 03 because connectivity is one dimension of context.
- Insight 01 ↔ Insight 02 because education exposes context-specific product realities.
- Insight 04 ↔ Insight 03 because production AI requires engineering reliability.
- Insight 05 ↔ Insight 02 because both concern AI in real learning behavior.
- Insight 05 ↔ Insight 04 because ImaginAi can illustrate the transition from feature/demo to product system.

At launch, where an article does not yet have three relevant siblings, show fewer items rather than filler.

---

# 14. Cross-linking with the main website

Insights should strengthen other pages rather than duplicate them.

Potential relationships:

```text
Home
    selected Insight only if design requires editorial proof

Products / ImaginAi
    → Inside ImaginAi
    → Classroom field notes where relevant

Solutions
    → Beyond the AI Demo
    → AI for Africa / context article

Work
    → relevant engineering or product Insights

Company
    → Perspectives / AI & Africa

Insights
    → contextual links back to Products / Solutions / Work
```

Do not repeat entire product or company page copy inside articles.

---

# 15. Responsive and accessibility requirements

All Insight templates and visuals must be responsive.

Minimum expectations:

- readable line length;
- scalable headings;
- no overflow from charts/diagrams;
- keyboard accessibility;
- semantic heading hierarchy;
- sufficient contrast;
- descriptive link labels;
- meaningful alt text;
- decorative images marked appropriately;
- captions where context is necessary;
- reduced-motion consideration for animated visuals;
- data graphics understandable beyond color alone.

Large editorial visuals should degrade gracefully on mobile rather than simply shrink until unreadable.

---

# 16. Performance requirements

Long-form editorial pages must remain performant.

- optimize hero imagery;
- use modern image formats where stack permits;
- define responsive image sizes;
- lazy-load below-the-fold media;
- avoid heavy animation libraries solely for article decoration;
- use SVG for diagrams where appropriate;
- avoid rendering huge charting libraries for a simple static chart;
- maintain stable layout during media loading.

---

# 17. Editorial UI components to create/reuse

Codex should build reusable components rather than custom markup per article when the stack supports it.

Candidate components:

```text
<InsightHero />
<InsightMeta />
<AuthorList />
<TagList />
<KeyTakeaways />
<ArticleBody />
<Figure />
<DataChart />
<Diagram />
<PullQuote />
<StatCallout />
<ArticleTable />
<SourceNote />
<MethodologyNote />
<AuthorBio />
<RelatedInsights />
<InsightCard />
<FeaturedInsightCard />
```

Do not build components that are used once unless they genuinely simplify the implementation.

---

# 18. Insights index page `/insights`

Recommended V1 layout:

```text
GLOBAL NAV

INSIGHTS HERO
    Eyebrow optional
    H1: Insights
    Short editorial statement

FEATURED ARTICLE
    Insight 01
    Strong visual
    Category
    title
    excerpt
    date / reading time

ALL INSIGHTS
    4 remaining articles
    editorial grid/list

OPTIONAL CLOSING SECTION
    contextual company/work CTA only if consistent with overall site architecture

FOOTER
```

The page should feel curated rather than like a generic WordPress blog archive.

Do not display empty categories, fake pagination, fake subscriber counts, fake “popular” ranking, fake view counts, or fabricated engagement metrics.

---

# 19. Article card rules

Cards should expose only enough metadata to support a decision to read.

Recommended:

```text
visual
category
headline
short excerpt
publication date · reading time
```

Author name is optional on listing cards; it is required on the article page.

Avoid cards containing too much metadata simultaneously.

---

# 20. Design inspiration boundaries

Use Cohere and Linear as references for principles such as:

- editorial confidence;
- strong typography;
- generous spacing;
- clear metadata;
- high-quality custom visuals;
- restrained UI chrome;
- article-specific visual storytelling;
- thoughtful reading width;
- strong opening hierarchy;
- meaningful data/diagram integration;
- related-content continuity.

Do **not** reproduce:

- Cohere's exact layout;
- Linear's exact article components;
- proprietary illustrations;
- animations;
- copy;
- typography arrangements that amount to cloning;
- brand colors or visual assets from reference companies.

The final result must look like **SynapsAi**, not “Cohere with a SynapsAi logo.”

---

# 21. Anti-fabrication requirements

Never create fictional:

- SynapsAi customers;
- testimonials;
- research participants;
- interviews;
- classroom quotes;
- study samples;
- product adoption numbers;
- performance improvements;
- benchmark results;
- partnership claims;
- author credentials;
- deployment geographies;
- citations;
- awards;
- datasets;
- screenshots pretending to be live product interfaces.

If a claim cannot be validated, remove it, qualify it, or replace it with a supported external reference.

---

# 22. Definition of done for each article

An article is complete only when all relevant items below are done:

- [ ] final English title
- [ ] approved slug
- [ ] category
- [ ] 3–5 useful tags
- [ ] author(s) resolved from approved data
- [ ] publication metadata
- [ ] standfirst
- [ ] full English article
- [ ] evidence/source verification
- [ ] Key takeaways where useful
- [ ] hero visual
- [ ] inline visual(s) where useful
- [ ] diagrams/charts based on valid inputs
- [ ] captions and source labels
- [ ] alt text
- [ ] SEO title
- [ ] meta description
- [ ] Open Graph image
- [ ] structured data if supported
- [ ] contextual internal links
- [ ] related articles
- [ ] contextual CTA if justified
- [ ] responsive validation
- [ ] accessibility validation
- [ ] performance validation
- [ ] no fabricated facts/data
- [ ] French version only if multilingual article publishing is included in current scope

---

# 23. Final Codex instruction

Treat this brief as the editorial implementation specification for **SynapsAi Insights V1**.

You have creative freedom in article composition, visuals, diagrams, charts, and implementation details, provided that:

1. the central thesis of each article is preserved;
2. all factual claims are responsibly sourced;
3. SynapsAi-specific facts are validated against approved project sources;
4. no fictional data or social proof is introduced;
5. English remains the canonical source language;
6. the author is the current SynapsAi CEO by default, with CTO co-authorship where technically justified;
7. the visual design follows the SynapsAi website design system and uses Cohere/Linear only as directional references;
8. article visuals serve comprehension, not decoration;
9. the article template remains reusable for future Insights;
10. the `/insights` index remains intentionally curated and does not simulate a mature archive that does not yet exist.

The goal is not simply to publish five pieces of content.

The goal is to establish a **repeatable SynapsAi editorial system** that can scale into research notes, product stories, engineering articles, field observations, strategic perspectives, and future data-driven publications.

---

## Reference URLs

- Cohere Blog: https://cohere.com/blog
- Cohere reference article — Automation's Early Footprint: https://cohere.com/blog/automations-early-footprint
- Linear Now: https://linear.app/now
- Linear: https://linear.app/
- Cohere: https://cohere.com/

