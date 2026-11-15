import { useRef, useState, type MouseEventHandler } from "react";
import { X } from "lucide-react";
import { cyprusPlaces, cyprusSteps } from "./itinerary-data";
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
          <desc id="cyprus-detail-description">L’île de Chypre et le secteur de Paphos. Le repère de Paphos ouvre les étapes du séjour et leurs liens vers le récit. Aucun tracé routier n’est représenté.</desc>
          <path d={cyprusCoastline} className={styles.coastline} />
          <g aria-hidden="true">
            <text x="390" y="335" className={styles.islandName}>CHYPRE</text>
            <text x="490" y="520" className={styles.sea}>Méditerranée</text>
          </g>
        </svg>
        {cyprusPlaces.map((place) => <button key={place.key} type="button" className={styles.paphos}
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
          {cyprusSteps.filter((step) => step.placeKey === selectedPlace.key).map((step) => <div key={step.key} className={styles.panelStep}>
            <p className={styles.stepMeta}>Étape {step.chapter} — <time dateTime={step.date}>{step.dateLabel}</time></p>
            <p className={styles.stepTitle}>{step.title}</p>
            <a href={`#${step.anchor}`} className={styles.readStep} onClick={(event) => {
              if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) setSelectedPlace(null);
              onNavigate(event);
            }}>Lire cette étape <span aria-hidden="true">↗</span></a>
          </div>)}
        </div>
      </div>}
    </div>
    <div className={styles.detailCaption}>
      <p>Touchez un repère pour retrouver les étapes et le récit.</p>
      <a href="https://www.naturalearthdata.com/" target="_blank" rel="noreferrer">Fond : Natural Earth · 1:10m</a>
    </div>
  </div>;
}
