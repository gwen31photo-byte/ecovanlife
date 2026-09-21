import Image from "next/image";
import { PageIntro, TextLink } from "@/components/ui";
export const metadata = {
  title: "À propos de l’aventure",
  alternates: { canonical: "/a-propos" },
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="DERRIÈRE ECOVANLIFE"
        title="L’envie d’aller voir plus loin."
        description="Un espace pour partager le voyage, la vie en van et la photographie. Et donner envie, à son tour, de prendre la route."
      />
      <section className="about section listing">
        <div className="about-image">
          <Image
            src="/images/forest.jpg"
            alt="Forêt, photographie de démonstration à remplacer par votre portrait ou votre van"
            fill
            sizes="(max-width: 700px) 100vw, 45vw"
          />
        </div>
        <div>
          <p className="eyebrow">UNE HISTOIRE À ÉCRIRE</p>
          <h2>
            Bonjour, et bienvenue
            <br />
            dans l’aventure.
          </h2>
          <p>
            Ce texte est un emplacement de démonstration pour votre
            présentation. Racontez ici qui vous êtes, votre lien avec le voyage,
            votre van et la photographie.
          </p>
          <p>
            Pourquoi EcoVanLife ? Quel a été votre premier départ ?
            Qu’aimez-vous partager ? Cette page vous appartient : remplacez ces
            paragraphes par votre histoire et cette image par une photographie
            personnelle.
          </p>
          <TextLink href="/voyages">Entrer dans les carnets de route</TextLink>
        </div>
      </section>
    </>
  );
}
