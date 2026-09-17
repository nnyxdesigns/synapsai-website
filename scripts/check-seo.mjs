import fs from 'node:fs/promises';
import sharp from 'sharp';
const pages = JSON.parse(await fs.readFile('src/lib/seo-pages.json', 'utf8'));
for (const field of ['title', 'description', 'intent']) {
  const values = Object.values(pages).map((page) => page[field]);
  if (values.some((value) => !value) || new Set(values).size !== values.length)
    throw new Error(`SEO: missing or duplicated ${field}`);
}
for (const file of await fs.readdir('public/media/og')) {
  const metadata = await sharp(`public/media/og/${file}`).metadata();
  if (metadata.width !== 1200 || metadata.height !== 630)
    throw new Error(`Invalid social image: ${file}`);
}
for (const page of Object.values(pages)) await fs.access(`public/media/og/${page.image}.png`);
for (const file of [
  'default.png',
  'article-context-og.png',
  'article-learning-og.png',
  'article-connectivity-og.png',
  'article-system-og.png',
  'article-classroom-og.png',
])
  await fs.access(`public/media/og/${file}`);
for (const file of [
  'synapsai-logo.svg',
  'synapsai-symbol.svg',
  'favicon-32.png',
  'icon-180.png',
  'icon-192.png',
  'icon-512.png',
])
  await fs.access(`public/media/brand/${file}`);
console.log(`SEO asset/intent checks passed for ${Object.keys(pages).length} strategic routes.`);
