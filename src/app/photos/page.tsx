import { PageIntro } from "@/components/ui";
import { PhotoGallery } from "./photo-gallery";
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
        description="Des paysages aux ruelles chargées d'histoire, des lumières fugaces aux horizons lointains. Chaque photographie raconte un instant, une émotion, une rencontre avec le monde."
        showDemoNote={false}
      />
      <section className="section listing">
        <PhotoGallery />
      </section>
    </>
  );
}
