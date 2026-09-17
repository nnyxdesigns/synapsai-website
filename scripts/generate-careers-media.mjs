import fs from 'node:fs/promises';
import sharp from 'sharp';
const logo = await sharp('public/media/brand/synapsai-logo.svg')
  .resize({ width: 260 })
  .png()
  .toBuffer();
const symbol = await sharp('public/media/brand/synapsai-symbol.svg')
  .resize({ width: 160, height: 160, fit: 'contain' })
  .png()
  .toBuffer();
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#080d0b"/><g fill="none" stroke="#3b4b45"><path d="m800 370 160-85 160 85v25l-160 85-160-85Z"/><path d="m800 330 160-85 160 85v25l-160 85-160-85Z"/><path d="m800 290 160-85 160 85v25l-160 85-160-85Z"/></g><path d="M64 155h1072M64 550h1072" stroke="#253c33"/><g font-family="Archivo,Arial,sans-serif"><text x="64" y="240" fill="#5effd9" font-size="19" letter-spacing="3">CAREERS AT SYNAPSAI</text><text x="64" y="330" fill="#f4faf7" font-size="64" font-weight="600">Build something</text><text x="64" y="407" fill="#a1a6af" font-size="64" font-weight="600">that matters.</text><text x="64" y="594" fill="#5effd9" font-size="22">synapsai.co</text></g></svg>`;
await sharp(Buffer.from(svg))
  .composite([
    { input: logo, left: 64, top: 62 },
    { input: symbol, left: 880, top: 176 },
  ])
  .png()
  .toFile('public/media/og/careers.png');
const path = 'public/media/manifest.json';
const manifest = JSON.parse(await fs.readFile(path, 'utf8'));
if (!manifest.assets.some((a) => a.file === 'og/careers.png'))
  manifest.assets.push({
    file: 'og/careers.png',
    source:
      'Original SVG composition using the owner-supplied SynapsAi logo and symbol; careers page metadata.',
    kind: 'original-social-card',
    status: 'local-review',
    use: 'English Careers Open Graph and Twitter image; 1200x630. No stock people or invented workplace.',
  });
await fs.writeFile(path, JSON.stringify(manifest, null, 2) + '\n');
