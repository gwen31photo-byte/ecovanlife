import { PageIntro, GuideCards } from "@/components/ui";
import { Newsletter } from "@/components/newsletter";
export const metadata = {
  title: "Guides & Ebooks",
  alternates: { canonical: "/guides" },
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="VOTRE PROCHAINE AVENTURE SE PRÉPARE"
        title="Un peu d’inspiration à emporter."
        description="Un espace pour de futurs guides pratiques, itinéraires et ebooks. Les couvertures présentées sont des maquettes, aucun guide n’est encore en vente."
      />
      <section className="section listing">
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
