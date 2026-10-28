import Image from "next/image";
import journal from "./page.module.css";
import styles from "./normandie-chapter.module.css";
import { sections } from "./beauval-content";
import { photos } from "./beauval-photos";

type PhotoNumber = (typeof photos)[number]["inventoryNumber"];
// Même présentation que les étapes précédentes, avec les 18 photos validées.
const layouts: { end: number; photos: PhotoNumber[] }[][] = [
  [{ end: 4, photos: [] }],
  [{ end: 2, photos: [3] }, { end: 6, photos: [26] }],
  [{ end: 6, photos: [16, 60] }, { end: 8, photos: [] }],
  [{ end: 2, photos: [137] }, { end: 4, photos: [541] }],
  [{ end: 2, photos: [348] }, { end: 5, photos: [278, 612] }],
  [{ end: 1, photos: [517] }, { end: 2, photos: [212, 292] },
    { end: 3, photos: [522, 559] }, { end: 5, photos: [254] }],
  [{ end: 2, photos: [178] }, { end: 4, photos: [181] }, { end: 5, photos: [] }],
  [{ end: 5, photos: [562] }],
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
    ? "(max-width: 477px) 79.2vw, 378px"
    : single && photo.large
      ? "(max-width: 700px) 88vw, (max-width: 1118px) 85vw, 950px"
      : single
        ? "(max-width: 700px) 88vw, 640px"
        : "(max-width: 700px) 88vw, (max-width: 1118px) calc((85vw - 36px) / 2), 457px";

  return (
    <figure data-photo-number={number} className={`${styles.photo} ${portrait ? styles.portrait : ""}`}
      style={single && !portrait && !photo.large ? { maxWidth: 640 } : undefined}>
      <Image src={`/images/voyages/la-grande-boucle-de-l-ouest/beauval/${photo.name}`}
        width={photo.width} height={photo.height} sizes={sizes} loading="lazy" alt={photo.alt} />
      <figcaption>{photo.caption}</figcaption>
    </figure>
  );
}

export default function BeauvalChapter() {
  return (
    <section id="etape-12" className={styles.chapter} aria-labelledby="etape-12-title">
      <header className={styles.chapterHeader}>
        <p className={journal.dateline}>ÉTAPE 12</p>
        <div>
          <p className={journal.dateline}>Jeudi 31 juillet 2025 — Jour 14 de notre grande boucle de l&apos;Ouest</p>
          <h2 id="etape-12-title">Beauval, une parenthèse pleine de vie</h2>
          <p className={styles.route}>Plan d&apos;eau de Chouzy, à Valloire-sur-Cisse → ZooParc de Beauval, à Saint-Aignan → Aire CAMPING-CAR PARK de Monthou-sur-Cher</p>
        </div>
      </header>
      {sections.map((section, sectionIndex) => (
        <section key={section.id} id={section.id} className={styles.sequence} aria-labelledby={sectionIndex === 0 ? "etape-12-title" : `${section.id}-title`}>
          {layouts[sectionIndex].map((block, blockIndex) => {
            const start = blockIndex === 0 ? 0 : layouts[sectionIndex][blockIndex - 1].end;
            return (
              <div key={blockIndex}>
                {(blockIndex === 0 || block.end > start) && (
                  <div className={`${journal.prose} ${blockIndex === 0 ? styles.text : styles.textPause}`}>
                    {blockIndex === 0 && sectionIndex > 0 && <h3 id={`${section.id}-title`}>{section.title}</h3>}
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
