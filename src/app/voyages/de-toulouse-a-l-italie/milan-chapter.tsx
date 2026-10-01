import Image, { type StaticImageData } from "next/image";
import journal from "./page.module.css";
import styles from "./milan-chapter.module.css";
import fortifications from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-chateau-sforza-fortifications.jpg";
import courtyard from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-chateau-sforza-cour-principale.jpg";
import promenade from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-chateau-sforza-promenade.jpg";
import garden from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-chateau-sforza-cour-jardin.jpg";
import pond from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-parc-plan-eau.jpg";
import turtles from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-parc-tortues.jpg";
import arch from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-arco-della-pace.jpg";
import gps from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-famille-recherche-gps.jpg";
import fountain from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-fontaine-jets-eau.jpg";
import street from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-rue-perspective-chateau.jpg";
import tram from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-tram-rue-centre.jpg";
import firstDuomo from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-duomo-premiere-decouverte.jpg";
import gallery from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-galerie-vittorio-emanuele-verriere.jpg";
import galleryDetails from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-galerie-vittorio-emanuele-decors.jpg";
import church from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-eglise-facade-clocher.jpg";
import ossuary from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-ossuaire-interieur.jpg";
import facade from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-duomo-facade-rapprochee.jpg";
import window from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-duomo-fenetre-gothique.jpg";
import pillars from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-duomo-piliers-voutes.jpg";
import relief from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-duomo-relief-sculpte.jpg";
import stainedGlass from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-duomo-vitrail-choeur.jpg";
import organ from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-duomo-orgue.jpg";
import square from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-place-retour-galerie.jpg";
import coffee from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-gouter-cappuccino-tiramisu.jpg";
import ruins from "../../../../public/images/voyages/de-toulouse-a-litalie/milan-palais-imperial-vestiges.jpg";
import lakeRoad from "../../../../public/images/voyages/de-toulouse-a-litalie/bellagio-route-bord-lac.jpg";
import campingArrival from "../../../../public/images/voyages/de-toulouse-a-litalie/bellagio-camping-la-fornace-arrivee.jpg";
import eveningPizza from "../../../../public/images/voyages/de-toulouse-a-litalie/bellagio-repas-pizza.jpg";

const wide = "(max-width: 700px) 88vw, (max-width: 1412px) 85vw, 1100px";

function Photo({ src, alt, className = "", sizes = "(max-width: 700px) 88vw, (max-width: 1412px) 40vw, 560px", caption }: {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
  caption?: string;
}) {
  return (
    <figure className={`${journal.photograph} ${styles.photo} ${className}`}>
      <Image src={src} alt={alt} sizes={sizes} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export default function MilanChapter() {
  return (
    <section id="etape-11" className={`${journal.chapter} ${styles.chapter}`} aria-labelledby="milan-title">
      <header className={journal.chapterHeader}>
        <p className={journal.chapterNumber}>ÉTAPE 11</p>
        <div>
          <p className={journal.dateline}>23 AVRIL 2025</p>
          <h2 id="milan-title">Milan, des grandes découvertes aux petits imprévus</h2>
          <p className={journal.route}>Sirmione → Milan → Bellagio / lac de Côme</p>
        </div>
      </header>

      <div className={`${journal.prose} ${styles.text}`}>
        <p>Après Sirmione, nous avons passé la nuit à l’aire de camping-car New Park Milano. Nous avions prévu de rester deux nuits à Milan, pour prendre le temps de découvrir la ville.</p>
        <p>Le matin du 23 avril, nous laissons le van à l’aire et rejoignons la gare, à environ dix minutes à pied. Le train nous emmène vers une journée de visites… et quelques imprévus.</p>
      </div>

      <section className={styles.sequence} aria-labelledby="milan-castle">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="milan-castle">Premiers pas au château Sforza</h3>
          <p>Nous commençons par le château de Milan. Ses murailles et son architecture imposante donnent tout de suite le ton. Nous parcourons les cours, en prenant le temps de regarder les bâtiments et les fortifications.</p>
        </div>
        <Photo src={fortifications} alt="Les fortifications du château Sforza à Milan" className={styles.lead} sizes={wide} />
        <div className={styles.castlePair}>
          <Photo src={courtyard} alt="La cour principale du château Sforza" />
          <Photo src={garden} alt="Une cour et son jardin au château Sforza" />
        </div>
        <Photo src={promenade} alt="La promenade le long du château Sforza" className={`${styles.echo} ${styles.centered}`} sizes="(max-width: 700px) 75vw, 650px" />
      </section>

      <section className={styles.sequence} aria-labelledby="milan-park">
        <div className={styles.park}>
          <Photo src={pond} alt="Le plan d’eau du parc traversé après le château" sizes="(max-width: 700px) 66vw, 360px" />
          <div>
            <div className={journal.prose}>
              <h3 id="milan-park">Une photographe à la recherche des tortues</h3>
              <p>Nous traversons ensuite le parc. Notre fille adore les tortues : quand elle en aperçoit, elle me prend l’appareil photo pour en photographier plusieurs. Pour un moment, je lui laisse donc la place derrière l’objectif !</p>
            </div>
            <Photo src={turtles} alt="Les tortues du parc photographiées par notre fille" className={styles.detail} sizes="(max-width: 700px) 70vw, 380px" />
          </div>
        </div>
      </section>

      <section className={styles.sequence} aria-labelledby="milan-arch">
        <div className={styles.arch}>
          <div className={journal.prose}>
            <h3 id="milan-arch">L’Arco della Pace, puis… par où aller ?</h3>
            <p>Nous poursuivons jusqu’à l’Arco della Pace. Il nous rappelle l’Arc de Triomphe : un petit air familier au milieu de notre découverte de Milan.</p>
          </div>
          <Photo src={arch} alt="L’Arco della Pace à Milan" sizes="(max-width: 700px) 66vw, 400px" />
        </div>
        <div className={styles.anecdote}>
          <Photo src={gps} alt="Mon mari et ma fille consultent chacun leur téléphone pour chercher notre itinéraire" />
          <div className={journal.prose}>
            <p>À partir de là, nous voulons rejoindre le Duomo, mais nous ne savons plus très bien quel chemin prendre. Mon mari et ma fille se mettent chacun sur leur téléphone pour chercher l’itinéraire et le GPS.</p>
            <p>Pendant qu’ils cherchent le chemin, je continue à prendre des photos, notamment des trams milanais. Chacun son occupation !</p>
          </div>
        </div>
        <Photo src={tram} alt="Un tram milanais dans une rue du centre" className={styles.lead} sizes={wide} />
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>Une fois le chemin retrouvé, nous reprenons notre marche vers le centre. Entre les rues, les fontaines et les premières vues du Duomo, il y a encore de quoi s’arrêter pour quelques photos.</p>
        </div>
        <div className={styles.walk}>
          <Photo src={street} alt="Une rue de Milan avec le château en perspective" sizes="(max-width: 700px) 60vw, 300px" />
          <div className={styles.stack}>
            <Photo src={fountain} alt="Les jets d’eau d’une fontaine à Milan" />
            <Photo src={firstDuomo} alt="Notre première découverte du Duomo de Milan" />
          </div>
        </div>
      </section>

      <section className={styles.sequence} aria-labelledby="milan-gallery">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="milan-gallery">La Galerie Vittorio Emanuele II, un coup de cœur</h3>
          <p>Nous découvrons ensuite la Galerie Vittorio Emanuele II. Sur le moment, nous la voyons un peu comme un immense marché couvert. Mais quelle architecture ! Sa verrière, sa coupole et tous ses décors nous plaisent énormément.</p>
          <p>C’est l’un de nos gros coups de cœur de Milan. Nous prenons le temps de lever les yeux et de regarder tous ces détails.</p>
        </div>
        <Photo src={gallery} alt="La verrière et la coupole de la Galerie Vittorio Emanuele II" className={styles.lead} sizes={wide} />
        <Photo src={galleryDetails} alt="Les décors de la Galerie Vittorio Emanuele II" className={`${styles.echo} ${styles.centered}`} sizes="(max-width: 700px) 75vw, 650px" />
      </section>

      <section className={styles.sequence} aria-labelledby="milan-ossuary">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="milan-ossuary">Une visite plus troublante à San Bernardino alle Ossa</h3>
          <p>Nous découvrons ensuite le Santuario di San Bernardino alle Ossa et sa chapelle-ossuaire. Les murs couverts d’ossements et de crânes me mettent assez mal à l’aise. Je ne suis pas très à l’aise non plus à l’idée de prendre des photos à cet endroit.</p>
          <p>Une visite qui nous laisse une impression bien différente de la galerie.</p>
        </div>
        <div className={styles.churchPair}>
          <Photo src={church} alt="Une façade d’église et son clocher photographiés pendant notre promenade à Milan" caption="Une façade et son clocher au fil de notre promenade." />
          <Photo src={ossuary} alt="Les ossements et les crânes ornant l’intérieur de la chapelle-ossuaire de San Bernardino alle Ossa" caption="À l’intérieur de la chapelle-ossuaire de San Bernardino alle Ossa." />
        </div>
      </section>

      <section className={styles.sequence} aria-labelledby="milan-duomo">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="milan-duomo">Le Duomo, impressionnant jusque dans les détails</h3>
          <p>Puis nous visitons le Duomo. Dehors, la façade et les sculptures sont déjà très impressionnantes. Nous nous arrêtons autant sur l’ensemble que sur les détails de pierre.</p>
        </div>
        <Photo src={facade} alt="La façade du Duomo de Milan vue de près" className={styles.lead} sizes={wide} />
        <div className={styles.duomoDetails}>
          <Photo src={window} alt="Une fenêtre gothique du Duomo de Milan" sizes="(max-width: 700px) 60vw, 300px" />
          <Photo src={relief} alt="Un relief sculpté du Duomo de Milan" />
        </div>
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>À l’intérieur, les immenses piliers et les voûtes nous impressionnent tout autant. Nous continuons la visite en regardant les vitraux, puis l’orgue. Il y a tant à observer, du sol jusqu’aux hauteurs de la cathédrale.</p>
        </div>
        <div className={styles.portraitPair}>
          <Photo src={pillars} alt="Les immenses piliers et les voûtes à l’intérieur du Duomo" sizes="(max-width: 700px) 80vw, (max-width: 1100px) 50vw, 510px" />
          <Photo src={stainedGlass} alt="Un vitrail du chœur du Duomo de Milan" sizes="(max-width: 700px) 62vw, 360px" />
        </div>
        <Photo src={organ} alt="L’orgue à l’intérieur du Duomo de Milan" className={styles.organ} sizes="(max-width: 700px) 88vw, 800px" />
      </section>

      <section className={styles.sequence} aria-labelledby="milan-coffee">
        <Photo src={square} alt="La place de Milan sur le chemin du retour vers la galerie" className={styles.lead} sizes={wide} />
        <div className={styles.coffeeBreak}>
          <div className={journal.prose}>
            <h3 id="milan-coffee">Un cappuccino… et un tiramisu surprise</h3>
            <p>Après toutes ces visites, nous faisons une pause cappuccino. Cette fois, j’ai aussi droit à un tiramisu italien que je n’ai pas commandé : la serveuse s’est trompée ! Une petite surprise au milieu de cette journée bien remplie.</p>
          </div>
          <Photo src={coffee} alt="Le cappuccino et le tiramisu italien arrivé par erreur pendant notre pause" sizes="(max-width: 700px) 71vw, (max-width: 1000px) 270px, 360px" />
        </div>
      </section>

      <section className={styles.sequence} aria-labelledby="milan-ruins">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="milan-ruins">Une dernière découverte, complètement par hasard</h3>
          <p>Nous avions prévu une deuxième nuit à Milan, mais mon mari décide finalement qu’il préfère partir vers le lac de Côme. Nous reprenons donc le chemin de la gare pour retrouver notre van.</p>
          <p>Et c’est en repartant vers la gare que nous tombons complètement par hasard sur les vestiges du palais impérial. Encore une découverte que nous n’avions pas prévue, juste avant de quitter Milan.</p>
        </div>
        <Photo src={ruins} alt="Les vestiges du palais impérial découverts par hasard sur le chemin du retour" className={styles.lead} sizes={wide} />
      </section>

      <section className={styles.closing} aria-labelledby="milan-bellagio">
        <div className={`${journal.prose} ${styles.text}`}>
          <p className={journal.dateline}>NUIT DU 23 AU 24 AVRIL</p>
          <h3 id="milan-bellagio">Direction Bellagio et le lac de Côme</h3>
          <p>Nous retrouvons le van à New Park Milano et quittons Milan pour Bellagio et le lac de Côme. Vers 18 h 45, nous longeons le lac de Côme en direction de Bellagio, avant d’arriver au camping La Fornace pour y passer la nuit du 23 au 24 avril. Nous terminons cette longue journée autour d’une pizza. La suite du voyage nous attend désormais au bord du lac.</p>
        </div>
        <Photo src={lakeRoad} alt="La route au bord du lac de Côme en direction de Bellagio, en fin de journée" className={`${styles.lead} ${styles.eveningRoad}`} sizes={wide} />
        <div className={styles.eveningPair}>
          <Photo src={campingArrival} alt="L’entrée du camping La Fornace à notre arrivée le soir du 23 avril" sizes="(max-width: 700px) 41vw, 320px" />
          <Photo src={eveningPizza} alt="La pizza du repas du soir après notre journée à Milan et la route vers Bellagio" sizes="(max-width: 700px) 41vw, 320px" />
        </div>
      </section>
    </section>
  );
}
