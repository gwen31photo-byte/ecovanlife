import Image from "next/image";
import journal from "./page.module.css";
import styles from "./normandie-chapter.module.css";
import { sections } from "./chenonceau-content";
import { photos } from "./chenonceau-photos";
import local from "./chenonceau-chapter.module.css";

type PhotoNumber = (typeof photos)[number]["inventoryNumber"];
// Les duos et pauses de texte reprennent les conventions du carnet.
const layouts: { end: number; photos: PhotoNumber[] }[][] = [
  [{ end: 7, photos: [66] }],
  [{ end: 5, photos: [11] }, { end: 7, photos: [26, 30] }],
  [{ end: 3, photos: [73, 90] }, { end: 6, photos: [117] }, { end: 9, photos: [128, 94] }],
  [{ end: 1, photos: [53] }, { end: 8, photos: [42, 50] }],
  [{ end: 9, photos: [] }],
  [{ end: 6, photos: [] }],
];

function Narrative({ text }: { text: string }) {
  return text.split(/(\*\*.*?\*\*|\*[^*]+\*)/g).map((part, index) =>
    part.startsWith("**") ? <strong key={index}>{part.slice(2, -2)}</strong>
      : part.startsWith("*") ? <em key={index}>{part.slice(1, -1)}</em> : part);
}

function Photo({ number, single }: { number: PhotoNumber; single: boolean }) {
  const photo = photos.find((candidate) => candidate.inventoryNumber === number)!;
  const portrait = photo.height > photo.width;
  const sizes = portrait
    ? "(max-width: 397px) 79.2vw, (max-width: 700px) 315px, 378px"
    : single && photo.large
      ? "(max-width: 700px) 88vw, (max-width: 1118px) 85vw, 950px"
      : single
        ? "(max-width: 700px) 88vw, 640px"
        : "(max-width: 700px) 88vw, (max-width: 1118px) calc((85vw - 36px) / 2), 457px";

  return (
    <figure data-photo-number={number} className={`${styles.photo} ${portrait ? `${styles.portrait} ${local.portrait}` : ""}`}
      style={single && !portrait && !photo.large ? { maxWidth: 640 } : undefined}>
      <Image src={`/images/voyages/la-grande-boucle-de-l-ouest/chenonceau/${photo.name}`}
        width={photo.width} height={photo.height} sizes={sizes} loading="lazy" alt={photo.alt} />
      <figcaption>{photo.caption}</figcaption>
    </figure>
  );
}

export default function ChenonceauChapter() {
  return (
    <section id="etape-13" className={`${styles.chapter} ${local.chapter}`} aria-labelledby="etape-13-title">
      <header className={styles.chapterHeader}>
        <p className={journal.dateline}>ÉTAPE 13</p>
        <div>
          <p className={journal.dateline}>Vendredi 1er août 2025 — Jour 15 de notre grande boucle de l&apos;Ouest</p>
          <h2 id="etape-13-title">Chenonceau, un château au fil de l&apos;eau</h2>
          <p className={styles.route}>Monthou-sur-Cher → Château de Chenonceau → Javerdat</p>
        </div>
      </header>
      <Photo number={85} single />
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
