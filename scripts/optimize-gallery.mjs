/**
 * Gallery Image Optimizer
 * Converts all JPG/PNG images in public/gallery/ to two WebP sizes:
 *   - Thumbnails: 600px wide  → public/gallery/thumbs/
 *   - Large:     1400px wide  → public/gallery/large/
 *
 * Run with: node scripts/optimize-gallery.mjs
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const GALLERY_DIR = path.join(ROOT, 'public', 'gallery');
const THUMBS_DIR = path.join(GALLERY_DIR, 'thumbs');
const LARGE_DIR = path.join(GALLERY_DIR, 'large');

const THUMB_WIDTH = 600;
const LARGE_WIDTH = 1400;
const WEBP_QUALITY = 82;

const IMAGE_PATTERN = /\.(jpe?g|png)$/i;

// Ensure output directories exist
fs.mkdirSync(THUMBS_DIR, { recursive: true });
fs.mkdirSync(LARGE_DIR, { recursive: true });

const files = fs.readdirSync(GALLERY_DIR).filter(f => IMAGE_PATTERN.test(f));

if (files.length === 0) {
  console.log('No JPG/PNG images found in public/gallery/');
  process.exit(0);
}

console.log(`Found ${files.length} images to process…\n`);

let processed = 0;
let skipped = 0;
let errors = 0;

for (const file of files) {
  const stem = file.replace(IMAGE_PATTERN, '');
  const src = path.join(GALLERY_DIR, file);
  const thumbDest = path.join(THUMBS_DIR, `${stem}.webp`);
  const largeDest = path.join(LARGE_DIR, `${stem}.webp`);

  const thumbExists = fs.existsSync(thumbDest);
  const largeExists = fs.existsSync(largeDest);

  if (thumbExists && largeExists) {
    console.log(`  ⏭  Skipping  ${file} (already converted)`);
    skipped++;
    continue;
  }

  try {
    const pipeline = sharp(src).rotate(); // auto-rotate based on EXIF

    if (!thumbExists) {
      await pipeline
        .clone()
        .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(thumbDest);
    }

    if (!largeExists) {
      await pipeline
        .clone()
        .resize({ width: LARGE_WIDTH, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(largeDest);
    }

    const srcSize = fs.statSync(src).size;
    const thumbSize = fs.statSync(thumbDest).size;
    const largeSize = fs.statSync(largeDest).size;
    const savings = Math.round((1 - (thumbSize + largeSize) / (srcSize * 2)) * 100);

    console.log(
      `  ✅  ${file.padEnd(55)} ${fmtKB(srcSize).padStart(7)} → thumb: ${fmtKB(thumbSize).padStart(7)}, large: ${fmtKB(largeSize).padStart(7)}  (≈${savings}% savings)`
    );
    processed++;
  } catch (err) {
    console.error(`  ❌  Error processing ${file}:`, err.message);
    errors++;
  }
}

console.log(`\n✔  Done. Processed: ${processed}, Skipped: ${skipped}, Errors: ${errors}`);

function fmtKB(bytes) {
  return bytes >= 1024 * 1024
    ? `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    : `${Math.round(bytes / 1024)} KB`;
}
