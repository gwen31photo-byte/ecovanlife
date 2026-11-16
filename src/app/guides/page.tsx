import Image from "next/image";
import { PageIntro, SectionHeading } from "@/components/ui";
import { Newsletter } from "@/components/newsletter";
import { freeEbooks } from "@/content/free-ebooks";
import { GuideTools } from "./guide-tools";
export const metadata = {
  title: "Guides & Ebooks",
  description:
    "Six simulateurs EcoVanLife et trois guides gratuits : chaleurs, choix durables et respect des lieux.",
  alternates: { canonical: "/guides" },
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="GUIDES & EBOOKS"
        title="Calculer avant de partir."
        description="Six simulateurs pour l’électricité, le solaire, l’eau, le carburant, le poids et l’heure de retour au camp. Trois guides illustrés sont téléchargeables gratuitement."
        showDemoNote={false}
      />
      <GuideTools />
      <section className="section listing">
        <SectionHeading eyebrow="À EMPORTER" title="Ebooks gratuits" />
        <div className="free-guides">
          {freeEbooks.map((ebook) => (
            <article key={ebook.href}>
              <div className="free-guide-cover">
                <Image
                  src={ebook.image}
                  alt={ebook.alt}
                  fill
                  sizes="(max-width: 800px) 88vw, 30vw"
                />
              </div>
              <p className="eyebrow">EBOOK · GRATUIT</p>
              <h2>{ebook.title}</h2>
              <p>{ebook.description}</p>
              <a className="free-guide-download" href={ebook.href} download={ebook.fileName}>
                Télécharger le PDF
              </a>
            </article>
          ))}
        </div>
        <p className="demo-note centered">
          Trois PDF gratuits, sans inscription. Les guides payants restent sur
          Economade.
        </p>
      </section>
      <Newsletter />
    </>
  );
}
