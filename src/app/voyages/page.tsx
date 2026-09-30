import { RoadTripGrid } from "@/components/road-trip-grid";
import { PageIntro } from "@/components/ui";
import styles from "./page.module.css";

export const metadata = {
  title: "Voyages & road trips",
  alternates: { canonical: "/voyages" },
};
export default function Page() {
  return (
    <>
      <PageIntro
        showDemoNote={false}
        className={styles.intro}
        eyebrow="LES CARNETS DE ROUTE"
        title="L’ailleurs commence ici."
        description="Des idées d’échappées, des routes à parcourir et de grands espaces à découvrir. À chaque voyage, une nouvelle façon de voir le monde."
      />
      <section className="section listing">
        <RoadTripGrid />
      </section>
    </>
  );
}
