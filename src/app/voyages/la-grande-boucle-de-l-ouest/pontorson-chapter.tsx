import Image from "next/image";
import journal from "./page.module.css";
import chapter from "./ile-oleron-chapter.module.css";
import styles from "./pontorson-chapter.module.css";

function Photo({ name, alt, width, height, caption, presentation = "pair" }: {
  name: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  presentation?: "single" | "pair";
}) {
  const portrait = height > width;
  const sizes = portrait
    ? presentation === "single"
      ? "(max-width: 477px) 79.2vw, 378px"
      : "(max-width: 700px) min(79.2vw, 378px), (max-width: 932px) calc((85vw - 36px) / 2), 378px"
    : presentation === "single"
      ? "(max-width: 700px) 88vw, (max-width: 1118px) 85vw, 950px"
      : "(max-width: 700px) 88vw, (max-width: 1118px) calc((85vw - 36px) / 2), 457px";

  return (
    <figure className={`${styles.photo} ${portrait ? styles.portrait : ""}`}>
      <Image src={`/images/voyages/la-grande-boucle-de-l-ouest/pontorson/${name}`}
        width={width} height={height} sizes={sizes} loading="lazy" alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export default function PontorsonChapter() {
  return (
    <section id="etape-7" className={chapter.chapter} aria-labelledby="etape-7-title">
      <header className={chapter.chapterHeader}>
        <p className={journal.dateline}>ÉTAPE 07</p>
        <div>
          <p className={journal.dateline}>26 juillet 2025 · Jour 9</p>
          <h2 id="etape-7-title">Une escale imprévue à Pontorson</h2>
          <p className={chapter.route}>Puy du Fou → Noyal-Châtillon → Pontorson</p>
        </div>
      </header>

      <div className={`${journal.prose} ${styles.introduction}`}>
        <p>Après nos deux journées bien remplies au Puy du Fou, nous avons repris la route en direction du Mont-Saint-Michel.</p>
      </div>

      <section id="pontorson-pause" className={styles.sequence} aria-labelledby="pontorson-pause-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="pontorson-pause-title">Une petite pause pour les courses et la lessive</h3>
          <p>Mais avant d’arriver à destination, il fallait s’occuper de quelques petites choses du quotidien. Eh oui, même en voyage, le linge ne se lave pas tout seul !</p>
          <p>Nous nous sommes donc arrêtés au Super U de Noyal-Châtillon pour faire quelques courses et lancer une machine à laver.</p>
        </div>
        <Photo name="PXL_20250726_120925560.jpg" width={4080} height={3072} alt="Deux vans sur le parking de notre pause, avec un commerce en arrière-plan" caption="Le parking de notre pause pour les courses et la lessive." presentation="single" />
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>Une fois tout cela terminé, nous avons repris la route. Mais comme il se faisait déjà tard, nous avons finalement décidé de ne pas rejoindre le Mont-Saint-Michel ce jour-là.</p>
        </div>
      </section>

      <section id="pontorson-nuit" className={styles.sequence} aria-labelledby="pontorson-nuit-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="pontorson-nuit-title">Une nuit à Pontorson</h3>
          <p>Nous avons trouvé un endroit où passer la nuit sur le parking du Carrefour Market de Pontorson, qui mettait gratuitement un espace à disposition des camping-cars.</p>
          <p>Nous avons donc installé notre van pour la nuit.</p>
        </div>
        <Photo name="PXL_20250726_144316321.MP.jpg" width={4080} height={3072} alt="Notre van rouge et blanc stationné sur un parking près d’un camping-car" caption="Notre van installé pour la nuit à Pontorson." presentation="single" />
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>Et puisque nous étions sur place, pourquoi ne pas en profiter pour découvrir un peu Pontorson ?</p>
          <p>Nous sommes partis nous promener dans la soirée, sans nous attendre à ce que cette petite balade nous réserve une si jolie surprise.</p>
        </div>
      </section>

      <section id="pontorson-rues" className={styles.sequence} aria-labelledby="pontorson-rues-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="pontorson-rues-title">Une jolie découverte au fil des rues</h3>
          <p>Dès les premières rues, j’ai été charmée par les maisons et les bâtiments en pierre.</p>
          <p>J’ai trouvé leur architecture vraiment magnifique.</p>
        </div>
        <div className={styles.pair}>
          <Photo name="PXL_20250726_154649120.jpg" width={3072} height={4080} alt="Tour et verrières d’un édifice religieux en pierre à Pontorson" />
          <Photo name="PXL_20250726_154659776.jpg" width={3072} height={4080} alt="Façade en pierre avec fenêtres à volets blancs et porte rouge" />
        </div>
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>Nous avons aussi découvert une rue décorée de petits moutons colorés suspendus au-dessus de nos têtes. Cela apportait une touche originale et joyeuse à notre promenade.</p>
        </div>
        <Photo name="PXL_20250726_155326328.jpg" width={3072} height={4080} alt="Rue de Pontorson décorée de moutons colorés suspendus entre les façades" caption="Les petits moutons colorés donnent une touche joyeuse à la rue." presentation="single" />
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>Nous avons continué à marcher tranquillement, en admirant les façades et les petits détails des maisons.</p>
          <p>Et c’est au détour de notre balade que nous avons découvert un endroit vraiment particulier.</p>
        </div>
      </section>

      <section id="pontorson-outils" className={styles.sequence} aria-labelledby="pontorson-outils-title">
        <div className={`${journal.prose} ${styles.text} ${styles.discovery}`}>
          <h3 id="pontorson-outils-title">Une collection d’objets anciens inattendue</h3>
          <p>En nous promenant, nous sommes tombés sur un lieu privé qui était ouvert au public, à condition de respecter les lieux.</p>
          <p>Nous avons décidé d’aller y jeter un œil.</p>
          <p>Et quelle découverte !</p>
          <p>Des outils anciens étaient exposés sur les murs en pierre et sur de grands panneaux en bois. Il y en avait de toutes sortes !</p>
        </div>
        <Photo name="PXL_20250726_155513695.jpg" width={4080} height={3072} alt="Outils anciens et sabots exposés sur un mur de pierre, au-dessus de plantations" caption="Des outils anciens, exposés à même les murs." presentation="single" />
        <div className={styles.pair}>
          <Photo name="PXL_20250726_155533066.MP.jpg" width={3072} height={4080} alt="Jardin fleuri avec une statue de cheval et une construction en bois autour d’un arbre" />
          <Photo name="PXL_20250726_155545894.jpg" width={3072} height={4080} alt="Outils anciens fixés sur un panneau de bois, avec un objet mécanique au premier plan" />
        </div>
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>Nous avons également découvert un joli jardin aménagé avec différentes décorations et des objets anciens.</p>
          <p>C’était un endroit original, plein de petits détails à observer.</p>
        </div>
        <div className={styles.pair}>
          <Photo name="PXL_20250726_155648928.jpg" width={4080} height={3072} alt="Vitrine de documents et outils anciens accrochés sur un mur de pierre" />
          <Photo name="PXL_20250726_155937670.jpg" width={4080} height={3072} alt="Façade ornée de plaques publicitaires et de petites vitrines, avec un passage ouvert vers la collection" caption="Un passage vers cette découverte inattendue." />
        </div>
      </section>

      <section id="pontorson-porte-cles" className={styles.sequence} aria-labelledby="pontorson-porte-cles-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="pontorson-porte-cles-title">Des porte-clés qui nous rappellent des souvenirs</h3>
          <p>Mais ce qui nous a particulièrement plu, c’est aussi cette impressionnante collection de porte-clés et d’anciennes publicités.</p>
          <p>Il y en avait tellement !</p>
          <p>Nous avons pris le temps de regarder les vitrines et de découvrir tous ces petits objets.</p>
        </div>
        <div className={styles.pair}>
          <Photo name="PXL_20250726_160432727.jpg" width={3072} height={4080} alt="Rangées de porte-clés au-dessus d’anciennes publicités dans une vitrine" caption="Des porte-clés et des publicités qui nous rappellent des souvenirs." />
          <Photo name="PXL_20250726_160506290.jpg" width={3072} height={4080} alt="Vitrine remplie de porte-clés publicitaires de formes et de marques variées" />
        </div>
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>Certains porte-clés nous ont rappelé des souvenirs, et cela nous a fait plaisir de retrouver des objets et des marques d’autrefois.</p>
          <p>C’était une découverte toute simple, mais vraiment agréable.</p>
          <p>Nous ne pensions pas tomber sur un endroit comme celui-ci en partant simplement nous promener dans Pontorson !</p>
        </div>
      </section>

      <section id="pontorson-promenade" className={styles.sequence} aria-labelledby="pontorson-promenade-title">
        <div className={`${journal.prose} ${styles.text}`}>
          <h3 id="pontorson-promenade-title">Une belle surprise avant le Mont-Saint-Michel</h3>
          <p>Après cette visite inattendue, nous avons poursuivi notre promenade dans les petites rues de Pontorson, en profitant encore de ses jolies maisons en pierre.</p>
        </div>
        <div className={styles.pair}>
          <Photo name="PXL_20250726_160712881.jpg" width={3072} height={4080} alt="Jardin et petite façade à colombages sous un pignon en pierre" />
          <Photo name="PXL_20250726_162841550.jpg" width={3072} height={4080} alt="Rue de Pontorson bordée de maisons en pierre aux fenêtres fleuries" />
        </div>
        <div className={`${journal.prose} ${styles.textPause}`}>
          <p>Finalement, cette journée qui devait simplement nous conduire jusqu’au Mont-Saint-Michel nous aura réservé une belle surprise.</p>
          <p>Entre les petites obligations du quotidien, notre halte pour la nuit et cette promenade improvisée, nous avons découvert un endroit que nous n’avions pas prévu de visiter.</p>
          <p>Comme quoi, en voyage, les imprévus peuvent parfois nous offrir de très beaux souvenirs !</p>
          <p>Nous avons ensuite passé la nuit sur le parking du Carrefour Market.</p>
          <p>Le lendemain, direction le Mont-Saint-Michel !</p>
        </div>
      </section>
    </section>
  );
}
