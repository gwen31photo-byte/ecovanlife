import Image, { type StaticImageData } from "next/image";
import journal from "./page.module.css";
import styles from "./bellagio-chapter.module.css";
import morningLake from "../../../../public/images/voyages/de-toulouse-a-litalie/bellagio-lac-montagnes-matin.jpg";
import villages from "../../../../public/images/voyages/de-toulouse-a-litalie/bellagio-lac-reliefs-villages.jpg";
import firstCoffee from "../../../../public/images/voyages/de-toulouse-a-litalie/bellagio-premier-cappuccino.jpg";
import snowyPeaks from "../../../../public/images/voyages/de-toulouse-a-litalie/bellagio-lac-sommets-enneiges.jpg";
import harbour from "../../../../public/images/voyages/de-toulouse-a-litalie/bellagio-port-voiliers.jpg";
import passage from "../../../../public/images/voyages/de-toulouse-a-litalie/bellagio-promenade-ruelle.jpg";
import sailboats from "../../../../public/images/voyages/de-toulouse-a-litalie/bellagio-port-voiliers-canard.jpg";
import descent from "../../../../public/images/voyages/de-toulouse-a-litalie/bellagio-descente-vers-lac.jpg";
import redHouse from "../../../../public/images/voyages/de-toulouse-a-litalie/bellagio-escalier-maison-rouge.jpg";
import shoppingStreet from "../../../../public/images/voyages/de-toulouse-a-litalie/bellagio-rue-commercante.jpg";
import church from "../../../../public/images/voyages/de-toulouse-a-litalie/bellagio-eglise-san-giacomo.jpg";
import churchInterior from "../../../../public/images/voyages/de-toulouse-a-litalie/bellagio-san-giacomo-interieur.jpg";
import secondCoffee from "../../../../public/images/voyages/de-toulouse-a-litalie/bellagio-deuxieme-cappuccino.jpg";
import boat from "../../../../public/images/voyages/de-toulouse-a-litalie/bellagio-bateau-sur-lac.jpg";
import staircase from "../../../../public/images/voyages/de-toulouse-a-litalie/bellagio-escalier-boutiques.jpg";
import van from "../../../../public/images/voyages/de-toulouse-a-litalie/bellagio-van-parking.jpg";

const wide = "(max-width: 700px) 88vw, (max-width: 1118px) 85vw, 950px";
const portrait = "(max-width: 700px) 70vw, 360px";
const coffeeSize = "(max-width: 700px) 55vw, 220px";

function Photo({ src, alt, className = "", sizes = "(max-width: 700px) 88vw, (max-width: 1412px) 40vw, 560px", caption, exifPortrait = false }: {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
  caption?: string;
  exifPortrait?: boolean;
}) {
  return (
    <figure className={`${journal.photograph} ${styles.photo} ${className}`}>
      {/* Keep the EXIF-oriented original and reserve its displayed portrait proportions. */}
      <Image src={src} alt={alt} sizes={sizes} unoptimized={exifPortrait}
        width={exifPortrait ? 4000 : src.width} height={exifPortrait ? 6000 : src.height} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export default function BellagioChapter() {
  return (
    <section id="etape-12" className={`${journal.chapter} ${styles.chapter}`} aria-labelledby="bellagio-title">
      <header className={journal.chapterHeader}>
        <p className={journal.chapterNumber}>ÉTAPE 12</p>
        <div>
          <p className={journal.dateline}>24 AVRIL 2025</p>
          <h2 id="bellagio-title">Bellagio</h2>
          <p className={journal.route}>La Fornace → Bellagio / lac de Côme</p>
        </div>
      </header>

      <div className={`${journal.prose} ${styles.text}`}>
        <p>La nuit du 23 au 24 avril au camping La Fornace a été agitée : un orage est venu bousculer notre sommeil. Au matin, nous quittons donc le camping assez tôt et prenons la direction de Bellagio.</p>
        <p>Sur la route, nous nous arrêtons plusieurs fois pour photographier le lac de Côme. Entre l’eau, les montagnes et les sommets encore enneigés, il y a de quoi prendre le temps de regarder.</p>
      </div>
      <Photo src={morningLake} alt="Le lac de Côme et les montagnes au matin du 24 avril" className={styles.lead} sizes={wide} />
      <Photo src={villages} alt="Les reliefs et les villages au bord du lac de Côme" className={styles.echo} sizes="(max-width: 700px) 75vw, 650px" />
      <div className={styles.coffeeBreak}>
        <div className={journal.prose}>
          <p>Un premier cappuccino fait aussi partie des photos de cette matinée. Nous ne nous souvenons plus exactement de l’endroit où nous l’avons pris, mais cette petite pause a bien sa place dans notre carnet.</p>
        </div>
        <Photo src={firstCoffee} alt="Notre premier cappuccino de la matinée" sizes={coffeeSize} caption="Une pause de la matinée, dont le lieu nous échappe aujourd’hui." />
      </div>
      <Photo src={snowyPeaks} alt="Les sommets encore enneigés au-dessus du lac de Côme" className={styles.panorama} sizes="(max-width: 700px) 88vw, 900px" />

      <section className={styles.sequence} aria-labelledby="bellagio-walk">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="bellagio-walk">De ruelle en ruelle</h3>
          <p>Une fois arrivés à Bellagio, nous garons le camion et partons découvrir le village à pied. Nous nous promenons sans véritable itinéraire, en passant d’une petite rue pavée à un escalier, d’un passage entre les maisons à une ouverture sur le lac.</p>
          <p>Le petit port et ses voiliers font eux aussi partie de cette découverte.</p>
        </div>
        <Photo src={harbour} alt="Le petit port de Bellagio et ses voiliers" className={styles.lead} sizes={wide} />
        <div className={styles.harbourPair}>
          <Photo src={passage} alt="Une personne se promène dans un passage entre un mur et la végétation à Bellagio" sizes={portrait} />
          <Photo src={sailboats} alt="Les voiliers du port de Bellagio, avec un canard visible au premier plan" sizes="(max-width: 700px) 88vw, 640px" />
        </div>
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>Nous continuons à marcher au fil des ruelles. Les façades, les commerces et la végétation nous donnent autant de raisons de regarder autour de nous. Entre les maisons, le lac réapparaît par petites ouvertures.</p>
        </div>
        <div className={styles.lanesPair}>
          <Photo src={descent} alt="Un passage descendant vers le lac et les petites embarcations à Bellagio" exifPortrait sizes={portrait} />
          <Photo src={redHouse} alt="Des escaliers, de la végétation et des silhouettes près d’une maison rouge à Bellagio" sizes="(max-width: 700px) 88vw, 640px" />
        </div>
        <Photo src={shoppingStreet} alt="Une rue pavée de Bellagio entre façades, boutiques et passants" className={styles.street} sizes={portrait} />
      </section>

      <section className={styles.sequence} aria-labelledby="bellagio-church">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="bellagio-church">San Giacomo et une autre pause cappuccino</h3>
          <p>Nous visitons ensuite l’église San Giacomo. Après les ruelles et les vues sur le lac, notre promenade nous conduit à découvrir son intérieur.</p>
        </div>
        <div className={styles.churchPair}>
          <Photo src={church} alt="L’église San Giacomo, son clocher et la place à Bellagio" sizes="(max-width: 700px) 75vw, 420px" caption="San Giacomo, au fil de notre promenade." />
          <Photo src={churchInterior} alt="L’intérieur de l’église San Giacomo à Bellagio" sizes={portrait} />
        </div>
        <div className={styles.coffeeBreak}>
          <div className={journal.prose}>
            <p>Après la visite, nous nous arrêtons pour un autre cappuccino. Cette fois, je me souviens que nous étions non loin de l’église. Un deuxième petit moment de pause, avant de continuer à nous promener dans Bellagio.</p>
          </div>
          <Photo src={secondCoffee} alt="Notre deuxième cappuccino, pris non loin de San Giacomo" sizes={coffeeSize} caption="Le deuxième cappuccino, non loin de l’église." />
        </div>
      </section>

      <section className={styles.sequence} aria-labelledby="bellagio-return">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="bellagio-return">Encore quelques pas, puis le retour</h3>
          <p>Nous poursuivons la promenade, entre les escaliers et les boutiques. Sur le lac, un bateau de passagers fait lui aussi partie du paysage que nous observons.</p>
        </div>
        <Photo src={boat} alt="Un bateau de passagers sur le lac de Côme, observé depuis Bellagio" className={styles.panorama} sizes="(max-width: 700px) 88vw, 900px" />
        <Photo src={staircase} alt="Un grand escalier pavé de Bellagio entre boutiques, façades et promeneurs" className={styles.staircase} sizes="(max-width: 700px) 80vw, 520px" />
        <div className={styles.closing}>
          <div className={`${journal.prose} ${styles.text}`}>
            <p>Mais il faut finalement penser au retour. Nous sommes le jeudi 24 avril 2025 : nous devons être rentrés à Fonsorbes le dimanche, car le travail reprend le lundi. Et la maison est encore loin.</p>
            <p>C’est avec regret que nous décidons de ne pas poursuivre davantage notre découverte du lac de Côme. Nous retrouvons le camion sur le parking et reprenons la route.</p>
            <p>Après tous ces jours passés à avancer toujours plus loin en Italie, notre voyage change désormais de direction. Nous commençons à reprendre le chemin de la France.</p>
          </div>
          <Photo src={van} alt="Notre van rouge et blanc sur le parking à Bellagio" className={styles.van} sizes="(max-width: 700px) 88vw, 800px" caption="Nous retrouvons le camion avant de reprendre la route." />
        </div>
      </section>
    </section>
  );
}
