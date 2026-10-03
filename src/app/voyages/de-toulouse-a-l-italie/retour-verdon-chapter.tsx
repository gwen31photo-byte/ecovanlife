import Image from "next/image";
import journal from "./page.module.css";
import styles from "./retour-verdon-chapter.module.css";
import lake from "../../../../public/images/voyages/de-toulouse-a-litalie/serre-poncon-lac-barrage.jpg";
import gorge from "../../../../public/images/voyages/de-toulouse-a-litalie/verdon-entree-gorges.jpg";
import evening from "../../../../public/images/voyages/de-toulouse-a-litalie/retour-installation-nuit-van.jpg";

const wide = "(max-width: 700px) 88vw, (max-width: 1118px) 85vw, 950px";

export default function RetourVerdonChapter() {
  return (
    <section id="etape-13-suite-retour" className={`${journal.chapter} ${styles.chapter}`} aria-labelledby="suite-retour-title">
      <header className={journal.chapterHeader}>
        <div style={{ gridColumn: "-2 / -1" }}>
          <p className={journal.dateline}>25 AVRIL 2025 · SUR LA ROUTE DU RETOUR</p>
          <h2 id="suite-retour-title">Encore quelques détours avant de nous poser</h2>
        </div>
      </header>
      <div className={`${journal.prose} ${styles.text}`}>
        <h3>Sur la route après Briançon</h3>
        <p>Après cette belle matinée à Briançon, nous reprenons la route avec l’idée de nous rapprocher de la maison. Mais le voyage nous réserve encore quelques beaux paysages !</p>
        <p>Un lac aux eaux turquoise, des montagnes et un barrage : il s’agit très probablement du lac de Serre-Ponçon. Nous prenons le temps de nous arrêter quelques instants, simplement pour profiter du décor.</p>
      </div>
      <figure className={`${journal.photograph} ${styles.photo} ${styles.landscape}`}>
        <Image src={lake} alt="Un lac turquoise entre les versants boisés, avec un barrage au fond et les montagnes dans le lointain" sizes={wide} />
      </figure>

      <section className={styles.sequence} aria-labelledby="retour-verdon-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="retour-verdon-title">Moustiers et les gorges du Verdon</h3>
          <p>Nous passons ensuite par Moustiers-Sainte-Marie. En voyant le village, nous avons bien envie d’aller le découvrir.</p>
          <p>Mais sur place, nous constatons que l’accès est interdit aux camping-cars et aux vans : il faut stationner à l’extérieur, puis prendre une navette pour rejoindre le village. Comme nous sommes déjà sur la route du retour et que nous n’avons pas suffisamment de temps, nous renonçons finalement à la visite. Ce sera pour une autre fois !</p>
          <p>Nous continuons jusqu’aux gorges du Verdon, où nous faisons une petite pause pour admirer le paysage. Nous sommes probablement près de l’entrée des gorges, du côté du pont de Galetas. Entre les falaises, l’eau verte et les petites embarcations, difficile de ne pas s’arrêter quelques instants. 😄</p>
        </div>
        <figure className={`${journal.photograph} ${styles.photo} ${styles.landscape}`}>
          <Image src={gorge} alt="L’eau verte s’engage entre les hautes falaises des gorges, avec de petites embarcations au fil de l’eau" sizes={wide} />
        </figure>
      </section>

      <section className={styles.sequence} aria-labelledby="retour-nuit-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="retour-nuit-title">Se poser pour la nuit</h3>
          <p>Après ce dernier arrêt, nous reprenons encore un peu la route avant de chercher où passer la nuit. Nous finissons par nous installer sur l’aire gratuite des Salles-sur-Verdon.</p>
          <p>Une fois le van posé, nous allons faire quelques courses dans le village avant de revenir passer la soirée au van.</p>
        </div>
        <figure className={`${journal.photograph} ${styles.photo} ${styles.portrait}`}>
          <Image src={evening} alt="Mon mari souriant, installé à table devant le van pour la soirée" sizes="(max-width: 700px) 70vw, 340px" />
        </figure>
        <div className={`${journal.prose} ${styles.closing}`}>
          <p>Cette fois, notre road trip dans le nord de l’Italie touche vraiment à sa fin. Demain, il ne nous restera plus qu’à reprendre la route jusqu’à Fonsorbes, sans nouvelle étape ni visite.</p>
          <p>Après tous ces kilomètres, toutes ces découvertes et tous ces détours parfois complètement improvisés, il est temps de rentrer à la maison. ❤️</p>
        </div>
      </section>
    </section>
  );
}
