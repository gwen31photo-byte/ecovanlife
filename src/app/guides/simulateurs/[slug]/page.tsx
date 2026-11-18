import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Electricity, Solar, Water, FuelCost, Weight, Night, Heating } from "../../guide-tools";
import { simulators, type SimulatorSlug } from "../../simulators";
import styles from "../../simulators.module.css";

const tools = {
  electricite: Electricity,
  solaire: Solar,
  eau: Water,
  carburant: FuelCost,
  poids: Weight,
  nuit: Night,
  chauffage: Heating,
} satisfies Record<SimulatorSlug, React.ComponentType>;

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(simulators).map((slug) => ({ slug }));
}

async function getSlug(params: Props["params"]) {
  const { slug } = await params;
  if (!Object.hasOwn(simulators, slug)) notFound();
  return slug as SimulatorSlug;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const simulator = simulators[await getSlug(params)];
  return {
    title: `Simulateur ${simulator.name}`,
    description: simulator.description,
    alternates: { canonical: simulator.href },
  };
}

export default async function SimulatorPage({ params }: Props) {
  const slug = await getSlug(params);
  const Tool = tools[slug];

  return (
    <section className={`section ${styles.detail}`} aria-labelledby="simulator-title">
      <Link className={styles.back} href="/guides#simulateurs">
        <ArrowLeft size={18} aria-hidden="true" />
        Retour aux simulateurs
      </Link>
      <h1 id="simulator-title" className={styles.illustratedTitle}>
        {simulators[slug].name}
        <Image
          className={styles.titleThumbnail}
          src={`/images/illustrations-simulateurs/${slug}.webp`}
          alt=""
          width={960}
          height={540}
          sizes="(max-width: 540px) 92px, 130px"
        />
      </h1>
      <Tool />
      <p className="tools-source">
        Méthode reprise des simulateurs Economade : tables d’ensoleillement France,
        marge batterie × 1,3, prix carburant au 5 novembre 2026.
      </p>
    </section>
  );
}
