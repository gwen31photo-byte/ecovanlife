import Image from "next/image";
import { photos } from "./paphos-photos";
import journal from "../la-grande-boucle-de-l-ouest/page.module.css";
import chapter from "../la-grande-boucle-de-l-ouest/premiers-kilometres-chapter.module.css";
import layout from "./manchester-chapter.module.css";
import styles from "./paphos-chapter.module.css";

type PhotoNumber = (typeof photos)[number]["numero"];
function Photo({ numero, wide = false }: { numero: PhotoNumber; wide?: boolean }) {
  const photo = photos.find((item) => item.numero === numero)!;
  return <figure className={`${chapter.photo} ${wide ? chapter.landscape : chapter.portrait}`}>
    <Image src={photo.src} width={photo.width} height={photo.height} alt={photo.alt}
      sizes={wide ? "(max-width: 700px) 88vw, (max-width: 1118px) 85vw, 950px" : "(max-width: 700px) 80vw, (max-width: 1000px) 36vw, 420px"} />
    <figcaption>{photo.caption}</figcaption>
  </figure>;
}
function Pair({ numbers }: { numbers: [PhotoNumber, PhotoNumber] }) {
  return <div className={layout.pair}>{numbers.map((numero) => <Photo key={numero} numero={numero} />)}</div>;
}

export default function PaphosChapter() {
  return <section id="etape-2" className={`${chapter.chapter} ${styles.chapter}`} aria-labelledby="etape-2-title">
    <header className={chapter.chapterHeader}>
      <p className={journal.dateline}>ÉTAPE 02</p>
      <div>
        <p className={journal.dateline}>23 AVRIL 2026 · JOUR 2</p>
        <h2 id="etape-2-title">De Manchester à Paphos, nos premiers pas à Chypre</h2>
        <p className={chapter.route}>Manchester → Paphos</p>
      </div>
    </header>

    <section className={chapter.sequence} aria-labelledby="paphos-vol-title">
      <div className={chapter.departure}>
        <Photo numero="001" />
        <div className={journal.prose}>
          <h3 id="paphos-vol-title">Le plus beau des réveils, côté hublot</h3>
          <p>Après une nuit passée tant bien que mal à l’aéroport de Manchester, nous prenons l’avion pour Paphos. Lors du premier vol, notre fille avait eu froid à cause de la climatisation. Cette fois, je récupère donc la place côté hublot.</p>
          <p>Et là… impossible de résister : je prends énormément de photos avec mon téléphone ! Hihihi. Je n’ai pas beaucoup dormi, mais avec ce qui défile sous nos yeux, difficile de fermer les paupières.</p>
        </div>
      </div>
      <Pair numbers={["005", "009"]} />
      <div className={`${journal.prose} ${chapter.textPause}`}>
        <p>Les nuages, les montagnes enneigées, puis la mer : les paysages vus du ciel valent largement le coup d’œil. Le manque de sommeil est toujours là, mais je ne me lasse pas du spectacle !</p>
      </div>
      <div className={layout.single}><Photo numero="013" /></div>
      <Pair numbers={["015", "017"]} />
    </section>

    <section className={chapter.sequence} aria-labelledby="paphos-arrivee-title">
      <div className={`${journal.prose} ${chapter.text}`}>
        <h3 id="paphos-arrivee-title">Bienvenue à Paphos !</h3>
        <p>Nous arrivons à l’aéroport de Paphos vers 12 h 30. Une navette de l’agence de location vient nous chercher pour récupérer notre voiture. Nous prenons ensuite la direction d’Artemis Cynthia, notre premier hébergement, où nous allons séjourner du 23 au 26 avril.</p>
      </div>
      <div className={`${journal.prose} ${chapter.textPause}`}>
        <h3 id="paphos-conduite-title">La conduite à gauche… toute une aventure !</h3>
        <p>La conduite à gauche me demande énormément de concentration et me stresse beaucoup au départ. Mon mari essaie de prendre le volant, mais c’est finalement encore plus compliqué pour lui. Je reprends donc la conduite et, petit à petit, je commence à prendre mes marques.</p>
        <p>Il y a tout de même un petit raté : en tournant à gauche, je ne me retrouve pas exactement au bon endroit ! LOL. Le temps de m’habituer à ces nouveaux repères… mais ensuite, tout se passe bien.</p>
      </div>
    </section>

    <section className={chapter.sequence} aria-labelledby="paphos-logement-title">
      <div className={chapter.departure}>
        <Photo numero="018" />
        <div className={journal.prose}>
          <h3 id="paphos-logement-title">Nos premiers repères à Artemis Cynthia</h3>
          <p>Une fois arrivés à Artemis Cynthia, nous déposons nos affaires dans l’appartement. Nous découvrons les chambres, la pièce à vivre, le balcon et la piscine.</p>
          <p>Nous sommes fatigués, mais, comme d’habitude, pas question de rester nous reposer : nous partons explorer les environs !</p>
        </div>
      </div>
      <Pair numbers={["019", "020"]} />
      <div className={layout.single}><Photo numero="022" /></div>
    </section>

    <section className={chapter.sequence} aria-labelledby="paphos-eglise-title">
      <div className={`${journal.prose} ${chapter.text}`}>
        <h3 id="paphos-eglise-title">Une église fermée et les premiers chats</h3>
        <p>Au cours de notre promenade, nous découvrons une grande église. Elle est fermée : nous l’admirons donc seulement de l’extérieur, avec sa coupole et ses deux clochers.</p>
      </div>
      <div className={layout.single}><Photo numero="025" wide /></div>
      <div className={layout.single}><Photo numero="027" wide /></div>
      <div className={chapter.evening}>
        <Photo numero="033" />
        <div className={journal.prose}>
          <p>Nous empruntons ensuite un joli chemin bordé d’arbres, près de vestiges anciens. C’est là que notre fille aperçoit des chats errants. Elle poursuit sa promenade de son côté pour les observer, tandis que mon mari et moi allons découvrir le site en ruines.</p>
          <p>Et si vous regardez bien la photo, un petit chat noir se cache sur le muret, à droite du chemin. Il fallait avoir l’œil ! Hihihi. Ce sera le début d’une longue série de rencontres félines pendant notre séjour à Chypre.</p>
        </div>
      </div>
    </section>

    <section className={chapter.sequence} aria-labelledby="paphos-ruines-title">
      <div className={`${journal.prose} ${chapter.text}`}>
        <h3 id="paphos-ruines-title">Des ruines au détour du chemin</h3>
        <p>Nous arrivons sur ce site archéologique un peu par hasard. Entre les vestiges de murs et les arches, il y a de quoi regarder. Nous poursuivons la visite à deux, pendant que notre fille s’intéresse aux chats.</p>
      </div>
      <div className={layout.single}><Photo numero="034" wide /></div>
      <Pair numbers={["036", "040"]} />
      <div className={`${journal.prose} ${chapter.textPause}`}>
        <p>Nous avançons entre les colonnes, les vieilles pierres et les mosaïques. À chaque détour, un nouveau détail attire notre regard. Difficile d’imaginer que nous sommes arrivés à Chypre il y a seulement quelques heures !</p>
      </div>
      <div className={layout.single}><Photo numero="042" wide /></div>
      <div className={layout.single}><Photo numero="045" wide /></div>
    </section>

    <section className={chapter.sequence} aria-labelledby="paphos-mer-title">
      <div className={`${journal.prose} ${chapter.text}`}>
        <h3 id="paphos-mer-title">Premiers instants au bord de la Méditerranée</h3>
        <p>Nous rejoignons ensuite le front de mer de Paphos. Après les paysages aperçus depuis l’avion, nous voilà tout près de cette Méditerranée chypriote, avec son eau transparente et ses rochers.</p>
        <p>Nous avançons sur la promenade, entre la mer, les palmiers et les vues sur le littoral. Malgré la fatigue, je savoure le plaisir d’être là, au bord de l’eau.</p>
      </div>
      <Pair numbers={["051", "053"]} />
      <div className={chapter.evening}>
        <Photo numero="055" />
        <div className={journal.prose}>
          <p>La transparence de l’eau nous invite à regarder entre les rochers. Un peu plus loin, une statue se tient face à la mer. Nous continuons tranquillement le long de l’eau.</p>
        </div>
      </div>
      <div className={layout.single}><Photo numero="056" wide /></div>
      <div className={`${journal.prose} ${chapter.textPause}`}>
        <p>Et puis nous retrouvons cette inscription : « I LOVE PAFOS ». Entre les palmiers, la mer et ce grand cœur rouge, voilà une image de notre première soirée sur l’île.</p>
      </div>
      <div className={layout.single}><Photo numero="059" wide /></div>
    </section>

    <section className={chapter.sequence} aria-labelledby="paphos-sparta-title">
      <div className={`${journal.prose} ${chapter.text}`}>
        <h3 id="paphos-sparta-title">Notre première table chypriote : le Sparta</h3>
        <p>Pour manger, nous choisissons le Sparta, un restaurant chypriote à Paphos. Nous y mangeons très bien ! Les assiettes sont généreuses, avec notamment des frites, du pain pita, de la salade et des grillades.</p>
      </div>
      <Pair numbers={["060", "061"]} />
      <div className={`${journal.prose} ${chapter.closing}`}>
        <p>Quelle journée ! Presque pas de sommeil, un vol magnifique, l’arrivée dans un nouveau pays, les premières émotions de la conduite à gauche et déjà beaucoup de découvertes. Pour nos premiers pas à Chypre, nous n’avons pas vraiment pris le temps de nous reposer… mais nous avons déjà de quoi remplir notre carnet.</p>
      </div>
    </section>
  </section>;
}
