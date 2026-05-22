import sharp from 'sharp';
import { stat, writeFile } from 'fs/promises';
import { join } from 'path';
// Process entirely in memory — no tmp file, no rename needed

const root = new URL('../public', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');

const heroes = [
  'ads/hero.webp',
  'design-branding/hero.webp',
  'design-content/hero.webp',
  'design-ui-ux/hero.webp',
  'ecommerce/hero.webp',
  'landing/hero.webp',
  'main/hero.webp',
  'marketing/hero.webp',
  'seo/hero.webp',
  'smm/hero.webp',
  'web-development/hero.webp',
];

const MAX_W  = 1920;
const MAX_H  = 1080;
const QUALITY = 78;

let totalBefore = 0;
let totalAfter  = 0;

for (const rel of heroes) {
  const abs = join(root, rel);
  const beforeStat = await stat(abs);
  const before = beforeStat.size;

  const meta = await sharp(abs).metadata();
  const srcW = meta.width;
  const srcH = meta.height;

  // Compute resize dimensions — cover-crop to 16:9 from centre
  const scaleW = MAX_W / srcW;
  const scaleH = MAX_H / srcH;
  const scale  = Math.max(scaleW, scaleH);   // cover

  const resizeW = Math.round(srcW * scale);
  const resizeH = Math.round(srcH * scale);

  const buf = await sharp(abs)
    .resize(resizeW, resizeH, { fit: 'cover', position: 'centre' })
    .webp({ quality: QUALITY, effort: 6, smartSubsample: true })
    .toBuffer();

  await writeFile(abs + '.new', buf);

  const afterStat = await stat(abs);
  const after = afterStat.size;
  totalBefore += before;
  totalAfter  += after;

  const pct = (((before - after) / before) * 100).toFixed(1);
  const kb  = (n) => (n / 1024).toFixed(0) + 'KB';
  console.log(`✓ ${rel.padEnd(30)} ${kb(before).padStart(7)} → ${kb(after).padStart(6)}  (−${pct}%)`);
}

const saved = totalBefore - totalAfter;
const kb    = (n) => (n / 1024 / 1024).toFixed(2) + ' MB';
console.log('');
console.log(`Total: ${kb(totalBefore)} → ${kb(totalAfter)}  saved ${kb(saved)}`);
