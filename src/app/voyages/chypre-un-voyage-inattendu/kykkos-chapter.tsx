import Image from "next/image";
import { photos } from "./kykkos-photos";
import journal from "../la-grande-boucle-de-l-ouest/page.module.css";
import chapter from "../la-grande-boucle-de-l-ouest/premiers-kilometres-chapter.module.css";
import layout from "./manchester-chapter.module.css";
import styles from "./paphos-cape-aspro-chapter.module.css";

type PhotoNumber = (typeof photos)[number]["numero"];

function Photo({ numero, paired = false }: { numero: PhotoNumber; paired?: boolean }) {
  const photo = photos.find((item) => item.numero === numero)!;
  const wide = photo.width > photo.height;
  return <figure data-photo-number={numero} className={`${chapter.photo} ${wide ? chapter.landscape : chapter.portrait}`}>
    <Image src={photo.src} width={photo.width} height={photo.height} alt={photo.alt}
      sizes={paired ? "(max-width: 700px) 88vw, (max-width: 1118px) 40vw, 450px"
        : wide ? "(max-width: 1118px) 88vw, 950px" : "(max-width: 700px) 80vw, 420px"} />
    <figcaption>{photo.caption}</figcaption>
  </figure>;
}

function Pair({ numbers }: { numbers: [PhotoNumber, PhotoNumber] }) {
  return <div className={layout.pair}>{numbers.map((numero) => <Photo key={numero} numero={numero} paired />)}</div>;
}

export default function KykkosChapter() {
  return <section id="etape-4" className={`${chapter.chapter} ${styles.chapter}`} aria-labelledby="etape-4-title">
    <header id="etape-4-header" className={chapter.chapterHeader}>
      <p className={journal.dateline}>ÉTAPE 04</p>
      <div>
        <p className={journal.dateline}><time dateTime="2026-04-25">SAMEDI 25 AVRIL 2026</time> · JOUR 4</p>
        <h2 id="etape-4-title">Kykkos, un monastère aux mille couleurs</h2>
        <p className={chapter.route}>Paphos → Kykkos → Throni → Paphos</p>
      </div>
    </header>

    <nav className={styles.dayNav} aria-label="Les moments de l’étape 04">
      <a href="#etape-3-title">← Étape 03</a>
      <a href="#kykkos-title">Le monastère</a>
      <a href="#throni-title">Throni</a>
      <a href="#retour-paphos-title">Retour à Paphos</a>
    </nav>

    <section className={chapter.sequence} aria-labelledby="depart-kykkos-title">
      <div className={`${journal.prose} ${chapter.text}`}>
        <h3 id="depart-kykkos-title">Tout a commencé à Fonsorbes</h3>
        <p>Avant même de partir pour Chypre, nous avions regardé chez nous, à Fonsorbes, une vidéo sur le monastère de Kykkos. Notre fille avait trouvé l’endroit tellement joli qu’elle voulait absolument qu’on y aille. On a donc ajouté Kykkos à notre liste de visites.</p>
        <p>Ce samedi matin, nous quittons notre hébergement de Paphos dans notre petite voiture de location, direction les montagnes. Je commence à bien m’habituer à conduire à gauche. Finalement, je ne me débrouille pas si mal ! Hihihi !</p>
        <p>Il y a peu de photos de la route. C’est moi qui conduisais, et pour conduire et photographier en même temps, il me manque encore quelques mains ! LOL.</p>
      </div>
    </section>

    <section className={chapter.sequence} aria-labelledby="kykkos-title">
      <div className={`${journal.prose} ${chapter.text}`}>
        <h3 id="kykkos-title">Dès le porche, on en prend plein les yeux</h3>
        <p>À l’arrivée, on voit d’abord les murs de pierre. Puis, au milieu, ce petit porche couvert de mosaïques attire tout de suite le regard. En passant dessous, je repense à la vidéo et à notre fille qui tenait tant à venir. Nous y voilà !</p>
      </div>
      <div className={layout.single}><Photo numero="007" /></div>
      <div className={`${journal.prose} ${chapter.textPause}`}>
        <h3>Des cours aux galeries peintes</h3>
        <p>Dans les cours, les arcades se superposent et le clocher se détache au-dessus des toits. En prenant un peu de hauteur, la vue change. On retrouve les mêmes pierres, mais une ouverture permet d’apercevoir toute une galerie derrière les arches.</p>
      </div>
      <Pair numbers={["014", "025"]} />
      <Pair numbers={["035", "071"]} />
      <div className={`${journal.prose} ${chapter.textPause}`}>
        <p>Ce sont surtout les couleurs qui nous émerveillent. En avançant sous les plafonds de bois, on découvre des scènes peintes les unes à côté des autres. Et quand on lève les yeux, les fresques continuent jusque dans la voûte bleue.</p>
      </div>
      <Pair numbers={["034", "052"]} />
      <div className={`${journal.prose} ${chapter.textPause}`}>
        <p>Je prends une photo pour garder la perspective d’une galerie, puis je m’arrête devant un portail doré ou je m’approche pour voir les tesselles autour des oiseaux. Voilà comment on se retrouve avec autant de photos. À chaque fois que je crois avoir fini, un autre détail me retient !</p>
      </div>
      <div className={layout.single}><Photo numero="058" /></div>
      <Pair numbers={["049", "068"]} />
    </section>

    <section className={chapter.sequence} aria-labelledby="chats-kykkos-title">
      <div className={`${journal.prose} ${chapter.text}`}>
        <h3 id="chats-kykkos-title">Quelques caresses avant de repartir</h3>
        <p>Depuis notre arrivée à Chypre, notre fille est ravie de croiser autant de chats. Avant même la visite, elle avait déjà trouvé un rouquin à caresser. À la sortie du monastère, quatre chats se retrouvent autour d’elle, près des voitures. Avec elle, le chemin jusqu’à la voiture prend toujours un peu plus de temps quand il y a un chat dans les parages !</p>
      </div>
      <Pair numbers={["001", "077"]} />
    </section>

    <section className={chapter.sequence} aria-labelledby="throni-title">
      <div className={`${journal.prose} ${chapter.text}`}>
        <h3 id="throni-title">Un peu plus haut, à Throni</h3>
        <p>Nous reprenons la voiture pour monter jusqu’à Throni. Sur l’esplanade, nous découvrons la statue de l’archevêque Makarios III. Tout autour, le regard porte loin sur les versants boisés.</p>
      </div>
      <Pair numbers={["080", "085"]} />
      <div className={`${journal.prose} ${chapter.textPause}`}>
        <p>Nous suivons la grande allée bordée de petits édifices décorés. Au bout, la croix se détache au-dessus de l’église de Throni, près du tombeau de Makarios III. Nous allons jusqu’à l’église et poussons la porte.</p>
      </div>
      <Pair numbers={["093", "102"]} />
      <div className={`${journal.prose} ${chapter.textPause}`}>
        <h3>Sous la coupole</h3>
        <p>À l’intérieur, les mosaïques dorées remplissent le regard. Les colonnes sombres font ressortir les arcs clairs, et même le sol est couvert de motifs. Après les galeries de Kykkos, je croyais avoir eu ma dose de décors pour la journée. Il suffisait de lever les yeux vers la coupole pour repartir de plus belle avec l’appareil photo.</p>
      </div>
      <Pair numbers={["109", "113"]} />
      <div className={layout.single}><Photo numero="114" /></div>
      <div className={layout.single}><Photo numero="119" /></div>
    </section>

    <section className={chapter.sequence} aria-labelledby="retour-paphos-title">
      <div className={`${journal.prose} ${chapter.text}`}>
        <h3 id="retour-paphos-title">Notre dernière nuit à Paphos</h3>
        <p>De retour à Paphos, nous prenons le temps de nous reposer, de refaire nos sacs et de chercher ce que nous allons faire le lendemain. C’est notre dernière nuit ici. Le 26 avril, nous quitterons Paphos pour rejoindre notre prochain hôtel à Ayia Napa.</p>
        <p>Cette journée-là, nous l’avons prévue spécialement pour notre fille. Au programme, un grand magasin à Limassol et, juste avant, une petite surprise qui a quelque chose à voir avec les chats. Je garde le reste pour la suite !</p>
      </div>
    </section>
  </section>;
}
