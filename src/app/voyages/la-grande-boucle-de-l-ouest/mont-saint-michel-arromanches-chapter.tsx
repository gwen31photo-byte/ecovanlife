import Image from "next/image";
import journal from "./page.module.css";
import chapter from "./ile-oleron-chapter.module.css";
import styles from "./mont-saint-michel-arromanches-chapter.module.css";
import { sections } from "./mont-saint-michel-arromanches-content";
import { photos } from "./mont-saint-michel-arromanches-photos";

// Paragraph boundaries keep the validated narrative in its original order.
const layouts: { end: number; photos: number[] }[][] = [
  [{ end: 3, photos: [0] }],
  [{ end: 6, photos: [1, 2] }, { end: 7, photos: [3] }],
  [{ end: 4, photos: [4, 5] }, { end: 5, photos: [6, 7] }],
  [{ end: 3, photos: [8, 9] }, { end: 3, photos: [10, 11] },
    { end: 3, photos: [12] }, { end: 6, photos: [13, 14] }, { end: 7, photos: [15] }],
  [{ end: 3, photos: [16] }, { end: 5, photos: [] }],
  [{ end: 4, photos: [17] }, { end: 7, photos: [18] }, { end: 8, photos: [] }],
  [{ end: 2, photos: [19, 20] }, { end: 6, photos: [21, 22] },
    { end: 9, photos: [23, 24] }, { end: 9, photos: [25, 26] }],
  [{ end: 2, photos: [27] }, { end: 3, photos: [29] },
    { end: 5, photos: [28, 30] }, { end: 9, photos: [] }],
];

function Photo({ index, single }: { index: number; single: boolean }) {
  const photo = photos[index];
  const portrait = photo.height > photo.width;
  const sizes = portrait
    ? single
      ? "(max-width: 477px) 79.2vw, 378px"
      : "(max-width: 700px) min(79.2vw, 378px), (max-width: 932px) calc((85vw - 36px) / 2), 378px"
    : single
      ? "(max-width: 700px) 88vw, (max-width: 1118px) 85vw, 950px"
      : "(max-width: 700px) 88vw, (max-width: 1118px) calc((85vw - 36px) / 2), 457px";
  return (
    <figure className={`${styles.photo} ${portrait ? styles.portrait : ""}`}>
      <Image src={`/images/voyages/la-grande-boucle-de-l-ouest/mont-saint-michel-arromanches/${photo.name}`}
        width={photo.width} height={photo.height} sizes={sizes} loading="lazy" alt={photo.alt} />
      {single && <figcaption>{photo.alt}.</figcaption>}
    </figure>
  );
}

export default function MontSaintMichelArromanchesChapter() {
  return (
    <section id="etape-8" className={chapter.chapter} aria-labelledby="etape-8-title">
      <header className={chapter.chapterHeader}>
        <p className={journal.dateline}>ÉTAPE 08</p>
        <div>
          <p className={journal.dateline}>Dimanche 27 juillet 2025 — Jour 10</p>
          <h2 id="etape-8-title">Du Mont-Saint-Michel aux plages d&apos;Arromanches</h2>
          <p className={chapter.route}>Pontorson → Mont-Saint-Michel → Arromanches</p>
        </div>
      </header>
      {sections.map((section, sectionIndex) => {
        const paragraphs = section.paragraphs.split("\n");
        const layout = layouts[sectionIndex];
        return (
          <section key={section.id} id={section.id} className={styles.sequence} aria-labelledby={`${section.id}-title`}>
            {layout.map((block, blockIndex) => {
              const start = blockIndex === 0 ? 0 : layout[blockIndex - 1].end;
              return (
                <div key={blockIndex}>
                  {(blockIndex === 0 || block.end > start) && (
                    <div className={`${journal.prose} ${blockIndex === 0 ? styles.text : styles.textPause} ${sectionIndex === 5 && blockIndex === 0 ? styles.transition : ""}`}>
                      {blockIndex === 0 && <h3 id={`${section.id}-title`}>{section.title}</h3>}
                      {paragraphs.slice(start, block.end).map((paragraph, index) => <p key={start + index}>{paragraph}</p>)}
                    </div>
                  )}
                  {block.photos.length === 1 && <Photo index={block.photos[0]} single />}
                  {block.photos.length > 1 && (
                    <div className={styles.gallery}>
                      {block.photos.map((index) => <Photo key={index} index={index} single={false} />)}
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        );
      })}
    </section>
  );
}
