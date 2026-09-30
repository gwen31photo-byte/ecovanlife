import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mountain, ArrowRight } from "lucide-react";
import { adventures, guides, navigation, type Adventure } from "@/content/site";
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}
export function AdventureCard({ adventure }: { adventure: Adventure }) {
  return (
    <Link className="adventure-card" href={`/voyages/${adventure.slug}`}>
      <div className="card-image">
        <Image
          src={adventure.image}
          alt={adventure.alt}
          fill
          sizes="(max-width: 700px) 100vw, 33vw"
        />
        <span className="image-label">{adventure.region}</span>
        <span className="card-arrow">
          <ArrowUpRight size={21} />
        </span>
      </div>
      <div className="card-meta">
        {adventure.category}
        <span>·</span>
        {adventure.duration}
        <span>·</span>Exemple
      </div>
      <h3>{adventure.title}</h3>
    </Link>
  );
}
export function AdventureGrid() {
  return (
    <div className="adventure-grid">
      {adventures.map((a) => (
        <AdventureCard key={a.slug} adventure={a} />
      ))}
    </div>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  href,
  link,
}: {
  eyebrow: string;
  title: string;
  href?: string;
  link?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {href && <TextLink href={href}>{link}</TextLink>}
    </div>
  );
}
export function GuideCards() {
  return (
    <div className="guide-grid">
      {guides.map((g, i) => (
        <article className={`guide-card guide-${i}`} key={g.title}>
          <div className="book">
            <Image
              src={g.image}
              alt="Photographie d’illustration pour une couverture de guide fictif"
              fill
              sizes="240px"
            />
            <div>
              <span>ECOVANLIFE — LE GUIDE</span>
              <h3>{g.title}</h3>
              <span>PRENDRE LE TEMPS D’EXPLORER</span>
            </div>
          </div>
          <div className="guide-info">
            <p className="eyebrow">{g.tag} / EBOOK</p>
            <h3>{g.title}</h3>
            <p>{g.subtitle}</p>
            <span className="coming">Bientôt disponible</span>
          </div>
        </article>
      ))}
    </div>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div>
          <Link className="brand" href="/">
            <Mountain size={29} />
            <span>EcoVanLife.</span>
          </Link>
          <p>
            Moins de choses.
            <br />
            Plus de découvertes.
          </p>
        </div>
        <div>
          <p className="eyebrow">EXPLORER</p>
          {navigation.slice(1, 4).map((n) => (
            <Link href={n.href} key={n.href}>
              {n.label}
            </Link>
          ))}
        </div>
        <div>
          <p className="eyebrow">L’AVENTURE CONTINUE</p>
          <Link href="/guides">Guides & Ebooks</Link>
          <Link href="/boutique">La boutique</Link>
          <Link href="/a-propos">À propos</Link>
        </div>
        <div>
          <p className="eyebrow">RESTONS EN ROUTE</p>
          <Link href="/#newsletter">
            La lettre EcoVanLife <ArrowRight size={16} />
          </Link>
          <p className="footer-note">
            Voyages, vanlife & photographie.
            <br />
            Un regard curieux sur le monde.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} EcoVanLife — Photographies et contenus tous droits réservés.</span>
        <div>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
  showDemoNote = true,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  showDemoNote?: boolean;
  className?: string;
}) {
  return (
    <section className={`page-intro${className ? ` ${className}` : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
      {showDemoNote && (
        <span className="demo-note">
          Collection de démonstration — contenus à personnaliser
        </span>
      )}
    </section>
  );
}
