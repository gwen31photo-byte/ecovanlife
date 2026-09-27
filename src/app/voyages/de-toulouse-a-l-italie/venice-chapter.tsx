import Image, { type StaticImageData } from "next/image";
import journal from "./page.module.css";
import styles from "./venice-chapter.module.css";
import firstBridge from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-premiers-ponts.jpg";
import firstCanals from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-premiers-canaux.jpg";
import firstStreets from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-premieres-ruelles.jpg";
import betweenHouses from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-canal-entre-maisons.jpg";
import streetCanal from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-ruelle-et-canal.jpg";
import smallCanal from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-petit-canal.jpg";
import canalWalk from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-balade-au-fil-des-canaux.jpg";
import chanceChurch from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-eglise-au-hasard.jpg";
import duskStreets from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-ruelles-fin-de-journee.jpg";
import eveningTower from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-campanile-saint-marc.jpg";
import eveningSquare from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-place-saint-marc-soir.jpg";
import lights from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-canaux-illumines.jpg";
import twilight from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-grand-canal-crepuscule.jpg";
import coffee from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-cappuccino-du-matin.jpg";
import sandwiches from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-preparation-sandwichs-van.jpg";
import backToTown from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-retour-vers-la-ville.jpg";
import secondDayCanal from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-canal-deuxieme-jour.jpg";
import leonardo from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-exposition-leonard-de-vinci.jpg";
import invention from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-leonard-de-vinci-invention.jpg";
import machines from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-leonard-de-vinci-machines.jpg";
import church from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-eglise-monumentale.jpg";
import churchInterior from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-interieur-eglise.jpg";
import waterside from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-lagune-et-campanile.jpg";
import squareArrival from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-arrivee-place-saint-marc.jpg";
import squareTower from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-campanile-place-saint-marc.jpg";
import palaceCourtyard from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-place-saint-marc.jpg";
import palaceExterior from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-palais-des-doges-exterieur.jpg";
import palaceRoom from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-palais-des-doges-salle.jpg";
import palaceCeiling from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-palais-des-doges-plafond.jpg";
import armoury from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-palais-des-doges-armurerie.jpg";
import prison from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-palais-des-doges-prison.jpg";
import lastPassage from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-dernieres-ruelles.jpg";
import gondola from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-gondole-sur-le-retour.jpg";

function Photo({ src, alt, className = "", sizes = "(max-width: 700px) 88vw, (max-width: 1412px) 40vw, 550px" }: {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return <figure className={`${styles.photo} ${className}`}><Image src={src} alt={alt} sizes={sizes} /></figure>;
}

export default function VeniceChapter() {
  return (
    <section id="etape-09" className={`${journal.chapter} ${styles.chapter}`} aria-labelledby="venise-title">
      <header className={journal.chapterHeader}>
        <p className={journal.chapterNumber}>ÉTAPE 09</p>
        <div>
          <p className={journal.dateline}>20–21 AVRIL 2025</p>
          <h2 id="venise-title">Venise, au fil des canaux et des détours</h2>
          <p className={journal.route}>Depuis le Camping Venezia Village</p>
        </div>
      </header>

      <section aria-labelledby="venise-first-evening">
        <div className={styles.arrival}>
          <div className={journal.prose}>
            <p className={journal.dateline}>20 AVRIL · PREMIÈRE SOIRÉE</p>
            <h3 id="venise-first-evening">D’abord, trouver le bon bus</h3>
            <p>À peine installés au Camping Venezia Village, où nous sommes arrivés vers 16 h 30, nous partons découvrir Venise. Mon mari avait choisi ce camping notamment pour cela : il avait vérifié que nous pourrions rejoindre la ville facilement sans utiliser le van, avec un arrêt de bus juste à côté.</p>
            <p>Nous réussissons quand même à nous tromper de bus ! Il faut descendre, revenir à notre arrêt et prendre, cette fois, le bon. Une petite mésaventure de plus dans notre road trip.</p>
          </div>
          <Photo src={firstBridge} alt="Des piétons traversent un pont vitré au-dessus d’un canal à notre arrivée à Venise" />
        </div>
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>Ma toute première impression en arrivant : « beaucoup trop de monde ». Après Florence, je suis un peu déçue. Mais nous n’avons aucun programme pour cette soirée, alors nous commençons simplement à marcher, rue après rue.</p>
        </div>
        <div className={styles.firstWalk}>
          <Photo src={firstCanals} alt="Les bateaux et les façades colorées au bord du Grand Canal" />
          <Photo src={firstStreets} alt="Une rue animée entre les hautes façades de Venise" />
        </div>
        <div className={`${journal.prose} ${styles.textPause}`}>
          <h3>Les canaux changent la première impression</h3>
          <p>Petit à petit, les petites rues, les ponts et surtout les canaux me font apprécier Venise. C’est en nous promenant au hasard que la ville commence vraiment à me plaire.</p>
        </div>
        <div className={styles.canalWeave}>
          <Photo src={betweenHouses} alt="Un canal étroit entre les façades roses et les maisons de Venise" />
          <div className={styles.canalAside}>
            <Photo src={streetCanal} alt="Des gondoles sur un canal bordé de ruelles et de façades" />
            <div className={journal.prose}>
              <p>Nous découvrons aussi un vrai labyrinthe. Beaucoup de rues se ressemblent et on perd facilement ses repères. Le GPS devient rapidement notre ami !</p>
            </div>
          </div>
        </div>
        <div className={styles.canalOpening}>
          <Photo src={smallCanal} alt="Un petit canal resserré entre deux rangées de maisons" />
          <Photo src={canalWalk} alt="Un canal plus large longé de façades et de bateaux amarrés" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 52vw, 720px" />
        </div>
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>Nous continuons à avancer sans itinéraire, entre les canaux, les petites places et les façades des églises. À force de marcher, nous finissons par rejoindre la place Saint-Marc.</p>
        </div>
        <div className={styles.towardSquare}>
          <Photo src={chanceChurch} alt="Les façades de grands édifices religieux ouvrent sur une place de Venise" />
          <Photo src={duskStreets} alt="Une ruelle longe un canal et rejoint un petit pont à la fin du jour" />
        </div>
        <div className={styles.eveningSquare}>
          <div className={journal.prose}>
            <h3>Saint-Marc, puis encore un peu de Venise</h3>
            <p>La place me plaît, mais ce soir-là, elle ne m’impressionne pas autant que les petites rues et les canaux. Ce sont vraiment eux qui me séduisent dans cette première découverte.</p>
          </div>
          <div className={styles.squarePortraits}>
            <Photo src={eveningTower} alt="Le campanile de Saint-Marc sous le ciel du soir" sizes="(max-width: 700px) 40vw, 22vw" />
            <Photo src={eveningSquare} alt="Une façade éclairée sur la place Saint-Marc à la tombée du jour" sizes="(max-width: 700px) 40vw, 22vw" />
          </div>
        </div>
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>La promenade se poursuit alors que la lumière baisse. Nous retrouvons les canaux, cette fois bordés de lumières, pour terminer cette première soirée à Venise.</p>
        </div>
        <Photo src={lights} alt="Le Grand Canal et ses façades illuminées sous un ciel bleu sombre" className={styles.nightWide} sizes="(max-width: 700px) 88vw, (max-width: 1412px) 76vw, 1050px" />
        <Photo src={twilight} alt="Un bateau traverse le Grand Canal au crépuscule entre les quais éclairés" className={styles.nightEcho} sizes="(max-width: 700px) 70vw, (max-width: 1412px) 40vw, 550px" />
      </section>

      <section className={styles.morning} aria-labelledby="venise-camping-morning">
        <div className={`${journal.prose} ${styles.text}`}>
          <p className={journal.dateline}>21 AVRIL · UNE MATINÉE AU CAMPING</p>
          <h3 id="venise-camping-morning">Cappuccino, sandwichs et lessives</h3>
          <p>Vers 7 h 50, nous retrouvons notre cappuccino du matin. Il commence à devenir un vrai petit rituel italien. Mon mari prépare aussi les sandwichs devant le van.</p>
          <p>La matinée est tranquille : nous profitons des services du camping pour faire nos machines à laver. C’était justement l’une des raisons de rester plusieurs nuits au même endroit. Nous ne repartons vers Venise que vers midi.</p>
        </div>
        <div className={styles.campingDetails}>
          <Photo src={coffee} alt="Le cappuccino du matin, servi dans une tasse blanche" className={styles.coffee} sizes="(max-width: 700px) 115px, 155px" />
          <Photo src={sandwiches} alt="Mon mari prépare les sandwichs sur une table devant notre van ouvert" sizes="(max-width: 700px) 88vw, 380px" />
        </div>
      </section>

      <section className={styles.sequence} aria-labelledby="venise-back">
        <div className={styles.returnRoute}>
          <Photo src={backToTown} alt="Des bateaux amarrés devant les façades en retrouvant les canaux de Venise" />
          <div>
            <div className={journal.prose}>
              <p className={journal.dateline}>RETOUR À VENISE</p>
              <h3 id="venise-back">Cette fois, nous avons un itinéraire</h3>
              <p>Grâce au repérage de la veille, mon mari prépare le GPS pour rejoindre plus rapidement la place Saint-Marc. Nous voulons garder davantage de temps pour visiter les monuments, notamment la basilique et le Palais des Doges.</p>
              <p>Mais notre programme ne va évidemment pas se dérouler tout à fait comme prévu.</p>
            </div>
            <Photo src={secondDayCanal} alt="Un pont de pierre et les maisons colorées autour d’un canal le deuxième jour" />
          </div>
        </div>
      </section>

      <section className={styles.sequence} aria-labelledby="venise-leonardo">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="venise-leonardo">Un détour chez Leonardo da Vinci</h3>
          <p>En chemin, nous tombons sur une exposition consacrée à Leonardo da Vinci, installée dans une église. Elle n’était absolument pas prévue, mais nous décidons de nous arrêter pour la visiter.</p>
          <p>Même avec un itinéraire, nous gardons cette habitude : quand quelque chose nous attire, nous allons voir. Saint-Marc attendra encore un peu.</p>
        </div>
        <div className={styles.inventions}>
          <Photo src={leonardo} alt="Une maquette de bateau en bois dans l’exposition consacrée à Leonardo da Vinci" />
          <Photo src={invention} alt="Une invention en bois en forme de canon exposée parmi les maquettes" sizes="(max-width: 700px) 40vw, 26vw" />
          <Photo src={machines} alt="Un mécanisme en bois avec des poulies et des cordes dans l’exposition" sizes="(max-width: 700px) 40vw, 24vw" />
        </div>
      </section>

      <section className={styles.sequence} aria-labelledby="venise-churches">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="venise-churches">Entrer quand une porte nous attire</h3>
          <p>Nous poursuivons notre chemin, avec d’autres arrêts dans les grandes églises et les édifices religieux qui attirent notre attention. Le trajet vers Saint-Marc fait lui aussi partie de la visite.</p>
        </div>
        <div className={styles.churches}>
          <Photo src={church} alt="La façade blanche et les coupoles d’un grand édifice religieux au bord de l’eau" />
          <Photo src={churchInterior} alt="Un intérieur d’église avec de hautes arcades et une coupole éclairée par les fenêtres" />
        </div>
        <Photo src={waterside} alt="Le quai et les façades au bord de l’eau, près d’une grande église à coupole" className={styles.waterside} sizes="(max-width: 700px) 88vw, (max-width: 1412px) 62vw, 860px" />
      </section>

      <section className={styles.sequence} aria-labelledby="venise-saint-marc">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="venise-saint-marc">Derrière les façades, une autre impression</h3>
          <p>Nous retrouvons Saint-Marc. La veille, la place m’avait semblé jolie, sans provoquer un énorme coup de cœur. Aujourd’hui, lorsque nous commençons vraiment à visiter les intérieurs des monuments, mon impression change complètement : c’est magnifique et impressionnant.</p>
        </div>
        <div className={styles.daySquare}>
          <Photo src={squareTower} alt="La place Saint-Marc, sa basilique et son campanile en journée" />
          <Photo src={squareArrival} alt="Les passants sur la place Saint-Marc sous un ciel nuageux" />
        </div>
      </section>

      <section className={styles.sequence} aria-labelledby="venise-doges">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="venise-doges">Au fil des salles du Palais des Doges</h3>
          <p>Nous terminons cette grande partie de la journée consacrée aux visites par le Palais des Doges. De l’extérieur aux salles et à leurs décors, nous poursuivons la découverte.</p>
        </div>
        <Photo src={palaceExterior} alt="La cour du Palais des Doges vue depuis les galeries, avec ses façades et ses arcades" className={styles.palaceOutside} sizes="(max-width: 700px) 88vw, (max-width: 1412px) 72vw, 1000px" />
        <Photo src={palaceCourtyard} alt="Les arcades, le puits et les façades de la cour du Palais des Doges" className={styles.courtyardDetail} sizes="(max-width: 700px) 74vw, (max-width: 1412px) 40vw, 550px" />
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>À l’intérieur, les salles, les plafonds et les décors me marquent bien davantage que la place découverte la veille. Nous prenons le temps de regarder tout autour de nous.</p>
        </div>
        <Photo src={palaceRoom} alt="Les murs peints et les décors dorés d’une salle du Palais des Doges" className={styles.palaceRoom} sizes="(max-width: 700px) 88vw, (max-width: 1412px) 85vw, 1200px" />
        <div className={styles.palaceDetails}>
          <Photo src={palaceCeiling} alt="Un plafond du Palais des Doges couvert de peintures et d’encadrements dorés" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 48vw, 670px" />
          <Photo src={armoury} alt="Des armes anciennes et des boucliers présentés dans l’armurerie du palais" />
        </div>
        <div className={styles.prison}>
          <div className={journal.prose}>
            <p>La visite continue par l’armurerie, puis les passages et la prison. Nous arrivons au bout de cette journée bien remplie, mais il reste encore à retrouver notre chemin.</p>
          </div>
          <Photo src={prison} alt="Une ouverture basse et sa lourde porte dans les murs de pierre de la prison" />
        </div>
        <div className={styles.lastLooks}>
          <Photo src={lastPassage} alt="Un passage sous les arcades, avec un escalier de pierre et une passerelle au-dessus" />
          <Photo src={gondola} alt="Une gondole noire présentée sous une galerie voûtée" />
        </div>
      </section>

      <section className={styles.returnHome} aria-labelledby="venise-return">
        <div className={`${journal.prose} ${styles.text}`}>
          <p className={journal.dateline}>LE CHEMIN DU RETOUR</p>
          <h3 id="venise-return">Retrouver notre chemin… et le dernier bus</h3>
          <p>À la sortie du Palais des Doges, nos téléphones sont presque déchargés. Celui de mon mari a beaucoup servi pour le GPS, et le mien pour les photos. Et cette fois, nous avons une contrainte supplémentaire : il faut retrouver notre chemin à travers Venise sans trop traîner, car nous devons arriver à temps pour prendre le dernier bus qui nous ramène au camping.</p>
          <p>Sans GPS, Venise redevient vite un vrai labyrinthe. Beaucoup de rues se ressemblent et retrouver la bonne direction n’est pas si évident. De mon côté, la batterie finit aussi par avoir raison de mes photos : après le Palais des Doges, il n’y en aura tout simplement plus.</p>
          <p>Après cette journée bien remplie, entre les visites, les détours et cette dernière course pour retrouver notre chemin et ne pas rater le dernier bus, nous avons bien dormi !</p>
        </div>
      </section>
    </section>
  );
}
