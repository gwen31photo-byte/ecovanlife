import type { Metadata } from "next";
import { PageIntro } from "@/components/ui";
import { PhotoGallery } from "./photo-gallery";
const title = "Photographies — instants d’évasion";
const description =
  "Découvrez 142 photographies de paysages, de nature, de patrimoine et de voyages, réunies en sept collections dans la galerie EcoVanLife.";
const shareImage = {
  url: "/images/social/photos-entre-roche-et-azur.jpg",
  width: 1200,
  height: 630,
  alt: "Falaises rocheuses bordées de végétation et crique aux eaux bleues sous un ciel dégagé à Leucate.",
};

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/photos" },
  openGraph: {
    title: `${title} | EcoVanLife`,
    description,
    url: "/photos",
    type: "website",
    locale: "fr_FR",
    siteName: "EcoVanLife",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | EcoVanLife`,
    description,
    images: [{ url: shareImage.url, alt: shareImage.alt }],
  },
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
