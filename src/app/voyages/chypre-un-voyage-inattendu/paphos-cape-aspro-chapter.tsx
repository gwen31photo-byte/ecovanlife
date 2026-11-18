import Image from "next/image";
import { photos } from "./paphos-cape-aspro-photos";
import journal from "../la-grande-boucle-de-l-ouest/page.module.css";
import chapter from "../la-grande-boucle-de-l-ouest/premiers-kilometres-chapter.module.css";
import layout from "./manchester-chapter.module.css";
import styles from "./paphos-cape-aspro-chapter.module.css";

type PhotoNumber = (typeof photos)[number]["numero"];

function Photo({ numero, wide = false, compact = false }: {
  numero: PhotoNumber; wide?: boolean; compact?: boolean;
}) {
  const photo = photos.find((item) => item.numero === numero)!;
  return <figure data-photo-number={numero} className={`${chapter.photo} ${wide ? chapter.landscape : chapter.portrait}`}>
    <Image src={photo.src} width={photo.width} height={photo.height} alt={photo.alt}
      sizes={compact
        ? "(max-width: 700px) 80vw, (max-width: 1118px) 40vw, 450px"
        : wide ? "(max-width: 700px) 88vw, (max-width: 1118px) 85vw, 950px"
          : "(max-width: 700px) 80vw, (max-width: 1000px) 36vw, 420px"} />
    <figcaption>{photo.caption}</figcaption>
  </figure>;
}

function Pair({ numbers }: { numbers: [PhotoNumber, PhotoNumber] }) {
  return <div className={layout.pair}>{numbers.map((numero) => <Photo key={numero} numero={numero} compact />)}</div>;
}

export default function PaphosCapeAsproChapter() {
  return <section id="etape-3" className={`${chapter.chapter} ${styles.chapter}`} aria-labelledby="etape-3-title">
    <header className={chapter.chapterHeader}>
      <p className={journal.dateline}>ÉTAPE 03</p>
      <div>
        <p className={journal.dateline}><time dateTime="2026-04-24">VENDREDI 24 AVRIL 2026</time> · JOUR 3</p>
        <h2 id="etape-3-title">Des mosaïques de Paphos aux falaises de Cape Aspro</h2>
        <p className={chapter.route}>Paphos → Cape Aspro</p>
      </div>
    </header>

    <nav className={styles.dayNav} aria-label="Les moments de l’étape 03">
      <a href="#paphos-chateau-title">Le château</a>
      <a href="#nea-paphos-title">Les mosaïques</a>
      <a href="#tombeaux-rois-title">Les tombeaux</a>
      <a href="#cape-aspro-title">Cape Aspro</a>
    </nav>

    <section className={chapter.sequence} aria-labelledby="artemis-matin-title">
      <div className={chapter.departure}>
        <Photo numero="001" />
        <div className={journal.prose}>
          <h3 id="artemis-matin-title">Une nouvelle journée… et un sac oublié !</h3>
          <p>À Artemis Cynthia, la piscine est toujours là, juste sous nos fenêtres. Après nos premiers pas à Paphos la veille, une nouvelle journée de découvertes commence !</p>
          <p>Et moi, j’ai encore oublié mon appareil photo à l’hébergement. J’adore photographier nos voyages, mais mon Nikon est rangé dans un gros sac que j’ai parfois tendance à laisser derrière moi. Le plus drôle, c’est que je m’en aperçois toujours trop tard ! LOL.</p>
          <p>C’est aussi pour cette petite habitude familiale que nous avons choisi un téléphone qui fait de très bonnes photos. Il va donc assurer toutes les visites archéologiques de ce matin. Heureusement qu’il est là !</p>
        </div>
      </div>
    </section>

    <section className={chapter.sequence} aria-labelledby="paphos-chateau-title">
      <div className={`${journal.prose} ${chapter.text}`}>
        <p className={journal.dateline}>LE MATIN · AU BORD DU PORT</p>
        <h3 id="paphos-chateau-title">Le château de Paphos, entre pierre et mer</h3>
        <p>Nous commençons par le château de Paphos, au bord du port. Avant même d’entrer, je m’arrête devant son reflet dans l’eau. Avec les pierres du château, le petit pont et la mer autour, la visite commence déjà dehors.</p>
      </div>
      <div className={layout.single}><Photo numero="010" wide /></div>
      <div className={`${journal.prose} ${chapter.textPause}`}>
        <p>Nous découvrons ensuite l’intérieur : de grandes voûtes, des murs épais et des escaliers qui nous font passer d’un espace à l’autre. Le téléphone ne chôme pas, même sans le Nikon !</p>
      </div>
      <Pair numbers={["014", "017"]} />
      <div className={`${journal.prose} ${chapter.textPause}`}>
        <p>Depuis le château, nous profitons aussi des vues sur la mer et sur le port. D’un côté, l’eau transparente et les rochers ; de l’autre, les bateaux et les quais. Une belle façon de commencer la journée.</p>
      </div>
      <Pair numbers={["021", "026"]} />
    </section>

    <section className={chapter.sequence} aria-labelledby="nea-paphos-title">
      <div className={`${journal.prose} ${chapter.text}`}>
        <p className={journal.dateline}>NEA PAPHOS</p>
        <h3 id="nea-paphos-title">Des ruines, des colonnes… et quelles mosaïques !</h3>
        <p>Nous poursuivons avec le parc archéologique de Nea Paphos. Devant nous, des vestiges de murs, des colonnes, des sols anciens : il y a de quoi regarder dans toutes les directions. Je passe des vues d’ensemble aux petits détails, avec l’envie de garder un souvenir de tout.</p>
      </div>
      <Pair numbers={["031", "041"]} />
      <div className={`${journal.prose} ${chapter.textPause}`}>
        <p>Mais ce sont surtout les mosaïques qui me retiennent. La grande composition circulaire, ses motifs qui se répondent, puis les dessins géométriques à ciel ouvert… Je regarde, je photographie, puis je découvre encore un détail que je n’avais pas vu.</p>
      </div>
      <div className={layout.single}><Photo numero="038" /></div>
      <Pair numbers={["039", "047"]} />
      <div className={`${journal.prose} ${chapter.textPause}`}>
        <p>La découverte continue sous les bâtiments de protection. Les passerelles permettent d’observer d’autres mosaïques, avec des animaux, des personnages et de longues bordures décorées. Difficile de choisir où poser les yeux !</p>
      </div>
      <Pair numbers={["050", "057"]} />
      <div className={layout.single}><Photo numero="060" /></div>
      <div className={`${journal.prose} ${chapter.textPause}`}>
        <p>Entre deux ensembles de vestiges, nous retrouvons le ciel bleu, le phare blanc de Paphos et les chemins bordés de fleurs. Cette alternance entre les mosaïques et les espaces ouverts fait aussi le charme de la visite.</p>
      </div>
      <Pair numbers={["066", "073"]} />
      <div className={chapter.evening}>
        <Photo numero="076" />
        <div className={journal.prose}>
          <h3 id="paphos-lezard-title">Notre fille a l’œil !</h3>
          <p>C’est elle qui repère ce lézard sur son rocher. Une fois celui-ci photographié, nous passons au moins un quart d’heure à essayer d’en trouver d’autres. 😂 Les mosaïques ont momentanément de la concurrence !</p>
        </div>
      </div>
    </section>

    <section className={chapter.sequence} aria-labelledby="tombeaux-rois-title">
      <div className={`${journal.prose} ${chapter.text}`}>
        <p className={journal.dateline}>TOUJOURS À PAPHOS</p>
        <h3 id="tombeaux-rois-title">Les Tombeaux des Rois, sous la surface</h3>
        <p>Nous poursuivons nos visites aux Tombeaux des Rois. Cette fois, les escaliers nous entraînent dans la roche. Nous explorons les chambres creusées dans la pierre, puis nous découvrons de grandes cours souterraines entourées de colonnes.</p>
      </div>
      <Pair numbers={["081", "087"]} />
      <div className={`${journal.prose} ${chapter.textPause}`}>
        <p>J’aime ces changements de perspective : regarder une cour depuis le haut, descendre, puis la retrouver entre les colonnes. Selon l’endroit où nous nous tenons, les ouvertures, l’ombre et la lumière composent des images complètement différentes.</p>
      </div>
      <Pair numbers={["092", "100"]} />
      <Pair numbers={["102", "106"]} />
      <div className={layout.single}><Photo numero="111" /></div>
      <div className={chapter.evening}>
        <Photo numero="079" />
        <div className={journal.prose}>
          <h3 id="paphos-chevres-title">Le retour vers la voiture peut attendre</h3>
          <p>En retournant vers la voiture, nous croisons plusieurs chèvres. Avec ma fille, l’arrêt est évidemment obligatoire ! Hihihi. 🐐 Après le lézard, voilà une nouvelle bonne raison de prendre notre temps.</p>
        </div>
      </div>
    </section>

    <section className={chapter.sequence} aria-labelledby="cape-aspro-title">
      <div className={`${journal.prose} ${chapter.text}`}>
        <p className={journal.dateline}>L’APRÈS-MIDI · CHANGEMENT DE DÉCOR</p>
        <h3 id="cape-aspro-title">Cape Aspro, du bleu et des falaises blanches</h3>
        <p>Nous prenons ensuite la route pour Cape Aspro. C’est un reportage sur YouTube qui nous a donné envie de découvrir cet endroit. Pour préparer le voyage, nous avions aussi consulté la carte de partir.com : elle nous avait donné d’autres idées, notamment Avakas Gorge et Famagouste. Pour les falaises de cet après-midi, l’envie était bien venue de la vidéo !</p>
        <p>En arrivant, nous découvrons les criques, l’eau transparente et les grandes falaises claires. Après les pierres et les mosaïques du matin, quel changement de paysage !</p>
      </div>
      <div className={layout.single}><Photo numero="115" wide /></div>
      <Pair numbers={["121", "124"]} />
      <div className={layout.single}><Photo numero="131" wide /></div>
      <div className={`${journal.prose} ${chapter.textPause}`}>
        <h3 id="cape-aspro-galets-title">D’abord, une pause tout près de l’eau</h3>
        <p>Avant de commencer à monter, nous passons près d’une plage de galets et de superbes falaises blanches. Impossible de ne pas s’arrêter pour prendre des photos ! Les strates de la roche, les galets et la transparence de l’eau méritent bien une pause.</p>
      </div>
      <Pair numbers={["139", "143"]} />
      <div className={layout.single}><Photo numero="151" wide /></div>
      <div className={`${journal.prose} ${chapter.textPause}`}>
        <p>Nous prenons le temps de nous poser sur les galets, de nous mouiller les pieds et de profiter du cadre. Nous ne nous baignons pas : il ne fait pas assez chaud. Mais rester là, au bord de cette eau si claire, nous plaît déjà beaucoup.</p>
      </div>
    </section>

    <section className={chapter.sequence} aria-labelledby="cape-aspro-balade-title">
      <div className={`${journal.prose} ${chapter.text}`}>
        <h3 id="cape-aspro-balade-title">Au-dessus de la mer, à notre rythme</h3>
        <p>Nous poursuivons ensuite la balade sur les sentiers au-dessus de la mer. Les vues sont magnifiques, mais certains passages sont franchement impressionnants. Le chemin se resserre, le terrain devient rocheux et nous avançons avec attention.</p>
      </div>
      <div className={layout.single}><Photo numero="132" wide /></div>
      <div className={`${journal.prose} ${chapter.textPause}`}>
        <p>À certains endroits, il n’y a qu’une corde pour se tenir alors que nous longeons des zones exposées. Notre fille n’est pas très rassurée pour nous. Je comprends bien son inquiétude : le paysage donne envie de continuer, mais il faut aussi regarder où l’on met les pieds.</p>
      </div>
      <Pair numbers={["159", "165"]} />
      <div className={layout.single}><Photo numero="168" wide /></div>
      <div className={`${journal.prose} ${chapter.textPause}`}>
        <p>Finalement, le vent devient trop fort et nous décidons de ne pas monter plus haut. Nous préférons ne prendre aucun risque. Nous n’avons pas parcouru toute la randonnée, et cela nous va très bien : nous avons déjà profité de paysages superbes, tous les trois.</p>
      </div>
      <div className={layout.single}><Photo numero="183" wide /></div>
    </section>

    <section className={chapter.sequence} aria-labelledby="cape-aspro-chat-title">
      <div className={`${journal.prose} ${chapter.text}`}>
        <h3 id="cape-aspro-chat-title">Une dernière rencontre, bien cachée</h3>
        <p>Sur la fin de notre balade, nous apercevons aussi un chat caché parmi les rochers. Après le lézard et les chèvres, cette journée a décidément de quoi plaire à notre fille !</p>
        <p>Je vous laisse chercher à votre tour. Un petit indice si besoin : regardez vers le centre, légèrement à droite…</p>
        <p>Des voûtes du château aux mosaïques, des tombeaux aux falaises blanches, nous avons encore bien rempli cette journée. Et pour la dernière image, notre discret voisin des rochers nous offre un petit jeu d’observation.</p>
      </div>
      <div className={layout.single}><Photo numero="187" wide /></div>
    </section>
    <nav className={styles.dayNav} aria-label="Étape suivante">
      <a href="#etape-4-title">Étape 04 · Kykkos, un monastère aux mille couleurs →</a>
    </nav>
  </section>;
}
