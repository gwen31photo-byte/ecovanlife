import Image, { type StaticImageData } from "next/image";
import journal from "./page.module.css";
import styles from "./ile-oleron-chapter.module.css";
import citadelle from "../../../../public/images/voyages/la-grande-boucle-de-l-ouest/ile-oleron-citadelle-chateau-oleron-entree.jpg";
import port from "../../../../public/images/voyages/la-grande-boucle-de-l-ouest/ile-oleron-port-depuis-citadelle.jpg";
import cabanes from "../../../../public/images/voyages/la-grande-boucle-de-l-ouest/ile-oleron-cabanes-colorees.jpg";
import cabane from "../../../../public/images/voyages/la-grande-boucle-de-l-ouest/ile-oleron-cabane-jaune-bleue.jpg";
import promenade from "../../../../public/images/voyages/la-grande-boucle-de-l-ouest/ile-oleron-promenade-cabanes.jpg";
import the from "../../../../public/images/voyages/la-grande-boucle-de-l-ouest/ile-oleron-the-glace.jpg";
import fort from "../../../../public/images/voyages/la-grande-boucle-de-l-ouest/boyardville-fort-boyard.jpg";
import rivage from "../../../../public/images/voyages/la-grande-boucle-de-l-ouest/chassiron-rivage-rocheux.jpg";
import littoral from "../../../../public/images/voyages/la-grande-boucle-de-l-ouest/chassiron-phare-depuis-littoral.jpg";

const wide = "(max-width: 700px) 88vw, (max-width: 1118px) 85vw, 950px";
const medium = "(max-width: 700px) 88vw, (max-width: 941px) 85vw, 800px";

function Photo({ src, alt, caption, className = styles.landscape, sizes = wide }: {
  src: StaticImageData;
  alt: string;
  caption: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure className={`${styles.photo} ${className}`}>
      <Image src={src} alt={alt} sizes={sizes} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function IleOleronChapter() {
  return (
    <section id="etape-2" className={styles.chapter} aria-labelledby="etape-2-title">
      <header className={styles.chapterHeader}>
        <p className={journal.dateline}>ÉTAPE 02</p>
        <div>
          <p className={journal.dateline}>20 juillet 2025 · Jour 3</p>
          <h2 id="etape-2-title">Une journée à la découverte de l’île d’Oléron</h2>
          <p className={styles.route}>Arces-sur-Gironde → Château-d’Oléron → Boyardville → Chassiron → Arces-sur-Gironde</p>
        </div>
      </header>

      <div className={`${journal.prose} ${styles.introduction}`}>
        <p>
          Ce matin, nous quittons le Camping Les 2 Salamandres, à
          Arces-sur-Gironde, pour partir découvrir l’île d’Oléron. Nous
          n’avons rien préparé de particulier pour la journée et nous ne
          savons pas vraiment ce que nous allons y trouver. Nous prenons
          simplement le van et partons à la découverte.
        </p>
      </div>

      <section className={styles.sequence} aria-labelledby="oleron-chateau-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="oleron-chateau-title">Première halte : Château-d’Oléron</h3>
          <p>
            Nous arrivons à Château-d’Oléron, mais trouver une place près du
            centre n’est pas si simple. Nous continuons donc un peu plus loin
            et finissons par garer le van du côté du boulevard Philippe-Daste,
            le long de la plage.
          </p>
          <p>De là, nous partons à pied en longeant le bord de mer jusqu’à la citadelle.</p>
          <p>
            Nous découvrons les fortifications puis prenons le temps de nous
            promener. Depuis les hauteurs, nous profitons également de la vue
            sur le port.
          </p>
        </div>
        <Photo src={citadelle} alt="Un pont mène à la porte fortifiée de la citadelle du Château-d’Oléron" caption="Château-d’Oléron · À l’entrée de la citadelle." />
        <Photo src={port} alt="Les bateaux du port du Château-d’Oléron vus depuis les hauteurs de la citadelle" caption="Depuis les hauteurs, la vue s’ouvre sur le port." className={styles.medium} sizes={medium} />
      </section>

      <section className={styles.sequence} aria-labelledby="oleron-cabanes-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="oleron-cabanes-title">La surprise des cabanes colorées</h3>
          <p>
            En poursuivant notre balade, nous découvrons les cabanes colorées
            de Château-d’Oléron. Et là, quelle surprise !
          </p>
          <p>
            C’est exactement le genre d’endroit que j’adore photographier.
            Les couleurs, les petites allées, les façades toutes différentes…
            je me régale avec l’appareil photo et nous prenons le temps de
            nous promener entre les cabanes.
          </p>
        </div>
        <Photo src={cabanes} alt="Une petite allée bordée de cabanes violettes et jaunes, avec un palmier et de la végétation" caption="Les petites allées et leurs couleurs : un des grands plaisirs de cette journée." className={styles.panorama} sizes="(max-width: 700px) 88vw, (max-width: 1412px) 85vw, 1200px" />
        <Photo src={cabane} alt="Une cabane rayée jaune et bleue, décorée d’une bouée" caption="Une façade jaune et bleue, parmi toutes celles que j’ai aimé photographier." className={styles.medium} sizes={medium} />
        <Photo src={promenade} alt="Une promenade en bois longe le chenal et un alignement de cabanes colorées" caption="Nous prenons le temps de poursuivre la balade le long des cabanes." />
      </section>

      <section className={styles.sequence} aria-labelledby="oleron-pause-title">
        <div className={styles.pause}>
          <div className={journal.prose}>
            <h3 id="oleron-pause-title">Une pause avant de reprendre la route</h3>
            <p>
              Avant de retourner au van, nous nous arrêtons pour manger. Et
              parmi les petits souvenirs de cette pause, il y en a un tout
              simple que j’ai particulièrement apprécié : un thé glacé fait
              maison. Une petite découverte très sympathique avant de
              reprendre notre exploration.
            </p>
          </div>
          <Photo src={the} alt="Un thé glacé servi avec des glaçons et une paille dans un verre à anse" caption="Un tout simple souvenir de la pause : ce très bon thé glacé." className={styles.smallPortrait} sizes="(max-width: 700px) 70vw, 300px" />
        </div>
      </section>

      <section className={styles.sequence} aria-labelledby="oleron-boyardville-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="oleron-boyardville-title">Un détour par Boyardville</h3>
          <p>
            Nous reprenons ensuite le van, toujours sans programme très précis,
            et continuons à découvrir l’île.
          </p>
          <p>
            Nous faisons un arrêt à Boyardville. Nous garons le van au parking
            de Boyardville puis rejoignons la plage pour observer le fort.
          </p>
          <p>
            Au loin apparaît Fort Boyard. À l’œil nu, il est bien loin, mais
            avec le gros zoom de l’appareil photo, je peux enfin le rapprocher
            un peu et immortaliser ce célèbre fort posé au milieu de l’eau.
          </p>
        </div>
        <Photo src={fort} alt="Fort Boyard photographié au téléobjectif depuis Boyardville, avec un catamaran au premier plan" caption="Depuis Boyardville, Fort Boyard se rapproche grâce au gros zoom." className={styles.medium} sizes={medium} />
      </section>

      <section className={styles.sequence} aria-labelledby="oleron-chassiron-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="oleron-chassiron-title">Cap sur Chassiron</h3>
          <p>Nous reprenons la route jusqu’au phare de Chassiron.</p>
          <p>
            Une nouvelle fois, la découverte nous plaît beaucoup. Après avoir
            vu le phare, nous allons jusqu’au bord de l’eau. Le paysage change
            complètement : rochers, galets, océan et falaises basses.
          </p>
        </div>
        <figure className={`${styles.photo} ${styles.portrait}`}>
          {/* Preserve the original EXIF rotation; dimensions describe the oriented portrait. */}
          <Image src="/images/voyages/la-grande-boucle-de-l-ouest/chassiron-phare.jpg" width={4000} height={6000} unoptimized alt="Le phare de Chassiron et ses bandes noires et blanches, au-dessus du jardin" sizes="(max-width: 700px) 80vw, 420px" />
          <figcaption>Chassiron · Une nouvelle découverte au pied du phare.</figcaption>
        </figure>
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>Nous prenons le temps de nous promener et de profiter du paysage.</p>
        </div>
        <Photo src={rivage} alt="Une personne se promène parmi les galets au pied d’une falaise basse, au bord de l’océan à Chassiron" caption="Au bord de l’eau, parmi les rochers et les galets." />
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>
            Depuis le littoral, le phare apparaît encore au-dessus de la
            falaise et nous offre une dernière vue complètement différente.
          </p>
        </div>
        <Photo src={littoral} alt="Le phare de Chassiron apparaît au-dessus de la falaise, vu depuis le rivage rocheux" caption="Une dernière vue du phare, cette fois depuis le littoral." />
      </section>

      <section className={styles.sequence} aria-labelledby="oleron-retour-title">
        <div className={`${journal.prose} ${styles.closing}`}>
          <h3 id="oleron-retour-title">Retour au camping</h3>
          <p>
            Nous terminons notre découverte de l’île vers 17 h environ et
            reprenons la route vers Arces-sur-Gironde et le Camping Les 2 Salamandres.
          </p>
          <p>
            Cette journée résume assez bien l’expérience que nous sommes en
            train de tester : laisser le van installé plusieurs nuits au même
            camping, partir avec lui le matin pour visiter les environs, puis
            revenir au même endroit le soir.
          </p>
          <p>
            C’est différent de notre manière habituelle de voyager, où nous
            avançons au fil des journées et cherchons notre prochain endroit
            pour dormir en cours de route. Pour l’instant, nous poursuivons
            l’expérience…
          </p>
        </div>
      </section>
    </section>
  );
}
