import { useRef, useState, type MouseEventHandler } from "react";
import { X } from "lucide-react";
import { cyprusPanelLinks, cyprusPlaces, cyprusTransfers } from "./itinerary-data";
import { cyprusCoastline } from "./cyprus-map-geography";
import shared from "../la-grande-boucle-de-l-ouest/itinerary-map.module.css";
import styles from "./itinerary-map.module.css";

export default function CyprusItinerary({ onNavigate }: {
  onNavigate: MouseEventHandler<HTMLAnchorElement>;
}) {
  const [selectedPlace, setSelectedPlace] = useState<(typeof cyprusPlaces)[number] | null>(null);
  const pin = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  function closePanel() {
    setSelectedPlace(null);
    pin.current?.focus({ preventScroll: true });
  }

  return <div className={styles.detail} onKeyDown={(event) => {
    if (event.key === "Escape" && selectedPlace) {
      event.preventDefault();
      closePanel();
    }
  }}>
    <div className={styles.detailFrame}>
      {/* Same aspect ratio for the SVG and its HTML overlay: no letterbox offset. */}
      <div className={styles.islandCanvas}>
        <svg viewBox="0 0 900 562.5" className={styles.island} role="img" aria-labelledby="cyprus-detail-title cyprus-detail-description">
          <title id="cyprus-detail-title">Notre séjour à Chypre</title>
          <desc id="cyprus-detail-description">L’île de Chypre, Paphos et le secteur côtier de Cape Aspro. Paphos regroupe le château, Nea Paphos et les Tombeaux des Rois, visités le matin de l’étape 03. Une flèche indique le déplacement vers Cape Aspro l’après-midi. Cette liaison est schématique ; aucun tracé routier ou de randonnée n’est représenté.</desc>
          <defs>
            <marker id="cyprus-transfer-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M2 2L7 5L2 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </marker>
          </defs>
          <path d={cyprusCoastline} className={styles.coastline} />
          <g className={shared.route} aria-hidden="true">
            {cyprusTransfers.map((transfer) => {
              const from = cyprusPlaces.find((place) => place.key === transfer.from)!.position;
              const to = cyprusPlaces.find((place) => place.key === transfer.to)!.position;
              // Terminer la flèche avant le repère, pour garder le sens visible.
              return <path key={transfer.key} data-transfer={transfer.key}
                d={`M${from.x},${from.y}L${from.x + (to.x - from.x) * 0.7},${from.y + (to.y - from.y) * 0.7}L${to.x},${to.y}`}
                markerMid="url(#cyprus-transfer-arrow)" />;
            })}
          </g>
          <g aria-hidden="true">
            <text x="390" y="335" className={styles.islandName}>CHYPRE</text>
            <text x="490" y="520" className={styles.sea}>Méditerranée</text>
          </g>
        </svg>
        {cyprusPlaces.map((place) => <button key={place.key} type="button" className={`${styles.paphos} ${place.key === "cape-aspro" ? styles.capeAspro : ""}`}
          style={{ left: `${place.position.x / 9}%`, top: `${place.position.y / 5.625}%` }}
          aria-label={`${place.name} : voir les étapes`}
          aria-expanded={selectedPlace === place}
          aria-controls={selectedPlace === place ? "cyprus-step-panel" : undefined} onClick={(event) => {
            pin.current = event.currentTarget;
            setSelectedPlace(place);
            requestAnimationFrame(() => panel.current?.focus({ preventScroll: true }));
          }}>
          <span className={styles.pin} aria-hidden="true" />
          <span className={styles.pinLabel}>{place.name}</span>
        </button>)}
      </div>
      {selectedPlace && <div className={`${shared.overlay} ${styles.detailOverlay}`} onClick={(event) => {
        if (event.target === event.currentTarget) closePanel();
      }}>
        <div id="cyprus-step-panel" ref={panel} tabIndex={-1}
          role="dialog" aria-labelledby="cyprus-step-panel-title" className={`${shared.panel} ${styles.stepPanel}`}>
          <div className={shared.panelHeader}>
            <h3 id="cyprus-step-panel-title">{selectedPlace.name}</h3>
            <button type="button" onClick={closePanel} aria-label="Fermer le panneau des étapes"><X size={18} /></button>
          </div>
          <ul className={`${shared.placeList} ${styles.compactLinks}`}>
            {cyprusPanelLinks.filter((link) => link.placeKey === selectedPlace.key).map((link) => <li key={link.key}>
              <a href={`#${link.anchor}`} onClick={(event) => {
                if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) setSelectedPlace(null);
                onNavigate(event);
              }}><span>{link.label}</span><span aria-hidden="true">↗</span></a>
            </li>)}
          </ul>
        </div>
      </div>}
    </div>
    <div className={styles.detailCaption}>
      <a href="https://www.naturalearthdata.com/" target="_blank" rel="noreferrer">Fond : Natural Earth · 1:10m</a>
    </div>
  </div>;
}
