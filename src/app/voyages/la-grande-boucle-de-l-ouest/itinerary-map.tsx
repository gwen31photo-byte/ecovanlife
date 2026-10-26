"use client";

import { useRef, useState, type MouseEvent } from "react";
import { X } from "lucide-react";
import MobileItinerary from "./mobile-itinerary";
import { countries } from "./trip-map-geography";
import styles from "./itinerary-map.module.css";
import { points, routeSegments } from "./itinerary-map-layout";
import { visits, eveningStop } from "./itinerary-data";

const sequence = visits.map((visit) => ({ ...points.find((point) => point.key === visit.stop)!, ...visit }));
// Keep the mobile chronology, including both visits to the unlocated stop.
const chronology = sequence.flatMap((stop) => stop.key === "la-cambe"
  ? [stop, { key: "gefosse-soir", ...eveningStop },
    { key: "gefosse-reveil", name: "Géfosse-Fontenay · départ du jour 12", anchor: "etape-10" }]
  : [stop]);

const regions = [
  { name: "Départ", point: "fonsorbes", keys: ["fonsorbes", "sainte-bazeille"], side: "left" },
  { name: "Dune du Pilat", point: "pilat", keys: ["pilat"], side: "left" },
  { name: "Côte atlantique", point: "rochelle", keys: ["arces", "chateau", "boyardville", "chassiron", "rochelle", "meschers", "plage", "fumee", "fouras"], side: "left" },
  { name: "Puy du Fou", point: "puy", keys: ["puy"], side: "right" },
  { name: "Mont-Saint-Michel", point: "mont-saint-michel", keys: ["noyal", "pontorson", "mont-saint-michel"], side: "left" },
  { name: "Normandie", point: "arromanches", keys: ["arromanches", "sainte-mere-eglise", "maisy", "pointe-du-hoc", "la-cambe", "gefosse-soir", "gefosse-reveil", "cimetiere-americain", "arromanches-360", "canadian-scottish"], side: "right" },
];

// Overview drawing only: omit the Atlantic excursions and return journeys.
// The visit chronology, place coordinates and destination links stay untouched.
const atlanticStart = routeSegments.findIndex((segment) => segment.from === "pilat");
const atlanticEnd = routeSegments.findIndex((segment) => segment.to === "puy");
const overviewStops = ["pilat", "rochelle", "puy"].map((key) => points.find((point) => point.key === key)!);
const atlanticOverview = overviewStops.slice(1).map((point, index) => {
  const before = overviewStops[index];
  const midpoint = { x: (before.x + point.x) / 2, y: (before.y + point.y) / 2 };
  return {
    key: `atlantic-overview-${index}`,
    path: `M${before.x},${before.y}L${point.x},${point.y}`,
    arrow: `M${before.x},${before.y}L${midpoint.x},${midpoint.y}`,
  };
});
const overviewRouteSegments = [
  ...routeSegments.slice(0, atlanticStart),
  ...atlanticOverview,
  ...routeSegments.slice(atlanticEnd + 1),
];

export default function ItineraryMap() {
  const [selection, setSelection] = useState<(typeof regions)[number] | null>(null);
  const panel = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLButtonElement | null>(null);

  function jumpToStep(event: MouseEvent<HTMLAnchorElement | SVGAElement>) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey ||
      event.ctrlKey || event.shiftKey || event.altKey) return;
    const hash = event.currentTarget.getAttribute("href");
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (!target) return;

    event.preventDefault();
    if (window.location.hash !== hash) {
      window.history.pushState(null, "", hash);
    }
    const scrollStyles = [document.documentElement, document.body].map((element) => ({
      style: element.style,
      value: element.style.getPropertyValue("scroll-behavior"),
      priority: element.style.getPropertyPriority("scroll-behavior"),
    }));
    try {
      // Disable CSS smooth scrolling before focus and scrolling on mobile too.
      scrollStyles.forEach(({ style }) => style.setProperty("scroll-behavior", "auto", "important"));
      // Preserve keyboard navigation to the destination without another scroll.
      const tabIndex = target.getAttribute("tabindex");
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      if (tabIndex === null) target.removeAttribute("tabindex");
      else target.setAttribute("tabindex", tabIndex);
      const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      const top = Math.max(0, window.scrollY + target.getBoundingClientRect().top - offset);
      window.scrollTo({ top, left: window.scrollX, behavior: "auto" });
    } finally {
      scrollStyles.forEach(({ style, value, priority }) => {
        if (value) style.setProperty("scroll-behavior", value, priority);
        else style.removeProperty("scroll-behavior");
      });
    }
  }


  function closePanel() {
    setSelection(null);
    returnFocus.current?.focus({ preventScroll: true });
  }

  return (
    <div className={styles.map}>
      <div className={styles.frame} onKeyDown={(event) => {
        if (event.key === "Escape" && selection) { event.preventDefault(); closePanel(); }
      }}>
        <svg preserveAspectRatio="none" viewBox="0 0 1100 660" className={styles.svg} role="img" aria-labelledby="ouest-map-title ouest-map-description">
          <title id="ouest-map-title">La grande boucle de l’Ouest, de Fonsorbes à la Normandie</title>
          <desc id="ouest-map-description">Tracé indicatif des dix premières étapes, simplifié sur la côte atlantique sans les petits allers-retours ; il ne représente pas un itinéraire routier exact. Les six repères ouvrent les lieux et leurs liens vers le récit, sans zoom ni déplacement de la carte.</desc>
          <defs>
            <marker id="ouest-map-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M2 2L7 5L2 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </marker>
          </defs>
          <g className={styles.geography} aria-hidden="true">
            {countries.map((country) => <path key={country.name} d={country.path} />)}
            <text x="830" y="190" className={styles.country}>FRANCE</text>
            <text x="90" y="400" className={styles.sea}>Océan Atlantique</text>
            <text x="270" y="95" className={styles.region}>Bretagne</text>
          </g>
          <g className={styles.route} aria-hidden="true">
            {overviewRouteSegments.map((segment) => <g key={segment.key}>
              <path d={segment.path} />
              {segment.arrow && <path d={segment.arrow} markerEnd="url(#ouest-map-arrow)" />}
            </g>)}
          </g>
        </svg>
        {regions.map((region) => {
          const point = points.find((point) => point.key === region.point)!;
          return <button key={region.name} type="button"
            className={`${styles.landmark} ${region.side === "left" ? styles.labelLeft : styles.labelRight}`}
            style={{ left: `${point.x / 11}%`, top: `${point.y / 6.6}%` }}
            aria-label={`${region.name} : voir les lieux et les étapes`}
            aria-expanded={selection === region} aria-controls={selection === region ? "ouest-place-panel" : undefined}
            onClick={(event) => {
              returnFocus.current = event.currentTarget;
              setSelection(region);
              requestAnimationFrame(() => panel.current?.focus({ preventScroll: true }));
            }}><span className={styles.pin} aria-hidden="true" /><span className={styles.landmarkLabel}>{region.name}</span></button>;
        })}
        {selection && <div className={styles.overlay} onClick={(event) => { if (event.target === event.currentTarget) closePanel(); }}>
          <div id="ouest-place-panel" ref={panel} tabIndex={-1} role="dialog" aria-labelledby="ouest-place-title" className={styles.panel}>
            <div className={styles.panelHeader}>
              <div><p>AU FIL DU VOYAGE</p><h3 id="ouest-place-title">{selection.name}</h3></div>
              <button type="button" aria-label="Fermer la fenêtre de région" onClick={closePanel}><X size={18} /></button>
            </div>
            <ul className={styles.placeList}>
              {chronology.filter((visit) => selection.keys.includes(visit.key)).map((visit, index) => <li key={`${visit.anchor}-${index}`}>
                <a href={`#${visit.anchor}`} onClick={(event) => {
                  if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) setSelection(null);
                  jumpToStep(event);
                }}>{visit.name}<span aria-hidden="true"> ↗</span></a>
              </li>)}
            </ul>
            {selection.name === "Normandie" && <p className={styles.note}>Géfosse-Fontenay — plage des Veys : halte du récit, sans point géolocalisé.</p>}
          </div>
        </div>}
      </div>
      <div className={styles.caption}>
        <p>De Fonsorbes au camping Canadian Scottish · Tracé indicatif.</p>
        <p>Touchez un repère pour retrouver les lieux et le récit.</p>
        <a href="https://www.naturalearthdata.com/" className={styles.credit} target="_blank" rel="noreferrer">Fond : Natural Earth</a>
      </div>
      <MobileItinerary visits={chronology} onNavigate={jumpToStep} />
    </div>
  );
}
