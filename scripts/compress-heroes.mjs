import sharp from 'sharp';
import { stat, mkdir } from 'fs/promises';
import { join, dirname } from 'path';

const root = new URL('../public', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const outRoot = join(root, '_compressed');

// [path, maxW, maxH, quality]
const images = [
  // ── Hero backgrounds (LCP — full-viewport, high quality) ─────────────
  ['ads/hero.webp',                   1440, 810,  72],
  ['design-branding/hero.webp',       1440, 810,  72],
  ['design-content/hero.webp',        1440, 810,  72],
  ['design-ui-ux/hero.webp',          1440, 810,  72],
  ['ecommerce/hero.webp',             1440, 810,  72],
  ['landing/hero.webp',               1440, 810,  72],
  ['main/hero.webp',                  1440, 810,  72],
  ['main/firmen.webp',                1440, 810,  72],
  ['marketing/hero.webp',             1440, 810,  72],
  ['seo/hero.webp',                   1440, 810,  72],
  ['smm/hero.webp',                   1440, 810,  72],
  ['web-development/hero.webp',       1440, 810,  72],

  // ── Section / feature images ──────────────────────────────────────────
  ['design-branding/features.webp',   1200, 900,  70],
  ['design-content/copywriting.webp', 1200, 900,  70],
  ['design-ui-ux/features.webp',      1200, 900,  70],
  ['ecommerce/features.webp',         1200, 900,  70],
  ['landing/seo.webp',                1200, 900,  70],
  ['main/design.webp',                1200, 900,  70],
  ['main/fast.webp',                  1200, 900,  70],
  ['main/price.webp',                 1200, 900,  70],
  ['main/seo.webp',                   1200, 900,  70],
  ['seo/audit.webp',                  1200, 900,  70],
  ['seo/link.webp',                   1200, 900,  70],
  ['seo/local.webp',                  1200, 900,  70],
  ['seo/optimize.webp',               1200, 900,  70],
  ['seo/section.webp',                1200, 900,  70],
  ['smm/facebook.webp',               1200, 900,  70],
  ['smm/instagram.webp',              1200, 900,  70],
  ['smm/meta.webp',                   1200, 900,  70],
  ['smm/retargeting.webp',            1200, 900,  70],
  ['web-development/design.webp',     1200, 900,  70],
  ['web-development/develop.webp',    1200, 900,  70],
  ['web-development/features.webp',   1200, 900,  70],
  ['web-development/responsive.webp', 1200, 900,  70],
  ['web-development/seo.webp',        1200, 900,  70],
  ['ads/benefit.webp',                1200, 900,  70],
  ['landing/advertising.webp',        1200, 900,  70],
  ['landing/fast.webp',               1200, 900,  70],
  ['landing/leads.webp',              1200, 900,  70],
  ['web-development-cost/features.webp', 1200, 900, 70],
  ['web-development-cost/price.webp',    1200, 900, 70],
  ['web-development-cost/tech.webp',     1200, 900, 70],
];

let totalBefore = 0;
let totalAfter  = 0;
let skipped     = 0;
let smaller     = 0;

for (const [rel, maxW, maxH, quality] of images) {
  const abs = join(root, rel);
  let beforeStat;
  try { beforeStat = await stat(abs); } catch { console.warn(`SKIP (not found): ${rel}`); skipped++; continue; }
  const before = beforeStat.size;

  const meta = await sharp(abs).metadata();
  const srcW = meta.width ?? maxW;
  const srcH = meta.height ?? maxH;

  // Scale down only — never upscale
  const scale = Math.min(1, maxW / srcW, maxH / srcH);
  const resizeW = Math.round(srcW * scale);
  const resizeH = Math.round(srcH * scale);

  // Output to _compressed/ mirror — avoids Windows file-lock issues
  const outAbs = join(outRoot, rel);
  await mkdir(dirname(outAbs), { recursive: true });

  await sharp(abs)
    .resize(resizeW, resizeH, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality, effort: 6, smartSubsample: true })
    .toFile(outAbs);

  const afterStat = await stat(outAbs);
  const after = afterStat.size;

  totalBefore += before;
  totalAfter  += after;

  const saved = (((before - after) / before) * 100).toFixed(1);
  const kb    = n => (n / 1024).toFixed(0) + 'KB';
  const flag  = after >= before ? ' ⚠ larger — keep original' : '';
  if (after < before) smaller++;
  console.log(`✓ ${rel.padEnd(40)} ${kb(before).padStart(7)} → ${kb(after).padStart(6)}  (−${saved}%)${flag}`);
}

const mb = n => (n / 1024 / 1024).toFixed(2) + 'MB';
console.log('');
console.log(`Total: ${mb(totalBefore)} → ${mb(totalAfter)}  saved ${mb(totalBefore - totalAfter)}`);
console.log(`${smaller} images compressed, ${skipped} skipped`);
console.log('');
console.log('Compressed files written to: public/_compressed/');
console.log('Review, then copy to public/ with:');
console.log('  xcopy /s /y public\\_compressed\\* public\\');
