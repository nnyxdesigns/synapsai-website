# SynapsAi Website 2026 --- SEO, Discoverability & Social Sharing Requirements

> **Status:** Implementation requirements for Codex\
> **Scope:** Entire SynapsAi corporate website\
> **Primary language:** English\
> **Secondary language:** French\
> **Objective:** Maximize legitimate organic discoverability and link
> presentation without keyword stuffing, fabricated content, doorway
> pages, cloaking, or other practices that conflict with search-engine
> guidelines.

------------------------------------------------------------------------

## 1. SEO principle

SEO must be treated as part of the website architecture, content system,
performance strategy, accessibility layer, and publishing workflow ---
**not as a collection of meta tags added at the end**.

The site must make it easy for search engines and AI/search systems to
understand:

1.  **Who SynapsAi is**
2.  **What SynapsAi builds**
3.  **Which problems SynapsAi solves**
4.  **Who its products are for**
5.  **What ImaginAi and ImaginAi Prof are**
6.  **How the two products relate without being confused**
7.  **What evidence supports SynapsAi's expertise, work, recognition,
    and impact**
8.  **Which page is the authoritative page for each subject**

The implementation must follow current search-engine best practices,
particularly Google Search Central guidance, while keeping the website
useful and natural for humans first.

------------------------------------------------------------------------

# 2. Core positioning to preserve in search

Search engines must not interpret SynapsAi as merely a generic "AI
company" or as synonymous with ImaginAi.

The information hierarchy is:

-   **SynapsAi** = company / technology organization / owner and builder
    of products and AI systems.
-   **ImaginAi** = mobile learning application primarily for secondary
    and higher-education learners.
-   **ImaginAi Prof** = web application for teachers and instructors.
-   **ImaginAi ecosystem** = interaction between learner, educator, and
    educational-structure experiences.
-   **imaginai.io** = dedicated product ecosystem destination.
-   **synapsai.co** = corporate authority for SynapsAi, its expertise,
    products, work, insights, company information, impact, and
    recognition.

SEO copy and metadata must preserve these distinctions.

Do **not** collapse the positioning into generic phrases such as:

> "SynapsAi is an AI education platform for students and teachers."

That wording removes the company/product hierarchy and underrepresents
SynapsAi.

------------------------------------------------------------------------

# 3. Search intent architecture

Each indexable page must have a clearly identifiable **primary search
intent**.

Avoid multiple pages competing for the same query.

Example mapping:

  -----------------------------------------------------------------------
  Page type                           Primary intent
  ----------------------------------- -----------------------------------
  Home                                SynapsAi / AI technology company /
                                      company discovery

  Products                            SynapsAi products

  ImaginAi product page               AI learning application / learner
                                      experience

  ImaginAi Prof product page          AI tools/platform for teachers and
                                      instructors

  Solutions / Education               AI for education / educational
                                      organizations

  Work / ImaginAi ecosystem           SynapsAi product design + AI
                                      engineering case study

  Company                             SynapsAi company

  Impact / Recognition                SynapsAi impact, awards, milestones

  Insights                            AI/product/education/engineering
                                      thought leadership

  Individual insight                  Specific informational query
                                      addressed by that article
  -----------------------------------------------------------------------

Codex must maintain a **keyword/query map** so that each important
intent has one canonical destination.

------------------------------------------------------------------------

# 4. On-page SEO requirements

Every indexable page must include:

-   one unique `<title>`;
-   one unique meta description;
-   one canonical URL;
-   one visible and descriptive `<h1>`;
-   a logical H1 → H2 → H3 heading hierarchy;
-   descriptive page copy that answers the page's intent;
-   useful internal links;
-   descriptive image `alt` attributes where the image conveys
    information;
-   Open Graph metadata;
-   X/Twitter sharing metadata;
-   appropriate structured data where applicable.

## Title tags

Titles must be written for humans and search relevance.

Recommended pattern:

``` text
[Specific page topic] | SynapsAi
```

Examples:

``` text
SynapsAi — Building AI Products for Learning and Work
ImaginAi — AI-Powered Learning for Students | SynapsAi
ImaginAi Prof — AI Tools for Teachers | SynapsAi
Insights on AI, Product & Education | SynapsAi
```

Do not mechanically repeat the same title across pages.

Do not stuff titles with permutations such as:

``` text
AI Company Cameroon | AI Africa | AI Education | AI Software | SynapsAi
```

## Meta descriptions

Write a unique, natural summary for important pages. Treat it as
persuasive search-result copy, **not as a ranking hack**.

It should:

-   accurately represent the page;
-   contain the central subject naturally;
-   make the result understandable without opening it;
-   avoid keyword repetition;
-   avoid unsupported superlatives such as "Africa's #1 AI company."

Search engines may generate a different snippet depending on the query;
this is normal.

------------------------------------------------------------------------

# 5. Semantic HTML and crawlability

Codex must use semantic HTML wherever possible:

``` html
<header>
<nav>
<main>
<article>
<section>
<aside>
<footer>
```

Important navigation and contextual links must be real crawlable links:

``` html
<a href="/products/imaginai">Explore ImaginAi</a>
```

Do not make critical navigation dependent exclusively on JavaScript
click handlers.

Content that is essential to indexing must be present in server-rendered
or reliably rendered HTML. Do not hide core SEO content behind
interactions that crawlers or users cannot readily access.

------------------------------------------------------------------------

# 6. URL architecture

URLs must be:

-   readable;
-   stable;
-   lowercase;
-   concise;
-   descriptive;
-   hyphen-separated where needed;
-   free from unnecessary IDs/query parameters.

Examples:

``` text
/products/imaginai
/products/imaginai-prof
/solutions/education
/work/imaginai-ecosystem
/insights/[article-slug]
/company
/company/impact
```

Once a public URL is indexed, avoid changing it without reason.

If a URL changes:

1.  implement a server-side permanent redirect;
2.  update internal links;
3.  update canonical tags;
4.  update the sitemap;
5.  avoid redirect chains.

------------------------------------------------------------------------

# 7. Canonicalization

Every indexable page should expose the correct self-referencing
canonical unless another canonical destination is intentionally
required.

Example:

``` html
<link rel="canonical" href="https://synapsai.co/products/imaginai">
```

Protocol, hostname, trailing-slash policy, and URL casing must be
consistent site-wide.

Choose one canonical host and redirect all variants to it.

------------------------------------------------------------------------

# 8. English / French international SEO

English is the primary site language. French is secondary.

If equivalent English and French URLs are published, implement
reciprocal `hreflang`.

Example concept:

``` html
<link rel="alternate" hreflang="en" href="https://synapsai.co/products/imaginai">
<link rel="alternate" hreflang="fr" href="https://synapsai.co/fr/products/imaginai">
<link rel="alternate" hreflang="x-default" href="https://synapsai.co/products/imaginai">
```

Requirements:

-   each localized page must identify itself and its counterpart;
-   translations must be meaningful, not low-quality machine variants
    created solely for indexing;
-   the language switcher must use crawlable links;
-   `<html lang="en">` / `<html lang="fr">` must match the actual page;
-   do not automatically redirect users solely based on inferred
    language in a way that prevents access to another locale.

If a French page does not yet exist, do **not** generate an empty/thin
translation just for SEO.

------------------------------------------------------------------------

# 9. robots.txt and indexing rules

Create and validate `/robots.txt`.

It must:

-   allow crawling of public pages and assets required to render them;
-   block only areas that genuinely should not be crawled;
-   reference the XML sitemap.

Example principle:

``` text
User-agent: *
Allow: /

Sitemap: https://synapsai.co/sitemap.xml
```

Do not use `robots.txt` as the mechanism for removing already indexed
sensitive pages.

Non-public, staging, preview, duplicate, search-result, or utility pages
should use the appropriate authentication, status code, canonical, or
`noindex` strategy.

**Staging environments must never be indexable.**

------------------------------------------------------------------------

# 10. XML sitemap

Generate an XML sitemap automatically from canonical, indexable routes.

It must:

-   contain only canonical URLs returning successful responses;
-   exclude redirects;
-   exclude `noindex` pages;
-   exclude staging URLs;
-   exclude duplicates;
-   update when articles or indexable pages are published.

If the site grows enough to require multiple sitemaps, use a sitemap
index.

Submit and monitor it through Google Search Console after deployment.

------------------------------------------------------------------------

# 11. Structured data / Schema.org

Use structured data only where it accurately describes visible content.

Preferred JSON-LD.

Potential schemas:

### Corporate identity

`Organization` on the appropriate corporate context.

Include only verified properties, for example:

-   name;
-   URL;
-   logo;
-   description;
-   `sameAs` for validated official social profiles.

Do not invent awards, founders, partners, locations, social URLs,
reviews, ratings, or other properties.

### Website

Use `WebSite` where appropriate to identify the website.

### Breadcrumbs

Use `BreadcrumbList` on hierarchical internal pages when visible
breadcrumbs or equivalent hierarchy exists.

### Insights

Use `Article` or `BlogPosting` on editorial articles with accurate:

-   headline;
-   author;
-   datePublished;
-   dateModified;
-   image;
-   publisher.

### Other schema

Add other schema types only if:

1.  they match the page's actual content;
2.  the properties are supported by real data;
3.  the markup follows current search-engine eligibility rules.

**Never add structured data solely to try to manufacture a rich
result.**

Validate structured data before production.

------------------------------------------------------------------------

# 12. Entity consistency and Knowledge Graph signals

SynapsAi's identity must remain consistent across:

-   site name;
-   logo;
-   organization schema;
-   About/Company page;
-   footer;
-   social profiles;
-   product ownership language;
-   press/recognition references.

Use the same official company naming consistently.

Where validated, link official social profiles using `sameAs`.

Product pages should make the relationship explicit in human-readable
copy, e.g.:

``` text
ImaginAi is a learning product built by SynapsAi.
```

and

``` text
ImaginAi Prof is the educator platform in the ImaginAi ecosystem, built by SynapsAi.
```

This relationship should be clear without making every paragraph
repetitive.

------------------------------------------------------------------------

# 13. Internal linking

Internal linking must deliberately communicate site hierarchy.

Examples:

-   Home → Products → ImaginAi / ImaginAi Prof
-   Home → Work → ImaginAi ecosystem case study
-   Product pages → relevant Work case study
-   Insights → related product, solution, or technical page when
    contextually relevant
-   Company/Impact → relevant verified case study or announcement
-   Article → related articles

Use descriptive anchor text.

Prefer:

``` text
Explore how ImaginAi Prof supports teachers
```

over:

``` text
Click here
```

Do not create excessive site-wide keyword-rich links.

------------------------------------------------------------------------

# 14. Content quality and E-E-A-T signals

The site must demonstrate expertise through **evidence**, not
self-congratulatory adjectives.

Where appropriate, content should expose:

-   named authors;
-   author role and profile;
-   publication date;
-   meaningful update date;
-   real product screenshots;
-   real case studies;
-   technical diagrams;
-   methodology;
-   verified milestones;
-   awards and distinctions with accurate wording;
-   references/sources where claims require them.

For Insights, the current content strategy identifies the CEO as the
principal author, sometimes featuring the CTO. Preserve accurate
authorship.

Do not fabricate:

-   customers;
-   partners;
-   testimonials;
-   user statistics;
-   awards;
-   media coverage;
-   research;
-   offices;
-   event participation;
-   performance figures.

If evidence is unavailable, omit the claim or flag it for validation.

------------------------------------------------------------------------

# 15. Insight / blog SEO

Every article should have:

``` yaml
title:
slug:
excerpt:
author:
coAuthors:
datePublished:
dateModified:
tags:
category:
seoTitle:
seoDescription:
canonical:
ogImage:
```

Articles should include:

-   a single clear H1;
-   a strong introductory answer/context;
-   descriptive H2/H3 sections;
-   useful original analysis;
-   relevant examples;
-   diagrams, charts, screenshots, or illustrations when they improve
    understanding;
-   contextual internal links;
-   source references when external facts are used;
-   a related-content section.

Avoid arbitrary word-count targets. The article should be as long as
necessary to satisfy the topic properly.

Do not generate large volumes of near-identical articles for keyword
permutations.

------------------------------------------------------------------------

# 16. Image SEO

Every meaningful image must have:

-   explicit width and height or an equivalent aspect-ratio strategy;
-   responsive sizing;
-   an optimized modern format where appropriate;
-   compression;
-   lazy loading when below the fold;
-   a descriptive filename where practical;
-   contextual `alt` text.

Example:

``` html
<img
  src="/images/imaginai-prof-class-dashboard.webp"
  alt="ImaginAi Prof classroom dashboard showing learner progress"
  width="1600"
  height="1000"
  loading="lazy"
/>
```

Decorative images should use empty alt text:

``` html
alt=""
```

Do not fill `alt` attributes with keywords.

The hero/LCP image should **not** be lazily loaded if that harms
rendering performance.

------------------------------------------------------------------------

# 17. Link previews / social sharing cards

This is mandatory.

Every important public page must produce a polished preview when its URL
is shared in social networks, messaging applications, and collaboration
tools.

Implement Open Graph metadata:

``` html
<meta property="og:type" content="website">
<meta property="og:site_name" content="SynapsAi">
<meta property="og:title" content="[Page-specific title]">
<meta property="og:description" content="[Page-specific description]">
<meta property="og:url" content="[Canonical absolute URL]">
<meta property="og:image" content="[Absolute social image URL]">
<meta property="og:image:alt" content="[Meaningful description]">
```

Also implement the corresponding X/Twitter card metadata, preferably a
large-image card when appropriate.

For articles, use article-specific title, description, canonical URL,
author context, and image.

------------------------------------------------------------------------

# 18. Social preview image system

Create a reusable **SynapsAi OG image system** rather than using random
page screenshots.

Recommended target:

``` text
1200 × 630 px
Aspect ratio ≈ 1.91:1
```

Keep essential content away from the extreme edges because platforms may
crop previews.

Each major page should ideally have a dedicated social image.

Minimum required set:

``` text
/og/default
/og/home
/og/imaginai
/og/imaginai-prof
/og/work-imaginai
/og/company
/og/impact
/og/insights
/og/insights/[slug]
```

The system may be generated dynamically if the stack supports it
reliably.

## Visual direction

The preview must feel like a **designed SynapsAi brand asset**, not a
generic SEO banner.

Recommended composition:

-   SynapsAi visual identity;
-   short page-specific headline;
-   strong editorial typography;
-   restrained brand graphics;
-   relevant product UI/visual where useful;
-   sufficient contrast;
-   no tiny body copy;
-   no unnecessary CTA;
-   no fake browser UI unless intentional;
-   no stock-photo aesthetic.

For ImaginAi and ImaginAi Prof, visually preserve the distinction
between the learner mobile product and educator web product.

------------------------------------------------------------------------

# 19. AI-generated OG artwork

Codex is explicitly authorized to create or request an AI-generated
visual for the social preview **when a suitable existing brand asset is
unavailable**.

The generated visual must:

-   follow the website's established art direction;
-   be page-specific;
-   leave sufficient negative space for typography if text is overlaid
    programmatically;
-   avoid generated text inside the illustration itself;
-   avoid fake logos;
-   avoid fake product UI;
-   avoid fake people presented as real SynapsAi employees/customers;
-   avoid invented events, awards, offices, partners, or other false
    evidence;
-   avoid cliché "AI brain + circuit board" imagery unless deliberately
    required by the design language.

### Suggested image-generation prompt structure

``` text
Create a premium editorial technology illustration for SynapsAi,
an AI product and technology company.

Subject: [PAGE SUBJECT]
Concept: [SPECIFIC VISUAL METAPHOR]
Art direction: [REFERENCE THE ACTUAL SYNAPSAI WEBSITE DESIGN SYSTEM]
Composition: wide 1.91:1 social-sharing image, clear focal point,
generous negative space for headline placement, sophisticated lighting,
clean geometric forms, high-end technology brand aesthetic.

Do not generate text, letters, logos, watermarks, fake UI screenshots,
fake awards, fake customers, or fake documentary evidence.
```

Codex should adapt the prompt to the page rather than reuse one generic
image.

If real product UI is available, **prefer composing the authentic UI
into the OG asset** over hallucinating product screens with image
generation.

------------------------------------------------------------------------

# 20. Social preview fallback hierarchy

Use this priority:

1.  page-specific designed OG image;
2.  page-specific composition using authentic product/UI imagery;
3.  page-specific AI-generated editorial illustration;
4.  category-level SynapsAi OG image;
5.  global SynapsAi default OG image.

There must never be a broken `og:image`.

All OG image URLs must be absolute and publicly crawlable.

------------------------------------------------------------------------

# 21. Performance / Core Web Vitals

SEO implementation must not degrade UX.

Prioritize strong Core Web Vitals, especially:

-   LCP;
-   INP;
-   CLS.

Engineering expectations:

-   optimize fonts;
-   avoid layout shifts;
-   reserve media dimensions;
-   minimize unnecessary client-side JavaScript;
-   code-split where appropriate;
-   optimize hero media;
-   cache static assets;
-   use CDN/image optimization where supported;
-   avoid oversized third-party scripts;
-   defer non-critical work;
-   keep animations performant;
-   respect `prefers-reduced-motion`.

Do not sacrifice the site's visual ambition, but make the implementation
technically disciplined.

------------------------------------------------------------------------

# 22. Mobile-first quality

Search and user experience must work exceptionally well on mobile.

Check:

-   typography;
-   tap targets;
-   navigation;
-   hero height;
-   visual cropping;
-   forms;
-   product screenshots;
-   article readability;
-   sticky elements;
-   modals;
-   language switcher;
-   social preview metadata independent of client rendering.

No essential information should exist only in desktop hover states.

------------------------------------------------------------------------

# 23. Accessibility as an SEO-adjacent requirement

Implement:

-   semantic landmarks;
-   keyboard navigation;
-   visible focus states;
-   labels for controls;
-   accessible names;
-   sufficient contrast;
-   logical heading hierarchy;
-   useful alt text;
-   reduced-motion support.

Do not use headings solely to obtain a visual font size.

------------------------------------------------------------------------

# 24. 404, redirects and HTTP behavior

Implement:

-   useful custom 404 page;
-   correct `404` HTTP status;
-   permanent redirects for permanently moved content;
-   no soft-404 behavior;
-   no redirect loops/chains;
-   no indexable error pages.

Removed content should not silently redirect to the homepage unless the
homepage is genuinely the closest replacement.

------------------------------------------------------------------------

# 25. Search Console and webmaster setup

At production launch:

-   verify the canonical production property in Google Search Console;
-   submit the sitemap;
-   inspect major URLs;
-   monitor indexing;
-   monitor Core Web Vitals;
-   review structured-data issues;
-   monitor manual actions/security issues;
-   monitor search queries, pages, countries, and devices.

If Bing Webmaster Tools is part of the deployment workflow, configure it
as well.

Do not expose credentials in the repository.

------------------------------------------------------------------------

# 26. Analytics for SEO learning

Where analytics is enabled, distinguish at minimum:

-   organic landing pages;
-   article traffic;
-   product-page traffic;
-   locale;
-   conversions from organic traffic;
-   CTA interactions;
-   outbound traffic from SynapsAi to ImaginAi destinations.

SEO success must not be reduced to impressions alone.

Relevant business outcomes include qualified discovery, product
exploration, partnership/contact intent, article engagement, and
appropriate traffic to the ImaginAi ecosystem.

------------------------------------------------------------------------

# 27. Technical SEO automated checks

Add build/CI checks where practical.

Flag:

-   missing title;
-   duplicate title;
-   missing H1;
-   multiple accidental H1s;
-   missing canonical;
-   broken internal links;
-   missing OG image;
-   missing OG title/description;
-   images without appropriate alt handling;
-   accidental `noindex`;
-   staging-domain references;
-   sitemap errors;
-   malformed JSON-LD.

The build should fail for critical production SEO regressions where
feasible.

------------------------------------------------------------------------

# 28. Metadata component

Create a reusable SEO/metadata abstraction rather than manually
duplicating tags.

Conceptual API:

``` ts
generateMetadata({
  title,
  description,
  canonical,
  locale,
  alternateLocales,
  ogImage,
  ogType,
  noIndex
})
```

The implementation must follow the framework's native metadata
capabilities when available.

Defaults may exist, but every strategic page should override them with
page-specific content.

------------------------------------------------------------------------

# 29. AI crawler / answer-engine discoverability

Optimize primarily through a technically accessible, semantically clear,
authoritative website --- **not through speculative hacks aimed at
LLMs**.

Priorities:

-   crawlable HTML;
-   clear entity relationships;
-   strong page titles/headings;
-   concise factual descriptions;
-   structured data;
-   original content;
-   visible authorship;
-   source-backed claims;
-   stable URLs;
-   internal linking;
-   explicit product/company relationships.

Any optional AI-specific file or crawler directive must be treated as an
enhancement, not as a substitute for standard SEO. Do not claim that an
unsupported mechanism guarantees inclusion in AI answers.

------------------------------------------------------------------------

# 30. Content integrity rules

Codex must **never create fake SEO evidence**.

Forbidden:

-   fake customer logos;
-   fake testimonials;
-   fake press citations;
-   fake awards;
-   fake review scores;
-   fake case-study metrics;
-   fake partner relationships;
-   fake offices/locations;
-   fake employee profiles;
-   fake dates;
-   fake "trusted by" sections;
-   schema properties that are not supported by the visible, verified
    content.

Placeholders must be explicitly marked as placeholders in development
and must not reach production.

------------------------------------------------------------------------

# 31. SEO acceptance checklist

Before production launch, verify:

-   [ ] All production pages intended for discovery are crawlable.
-   [ ] Staging/previews are not indexable.
-   [ ] One unique, descriptive title per strategic page.
-   [ ] One visible H1 per strategic page.
-   [ ] Unique descriptions for major pages.
-   [ ] Correct canonical on every indexable page.
-   [ ] English/French hreflang correct where both versions exist.
-   [ ] `robots.txt` valid.
-   [ ] XML sitemap valid and production-only.
-   [ ] No broken internal links.
-   [ ] Redirects tested.
-   [ ] Structured data validated.
-   [ ] Organization identity consistent.
-   [ ] Article authorship/date metadata accurate.
-   [ ] Images optimized.
-   [ ] Core Web Vitals reviewed.
-   [ ] Mobile experience reviewed.
-   [ ] Accessibility baseline reviewed.
-   [ ] Open Graph metadata implemented.
-   [ ] X/Twitter card metadata implemented.
-   [ ] OG image exists for every strategic page.
-   [ ] OG images tested for cropping/readability.
-   [ ] Shared links tested on representative platforms.
-   [ ] No fabricated content or structured data.
-   [ ] Search Console configured.
-   [ ] Sitemap submitted.
-   [ ] Analytics does not materially harm performance.

------------------------------------------------------------------------

# 32. Definition of done for each new page

A page is **not finished** when only the UI is finished.

A new public page is finished only when it has:

1.  final or explicitly approved copy;
2.  correct semantic hierarchy;
3.  title;
4.  meta description;
5.  canonical URL;
6.  localization metadata where applicable;
7.  internal links;
8.  optimized images;
9.  structured data if relevant;
10. social-sharing metadata;
11. a valid social preview image or fallback;
12. responsive QA;
13. accessibility QA;
14. performance QA;
15. indexability/noindex decision;
16. inclusion/exclusion in sitemap as appropriate.

------------------------------------------------------------------------

# 33. Final instruction to Codex

Treat SEO, social previews, semantic structure, localization,
performance, and content integrity as **release requirements**.

Do not optimize for a numerical "SEO score" at the expense of users.

The target is:

> **Maximum legitimate discoverability through technical quality, strong
> information architecture, useful original content, clear entity
> positioning, high performance, and trustworthy evidence.**

When an SEO technique conflicts with clarity, accessibility, factual
integrity, or current search-engine guidelines, choose the user-safe and
standards-compliant implementation.

For every new route added later, automatically apply this SEO
specification unless a documented project decision explicitly overrides
it.
