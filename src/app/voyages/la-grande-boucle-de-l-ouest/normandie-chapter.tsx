import Image from "next/image";
import journal from "./page.module.css";
import styles from "./normandie-chapter.module.css";
import { sections } from "./normandie-content";
import { photos } from "./normandie-photos";

type PhotoNumber = (typeof photos)[number]["inventoryNumber"];
// Photos placées aux paragraphes correspondants du récit validé.
const layouts: { end: number; photos: PhotoNumber[] }[][] = [
  [{ end: 1, photos: [31] }, { end: 4, photos: [] }],
  [{ end: 2, photos: [2, 3] }, { end: 4, photos: [11] }],
  [{ end: 3, photos: [27] }, { end: 5, photos: [20] },
    { end: 7, photos: [14] }, { end: 8, photos: [18, 39] }, { end: 9, photos: [48] }],
  [{ end: 1, photos: [53] }, { end: 3, photos: [56] }, { end: 4, photos: [57] }, { end: 6, photos: [] }],
  [{ end: 5, photos: [58] }, { end: 9, photos: [] }],
];

function Narrative({ text }: { text: string }) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith("**") ? <strong key={index}>{part.slice(2, -2)}</strong> : part);
}

function Photo({ number, single }: { number: PhotoNumber; single: boolean }) {
  const photo = photos.find((candidate) => candidate.inventoryNumber === number)!;
  const portrait = photo.height > photo.width;
  const sizes = portrait
    ? "(max-width: 477px) 79.2vw, 378px"
    : single
      ? "(max-width: 700px) 88vw, (max-width: 1118px) 85vw, 950px"
      : "(max-width: 700px) 88vw, (max-width: 1118px) calc((85vw - 36px) / 2), 457px";
  return (
    <figure data-photo-number={number} className={`${styles.photo} ${portrait ? styles.portrait : ""}`}>
      <Image src={`/images/voyages/la-grande-boucle-de-l-ouest/normandie/${photo.name}`}
        width={photo.width} height={photo.height} sizes={sizes} loading="lazy" alt={photo.alt} />
      {single && <figcaption>{photo.alt}.</figcaption>}
    </figure>
  );
}

export default function NormandieChapter() {
  return (
    <section id="etape-10" className={styles.chapter} aria-labelledby="etape-10-title">
      <header className={styles.chapterHeader}>
        <p className={journal.dateline}>ÉTAPE 10</p>
        <div>
          <p className={journal.dateline}>Mardi 29 juillet 2025 — Jour 12</p>
          <h2 id="etape-10-title">Entre émotion et histoire, une dernière journée sur les plages du Débarquement</h2>
          <p className={styles.route}>Géfosse-Fontenay → Cimetière américain de Normandie → Arromanches 360 → Camping municipal Canadian Scottish</p>
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
                    {section.paragraphs.slice(start, block.end).map((paragraph, index) => <p key={start + index}><Narrative text={paragraph} /></p>)}
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
