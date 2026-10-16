import Image from "next/image";
import journal from "./page.module.css";
import styles from "./debarquement-chapter.module.css";
import { sections } from "./debarquement-content";
import { photos } from "./debarquement-photos";

type PhotoNumber = (typeof photos)[number]["inventoryNumber"];
// Paragraph boundaries preserve the narrative; numbers match the validated inventory.
const layouts: { end: number; photos: PhotoNumber[] }[][] = [
  [{ end: 1, photos: [2] }, { end: 3, photos: [3, 7] },
    { end: 4, photos: [32, 39] }, { end: 4, photos: [59, 66] }, { end: 5, photos: [86, 112] }],
  [{ end: 3, photos: [147] }, { end: 4, photos: [149, 162] },
    { end: 5, photos: [165] }, { end: 6, photos: [170, 180] }],
  [{ end: 2, photos: [193, 208] }, { end: 4, photos: [210, 213] }, { end: 5, photos: [220] }],
  [{ end: 5, photos: [] }],
  [{ end: 1, photos: [231] }, { end: 3, photos: [235, 237] }, { end: 4, photos: [241] }],
  [{ end: 4, photos: [246] }, { end: 8, photos: [257] }, { end: 8, photos: [259] },
    { end: 9, photos: [261, 272] }, { end: 9, photos: [292] },
    { end: 10, photos: [303] }, { end: 12, photos: [329] }],
];

function Photo({ number, single }: { number: PhotoNumber; single: boolean }) {
  const photo = photos.find((candidate) => candidate.inventoryNumber === number)!;
  const portrait = photo.height > photo.width;
  const sizes = portrait
    ? "(max-width: 477px) 79.2vw, 378px"
    : single
      ? "(max-width: 700px) 88vw, (max-width: 1118px) 85vw, 950px"
      : "(max-width: 700px) 88vw, (max-width: 1118px) calc((85vw - 36px) / 2), 457px";
  return (
    <figure className={`${styles.photo} ${portrait ? styles.portrait : ""}`}>
      <Image src={`/images/voyages/la-grande-boucle-de-l-ouest/debarquement/${photo.name}`}
        width={photo.width} height={photo.height} sizes={sizes} loading="lazy" alt={photo.alt} />
      {single && <figcaption>{photo.alt}.</figcaption>}
    </figure>
  );
}

export default function DebarquementChapter() {
  return (
    <section id="etape-9" className={styles.chapter} aria-labelledby="etape-9-title">
      <header className={styles.chapterHeader}>
        <p className={journal.dateline}>ÉTAPE 09</p>
        <div>
          <p className={journal.dateline}>Lundi 28 juillet 2025 — Jour 11</p>
          <h2 id="etape-9-title">Sur les traces du Débarquement, jusqu&apos;au coucher du soleil</h2>
          <p className={styles.route}>Arromanches → Sainte-Mère-Église / Airborne Museum → Batteries de Maisy → Pointe du Hoc → La Cambe → Géfosse-Fontenay — plage des Veys</p>
        </div>
      </header>
      {sections.map((section, sectionIndex) => (
        <section key={section.id} id={section.id} className={styles.sequence} aria-labelledby={`${section.id}-title`}>
          {layouts[sectionIndex].map((block, blockIndex) => {
            const start = blockIndex === 0 ? 0 : layouts[sectionIndex][blockIndex - 1].end;
            return (
              <div key={blockIndex}>
                {(blockIndex === 0 || block.end > start) && (
                  <div className={`${journal.prose} ${blockIndex === 0 ? styles.text : styles.textPause}`}>
                    {blockIndex === 0 && <h3 id={`${section.id}-title`}>{section.title}</h3>}
                    {section.paragraphs.slice(start, block.end).map((paragraph, index) => <p key={start + index}>{paragraph}</p>)}
                  </div>
                )}
                {block.photos.length === 1 && <Photo number={block.photos[0]} single />}
                {block.photos.length > 1 && (
                  <div className={styles.gallery}>
                    {block.photos.map((number) => <Photo key={number} number={number} single={false} />)}
                  </div>
                )}
              </div>
            );
          })}
        </section>
      ))}
    </section>
  );
}
