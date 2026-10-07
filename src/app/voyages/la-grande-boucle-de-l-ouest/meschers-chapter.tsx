import Image from "next/image";
import journal from "./page.module.css";
import chapter from "./ile-oleron-chapter.module.css";
import styles from "./meschers-chapter.module.css";

const imagePath = "/images/voyages/la-grande-boucle-de-l-ouest/";

function Photo({ name, alt, width, height, caption, className = styles.landscape }: {
  name: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`${styles.photo} ${className}`}>
      <Image src={`${imagePath}${name}`} width={width} height={height} unoptimized alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export default function MeschersChapter() {
  return (
    <section id="etape-4" className={chapter.chapter} aria-labelledby="etape-4-title">
      <header className={chapter.chapterHeader}>
        <p className={journal.dateline}>ÉTAPE 04</p>
        <div>
          <p className={journal.dateline}>22 juillet 2025 · Jour 5</p>
          <h2 id="etape-4-title">Meschers-sur-Gironde et la plage Espagnole</h2>
          <p className={chapter.route}>Arces-sur-Gironde → Meschers-sur-Gironde → Plage Espagnole → Arces-sur-Gironde</p>
        </div>
      </header>

      <div className={`${journal.prose} ${chapter.introduction}`}>
        <p>
          La veille, après notre journée à La Rochelle, nous sommes revenus au
          Camping Les 2 Salamandres, à Arces-sur-Gironde. Le soir, nous ne savons
          absolument pas ce que nous allons faire le lendemain. Avant de jouer
          aux cartes, nous regardons sur Internet ce qu’il y a à découvrir dans
          les environs.
        </p>
        <p>
          Mon mari trouve Meschers-sur-Gironde. Je lui réponds simplement que
          cela a l’air sympa. Nous décidons donc d’y aller. Le lendemain, nous
          prenons le van en direction de Meschers-sur-Gironde, sans vraiment
          savoir ce que nous allons y découvrir.
        </p>
      </div>

      <section className={styles.sequence} aria-labelledby="meschers-decouverte-title">
        <div className={`${journal.prose} ${chapter.text}`}>
          <h3 id="meschers-decouverte-title">Une très belle surprise</h3>
          <p>
            À Meschers, nous découvrons les falaises et l’eau de l’estuaire de
            la Gironde. Nous sommes partis sans savoir vraiment ce qui nous
            attendait, et le paysage nous plaît tout de suite. Pour moi, c’est
            une magnifique découverte : des falaises, de l’eau et de beaux
            paysages… tout ce que j’aime.
          </p>
        </div>
        <Photo name="meschers-falaise-et-estuaire.JPG" width={6000} height={4000}
          alt="Les terrasses et ouvertures de la falaise de Meschers au-dessus de l’estuaire de la Gironde"
          caption="Une première vue sur les falaises et l’estuaire." />
        <div className={`${journal.prose} ${chapter.textPause}`}>
          <p>
            Nous visitons les Grottes du Régulus. Nous descendons dans la roche
            puis découvrons les cavités les unes après les autres. Les passages
            aménagés nous mènent d’un espace à l’autre, avec les parois tout
            autour de nous.
          </p>
        </div>
        <Photo name="regulus-descente-dans-la-roche.jpg" width={3072} height={4080}
          alt="Un escalier descend entre les parois rocheuses vers une salle des Grottes du Régulus"
          className={styles.portrait} />
      </section>

      <section className={styles.sequence} aria-labelledby="meschers-cavites-title">
        <div className={`${journal.prose} ${chapter.text}`}>
          <h3 id="meschers-cavites-title">D’une cavité à l’autre</h3>
          <p>
            À l’intérieur, nous découvrons des objets liés à la pêche et des
            scènes de vie reconstituées. Les filets et les outils, puis la table
            du Restaurant des Fontaines, donnent un autre visage à ces espaces
            creusés dans la falaise.
          </p>
        </div>
        <div className={styles.pair}>
          <Photo name="regulus-filets-et-outils-de-peche.jpg" width={3072} height={4080}
            alt="Des filets, des perches et un casier de pêche exposés dans une cavité"
            caption="L’univers de la pêche, dans l’une des cavités." className={styles.pairPhoto} />
          <Photo name="regulus-restaurant-des-fontaines.jpg" width={3072} height={4080}
            alt="Deux mannequins à une table dressée dans la reconstitution du Restaurant des Fontaines"
            caption="Le Restaurant des Fontaines reconstitué." className={styles.pairPhoto} />
        </div>
        <div className={`${journal.prose} ${chapter.textPause}`}>
          <p>
            Nous prenons aussi le temps de regarder dehors. Au pied de la
            falaise, un carrelet blanc se détache sur l’eau. Nous passons ainsi
            des cavités aux vues sur l’estuaire, sans nous presser.
          </p>
        </div>
        <Photo name="meschers-carrelet-blanc-sur-la-gironde.jpg" width={4080} height={3072}
          alt="Un carrelet blanc fleuri sur pilotis au pied de la falaise, au-dessus de la Gironde"
          caption="Le carrelet blanc, en contrebas de la visite." />
        <div className={`${journal.prose} ${chapter.textPause}`}>
          <p>
            Les falaises, les ouvertures dans la roche et l’eau réunies dans
            le même paysage : nous avons envie de nous arrêter pour en profiter.
            Je photographie beaucoup lorsque j’aime un endroit, et Meschers
            fait vraiment partie de ces découvertes-là.
          </p>
        </div>
        <Photo name="meschers-panorama-falaises-et-cavites.JPG" width={6000} height={4000}
          alt="Panorama des falaises calcaires de Meschers, des cavités et des terrasses au-dessus de l’estuaire"
          caption="Les falaises, les cavités et l’eau : le paysage que nous prenons le temps de découvrir."
          className={styles.panorama} />
        <div className={`${journal.prose} ${chapter.textPause}`}>
          <p>
            Nous poursuivons la visite parmi les décors de Cadet et Belin,
            dans l’univers des naufrageurs, puis les objets et les meubles
            d’un habitat troglodytique. Chaque cavité nous montre quelque
            chose de différent.
          </p>
        </div>
        <div className={`${styles.pair} ${styles.mixedPair}`}>
          <Photo name="regulus-cadet-et-belin.jpg" width={3072} height={4080}
            alt="Les silhouettes de Cadet et de la chèvre Belin près d’un coffre et de filets dans une cavité"
            caption="Cadet et Belin, dans le décor des naufrageurs." className={styles.pairPhoto} />
          <Photo name="regulus-chambre-troglodytique.jpg" width={4080} height={3072}
            alt="Une chambre troglodytique reconstituée avec un lit, un rouet et des meubles anciens"
            caption="Une chambre aménagée dans la roche." className={styles.pairPhoto} />
        </div>
        <div className={`${journal.prose} ${chapter.textPause}`}>
          <p>
            Depuis les ouvertures, nous retrouvons toujours le paysage.
            Regarder l’estuaire depuis l’intérieur de la roche nous plaît
            particulièrement. Nous profitons encore de ces vues avant de
            poursuivre par les escaliers et les passages.
          </p>
        </div>
        <Photo name="regulus-ouverture-sur-estuaire.jpg" width={4080} height={3072}
          alt="L’estuaire de la Gironde vu depuis une ouverture rocheuse derrière une rambarde en bois"
          caption="La vue sur l’estuaire, encadrée par la roche." className={styles.opening} />
        <Photo name="regulus-escalier-dans-la-roche.jpg" width={3072} height={4080}
          alt="Un escalier de pierre remonte dans un passage étroit des Grottes du Régulus"
          className={styles.portrait} />
      </section>

      <section className={styles.sequence} aria-labelledby="meschers-plage-title">
        <div className={`${journal.prose} ${chapter.text}`}>
          <h3 id="meschers-plage-title">Enfin une baignade !</h3>
          <p>
            Après la visite, notre fille a envie d’aller se baigner. Nous
            réalisons alors que, depuis le début du voyage, nous ne nous sommes
            encore jamais baignés. Nous reprenons le téléphone, cette fois
            pour chercher une plage agréable dans les environs.
          </p>
          <p>
            Je trouve la plage Espagnole et nous décidons d’y aller. Nous
            reprenons le van, puis le laissons stationné sous les pins avant
            de rejoindre l’océan.
          </p>
        </div>
        <Photo name="meschers-plage-van-sous-les-pins.jpg" width={3072} height={4080}
          alt="Le van rouge et blanc stationné sous les pins parmi d’autres véhicules"
          caption="Le van sous les pins, pour la partie plage de la journée." className={styles.van} />
        <div className={`${journal.prose} ${chapter.textPause}`}>
          <p>
            Nous suivons le chemin sableux à travers les dunes. Après les
            falaises et l’estuaire, nous découvrons un tout autre paysage,
            avec l’océan devant nous.
          </p>
        </div>
        <Photo name="plage-espagnole-acces-par-les-dunes.jpg" width={3072} height={4080}
          alt="Un chemin de sable et un platelage traversent les dunes et les pins en direction de l’océan"
          caption="À travers les dunes, le chemin vers l’océan." className={styles.dunes} />
        <div className={`${journal.prose} ${chapter.textPause}`}>
          <p>
            Nous profitons enfin de la baignade. Les grosses vagues font
            vraiment le bonheur de notre fille : elle s’en régale. Après
            la découverte de Meschers, nous terminons cette partie de la
            journée dans l’eau et les vagues.
          </p>
        </div>
        <div className={styles.pair}>
          <Photo name="plage-espagnole-baignade-dans-les-vagues.jpg" width={3072} height={4080}
            alt="Des baigneurs et des planches de baignade dans les vagues déferlantes près du rivage"
            caption="Les vagues, pour cette première baignade du voyage." className={styles.pairPhoto} />
          <Photo name="plage-espagnole-baignade-face-aux-vagues.jpg" width={3072} height={4080}
            alt="Deux personnes de dos se baignent face aux vagues, avec une balise rouge au large"
            className={styles.pairPhoto} />
        </div>
      </section>

      <div className={`${journal.prose} ${styles.closing}`}>
        <p>
          Après cette journée bien remplie, nous retournons au Camping Les 2
          Salamandres. Meschers aura été une magnifique découverte, et cette
          première baignade une belle façon de terminer la journée. Nous
          passons notre dernière nuit dans ce camping avant de poursuivre le voyage.
        </p>
      </div>
    </section>
  );
}
