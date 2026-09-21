import Image from "next/image";
import { notFound } from "next/navigation";
import { adventures } from "@/content/site";
import { TextLink } from "@/components/ui";
export function generateStaticParams() {
  return adventures.map((a) => ({ slug: a.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = adventures.find((a) => a.slug === slug);
  return {
    title: a?.title ?? "Voyage introuvable",
    description: a?.description,
    alternates: { canonical: `/voyages/${slug}` },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = adventures.find((a) => a.slug === slug);
  if (!a) notFound();
  return (
    <article>
      <div className="article-hero">
        <Image src={a.image} alt={a.alt} fill priority sizes="100vw" />
        <div>
          <p className="eyebrow">
            {a.region} · {a.duration}
          </p>
          <h1>{a.title}</h1>
        </div>
      </div>
      <div className="article-body">
        <p className="demo-note">
          Récit fictif de démonstration — itinéraire et photographies à
          remplacer.
        </p>
        <p className="lead">{a.description}</p>
        <h2>Le plaisir de prendre son temps</h2>
        <p>
          Ce carnet est un exemple de mise en page pour vos futurs récits. Vous
          pourrez y raconter votre départ, les paysages traversés, les
          rencontres et les petits moments qui donnent toute sa saveur au
          voyage.
        </p>
        <h2>Au fil de la route</h2>
        <ol className="itinerary">
          {a.stops.map((stop, i) => (
            <li key={stop}>
              <span>0{i + 1}</span>
              <div>
                <h3>{stop}</h3>
                <p>
                  Étape d’illustration. Ajoutez ici vos lieux, votre expérience,
                  la durée et les informations pratiques vérifiées.
                </p>
              </div>
            </li>
          ))}
        </ol>
        <h2>Préparer cette aventure</h2>
        <p>
          Avant publication, complétez ce carnet avec la saison conseillée, le
          budget, les conditions d’accès et les règles locales de stationnement.
          Les étapes présentées ne constituent pas un itinéraire vérifié.
        </p>
        <TextLink href="/voyages">Revenir aux voyages</TextLink>
      </div>
    </article>
  );
}
