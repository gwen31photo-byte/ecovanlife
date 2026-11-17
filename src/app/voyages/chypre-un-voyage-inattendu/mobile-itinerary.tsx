import { ChevronDown } from "lucide-react";
import { useEffect, useRef, type MouseEventHandler } from "react";
import { mobileRegions } from "./itinerary-data";
import styles from "../la-grande-boucle-de-l-ouest/itinerary-map.module.css";
import local from "./itinerary-map.module.css";

export default function MobileItinerary({ onNavigate }: {
  onNavigate: MouseEventHandler<HTMLAnchorElement>;
}) {
  const nav = useRef<HTMLElement>(null);
  function closeRegions() { nav.current?.querySelectorAll("details").forEach((item) => { item.open = false; }); }
  useEffect(() => {
    closeRegions();
    window.addEventListener("pageshow", closeRegions);
    window.addEventListener("popstate", closeRegions);
    return () => { window.removeEventListener("pageshow", closeRegions); window.removeEventListener("popstate", closeRegions); };
  }, []);
  return <nav ref={nav} className={`${styles.mobileItinerary} ${local.mobileNavigation}`} aria-labelledby="mobile-itinerary-title">
    <h2 id="mobile-itinerary-title">Les étapes du voyage</h2>
    {mobileRegions.map((region) => <details key={region.name} className={styles.mobileRegion}>
      <summary><span className={styles.regionTitle}>{region.name}</span>
        <span className={styles.placeCount}>{region.links.length} {region.links.length === 1 ? "lien" : "liens"}</span>
        <ChevronDown size={18} className={styles.regionChevron} aria-hidden="true" />
      </summary>
      <ol>{region.links.map((link) => <li key={link.key}>
        <a href={`#${link.anchor}`} onClick={(event) => {
          if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) closeRegions();
          onNavigate(event);
        }}><span>{link.label}</span><span aria-hidden="true">↗</span></a>
      </li>)}</ol>
    </details>)}
  </nav>;
}
