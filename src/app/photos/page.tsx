import { PageIntro } from "@/components/ui";
import { Gallery } from "@/components/gallery";
export const metadata = {
  title: "Photographies — instants d’évasion",
  alternates: { canonical: "/photos" },
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="LA BEAUTÉ DES DÉTOURS"
        title="Une lumière. Une émotion."
        description="Des paysages, des détails, des instants suspendus. Cliquez sur une image pour prendre le temps de la regarder."
      />
      <section className="section listing">
        <Gallery />
      </section>
    </>
  );
}
