import Image from "next/image";
import journal from "./page.module.css";
import chapter from "./ile-oleron-chapter.module.css";
import styles from "./la-rochelle-chapter.module.css";

const imagePath = "/images/voyages/la-grande-boucle-de-l-ouest/";

function Photo({ name, alt, caption, landscape = false, className = "" }: {
  name: string;
  alt: string;
  caption: string;
  landscape?: boolean;
  className?: string;
}) {
  return (
    <figure className={`${styles.photo} ${className}`}>
      <Image
        src={`${imagePath}${name}.jpg`}
        width={landscape ? 6000 : 3072}
        height={landscape ? 4000 : 4080}
        unoptimized
        alt={alt}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function LaRochelleChapter() {
  return (
    <section id="etape-3" className={chapter.chapter} aria-labelledby="etape-3-title">
      <header className={chapter.chapterHeader}>
        <p className={journal.dateline}>ÉTAPE 03</p>
        <div>
          <p className={journal.dateline}>21 juillet 2025 · Jour 4</p>
          <h2 id="etape-3-title">Une journée à La Rochelle</h2>
          <p className={chapter.route}>Arces-sur-Gironde → La Rochelle</p>
        </div>
      </header>

      <div className={chapter.pause}>
        <div className={journal.prose}>
          <p>
            Au réveil, nous sommes toujours au Camping Les 2 Salamandres,
            à Arces-sur-Gironde. Avant de partir, il faut ranger ce que nous
            avons installé autour du van : nous avons besoin de lui pour
            aller nous promener aujourd’hui.
          </p>
          <p>
            Une fois tout rangé, nous prenons la direction de La Rochelle.
            Nous garons le van puis partons explorer la ville à pied, sans
            programme de visite très précis.
          </p>
        </div>
        <Photo
          name="arces-sur-gironde-van-au-camping-matin"
          alt="Le van rouge et blanc au camping, porte ouverte et protections encore installées"
          caption="Au camping, il reste à ranger avant de repartir pour la journée."
          className={chapter.smallPortrait}
        />
      </div>

      <section className={`${chapter.sequence} ${styles.firstSequence}`} aria-labelledby="rochelle-port-title">
        <div className={`${journal.prose} ${chapter.text}`}>
          <h3 id="rochelle-port-title">Les premiers pas du côté du port</h3>
          <p>
            Nous arrivons par le secteur des bassins. Les voiliers, leurs
            mâts et les quais sont les premières choses que nous découvrons.
            Nous avançons simplement au bord de l’eau, en regardant ce qui
            nous entoure.
          </p>
        </div>
        <Photo
          name="la-rochelle-bassins-voiliers-arrivee"
          alt="Des voiliers dans les bassins de La Rochelle, avec les façades du Gabut et les tours en arrière-plan"
          caption="Les bassins et les voiliers, au début de notre promenade."
          landscape
          className={chapter.landscape}
        />
        <div className={`${journal.prose} ${chapter.textPause}`}>
          <p>
            Peu à peu, nous rejoignons le Vieux-Port. Les tours Saint-Nicolas
            et de la Chaîne se font face à son entrée. Nous prenons le temps
            de les regarder depuis les quais avant de poursuivre la balade.
          </p>
        </div>
        <Photo
          name="la-rochelle-entree-vieux-port-deux-tours"
          alt="La tour de la Chaîne à gauche et la tour Saint-Nicolas à droite, à l’entrée du Vieux-Port"
          caption="Les deux tours qui marquent l’entrée du Vieux-Port."
          landscape
          className={chapter.medium}
        />
        <div className={styles.colorPause}>
          <div className={journal.prose}>
            <p>
              Nous passons aussi parmi les façades colorées du Gabut.
              Les bâtiments en bois, les commerces et les vélos devant les
              vitrines donnent un autre visage à ce secteur du port. Je
              m’arrête pour en garder une photo, puis nous continuons à pied.
            </p>
          </div>
          <Photo
            name="la-rochelle-gabut-facades-colorees"
            alt="Des façades en bois jaunes, rouges et bleues au Gabut, avec des vélos devant un commerce"
            caption="Les couleurs du Gabut, au fil de la marche."
            className={chapter.portrait}
          />
        </div>
      </section>

      <section className={chapter.sequence} aria-labelledby="rochelle-centre-title">
        <div className={`${journal.prose} ${chapter.text}`}>
          <h3 id="rochelle-centre-title">Dans les rues du centre</h3>
          <p>
            Nous avançons petit à petit dans la ville. La Grosse Horloge
            marque le passage vers les rues du centre, où nous poursuivons
            notre découverte entre les arcades et les façades de pierre.
            Une maison à pans de bois attire aussi mon regard.
          </p>
        </div>
        <div className={styles.pair}>
          <Photo
            name="la-rochelle-grosse-horloge-passage-pietons"
            alt="Des piétons passent sous la porte de la Grosse Horloge"
            caption="La Grosse Horloge, entre le port et le centre."
          />
          <Photo
            name="la-rochelle-centre-maison-pans-de-bois"
            alt="Une maison à pans de bois au-dessus des commerces, à côté d’une rue bordée d’arcades"
            caption="Les façades et les arcades que nous découvrons en marchant."
          />
        </div>
        <div className={`${journal.prose} ${chapter.textPause}`}>
          <p>
            Nous entrons ensuite dans la cathédrale Saint-Louis. Nous y
            faisons un tour, en regardant les voûtes, les vitraux et le
            décor de la chapelle de la Vierge. C’est une pause à l’intérieur,
            avant de reprendre notre promenade dans les rues.
          </p>
        </div>
        <div className={styles.pair}>
          <Photo
            name="la-rochelle-saint-louis-chapelle-vierge"
            alt="La statue de la Vierge et l’Enfant sous les peintures et les dorures de la chapelle"
            caption="Saint-Louis · Le décor de la chapelle de la Vierge."
          />
          <Photo
            name="la-rochelle-cathedrale-saint-louis-interieur"
            alt="Les voûtes en pierre claire, les vitraux et l’orgue de la cathédrale Saint-Louis"
            caption="Un moment à l’intérieur de la cathédrale."
          />
        </div>
      </section>

      <section className={chapter.sequence} aria-labelledby="rochelle-remparts-title">
        <div className={`${journal.prose} ${chapter.text}`}>
          <h3 id="rochelle-remparts-title">Revenir vers les remparts et les bassins</h3>
          <p>
            Nous retrouvons le bord du port puis la rue Sur-les-Murs.
            Nous marchons le long des remparts, en direction de la tour
            de la Lanterne, avant de revenir sur nos pas.
          </p>
        </div>
        <Photo
          name="la-rochelle-rue-sur-les-murs-promenade"
          alt="Des promeneurs suivent le chemin pavé des remparts vers la tour de la Lanterne"
          caption="La promenade se poursuit sur les remparts, vers la Lanterne."
          className={chapter.portrait}
        />
        <div className={`${journal.prose} ${chapter.textPause}`}>
          <p>
            Pendant cette balade dans La Rochelle, nous assistons aussi
            par hasard à une danse de rue. Nous nous arrêtons pour regarder,
            sans l’avoir prévu. Je n’ai pas de photo de ce moment, mais il
            fait partie des souvenirs de la journée.
          </p>
        </div>
        <div className={styles.detailPause}>
          <div className={journal.prose}>
            <p>
              Un chariot décoré façon pirate attire également mon regard.
              Je le trouve joli et original, alors je le photographie.
              Un petit détail croisé dans la rue, simplement.
            </p>
          </div>
          <Photo
            name="la-rochelle-chariot-decore-pirate"
            alt="Un homme costumé en pirate accompagne un chariot décoré, surmonté d’un drapeau à tête de mort"
            caption="Ce chariot décoré façon pirate m’a attiré par son côté joli et original."
            landscape
          />
        </div>
        <div className={`${journal.prose} ${chapter.textPause}`}>
          <p>
            Nous repassons par le Gabut et retrouvons les bassins du côté
            de l’Aquarium. La promenade nous ramène dans le secteur où nous
            avions commencé à découvrir la ville.
          </p>
        </div>
        <Photo
          name="la-rochelle-retour-bassins-devant-aquarium"
          alt="Des voiliers et un catamaran amarrés devant le bâtiment de l’Aquarium de La Rochelle"
          caption="Retour vers les bassins, devant l’Aquarium."
          landscape
          className={chapter.medium}
        />
        <div className={`${journal.prose} ${styles.closing}`}>
          <p>
            J’ai trouvé La Rochelle jolie et agréable à parcourir. Nous
            avons pris le temps de découvrir le port, les rues et quelques
            lieux au fil de nos pas. Une belle promenade, même si la ville
            ne restera pas pour moi comme l’un des coups de cœur de ce voyage.
          </p>
        </div>
      </section>
    </section>
  );
}
