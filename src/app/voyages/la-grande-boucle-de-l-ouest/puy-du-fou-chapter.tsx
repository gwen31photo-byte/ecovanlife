import Image from "next/image";
import journal from "./page.module.css";
import chapter from "./ile-oleron-chapter.module.css";
import styles from "./puy-du-fou-chapter.module.css";

function Photo({ day, name, alt, width, height, caption, presentation = "gallery" }: {
  day: number; name: string; alt: string; width: number; height: number; caption?: string;
  presentation?: "single" | "gallery" | "wide";
}) {
  // Match the existing CSS widths, including the last odd gallery item.
  const portrait = height > width;
  const sizes = presentation === "wide"
    ? portrait
      ? "(max-width: 700px) 79.2vw, (max-width: 894px) 85vw, 760px"
      : "(max-width: 700px) 88vw, (max-width: 894px) 85vw, 760px"
    : presentation === "single"
      ? portrait
        ? "(max-width: 454px) 79.2vw, 360px"
        : "(max-width: 700px) 88vw, (max-width: 1118px) 85vw, 950px"
      : portrait
        ? "(max-width: 700px) min(79.2vw, 360px), (max-width: 889px) calc((85vw - 36px) / 2), 360px"
        : "(max-width: 700px) 88vw, (max-width: 1118px) calc((85vw - 36px) / 2), 457px";

  return (
    <figure className={`${styles.photo} ${height > width ? styles.portrait : ""}`}>
      <Image src={`/images/voyages/la-grande-boucle-de-l-ouest/puy-du-fou/${day}/${name}`}
        width={width} height={height} sizes={sizes} loading="lazy" alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export default function PuyDuFouChapter() {
  return (
    <section id="etape-6" className={chapter.chapter} aria-labelledby="etape-6-title">
      <header className={chapter.chapterHeader}>
        <p className={journal.dateline}>ÉTAPE 06</p>
        <div>
          <p className={journal.dateline}>24 et 25 juillet 2025 · Jours 7 et 8</p>
          <h2 id="etape-6-title">Deux jours au Puy du Fou</h2>
          <p className={chapter.route}>Fouras → Puy du Fou → Mont-Saint-Michel</p>
        </div>
      </header>
      <div className={styles.introduction}>
        <div className={journal.prose}>
          <p>Après notre journée à Fouras, nous avons repris la route pour rejoindre l’aire de camping-cars du Puy du Fou.</p>
          <p>Nous sommes arrivés la veille au soir, le 23 juillet. Nous voulions être sur place pour profiter du parc dès son ouverture le lendemain matin.</p>
          <p>Nous avions deux journées devant nous pour découvrir les spectacles, et nous étions loin d’imaginer à quel point certains allaient nous marquer !</p>
        </div>
      </div>
      <section className={styles.day} aria-labelledby="puy-24-title">
        <header className={styles.dayHeader}>
          <p className={journal.dateline}>24 JUILLET 2025 · JOUR 7</p>
          <h3 id="puy-24-title">Notre première journée au Puy du Fou</h3>
        </header>
        <div className={styles.single}>
          <Photo presentation="single" day={24} name="DSC_1924.JPG" width={6000} height={4000} alt="Bâtiments de pierre et toits de tuiles dans une allée du Puy du Fou" />
        </div>
        <section id="puy-oiseaux" className={styles.sequence} aria-labelledby="puy-oiseaux-title">
          <div className={styles.sectionText}>
            <h4 id="puy-oiseaux-title">Le Bal des Oiseaux Fantômes</h4>
            <div className={journal.prose}>
              <p>Pour commencer cette première journée, nous avons choisi Le Bal des Oiseaux Fantômes.</p>
              <p>Et quel premier spectacle !</p>
              <p>J’ai trouvé cela magnifique et impressionnant de voir tous ces oiseaux évoluer devant nous. Il y en avait tellement à regarder que je ne savais plus où donner de la tête.</p>
              <p>Une très belle façon de commencer notre découverte du Puy du Fou.</p>
            </div>
          </div>
          <div className={styles.gallery}>
            <Photo day={24} name="DSC_1936.JPG" width={6000} height={4000} alt="Un oiseau déploie ses ailes sur un coffre devant son soigneur et les gradins" />
            <Photo day={24} name="DSC_1954.JPG" width={6000} height={4000} alt="Un soigneur présente un oiseau devant les spectateurs du Bal des Oiseaux Fantômes" />
            <Photo day={24} name="DSC_1987.JPG" width={6000} height={4000} alt="De nombreux oiseaux survolent le décor arboré du Bal des Oiseaux Fantômes" />
            <Photo day={24} name="DSC_2000.JPG" width={6000} height={4000} alt="Un rapace se tient sur le passage en bois au pied des spectateurs" />
            <Photo presentation="wide" day={24} name="DSC_2001.JPG" width={6000} height={4000} alt="Des oiseaux en vol au-dessus des soigneurs et des gradins" />
          </div>
        </section>
        <section id="puy-vikings" className={styles.sequence} aria-labelledby="puy-vikings-title">
          <div className={styles.sectionText}>
            <h4 id="puy-vikings-title">Les Vikings</h4>
            <div className={journal.prose}>
              <p>Nous avons ensuite découvert Les Vikings.</p>
              <p>Celui-là fait partie de mes spectacles préférés !</p>
              <p>J’ai adoré l’histoire, les décors et tout ce qui se passait devant nous. J’ai trouvé l’ensemble vraiment génial.</p>
              <p>C’est l’un des spectacles qui m’ont le plus marquée pendant notre séjour.</p>
            </div>
          </div>
          <div className={styles.gallery}>
            <Photo day={24} name="DSC_2007.JPG" width={6000} height={4000} alt="Personnages et embarcation sur le plan d’eau devant la tour des Vikings" />
            <Photo day={24} name="DSC_2026.JPG" width={6000} height={4000} alt="Un drakkar apparaît devant la tour en bois du spectacle Les Vikings" />
            <Photo day={24} name="DSC_2028.JPG" width={6000} height={4000} alt="Personnages près d’une croix de pierre avec le drakkar en arrière-plan" />
            <Photo day={24} name="PXL_20250724_094545966.jpg" width={4080} height={3072} alt="Fumée et flammes dans le décor des Vikings, près du plan d’eau" />
          </div>
        </section>
        <section id="puy-arthur" className={styles.sequence} aria-labelledby="puy-arthur-title">
          <div className={styles.sectionText}>
            <h4 id="puy-arthur-title">L’Épée du Roi Arthur</h4>
            <div className={journal.prose}>
              <p>Nous avons poursuivi notre journée avec L’Épée du Roi Arthur.</p>
              <p>Ce qui m’a particulièrement impressionnée, c’est le moment où la scène se soulève. Je ne m’attendais pas à voir cela !</p>
              <p>Même si j’ai trouvé cette mise en scène spectaculaire, ce n’est pas celui que je placerais parmi mes préférés si je devais classer tous les spectacles.</p>
            </div>
          </div>
          <div className={styles.gallery}>
            <Photo day={24} name="PXL_20250724_113023275.jpg" width={4080} height={3072} alt="Tour de pierre et maisons à colombages du décor de L’Épée du Roi Arthur" />
            <Photo day={24} name="PXL_20250724_115251202.jpg" width={3072} height={4080} alt="Un personnage brandit une épée près des rochers dans L’Épée du Roi Arthur" />
            <Photo day={24} name="PXL_20250724_115705068.jpg" width={4080} height={3072} alt="Le plateau portant les maisons est soulevé au-dessus du bassin" />
            <Photo day={24} name="PXL_20250724_115832879.MP.jpg" width={4080} height={3072} alt="Une cascade coule du plateau soulevé tandis que les personnages évoluent en dessous" />
          </div>
        </section>
        <section id="puy-triomphe" className={styles.sequence} aria-labelledby="puy-triomphe-title">
          <div className={styles.sectionText}>
            <h4 id="puy-triomphe-title">Le Signe du Triomphe</h4>
            <div className={journal.prose}>
              <p>Pour notre quatrième spectacle, nous sommes allés voir Le Signe du Triomphe.</p>
              <p>Et celui-ci, je l’ai beaucoup aimé !</p>
              <p>Entre les personnages, les animaux et les différentes scènes qui se succèdent dans l’arène, nous avons encore découvert un spectacle impressionnant.</p>
            </div>
          </div>
          <div className={styles.gallery}>
            <Photo day={24} name="DSC_2034.JPG" width={6000} height={4000} alt="Vue de l’arène du Signe du Triomphe avant le spectacle" />
            <Photo day={24} name="DSC_2046.JPG" width={6000} height={4000} alt="Attelage et personnages autour du monument central de l’arène" />
            <Photo day={24} name="DSC_2050.JPG" width={6000} height={4000} alt="Un groupe d’oies traverse l’arène près des chevaux et des personnages" />
            <Photo day={24} name="DSC_2085.JPG" width={6000} height={4000} alt="Le décor central de l’arène transformé en bateau pendant Le Signe du Triomphe" />
          </div>
        </section>
        <section id="puy-fontaine" className={styles.sequence} aria-labelledby="puy-fontaine-title">
          <div className={styles.sectionText}>
            <h4 id="puy-fontaine-title">Le Monde Imaginaire de La Fontaine</h4>
            <div className={journal.prose}>
              <p>Après ces quatre spectacles, nous n’avions plus suffisamment de temps pour en découvrir un autre.</p>
              <p>Nous avons donc décidé de terminer la journée en nous promenant dans Le Monde Imaginaire de La Fontaine.</p>
              <p>C’était l’occasion de profiter d’un moment plus tranquille après tous ces spectacles.</p>
              <p>Ma fille s’est amusée à photographier les animaux que nous avons croisés pendant notre promenade.</p>
            </div>
          </div>
          <div className={styles.gallery}>
            <Photo day={24} name="DSC_2088.JPG" width={6000} height={4000} alt="Deux lapins, l’un blanc et l’autre sombre, dans un enclos arboré" />
            <Photo day={24} name="DSC_2102.JPG" width={6000} height={4000} alt="Une tortue marche sur le sol couvert de feuilles et de mousse" />
            <Photo presentation="wide" day={24} name="DSC_2103.JPG" width={6000} height={4000} alt="Un lapin gris aux grandes oreilles assis dans l’herbe" />
          </div>
          <p className={styles.galleryCaption}>Les animaux du Monde Imaginaire de La Fontaine, photographiés par ma fille.</p>
        </section>
        <section id="puy-premiere-nuit" className={styles.sequence} aria-labelledby="puy-premiere-nuit-title">
          <div className={styles.sectionText}>
            <h4 id="puy-premiere-nuit-title">Retour à l’aire de camping-cars</h4>
            <div className={journal.prose}>
              <p>Nous sommes ensuite retournés à l’aire de camping-cars du Puy du Fou.</p>
              <p>Une bonne douche, puis au lit ! Nous avions encore une deuxième journée bien remplie devant nous.</p>
            </div>
          </div>
        </section>
      </section>
      <section className={styles.day} aria-labelledby="puy-25-title">
        <header className={styles.dayHeader}>
          <p className={journal.dateline}>25 JUILLET 2025 · JOUR 8</p>
          <h3 id="puy-25-title">Des découvertes et de grands coups de cœur</h3>
        </header>
        <div className={styles.sectionText}>
          <div className={journal.prose}>
            <p>Pour cette deuxième journée, nous avons continué à découvrir les spectacles et les univers du Puy du Fou.</p>
            <p>Je ne me souviens plus de l’ordre exact de toutes nos visites, mais certains moments sont restés bien présents dans ma mémoire.</p>
          </div>
        </div>
        <div className={styles.single}>
          <Photo presentation="single" day={25} name="DSC_2111.JPG" width={6000} height={4000} alt="Façade de pierre du château du Puy du Fou avec ses fenêtres et ses bannières rouges" />
        </div>
        <section id="puy-mousquetaire" className={styles.sequence} aria-labelledby="puy-mousquetaire-title">
          <div className={styles.sectionText}>
            <h4 id="puy-mousquetaire-title">Mousquetaire de Richelieu</h4>
            <div className={journal.prose}>
              <p>Nous avons assisté au spectacle Mousquetaire de Richelieu.</p>
              <p>Les décors, les costumes et les jeux de lumière nous ont plongés dans un univers complètement différent de celui des spectacles de la veille.</p>
            </div>
          </div>
          <div className={styles.gallery}>
            <Photo day={25} name="PXL_20250725_095705673.MP.jpg" width={4080} height={3072} alt="Rideau rouge éclairé dans la salle de Mousquetaire de Richelieu avant le spectacle" />
            <Photo day={25} name="PXL_20250725_103000950.MP.jpg" width={4080} height={3072} alt="Personnages, décor de palais et lumières colorées reflétées sur l’eau dans Mousquetaire de Richelieu" />
          </div>
        </section>
        <section id="puy-lance" className={styles.sequence} aria-labelledby="puy-lance-title">
          <div className={styles.sectionText}>
            <h4 id="puy-lance-title">Le Secret de la Lance</h4>
            <div className={journal.prose}>
              <p>Nous avons également découvert Le Secret de la Lance.</p>
              <p>J’ai trouvé ce spectacle très spectaculaire et très joli.</p>
              <p>Les chevaux, les décors et les différentes scènes étaient vraiment impressionnants à regarder.</p>
            </div>
          </div>
          <div className={styles.gallery}>
            <Photo day={25} name="DSC_2121.JPG" width={6000} height={4000} alt="Un cavalier sur un cheval blanc galope devant les remparts du Secret de la Lance" />
            <Photo day={25} name="DSC_2122.JPG" width={6000} height={4000} alt="Un cavalier en costume bleu sur un cheval aux ornements colorés" />
            <Photo day={25} name="DSC_2138.JPG" width={6000} height={4000} alt="Effets pyrotechniques autour de la tour de pierre du Secret de la Lance" />
            <Photo day={25} name="DSC_2143.JPG" width={6000} height={4000} alt="Cavaliers devant la grande fresque dévoilée dans Le Secret de la Lance" />
            <Photo presentation="wide" day={25} name="PXL_20250725_120247515.jpg" width={4080} height={3072} alt="Fumée autour de la tour et des maisons du Secret de la Lance" />
          </div>
        </section>
        <div className={styles.stroll}>
          <div className={styles.single}>
            <Photo presentation="single" day={25} name="DSC_2146.JPG" width={4000} height={6000} alt="Visiteurs dans une rue bordée de maisons à colombages du Puy du Fou" caption="Une promenade dans les rues du parc." />
          </div>
        </div>
        <section id="puy-mime" className={styles.sequence} aria-labelledby="puy-mime-title">
          <div className={styles.sectionText}>
            <h4 id="puy-mime-title">Le Mime et l’Étoile</h4>
            <div className={journal.prose}>
              <p>Nous avons aussi vu Le Mime et l’Étoile.</p>
              <p>Je n’ai pas de photographie de ce spectacle, mais il fait bien partie de toutes les découvertes que nous avons faites pendant cette deuxième journée.</p>
            </div>
          </div>
        </section>
        <section id="puy-panache" className={styles.sequence} aria-labelledby="puy-panache-title">
          <div className={styles.sectionText + " " + styles.favorite}>
            <h4 id="puy-panache-title">Le Dernier Panache — Notre grand coup de cœur</h4>
            <div className={journal.prose}>
              <p>Parmi tous les spectacles que nous avons découverts au Puy du Fou, Le Dernier Panache reste notre préféré.</p>
              <p>Nous l’avons tellement aimé que nous sommes retournés le voir une deuxième fois !</p>
              <p>J’ai adoré l’ensemble : l’histoire de ce marin, les décors et surtout cette mise en scène que je n’avais jamais vue auparavant.</p>
              <p>Au début, je ne comprenais pas comment les décors pouvaient changer de cette façon. Puis j’ai réalisé que ce n’étaient pas seulement les décors qui bougeaient : c’était nous, les spectateurs, qui tournions !</p>
              <p>J’ai trouvé cela vraiment impressionnant.</p>
              <p>Entre l’histoire et cette manière incroyable de nous faire découvrir les différentes scènes, ce spectacle nous a complètement conquis.</p>
            </div>
          </div>
          <div className={styles.gallery}>
            <Photo day={25} name="PXL_20250725_162254510.jpg" width={3072} height={4080} alt="Personnages en costumes dans un salon richement décoré du Dernier Panache" />
            <Photo day={25} name="PXL_20250725_163127932.jpg" width={3072} height={4080} alt="Personnages et charrette dans un décor de forêt du Dernier Panache" />
            <Photo presentation="wide" day={25} name="PXL_20250725_164845157.jpg" width={3072} height={4080} alt="Navire en coupe montrant plusieurs ponts et des personnages dans Le Dernier Panache" />
          </div>
        </section>
        <section id="puy-perouse" className={styles.sequence} aria-labelledby="puy-perouse-title">
          <div className={styles.sectionText}>
            <h4 id="puy-perouse-title">Le Mystère de La Pérouse</h4>
            <div className={journal.prose}>
              <p>Nous avons également exploré Le Mystère de La Pérouse.</p>
              <p>Nous avons découvert différents espaces du bateau, avec leurs décors et leurs objets.</p>
            </div>
          </div>
          <div className={styles.gallery}>
            <Photo day={25} name="PXL_20250725_145038441.jpg" width={3072} height={4080} alt="Maquette d’un navire à voiles présentée dans une vitrine du Mystère de La Pérouse" />
            <Photo day={25} name="PXL_20250725_145949225.MP.jpg" width={3072} height={4080} alt="Intérieur sombre du navire, avec une couchette et un personnage en costume" />
            <Photo presentation="wide" day={25} name="PXL_20250725_150119414.jpg" width={3072} height={4080} alt="Globe, bouteilles et objets scientifiques sur une table du Mystère de La Pérouse" />
          </div>
          <div className={styles.textPause}>
            <div className={journal.prose}>
              <p>Mais je me souviens surtout d’un passage particulièrement impressionnant.</p>
              <p>Nous avancions dans un tunnel tandis que de l’eau passait juste au-dessus de nos têtes !</p>
              <p>C’était vraiment surprenant à voir et c’est l’un des moments qui m’ont marquée pendant cette visite.</p>
            </div>
          </div>
          <div className={styles.single}>
            <Photo presentation="single" day={25} name="PXL_20250725_141806261.jpg" width={3072} height={4080} alt="Visiteurs dans le tunnel éclairé en bleu du Mystère de La Pérouse, où l’eau passe au-dessus des têtes" caption="Dans le tunnel du Mystère de La Pérouse, l’eau passait au-dessus de nos têtes." />
          </div>
        </section>
        <section id="puy-verdun" className={styles.sequence} aria-labelledby="puy-verdun-title">
          <div className={styles.sectionText}>
            <h4 id="puy-verdun-title">Les Amoureux de Verdun</h4>
            <div className={journal.prose}>
              <p>Nous avons aussi découvert Les Amoureux de Verdun.</p>
              <p>Cette expérience nous a suffisamment plu pour que nous la fassions deux fois.</p>
              <p>Je n’ai pas de photos de ce passage. Il me semble que c’était trop sombre pour en prendre.</p>
              <p>Mais même sans images, cette visite fait partie de nos souvenirs de ces deux journées.</p>
            </div>
          </div>
        </section>
        <section id="puy-noces" className={styles.sequence} aria-labelledby="puy-noces-title">
          <div className={styles.sectionText}>
            <h4 id="puy-noces-title">Les Noces de Feu</h4>
            <div className={journal.prose}>
              <p>Nous avons également assisté aux Noces de Feu.</p>
              <p>Je n’ai retrouvé aucune photo de ce spectacle et je ne me souviens plus pourquoi je n’en ai pas pris.</p>
              <p>Il fait pourtant bien partie de notre séjour au Puy du Fou.</p>
            </div>
          </div>
        </section>
        <section id="puy-cinescenie" className={styles.sequence} aria-labelledby="puy-cinescenie-title">
          <div className={styles.sectionText}>
            <h4 id="puy-cinescenie-title">La Cinéscénie — Une fin de séjour magnifique</h4>
            <div className={journal.prose}>
              <p>Pour terminer cette deuxième journée, nous avons assisté à la Cinéscénie.</p>
              <p>Et quelle façon de finir notre séjour !</p>
              <p>J’ai trouvé ce spectacle magnifique, tout simplement génial.</p>
              <p>Après toutes les découvertes de ces deux journées, c’était une très belle manière de terminer notre visite du Puy du Fou.</p>
              <p>Les photographies étant interdites pendant la représentation, je n’ai pris que trois photos avant le début du spectacle. Je n’ai donc pas d’images de la Cinéscénie elle-même, mais le souvenir de ce moment reste bien présent.</p>
            </div>
          </div>
          <div className={styles.gallery}>
            <Photo day={25} name="PXL_20250725_194325635.jpg" width={4080} height={3072} alt="Vue panoramique du site de la Cinéscénie et des gradins avant la représentation" />
            <Photo day={25} name="PXL_20250725_194420585.jpg" width={3072} height={4080} alt="Le château se reflète dans l’eau au crépuscule avant la Cinéscénie" />
          </div>
          <p className={styles.galleryCaption}>Le site de la Cinéscénie avant le début de la représentation.</p>
        </section>
      </section>
      <section id="puy-derniere-nuit" className={styles.sequence} aria-labelledby="puy-derniere-nuit-title">
        <div className={styles.sectionText}>
          <h4 id="puy-derniere-nuit-title">Une dernière nuit avant de reprendre la route</h4>
          <div className={journal.prose}>
            <p>Après la Cinéscénie, nous sommes retournés à l’aire de camping-cars du Puy du Fou pour y passer notre dernière nuit.</p>
            <p>Ces deux journées nous auront permis de découvrir des spectacles très différents, avec de belles surprises et surtout un immense coup de cœur pour Le Dernier Panache.</p>
            <p>Le lendemain, nous reprendrons la route pour poursuivre notre Grande Boucle de l’Ouest.</p>
            <p>Prochaine destination : le Mont-Saint-Michel !</p>
          </div>
        </div>
      </section>
    </section>
  );
}
