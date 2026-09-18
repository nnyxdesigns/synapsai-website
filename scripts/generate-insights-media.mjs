// Original vector editorial art. No invented UI, research data or third-party artwork.
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
const output = new URL('../public/media/insights/', import.meta.url);
await mkdir(output, { recursive: true });
const esc = (s) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;');
const text = (x, y, s, size = 30, color = '#e5e7ef', extra = '') =>
  `<text x="${x}" y="${y}" fill="${color}" font-size="${size}" font-family="Arial, sans-serif" ${extra}>${esc(s)}</text>`;
const rect = (x, y, w, h, fill = '#14161c', stroke = '#343843', r = 18) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}"/>`;
const line = (path, color = '#8996d9', dash = '') =>
  `<path d="${path}" fill="none" stroke="${color}" stroke-width="3" ${dash ? `stroke-dasharray="${dash}"` : ''}/>`;
const dot = (x, y, r = 7, color = '#b4baff') =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/>`;
const svg = (body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="660" viewBox="0 0 1200 660"><rect width="1200" height="660" fill="#0e1015"/>${body}</svg>`;
const assets = [
  {
    id: 'context',
    category: 'AI & AFRICA',
    title: ['Designed for context.', 'Not just translated.'],
    art: svg(
      rect(100, 65, 1000, 530, '#11151b', '#475260', 36) +
        text(145, 130, 'TRUST', 29, '#b3c3c4') +
        rect(230, 180, 790, 350, '#181b27', '#505778', 30) +
        text(275, 240, 'ACCESS', 29, '#c0c6e9') +
        rect(365, 290, 575, 190, '#23283b', '#6a76a7', 24) +
        text(405, 345, 'WORKFLOW', 29, '#d3d8f7') +
        rect(575, 378, 305, 65, '#b4bdff', '#b4bdff', 13) +
        text(615, 421, 'Language', 35, '#111624'),
    ),
  },
  {
    id: 'learning',
    category: 'INSIDE SYNAPSAI',
    title: ['Learning is a loop.', 'Design for continuity.'],
    art: svg(
      `<circle cx="600" cy="330" r="220" fill="none" stroke="#374842" stroke-width="2"/>` +
        line(
          'M 350 175 H 830 Q 960 175 960 330 Q 960 485 830 485 H 370 Q 240 485 240 330 Q 240 175 350 175',
          '#729a89',
        ) +
        rect(340, 105, 245, 115, '#17241f', '#5b7b6c') +
        text(372, 175, 'Understand', 33) +
        rect(690, 265, 245, 115, '#18221f', '#5b7b6c') +
        text(746, 335, 'Attempt', 33) +
        rect(585, 435, 245, 115, '#17241f', '#5b7b6c') +
        text(644, 505, 'Review', 33) +
        rect(245, 280, 245, 115, '#18221f', '#5b7b6c') +
        text(305, 350, 'Revisit', 33) +
        dot(640, 175) +
        dot(925, 420) +
        text(533, 330, 'STUDY', 26, '#91b6a5') +
        text(545, 368, 'LOOP', 26, '#91b6a5'),
    ),
  },
  {
    id: 'connectivity',
    category: 'PRODUCT & ENGINEERING',
    title: ['The connection breaks.', 'The work should not.'],
    art: svg(
      line('M 90 300 H 385', '#8996d9') +
        line('M 385 300 H 735', '#5c6074', '9 14') +
        line('M 735 300 H 1110', '#8996d9') +
        line('M 400 330 V 475 Q 400 495 430 495 H 730 Q 760 495 760 470 V 330', '#a3b3fb') +
        dot(150, 300, 17) +
        dot(1010, 300, 17, '#91bea8') +
        rect(442, 435, 285, 110, '#222940', '#7889be') +
        text(497, 503, 'Recover', 37) +
        text(90, 235, 'Request', 36) +
        text(850, 235, 'Saved result', 36) +
        text(430, 240, 'Interrupted', 31, '#a0a6bb') +
        text(91, 105, 'CONTINUITY BY DESIGN', 22, '#959dae') +
        dot(400, 300) +
        dot(760, 300),
    ),
  },
  {
    id: 'system',
    category: 'PERSPECTIVES',
    title: ['Beyond the demo.', 'Build the whole system.'],
    art: svg(
      rect(150, 85, 900, 490, '#12141a', '#454858', 26) +
        text(195, 145, 'THE PRODUCT SYSTEM', 26, '#adb3ca') +
        rect(205, 195, 330, 100, '#1a1d26') +
        text(243, 258, 'Context', 35) +
        rect(565, 195, 420, 100, '#1a1d26') +
        text(608, 258, 'Workflow', 35) +
        rect(205, 325, 330, 190, '#1a1d26') +
        text(243, 391, 'Evaluation', 35) +
        text(243, 465, 'Operations', 35) +
        rect(565, 325, 420, 190, '#252c45', '#7180b5') +
        text(610, 404, 'MODEL', 26, '#b1bcf0') +
        text(610, 465, 'One component.', 30),
    ),
  },
  {
    id: 'classroom',
    category: 'FIELD NOTES',
    title: ['An answer is not', 'the whole lesson.'],
    art: svg(
      line('M 270 235 L 600 460 L 930 235 Z', '#8d8677') +
        `<circle cx="270" cy="230" r="120" fill="#25221e" stroke="#776f60"/><circle cx="930" cy="230" r="120" fill="#25221e" stroke="#776f60"/><circle cx="600" cy="460" r="115" fill="#262a37" stroke="#7f89af"/>` +
        text(198, 243, 'Learner', 36) +
        text(853, 243, 'Teacher', 36) +
        text(513, 473, 'AI support', 34) +
        rect(427, 190, 346, 98, '#17191e', '#555c6c') +
        text(475, 249, 'Learning task', 33) +
        text(90, 600, 'GUIDANCE / PRACTICE / JUDGMENT', 23, '#b8b3a6'),
    ),
  },
  {
    id: 'daily-use',
    category: 'PERSPECTIVES',
    title: ['Useful today.', 'Useful tomorrow.'],
    art: svg(
      `<circle cx="600" cy="330" r="210" fill="none" stroke="#43645a" stroke-width="3"/>` +
        line(
          'M 375 178 H 785 Q 930 178 930 330 Q 930 482 785 482 H 375 Q 270 482 270 330 Q 270 178 375 178',
          '#7cb59f',
        ) +
        rect(402, 105, 395, 92, '#17241f', '#587e6d') +
        text(465, 163, 'Recurring task', 31) +
        rect(805, 278, 230, 92, '#17241f', '#587e6d') +
        text(845, 336, 'Context', 31) +
        rect(402, 463, 395, 92, '#17241f', '#587e6d') +
        text(459, 521, 'Useful result', 31) +
        rect(165, 278, 230, 92, '#17241f', '#587e6d') +
        text(220, 336, 'Return', 31) +
        text(455, 345, 'DAILY', 30, '#9ac7b4') +
        text(470, 387, 'VALUE', 30, '#9ac7b4'),
    ),
  },
  {
    id: 'people',
    category: 'PERSPECTIVES',
    title: ['Start with the work.', 'Not the mechanics.'],
    art: svg(
      rect(115, 100, 970, 460, '#12141a', '#455259', 28) +
        text(165, 160, 'THE PERSON’S TASK', 24, '#b8c7c2') +
        rect(165, 215, 255, 220, '#182521', '#527463') +
        text(210, 310, 'Task', 37) +
        text(210, 362, 'Language', 28, '#a9cdbd') +
        line('M 430 325 H 760', '#85c9ad') +
        rect(775, 215, 260, 220, '#1b2530', '#5c7491') +
        text(814, 310, 'Clear', 37) +
        text(810, 362, 'next action', 28, '#bdcee7') +
        rect(475, 275, 230, 100, '#263a32', '#6d9e88') +
        text(523, 337, 'Choices', 31),
    ),
  },
  {
    id: 'costs',
    category: 'PRODUCT & ENGINEERING',
    title: ['The cost is', 'the whole system.'],
    art: svg(
      rect(165, 95, 870, 470, '#11151b', '#4b5667', 26) +
        text(215, 155, 'PRODUCT COST STACK', 25, '#c1c8d9') +
        rect(215, 205, 770, 64, '#17241f', '#527d6b') +
        text(255, 248, 'Access  /  device · data · network', 27) +
        rect(215, 290, 770, 64, '#1a2027', '#607899') +
        text(255, 333, 'Experience  /  language · workflow · support', 27) +
        rect(215, 375, 770, 64, '#20243b', '#7184b4') +
        text(255, 418, 'Intelligence  /  context · model · evaluation', 27) +
        rect(215, 460, 770, 64, '#25221d', '#877e64') +
        text(255, 503, 'Operations  /  payment · monitoring · ownership', 27),
    ),
  },
  {
    id: 'learning-system',
    category: 'FIELD NOTES',
    title: ['More than an answer.', 'A learning sequence.'],
    art: svg(
      line('M 250 330 H 950', '#7eab98') +
        dot(250, 330, 48, '#24382f') +
        dot(485, 330, 48, '#24382f') +
        dot(720, 330, 48, '#24382f') +
        dot(950, 330, 48, '#24382f') +
        text(204, 340, 'Task', 28) +
        text(430, 340, 'Attempt', 28) +
        text(661, 340, 'Feedback', 28) +
        text(899, 340, 'Revisit', 28) +
        text(433, 175, 'LEARNING SYSTEM', 27, '#a5cfbd') +
        text(355, 505, 'Teacher judgment across the sequence', 31, '#b9c5be'),
    ),
  },
  {
    id: 'measurement',
    category: 'FIELD NOTES',
    title: ['Measure to learn.', 'Not to decorate.'],
    art: svg(
      `<circle cx="600" cy="330" r="195" fill="none" stroke="#606f8e" stroke-width="3"/>` +
        line('M 410 235 Q 600 80 790 235', '#9fb1e9') +
        line('M 790 235 Q 940 330 790 430', '#9fb1e9') +
        line('M 790 430 Q 600 585 410 430', '#9fb1e9') +
        line('M 410 430 Q 260 330 410 235', '#9fb1e9') +
        rect(485, 280, 230, 100, '#222b43', '#7184b4') +
        text(520, 340, 'Question', 31) +
        text(250, 220, 'Evidence', 28) +
        text(800, 330, 'Review', 28) +
        text(540, 510, 'Improve', 28) +
        text(270, 590, 'NO INVENTED DATA', 22, '#a7b1cd'),
    ),
  },
];
const mobileSvg = (body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="500" viewBox="0 0 600 500"><rect width="600" height="500" fill="#0e1015"/>${body}</svg>`;
const mobile = {
  context: mobileSvg(
    rect(25, 25, 550, 450, '#11151b', '#475260', 24) +
      text(55, 79, 'TRUST', 28) +
      rect(65, 110, 470, 325, '#181b27', '#505778', 20) +
      text(95, 163, 'ACCESS', 28) +
      rect(110, 195, 380, 195, '#23283b', '#6a76a7', 18) +
      text(140, 248, 'WORKFLOW', 28) +
      rect(205, 290, 250, 65, '#b4bdff', '#b4bdff', 10) +
      text(250, 333, 'Language', 31, '#111624'),
  ),
  learning: mobileSvg(
    line(
      'M 165 100 H 430 Q 510 100 510 250 Q 510 400 430 400 H 165 Q 90 400 90 250 Q 90 100 165 100',
      '#729a89',
    ) +
      rect(170, 60, 260, 80, '#17241f', '#5b7b6c') +
      text(212, 111, 'Understand', 29) +
      rect(310, 205, 235, 80, '#17241f', '#5b7b6c') +
      text(369, 256, 'Attempt', 29) +
      rect(170, 360, 260, 80, '#17241f', '#5b7b6c') +
      text(249, 411, 'Review', 29) +
      rect(40, 205, 230, 80, '#17241f', '#5b7b6c') +
      text(105, 256, 'Revisit', 29),
  ),
  connectivity: mobileSvg(
    line('M 95 115 V 390 H 440', '#8996d9') +
      line('M 95 190 V 305', '#0e1015') +
      line('M 95 190 V 305', '#8891ae', '5 11') +
      line('M 110 165 H 310 V 305 H 110', '#a3b3fb') +
      dot(95, 115, 12) +
      dot(440, 390, 12, '#91bea8') +
      rect(205, 195, 275, 80, '#222940', '#7889be') +
      text(270, 245, 'Recover', 31) +
      text(145, 122, 'Request', 34) +
      text(145, 343, 'Interrupted', 28, '#b7bfce') +
      text(190, 453, 'Saved result', 34),
  ),
  system: mobileSvg(
    rect(25, 25, 550, 450, '#12141a', '#454858', 20) +
      text(65, 83, 'THE PRODUCT SYSTEM', 27) +
      rect(60, 120, 480, 80, '#1a1d26') +
      text(100, 172, 'Context + workflow', 30) +
      rect(60, 220, 480, 80, '#1a1d26') +
      text(100, 272, 'Evaluate + operate', 30) +
      rect(160, 325, 380, 115, '#252c45', '#7180b5') +
      text(200, 373, 'Model', 34) +
      text(200, 411, 'One component', 27),
  ),
  classroom: mobileSvg(
    line('M 145 130 H 455 L 300 380 Z', '#8d8677') +
      `<circle cx="145" cy="130" r="90" fill="#25221e" stroke="#776f60"/><circle cx="455" cy="130" r="90" fill="#25221e" stroke="#776f60"/><circle cx="300" cy="380" r="85" fill="#262a37" stroke="#7f89af"/>` +
      text(90, 141, 'Learner', 31) +
      text(396, 141, 'Teacher', 31) +
      text(225, 391, 'AI support', 31) +
      rect(145, 220, 310, 70, '#17191e', '#555c6c') +
      text(200, 266, 'Learning task', 30),
  ),
  'daily-use': mobileSvg(
    `<circle cx="300" cy="250" r="155" fill="none" stroke="#43645a" stroke-width="3"/>` +
      rect(170, 55, 260, 65, '#17241f', '#587e6d') +
      text(215, 98, 'Task', 29) +
      rect(390, 217, 165, 65, '#17241f', '#587e6d') +
      text(415, 260, 'Context', 25) +
      rect(170, 380, 260, 65, '#17241f', '#587e6d') +
      text(195, 423, 'Useful result', 27) +
      rect(45, 217, 160, 65, '#17241f', '#587e6d') +
      text(80, 260, 'Return', 27),
  ),
  people: mobileSvg(
    rect(35, 65, 530, 370, '#12141a', '#455259', 22) +
      rect(70, 135, 190, 185, '#182521', '#527463') +
      text(112, 215, 'Task', 31) +
      text(98, 263, 'Language', 25) +
      line('M 270 227 H 340', '#85c9ad') +
      rect(350, 135, 180, 185, '#1b2530', '#5c7491') +
      text(384, 215, 'Clear', 31) +
      text(375, 263, 'action', 25) +
      rect(165, 350, 270, 60, '#263a32', '#6d9e88') +
      text(235, 390, 'Choices', 27),
  ),
  costs: mobileSvg(
    rect(35, 45, 530, 405, '#11151b', '#4b5667', 20) +
      text(85, 100, 'COST STACK', 25) +
      rect(80, 135, 440, 55, '#17241f', '#527d6b') +
      text(110, 172, 'Access', 28) +
      rect(80, 215, 440, 55, '#1a2027', '#607899') +
      text(110, 252, 'Experience', 28) +
      rect(80, 295, 440, 55, '#20243b', '#7184b4') +
      text(110, 332, 'Intelligence', 28) +
      rect(80, 375, 440, 55, '#25221d', '#877e64') +
      text(110, 412, 'Operations', 28),
  ),
  'learning-system': mobileSvg(
    line('M 95 250 H 505', '#7eab98') +
      dot(95, 250, 31, '#24382f') +
      dot(230, 250, 31, '#24382f') +
      dot(370, 250, 31, '#24382f') +
      dot(505, 250, 31, '#24382f') +
      text(65, 257, 'Task', 19) +
      text(185, 257, 'Try', 19) +
      text(320, 257, 'Help', 19) +
      text(460, 257, 'Return', 19) +
      text(145, 145, 'LEARNING SEQUENCE', 26) +
      text(155, 385, 'Teacher judgment', 29),
  ),
  measurement: mobileSvg(
    `<circle cx="300" cy="250" r="155" fill="none" stroke="#606f8e" stroke-width="3"/>` +
      rect(185, 210, 230, 80, '#222b43', '#7184b4') +
      text(226, 260, 'Question', 29) +
      text(85, 175, 'Evidence', 25) +
      text(420, 260, 'Review', 25) +
      text(250, 445, 'Improve', 25),
  ),
};
for (const item of assets) {
  await writeFile(new URL(`${item.id}.svg`, output), item.art);
  await writeFile(new URL(`${item.id}-mobile.svg`, output), mobile[item.id]);
  const preview = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#0e1015"/>${text(65, 78, 'SynapsAi / Insights', 27, '#b8bdca')}${text(65, 200, item.category, 21, '#aab5fa')}${text(65, 315, item.title[0], 62)}${text(65, 399, item.title[1], 62)}<path d="M65 480 H1135" stroke="#3e465d"/>${text(65, 550, 'Ideas for technology that works in the real world.', 24, '#b8bdca')}</svg>`;
  await sharp(Buffer.from(preview))
    .png()
    .toFile(fileURLToPath(new URL(`${item.id}-og.png`, output)));
}
const manifestPath = new URL('../public/media/manifest.json', import.meta.url);
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
manifest.assets = manifest.assets.filter(
  (a) => !a.file.startsWith('insights/') && !a.file.startsWith('og/article-'),
);
for (const item of assets) {
  for (const suffix of ['.svg', '-mobile.svg', '-og.png'])
    manifest.assets.push({
      file: `insights/${item.id}${suffix}`,
      source: 'Original SynapsAi editorial composition; scripts/generate-insights-media.mjs',
      reviewedAt: '2026-09-18',
      kind: suffix.endsWith('.svg') ? 'original-conceptual-vector' : 'editorial-social-preview',
      status: 'review',
      use: 'Insights conceptual illustration; no measured data or product UI',
    });
  manifest.assets.push({
    file: `og/article-${item.id}-og.png`,
    source: `Derived from insights/${item.id}-og.png with approved SynapsAi wordmark; scripts/generate-seo-media.mjs`,
    reviewedAt: '2026-09-18',
    kind: 'editorial-social-preview',
    status: 'review',
    use: 'Insights article Open Graph and X image; conceptual illustration, no product UI or measured data',
  });
}
for (const name of ['youssouf-nchetkou-ndam', 'frank-arnaud-yap']) {
  await sharp(fileURLToPath(new URL(`../public/media/team/${name}.png`, import.meta.url)))
    .resize(96, 96)
    .webp({ quality: 85 })
    .toFile(fileURLToPath(new URL(`${name}-avatar.webp`, output)));
  manifest.assets.push({
    file: `insights/${name}-avatar.webp`,
    source: `Derivative of approved team/${name}.png; resized only`,
    reviewedAt: '2026-09-16',
    kind: 'optimized-official-portrait',
    status: 'review',
    use: 'Insights author avatar',
  });
}
await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
console.log(`Generated ${assets.length} original SVG covers and PNG social previews.`);
