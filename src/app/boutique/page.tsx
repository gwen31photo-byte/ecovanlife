import { Backpack, Coffee, Map } from "lucide-react";
import { PageIntro } from "@/components/ui";
export const metadata = {
  title: "La boutique — bientôt sur la route",
  alternates: { canonical: "/boutique" },
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="LA BOUTIQUE ECOVANLIFE"
        title="Moins, mais mieux."
        description="Des objets utiles, durables et inspirants pour accompagner vos aventures. Une future collection à imaginer ensemble."
      />
      <section className="section listing">
        <div className="products">
          {[
            {
              Icon: Coffee,
              title: "Les essentiels du bivouac",
              text: "Une pause dehors, un café face à l’horizon.",
            },
            {
              Icon: Backpack,
              title: "Les compagnons de route",
              text: "Des accessoires pour partir avec l’essentiel.",
            },
            {
              Icon: Map,
              title: "Les souvenirs d’ailleurs",
              text: "Tirages photographiques et carnets de voyage.",
            },
          ].map(({ Icon, title, text }) => (
            <article key={title}>
              <div className="product-art">
                <Icon size={90} strokeWidth={0.8} />
              </div>
              <p className="eyebrow">CONCEPT DE COLLECTION</p>
              <h2>{title}</h2>
              <p>{text}</p>
              <span className="coming">Bientôt disponible</span>
            </article>
          ))}
        </div>
        <p className="demo-note centered">
          Produits fictifs de démonstration. Aucune commande ni aucun paiement
          ne sont possibles.
        </p>
      </section>
    </>
  );
}
