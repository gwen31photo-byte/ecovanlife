import { AdventureGrid, PageIntro } from "@/components/ui";
export const metadata = {
  title: "Voyages & road trips",
  alternates: { canonical: "/voyages" },
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="LES CARNETS DE ROUTE"
        title="L’ailleurs commence ici."
        description="Des idées d’échappées, des routes à parcourir et de grands espaces à découvrir. À chaque voyage, une nouvelle façon de voir le monde."
      />
      <section className="section listing">
        <AdventureGrid />
      </section>
    </>
  );
}
