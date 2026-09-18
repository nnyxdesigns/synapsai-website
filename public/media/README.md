# Site media

All site assets live here and are served from `/media/...`.

- `brand/`: official source logos. `synapsai-original.svg` comes from the current corporate website and retains its original white lettering and mint mark on the dark canvas.
- `products/`: genuine product captures and compositions. `imaginai-mobile.png` comes from the current corporate website.
- `generated/`: AI-generated illustrations and product-presentation concepts. The ImaginAi mobile concepts use an owner-supplied real interface as reference and are labelled on-page; never present them as evidence of a released device, a real user or measured results.
- `photography/`: reserved for approved real company/team photography.
- `team/`: the three official cofounder portraits from synapsai.co. Grayscale presentation is CSS only; original files are retained.
- `insights/`: original conceptual editorial covers, mobile variants and source social compositions. They do not depict product UI, user data or measured outcomes.
- `og/`: page and article-specific social previews derived from approved brand assets and the conceptual editorial compositions.
- `fonts/`: locally hosted Inter Variable and its license, plus the previous Manrope assets (not loaded by the dark theme).

Record source, review date, intended use, and approval state in `manifest.json`. Keep source files; use Next Image for responsive delivery of raster images. Generated media must include the prompt and generation date in its manifest entry. Never include private or unapproved media in this public directory.

Technical diagrams are native SVG components in `src/components/visuals.tsx`; they illustrate concepts and do not simulate product screenshots.
