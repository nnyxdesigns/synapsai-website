# Changelog

All notable changes to the SynapsAi website are documented here.

## [0.3.0] - 2026-09-21

### Added

- A four-second SynapsAi boot screen for full homepage loads, while internal navigation remains immediate.
- A concentric energy-wave effect in which the background points pulse from the logo and loading bar toward the viewport edges.
- A synchronized 1.5-second rhythm for the point wave and progress indicator.
- Direct browser coverage for loader duration, repeated homepage loads, internal navigation and reduced-motion behavior.

### Changed

- Replaced 1,215 animated HTML points with a CSS base grid and one canvas overlay to reduce DOM and hydration cost.
- Decoupled the four-second loader deadline from the page-wide `load` event so large homepage media cannot extend the sequence.
- Updated production tests to follow the current editorial policy: five published English articles are public, while five review articles stay excluded.
- Bumped the application version from `0.2.0` to `0.3.0`.

### Verification and deployment

- Production build, ESLint, TypeScript, SEO and scoped formatting checks passed.
- All 44 production Playwright tests passed; the loader timing scenario also passed directly on `https://synapsai.co`.
- Firebase Hosting version `27733207b84d1b39` was released as `1789999584940000` on site `synpasaico`.

## [0.2.3] - 2026-09-21

### Added

- A three-column “Made for the real world” question grid with generated technical concept visuals.
- A mechanical glass-and-hologram visual for the AI & Automation card, recorded in the media provenance manifest.

### Changed

- Removed the legacy orbit schema from “The way we think” and the compact recognition row above Insights.
- Added two-column and single-column responsive states for the real-world cards.
- Protected card media and copy widths between 750px and 850px so text remains inside the first card.

### Verification and deployment

- Responsive checks covered 390px, 751px, 800px, 849px, 1024px and 1440px.
- The production build and public route smoke checks passed before Firebase deployment.

## [0.2.2] - 2026-09-21

### Changed

- Extended the English homepage hero image through the right container gutter while clipping the intentional full-width treatment to prevent horizontal scrolling.
- Removed the hero scroll prompt and concept caption.
- Reduced desktop and mobile hero heights after removing those controls.

### Verification and deployment

- Production build and SEO checks passed, followed by responsive homepage checks at 390px and 1440px.
- Firebase Hosting version `53e77be691a89b1e` was released as `1789982221277000`.

## [0.2.1] - 2026-09-19

### Added

- Generated, explicitly labelled concept imagery for the English homepage hero, learning context and product-system narrative.

### Changed

- Integrated the hero image as a full background with a dark copy-protection gradient.
- Updated the proof strip to `+145K users impacted` and Mastercard Foundation GHSS-YIC 2026 recognition.
- Added provisional Microsoft for Startups wording pending supporting evidence.

### Verification and deployment

- Production build, SEO, responsive homepage and media-loading checks passed.
- Firebase Hosting version `f3bf61dcf2120e83` was released as `1789825344965000`.

## [0.2.0] - 2026-09-18

### Added

- Five additional English Insights articles, kept in `review` status for local and staging editorial review.
- A category and keyword browser for Insights, with keyboard-accessible tabs.
- A Press category populated with the eight owner-provided YouTube videos and local thumbnails.
- A featured Insights article layout, three-column article grid, responsive Press cards, and an Archive list for older entries.
- Conceptual article artwork, mobile variants, and social preview images for the new editorial content.
- The ImaginAi mobile product page with Linear-inspired hero, download panel, QR placeholder, and interactive Study Tools mockups.
- Documentation covering editorial status, archive behavior, media provenance, QA, and deployment readiness.

### Changed

- Expanded the English Insights registry from the initial five articles to ten entries.
- Kept only published entries eligible for the production collection; review entries remain available for staging review.
- Added search, category filtering, Press preview and "View all" behavior to the Insights index.
- Added responsive and reduced-motion behavior to the ImaginAi Study Tools interaction.

### Verification

- Production build, lint, TypeScript checks and the relevant Playwright suites passed for this release.
- The site remains configured for local/staging review; no production deployment is implied by this version tag.

## [0.1.0] - 2026-09-16

- Initial Next.js site baseline.
