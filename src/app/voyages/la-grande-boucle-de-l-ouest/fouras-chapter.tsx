import Image from "next/image";
import journal from "./page.module.css";
import chapter from "./ile-oleron-chapter.module.css";
import styles from "./fouras-chapter.module.css";

const imagePath = "/images/voyages/la-grande-boucle-de-l-ouest/fouras/";

function Photo({ name, alt, width = 6000, height = 4000, caption, className = styles.landscape }: {
  name: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`${styles.photo} ${className}`}>
      <Image src={`${imagePath}${name}`} width={width} height={height} unoptimized alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export default function FourasChapter() {
  return (
    <section id="etape-5" className={chapter.chapter} aria-labelledby="etape-5-title">
      <header className={chapter.chapterHeader}>
        <p className={journal.dateline}>ÉTAPE 05</p>
        <div>
          <p className={journal.dateline}>23 juillet 2025 · Jour 6</p>
          <h2 id="etape-5-title">Fouras et la pointe de la Fumée</h2>
          <p className={chapter.route}>Arces-sur-Gironde → Pointe de la Fumée → Fouras → Puy du Fou</p>
        </div>
      </header>

      <div className={`${journal.prose} ${chapter.introduction}`}>
        <p>
          La veille au soir, après notre journée à Meschers-sur-Gironde,
          nous sommes revenus au Camping Les 2 Salamandres, à Arces-sur-Gironde.
          Nous cherchons une destination pour le lendemain : il nous reste
          une journée avant le Puy du Fou, et nous voulons commencer à nous
          rapprocher du parc.
        </p>
        <p>
          Cette fois, c’est moi qui propose Fouras. Je me dis que nous
          pourrons peut-être mieux voir Fort Boyard depuis là-bas. Nous
          décidons donc d’y aller, et le lendemain matin, nous quittons le camping.
        </p>
      </div>

      <section className={styles.sequence} aria-labelledby="fouras-arrivee-title">
        <div className={`${journal.prose} ${chapter.text}`}>
          <h3 id="fouras-arrivee-title">Un café avant de découvrir la pointe</h3>
          <p>
            Nous arrivons à la pointe de la Fumée vers 13 h, selon mon souvenir.
            Nous nous garons sur un grand parking et prenons un petit café
            près du van avant de partir explorer la plage.
          </p>
        </div>
        <Photo name="PXL_20250723_110711671.jpg" width={3072} height={4080}
          alt="Le van rouge et blanc stationné sous un arbre près du littoral"
          caption="Une pause près du van avant la promenade." className={styles.portrait} />
        <div className={`${journal.prose} ${chapter.textPause}`}>
          <p>
            La marée est basse, et nous trouvons le paysage magnifique.
            Devant nous, les rochers, les bancs découverts et les carrelets
            donnent envie de prendre le temps de regarder.
          </p>
        </div>
        <Photo name="DSC_1849.JPG"
          alt="Un carrelet sur pilotis devant l’estran découvert, avec un fort bas au loin"
          caption="Le paysage de la pointe, à marée basse." />
        <Photo name="DSC_1861.JPG"
          alt="Une cabane de pêche au carrelet sur de hauts pilotis au-dessus de l’eau"
          caption="Un carrelet, au milieu du paysage." />
      </section>

      <section className={styles.sequence} aria-labelledby="fouras-boyard-title">
        <div className={`${journal.prose} ${chapter.text}`}>
          <h3 id="fouras-boyard-title">Fort Boyard reste au loin</h3>
          <p>
            Nous cherchons Fort Boyard du regard. Il apparaît sur les photos,
            mais nous ne le voyons finalement pas mieux que nous l’espérions.
            Cela ne nous empêche pas d’apprécier cet endroit : le paysage,
            à lui seul, nous plaît beaucoup.
          </p>
        </div>
        <Photo name="DSC_1857.JPG"
          alt="La silhouette de Fort Boyard, avec ses rangées d’ouvertures, au loin sur la mer"
          caption="Fort Boyard au loin, photographié au téléobjectif." />
        <Photo name="DSC_1898.JPG"
          alt="Un fort bas au premier plan et la silhouette de Fort Boyard plus loin à gauche"
          caption="Au premier plan, probablement le fort Énet. Fort Boyard apparaît bien plus loin, sur la gauche." />
      </section>

      <section className={styles.sequence} aria-labelledby="fouras-estran-title">
        <div className={`${journal.prose} ${chapter.text}`}>
          <h3 id="fouras-estran-title">Des coquillages et une promenade sur l’estran</h3>
          <p>
            Notre fille est ravie de trouver de nombreux coquillages.
            Pendant qu’elle cherche, mon mari part explorer assez loin sur
            l’estran. De mon côté, je prends beaucoup de photos : il y a
            toujours quelque chose qui me donne envie de m’arrêter.
          </p>
        </div>
        <Photo name="DSC_1864.JPG"
          alt="Notre fille accroupie près des algues et mon mari sur un banc couvert de coquilles"
          caption="Les coquillages font le bonheur de notre fille." />
        <Photo name="DSC_1870.JPG"
          alt="Mon mari marche de dos sur un banc découvert, entre les rochers et la mer"
          caption="Mon mari poursuit son exploration de l’estran." />
        <div className={`${journal.prose} ${chapter.textPause}`}>
          <p>
            Après un moment, je pars le rejoindre. Nous avançons sur cette
            partie découverte à marée basse, avec l’eau de chaque côté.
            Puis nous remarquons qu’elle remonte. Nous faisons demi-tour.
          </p>
        </div>
        <div className={styles.pair}>
          <Photo name="PXL_20250723_114159292.jpg" width={3072} height={4080}
            alt="Mon mari au loin sur un large passage de sable et de coquilles, avec la mer de chaque côté"
            caption="Sur l’estran, je pars le rejoindre." className={styles.pairPhoto} />
          <Photo name="PXL_20250723_115551157.jpg" width={3072} height={4080}
            alt="L’eau et les vagues bordent les deux côtés d’un banc de sable et de rochers"
            caption="L’eau remonte : nous faisons demi-tour." className={styles.pairPhoto} />
        </div>
        <div className={`${journal.prose} ${chapter.textPause}`}>
          <p>
            Même sans la vue sur Fort Boyard que nous avions imaginée,
            nous avons beaucoup aimé cette promenade. Les coquillages,
            les rochers et toute cette étendue découverte nous ont donné
            une belle surprise pour cette journée improvisée.
          </p>
        </div>
        <Photo name="PXL_20250723_115236852.jpg" width={4080} height={3072}
          alt="Un banc de sable et de rochers découvert entre deux étendues d’eau, face au rivage" />
        <Photo name="DSC_1901.JPG"
          alt="L’eau passe entre les rochers d’un banc encore partiellement découvert" />
      </section>

      <section className={styles.sequence} aria-labelledby="fouras-chateau-title">
        <div className={`${journal.prose} ${chapter.text}`}>
          <h3 id="fouras-chateau-title">Le petit château de Fouras</h3>
          <p>
            Nous reprenons ensuite le van pour aller découvrir le château
            de Fouras. Je le trouve petit, mais sympathique. Après les
            grands espaces de la pointe, nous passons à la passerelle,
            aux murs de pierre et à la cour du château.
          </p>
        </div>
        <Photo name="PXL_20250723_124126076.jpg" width={4080} height={3072}
          alt="La façade du château de Fouras avec son donjon et ses deux tours rondes"
          caption="Le château de Fouras, aussi appelé Fort Vauban." />
        <Photo name="DSC_1916.JPG"
          alt="Une passerelle en bois mène à la porte du château entre les murs de pierre"
          caption="L’entrée du château." />
        <div className={`${journal.prose} ${chapter.textPause}`}>
          <p>
            Nous découvrons la cour et le donjon, puis retrouvons la mer
            depuis les remparts. La vue sur la plage prolonge cette journée
            passée à profiter du littoral.
          </p>
        </div>
        <Photo name="DSC_1918.JPG"
          alt="Un bâtiment bas au toit de tuiles dans la cour du château, près du passage d’entrée" />
        <Photo name="DSC_1921.JPG" width={4000} height={6000}
          alt="Le donjon de pierre du château de Fouras, surmonté de drapeaux"
          className={styles.portrait} />
        <Photo name="DSC_1923.JPG"
          alt="Une plage de sable et le front de mer de Fouras vus depuis les remparts"
          caption="La plage vue depuis le château." />
      </section>

      <div className={`${journal.prose} ${styles.closing}`}>
        <p>
          Après Fouras, nous reprenons la route vers l’aire de camping-cars
          du Puy du Fou. Nous y passerons plusieurs nuits. Je n’ai pas de
          photos de notre arrivée, mais nous voilà installés pour plusieurs nuits.
          La prochaine étape de notre aventure nous attend : le Puy du Fou.
        </p>
      </div>
    </section>
  );
}
