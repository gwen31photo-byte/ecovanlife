import Image, { type StaticImageData } from "next/image";
import journal from "./page.module.css";
import styles from "./sirmione-chapter.module.css";
import arrival from "../../../../public/images/voyages/de-toulouse-a-litalie/sirmione-arrivee.jpg";
import streets from "../../../../public/images/voyages/de-toulouse-a-litalie/sirmione-rues.jpg";
import ramparts from "../../../../public/images/voyages/de-toulouse-a-litalie/sirmione-chateau-remparts.jpg";
import tower from "../../../../public/images/voyages/de-toulouse-a-litalie/sirmione-chateau-tour.jpg";
import lakeView from "../../../../public/images/voyages/de-toulouse-a-litalie/sirmione-chateau-vue-lac.jpg";
import harbour from "../../../../public/images/voyages/de-toulouse-a-litalie/sirmione-chateau-port.jpg";
import steps from "../../../../public/images/voyages/de-toulouse-a-litalie/sirmione-chateau-escalier.jpg";
import staircase from "../../../../public/images/voyages/de-toulouse-a-litalie/sirmione-panorama-presquile.jpg";
import townLake from "../../../../public/images/voyages/de-toulouse-a-litalie/sirmione-remparts-ville-lac.jpg";
import castleLake from "../../../../public/images/voyages/de-toulouse-a-litalie/sirmione-chateau-sur-le-lac.jpg";
import model from "../../../../public/images/voyages/de-toulouse-a-litalie/sirmione-chateau-maquette.jpg";
import arches from "../../../../public/images/voyages/de-toulouse-a-litalie/sirmione-grotte-catulle-arches.jpg";
import ruins from "../../../../public/images/voyages/de-toulouse-a-litalie/sirmione-grotte-catulle-ruines.jpg";
import ruinsLake from "../../../../public/images/voyages/de-toulouse-a-litalie/sirmione-grotte-catulle-lac.jpg";
import villa from "../../../../public/images/voyages/de-toulouse-a-litalie/sirmione-villa-romaine.jpg";
import lakePanorama from "../../../../public/images/voyages/de-toulouse-a-litalie/sirmione-lac-de-garde-panorama.jpg";
import ruinsPanorama from "../../../../public/images/voyages/de-toulouse-a-litalie/sirmione-ruines-panorama.jpg";
import promenade from "../../../../public/images/voyages/de-toulouse-a-litalie/sirmione-promenade-lac.jpg";
import birds from "../../../../public/images/voyages/de-toulouse-a-litalie/sirmione-cygnes-canards.jpg";
import duck from "../../../../public/images/voyages/de-toulouse-a-litalie/sirmione-canard-seul.jpg";
import car from "../../../../public/images/voyages/de-toulouse-a-litalie/sirmione-voiture-retour.jpg";

function Photo({ src, alt, className = "", sizes = "(max-width: 700px) 88vw, (max-width: 1412px) 40vw, 560px" }: {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return <figure className={`${styles.photo} ${className}`}><Image src={src} alt={alt} sizes={sizes} /></figure>;
}

const wide = "(max-width: 1412px) 85vw, 1200px";

export default function SirmioneChapter() {
  return (
    <section id="etape-10" className={`${journal.chapter} ${styles.chapter}`} aria-labelledby="sirmione-title">
      <header className={journal.chapterHeader}>
        <p className={journal.chapterNumber}>ÉTAPE 10</p>
        <div>
          <p className={journal.dateline}>22 AVRIL 2025</p>
          <h2 id="sirmione-title">Sirmione, la journée que nous n&apos;avions pas prévue</h2>
          <p className={journal.route}>Sirmione / lac de Garde · Venise → Sirmione → Milan</p>
        </div>
      </header>

      <Photo src={arrival} alt="Les fortifications du château de Sirmione entourées d’eau à notre arrivée" className={styles.introPhoto} sizes="(max-width: 1000px) 85vw, 900px" />

      <section className={`${journal.prose} ${styles.text}`} aria-labelledby="sirmione-ahead">
        <h3 id="sirmione-ahead">Une journée d’avance</h3>
        <p>Notre prochaine grande étape devait être Milan. Mais pendant notre dernière soirée au camping de Venise, nous réalisons que nous avons finalement une journée d’avance sur notre voyage. Nous nous demandons alors ce que nous pourrions découvrir sur la route.</p>
        <p>Mon mari regarde sur Internet et tombe sur le lac de Garde. Il repère Sirmione et son château. Nous n’en savons finalement pas beaucoup plus, mais cela suffit pour décider du programme du lendemain.</p>
        <p>Au réveil : direction le lac de Garde !</p>
      </section>

      <section aria-labelledby="sirmione-arrival">
        <div className={styles.arrival}>
          <div>
            <div className={`${journal.prose} ${styles.text}`}>
              <h3 id="sirmione-arrival">Direction Sirmione</h3>
              <p>Une fois arrivés, se garer près du château s’avère plus compliqué que prévu. Nous finissons par laisser le van vers l’entrée de la ville et continuons à pied. Une bonne marche nous attend avant d’atteindre le centre historique et le château.</p>
            </div>
          </div>
          <Photo src={streets} alt="Une rue de Sirmione entre les façades et les terrasses" sizes="(max-width: 700px) 60vw, 300px" />
        </div>
      </section>

      <section className={styles.sequence} aria-labelledby="sirmione-castle">
        <div className={`${journal.prose} ${styles.text}`}>
          <p className={journal.dateline}>VERS 11 H · LE CHÂTEAU</p>
          <h3 id="sirmione-castle">Les vieilles pierres et le bleu du lac</h3>
          <p>Nous arrivons au château vers 11 h et partons le visiter. La découverte est magnifique. Au fur et à mesure que nous montons et parcourons les remparts, le paysage s’ouvre devant nous : les toits de Sirmione, les fortifications, le port et surtout cette immense étendue d’eau bleue.</p>
        </div>
        <div className={styles.castleOpening}>
          <Photo src={ramparts} alt="Les toits de Sirmione et le lac derrière les créneaux du château" sizes="(max-width: 700px) 88vw, 55vw" />
          <Photo src={tower} alt="Une tour de pierre et les remparts crénelés du château" />
        </div>
        <div className={styles.castleDetails}>
          <Photo src={staircase} alt="Un escalier en bois à l’intérieur d’une tour, éclairé par une fenêtre" sizes="(max-width: 700px) 48vw, 220px" />
          <Photo src={lakeView} alt="Les façades colorées et les toits de Sirmione au bord du lac" />
          <Photo src={steps} alt="L’escalier des remparts descendant vers le bassin fortifié" />
        </div>
        <Photo src={harbour} alt="Le port fortifié, ses tours et le lac de Garde à l’horizon" className={styles.wide} sizes={wide} />
        <div className={styles.castleEcho}>
          <Photo src={townLake} alt="La ville, les bateaux et le lac vus depuis les remparts" />
          <div className={journal.prose}>
            <p>C’est probablement ce contraste entre les vieilles pierres du château et le bleu du lac qui nous marque le plus.</p>
          </div>
        </div>
        <Photo src={castleLake} alt="Les murs du château sur l’immense étendue bleue du lac de Garde" sizes={wide} />
      </section>

      <section className={styles.sequence} aria-labelledby="sirmione-ruins">
        <div className={`${journal.prose} ${styles.text} ${styles.ruinsIntro}`}>
          <h3 id="sirmione-ruins">Encore une visite qui n’était pas prévue</h3>
          <p>Après le château, nous continuons simplement à explorer Sirmione. En marchant, nous tombons sur un panneau indiquant les vestiges d’une ancienne villa romaine. Ce n’était absolument pas au programme. Alors évidemment… nous décidons d’aller voir.</p>
        </div>
        <Photo src={arches} alt="Les arcades de la villa romaine le long d’un chemin bordé de végétation" className={styles.ruinsLead} sizes="(max-width: 1412px) 85vw, 1200px" />
        <div className={styles.ruinsRibbon}>
          <Photo src={model} alt="Une maquette présentant la reconstitution d’un bâtiment à colonnades" sizes="(max-width: 600px) 88vw, (max-width: 1176px) 42vw, 488px" />
          <Photo src={ruins} alt="Les murs en ruine et leurs ouvertures devant le lac et les montagnes" sizes="(max-width: 600px) 88vw, (max-width: 1176px) 42vw, 488px" />
          <Photo src={villa} alt="Les vestiges de la villa romaine avec le lac en arrière-plan" sizes="(max-width: 600px) 88vw, (max-width: 1176px) 42vw, 488px" />
          <Photo src={ruinsLake} alt="Les pierres de la villa et la végétation au-dessus du lac de Garde" sizes="(max-width: 600px) 88vw, (max-width: 1176px) 42vw, 488px" />
        </div>
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>Nous découvrons les ruines au milieu de la végétation, avec le lac de Garde qui apparaît régulièrement derrière les vieilles pierres. Une découverte de plus dans cette journée décidée la veille au soir.</p>
        </div>
        <Photo src={lakePanorama} alt="Une ouverture dans les vestiges, face au lac et aux montagnes" sizes={wide} />
        <Photo src={ruinsPanorama} alt="Les ruines de la villa romaine s’étendent vers les arbres et le lac" className={styles.ruinsEcho} sizes="(max-width: 700px) 75vw, 600px" />
      </section>

      <section className={styles.sequence} aria-labelledby="sirmione-lakeside">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="sirmione-lakeside">Retour par le lac</h3>
          <p>Après les ruines, nous redescendons tranquillement vers le lac. Nous passons par la plage et découvrons une eau incroyablement transparente. Canards et cygnes profitent eux aussi du bord du lac.</p>
          <p>Après les monuments et les ruines, cette promenade au bord de l’eau apporte une fin beaucoup plus calme à notre découverte de Sirmione.</p>
        </div>
        <Photo src={promenade} alt="La promenade au bord de l’eau mène vers le château de Sirmione" className={styles.lakeside} sizes="(max-width: 1412px) 72vw, 900px" />
        <div className={styles.birds}>
          <Photo src={birds} alt="Des cygnes et des canards près des rochers du bord du lac" sizes="(max-width: 700px) 56vw, (max-width: 1100px) 54vw, 579px" />
          <Photo src={duck} alt="Un canard seul sur la plage de galets, au bord de l’eau claire du lac" sizes="(max-width: 700px) 28vw, (max-width: 1100px) 27vw, 291px" />
        </div>
      </section>

      <section className={styles.anecdote} aria-labelledby="sirmione-car">
        <div className={journal.prose}>
          <h3 id="sirmione-car">Une dernière surprise sur le chemin du van</h3>
          <p>En continuant notre chemin pour retrouver le van, nous tombons encore sur une curiosité : une voiture qui attire immédiatement notre regard. Simplement une dernière petite découverte au hasard de la balade, avant de reprendre la route.</p>
        </div>
        <Photo src={car} alt="Une voiture à la carrosserie dorée garée dans une rue de Sirmione" sizes="(max-width: 700px) 55vw, (max-width: 1000px) 240px, 320px" />
      </section>

      <section className={styles.closing} aria-labelledby="sirmione-milan">
        <div className={`${journal.prose} ${styles.text}`}>
          <p className={journal.dateline}>VERS 20 H · ARRIVÉE À MILAN</p>
          <h3 id="sirmione-milan">Direction Milan</h3>
          <p>Nous retrouvons le van et reprenons la route. Cette fois, direction Milan, notre prochaine grande étape prévue depuis le départ. Nous arrivons vers 20 h sur l’aire de camping-car.</p>
          <p>Après toute cette marche, le château, les ruines romaines et la route, nous profitons simplement d’un repos bien mérité. La découverte de Milan attendra demain.</p>
        </div>
      </section>
    </section>
  );
}
