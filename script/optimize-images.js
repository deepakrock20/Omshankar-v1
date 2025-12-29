import fs from "fs";
import path from "path";
import sharp from "sharp";

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function processProfile() {
  const input = path.resolve(process.cwd(), "client/public/1000159971.png");
  const outDir = path.resolve(process.cwd(), "client/public/images");
  await ensureDir(outDir);
  if (!fs.existsSync(input)) {
    console.warn("[optimize-images] Profile image not found at", input);
    return;
  }

  const sizes = [400, 800, 1200];
  for (const size of sizes) {
    const avifOut = path.join(outDir, `profile-${size}.avif`);
    const webpOut = path.join(outDir, `profile-${size}.webp`);
    await sharp(input)
      .resize(size)
      .avif({ quality: 85 })
      .toFile(avifOut)
      .catch((e) => console.error(e));
    await sharp(input)
      .resize(size)
      .webp({ quality: 85 })
      .toFile(webpOut)
      .catch((e) => console.error(e));
    console.log(`[optimize-images] wrote ${avifOut} and ${webpOut}`);
  }

  // also write a reasonably sized fallback jpeg for older browsers
  await sharp(input).resize(800).jpeg({ quality: 85 }).toFile(path.join(outDir, "profile-800.jpg"));
  console.log("[optimize-images] wrote profile-800.jpg fallback");
}

async function processCertificates() {
  const srcDir = path.resolve(process.cwd(), "attached_assets");
  const outDir = path.resolve(process.cwd(), "attached_assets/optimized");
  await ensureDir(outDir);

  const files = [
    "Omshankar_complition_certificate.png",
    "WhatsApp Image 2025-12-14 at 8.08.54 PM.jpeg",
    "WhatsApp Image 2025-12-11 at 8.03.35 PM.jpeg",
    "WhatsApp Image 2025-12-11 at 8.03.35 PM (2).jpeg",
    "WhatsApp Image 2025-12-11 at 8.03.35 PM (1).jpeg",
  ];

  for (const file of files) {
    const input = path.join(srcDir, file);
    if (!fs.existsSync(input)) {
      console.warn(`[optimize-images] ${file} not found, skipping`);
      continue;
    }
    const base = path.parse(file).name.replace(/\s+/g, "_");
    const sizes = [800, 1200];
    for (const size of sizes) {
      const avifOut = path.join(outDir, `${base}-${size}.avif`);
      const webpOut = path.join(outDir, `${base}-${size}.webp`);
      await sharp(input)
        .resize(size)
        .avif({ quality: 85 })
        .toFile(avifOut)
        .catch((e) => console.error(e));
      await sharp(input)
        .resize(size)
        .webp({ quality: 85 })
        .toFile(webpOut)
        .catch((e) => console.error(e));
      console.log(`[optimize-images] wrote ${avifOut} and ${webpOut}`);
    }
  }
}

async function processGenerated() {
  const srcDir = path.resolve(process.cwd(), "attached_assets/generated_images");
  const outDir = path.resolve(process.cwd(), "attached_assets/generated_images/optimized");
  await ensureDir(outDir);

  if (!fs.existsSync(srcDir)) return;

  const files = fs.readdirSync(srcDir).filter((f) => f.endsWith('.png'));
  for (const file of files) {
    const input = path.join(srcDir, file);
    const base = path.parse(file).name;
    const sizes = [400, 800, 1200];
    for (const size of sizes) {
      const avifOut = path.join(outDir, `${base}-${size}.avif`);
      const webpOut = path.join(outDir, `${base}-${size}.webp`);
      await sharp(input)
        .resize(size)
        .avif({ quality: 85 })
        .toFile(avifOut)
        .catch((e) => console.error(e));
      await sharp(input)
        .resize(size)
        .webp({ quality: 85 })
        .toFile(webpOut)
        .catch((e) => console.error(e));
      console.log(`[optimize-images] wrote ${avifOut} and ${webpOut}`);
    }
  }
}

async function processBackground() {
  const src = path.resolve(process.cwd(), "attached_assets/generated_images/neon_cyber_gradient_background.png");
  const outDir = path.resolve(process.cwd(), "attached_assets/generated_images/optimized");
  await ensureDir(outDir);
  if (!fs.existsSync(src)) return;
  const base = 'neon_cyber_gradient_background';
  const sizes = [800, 1200, 1600, 2400];
  for (const size of sizes) {
    const avifOut = path.join(outDir, `${base}-${size}.avif`);
    const webpOut = path.join(outDir, `${base}-${size}.webp`);
    await sharp(src)
      .resize(size)
      .avif({ quality: 85 })
      .toFile(avifOut)
      .catch((e) => console.error(e));
    await sharp(src)
      .resize(size)
      .webp({ quality: 85 })
      .toFile(webpOut)
      .catch((e) => console.error(e));
    console.log(`[optimize-images] wrote ${avifOut} and ${webpOut}`);
  }
}

async function main() {
  await processProfile();
  await processCertificates();
  await processGenerated();
  await processBackground();
  console.log("[optimize-images] done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});