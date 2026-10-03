"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Minus, Plus, RotateCcw } from "lucide-react";
import { countries } from "./trip-map-geography";
import styles from "./itinerary-map.module.css";

// City centres are approximate; these connections describe the order of the trip,
// not roads, a GPS track or the exact places where the van was parked.
const stops = [
  { key: "fonsorbes", name: "Fonsorbes · départ / retour", lon: 1.23, lat: 43.535, anchor: "bargemon-title", label: [35, 480, 245] },
  { key: "bargemon", name: "Bargemon", lon: 6.55, lat: 43.62, anchor: "bargemon-title", label: [475, 480, 110] },
  { key: "monaco", name: "Monaco", lon: 7.425, lat: 43.738, anchor: "monaco-title", label: [595, 450, 85] },
  { key: "genes", name: "Gênes", lon: 8.934, lat: 44.407, anchor: "genes-title", label: [650, 300, 80] },
  { key: "la-spezia", name: "La Spezia", lon: 9.824, lat: 44.102, anchor: "cinque-terre-title", label: [700, 450, 105] },
  { key: "cinque-terre", name: "Cinque Terre", lon: 9.73, lat: 44.12, anchor: "cinque-terre-title", label: [620, 390, 130] },
  { key: "pise", name: "Pise", lon: 10.402, lat: 43.717, anchor: "pise-title", label: [795, 510, 65] },
  { key: "florence", name: "Florence", lon: 11.255, lat: 43.77, anchor: "florence-title", label: [860, 450, 105] },
  { key: "saint-marin", name: "Saint-Marin", lon: 12.447, lat: 43.936, anchor: "saint-marin-title", label: [970, 375, 125] },
  { key: "maranello", name: "Maranello", lon: 10.868, lat: 44.526, anchor: "etape-08", label: [895, 310, 110] },
  { key: "venise", name: "Venise", lon: 12.336, lat: 45.438, anchor: "etape-09", label: [975, 215, 80] },
  { key: "sirmione", name: "Sirmione", lon: 10.607, lat: 45.493, anchor: "etape-10", label: [805, 180, 100] },
  { key: "milan", name: "Milan", lon: 9.19, lat: 45.464, anchor: "etape-11", label: [650, 240, 80] },
  { key: "bellagio", name: "Bellagio", lon: 9.262, lat: 45.988, anchor: "etape-12", label: [670, 125, 100] },
  { key: "montgenevre", name: "Montgenèvre", lon: 6.724, lat: 44.931, anchor: "montgenevre-pause-title", label: [385, 240, 135] },
  { key: "briancon", name: "Briançon", lon: 6.644, lat: 44.899, anchor: "briancon-evening-title", label: [385, 300, 105] },
  { key: "verdon", name: "Gorges du Verdon", lon: 6.249, lat: 43.802, anchor: "retour-verdon-title", label: [285, 355, 180] },
] as const;

// Keep these waypoints in the route, without displaying a stop or navigation link.
const visibleStops = stops.filter((stop) => stop.key !== "la-spezia" && stop.key !== "montgenevre");

function project(lon: number, lat: number) {
  return { x: 90 + (lon - 1.23) * 78, y: 90 + (46.8 - lat) * 110 };
}
const majorStops = new Set(["monaco", "genes", "cinque-terre", "florence", "maranello", "venise", "milan"]);
const points = stops.map((stop) => ({ ...stop, ...project(stop.lon, stop.lat) }));
const lastPoint = points[points.length - 1];
// The excursion returns to La Spezia before the journey continues to Pisa.
const sequence = [...points.slice(0, 6), points[4], ...points.slice(6)];

export default function ItineraryMap() {
  const [zoom, setZoom] = useState(1);
  const viewport = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; y: number; left: number; top: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);

  function initialView() {
    const element = viewport.current;
    if (!element) return;
    const mobile = element.clientWidth < 800;
    element.scrollTo({ left: mobile ? 220 : 0, top: mobile ? 110 : 0, behavior: "instant" });
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
          <div className={styles.canvas} style={{ width: `${zoom * 100}%`, minWidth: `${1040 * zoom}px` }}>
            <svg viewBox="0 0 1100 660" className={styles.svg} role="group" aria-labelledby="trip-map-title trip-map-description">
              <title id="trip-map-title">De Fonsorbes à l’Italie, puis le retour par les Alpes et le Verdon</title>
              <desc id="trip-map-description">Une boucle reliant les destinations du carnet. Chaque nom est un lien vers son passage. Le tracé représente l’ordre des destinations, sans reproduire les routes exactes.</desc>
              <defs>
                <marker id="trip-map-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                  <path d="M2 2L7 5L2 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </marker>
              </defs>
              <g className={styles.geography} aria-hidden="true">
                {countries.map((country) => <path key={country.name} d={country.path} />)}
                <text x="270" y="230" className={styles.country}>FRANCE</text>
                <text x="940" y="505" className={styles.country}>ITALIE</text>
                <text x="785" y="80" className={styles.smallCountry}>SUISSE</text>
                <text x="520" y="180" className={styles.region}>Les Alpes</text>
                <text x="440" y="595" className={styles.sea}>Mer Méditerranée</text>
              </g>
              <g className={styles.route} aria-hidden="true">
                {sequence.slice(1).map((point, index) => {
                  const before = sequence[index];
                  const length = Math.hypot(point.x - before.x, point.y - before.y);
                  const middle = { x: (before.x + point.x) / 2, y: (before.y + point.y) / 2 };
                  return <g key={`${before.key}-${point.key}`}>
                    <path d={`M${before.x},${before.y}L${point.x},${point.y}`} />
                    {length > 65 && <path d={`M${before.x},${before.y}L${middle.x},${middle.y}`} markerEnd="url(#trip-map-arrow)" />}
                  </g>;
                })}
                <path d={`M${lastPoint.x},${lastPoint.y}Q285,545 ${points[0].x},${points[0].y}`} markerEnd="url(#trip-map-arrow)" />
              </g>
              {points.filter((point) => visibleStops.some((stop) => stop.key === point.key)).map((point) => {
                const [left, top, width] = point.label;
                const major = majorStops.has(point.key);
                const labelX = Math.max(left + 12, Math.min(left + width - 12, point.x));
                const labelY = Math.max(top, Math.min(top + 44, point.y));
                return <a key={point.key} href={`#${point.anchor}`} className={`${styles.stop}${major ? ` ${styles.majorStop}` : ""}`}
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
      </div>
      <div className={styles.caption}>
        <p>Une boucle, mille découvertes. <span>Tracé indicatif entre les étapes.</span></p>
        <span className={styles.mobileHint}>Faites glisser la carte pour explorer le parcours.</span>
        <a href="https://www.naturalearthdata.com/" className={styles.credit} target="_blank" rel="noreferrer">Fond : Natural Earth</a>
      </div>
      <nav className={styles.mobileItinerary} aria-label="Itinéraire du voyage">
        <ol>
          {visibleStops.map((stop, index) => (
            <li key={stop.key} className={majorStops.has(stop.key) ? styles.mobileMajorStop : undefined}>
              <a href={`#${stop.anchor}`}>
                {index === 0 ? "Fonsorbes · départ" : stop.name}
              </a>
            </li>
          ))}
          <li><a href={`#${stops[0].anchor}`}>Fonsorbes · retour</a></li>
        </ol>
      </nav>
    </div>
  );
}
