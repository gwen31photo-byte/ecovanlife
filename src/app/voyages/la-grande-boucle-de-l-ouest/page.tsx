import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ItineraryMap from "./itinerary-map";
import IleOleronChapter from "./ile-oleron-chapter";
import LaRochelleChapter from "./la-rochelle-chapter";
import MeschersChapter from "./meschers-chapter";
import FourasChapter from "./fouras-chapter";
import PuyDuFouChapter from "./puy-du-fou-chapter";
import PontorsonChapter from "./pontorson-chapter";
import PremiersKilometresChapter from "./premiers-kilometres-chapter";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "La grande boucle de l’Ouest",
  description:
    "Notre carnet de road trip en van dans l’Ouest de la France, en juillet 2025. Premiers kilomètres depuis Fonsorbes, une nuit à Sainte-Bazeille et la dune du Pilat.",
  alternates: { canonical: "/voyages/la-grande-boucle-de-l-ouest" },
};

export default function OuestFrancePage() {
  return (
    <article>
      <header className={styles.hero}>
        <Image src="/images/voyages/la-grande-boucle-de-l-ouest/meschers-panorama-falaises-et-cavites.JPG"
          alt="Falaises de Meschers-sur-Gironde, avec leurs cavités et passerelles au-dessus de l’estuaire"
          fill preload sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroContent}>
          <Link href="/voyages" className={styles.backLink}>
            ← Les carnets de route
          </Link>
          <p className={styles.dateline}>ROAD TRIP EN VAN · JUILLET 2025</p>
          <h1>La grande boucle de l’Ouest</h1>
          <p className={styles.subtitle}>Sur les routes de l’Ouest, au rythme du van.</p>
          <div className={styles.prose}>
            <p>
              Le 18 juillet 2025, nous prenons la route depuis Fonsorbes. Cette
              fois, nous partons avec quelques grandes envies en tête : la dune
              du Pilat, La Rochelle, le Puy du Fou, le Mont-Saint-Michel, Caen et
              son Mémorial, Beauval, un château de la Loire et Oradour-sur-Glane.
            </p>
            <p>
              Deux rendez-vous structurent le voyage : nous avons réservé le Puy
              du Fou pour les 24 et 25 juillet et le ZooParc de Beauval pour le
              31 juillet. Entre ces dates, nous n’avons pas préparé chaque journée
              dans le détail. Comme d’habitude, nous comptons beaucoup décider au
              fur et à mesure, au gré de la route et de nos envies.
            </p>
          </div>
        </div>
      </header>
      <section className={styles.itinerary} aria-labelledby="itinerary-title">
        <h2 id="itinerary-title">L’itinéraire</h2>
        <ItineraryMap />
      </section>
      <div className={styles.journal}>
        <PremiersKilometresChapter />
        <IleOleronChapter />
        <LaRochelleChapter />
        <MeschersChapter />
        <FourasChapter />
        <PuyDuFouChapter />
        <PontorsonChapter />
      </div>
    </article>
  );
}
