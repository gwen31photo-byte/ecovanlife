import type { Metadata } from "next";
import Link from "next/link";
import IleOleronChapter from "./ile-oleron-chapter";
import LaRochelleChapter from "./la-rochelle-chapter";
import MeschersChapter from "./meschers-chapter";
import FourasChapter from "./fouras-chapter";
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
    <article className={styles.journal}>
      <header className={styles.introduction}>
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
            du Fou pour les 23 et 24 juillet et le ZooParc de Beauval pour le
            31 juillet. Entre ces dates, nous n’avons pas préparé chaque journée
            dans le détail. Comme d’habitude, nous comptons beaucoup décider au
            fur et à mesure, au gré de la route et de nos envies.
          </p>
        </div>
      </header>
      <PremiersKilometresChapter />
      <IleOleronChapter />
      <LaRochelleChapter />
      <MeschersChapter />
      <FourasChapter />
    </article>
  );
}
