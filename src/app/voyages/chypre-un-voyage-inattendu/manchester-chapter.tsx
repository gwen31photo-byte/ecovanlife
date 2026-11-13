import Image from "next/image";
import { photos } from "./manchester-photos";
import journal from "../la-grande-boucle-de-l-ouest/page.module.css";
import styles from "../la-grande-boucle-de-l-ouest/premiers-kilometres-chapter.module.css";
import layout from "./manchester-chapter.module.css";

type PhotoNumber = (typeof photos)[number]["numero"];
function Photo({ numero, wide = false }: { numero: PhotoNumber; wide?: boolean }) {
  const photo = photos.find((item) => item.numero === numero)!;
  return <figure className={`${styles.photo} ${wide ? styles.medium : styles.portrait}`}>
    <Image src={photo.src} width={photo.width} height={photo.height} alt={photo.alt}
      sizes={wide ? "(max-width: 700px) 88vw, (max-width: 941px) 85vw, 800px" : "(max-width: 700px) 80vw, (max-width: 1000px) 36vw, 420px"} />
    <figcaption>{photo.caption}</figcaption>
  </figure>;
}
function Pair({ numbers }: { numbers: [PhotoNumber, PhotoNumber] }) {
  return <div className={layout.pair}>{numbers.map((numero) => <Photo key={numero} numero={numero} />)}</div>;
}

export default function ManchesterChapter() {
  return <section id="etape-1" className={styles.chapter} aria-labelledby="etape-1-title">
    <header className={styles.chapterHeader}>
      <p className={journal.dateline}>ÉTAPE 01</p>
      <div><p className={journal.dateline}>22 AVRIL 2026 · JOUR 1</p>
        <h2 id="etape-1-title">De Toulouse à une nuit à Manchester</h2>
        <p className={styles.route}>Toulouse-Blagnac → Manchester</p>
      </div>
    </header>
    <section className={styles.sequence} aria-labelledby="toulouse-title">
      <div className={styles.departure}>
        <Photo numero="001" />
        <div className={journal.prose}>
          <p className={journal.dateline}>MERCREDI 22 AVRIL 2026</p>
          <h3 id="toulouse-title">Trois sacs à dos, et c’est parti</h3>
          <p>Cette fois, nous avons laissé les valises de côté : un seul sac à dos cabine chacun, notamment pour éviter le prix des bagages en soute. Nos trois sacs étaient identiques. Sur la photo, mon mari et ma fille avancent de dos, leurs sacs sur les épaules : le voyage commence.</p>
          <p>Nous avions aussi emporté des vêtements déjà usés, avec l’idée de libérer de la place au fil du séjour pour rapporter des vêtements neufs et des souvenirs.</p>
          <p>À Toulouse-Blagnac, notre vol décolle à 16 h 40. Première destination : Manchester, où nous arrivons à 17 h 45, heure locale.</p>
        </div>
      </div>
      <Pair numbers={["002", "003"]} />
    </section>
    <section className={styles.sequence} aria-labelledby="manchester-title">
      <div className={`${journal.prose} ${styles.text}`}>
        <h3 id="manchester-title">Une soirée à Manchester</h3>
        <p>Une fois arrivés, nous prenons le train depuis l’aéroport pour rejoindre le centre-ville. Nous profitons de cette escale pour nous promener dans Manchester et découvrir ses beaux bâtiments illuminés.</p>
      </div>
      <Pair numbers={["004", "005"]} />
      <div className={styles.evening}>
        <Photo numero="006" />
        <div className={journal.prose}><p>Au fil de la promenade, nous découvrons aussi ce bus jaune à impériale. Entre les façades et les lumières du soir, je garde quelques images de cette première escale.</p></div>
      </div>
      <Pair numbers={["010", "012"]} />
      <div className={layout.single}><Photo numero="013" /></div>
      <Pair numbers={["015", "016"]} />
      <div className={layout.single}><Photo numero="018" wide /></div>
      <div className={`${journal.prose} ${styles.closing}`}>
        <p>Nous faisons une petite pause chez McDonald’s. Nous remarquons que les prix sont plus élevés qu’en France ! Puis il est temps de reprendre le chemin de l’aéroport : c’est là que nous allons passer la nuit.</p>
      </div>
    </section>
    <section className={styles.sequence} aria-labelledby="aeroport-title">
      <div className={styles.departure}>
        <Photo numero="019" />
        <div className={journal.prose}>
          <p className={journal.dateline}>DANS LA NUIT DU 22 AU 23 AVRIL</p>
          <h3 id="aeroport-title">La nuit commence à l’aéroport</h3>
          <p>Notre prochain vol est prévu le jeudi 23 avril à 5 h 50, direction Paphos. En attendant, nous essayons de dormir un peu à l’aéroport.</p>
          <p>Mon mari et ma fille y arrivent un peu. Pour moi, c’est plus compliqué : je suis moins à l’aise avec les voyages en avion, et mon petit van me manque déjà !</p>
        </div>
      </div>
      <div className={layout.single}><Photo numero="020" wide /></div>
    </section>
  </section>;
}
