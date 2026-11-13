"use client";

import { useRef, useState, type MouseEvent } from "react";
import { X } from "lucide-react";
import MobileItinerary from "./mobile-itinerary";
import { countries } from "./trip-map-geography";
import styles from "../la-grande-boucle-de-l-ouest/itinerary-map.module.css";
import { points, regions, stops } from "./itinerary-data";
const chronology = stops;
const from = points[0];
const to = points[1];
const overviewRouteSegments = [{ key: "vol-toulouse-manchester",
  path: `M${from.x},${from.y}L${to.x},${to.y}`,
  arrow: `M${from.x},${from.y}L${(from.x + to.x) / 2},${(from.y + to.y) / 2}`,
}];

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
        <svg preserveAspectRatio="none" viewBox="0 0 1100 660" className={styles.svg} role="img" aria-labelledby="chypre-map-title chypre-map-description">
          <title id="chypre-map-title">De Toulouse à Manchester, première étape du voyage à Chypre</title>
          <desc id="chypre-map-description">Liaison aérienne indicative entre Toulouse-Blagnac et Manchester. Les repères ouvrent les lieux et les liens vers la première étape. Aucun itinéraire à Chypre n’est encore tracé.</desc>
          <defs>
            <marker id="chypre-map-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M2 2L7 5L2 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </marker>
          </defs>
          <g className={styles.geography} aria-hidden="true">
            {countries.map((country) => <path key={country.name} d={country.path} />)}
            <text x="650" y="470" className={styles.country}>FRANCE</text>
            <text x="570" y="160" className={styles.region}>Royaume-Uni</text>
            <text x="80" y="450" className={styles.sea}>Océan Atlantique</text>
          </g>
          <g className={styles.route} aria-hidden="true">
            {overviewRouteSegments.map((segment) => <g key={segment.key}>
              <path d={segment.path} />
              {segment.arrow && <path d={segment.arrow} markerEnd="url(#chypre-map-arrow)" />}
            </g>)}
          </g>
        </svg>
        {regions.map((region) => {
          const point = points.find((point) => point.key === region.point)!;
          return <button key={region.name} type="button"
            className={`${styles.landmark} ${region.side === "left" ? styles.labelLeft : styles.labelRight}`}
            style={{ left: `${point.x / 11}%`, top: `${point.y / 6.6}%` }}
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
        <p>Étape 01 · Toulouse → Manchester · Liaison aérienne indicative.</p>
        <p>Touchez un repère pour retrouver les lieux et le récit.</p>
        <a href="https://www.naturalearthdata.com/" className={styles.credit} target="_blank" rel="noreferrer">Fond : Natural Earth</a>
      </div>
      <MobileItinerary visits={chronology} onNavigate={jumpToStep} />
    </div>
  );
}
