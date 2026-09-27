import Image, { type StaticImageData } from "next/image";
import journal from "./page.module.css";
import styles from "./maranello-chapter.module.css";
import exterior from "../../../../public/images/voyages/de-toulouse-a-litalie/maranello-musee-ferrari-exterieur.jpg";
import coffee from "../../../../public/images/voyages/de-toulouse-a-litalie/maranello-cappuccino-matin.jpg";
import silver from "../../../../public/images/voyages/de-toulouse-a-litalie/ferrari-ancienne-argent.jpg";
import historic from "../../../../public/images/voyages/de-toulouse-a-litalie/ferrari-course-historique-rouge.jpg";
import race531 from "../../../../public/images/voyages/de-toulouse-a-litalie/ferrari-course-531.jpg";
import classic from "../../../../public/images/voyages/de-toulouse-a-litalie/ferrari-classique-rouge.jpg";
import f40 from "../../../../public/images/voyages/de-toulouse-a-litalie/ferrari-f40-rouge.jpg";
import race24 from "../../../../public/images/voyages/de-toulouse-a-litalie/ferrari-24-course.jpg";
import supercar from "../../../../public/images/voyages/de-toulouse-a-litalie/ferrari-supercar-rouge.jpg";
import grey from "../../../../public/images/voyages/de-toulouse-a-litalie/ferrari-moderne-grise.jpg";
import blue from "../../../../public/images/voyages/de-toulouse-a-litalie/ferrari-moderne-bleue.jpg";
import f1 from "../../../../public/images/voyages/de-toulouse-a-litalie/ferrari-formule-1-exposition.jpg";
import f1Above from "../../../../public/images/voyages/de-toulouse-a-litalie/ferrari-formule-1-vue-dessus.jpg";
import schumacher from "../../../../public/images/voyages/de-toulouse-a-litalie/ferrari-schumacher-hommage.jpg";
import lamboExterior from "../../../../public/images/voyages/de-toulouse-a-litalie/lamborghini-musee-exterieur.jpg";
import lamboClassics from "../../../../public/images/voyages/de-toulouse-a-litalie/lamborghini-classiques-exposition.jpg";
import countach from "../../../../public/images/voyages/de-toulouse-a-litalie/lamborghini-countach-jaune.jpg";
import orange from "../../../../public/images/voyages/de-toulouse-a-litalie/lamborghini-orange.jpg";
import black from "../../../../public/images/voyages/de-toulouse-a-litalie/lamborghini-moderne-noire.jpg";
import green from "../../../../public/images/voyages/de-toulouse-a-litalie/lamborghini-moderne-verte.jpg";
import van from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-camping-arrivee-van.jpg";
import camping from "../../../../public/images/voyages/de-toulouse-a-litalie/venise-camping-venezia-village.jpg";

function Photo({ src, alt, className = "", sizes = "(max-width: 700px) 88vw, (max-width: 1412px) 42vw, 580px" }: {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return <figure className={`${styles.photo} ${className}`}><Image src={src} alt={alt} sizes={sizes} /></figure>;
}

export default function MaranelloChapter() {
  return (
    <section id="etape-08" className={`${journal.chapter} ${styles.chapter}`} aria-labelledby="maranello-title">
      <header className={journal.chapterHeader}>
        <p className={journal.chapterNumber}>ÉTAPE 08</p>
        <div>
          <p className={journal.dateline}>20 AVRIL 2025</p>
          <h2 id="maranello-title">Maranello — Ferrari, Lamborghini et route vers Venise</h2>
          <p className={journal.route}>Modène → Maranello → Venise</p>
        </div>
      </header>

      <div className={styles.morning}>
        <Photo src={exterior} alt="L’entrée rouge du musée Ferrari à Maranello sous le ciel bleu" />
        <div>
          <div className={journal.prose}>
            <p className={journal.dateline}>VERS 8 H 30 · MARANELLO</p>
            <p>Nous arrivons à Maranello vers 8 h 30 et trouvons une place pour le van juste en face de l’entrée du musée Ferrari.</p>
            <p>Comme souvent depuis le début de notre voyage en Italie, la matinée commence par notre petit rituel : un cappuccino italien.</p>
          </div>
          <Photo src={coffee} alt="Notre cappuccino du matin dans une tasse blanche" className={styles.coffee} sizes="(max-width: 700px) 140px, 170px" />
        </div>
      </div>

      <section className={styles.sequence} aria-labelledby="ferrari-family-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="ferrari-family-title">Le Nikon change de mains</h3>
          <p>Nous sommes venus au musée Ferrari principalement pour notre fille. Dès que nous entrons, elle me prend le Nikon et commence à photographier les voitures les unes après les autres.</p>
          <p>Elle a adoré la visite. Elle a fait tellement de photos qu’il y aurait presque de quoi réaliser un livre consacré uniquement au musée !</p>
        </div>
        <Photo src={silver} alt="Une ancienne Ferrari argentée photographiée de face dans le musée" className={styles.firstCar} sizes="(max-width: 700px) 88vw, (max-width: 1412px) 60vw, 820px" />
        <div className={styles.historyPair}>
          <Photo src={historic} alt="Une Ferrari de course rouge ancienne portant le numéro 8" />
          <Photo src={race531} alt="Une Ferrari de course rouge portant le numéro 531" />
        </div>
        <div className={`${journal.prose} ${styles.textPause}`}>
          <h3>Les années défilent</h3>
          <p>Le musée nous plaît beaucoup. Ce qui me marque le plus, c’est de pouvoir observer l’évolution de Ferrari et de ses voitures au fil des années. Les modèles et les époques se succèdent, et nous voyons peu à peu comment la marque a évolué.</p>
        </div>
        <div className={styles.classics}>
          <Photo src={classic} alt="Une Ferrari classique rouge exposée dans le musée" />
          <Photo src={f40} alt="L’arrière d’une Ferrari F40 rouge et son aileron" />
        </div>
        <div className={styles.modernPassage}>
          <Photo src={race24} alt="Une Ferrari de course rouge portant le numéro 24" />
          <div>
            <div className={journal.prose}>
              <p>De voiture en voiture, la visite continue, et notre fille poursuit ses photos avec le Nikon.</p>
            </div>
            <Photo src={supercar} alt="Une Ferrari rouge moderne vue de face" />
          </div>
        </div>
        <div className={styles.modernPair}>
          <Photo src={grey} alt="L’arrière d’une Ferrari moderne grise" />
          <Photo src={blue} alt="Une Ferrari moderne bleue photographiée de face" />
        </div>
      </section>

      <section className={styles.sequence} aria-labelledby="ferrari-f1-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <p className={journal.dateline}>VERS LA FIN DE LA VISITE</p>
          <h3 id="ferrari-f1-title">Un dernier regard sur la Formule 1</h3>
          <p>Je suis moins passionnée par la Formule 1, mais l’exposition située vers la fin de la visite reste particulièrement impressionnante.</p>
        </div>
        <div className={styles.f1Details}>
          <Photo src={f1Above} alt="Une Ferrari de Formule 1 présentée verticalement, vue de dessus" />
          <Photo src={schumacher} alt="La vitrine consacrée à Michael Schumacher, avec son portrait et ses casques" />
        </div>
        <Photo src={f1} alt="L’alignement des monoplaces rouges dans l’exposition de Formule 1 du musée Ferrari" className={styles.f1Final} sizes="(max-width: 700px) 88vw, (max-width: 1412px) 85vw, 1200px" />
      </section>

      <section className={styles.detour} aria-labelledby="lamborghini-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <p>Après Ferrari, nous reprenons la route en direction de Venise. Pour la suite du voyage, nous avons exceptionnellement réservé un camping quelques jours auparavant : deux nuits au même endroit, un peu plus de services et de confort, et surtout une machine à laver, bien utile après plusieurs jours sur la route.</p>
        </div>
        <div className={styles.detourIntro}>
          <div className={journal.prose}>
            <p className={journal.dateline}>UN ARRÊT IMPRÉVU</p>
            <h3 id="lamborghini-title">Lamborghini, au passage</h3>
            <p>Mais en chemin, mon mari aperçoit un concessionnaire Lamborghini. Nous découvrons qu’il est possible d’y entrer et qu’une partie se visite aussi comme un petit musée.</p>
            <p>Cet arrêt n’était absolument pas prévu. Après Ferrari pour notre fille, c’est au tour de mon mari de se faire plaisir.</p>
          </div>
          <Photo src={lamboExterior} alt="Le bâtiment vitré du concessionnaire Lamborghini aperçu sur la route" />
        </div>
        <div className={styles.lamboClassics}>
          <Photo src={lamboClassics} alt="Des Lamborghini classiques rouges et jaunes dans l’exposition" />
          <Photo src={countach} alt="Une Lamborghini Countach jaune près des baies vitrées" />
        </div>
        <div className={styles.lamboLastLook}>
          <Photo src={orange} alt="Une Lamborghini orange vue de face" sizes="(max-width: 700px) 40vw, 22vw" />
          <Photo src={black} alt="Une Lamborghini noire au milieu des voitures exposées" />
          <Photo src={green} alt="Une Lamborghini verte devant les baies vitrées" sizes="(max-width: 700px) 40vw, 22vw" />
        </div>
      </section>

      <section className={styles.evening} aria-labelledby="venezia-camping-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <p className={journal.dateline}>VERS 16 H 30 · CAMPING VENEZIA VILLAGE</p>
          <h3 id="venezia-camping-title">Poser le van pour deux nuits</h3>
          <p>Nous reprenons ensuite la route vers Venise. Vers 16 h 30, nous arrivons au Camping Venezia Village et nous nous installons pour deux nuits, du 20 au 22 avril 2025.</p>
          <p>Nous ne restons d’ailleurs pas longtemps au camping : une fois installés, nous partons profiter de notre première soirée à Venise.</p>
        </div>
        <div className={styles.campingPair}>
          <Photo src={van} alt="Notre van rouge et blanc installé sous les arbres au camping près de Venise" sizes="(max-width: 700px) 72vw, 340px" />
          <Photo src={camping} alt="L’allée arborée et les bâtiments du Camping Venezia Village" sizes="(max-width: 700px) 72vw, 340px" />
        </div>
        <div className={`${journal.prose} ${styles.closing}`}>
          <p>Après cette journée autour de l’automobile, nous retrouvons un peu de confort au camping. Le van reste ici pour deux nuits. La prochaine grande étape de notre carnet nous attend : Venise.</p>
        </div>
      </section>
    </section>
  );
}
