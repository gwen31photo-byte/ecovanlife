"use client";

import { useEffect, useRef, useState, type MouseEvent, type PointerEvent } from "react";
import { Minus, Plus, RotateCcw } from "lucide-react";
import { countries } from "./trip-map-geography";
import styles from "./itinerary-map.module.css";

import { stops, visits, majorStops, project, eveningStop } from "./itinerary-data";

const points = stops.map((stop) => ({ ...stop, ...project(stop.lon, stop.lat) }));
const sequence = visits.map((visit) => ({ ...points.find((point) => point.key === visit.stop)!, ...visit }));

// Separate the excursions around Arces without moving their geographic endpoints.
const arcesRouteBends: Record<string, number> = {
  "arces-chateau": -16,
  "chassiron-arces": 12,
  "arces-rochelle": 20,
  "rochelle-arces": 20,
  "arces-meschers": -6,
  "plage-arces": 12,
  "arces-fumee": 34,
};

export default function ItineraryMap() {
  const [zoom, setZoom] = useState(1);
  const viewport = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; y: number; left: number; top: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);

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

  function initialView() {
    const element = viewport.current;
    if (!element) return;
    element.scrollTo({ left: 0, top: 0, behavior: "instant" });
  }

  useEffect(() => { initialView(); }, []);

  function startPan(event: PointerEvent<HTMLDivElement>) {
    suppressClick.current = false;
    if (event.button !== 0 || (event.target as Element).closest("button") ||
      (event.pointerType === "mouse" && (event.target as Element).closest("a"))) return;
    const element = event.currentTarget;
    drag.current = { x: event.clientX, y: event.clientY, left: element.scrollLeft, top: element.scrollTop, moved: false };
    if (event.pointerType === "mouse") element.setPointerCapture(event.pointerId);
  }

  function pan(event: PointerEvent<HTMLDivElement>) {
    const start = drag.current;
    if (!start) return;
    const deltaX = start.x - event.clientX;
    const distance = event.pointerType === "mouse"
      ? Math.hypot(deltaX, start.y - event.clientY) : Math.abs(deltaX);
    if (!start.moved && distance < 8) return;
    start.moved = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.scrollLeft = start.left + deltaX;
    if (event.pointerType === "mouse") {
      event.currentTarget.scrollTop = start.top + start.y - event.clientY;
    }
  }

  function endPan() {
    suppressClick.current = drag.current?.moved ?? false;
    drag.current = null;
  }

  function reset() {
    setZoom(1);
    initialView();
  }

  return (
    <div className={styles.map}>
      <div className={styles.frame}>
        <div className={styles.controls} role="group" aria-label="Zoom de la carte">
          <button type="button" aria-label="Agrandir la carte" disabled={zoom >= 1.75}
            onClick={() => setZoom((value) => Math.min(1.75, value + 0.25))}><Plus size={16} /></button>
          <button type="button" aria-label="Réduire la carte" disabled={zoom <= 1}
            onClick={() => setZoom((value) => Math.max(1, value - 0.25))}><Minus size={16} /></button>
          <button type="button" aria-label="Revenir à la vue initiale" onClick={reset}><RotateCcw size={15} /></button>
        </div>
        <div ref={viewport} className={styles.viewport} aria-label="Carte du voyage, déplaçable horizontalement"
          tabIndex={0} onPointerDown={startPan} onPointerMove={pan}
          onPointerUp={endPan} onPointerCancel={endPan}
          onClickCapture={(event) => {
            if (suppressClick.current) {
              event.preventDefault();
              event.stopPropagation();
              suppressClick.current = false;
            }
          }}>
          <div className={styles.canvas} style={{ width: `${zoom * 100}%`, minWidth: `${900 * zoom}px` }}>
            <svg viewBox="0 0 1100 660" className={styles.svg} role="group" aria-labelledby="ouest-map-title ouest-map-description">
              <title id="ouest-map-title">De Fonsorbes à La Cambe, les neuf premières étapes de la Grande Boucle de l’Ouest</title>
              <desc id="ouest-map-description">Un parcours reliant les destinations publiées, avec les excursions et retours à Arces-sur-Gironde. Chaque nom est un lien vers son passage. Le tracé représente l’ordre des destinations, sans reproduire les routes exactes. La dernière halte à Géfosse-Fontenay est accessible par un lien textuel, hors du tracé.</desc>
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
                {sequence.slice(1).map((point, index) => {
                  const before = sequence[index];
                  const length = Math.hypot(point.x - before.x, point.y - before.y);
                  // Slightly separate return legs, without implying actual roads.
                  const repeated = sequence.some((other, i) => i > 0 &&
                    other.key === before.key && sequence[i - 1].key === point.key);
                  const localBend = arcesRouteBends[`${before.key}-${point.key}`];
                  const bend = localBend ?? (repeated ? 12 : 0);
                  const cx = (before.x + point.x) / 2 - (point.y - before.y) / length * bend;
                  const cy = (before.y + point.y) / 2 + (point.x - before.x) / length * bend;
                  // Keep arrowheads away from the convergence at the camping.
                  const aroundArces = localBend !== undefined;
                  const t = aroundArces ? (before.key === "arces" ? 0.65 : 0.35) : 0.5;
                  const arrow = {
                    x: (1 - t) ** 2 * before.x + 2 * (1 - t) * t * cx + t ** 2 * point.x,
                    y: (1 - t) ** 2 * before.y + 2 * (1 - t) * t * cy + t ** 2 * point.y,
                  };
                  return <g key={`${index}-${before.key}-${point.key}`}>
                    <path d={`M${before.x},${before.y}Q${cx},${cy} ${point.x},${point.y}`} />
                    {length > (aroundArces ? 28 : 14) && <path d={`M${before.x},${before.y}Q${before.x + t * (cx - before.x)},${before.y + t * (cy - before.y)} ${arrow.x},${arrow.y}`} markerEnd="url(#ouest-map-arrow)" />}
                  </g>;
                })}
              </g>
              {points.map((point) => {
                const [left, top, width] = point.label;
                const major = majorStops.has(point.key);
                const labelX = Math.max(left + 12, Math.min(left + width - 12, point.x));
                const labelY = Math.max(top, Math.min(top + 44, point.y));
                return <a key={point.key} href={`#${point.anchor}`} onClick={jumpToStep} className={`${styles.stop}${major ? ` ${styles.majorStop}` : ""}`}
                  aria-label={`${point.name} — lire le carnet`} data-stop={point.key}>
                  <path className={styles.leader} d={`M${point.x},${point.y}L${labelX},${labelY}`} />
                  <circle className={styles.dot} cx={point.x} cy={point.y} r={point.key === "fonsorbes" ? 7 : major ? 7 : 5} />
                  <rect className={styles.labelTarget} x={left} y={top} width={width} height="48" rx="8" />
                  <text x={left + 10} y={top + 28} className={styles.label}>{point.name}</text>
                </a>;
              })}
            </svg>
          </div>
        </div>
        <p className={styles.caption}>
          <a href={`#${eveningStop.anchor}`} onClick={jumpToStep}>{eveningStop.name}</a>
        </p>
      </div>
      <div className={styles.caption}>
        <p>De Fonsorbes à La Cambe, via le Mont-Saint-Michel. <span>Tracé indicatif entre les étapes.</span></p>
        <span className={styles.mobileHint}>Faites glisser la carte pour explorer le parcours.</span>
        <a href="https://www.naturalearthdata.com/" className={styles.credit} target="_blank" rel="noreferrer">Fond : Natural Earth</a>
      </div>
      <nav className={styles.mobileItinerary} aria-label="Itinéraire du voyage">
        <ol>
          {sequence.map((stop, index) => (
            <li key={`${index}-${stop.key}`} className={majorStops.has(stop.key) ? styles.mobileMajorStop : undefined}>
              <a href={`#${stop.anchor}`} onClick={jumpToStep}>
                {index === 0 ? "Fonsorbes · départ" : stop.name}
              </a>
            </li>
          ))}
          <li className={styles.mobileMajorStop}>
            <a href={`#${eveningStop.anchor}`} onClick={jumpToStep}>{eveningStop.name}</a>
          </li>
        </ol>
      </nav>
    </div>
  );
}
