// Run manually: node src/app/photos/prepare-images.mjs [source-directory]
// Originals are read only. Existing editorial fields are preserved on reruns.
import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const here = path.dirname(fileURLToPath(import.meta.url));
const project = path.resolve(here, "../../..");
const source = path.resolve(process.argv[2] ?? path.join(os.homedir(), "Bureau/EcoVanLife - Présélection"));
const output = path.join(project, "public/images/photos");
const catalogPath = path.join(here, "photographs.json");
const collections = [
  ["instant-de-lumiere", "instant de lumière"],
  ["littoral-atlantique", "littoral atlantique"],
  ["lumiere-de-mediterranee", "lumière de méditeranée"],
  ["nature", "nature"],
  ["patrimoine-francais", "patrimoine français"],
  ["paysages", "paysages"],
  ["voyages", "voyages"],
];

async function filesIn(directory) {
  const files = [];
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await filesIn(filename));
    else if (/\.jpe?g$/i.test(entry.name)) files.push(filename);
  }
  return files.sort((a, b) => a.localeCompare(b, "fr", { numeric: true }));
}

let previous = [];
try {
  previous = JSON.parse(await fs.readFile(catalogPath, "utf8"));
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
const existing = new Map(previous.map((photo) => [photo.id, photo]));
let nextOrder = Math.max(0, ...previous.map((photo, index) => photo.order ?? index + 1)) + 1;
const catalog = [];
for (const [collection, folder] of collections) {
  await fs.mkdir(path.join(output, collection), { recursive: true });
  for (const filename of await filesIn(path.join(source, folder))) {
    const id = path.relative(source, filename).split(path.sep).join("/");
    const originalName = path.basename(filename);
    const title = originalName.replace(/\.jpe?g$/i, "");
    const slug = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const hash = createHash("sha256").update(id).digest("hex").slice(0, 10);
    const basename = `${slug}-${hash}`;
    const fullName = `${basename}.webp`;
    const thumbName = `${basename}-thumb.webp`;
    // rotate() applies EXIF orientation; sharp strips EXIF/GPS by default.
    const full = await sharp(filename).rotate()
      .resize({ width: 2200, height: 2200, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 82 }).toFile(path.join(output, collection, fullName));
    await sharp(filename).rotate()
      .resize({ width: 1000, height: 1000, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 78 }).toFile(path.join(output, collection, thumbName));
    const old = existing.get(id);
    catalog.push({
      id, filename: originalName, collection,
      title: old?.title ?? title,
      alt: old?.alt ?? `Photographie — ${title}`,
      src: `/images/photos/${collection}/${fullName}`,
      thumbnailSrc: `/images/photos/${collection}/${thumbName}`,
      width: full.width, height: full.height,
      order: old?.order ?? nextOrder++,
      visible: old?.visible ?? true,
      picfairUrl: old?.picfairUrl ?? null,
    });
  }
  console.log(`${folder}: ${catalog.filter((photo) => photo.collection === collection).length} photos`);
}
// Keep the manually curated order when regenerating images.
const positions = new Map(previous.map((photo, index) => [photo.id, index]));
catalog.sort((a, b) => (positions.get(a.id) ?? Infinity) - (positions.get(b.id) ?? Infinity));
await fs.writeFile(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`);
console.log(`${catalog.length} photos préparées ; originaux inchangés.`);
