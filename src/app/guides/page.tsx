import { PageIntro, GuideCards, SectionHeading } from "@/components/ui";
import { Newsletter } from "@/components/newsletter";
import { GuideTools } from "./guide-tools";
export const metadata = {
  title: "Guides & Ebooks",
  description:
    "Six simulateurs EcoVanLife pour l’électricité, le solaire, l’eau, le carburant, le poids et l’heure de retour au camp.",
  alternates: { canonical: "/guides" },
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="GUIDES & EBOOKS"
        title="Calculer avant de partir."
        description="Six simulateurs pour l’électricité, le solaire, l’eau, le carburant, le poids et l’heure de retour au camp. Les ebooks restent en préparation."
        showDemoNote={false}
      />
      <GuideTools />
      <section className="section listing">
        <SectionHeading eyebrow="À EMPORTER" title="Ebooks" />
        <GuideCards />
        <p className="demo-note centered">
          Collection en préparation · pas de téléchargement ni de paiement dans
          cette version.
        </p>
      </section>
      <Newsletter />
    </>
  );
}
