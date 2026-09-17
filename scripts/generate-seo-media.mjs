import fs from 'node:fs/promises';
import sharp from 'sharp';
const root = 'public/media';
const pages = JSON.parse(await fs.readFile('src/lib/seo-pages.json', 'utf8'));
const escape = (s) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const logo = await sharp(`${root}/brand/synapsai-logo.svg`).resize({ width: 270 }).png().toBuffer();
const symbol = await sharp(`${root}/brand/synapsai-symbol.svg`)
  .resize({ width: 250, height: 250, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();
await fs.mkdir(`${root}/og`, { recursive: true });
for (const entry of [
  { image: 'default', headline: 'SynapsAi.\nIntelligent technology.' },
  ...Object.values(pages),
]) {
  const product =
    entry.image === 'imaginai'
      ? 'imaginai-mobile-hand'
      : entry.image === 'imaginai-prof'
        ? 'imaginai-prof-devices'
        : null;
  const art = product
    ? await sharp(`${root}/products/${product}.webp`)
        .resize({
          width: 380,
          height: 350,
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toBuffer()
    : symbol;
  const lines = entry.headline.split('\n');
  const background = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#080d0b"/><path d="M64 160H1136M64 550H1136" stroke="#253c33"/><circle cx="998" cy="365" r="230" fill="#0b1512"/>${lines.map((line, i) => `<text x="64" y="${280 + i * 76}" fill="#f4faf7" font-family="Archivo,Arial,sans-serif" font-weight="600" font-size="${product ? 47 : 52}">${escape(line)}</text>`).join('')}<text x="64" y="596" fill="#5effd9" font-family="Arial,sans-serif" font-size="22">synapsai.co</text></svg>`;
  await sharp(Buffer.from(background))
    .composite([
      { input: logo, left: 64, top: 64 },
      { input: art, left: product ? 775 : 895, top: product ? 180 : 238 },
    ])
    .png()
    .toFile(`${root}/og/${entry.image}.png`);
}
for (const size of [180, 192, 512]) {
  const mark = await sharp(`${root}/brand/synapsai-symbol.svg`)
    .resize({ width: Math.round(size * 0.72), height: Math.round(size * 0.72), fit: 'inside' })
    .png()
    .toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: '#080d0b' } })
    .composite([{ input: mark, gravity: 'centre' }])
    .png()
    .toFile(`${root}/brand/icon-${size}.png`);
}
// Refresh article cards with the supplied wordmark, keeping their original headlines.
for (const file of (await fs.readdir(`${root}/insights`)).filter((file) =>
  file.endsWith('-og.png'),
)) {
  const input = await fs.readFile(`${root}/insights/${file}`);
  const strip = Buffer.from(
    '<svg width="1200" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="120" fill="#0e1015"/></svg>',
  );
  await sharp(input)
    .composite([
      { input: strip, top: 0, left: 0 },
      { input: logo, top: 34, left: 64 },
    ])
    .png()
    .toFile(`${root}/og/article-${file}`);
}
console.log('Generated corporate, article and app-icon media.');
