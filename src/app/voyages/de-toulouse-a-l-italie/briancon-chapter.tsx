import Image, { type StaticImageData } from "next/image";
import journal from "./page.module.css";
import styles from "./briancon-chapter.module.css";
import facade from "../../../../public/images/voyages/de-toulouse-a-litalie/briancon-eglise-facade.jpg";
import choir from "../../../../public/images/voyages/de-toulouse-a-litalie/briancon-eglise-choeur.jpg";
import bridge from "../../../../public/images/voyages/de-toulouse-a-litalie/briancon-pont-asfeld-montagnes.jpg";
import gorge from "../../../../public/images/voyages/de-toulouse-a-litalie/briancon-gorges-riviere.jpg";
import crossing from "../../../../public/images/voyages/de-toulouse-a-litalie/briancon-pont-asfeld-passage.jpg";
import forest from "../../../../public/images/voyages/de-toulouse-a-litalie/briancon-chemin-foret.jpg";
import panorama from "../../../../public/images/voyages/de-toulouse-a-litalie/briancon-panorama-fortifications.jpg";
import walls from "../../../../public/images/voyages/de-toulouse-a-litalie/briancon-chemin-murailles.jpg";
import mountains from "../../../../public/images/voyages/de-toulouse-a-litalie/briancon-fortifications-montagnes.jpg";
import coffee from "../../../../public/images/voyages/de-toulouse-a-litalie/briancon-dernier-cappuccino.jpg";

const wide = "(max-width: 700px) 88vw, (max-width: 1118px) 85vw, 950px";
const pair = "(max-width: 700px) 70vw, 320px";

function Photo({ src, alt, className = "", sizes = wide, exifPortrait = false }: {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
  exifPortrait?: boolean;
}) {
  return (
    <figure className={`${journal.photograph} ${styles.photo} ${className}`}>
      {/* Preserve the EXIF-oriented original and reserve its displayed proportions. */}
      <Image src={src} alt={alt} sizes={sizes} unoptimized={exifPortrait}
        width={exifPortrait ? 4000 : src.width} height={exifPortrait ? 6000 : src.height} />
    </figure>
  );
}

export default function BrianconChapter() {
  return (
    <section id="etape-13-briancon" className={`${journal.chapter} ${styles.chapter}`} aria-labelledby="briancon-title">
      <header className={journal.chapterHeader}>
        <div style={{ gridColumn: "-2 / -1" }}>
          <p className={journal.dateline}>25 AVRIL 2025 · BRIANÇON</p>
          <h2 id="briancon-title">Une dernière découverte avant de reprendre la route</h2>
        </div>
      </header>
      <div className={`${journal.prose} ${styles.text}`}>
        <p>Au réveil, nous savons que nous devons reprendre la route vers la maison. Mais puisque Briançon s’est invitée un peu par hasard dans notre voyage, autant profiter encore un peu de cette étape imprévue avant de repartir.</p>
        <p>Nous quittons le van dans la matinée et partons à pied, sans programme très précis. Très vite, nous découvrons une autre facette de la ville.</p>
      </div>

      <section className={styles.sequence} aria-labelledby="briancon-heritage-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="briancon-heritage-title">Entre patrimoine et montagnes</h3>
          <p>Au fil de notre balade, nous découvrons l’église et poussons la porte pour jeter un œil à l’intérieur.</p>
          <p>Après plusieurs jours passés en Italie à visiter églises, basiliques et cathédrales, nous voilà encore une fois à l’intérieur d’une église… mais cette fois-ci en France. 😄</p>
        </div>
        <div className={styles.pair}>
          <Photo src={facade} alt="La façade orangée de l’église, ses deux tours et ses cadrans sous le ciel bleu" sizes={pair} />
          <Photo src={choir} alt="Les voûtes, les tableaux et les boiseries du chœur de l’église" sizes={pair} />
        </div>
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>Nous poursuivons ensuite notre chemin et arrivons vers le pont d’Asfeld. Le décor change complètement : les fortifications, les gorges, la rivière tout en bas et les montagnes autour de nous.</p>
        </div>
        <Photo src={bridge} alt="Le pont d’Asfeld au-dessus des gorges, devant les versants boisés et les montagnes enneigées" className={styles.landscape} />
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>Nous prenons le temps d’observer le paysage avant de continuer. Depuis le pont et les chemins alentour, les vues sur les gorges sont magnifiques.</p>
        </div>
        <Photo src={gorge} alt="La rivière et ses eaux vives au fond des gorges entre les falaises" className={styles.portrait} sizes="(max-width: 700px) 70vw, 340px" />
      </section>

      <section className={styles.sequence} aria-labelledby="briancon-heights-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="briancon-heights-title">Prendre un peu de hauteur</h3>
          <p>Nous continuons à marcher et empruntons les chemins qui montent à travers la forêt.</p>
        </div>
        <div className={styles.pair}>
          <Photo src={crossing} alt="Le passage sur le pont d’Asfeld dirigé vers la falaise et les fortifications" sizes={pair} exifPortrait />
          <Photo src={forest} alt="Un chemin pierreux bordé d’un muret serpente entre les pins" sizes={pair} />
        </div>
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>Plus nous avançons, plus nous prenons de la hauteur. Et forcément, plus le paysage s’ouvre devant nous.</p>
          <p>Briançon apparaît peu à peu en contrebas, entourée par les montagnes. Les fortifications se mêlent au paysage et nous découvrons de nouveaux points de vue presque à chaque détour du chemin.</p>
        </div>
        <Photo src={panorama} alt="Les fortifications et les bâtiments de Briançon sur leur relief rocheux, devant les montagnes enneigées" className={styles.landscape} />
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>Nous continuons tranquillement entre les arbres, les chemins et les murailles. En nous arrêtant ici la veille, nous n’avions absolument pas prévu de partir randonner le lendemain… et pourtant, nous sommes bien contents d’avoir changé nos plans.</p>
        </div>
        <Photo src={walls} alt="Un chemin conduit vers les grandes murailles étagées sur le versant" className={styles.medium} sizes="(max-width: 700px) 80vw, (max-width: 1000px) 72vw, 720px" />
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>Les montagnes encore enneigées autour de nous rendent le décor encore plus beau. Difficile de croire que cette étape a commencé simplement parce que nous cherchions un endroit où dormir.</p>
        </div>
        <Photo src={mountains} alt="Des fortifications sur une crête boisée devant de hauts sommets encore enneigés" className={styles.landscape} />
      </section>

      <section className={styles.sequence} aria-labelledby="briancon-coffee-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="briancon-coffee-title">Un dernier cappuccino</h3>
          <p>Après cette belle balade, il est temps de redescendre et de penser sérieusement à reprendre la route.</p>
          <p>Mais avant de quitter Briançon, une dernière pause s’impose : un cappuccino. ☕</p>
          <p>Et là… après tous ceux que nous avons bus en Italie pendant le voyage, le retour en France se fait immédiatement sentir. 😂</p>
        </div>
        <Photo src={coffee} alt="Notre dernier cappuccino dans un verre, surmonté d’une haute garniture blanche saupoudrée de brun" className={styles.coffee} sizes="(max-width: 700px) 60vw, 280px" />
        <div className={`${journal.prose} ${styles.closing}`}>
          <p>Disons simplement qu’il est… un peu différent des cappuccinos italiens !</p>
          <p>Ce sera notre dernier cappuccino de ce voyage, et une jolie façon de terminer cette étape totalement imprévue à Briançon.</p>
          <p>Cette fois, il faut vraiment repartir.</p>
          <p>Nous remontons dans le van et reprenons la route, avec une seule idée : nous rapprocher doucement de la maison.</p>
        </div>
      </section>
    </section>
  );
}
