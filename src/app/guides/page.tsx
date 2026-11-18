import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, SectionHeading } from "@/components/ui";
import { Newsletter } from "@/components/newsletter";
import { freeEbooks } from "@/content/free-ebooks";
import { simulators, type SimulatorSlug } from "./simulators";
import styles from "./simulators.module.css";
const illustrationAlts = {
  electricite: "Batterie et tableau électrique dans un van aménagé.",
  solaire: "Panneaux solaires sur le toit d’un van face aux montagnes.",
  eau: "Réservoirs d’eau et tuyaux sous l’évier du van.",
  carburant: "Pistolet de la pompe engagé dans le réservoir du van.",
  poids: "Van aménagé sur une plateforme de pesée.",
  nuit: "Van éclairé au bord d’un lac sous la lune.",
  chauffage: "Chauffage installé au pied du lit dans un van.",
} satisfies Record<SimulatorSlug, string>;

export const metadata = {
  title: "Guides & Ebooks",
  description:
    "Sept simulateurs EcoVanLife et trois guides gratuits : chaleurs, choix durables et respect des lieux.",
  alternates: { canonical: "/guides" },
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="GUIDES & EBOOKS"
        title="Calculer avant de partir."
        description="Sept simulateurs pour l’électricité, le solaire, l’eau, le carburant, le poids, l’heure de retour au camp et le chauffage. Trois guides illustrés sont téléchargeables gratuitement."
        showDemoNote={false}
      />
      <section className={`section ${styles.directory}`} id="simulateurs" aria-labelledby="simulators-title">
        <h2 id="simulators-title">7 simulateurs gratuits</h2>
        <ul className={styles.cards}>
          {(Object.keys(simulators) as SimulatorSlug[]).map((slug) => {
            const { name, anchor, href, description } = simulators[slug];

            return (
              <li key={href} id={anchor}>
                <Link className={styles.card} href={href}>
                  <div className={styles.illustration}>
                    <Image
                      src={`/images/illustrations-simulateurs/${slug}.webp`}
                      alt={illustrationAlts[slug]}
                      fill
                      sizes="(max-width: 540px) 90vw, (max-width: 850px) 42vw, (max-width: 1600px) 28vw, 442px"
                    />
                  </div>
                  <h3>{name}</h3>
                  <ArrowUpRight className={styles.arrow} size={19} aria-hidden="true" />
                  <p>{description}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
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
