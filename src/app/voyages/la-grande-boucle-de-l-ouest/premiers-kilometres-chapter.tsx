import Image, { type StaticImageData } from "next/image";
import journal from "./page.module.css";
import styles from "./premiers-kilometres-chapter.module.css";
import depart from "../../../../public/images/voyages/la-grande-boucle-de-l-ouest/fonsorbes-van-charge-depart.jpg";
import halte from "../../../../public/images/voyages/la-grande-boucle-de-l-ouest/sainte-bazeille-halte-arboree.jpg";
import repas from "../../../../public/images/voyages/la-grande-boucle-de-l-ouest/sainte-bazeille-repas-devant-van.jpg";
import pente from "../../../../public/images/voyages/la-grande-boucle-de-l-ouest/dune-du-pilat-pente-de-sable.jpg";
import panorama from "../../../../public/images/voyages/la-grande-boucle-de-l-ouest/dune-du-pilat-panorama-mer-pinede.jpg";
import foret from "../../../../public/images/voyages/la-grande-boucle-de-l-ouest/dune-du-pilat-panorama-foret.jpg";
import descente from "../../../../public/images/voyages/la-grande-boucle-de-l-ouest/dune-du-pilat-descente-dans-le-sable.jpg";
import camping from "../../../../public/images/voyages/la-grande-boucle-de-l-ouest/camping-installation-van-premiere-soiree.jpg";

const wide = "(max-width: 700px) 88vw, (max-width: 1118px) 85vw, 950px";
const portrait = "(max-width: 700px) 80vw, (max-width: 1000px) 36vw, 420px";
const medium = "(max-width: 700px) 88vw, (max-width: 941px) 85vw, 800px";

function Photo({ src, alt, caption, className = "", sizes = wide, preload = false }: {
  src: StaticImageData;
  alt: string;
  caption: string;
  className?: string;
  sizes?: string;
  preload?: boolean;
}) {
  return (
    <figure className={`${styles.photo} ${className}`}>
      <Image src={src} alt={alt} sizes={sizes} preload={preload} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function PremiersKilometresChapter() {
  return (
    <section id="etape-1" className={styles.chapter} aria-labelledby="etape-1-title">
      <header className={styles.chapterHeader}>
        <p className={journal.dateline}>ÉTAPE 01</p>
        <div>
          <p className={journal.dateline}>18–19 JUILLET 2025 · JOURS 1 ET 2</p>
          <h2 id="etape-1-title">Premiers kilomètres vers l’Atlantique</h2>
          <p className={styles.route}>Fonsorbes → Sainte-Bazeille → Dune du Pilat</p>
        </div>
      </header>

      <section className={styles.sequence} aria-labelledby="depart-title">
        <div className={styles.departure}>
          <Photo src={depart} alt="Le hayon ouvert de notre van rouge, chargé de bagages et de literie avant le départ" caption="Le van est chargé, il ne reste plus qu’à prendre la route." sizes={portrait} className={styles.portrait} preload />
          <div className={journal.prose}>
            <p className={journal.dateline}>18 JUILLET</p>
            <h3 id="depart-title">Le départ</h3>
            <p>
              Nous quittons Fonsorbes vers 16 h, le van chargé, en direction du
              bassin d’Arcachon. Pour cette première après-midi, nous prenons
              simplement la route vers l’Atlantique.
            </p>
            <p>
              Nous savons que nous devrons nous arrêter avant d’y arriver :
              nous voulons trouver un endroit agréable et être installés avant
              la nuit. Pas question de chercher à atteindre absolument la dune
              dès le premier soir.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sequence} aria-labelledby="sainte-bazeille-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="sainte-bazeille-title">Une première nuit à Sainte-Bazeille</h3>
          <p>
            En cours de route, nous trouvons finalement à Sainte-Bazeille un
            endroit naturel et agréable, entretenu par la mairie pour
            accueillir les camping-cars et les vans. Nous nous installons
            tranquillement sous les arbres. Le lieu nous plaît.
          </p>
        </div>
        <Photo src={halte} alt="Notre van rouge et blanc stationné sous les arbres, avec d’autres véhicules aménagés sur l’aire de Sainte-Bazeille" caption="Sainte-Bazeille · Notre première halte, à l’ombre des arbres." className={styles.landscape} />
        <div className={styles.evening}>
          <Photo src={repas} alt="Un repas à une table pliante devant notre van, sous les arbres à Sainte-Bazeille" caption="Un repas dehors devant le van, pour commencer le voyage." sizes={portrait} className={styles.portrait} />
          <div className={journal.prose}>
            <p>
              Nous prenons notre repas dehors, devant le van, puis nous
              installons le couchage pour la nuit. Nous gardons le souvenir
              d’un endroit calme et sympathique, où nous passons une nuit
              agréable.
            </p>
            <p>
              Cette première halte correspond bien à notre façon habituelle
              de voyager : avancer au jour le jour et décider en cours de
              route où nous passerons la nuit.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sequence} aria-labelledby="pilat-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <p className={journal.dateline}>19 JUILLET</p>
          <h3 id="pilat-title">La dune du Pilat</h3>
          <p>
            Nous repartons le lendemain matin en direction de la dune du
            Pilat. Nous arrivons dans le secteur au début de l’après-midi et
            nous nous garons au parking de la dune.
          </p>
          <p>
            En découvrant la pente de sable, nous sommes assez impressionnés.
            La montée directement dans le sable ne nous inspire pas vraiment…
            alors nous choisissons les escaliers. 😄
          </p>
        </div>
        <Photo src={pente} alt="La grande pente de sable de la dune du Pilat, avec des visiteurs et des ganivelles au premier plan" caption="Devant cette pente, nous choisissons finalement les escaliers." className={styles.landscape} />
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>
            Une fois en haut, le paysage est magnifique. Entre la dune, la
            forêt et l’océan, le panorama s’ouvre devant nous. Nous prenons le
            temps de nous arrêter et de profiter de la vue.
          </p>
        </div>
        <Photo src={panorama} alt="Depuis la dune du Pilat, le sable et la pinède au premier plan, les eaux bleues et un voilier blanc" caption="Depuis les hauteurs de la dune, entre sable, pinède et océan." className={styles.panorama} sizes="(max-width: 700px) 88vw, (max-width: 1412px) 85vw, 1200px" />
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>
            De l’autre côté, la dune domine la forêt. Nous découvrons aussi
            ce versant du paysage avant de redescendre.
          </p>
        </div>
        <Photo src={foret} alt="Le versant intérieur de la dune du Pilat au-dessus d’une vaste étendue de forêt" caption="L’autre côté du panorama, face à la forêt." className={styles.medium} sizes={medium} />
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>
            Pour la descente, en revanche, plus besoin des escaliers : nous
            redescendons directement dans le sable.
          </p>
        </div>
        <Photo src={descente} alt="Des visiteurs descendent pieds nus dans le sable de la dune du Pilat, avec la forêt en contrebas" caption="Cette fois, nous redescendons directement dans le sable." className={styles.landscape} />
      </section>

      <section className={styles.sequence} aria-labelledby="camping-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="camping-title">Une expérience différente pour les prochains jours</h3>
          <p>
            Après la dune, nous reprenons la route et nous nous installons au
            camping dans la soirée.
          </p>
        </div>
        <Photo src={camping} alt="Notre van installé sur un emplacement de camping, avec une table, des chaises et une personne assise à côté" caption="19 juillet · Installation au camping pour la soirée." className={styles.medium} sizes={medium} />
        <div className={`${journal.prose} ${styles.closing}`}>
          <p>
            Cette fois, nous avons volontairement décidé de tenter une
            expérience différente : rester plusieurs nuits au même camping et
            rayonner dans les environs depuis ce point fixe. D’habitude, nous
            avançons au jour le jour et cherchons au fur et à mesure où dormir.
            Pour les prochains jours, nous allons essayer une autre manière
            de voyager.
          </p>
        </div>
      </section>
    </section>
  );
}
