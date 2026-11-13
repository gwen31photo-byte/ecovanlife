import { ChevronDown } from "lucide-react";
import { useEffect, useRef, type MouseEventHandler } from "react";
import { regions } from "./itinerary-data";
import styles from "../la-grande-boucle-de-l-ouest/itinerary-map.module.css";

type Visit = { key: string; name: string; anchor: string };
export default function MobileItinerary({ visits, onNavigate }: {
  visits: Visit[]; onNavigate: MouseEventHandler<HTMLAnchorElement>;
}) {
  const nav = useRef<HTMLElement>(null);
  function closeRegions() { nav.current?.querySelectorAll("details").forEach((item) => { item.open = false; }); }
  useEffect(() => {
    closeRegions();
    window.addEventListener("pageshow", closeRegions);
    window.addEventListener("popstate", closeRegions);
    return () => { window.removeEventListener("pageshow", closeRegions); window.removeEventListener("popstate", closeRegions); };
  }, []);
  return <nav ref={nav} className={styles.mobileItinerary} aria-labelledby="mobile-itinerary-title">
    <h2 id="mobile-itinerary-title">Les étapes du voyage</h2>
    {regions.map((region) => <details key={region.name} className={styles.mobileRegion}>
      <summary><span className={styles.regionTitle}>{region.name}</span>
        <span className={styles.placeCount}>{region.keys.length} {region.keys.length === 1 ? "lieu" : "lieux"}</span>
        <ChevronDown size={18} className={styles.regionChevron} aria-hidden="true" />
      </summary>
      <ol>{visits.filter((visit) => region.keys.includes(visit.key)).map((visit) => <li key={visit.key}>
        <a href={`#${visit.anchor}`} onClick={(event) => {
          if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) closeRegions();
          onNavigate(event);
        }}><span>{visit.name}</span><span className={styles.visitChapter}>Étape 01</span></a>
      </li>)}</ol>
    </details>)}
  </nav>;
}
