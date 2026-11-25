import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/ui";
import { paidEbooks } from "@/content/ebooks";

const shareImage = {
  url: "/images/social/boutique-ecovanlife.jpg",
  width: 1200,
  height: 630,
  alt: "Logo EcoVanLife sur fond crème et couvertures des guides Voyager sobrement, Gérer chaque goutte, Produire son énergie et Camp de base nomade.",
};

export const metadata: Metadata = {
  title: "La boutique",
  description:
    "Quatre guides illustrés en vente : Voyager sobrement, Gérer chaque goutte, Produire son énergie et Camp de base nomade.",
  alternates: { canonical: "/boutique" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "EcoVanLife",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [{ url: shareImage.url, alt: shareImage.alt }],
  },
};

export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="LA BOUTIQUE ECOVANLIFE"
        title="Les guides à emporter."
        description="Quatre manuels illustrés, déjà en vente : sobriété, eau, énergie et camp de base. La commande et le PDF se règlent sur Economade, qui édite ces guides."
        showDemoNote={false}
      />
      <section className="section listing">
        <div className="products ebooks">
          {paidEbooks.map((ebook) => (
            <article key={ebook.href}>
              <div className="ebook-cover">
                <Image
                  src={ebook.image}
                  alt={ebook.alt}
                  fill
                  sizes="(max-width: 600px) 88vw, (max-width: 1100px) 44vw, 22vw"
                />
              </div>
              <p className="eyebrow">EBOOK · {ebook.price}</p>
              <h2>{ebook.title}</h2>
              <p>{ebook.description}</p>
              <p className="ebook-price">{ebook.price}</p>
              <a className="ebook-buy" href={ebook.href} target="_blank" rel="noopener noreferrer">
                Acheter sur Economade
              </a>
            </article>
          ))}
        </div>
        <p className="demo-note centered">
          EcoVanLife ne prend pas le paiement. Le prix, la facture et le
          téléchargement du PDF sont ceux de la fiche Economade.
        </p>
      </section>
    </>
  );
}
