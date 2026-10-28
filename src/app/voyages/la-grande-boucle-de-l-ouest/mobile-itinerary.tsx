import { useEffect, useRef, type MouseEventHandler } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./itinerary-map.module.css";

type Visit = { key: string; name: string; anchor: string };

// Groups follow the existing chronological sequence, including return visits.
const regions = [
  { name: "Sud-Ouest", keys: ["fonsorbes", "sainte-bazeille", "pilat"] },
  { name: "Côte atlantique", keys: ["arces", "chateau", "boyardville", "chassiron", "rochelle", "meschers", "plage", "fumee", "fouras"] },
  { name: "Puy du Fou", keys: ["puy"] },
  { name: "Mont-Saint-Michel et environs", keys: ["noyal", "pontorson", "mont-saint-michel"] },
  { name: "Normandie", keys: ["arromanches", "sainte-mere-eglise", "maisy", "pointe-du-hoc", "la-cambe", "gefosse-soir", "gefosse-reveil", "cimetiere-americain", "arromanches-360", "canadian-scottish", "memorial-caen"] },
  { name: "Val de Loire", keys: ["chouzy", "beauval", "monthou"] },
];

// Chapter owning each destination anchor.
const chapterByAnchor: Record<string, number> = {
  "depart-title": 1, "sainte-bazeille-title": 1, "pilat-title": 1, "camping-title": 1,
  "oleron-chateau-title": 2, "oleron-boyardville-title": 2, "oleron-chassiron-title": 2, "oleron-retour-title": 2,
  "rochelle-port-title": 3,
  "etape-4-title": 4, "meschers-decouverte-title": 4, "meschers-plage-title": 4,
  "etape-5-title": 5, "fouras-arrivee-title": 5, "fouras-chateau-title": 5,
  "etape-6-title": 6, "pontorson-pause-title": 7, "pontorson-nuit-title": 7,
  "etape-8": 8, "arromanches-camping-title": 8,
  "etape-9": 9, "etape-9-maisy": 9, "etape-9-pointe-du-hoc": 9, "etape-9-la-cambe": 9, "etape-9-plage": 9,
  "etape-10": 10, "etape-10-cimetiere": 10, "etape-10-arromanches": 10, "etape-10-camping": 10,
  "etape-11": 11, "etape-11-chouzy": 11,
  "etape-12": 12, "etape-12-monthou": 12,
};

export default function MobileItinerary({ visits, onNavigate }: {
  visits: Visit[];
  onNavigate: MouseEventHandler<HTMLAnchorElement>;
}) {
  const nav = useRef<HTMLElement>(null);

  function closeRegions() {
    nav.current?.querySelectorAll("details").forEach((region) => { region.open = false; });
  }

  useEffect(() => {
    // Reset browser-restored native details on reload and history restoration.
    closeRegions();
    window.addEventListener("pageshow", closeRegions);
    window.addEventListener("popstate", closeRegions);
    return () => {
      window.removeEventListener("pageshow", closeRegions);
      window.removeEventListener("popstate", closeRegions);
    };
  }, []);

  return (
    <nav ref={nav} className={styles.mobileItinerary} aria-labelledby="mobile-itinerary-title">
      <h2 id="mobile-itinerary-title">Les étapes par région</h2>
      {regions.map((region) => {
        const entries = visits.filter((visit) => region.keys.includes(visit.key));
        // Count places once, retaining both the evening and morning at Géfosse.
        const count = new Set(entries.map((visit) => visit.key.startsWith("gefosse-") ? "gefosse" : visit.key)).size;
        return (
          <details key={region.name} className={styles.mobileRegion}>
            <summary>
              <span className={styles.regionTitle}>{region.name}</span>
              <span className={styles.placeCount}>{count} {count === 1 ? "lieu" : "lieux"}</span>
              <ChevronDown size={18} className={styles.regionChevron} aria-hidden="true" />
            </summary>
            <ol>
              {entries.map((visit, index) => (
                <li key={`${visit.anchor}-${index}`}>
                  <a href={`#${visit.anchor}`} onClick={(event) => {
                    if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) closeRegions();
                    onNavigate(event);
                  }}>
                    <span>{visit.name}</span>
                    <span className={styles.visitChapter}>Étape {String(chapterByAnchor[visit.anchor]).padStart(2, "0")}</span>
                  </a>
                </li>
              ))}
            </ol>
          </details>
        );
      })}
    </nav>
  );
}
