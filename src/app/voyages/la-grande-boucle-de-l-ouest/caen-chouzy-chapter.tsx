import Image from "next/image";
import journal from "./page.module.css";
import styles from "./normandie-chapter.module.css";
import { sections } from "./caen-chouzy-content";
import { photos } from "./caen-chouzy-photos";

type PhotoNumber = (typeof photos)[number]["inventoryNumber"];
// Même présentation que l’étape 10 ; les numéros correspondent aux planches validées.
const layouts: { end: number; photos: PhotoNumber[] }[][] = [
  [{ end: 4, photos: [4] }],
  [{ end: 3, photos: [39] }, { end: 5, photos: [20, 22] },
    { end: 6, photos: [27, 33] }, { end: 7, photos: [37, 47] },
    { end: 7, photos: [54, 58] }, { end: 8, photos: [52] }],
  [{ end: 6, photos: [] }],
  [{ end: 2, photos: [61] }, { end: 4, photos: [62] }, { end: 8, photos: [66] }],
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
      <Image src={`/images/voyages/la-grande-boucle-de-l-ouest/caen-chouzy/${photo.name}`}
        width={photo.width} height={photo.height} sizes={sizes} loading="lazy" alt={photo.alt} />
      {single && <figcaption>{photo.alt}.</figcaption>}
    </figure>
  );
}

export default function CaenChouzyChapter() {
  return (
    <section id="etape-11" className={styles.chapter} aria-labelledby="etape-11-title">
      <header className={styles.chapterHeader}>
        <p className={journal.dateline}>ÉTAPE 11</p>
        <div>
          <p className={journal.dateline}>Mercredi 30 juillet 2025 — Jour 13 de notre grande boucle de l&apos;Ouest</p>
          <h2 id="etape-11-title">Du Mémorial de Caen aux couleurs du soir</h2>
          <p className={styles.route}>Camping municipal Canadian Scottish → Mémorial de Caen → Plan d&apos;eau de Chouzy, à Valloire-sur-Cisse</p>
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
