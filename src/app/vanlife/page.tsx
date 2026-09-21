import Image from "next/image";
import { PageIntro, AdventureGrid } from "@/components/ui";
export const metadata = {
  title: "Vanlife — vivre et voyager en van",
  alternates: { canonical: "/vanlife" },
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="UNE AUTRE FAÇON DE VOYAGER"
        title="La liberté, au quotidien."
        description="Prendre la route avec l’essentiel. Apprendre à ralentir. Faire une place à l’imprévu."
      />
      <section className="section listing">
        <div className="wide-image">
          <Image
            src="/images/road.jpg"
            alt="Paysage de montagne pour illustrer une aventure en van"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="principles">
          {[
            [
              "01",
              "Préparer son départ",
              "Les futurs articles aborderont le choix du van, l’aménagement et les essentiels à emporter.",
            ],
            [
              "02",
              "Habiter la route",
              "Organisation, cuisine et quotidien : une place pour partager vos conseils tirés de l’expérience.",
            ],
            [
              "03",
              "Voyager avec attention",
              "Une rubrique pour raconter votre façon de respecter les lieux et de découvrir les territoires.",
            ],
          ].map(([n, t, d]) => (
            <article key={n}>
              <span className="eyebrow">{n} / CONSEILS À VENIR</span>
              <h2>{t}</h2>
              <p>{d}</p>
            </article>
          ))}
        </div>
        <h2 className="spaced-title">Des idées pour prendre la route</h2>
        <AdventureGrid />
      </section>
    </>
  );
}
