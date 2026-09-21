import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Compass, Camera, Leaf } from "lucide-react";
import {
  AdventureGrid,
  SectionHeading,
  TextLink,
  GuideCards,
} from "@/components/ui";
import { Gallery } from "@/components/gallery";
import { Newsletter } from "@/components/newsletter";
export const metadata = { alternates: { canonical: "/" } };
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
        <AdventureGrid />
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
        <Gallery compact />
        <div className="gallery-footnote">
          <Camera size={15} /> Un regard sur le monde — galerie de démonstration
        </div>
      </section>
      <section className="guides-section section">
        <SectionHeading
          eyebrow="POUR PRÉPARER LA SUITE"
          title="Guides & Ebooks"
          href="/guides"
          link="Découvrir les guides"
        />
        <GuideCards />
      </section>
      <section className="shop-teaser section">
        <div className="shop-illustration" aria-hidden="true">
          <MountainDrawing />
        </div>
        <div>
          <p className="eyebrow">DES OBJETS QUI ONT DU SENS</p>
          <h2>L’aventure s’emporte.</h2>
          <p>
            Une future sélection d’essentiels pour le voyage et la vie en van.
            <br />
            Pensés pour prendre la route, et la garder longtemps.
          </p>
          <TextLink href="/boutique">Un aperçu de la boutique</TextLink>
          <span className="coming">Ouverture à venir</span>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
function MountainDrawing() {
  return (
    <svg
      viewBox="0 0 380 210"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <circle cx="255" cy="60" r="24" />
      <path d="M20 175 112 42l95 133M72 100l40-58 40 58-23-9-17 15-17-15-23 9M153 175l67-94 80 94M195 116l25-35 29 35-17-6-12 9-11-8M10 182h350M286 175v-61m-23 38 23-38 23 38m-41 12 18-31 18 31M331 175v-40m-15 26 15-26 15 26" />
      <path d="M104 193c75-20 51 24 165 3" />
    </svg>
  );
}
