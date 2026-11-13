"use client";

import { useRef, useState, type MouseEvent } from "react";
import { X } from "lucide-react";
import MobileItinerary from "./mobile-itinerary";
import { countries } from "./trip-map-geography";
import styles from "../la-grande-boucle-de-l-ouest/itinerary-map.module.css";
import { points, regions, stops, routeSegments } from "./itinerary-data";
const chronology = stops;

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
        <svg preserveAspectRatio="none" viewBox="250 100 1200 750" className={styles.svg} role="img" aria-labelledby="chypre-map-title chypre-map-description">
          <title id="chypre-map-title">De Toulouse à Paphos, en passant par Manchester</title>
          <desc id="chypre-map-description">Liaisons aériennes indicatives de Toulouse à Manchester, puis à Paphos. Les repères ouvrent les liens vers les deux premières étapes. Aucun trajet routier à Chypre n’est représenté.</desc>
          <defs>
            <marker id="chypre-map-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M2 2L7 5L2 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </marker>
          </defs>
          <g className={styles.geography} aria-hidden="true">
            {countries.map((country) => <path key={country.name} d={country.path} />)}
            <text x="650" y="470" className={styles.country}>FRANCE</text>
            <text x="570" y="160" className={styles.region}>Royaume-Uni</text>
            <text x="900" y="740" className={styles.sea}>Méditerranée</text>
            <text x="1220" y="730" className={styles.region}>Chypre</text>
          </g>
          <g className={styles.route} aria-hidden="true">
            {routeSegments.map((segment) => <g key={segment.key}>
              <path d={segment.path} />
              {segment.arrow && <path d={segment.arrow} markerEnd="url(#chypre-map-arrow)" />}
            </g>)}
          </g>
        </svg>
        {regions.map((region) => {
          const point = points.find((point) => point.key === region.point)!;
          return <button key={region.name} type="button"
            className={`${styles.landmark} ${region.side === "left" ? styles.labelLeft : styles.labelRight}`}
            style={{ left: `${(point.x - 250) / 12}%`, top: `${(point.y - 100) / 7.5}%` }}
            aria-label={`${region.name} : voir les lieux et les étapes`}
            aria-expanded={selection === region} aria-controls={selection === region ? "chypre-place-panel" : undefined}
            onClick={(event) => {
              returnFocus.current = event.currentTarget;
              setSelection(region);
              requestAnimationFrame(() => panel.current?.focus({ preventScroll: true }));
            }}><span className={styles.pin} aria-hidden="true" /><span className={styles.landmarkLabel}>{region.name}</span></button>;
        })}
        {selection && <div className={styles.overlay} onClick={(event) => { if (event.target === event.currentTarget) closePanel(); }}>
          <div id="chypre-place-panel" ref={panel} tabIndex={-1} role="dialog" aria-labelledby="chypre-place-title" className={styles.panel}>
            <div className={styles.panelHeader}>
              <div><p>AU FIL DU VOYAGE</p><h3 id="chypre-place-title">{selection.name}</h3></div>
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

          </div>
        </div>}
      </div>
      <div className={styles.caption}>
        <p>Étapes 01–02 · Toulouse → Manchester → Paphos · Liaisons aériennes indicatives.</p>
        <p>Touchez un repère pour retrouver les lieux et le récit.</p>
        <a href="https://www.naturalearthdata.com/" className={styles.credit} target="_blank" rel="noreferrer">Fond : Natural Earth</a>
      </div>
      <MobileItinerary visits={chronology} onNavigate={jumpToStep} />
    </div>
  );
}
