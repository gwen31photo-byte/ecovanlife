import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";
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

export const metadata: Metadata = {
  title: "De Toulouse à l’Italie",
  description:
    "De Monaco aux Cinque Terre, de Florence à Venise, puis des grands lacs aux Alpes : 15 jours et 14 nuits sur les routes, au rythme de notre van.",
  alternates: { canonical: "/voyages/de-toulouse-a-l-italie" },
};

const stops = [
  "Fonsorbes",
  "Bargemon",
  "Monaco",
  "Gênes",
  "La Spezia",
  "Cinque Terre",
  "Pise",
  "Florence",
  "Saint-Marin",
  "Modène / Maranello",
  "Venise",
  "Sirmione / Lac de Garde",
  "Milan",
  "Bellagio / Lac de Côme",
  "Briançon",
  "Gorges du Verdon",
  "Fonsorbes",
];

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
          src="/images/road.jpg"
          alt="Photographie d’illustration temporaire : paysage de montagne"
          fill
          priority
          sizes="100vw"
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
        <ol>
          {stops.map((stop, index) => (
            <li key={`${index}-${stop}`}>
              <span className={styles.stepNumber} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.stepName}>{stop}</span>
            </li>
          ))}
        </ol>
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
      </div>
    </article>
  );
}
