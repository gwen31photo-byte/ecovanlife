import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Calculator, Compass, Camera, Leaf } from "lucide-react";
import { SectionHeading, TextLink } from "@/components/ui";
import { RoadTripGrid } from "@/components/road-trip-grid";
import { Gallery } from "@/components/gallery";
import { Newsletter } from "@/components/newsletter";
import { photographs } from "./photos/catalog";
import { siteUrl } from "@/content/site";
import { freeEbooks } from "@/content/free-ebooks";
import { paidEbooks } from "@/content/ebooks";
import styles from "./home-ebooks.module.css";

const title = "EcoVanLife — Voyages en van, carnets de route et photographies";
const description =
  "Explorez EcoVanLife : carnets de voyage, aventures en van, paysages et photographies pour découvrir le monde autrement.";
const shareImage = {
  url: "/images/social/accueil-ecovanlife.png",
  width: 1200,
  height: 630,
  alt: "Logo EcoVanLife représentant un van rouge devant un paysage de montagnes et de sapins.",
};

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/`,
    type: "website",
    locale: "fr_FR",
    siteName: "EcoVanLife",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: shareImage.url, alt: shareImage.alt }],
  },
};

const featuredPhotoIds = [
  "voyages/Italie/20 avril 2025 - venise - pixel(17).jpg",
  "patrimoine français/Juillet 2026 - St moret sur loing - Pixel(4).JPG",
  "lumière de méditeranée/aout 2024 - falaise leucate - nikkon(3).JPEG",
];
const featuredPhotos = featuredPhotoIds.map((id) => {
  const photo = photographs.find((photo) => photo.id === id);
  if (!photo) throw new Error(`Missing featured photograph: ${id}`);
  return {
    id: photo.id,
    title: photo.title,
    alt: photo.alt,
    src: photo.src,
    thumbnailSrc: photo.thumbnailSrc,
  };
});
const [freeEbook] = freeEbooks;
const [paidEbook] = paidEbooks;

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image
          src="/images/van-hero.jpg"
          alt="Sommets majestueux dans la lumière, invitation au voyage"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">CARNETS DE ROUTE & INSTANTS DE LIBERTÉ</p>
          <h1>
            La route comme maison<span>.</span>
          </h1>
          <p className="hero-tagline">Voyager. Explorer. Vivre autrement.</p>
          <p className="hero-description">
            Des routes à suivre. Des horizons à découvrir.
            <br />
            Et la liberté de prendre son temps.
          </p>
          <Link className="button button-light" href="/voyages">
            Découvrir les voyages
            <ArrowUpRight size={19} />
          </Link>
        </div>
        <div className="hero-bottom">
          <a href="#aventures">
            <ArrowDown size={16} /> L’AVENTURE COMMENCE ICI
          </a>
          <span>PHOTOGRAPHIE D’ILLUSTRATION</span>
        </div>
        <span className="hero-side">PRENDRE LA ROUTE · SE SENTIR VIVANT</span>
      </section>
      <div className="manifesto">
        <p>
          Une route. Un van. <em>Mille façons de s’émerveiller.</em>
        </p>
        <span>VOYAGER MOINS VITE, VIVRE PLUS FORT.</span>
      </div>
      <section className="section" id="aventures">
        <SectionHeading
          eyebrow="LE GOÛT DE L’AILLEURS"
          title="Dernières aventures"
          href="/voyages"
          link="Tous les voyages"
        />
        <RoadTripGrid />
      </section>
      <section className="road-section">
        <div className="road-image">
          <Image
            src="/images/road.jpg"
            alt="Vallée sauvage et montagnes, photographie d’illustration d’un road trip"
            fill
            sizes="(max-width: 800px) 100vw, 55vw"
          />
          <span className="image-caption">
            QUELQUE PART, LOIN DU QUOTIDIEN.
          </span>
        </div>
        <div className="road-copy">
          <p className="eyebrow">VANLIFE & LIBERTÉ</p>
          <h2>
            Sur les routes.
            <br />
            <em>Et nulle part ailleurs.</em>
          </h2>
          <p>
            Changer de décor au réveil. S’arrêter quand la vue est belle.
            Trouver du bonheur dans les petits détours.
          </p>
          <p>
            La vanlife, c’est une autre façon de voyager. Plus libre, plus
            simple, plus proche de la nature.
          </p>
          <TextLink href="/vanlife">Explorer la vie en van</TextLink>
          <div className="road-values">
            <span>
              <Compass />
              L’esprit d’aventure
            </span>
            <span>
              <Leaf />
              Le goût de l’essentiel
            </span>
          </div>
        </div>
      </section>
      <section className="section photo-section">
        <SectionHeading
          eyebrow="S’ARRÊTER. REGARDER. RESSENTIR."
          title="Le voyage, autrement."
          href="/photos"
          link="Toutes les photographies"
        />
        <p className="section-description">
          Ces instants qui ne durent qu’une seconde, et qu’on voudrait garder
          toujours.
        </p>
        <Gallery photos={featuredPhotos} />
        <div className="gallery-footnote">
          <Camera size={15} /> Trois instants, trois regards. Découvrez mes
          photographies au fil des voyages.
        </div>
      </section>
      <section className={`guides-section section ${styles.guidesSection}`}>
        <SectionHeading
          eyebrow="POUR PRÉPARER LA SUITE"
          title="Guides & Ebooks"
          href="/guides"
          link="Découvrir les guides"
        />
        <article className={styles.ebookCard}>
          <EbookImage ebook={freeEbook} />
          <div className={styles.copy}>
            <h3>{freeEbooks.length} ebooks gratuits</h3>
            <p>
              Trois guides illustrés pour traverser les fortes chaleurs, faire
              des choix durables et respecter les lieux où vous faites halte.
            </p>
            <TextLink href="/guides">Découvrir les ebooks gratuits</TextLink>
          </div>
        </article>
      </section>
      <section className={`section ${styles.shopSection}`}>
        <div className={`${styles.ebookCard} ${styles.shopCard}`}>
          <EbookImage ebook={paidEbook} />
          <div className={styles.copy}>
            <h2>{paidEbooks.length} ebooks payants</h2>
            <p>
              Des guides illustrés pour voyager plus sobrement, gérer l’eau,
              produire votre énergie et aménager un camp de base.
            </p>
            <TextLink href="/boutique">Découvrir la boutique</TextLink>
          </div>
        </div>
        <article className={styles.simulators}>
          <span className={styles.simulatorIcon} aria-hidden="true">
            <Calculator size={21} />
          </span>
          <div>
            <h2>7 simulateurs gratuits pour préparer votre voyage</h2>
            <p>
              Électricité, solaire, eau, carburant, chauffage… estimez vos besoins avant de partir.
            </p>
          </div>
          <Link className={styles.simulatorButton} href="/guides">
            Découvrir les 7 simulateurs
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </article>
      </section>
      <Newsletter />
    </>
  );
}

function EbookImage({ ebook }: { ebook: { image: string; alt: string } }) {
  return (
    <Image
      className={styles.cover}
      src={ebook.image}
      alt={ebook.alt}
      width={1152}
      height={864}
      sizes="(max-width: 640px) 82vw, (max-width: 1080px) 30vw, 320px"
    />
  );
}
