import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ItineraryMap from "./itinerary-map";
import ManchesterChapter from "./manchester-chapter";
import styles from "../la-grande-boucle-de-l-ouest/page.module.css";

export const metadata: Metadata = {
  title: "Chypre, un voyage inattendu",
  description: "En avril 2026, notre voyage en famille change de destination : deux semaines à Chypre, avec une première escale nocturne à Manchester.",
  alternates: { canonical: "/voyages/chypre-un-voyage-inattendu" },
};

export default function ChyprePage() {
  return <article>
    <header className={styles.hero}>
      <Image src="/images/coast.jpg" alt="Photographie d’illustration temporaire : océan et côte" fill preload sizes="100vw" className={styles.heroImage} />
      <div className={styles.heroContent}>
        <Link href="/voyages" className={styles.backLink}>← Les carnets de route</Link>
        <p className={styles.dateline}>VOYAGE EN FAMILLE · AVRIL 2026</p>
        <h1>Chypre, un voyage inattendu</h1>
        <p className={styles.subtitle}>Un changement de destination, et deux semaines à découvrir une île.</p>
        <div className={styles.prose}>
          <p>En avril 2026, nous sommes partis tous les trois. Pourtant, au départ, ce voyage devait nous emmener en Jordanie, un rêve de mon mari. Notre itinéraire aérien passait par Toulouse, Manchester, puis Chypre, avant de rejoindre la Jordanie.</p>
          <p>En février, le vol entre Chypre et la Jordanie a été annulé, dans le contexte des tensions liées à l’Iran. Plutôt que de tout annuler, nous avons regardé des vidéos et cherché ce qu’il y avait à découvrir à Chypre. Nous avons finalement décidé d’y passer deux semaines, avec une voiture de location et des hôtels. Voilà comment Chypre est devenue notre destination !</p>
        </div>
      </div>
    </header>
    <section className={styles.itinerary} aria-labelledby="itinerary-title">
      <h2 id="itinerary-title">L’itinéraire</h2>
      <ItineraryMap />
    </section>
    <div className={styles.journal}><ManchesterChapter /></div>
  </article>;
}
