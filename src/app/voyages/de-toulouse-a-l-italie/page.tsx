import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";
import MaranelloChapter from "./maranello-chapter";
import VeniceChapter from "./venice-chapter";
import SirmioneChapter from "./sirmione-chapter";
import MilanChapter from "./milan-chapter";
import BellagioChapter from "./bellagio-chapter";
import RetourBrianconChapter from "./retour-briancon-chapter";
import BrianconChapter from "./briancon-chapter";
import RetourVerdonChapter from "./retour-verdon-chapter";
import ItineraryMap from "./itinerary-map";
import genesPanorama from "../../../../public/images/voyages/de-toulouse-a-litalie/genes-panorama.jpg";
import genesRuelle from "../../../../public/images/voyages/de-toulouse-a-litalie/genes-ruelle-panificio.jpg";
import genesCathedrale from "../../../../public/images/voyages/de-toulouse-a-litalie/genes-cathedrale.jpg";
import genesInterieur from "../../../../public/images/voyages/de-toulouse-a-litalie/genes-cathedrale-interieur.jpg";
import genesFontaine from "../../../../public/images/voyages/de-toulouse-a-litalie/genes-fontaine.jpg";
import genesGalion from "../../../../public/images/voyages/de-toulouse-a-litalie/genes-galion.jpg";
import genesPoupe from "../../../../public/images/voyages/de-toulouse-a-litalie/genes-galion-poupe.jpg";
import genesProue from "../../../../public/images/voyages/de-toulouse-a-litalie/genes-galion-proue.jpg";

import cinqueArriveeCote from "../../../../public/images/voyages/de-toulouse-a-litalie/cinque-terre-arrivee-cote.jpg";
import cinqueBaieBarque from "../../../../public/images/voyages/de-toulouse-a-litalie/cinque-terre-baie-barque.jpg";
import cinqueBaieNuages from "../../../../public/images/voyages/de-toulouse-a-litalie/cinque-terre-baie-nuages.jpg";
import cinqueBateauFalaise from "../../../../public/images/voyages/de-toulouse-a-litalie/cinque-terre-bateau-falaise.jpg";
import cinqueCappuccino from "../../../../public/images/voyages/de-toulouse-a-litalie/cinque-terre-cappuccino.jpg";
import cinqueCoteNuages from "../../../../public/images/voyages/de-toulouse-a-litalie/cinque-terre-cote-nuages.jpg";
import cinqueEgliseBarques from "../../../../public/images/voyages/de-toulouse-a-litalie/cinque-terre-eglise-barques.jpg";
import cinqueEgliseInterieur from "../../../../public/images/voyages/de-toulouse-a-litalie/cinque-terre-eglise-interieur.jpg";
import cinqueHero from "../../../../public/images/voyages/de-toulouse-a-litalie/cinque-terre-hero.jpg";
import cinqueMonterossoPlage from "../../../../public/images/voyages/de-toulouse-a-litalie/cinque-terre-monterosso-plage.jpg";
import cinquePlageVueHaut from "../../../../public/images/voyages/de-toulouse-a-litalie/cinque-terre-plage-vue-haut.jpg";
import cinqueRochersNoirs from "../../../../public/images/voyages/de-toulouse-a-litalie/cinque-terre-rochers-noirs.jpg";
import cinqueRuelle from "../../../../public/images/voyages/de-toulouse-a-litalie/cinque-terre-ruelle.jpg";
import cinqueStatueRocher from "../../../../public/images/voyages/de-toulouse-a-litalie/cinque-terre-statue-rocher.jpg";
import cinqueVanlifeSoir from "../../../../public/images/voyages/de-toulouse-a-litalie/cinque-terre-vanlife-soir.jpg";
import cinqueVernazzaCielBleu from "../../../../public/images/voyages/de-toulouse-a-litalie/cinque-terre-vernazza-ciel-bleu.jpg";
import cinqueVernazzaEglise from "../../../../public/images/voyages/de-toulouse-a-litalie/cinque-terre-vernazza-eglise.jpg";
import cinqueVernazzaHero from "../../../../public/images/voyages/de-toulouse-a-litalie/cinque-terre-vernazza-hero.jpg";
import cinqueVillagePort from "../../../../public/images/voyages/de-toulouse-a-litalie/cinque-terre-village-port.jpg";

import piseCathedraleTour from "../../../../public/images/voyages/de-toulouse-a-litalie/pise-cathedrale-tour.jpg";
import piseCathedraleVueHaut from "../../../../public/images/voyages/de-toulouse-a-litalie/pise-cathedrale-vue-haut.jpg";
import piseBaptistereInterieur from "../../../../public/images/voyages/de-toulouse-a-litalie/pise-baptistere-interieur.jpg";
import piseCamposantoCloitre from "../../../../public/images/voyages/de-toulouse-a-litalie/pise-camposanto-cloitre.jpg";
import piseCamposantoFresques from "../../../../public/images/voyages/de-toulouse-a-litalie/pise-camposanto-fresques.jpg";
import piseCamposantoMonument from "../../../../public/images/voyages/de-toulouse-a-litalie/pise-camposanto-monument.jpg";
import piseCamposantoGaleries from "../../../../public/images/voyages/de-toulouse-a-litalie/pise-camposanto-galeries.jpg";
import piseMarcheSouvenirs from "../../../../public/images/voyages/de-toulouse-a-litalie/pise-marche-souvenirs.jpg";
import piseBaptistereVueHaut from "../../../../public/images/voyages/de-toulouse-a-litalie/pise-baptistere-vue-haut.jpg";
import pisePiazzaDeiMiracoli from "../../../../public/images/voyages/de-toulouse-a-litalie/pise-piazza-dei-miracoli.jpg";
import piseTourFrontale from "../../../../public/images/voyages/de-toulouse-a-litalie/pise-tour-frontale.jpg";
import piseCathedraleInterieurAutel from "../../../../public/images/voyages/de-toulouse-a-litalie/pise-cathedrale-interieur-autel.jpg";
import piseCathedraleInterieur from "../../../../public/images/voyages/de-toulouse-a-litalie/pise-cathedrale-interieur.jpg";
import piseTourContrePlongee from "../../../../public/images/voyages/de-toulouse-a-litalie/pise-tour-contre-plongee.jpg";
import florenceAireCampingCar from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-aire-camping-car.jpg";

import florencePanoramaDuomo from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-panorama-duomo.jpg";
import florencePremiersPas from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-premiers-pas.jpg";
import florenceRueCentre from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-rue-centre.jpg";
import florenceArnoPremiereSoiree from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-arno-premiere-soiree.jpg";
import florencePalazzoVecchio from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-palazzo-vecchio.jpg";
import florencePiazzaSignoria from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-piazza-signoria.jpg";
import florenceFontaineNeptune from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-fontaine-neptune.jpg";
import florenceRuelle from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-ruelle.jpg";
import florenceDuomoDecouverte from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-duomo-decouverte.jpg";
import florenceDuomoFacade from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-duomo-facade.jpg";
import florenceSoiree from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-soiree.jpg";
import florencePonteVecchioSoir from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-ponte-vecchio-soir.jpg";
import florencePonteVecchioNuit from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-ponte-vecchio-nuit.jpg";
import florenceVanReveil from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-van-reveil.jpg";
import florenceCappuccino from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-cappuccino.jpg";
import florenceRuesSousLaPluie from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-rues-sous-la-pluie.jpg";
import florenceMarche from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-marche.jpg";
import florenceMatinee from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-matinee.jpg";
import florenceEgliseInterieur from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-eglise-interieur.jpg";
import florenceCourSculpture from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-cour-sculpture.jpg";
import florenceBoutiqueItalienne from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-boutique-italienne.jpg";
import florenceFiat500 from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-fiat-500.jpg";
import florenceVueArnoHauteurs from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-vue-arno-hauteurs.jpg";
import florenceMonteeHauteurs from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-montee-hauteurs.jpg";
import florenceHauteurs from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-hauteurs.jpg";
import florencePonteVecchioPanorama from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-ponte-vecchio-panorama.jpg";
import florencePanorama from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-panorama.jpg";
import florenceVanDeuxiemeNuit from "../../../../public/images/voyages/de-toulouse-a-litalie/florence-van-deuxieme-nuit.jpg";
import saintMarinArriveeHauteurs from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-arrivee-hauteurs.jpg";
import saintMarinPremierPanorama from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-premier-panorama.jpg";
import saintMarinPremieresRues from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-premieres-rues.jpg";
import saintMarinRuesBoutiques from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-rues-boutiques.jpg";
import saintMarinInterieurHistorique from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-interieur-historique.jpg";
import saintMarinArchitecture from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-architecture.jpg";
import saintMarinRueFortifications from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-rue-fortifications.jpg";
import saintMarinFortificationsJardin from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-fortifications-jardin.jpg";
import saintMarinArtillerie from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-artillerie.jpg";
import saintMarinPaysageNuages from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-paysage-nuages.jpg";
import saintMarinVueHauteurs from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-vue-hauteurs.jpg";
import saintMarinForteresse from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-forteresse.jpg";
import saintMarinRempartsSoiree from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-remparts-soiree.jpg";
import saintMarinPanoramaMatin from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-panorama-matin.jpg";
import saintMarinArchitecturePaysage from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-architecture-paysage.jpg";
import saintMarinPetitesRues from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-petites-rues.jpg";
import saintMarinCappuccino from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-cappuccino.jpg";
import saintMarinEntreeFortifications from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-entree-fortifications.jpg";
import saintMarinInterieurTour from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-interieur-tour.jpg";
import saintMarinArmures from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-armures.jpg";
import saintMarinPanoramaTour from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-panorama-tour.jpg";
import saintMarinTourRemparts from "../../../../public/images/voyages/de-toulouse-a-litalie/saint-marin-tour-remparts.jpg";
import modeneArriveeAireCampingCar from "../../../../public/images/voyages/de-toulouse-a-litalie/modene-arrivee-aire-camping-car.jpg";
import modeneVanSoiree from "../../../../public/images/voyages/de-toulouse-a-litalie/modene-van-soiree.jpg";

export const metadata: Metadata = {
  title: "De Toulouse à l’Italie",
  description:
    "De Monaco aux Cinque Terre, de Florence à Venise, puis des grands lacs aux Alpes : 15 jours et 14 nuits sur les routes, au rythme de notre van.",
  alternates: { canonical: "/voyages/de-toulouse-a-l-italie" },
};

// Local photographs are detected at build time. Rebuild after adding the originals.
const photoDirectory = "/images/voyages/de-toulouse-a-litalie";

function JournalPhoto({
  file, alt, caption, format = "landscape", sizes = "(max-width: 700px) 88vw, 80vw",
}: {
  file: string;
  alt: string;
  caption: string;
  format?: "landscape" | "panorama" | "portrait";
  sizes?: string;
}) {
  const src = `${photoDirectory}/${file}`;
  const available = existsSync(path.join(process.cwd(), "public", src));

  return (
    <figure className={styles.photograph}>
      <div className={`${styles.photoFrame} ${styles[format]}`}>
        {available ? (
          <Image src={src} alt={alt} fill sizes={sizes} />
        ) : (
          <div className={styles.photoPending}>
            <span>Photographie à venir</span>
            <span>{caption}</span>
          </div>
        )}
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function CinqueTerrePhoto({
  src, alt, className, sizes = "(max-width: 700px) 88vw, (max-width: 1412px) 85vw, 1200px",
}: {
  src: typeof cinqueHero;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure className={`${styles.photograph}${className ? ` ${className}` : ""}`}>
      <Image src={src} alt={alt} sizes={sizes} />
    </figure>
  );
}

export default function ToulouseItalyPage() {
  return (
    <article>
      <section className={styles.hero} aria-labelledby="trip-title">
        <Image
          src="/images/voyages/de-toulouse-a-litalie/cinque-terre-arrivee-cote.jpg"
          alt="Maisons colorées des Cinque Terre sur une falaise au-dessus de la mer"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.content}>
          <p className={`eyebrow ${styles.eyebrow}`}>
            ROAD TRIP EN VAN · AVRIL 2025
          </p>
          <h1 id="trip-title">De Toulouse à l’Italie</h1>
          <p className={styles.subtitle}>
            15 jours · 14 nuits · France · Monaco · Italie · Saint-Marin
          </p>
          <p className={styles.introduction}>
            De Monaco aux Cinque Terre, de Florence à Venise, puis des grands
            lacs aux Alpes : 15 jours et 14 nuits sur les routes, au rythme de
            notre van.
          </p>
        </div>
      </section>
      <section className={styles.itinerary} aria-labelledby="itinerary-title">
        <h2 id="itinerary-title">L’itinéraire</h2>
        <ItineraryMap />
      </section>
      <div className={styles.journal}>
        <section className={styles.chapter} aria-labelledby="bargemon-title">
          <header className={styles.chapterHeader}>
            <p className={styles.chapterNumber}>ÉTAPE 01</p>
            <div>
              <p className={styles.dateline}>12 AVRIL 2025 · JOUR 1</p>
              <h2 id="bargemon-title">Prendre la route</h2>
              <p className={styles.route}>Fonsorbes → Bargemon</p>
            </div>
          </header>

          <JournalPhoto file="bargemon-van.jpg" alt="Notre van rouge et blanc à Bargemon" caption="Bargemon · Première soirée sur la route" />

          <div className={styles.storyWithNote}>
            <div className={styles.prose}>
              <p>Samedi matin, le van est chargé et nous quittons Fonsorbes direction l’Italie. Comme souvent lorsque nous partons, nous avons quelques grandes étapes en tête, mais très peu de choses sont réellement planifiées. Pas de réservation pour la nuit, pas d’itinéraire figé : nous avançons à notre rythme et gardons la liberté de nous arrêter lorsqu’un endroit nous plaît.</p>
              <p>Nous essayons également d’éviter autant que possible les autoroutes payantes. Pour cette première journée, notre seul objectif est donc de nous rapprocher suffisamment de Monaco pour pouvoir profiter de la principauté le lendemain.</p>
              <p>En fin de journée, nous cherchons simplement où passer la nuit. Avec Park4night, nous trouvons une aire gratuite près de Bargemon : calme, sympathique et parfaite pour notre première soirée sur la route.</p>
            </div>
            <aside className={styles.nightNote} aria-label="Notre nuit à Bargemon">
              <p className={styles.dateline}>NOTRE NUIT</p>
              <h3>Aire gratuite de Bargemon</h3>
              <p>Trouvée avec Park4night · calme et proche du village</p>
            </aside>
          </div>

          <div className={styles.bargemonPair}>
            <JournalPhoto file="bargemon-collines.jpg" alt="Vue sur les collines depuis Bargemon" caption="Les collines de Bargemon" sizes="(max-width: 700px) 88vw, 50vw" />
            <div className={styles.morning}>
              <JournalPhoto file="bargemon-cafe-croissant.jpg" alt="Café et croissant à Bargemon avant de reprendre la route" caption="Un café, un croissant, puis la route" sizes="(max-width: 700px) 88vw, 30vw" />
              <div className={styles.prose}>
                <p>Le lendemain matin, petit passage par le village pour boire un café et manger un croissant avant de repartir. Nous ne nous attardons pas beaucoup cette fois-ci : Monaco nous attend.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.chapter} aria-labelledby="monaco-title">
          <header className={styles.chapterHeader}>
            <p className={styles.chapterNumber}>ÉTAPE 02</p>
            <div>
              <p className={styles.dateline}>13 AVRIL 2025 · JOUR 2</p>
              <h2 id="monaco-title">Monaco, avant de passer la frontière</h2>
              <p className={styles.route}>Bargemon → Monaco → Latte</p>
            </div>
          </header>

          <JournalPhoto file="monaco-panorama.jpg" alt="Vue panoramique sur Monaco et son port" caption="Monaco · La ville et le port" format="panorama" />

          <div className={styles.monacoWalk}>
            <div className={styles.prose}>
              <p>Après notre café à Bargemon, nous reprenons la route direction Monaco. Nous n’avions pas prévu un programme très précis pour la journée : simplement découvrir la ville avant de poursuivre vers l’Italie.</p>
              <p>Nous commençons par le port et ses impressionnants yachts, puis nous prenons de la hauteur jusqu’au Palais princier. Monaco se découvre aussi en marchant : les rues, les bâtiments, les points de vue sur le port et, forcément, quelques portions du célèbre circuit.</p>
              <p>À midi, pause toute simple avec une salade au bord du port avant de poursuivre vers le Musée océanographique.</p>
            </div>
            <JournalPhoto file="monaco-port-vertical.jpg" alt="Vue verticale sur le port de Monaco et ses yachts" caption="Prendre de la hauteur sur le port" format="portrait" sizes="(max-width: 700px) 88vw, 30vw" />
          </div>

          <div className={styles.monacoPair}>
            <JournalPhoto file="monaco-palais-princier.jpg" alt="Le Palais princier de Monaco" caption="Le Palais princier" sizes="(max-width: 700px) 88vw, 45vw" />
            <JournalPhoto file="monaco-circuit.jpg" alt="Une portion du célèbre circuit de Monaco" caption="Sur le tracé du circuit" sizes="(max-width: 700px) 88vw, 35vw" />
          </div>

          <div className={styles.aquarium}>
            <JournalPhoto file="monaco-aquarium-raie.jpg" alt="Une raie dans l’aquarium du Musée océanographique de Monaco" caption="Au Musée océanographique" sizes="(max-width: 700px) 88vw, 45vw" />
            <div className={styles.prose}>
              <p>L’après-midi, nous visitons l’aquarium. Une visite particulièrement impressionnante et l’un de nos beaux souvenirs de cette journée.</p>
            </div>
          </div>

          <div className={styles.arrival}>
            <aside className={styles.nightNote} aria-label="Notre nuit à Latte">
              <p className={styles.dateline}>LA NUIT À LATTE</p>
              <h3>Camping de Latte</h3>
              <div className={styles.prose}>
                <p>Comme souvent en van, nous préférons trouver notre endroit pour la nuit avant qu’il ne fasse sombre. Nous reprenons donc la route et passons la frontière italienne. La journée a été longue et la fatigue commence à se faire sentir. Nous arrivons finalement au camping de Latte alors qu’il fait déjà nuit. Cette fois, pas de photo souvenir : juste l’envie de poser le van, prendre une douche et dormir. Demain, la route continue vers Gênes.</p>
              </div>
            </aside>
          </div>
        </section>
        <section className={`${styles.chapter} ${styles.genes}`} aria-labelledby="genes-title">
          <header className={styles.chapterHeader}>
            <p className={styles.chapterNumber}>ÉTAPE 03</p>
            <div>
              <p className={styles.dateline}>GÊNES · ITALIE</p>
              <h2 id="genes-title">Gênes — entre ruelles, palais et vieux gréements</h2>
            </div>
          </header>

          <div className={`${styles.prose} ${styles.genesIntroduction}`}>
            <p>Trouver une place pour le van à Gênes n’a pas été une mince affaire. Nous avons finalement réussi à nous garer assez loin du centre et avons poursuivi la découverte à pied.</p>
            <p>La météo était grise, parfois pluvieuse, mais elle ne nous a pas empêchés de parcourir la ville pendant des heures. Au fil de notre marche, nous découvrons les grandes places, les façades monumentales et les églises, avant de nous perdre dans les ruelles étroites du centre historique.</p>
          </div>

          <figure className={`${styles.photograph} ${styles.genesPanorama}`}>
            <Image src={genesPanorama} alt="Vue d’ensemble de Gênes sous un ciel gris" sizes="(max-width: 700px) 88vw, 80vw" />
          </figure>

          <div className={styles.genesStreets}>
            <figure className={`${styles.photograph} ${styles.genesAlley}`}>
              <Image src={genesRuelle} alt="Une ruelle étroite de Gênes et son enseigne Panificio" sizes="(max-width: 700px) 88vw, 30vw" />
            </figure>
            <figure className={`${styles.photograph} ${styles.genesCathedral}`}>
              <Image src={genesCathedrale} alt="La façade et le clocher de la cathédrale de Gênes" sizes="(max-width: 700px) 88vw, 45vw" />
            </figure>
            <figure className={`${styles.photograph} ${styles.genesInterior}`}>
              <Image src={genesInterieur} alt="Les colonnes et les décors à l’intérieur de la cathédrale de Gênes" sizes="(max-width: 700px) 88vw, 25vw" />
            </figure>
            <figure className={`${styles.photograph} ${styles.genesFountain}`}>
              <Image src={genesFontaine} alt="Une grande fontaine devant les façades monumentales de Gênes" sizes="(max-width: 700px) 88vw, 45vw" />
            </figure>
          </div>

          <div className={`${styles.prose} ${styles.genesPortText}`}>
            <p>Nous rejoignons ensuite le port, où une découverte inattendue nous attend : un magnifique navire ancien en bois, richement décoré. Avec ses hauts mâts, ses cordages et ses sculptures dorées, difficile de passer à côté.</p>
          </div>
          <div className={styles.genesPort}>
            <figure className={styles.photograph}>
              <Image src={genesGalion} alt="Le galion en bois et ses hauts mâts sur le port de Gênes" sizes="(max-width: 700px) 88vw, 50vw" />
              <figcaption>Sur le port de Gênes</figcaption>
            </figure>
            <div className={styles.genesShipDetails}>
              <figure className={styles.photograph}>
                <Image src={genesPoupe} alt="Les sculptures et les ornements dorés de la poupe du galion" sizes="(max-width: 700px) 88vw, 25vw" />
              </figure>
              <figure className={styles.photograph}>
                <Image src={genesProue} alt="La proue sculptée du galion et ses cordages" sizes="(max-width: 700px) 88vw, 25vw" />
              </figure>
            </div>
          </div>

          <div className={`${styles.prose} ${styles.genesDeparture}`}>
            <p>Après cette longue journée et beaucoup de kilomètres parcourus à pied, nous retrouvons enfin le van et reprenons la route en direction des Cinque Terre.</p>
            <p>La recherche d’un endroit où passer la nuit s’avère une nouvelle fois un peu compliquée. La nuit tombe rapidement et nous finissons par trouver un parking dans les environs de La Spezia. Pas de photo cette fois-ci : après cette journée bien remplie, l’essentiel était simplement d’avoir trouvé où dormir.</p>
          </div>
        </section>
        <section className={`${styles.chapter} ${styles.cinqueTerre}`} aria-labelledby="cinque-terre-title">
          <header className={styles.chapterHeader}>
            <p className={styles.chapterNumber}>ÉTAPE 04</p>
            <div>
              <p className={styles.dateline}>CINQUE TERRE · ITALIE</p>
              <h2 id="cinque-terre-title">Les Cinque Terre, de village en village</h2>
              <p className={styles.route}>La Spezia → Riomaggiore → Manarola → Corniglia → Vernazza → Monterosso</p>
            </div>
          </header>

          <CinqueTerrePhoto src={cinqueHero} alt="Façades colorées au-dessus d’un petit port des Cinque Terre, sous les collines voilées de nuages" />

          <div className={`${styles.prose} ${styles.cinqueIntroduction}`}>
            <p>À La Spezia, nous garons le van pas très loin de la gare. Pour cette journée aux Cinque Terre, nous le laissons sur place : c’est en train que nous allons rejoindre les villages, l’un après l’autre.</p>
            <h3>Premiers arrêts : Riomaggiore et Manarola</h3>
            <p>Nous commençons par Riomaggiore, puis reprenons le train pour Manarola. La journée se dessine ainsi, entre les villages et les trajets qui les relient. Pour une fois, le van nous attend et nous découvrons la côte autrement.</p>
          </div>
          <div className={styles.cinqueOpeningPair}>
            <CinqueTerrePhoto src={cinqueVillagePort} alt="Maisons aux couleurs pastel serrées autour d’un petit port et de ses barques" sizes="(max-width: 700px) 88vw, 48vw" />
            <CinqueTerrePhoto src={cinqueArriveeCote} alt="Village accroché à la falaise au-dessus des rochers et de la mer" sizes="(max-width: 700px) 88vw, 32vw" />
          </div>
          <div className={styles.cinqueCoastPair}>
            <CinqueTerrePhoto src={cinqueCoteNuages} alt="La côte escarpée des Cinque Terre sous un ciel chargé de nuages" sizes="(max-width: 700px) 88vw, 40vw" />
            <CinqueTerrePhoto src={cinqueBaieNuages} alt="Un village au creux de la baie, au pied des collines couvertes de nuages" sizes="(max-width: 700px) 88vw, 40vw" />
          </div>

          <div className={styles.cinqueCorniglia}>
            <div className={styles.prose}>
              <h3>Corniglia, un peu plus haut</h3>
              <p>Le train nous mène ensuite à Corniglia. Nous prenons la navette en bus pour monter jusqu’au village. Après la visite, nous redescendons à pied pour retrouver le train et poursuivre vers Vernazza.</p>
            </div>
            <CinqueTerrePhoto src={cinqueCappuccino} alt="Un cappuccino et sa mousse en forme de cœur, posé sur une soucoupe" className={styles.cinqueVignette} sizes="(max-width: 700px) 160px, 200px" />
          </div>

          <section className={styles.cinqueVernazza} aria-labelledby="cinque-vernazza-title">
            <div className={`${styles.prose} ${styles.cinqueSectionIntro}`}>
              <h3 id="cinque-vernazza-title">Vernazza, au bord de l’eau</h3>
              <p>Après Corniglia, nous arrivons à Vernazza, quatrième arrêt de notre parcours. Voici quelques images de cette partie de la journée, entre les façades colorées, l’église et le petit port.</p>
            </div>
            <CinqueTerrePhoto src={cinqueVernazzaHero} alt="Le port de Vernazza bordé de façades colorées, avec le clocher de l’église à gauche" />
            <div className={styles.cinqueVernazzaDetails}>
              <CinqueTerrePhoto src={cinqueEgliseBarques} alt="Des barques sur le rivage devant l’église et les maisons de Vernazza" sizes="(max-width: 700px) 88vw, 28vw" />
              <div className={styles.cinquePhotoStack}>
                <CinqueTerrePhoto src={cinqueVernazzaCielBleu} alt="Les façades de Vernazza et son clocher sous une éclaircie de ciel bleu" sizes="(max-width: 700px) 88vw, 45vw" />
                <CinqueTerrePhoto src={cinqueVernazzaEglise} alt="L’église de Vernazza au bord de l’eau, avec les collines en arrière-plan" sizes="(max-width: 700px) 88vw, 45vw" />
              </div>
            </div>
            <div className={styles.cinquePortraitPair}>
              <CinqueTerrePhoto src={cinqueRuelle} alt="Une ruelle étroite entre des murs de pierre et des volets verts" sizes="(max-width: 700px) 88vw, 30vw" />
              <CinqueTerrePhoto src={cinqueEgliseInterieur} alt="L’intérieur d’une église, avec ses colonnes de pierre, ses arches et ses bancs en bois" sizes="(max-width: 700px) 88vw, 30vw" />
            </div>
            <div className={styles.cinqueCoastPair}>
              <CinqueTerrePhoto src={cinqueBaieBarque} alt="Une barque bleue au bord de la baie, face aux collines en terrasses" sizes="(max-width: 700px) 88vw, 40vw" />
              <CinqueTerrePhoto src={cinqueBateauFalaise} alt="Un bateau près de la falaise, au-dessus d’une mer agitée" sizes="(max-width: 700px) 88vw, 40vw" />
            </div>
          </section>

          <section className={styles.cinqueMonterosso} aria-labelledby="cinque-monterosso-title">
            <div className={`${styles.prose} ${styles.cinqueSectionIntro}`}>
              <h3 id="cinque-monterosso-title">Monterosso, le dernier arrêt</h3>
              <p>Nous reprenons le train pour Monterosso. C’est le dernier des cinq villages de notre journée. Le parcours se termine ici, au bord de la plage, avant de retrouver La Spezia et le van.</p>
            </div>
            <CinqueTerrePhoto src={cinqueMonterossoPlage} alt="La plage de Monterosso et son grand rocher, entre les vagues et les maisons du bord de mer" />
            <div className={styles.cinqueMonterossoDetails}>
              <CinqueTerrePhoto src={cinquePlageVueHaut} alt="Vue en hauteur sur la plage, les maisons et les collines de Monterosso" sizes="(max-width: 700px) 88vw, 45vw" />
              <div className={styles.cinquePhotoStack}>
                <CinqueTerrePhoto src={cinqueRochersNoirs} alt="Des rochers sombres se dressent dans la mer, entourés d’écume" sizes="(max-width: 700px) 88vw, 28vw" />
                <CinqueTerrePhoto src={cinqueStatueRocher} alt="Une statue monumentale sculptée contre le rocher, près d’une terrasse en pierre" sizes="(max-width: 700px) 88vw, 28vw" />
              </div>
            </div>
          </section>

          <section className={styles.cinqueEvening} aria-labelledby="cinque-evening-title">
            <CinqueTerrePhoto src={cinqueVanlifeSoir} alt="La table et les chaises installées près de notre van rouge et blanc à la nuit tombée" sizes="(max-width: 700px) 88vw, 36vw" />
            <div className={styles.prose}>
              <p className={styles.dateline}>RETOUR À LA SPEZIA</p>
              <h3 id="cinque-evening-title">Retrouver le van pour la soirée</h3>
              <p>Depuis Monterosso, nous revenons à La Spezia en train. La visite des Cinque Terre terminée, nous allons manger, puis nous passons la nuit sur une aire de camping-car à La Spezia.</p>
              <aside className={styles.nightNote} aria-label="Notre nuit à La Spezia">
                <p className={styles.dateline}>NOTRE NUIT</p>
                <p>Nous trouvons l’aire très bien équipée, avec notamment des douches et tout ce qu’il faut pour passer une bonne soirée et une bonne nuit après cette journée.</p>
              </aside>
            </div>
          </section>
        </section>
        <section className={`${styles.chapter} ${styles.pise}`} aria-labelledby="pise-title">
          <header className={styles.chapterHeader}>
            <p className={styles.chapterNumber}>ÉTAPE 05</p>
            <div>
              <p className={styles.dateline}>16 AVRIL 2025</p>
              <h2 id="pise-title">Pise, une halte sur la route de Florence</h2>
              <p className={styles.route}>La Spezia → Pise → Florence</p>
            </div>
          </header>

          <div className={styles.piseArrival}>
            <div className={styles.prose}>
              <p className={styles.dateline}>DE LA SPEZIA À PISE</p>
              <p>Nous quittons l’aire de camping-car de La Spezia dans la matinée du 16 avril. Direction Pise, où nous arrivons aux alentours de 10 h. Nous garons le van sur le grand parking utilisé notamment par les cars de touristes.</p>
              <p>En quittant le parking, nous passons devant les petites boutiques et le marché aux souvenirs. Au bout de ce passage, nous rejoignons la Piazza dei Miracoli.</p>
            </div>
            <figure className={styles.photograph}><Image src={piseMarcheSouvenirs} alt="Les boutiques de souvenirs alignées le long des remparts, sur le passage vers la Piazza dei Miracoli" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 34vw, 420px" /></figure>
          </div>

          <section className={styles.piseVisit} aria-labelledby="pise-piazza-title">
            <div className={`${styles.prose} ${styles.piseIntro}`}>
              <p className={styles.dateline}>LA VISITE COMMENCE</p>
              <h3 id="pise-piazza-title">Sur la Piazza dei Miracoli</h3>
              <p>Le Baptistère, la cathédrale et la tour se dévoilent devant nous. Notre halte à Pise se concentrera sur cet ensemble, avec la visite du Baptistère, de la cathédrale et du Camposanto.</p>
            </div>
            <figure className={`${styles.photograph} ${styles.pisePiazzaMain}`}><Image src={pisePiazzaDeiMiracoli} alt="Le Baptistère au premier plan, la cathédrale et la tour au-delà des pelouses de la Piazza dei Miracoli" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 76vw, 1050px" /></figure>
            <div className={styles.pisePiazzaDetail}><figure className={styles.photograph}><Image src={piseCathedraleTour} alt="La façade de la cathédrale de Pise et la tour derrière elle, au bord de la pelouse" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 48vw, 650px" /></figure></div>
          </section>

          <section className={styles.piseVisit} aria-labelledby="pise-baptistere-title">
            <div className={`${styles.prose} ${styles.piseIntro}`}>
              <h3 id="pise-baptistere-title">À l’intérieur du Baptistère</h3>
              <p>Nous entrons d’abord dans le Baptistère. Les photographies en gardent deux regards : les détails de l’intérieur, puis une vue d’en haut sur tout le volume du bâtiment.</p>
            </div>
            <div className={styles.piseBaptistery}>
              <figure className={styles.photograph}><Image src={piseBaptistereInterieur} alt="La chaire sculptée et les décors de marbre à l’intérieur du Baptistère" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 45vw, 620px" /></figure>
              <figure className={styles.photograph}><Image src={piseBaptistereVueHaut} alt="Vue plongeante sur les fonts baptismaux et les arcades à l’intérieur du Baptistère" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 28vw, 380px" /></figure>
            </div>
          </section>

          <section className={styles.piseVisit} aria-labelledby="pise-cathedrale-title">
            <div className={`${styles.prose} ${styles.piseIntro}`}>
              <h3 id="pise-cathedrale-title">De la façade à la nef</h3>
              <p>La visite se poursuit dans la cathédrale. Après la façade, place aux colonnes, au plafond et aux décors de l’intérieur : quelques images pour garder le souvenir de cette partie de la matinée.</p>
            </div>
            <div className={styles.piseCathedral}>
              <div className={styles.piseCathedralMain}><figure className={styles.photograph}><Image src={piseCathedraleInterieur} alt="La nef de la cathédrale, ses colonnes et son plafond à caissons dorés" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 43vw, 590px" /></figure></div>
              <div className={styles.piseCathedralSide}>
                <figure className={styles.photograph}><Image src={piseCathedraleVueHaut} alt="La façade de la cathédrale vue depuis une ouverture encadrée de colonnes" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 28vw, 380px" /></figure>
                <figure className={styles.photograph}><Image src={piseCathedraleInterieurAutel} alt="Un autel richement décoré sous les arcs et les colonnes de la cathédrale" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 23vw, 320px" /></figure>
              </div>
            </div>
          </section>

          <section className={styles.piseVisit} aria-labelledby="pise-camposanto-title">
            <div className={`${styles.prose} ${styles.piseIntro}`}>
              <h3 id="pise-camposanto-title">Au fil des galeries du Camposanto</h3>
              <p>Nous découvrons ensuite le Camposanto. Nous parcourons ses longues galeries, entre fresques et monuments, avant de ressortir sur la Piazza dei Miracoli et de retrouver la tour.</p>
            </div>
            <figure className={`${styles.photograph} ${styles.piseCloisterMain}`}><Image src={piseCamposantoCloitre} alt="La pelouse du cloître du Camposanto bordée de longues galeries aux arcades de marbre" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 72vw, 1000px" /></figure>
            <div className={styles.piseCamposantoDetails}>
              <figure className={styles.photograph}><Image src={piseCamposantoFresques} alt="Les fresques sur les murs d’une galerie du Camposanto, au-dessus du sol de pierre" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 43vw, 590px" /></figure>
              <figure className={styles.photograph}><Image src={piseCamposantoMonument} alt="Un monument sculpté en marbre blanc devant les peintures murales du Camposanto" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 29vw, 400px" /></figure>
            </div>
            <div className={styles.piseCamposantoGallery}><figure className={styles.photograph}><Image src={piseCamposantoGaleries} alt="Les galeries du Camposanto et leurs fenêtres ouvragées autour de la cour" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 55vw, 760px" /></figure></div>
          </section>

          <section className={styles.piseVisit} aria-labelledby="pise-tour-title">
            <div className={`${styles.prose} ${styles.piseIntro}`}>
                  <h3 id="pise-tour-title">La tour, vue d’en bas</h3>
                  <p>Nous ne visitons pas l’intérieur de la tour et ne montons pas à son sommet. Il y a beaucoup de monde, et nous découvrons qu’il aurait fallu réserver à l’avance. Nous la gardons donc en souvenir depuis l’extérieur, sous deux angles différents.</p>
                </div>
            <div className={styles.piseTower}>
              <figure className={styles.photograph}><Image src={piseTourFrontale} alt="La tour de Pise vue de face, avec ses étages de colonnes et les visiteurs à son pied" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 28vw, 390px" /></figure>
              <figure className={styles.photograph}><Image src={piseTourContrePlongee} alt="La tour de Pise photographiée en contre-plongée, ses arcades se détachant sur le ciel" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 33vw, 455px" /></figure>
            </div>
          </section>

          <section className={styles.piseDeparture} aria-labelledby="pise-florence-title">
            <div className={styles.piseFlorence}>
              <div className={styles.prose}>
              <p className={styles.dateline}>REPRENDRE LA ROUTE</p>
              <h3 id="pise-florence-title">Vers Florence</h3>
              <p>Nous n’explorons pas le reste de Pise. Laisser le van avec toutes nos affaires sur ce grand parking touristique nous inquiète un peu, et nous préférons ne pas nous attarder davantage. Après la visite, nous retrouvons le van et prenons la direction de Florence.</p>
            
                <p className={styles.dateline}>VERS 17 H · FLORENCE</p>
                <p>Nous arrivons sur l’aire de camping-car de Florence, tout près du centre-ville. Une fois installés, nous partons à pied pour une première promenade et passons le reste de la soirée dans la ville. La suite du carnet se poursuivra ici.</p>
              
              </div>
              <figure className={styles.photograph}><Image src={florenceAireCampingCar} alt="Les emplacements et les camping-cars sur l’aire de Florence, le long d’une allée pavée" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 32vw, 400px" /></figure>
            </div>
          </section>
        </section>
        <section className={`${styles.chapter} ${styles.florence}`} aria-labelledby="florence-title">
          <header className={styles.chapterHeader}>
            <p className={styles.chapterNumber}>ÉTAPE 06</p>
            <div>
              <p className={styles.dateline}>16–17 AVRIL 2025</p>
              <h2 id="florence-title">Florence, au fil des rues</h2>
              <p className={styles.route}>Pise → Florence</p>
            </div>
          </header>
          <figure className={styles.photograph}>
              <Image src={florencePanoramaDuomo} alt="Florence vue depuis les hauteurs, avec la coupole du Duomo au-dessus des toits sous un ciel nuageux" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 85vw, 1200px" />
            </figure>

          <section className={styles.florenceSequence} aria-labelledby="florence-first-evening-title">
            <div className={`${styles.prose} ${styles.florenceIntro}`}>
              <p className={styles.dateline}>16 AVRIL · PREMIERS PAS DANS FLORENCE</p>
              <h3 id="florence-first-evening-title">Marcher, simplement</h3>
              <p>Nous arrivons à Florence en fin d’après-midi après notre halte à Pise. Une fois le van installé sur l’aire de camping-car, tout près du centre, nous n’avons pas vraiment de programme : nous partons simplement marcher et découvrir la ville.</p>
            </div>
            <div className={styles.florenceFirstStreets}>
              <figure className={styles.photograph}>
              <Image src={florencePremiersPas} alt="Une statue au bord d’une rue arborée lors de nos premiers pas dans Florence" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 28vw, 380px" />
            </figure>
              <figure className={styles.photograph}>
              <Image src={florenceRueCentre} alt="Une rue de Florence entre une façade de pierre et les maisons du centre" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 32vw, 440px" />
            </figure>
            </div>
            <div className={styles.florenceRiver}>
              <figure className={styles.photograph}>
              <Image src={florenceArnoPremiereSoiree} alt="L’Arno bordé de façades, avec un pont au loin sous le ciel de fin de journée" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 72vw, 1000px" />
            </figure>
            </div>
            <div className={`${styles.prose} ${styles.florenceTextPause}`}>
              <p>Au fil des rues, nous rejoignons l’Arno puis le cœur historique. Places, palais, ruelles… Florence se dévoile progressivement devant nous. Nous découvrons notamment le Duomo avant de poursuivre notre promenade jusqu’au Ponte Vecchio.</p>
            </div>
            <div className={styles.florenceSignoria}>
              <figure className={styles.photograph}>
              <Image src={florencePalazzoVecchio} alt="La façade et la haute tour du Palazzo Vecchio sur la Piazza della Signoria" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 32vw, 450px" />
            </figure>
              <div className={styles.florenceSignoriaDetails}>
                <figure className={styles.photograph}>
              <Image src={florencePiazzaSignoria} alt="Les statues sous les grandes arcades de la loggia, sur la Piazza della Signoria" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 23vw, 320px" />
            </figure>
                <figure className={styles.photograph}>
              <Image src={florenceFontaineNeptune} alt="La fontaine de Neptune et ses sculptures devant les pierres du Palazzo Vecchio" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 38vw, 520px" />
            </figure>
              </div>
            </div>
            <div className={styles.florenceDuomoApproach}>
              <figure className={styles.photograph}>
              <Image src={florenceRuelle} alt="Une ruelle étroite bordée de façades colorées et de devantures à Florence" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 26vw, 360px" />
            </figure>
              <figure className={styles.photograph}>
              <Image src={florenceDuomoDecouverte} alt="La coupole du Duomo et les marbres de la cathédrale vus depuis la rue" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 35vw, 480px" />
            </figure>
            </div>
            <div className={styles.florenceFacade}>
              <figure className={styles.photograph}>
              <Image src={florenceDuomoFacade} alt="La façade ouvragée du Duomo et son campanile, vus depuis la place" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 64vw, 900px" />
            </figure>
            </div>
            <div className={styles.florenceDusk}>
              <figure className={styles.photograph}>
              <Image src={florenceSoiree} alt="Une rue entre les palais de Florence pendant notre promenade du soir" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 28vw, 380px" />
            </figure>
              <figure className={styles.photograph}>
              <Image src={florencePonteVecchioSoir} alt="Le Ponte Vecchio et ses maisons au-dessus de l’Arno dans la lumière du soir" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 46vw, 650px" />
            </figure>
            </div>
            <div className={styles.florenceNight}>
              <div className={styles.prose}>
                <p>La lumière baisse peu à peu et nous continuons à marcher dans Florence jusqu’à la nuit. Nous rentrerons au van vers 22 h, avec déjà une idée pour le lendemain : prendre de la hauteur pour découvrir la ville autrement.</p>
              </div>
              <figure className={styles.photograph}>
              <Image src={florencePonteVecchioNuit} alt="Les devantures fermées et éclairées du Ponte Vecchio à la nuit tombée" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 28vw, 380px" />
            </figure>
            </div>
          </section>

          <section className={styles.florenceSequence} aria-labelledby="florence-morning-title">
            <div className={`${styles.prose} ${styles.florenceIntro}`}>
              <p className={styles.dateline}>17 AVRIL · RÉVEIL SOUS LA PLUIE</p>
              <h3 id="florence-morning-title">Un cappuccino pour commencer</h3>
              <p>Le lendemain matin, Florence se réveille sous la pluie. Pas question pour autant de rester au van : nous repartons à pied pour poursuivre notre découverte de la ville.</p>
              <p>Première étape indispensable : un petit café italien pour déguster un cappuccino. Et celui-là restera un très bon souvenir !</p>
            </div>
            <div className={styles.florenceMorning}>
              <figure className={styles.photograph}>
              <Image src={florenceVanReveil} alt="Notre van rouge et blanc stationné sur l’aire de Florence au réveil" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 24vw, 320px" />
            </figure>
              <figure className={`${styles.photograph} ${styles.florenceCoffee}`}>
              <Image src={florenceCappuccino} alt="Un cappuccino dans une tasse blanche, posé sur sa soucoupe au café" sizes="(max-width: 700px) 140px, 180px" />
            </figure>
            </div>
          </section>

          <section className={styles.florenceSequence} aria-labelledby="florence-walk-title">
            <div className={`${styles.prose} ${styles.florenceIntro}`}>
              <h3 id="florence-walk-title">Au fil des rues</h3>
              <p>Malgré la météo, nous continuons simplement à marcher. Comme souvent pendant ce voyage, nous n’avons rien prévu à l’avance. Nous choisissons une destination, puis nous découvrons simplement une fois sur place.</p>
            </div>
            <div className={styles.florenceRain}>
              <figure className={styles.photograph}>
              <Image src={florenceRuesSousLaPluie} alt="Des passants avec leurs parapluies dans une rue pavée de Florence sous la pluie" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 28vw, 380px" />
            </figure>
              <div className={styles.florenceRainDetails}>
                <figure className={styles.photograph}>
              <Image src={florenceMarche} alt="Une allée couverte du marché avec des étals et des sacs colorés" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 25vw, 340px" />
            </figure>
                <figure className={styles.photograph}>
              <Image src={florenceMatinee} alt="Une place de Florence au sol mouillé, entourée de façades et d’arcades" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 48vw, 650px" />
            </figure>
              </div>
            </div>
            <div className={`${styles.prose} ${styles.florenceTextPause}`}>
              <p>Marchés, boutiques, églises, palais et petites rues ponctuent notre promenade. Nous passons moins de temps autour du Ponte Vecchio, déjà découvert la veille, car une autre idée nous trotte dans la tête : rejoindre les hauteurs que nous avions repérées pendant notre première soirée.</p>
            </div>
            <div className={styles.florenceWalkDetails}>
              <figure className={styles.photograph}>
              <Image src={florenceEgliseInterieur} alt="Les bancs, les voûtes et l’orgue à l’intérieur d’une église de Florence" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 30vw, 420px" />
            </figure>
              <figure className={styles.photograph}>
              <Image src={florenceCourSculpture} alt="Une sculpture sombre au milieu d’une cour de palais bordée d’arcades" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 25vw, 350px" />
            </figure>
              <figure className={styles.photograph}>
              <Image src={florenceBoutiqueItalienne} alt="L’entrée d’une boutique italienne avec ses produits suspendus et son sol à damier" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 24vw, 330px" />
            </figure>
            </div>
            <figure className={`${styles.photograph} ${styles.florenceFiat}`}>
              <Image src={florenceFiat500} alt="Une petite Fiat 500 blanche garée sur les pavés de Florence" sizes="(max-width: 700px) 180px, 240px" />
            </figure>
          </section>

          <section className={styles.florenceSequence} aria-labelledby="florence-heights-title">
            <div className={`${styles.prose} ${styles.florenceIntro}`}>
              <h3 id="florence-heights-title">Prendre de la hauteur</h3>
              <p>La veille au soir, en parcourant les rues de Florence, nous avions remarqué qu’il était possible de prendre de la hauteur pour découvrir la ville autrement. Alors, sans vraiment savoir ce qui nous attend là-haut, nous décidons simplement d’aller voir.</p>
            </div>
            <div className={styles.florenceArnoView}>
              <figure className={styles.photograph}>
              <Image src={florenceVueArnoHauteurs} alt="L’Arno devant les façades de Florence et la tour du Palazzo Vecchio" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 64vw, 900px" />
            </figure>
            </div>
            <div className={styles.florenceClimb}>
              <figure className={styles.photograph}>
              <Image src={florenceMonteeHauteurs} alt="Une haute porte de pierre sur le chemin des hauteurs de Florence" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 24vw, 330px" />
            </figure>
              <figure className={styles.photograph}>
              <Image src={florenceHauteurs} alt="Les collines verdoyantes, les cyprès et les bâtiments sur les hauteurs de Florence" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 46vw, 650px" />
            </figure>
            </div>
            <div className={`${styles.prose} ${styles.florenceTextPause}`}>
              <p>Malgré les nuages, la vue en arrivant nous récompense largement. Florence s’étend devant nous, autour de l’Arno, avec ses ponts, ses toits et l’impressionnante coupole du Duomo qui domine la ville. Un panorama magnifique, même sous ce ciel gris.</p>
            </div>
            <figure className={styles.photograph}>
              <Image src={florencePonteVecchioPanorama} alt="Le Ponte Vecchio et les ponts de l’Arno vus depuis les hauteurs, au milieu des toits de Florence" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 85vw, 1200px" />
            </figure>
            <div className={styles.florencePanorama}>
              <figure className={styles.photograph}>
              <Image src={florencePanorama} alt="Florence et ses monuments au-delà des arbres, sous un vaste ciel de nuages" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 76vw, 1050px" />
            </figure>
            </div>
            <div className={`${styles.prose} ${styles.florenceTextPause}`}>
              <p>Après avoir passé des heures à parcourir ses rues, la découvrir ainsi depuis les hauteurs lui donne une tout autre dimension.</p>
            </div>
          </section>

          <section className={styles.florenceClosing} aria-labelledby="florence-last-evening-title">
            <div className={styles.prose}>
              <h3 id="florence-last-evening-title">Une dernière soirée à Florence</h3>
              <p>Après cette longue journée de marche, nous terminons par un restaurant avant de reprendre le chemin du van.</p>
              <p>Le repas ne restera pas vraiment parmi nos meilleurs souvenirs : une adresse très touristique, plutôt chère et pas franchement à la hauteur de nos attentes. Tant pis, cela ne gâchera certainement pas cette journée passée à découvrir Florence.</p>
              <p>Nous retrouvons finalement notre aire de camping-car pour une deuxième nuit, bien contents de poser les pieds après tous ces kilomètres parcourus dans la ville.</p>
            </div>
            <figure className={styles.photograph}>
              <Image src={florenceVanDeuxiemeNuit} alt="L’arrière de notre van ouvert sur l’aire de camping-car, avec un rideau pour la deuxième nuit à Florence" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 30vw, 420px" />
            </figure>
          </section>
        </section>
        <section className={`${styles.chapter} ${styles.saintMarin}`} aria-labelledby="saint-marin-title">
          <header className={styles.chapterHeader}>
            <p className={styles.chapterNumber}>ÉTAPE 07</p>
            <div>
              <p className={styles.dateline}>18–19 AVRIL 2025</p>
              <h2 id="saint-marin-title">Saint-Marin, la surprise des hauteurs</h2>
              <p className={styles.route}>Florence → Saint-Marin → Modène</p>
            </div>
          </header>

          <section aria-labelledby="saint-marin-discovery-title">
            <div className={styles.saintMarinArrival}>
              <div className={styles.prose}>
                <p className={styles.dateline}>18 AVRIL · UNE BELLE SURPRISE</p>
                <h3 id="saint-marin-discovery-title">Monter pour découvrir</h3>
                <p>Nous quittons Florence le 18 avril au matin pour environ trois heures de route vers Saint-Marin. En début d’après-midi, nous garons le van sur une aire de camping-car gratuite, dans la partie basse de la ville.</p>
                <p>Nous prenons ensuite le téléphérique pour rejoindre le centre historique. Nous ne savons pas vraiment à quoi nous attendre. C’est là que vient la surprise : un endroit magnifique, perché au-dessus du paysage.</p>
              </div>
              <figure className={styles.photograph}>
                <Image src={saintMarinArriveeHauteurs} alt="Vue en hauteur sur les maisons de la partie basse de Saint-Marin, entourées de verdure" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 44vw, 620px" />
              </figure>
            </div>
            <div className={styles.saintMarinFirstView}>
              <figure className={styles.photograph}>
                <Image src={saintMarinPremierPanorama} alt="Les collines et les villages autour de Saint-Marin sous un ciel chargé de nuages" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 55vw, 760px" />
              </figure>
            </div>
            <div className={`${styles.prose} ${styles.saintMarinTextPause}`}>
              <p>Comme souvent, nous avons choisi la destination sans préparer les visites. Nous avançons simplement dans les petites rues, entre les boutiques d’art et de souvenirs, les façades et les fortifications. Saint-Marin se découvre au fil de la marche, et nous sommes ravis de cette surprise.</p>
            </div>
            <div className={styles.saintMarinStreets}>
              <figure className={styles.photograph}>
                <Image src={saintMarinPremieresRues} alt="Escaliers, murs de pierre et grandes façades dans les premières rues du centre historique" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 42vw, 580px" />
              </figure>
              <figure className={styles.photograph}>
                <Image src={saintMarinRuesBoutiques} alt="Les devantures et les boutiques le long d’une rue pavée de Saint-Marin" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 32vw, 440px" />
              </figure>
            </div>
            <div className={styles.saintMarinArchitecture}>
              <figure className={styles.photograph}>
                <Image src={saintMarinInterieurHistorique} alt="Une salle aux bancs de bois et aux grandes peintures murales dans le centre historique" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 30vw, 420px" />
              </figure>
              <figure className={styles.photograph}>
                <Image src={saintMarinArchitecture} alt="Une façade de pierre à colonnes et son fronton dans le centre de Saint-Marin" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 24vw, 330px" />
              </figure>
              <figure className={styles.photograph}>
                <Image src={saintMarinRueFortifications} alt="Une petite rue commerçante entre les façades et les murs de pierre de Saint-Marin" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 25vw, 340px" />
              </figure>
            </div>
            <div className={styles.saintMarinWalls}>
              <figure className={styles.photograph}>
                <Image src={saintMarinFortificationsJardin} alt="Un jardin au pied des hauts murs et des escaliers des fortifications" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 44vw, 620px" />
              </figure>
              <figure className={styles.photograph}>
                <Image src={saintMarinArtillerie} alt="Des pièces d’artillerie anciennes sur roues devant un bâtiment en pierre" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 29vw, 400px" />
              </figure>
            </div>
            <div className={`${styles.prose} ${styles.saintMarinTextPause}`}>
              <h3>Le paysage, tout autour</h3>
              <p>Les rues et les fortifications nous plaisent déjà beaucoup, mais ce sont surtout les vues qui nous surprennent. Depuis les hauteurs, le paysage s’étend au loin sous les nuages. Nous n’avions pas imaginé découvrir tout cela en venant ici.</p>
            </div>
            <figure className={styles.photograph}>
              <Image src={saintMarinPaysageNuages} alt="Les collines verdoyantes sous une trouée de ciel bleu entre de grands nuages, vues depuis Saint-Marin" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 85vw, 1200px" />
            </figure>
            <div className={styles.saintMarinTerrace}>
              <figure className={styles.photograph}>
                <Image src={saintMarinVueHauteurs} alt="Une terrasse de pierre au-dessus des arbres et du vaste paysage autour de Saint-Marin" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 55vw, 760px" />
              </figure>
            </div>
            <div className={styles.saintMarinFortress}>
              <figure className={styles.photograph}>
                <Image src={saintMarinForteresse} alt="Une forteresse et ses tours dressées sur une crête rocheuse au-dessus des arbres" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 76vw, 1050px" />
              </figure>
            </div>
            <div className={styles.saintMarinFirstDayEnd}>
              <div className={styles.prose}>
                <p>Cette première découverte nous donne envie de continuer. Les petites rues, les remparts et les panoramas ont largement dépassé ce que nous attendions de cette halte. Le lendemain, nous reviendrons dans le centre historique pour en voir davantage.</p>
              </div>
              <figure className={styles.photograph}>
                <Image src={saintMarinRempartsSoiree} alt="Des passants dans une rue bordée de boutiques et de remparts crénelés" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 40vw, 560px" />
              </figure>
            </div>
          </section>

          <section className={styles.saintMarinSequence} aria-labelledby="saint-marin-second-day-title">
            <div className={`${styles.prose} ${styles.saintMarinIntro}`}>
              <p className={styles.dateline}>19 AVRIL · RETOUR DANS LE CENTRE HISTORIQUE</p>
              <h3 id="saint-marin-second-day-title">Encore un peu de Saint-Marin</h3>
              <p>Le 19 avril, nous retournons dans le centre historique pour poursuivre la visite. Après la belle surprise de la veille, nous avons envie de découvrir davantage les tours, les châteaux et les remparts, avec toujours ces panoramas autour de nous.</p>
            </div>
            <div className={styles.saintMarinMorningView}>
              <figure className={styles.photograph}>
                <Image src={saintMarinPanoramaMatin} alt="Les collines et les champs autour de Saint-Marin sous le ciel bleu du matin" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 72vw, 1000px" />
              </figure>
            </div>
            <div className={styles.saintMarinMorningStreets}>
              <figure className={styles.photograph}>
                <Image src={saintMarinArchitecturePaysage} alt="Une place et ses bâtiments de pierre ouverts sur le paysage en contrebas" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 42vw, 580px" />
              </figure>
              <figure className={styles.photograph}>
                <Image src={saintMarinPetitesRues} alt="Un passage pavé entre une petite boutique et les murs de pierre, sous les arbres" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 32vw, 440px" />
              </figure>
            </div>
            <div className={styles.saintMarinCoffeeBreak}>
              <div className={styles.prose}>
                <p className={styles.dateline}>LE CAPPUCCINO DU MATIN</p>
                <p>Dans la matinée, nous prenons aussi le temps d’un cappuccino. Une petite pause au milieu de la visite, avant de continuer à découvrir Saint-Marin.</p>
              </div>
              <figure className={`${styles.photograph} ${styles.saintMarinCoffee}`}>
                <Image src={saintMarinCappuccino} alt="Un cappuccino dans une tasse blanche, avec un croissant sur la table" sizes="(max-width: 700px) 150px, (max-width: 1000px) 200px, 230px" />
              </figure>
            </div>
            <div className={styles.saintMarinInteriors}>
              <figure className={styles.photograph}>
                <Image src={saintMarinEntreeFortifications} alt="L’entrée d’une fortification entre ses murs crénelés et ses tours de pierre" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 28vw, 380px" />
              </figure>
              <figure className={styles.photograph}>
                <Image src={saintMarinInterieurTour} alt="Une salle intérieure avec des vitrines, du mobilier en bois et un lustre" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 23vw, 320px" />
              </figure>
              <figure className={styles.photograph}>
                <Image src={saintMarinArmures} alt="Deux armures exposées derrière une vitrine" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 21vw, 290px" />
              </figure>
            </div>
            <div className={`${styles.prose} ${styles.saintMarinTextPause}`}>
              <h3>Entre les tours et l’horizon</h3>
              <p>Nous continuons parmi les tours et les remparts. D’un point de vue à l’autre, le paysage reste une grande part du plaisir de la visite. Cette deuxième journée confirme notre première impression : Saint-Marin restera l’une des belles surprises de cette partie du voyage.</p>
            </div>
            <div className={styles.saintMarinTowers}>
              <figure className={styles.photograph}>
                <Image src={saintMarinPanoramaTour} alt="Le paysage au loin entre une tour de pierre et les remparts de Saint-Marin" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 35vw, 480px" />
              </figure>
              <figure className={styles.photograph}>
                <Image src={saintMarinTourRemparts} alt="Une tour et ses remparts crénelés au bord du chemin, sous un ciel bleu" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 40vw, 550px" />
              </figure>
            </div>
          </section>

          <section className={styles.saintMarinDeparture} aria-labelledby="saint-marin-modene-title">
            <div className={`${styles.prose} ${styles.saintMarinIntro}`}>
              <p className={styles.dateline}>19 AVRIL · VERS 18 H 30 À MODÈNE</p>
              <h3 id="saint-marin-modene-title">Reprendre la route vers Modène</h3>
              <p>Nous quittons Saint-Marin pour prendre la direction de Modène. Nous arrivons vers 18 h 30 sur l’aire de camping-car Campus Club et nous installons pour la soirée.</p>
              <p>La suite du voyage nous attend tout près : le 20 avril, nous irons découvrir le musée Ferrari de Maranello. Pour l’instant, nous nous installons tranquillement pour la soirée, avant une étape qui s’annonce bien différente.</p>
            </div>
            <div className={styles.saintMarinModene}>
              <figure className={styles.photograph}>
                <Image src={modeneArriveeAireCampingCar} alt="Notre van rouge et blanc stationné sous les arbres sur l’aire de camping-car de Modène" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 28vw, 380px" />
              </figure>
              <figure className={styles.photograph}>
                <Image src={modeneVanSoiree} alt="Les chaises installées derrière notre van ouvert pour la soirée à Modène" sizes="(max-width: 700px) 88vw, (max-width: 1412px) 32vw, 440px" />
              </figure>
            </div>
          </section>
        </section>
        <MaranelloChapter />
        <VeniceChapter />
        <SirmioneChapter />
        <MilanChapter />
        <BellagioChapter />
        <RetourBrianconChapter />
        <BrianconChapter />
        <RetourVerdonChapter />
      </div>
    </article>
  );
}
