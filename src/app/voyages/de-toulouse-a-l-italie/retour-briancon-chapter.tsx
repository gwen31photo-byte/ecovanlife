import Image, { type StaticImageData } from "next/image";
import journal from "./page.module.css";
import styles from "./retour-briancon-chapter.module.css";
import distantAlps from "../../../../public/images/voyages/de-toulouse-a-litalie/route-france-alpes-montagnes.jpg";
import alpineLandscape from "../../../../public/images/voyages/de-toulouse-a-litalie/route-france-paysage-alpin.jpg";
import village from "../../../../public/images/voyages/de-toulouse-a-litalie/route-france-village-montagnes.jpg";
import van from "../../../../public/images/voyages/de-toulouse-a-litalie/montgenevre-van-station.jpg";
import snow from "../../../../public/images/voyages/de-toulouse-a-litalie/montgenevre-neige-montagnes.jpg";
import parking from "../../../../public/images/voyages/de-toulouse-a-litalie/briancon-arrivee-parking.jpg";
import ramparts from "../../../../public/images/voyages/de-toulouse-a-litalie/briancon-premiere-balade-remparts.jpg";
import panorama from "../../../../public/images/voyages/de-toulouse-a-litalie/briancon-panorama-ville-montagnes.jpg";

const wide = "(max-width: 700px) 88vw, (max-width: 1118px) 85vw, 950px";
const portrait = "(max-width: 700px) 70vw, 360px";

function Photo({ src, alt, className = "", sizes = wide }: {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure className={`${journal.photograph} ${styles.photo} ${className}`}>
      <Image src={src} alt={alt} sizes={sizes} />
    </figure>
  );
}

export default function RetourBrianconChapter() {
  return (
    <section id="etape-13" className={`${journal.chapter} ${styles.chapter}`} aria-labelledby="retour-briancon-title">
      <header className={journal.chapterHeader}>
        <p className={journal.chapterNumber}>ÉTAPE 13</p>
        <div>
          <p className={journal.dateline}>24–25 AVRIL 2025 · APRÈS BELLAGIO</p>
          <h2 id="retour-briancon-title">Direction la France</h2>
          <p className={journal.route}>Bellagio → Montgenèvre → Briançon</p>
        </div>
      </header>

      <div className={`${journal.prose} ${styles.text}`}>
        <p>Après cette belle matinée à Bellagio, il est temps de reprendre la route. Nous sommes encore loin de la maison et, même si nous aurions volontiers continué à découvrir le lac de Côme, il faut maintenant commencer à nous rapprocher de la France.</p>
        <p>Nous repartons sans vraiment savoir où nous dormirons ce soir. Comme souvent depuis le début de ce voyage, on verra bien où la route nous mènera !</p>
        <p>Et quelle route… Plus nous avançons, plus les paysages changent. Les Alpes se dressent devant nous, avec leurs sommets encore enneigés. Évidemment, impossible pour moi de rester sagement dans le van sans sortir l’appareil photo ! Nous faisons quelques petites pauses en chemin, simplement pour profiter du paysage.</p>
      </div>
      <Photo src={distantAlps} alt="Des champs verts devant les montagnes enneigées sur la route vers la France" className={styles.opening} sizes="(max-width: 700px) 80vw, (max-width: 1000px) 72vw, 780px" />
      <Photo src={alpineLandscape} alt="Une prairie et des versants boisés sous les crêtes enneigées des Alpes" className={styles.landscape} />
      <div className={styles.villagePause}>
        <div className={journal.prose}>
          <p>Petit à petit, les montagnes prennent toute la place. Les villages se blottissent au pied des sommets et nous avons vraiment cette impression de traverser les Alpes.</p>
        </div>
        <Photo src={village} alt="Des habitations de pierre et de bois dominées par une montagne très enneigée" sizes="(max-width: 700px) 75vw, (max-width: 1000px) 36vw, 420px" />
      </div>

      <section className={styles.sequence} aria-labelledby="montgenevre-pause-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="montgenevre-pause-title">Une pause enneigée à Montgenèvre</h3>
          <p>En continuant notre route, nous arrivons à Montgenèvre. Et là, il reste encore de la neige dans la station !</p>
          <p>Forcément, ça mérite un arrêt. 😄</p>
          <p>Nous garons le van quelques instants et profitons de cette petite pause improvisée. Entre les montagnes, les bâtiments de la station et les plaques de neige encore présentes, le décor est magnifique. Nous sommes fin avril et pourtant, pendant quelques minutes, nous avons presque l’impression d’être revenus en hiver.</p>
        </div>
        <div className={styles.snowPair}>
          <Photo src={van} alt="Notre van rouge et blanc stationné parmi les arbres à Montgenèvre" sizes="(max-width: 700px) 75vw, (max-width: 1118px) 32vw, 360px" />
          <Photo src={snow} alt="La neige encore présente au pied des bâtiments et des montagnes de Montgenèvre" sizes="(max-width: 700px) 88vw, (max-width: 1118px) 48vw, 550px" />
        </div>
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>Puis il faut reprendre la route. Nous n’avons toujours aucune idée précise de l’endroit où nous allons passer la nuit.</p>
        </div>
      </section>

      <section className={styles.sequence} aria-labelledby="briancon-evening-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="briancon-evening-title">Briançon… juste pour dormir ?</h3>
          <p>Nous arrivons finalement à Briançon en début de soirée.</p>
          <p>Nous repérons un parking gratuit où nous pouvons passer la nuit avec le van. Parfait ! Après une pause toilettes et le temps de vérifier que nous avons bien le droit d’y dormir, nous décidons de nous installer ici.</p>
          <p>À ce moment-là, Briançon n’était absolument pas une étape prévue de notre voyage. Nous cherchions simplement un endroit où dormir avant de continuer notre retour vers la maison.</p>
        </div>
        <Photo src={parking} alt="Notre van sur le parking de Briançon, sous une pente herbeuse et les fortifications" className={styles.portrait} sizes={portrait} />
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>Mais depuis le parking, quelque chose attire forcément notre attention : les fortifications juste au-dessus de nous.</p>
          <p>Alors, vers 20 h, plutôt que de rester dans le van, nous décidons d’aller faire une petite balade. Rien de bien ambitieux, juste un petit tour de repérage pour voir ce qu’il y a autour de nous.</p>
          <p>Et très vite, nous comprenons que nous avons peut-être bien fait de nous arrêter ici…</p>
        </div>
        <Photo src={ramparts} alt="Un fossé herbeux et un passage voûté entre les hauts murs des fortifications de Briançon" className={styles.portrait} sizes={portrait} />
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>Quelques pas suffisent pour découvrir les remparts et de magnifiques points de vue sur Briançon, la vallée et les montagnes qui entourent la ville.</p>
        </div>
        <Photo src={panorama} alt="Briançon dans la vallée, entourée de montagnes enneigées dans la lumière du soir" className={styles.landscape} />
        <div className={`${journal.prose} ${styles.closing}`}>
          <p>Ce qui devait être un simple parking pour passer la nuit vient finalement de se transformer en une nouvelle étape imprévue de notre voyage. 😄</p>
          <p>Pour ce soir, cette petite balade nous suffit. Nous avons déjà décidé que demain matin, avant de reprendre définitivement la route vers la maison, nous irons découvrir Briançon d’un peu plus près.</p>
          <p>Et quelque chose me dit que cette étape que nous n’avions absolument pas prévue nous réserve encore quelques jolies surprises…</p>
        </div>
      </section>
    </section>
  );
}
