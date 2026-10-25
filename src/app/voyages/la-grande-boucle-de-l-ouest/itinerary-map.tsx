"use client";

import { useEffect, useLayoutEffect, useRef, useState, type MouseEvent, type PointerEvent, type KeyboardEvent } from "react";
import { Minus, Plus, RotateCcw, X } from "lucide-react";
import MobileItinerary from "./mobile-itinerary";
import { countries } from "./trip-map-geography";
import styles from "./itinerary-map.module.css";
import { points, clusterPoints, layoutLabels, routeSegments, normandyBounds, isNormandyView, type View, type Cluster } from "./itinerary-map-layout";

import { visits, majorStops, eveningStop } from "./itinerary-data";


const sequence = visits.map((visit) => ({ ...points.find((point) => point.key === visit.stop)!, ...visit }));
// La halte non géolocalisée conserve son lien et sa place entre les jours 11 et 12.
const chronology = sequence.flatMap((stop) => stop.key === "la-cambe"
  ? [stop, { key: "gefosse-soir", ...eveningStop },
    { key: "gefosse-reveil", name: "Géfosse-Fontenay · départ du jour 12", anchor: "etape-10" }]
  : [stop]);

export default function ItineraryMap() {
  const [zoom, setZoom] = useState(1);
  const [view, setView] = useState<View>({ width: 1100, height: 660, left: 0, top: 0 });
  const [selection, setSelection] = useState<{ keys: string[]; active: string | null; name: string } | null>(null);
  const [details, setDetails] = useState<{ name: string; anchor: string; step: string; date: string }[]>([]);
  const viewport = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<SVGElement | null>(null);
  const pendingCenter = useRef<{ x: number; y: number } | null>(null);
  const drag = useRef<{ x: number; y: number; left: number; top: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const scale = view.width / 1100 * zoom;
  const groups = clusterPoints(scale);
  const labels = layoutLabels(groups, scale, view);
  const normandyInView = isNormandyView(scale, view);
  const groupForStop = new Map(groups.flatMap((group) => group.members.map((p) => [p.key, group.key] as const)));

  function readView() {
    const el = viewport.current;
    if (el && el.clientWidth > 0) setView({ width: el.clientWidth, height: el.clientHeight, left: el.scrollLeft, top: el.scrollTop });
  }

  useEffect(() => {
    const el = viewport.current;
    if (!el) return;
    const observer = new ResizeObserver(readView);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const el = viewport.current, center = pendingCenter.current;
    if (!el || !center) return;
    const nextScale = el.clientWidth / 1100 * zoom;
    el.scrollTo({ left: center.x * nextScale - el.clientWidth / 2, top: center.y * nextScale - el.clientHeight / 2, behavior: "instant" });
    pendingCenter.current = null;
    readView();
  }, [zoom]);

  function readDetails(key: string) {
    // Reuse dates and chapter numbers from the actual rendered journal.
    const entries = sequence.filter((visit) => visit.key === key).map((visit) => {
      const target = document.getElementById(visit.anchor);
      let chapter = target;
      while (chapter && !/^etape-\d+$/.test(chapter.id)) chapter = chapter.parentElement;
      const step = chapter ? `Étape ${chapter.id.slice(6).padStart(2, "0")}` : "";
      const date = Array.from(chapter?.querySelectorAll("header p") ?? []).map((p) => p.textContent ?? "").find((text) => /juillet/i.test(text)) ?? "";
      return { name: visit.name, anchor: visit.anchor, step, date };
    });
    return entries;
  }

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
    const trigger = returnFocus.current;
    if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    else viewport.current?.focus({ preventScroll: true });
  }

  function focusPanel() {
    requestAnimationFrame(() => {
      panel.current?.focus({ preventScroll: true });
      panel.current?.scrollIntoView({ block: "nearest", behavior: "instant" });
    });
  }

  function selectGroup(group: Cluster, trigger: SVGElement) {
    returnFocus.current = trigger;
    setDetails(group.members.length === 1 ? readDetails(group.members[0].key) : []);
    setSelection({ keys: group.members.map((p) => p.key), active: group.members.length === 1 ? group.members[0].key : null, name: group.name });
    focusPanel();
  }

  function changeZoom(next: number, center?: { x: number; y: number }) {
    const el = viewport.current;
    if (!el) return;
    pendingCenter.current = center ?? { x: (el.scrollLeft + el.clientWidth / 2) / scale, y: (el.scrollTop + el.clientHeight / 2) / scale };
    setZoom(Math.max(1, Math.min(16, next)));
  }

  function showNormandy() {
    const { minX, maxX, minY, maxY } = normandyBounds;
    const fittedScale = Math.min((view.width - 100) / (maxX - minX), (view.height - 110) / Math.max(1, maxY - minY));
    const next = Math.min(16, Math.max(2, fittedScale / (view.width / 1100)));
    changeZoom(next, { x: (minX + maxX) / 2, y: (minY + maxY) / 2 });
    if (Math.abs(next - zoom) < .001) {
      viewport.current?.scrollTo({ left: (minX + maxX) / 2 * scale - view.width / 2, top: (minY + maxY) / 2 * scale - view.height / 2, behavior: "instant" });
    }
  }

  function reset() {
    setSelection(null);
    pendingCenter.current = { x: 0, y: 0 };
    setZoom(1);
    viewport.current?.scrollTo({ left: 0, top: 0, behavior: "instant" });
  }

  function startPan(event: PointerEvent<HTMLDivElement>) {
    suppressClick.current = false;
    if (event.button !== 0 || (event.target as Element).closest('[role="button"]')) return;
    drag.current = { x: event.clientX, y: event.clientY, left: event.currentTarget.scrollLeft, top: event.currentTarget.scrollTop, moved: false };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function pan(event: PointerEvent<HTMLDivElement>) {
    const start = drag.current;
    if (!start) return;
    if (!start.moved && Math.hypot(event.clientX - start.x, event.clientY - start.y) < 8) return;
    start.moved = true;
    event.currentTarget.scrollLeft = start.left + start.x - event.clientX;
    event.currentTarget.scrollTop = start.top + start.y - event.clientY;
  }

  function endPan() {
    suppressClick.current = drag.current?.moved ?? false;
    drag.current = null;
  }

  function navigateMap(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    const el = event.currentTarget;
    const directions: Record<string, [number, number]> = { ArrowLeft: [-100, 0], ArrowRight: [100, 0], ArrowUp: [0, -100], ArrowDown: [0, 100] };
    const direction = directions[event.key];
    if (direction) { event.preventDefault(); el.scrollBy({ left: direction[0], top: direction[1], behavior: "instant" }); }
  }

  const selectedPoints = points.filter((p) => selection?.keys.includes(p.key));

  return (
    <div className={styles.map}>
      <div className={styles.frame} onKeyDown={(event) => { if (event.key === "Escape" && selection) { event.preventDefault(); closePanel(); } }}>
        <div className={styles.toolbar}>
          <div className={styles.controls} role="group" aria-label="Zoom de la carte">
            <button type="button" aria-label="Agrandir la carte" disabled={zoom >= 16} onClick={() => changeZoom(zoom * 2)}><Plus size={16} /></button>
            <button type="button" aria-label="Réduire la carte" disabled={zoom <= 1} onClick={() => changeZoom(zoom / 2)}><Minus size={16} /></button>
            <button type="button" aria-label="Revenir à la vue initiale" onClick={reset}><RotateCcw size={15} /></button>
          </div>
          <span className={styles.zoomStatus} aria-live="polite">{zoom === 1 ? "Vue générale" : zoom < 4 ? "Vue intermédiaire" : "Vue rapprochée"} · {zoom.toLocaleString("fr-FR", { maximumFractionDigits: 1 })}×</span>
          <button type="button" className={styles.regionButton} onClick={normandyInView ? reset : showNormandy}>{normandyInView ? "Vue générale" : "Voir la Normandie"}</button>
        </div>
        <div ref={viewport} className={styles.viewport} aria-label="Carte du voyage, déplaçable avec les flèches du clavier ou par glissement" tabIndex={0}
          onScroll={readView} onKeyDown={navigateMap} onPointerDown={startPan} onPointerMove={pan} onPointerUp={endPan} onPointerCancel={endPan}
          onClickCapture={(event) => { if (suppressClick.current) { event.preventDefault(); event.stopPropagation(); suppressClick.current = false; } }}>
          <div className={styles.canvas} style={{ width: `${zoom * 100}%` }}>
            <svg viewBox="0 0 1100 660" className={styles.svg} role="group" aria-labelledby="ouest-map-title ouest-map-description">
              <title id="ouest-map-title">Les dix premières étapes de la Grande Boucle de l’Ouest</title>
              <desc id="ouest-map-description">Le tracé et ses flèches relient les lieux visités. Les repères proches sont regroupés ; zoomez ou sélectionnez un groupe pour choisir un lieu. Les noms apparaissent selon la place disponible. Géfosse-Fontenay reste dans la liste chronologique sans coordonnées. Le tracé indicatif ne reproduit pas les routes exactes.</desc>
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
                {routeSegments.map((segment) => {
                  const collapsed = segment.from !== segment.to && groupForStop.get(segment.from) === groupForStop.get(segment.to);
                  return <g key={segment.key} opacity={collapsed ? .12 : 1} data-route-detail={collapsed ? "muted" : "full"}>
                    <path d={segment.path} />
                    {segment.arrow && <path d={segment.arrow} markerEnd="url(#ouest-map-arrow)" />}
                  </g>;
                })}
              </g>
              {groups.map((group) => {
                const grouped = group.members.length > 1;
                const major = grouped || majorStops.has(group.members[0].key);
                const visible = group.x * scale >= view.left - 30 && group.x * scale <= view.left + view.width + 30 && group.y * scale >= view.top - 30 && group.y * scale <= view.top + view.height + 30;
                return <g key={group.key} role="button" tabIndex={visible ? 0 : -1}
                  className={`${styles.stop}${major ? ` ${styles.majorStop}` : ""}`}
                  aria-label={grouped ? `${group.name} : choisir parmi ${group.members.length} lieux` : `${group.name} : ouvrir la fiche`}
                  aria-controls="ouest-place-panel" aria-expanded={selection?.keys.join("/") === group.members.map((p) => p.key).join("/")}
                  data-members={group.members.map((p) => p.key).join(" ")} data-group-size={group.members.length}
                  onClick={(event) => selectGroup(group, event.currentTarget)}
                  onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); selectGroup(group, event.currentTarget); } }}>
                  <title>{group.name}</title>
                  <circle className={styles.hitTarget} cx={group.x} cy={group.y} r={22 / scale} />
                  <circle className={styles.dot} cx={group.x} cy={group.y} r={(grouped ? 14 : major ? 7 : 5) / scale} strokeWidth={2 / scale} />
                  {grouped && <text className={styles.clusterCount} x={group.x} y={group.y} fontSize={12 / scale} dy={4 / scale} textAnchor="middle">{group.members.length}</text>}
                </g>;
              })}
              <g aria-hidden="true" className={styles.labels}>
                {labels.map((label) => <g key={label.key} data-label={label.text}>
                  {label.crossings > 0 && <rect className={styles.labelBackdrop} x={(label.box.x + view.left) / scale} y={(label.box.y + view.top) / scale}
                    width={label.box.width / scale} height={label.box.height / scale} rx={4 / scale} />}
                  <text x={label.x} y={label.y} fontSize={14 / scale} strokeWidth={5 / scale}>{label.text}</text>
                </g>)}
              </g>
            </svg>
          </div>
        </div>
        {selection && <div id="ouest-place-panel" ref={panel} tabIndex={-1} role="region" aria-labelledby="ouest-place-title" className={styles.panel}>
          <div className={styles.panelHeader}>
            <h3 id="ouest-place-title">{selection.active ? points.find((p) => p.key === selection.active)?.name : selection.name}</h3>
            <button type="button" aria-label="Fermer la fiche" onClick={closePanel}><X size={18} /></button>
          </div>
          {!selection.active ? <>
            <p>{selectedPoints.length} lieux proches · choisissez un lieu ou agrandissez la zone.</p>
            <button type="button" className={styles.regionButton} disabled={zoom >= 16} onClick={() => changeZoom(zoom * 2, {
              x: selectedPoints.reduce((sum, p) => sum + p.x, 0) / selectedPoints.length,
              y: selectedPoints.reduce((sum, p) => sum + p.y, 0) / selectedPoints.length,
            })}>Agrandir cette zone</button>
            <ul className={styles.placeList}>{selectedPoints.map((point) => <li key={point.key}>
              <button type="button" onClick={() => { setDetails(readDetails(point.key)); setSelection({ ...selection, active: point.key }); focusPanel(); }}>{point.name}</button>
            </li>)}</ul>
          </> : <>
            {selection.keys.length > 1 && <button type="button" className={styles.backButton} onClick={() => { setSelection({ ...selection, active: null }); focusPanel(); }}>← Tous les lieux du groupe</button>}
            <ul className={styles.detailList}>{details.map((entry, index) => <li key={`${entry.anchor}-${index}`}>
              <p>{entry.step}{entry.date && ` · ${entry.date}`}</p>
              {details.length > 1 && <p>{entry.name}</p>}
              <a href={`#${entry.anchor}`} onClick={jumpToStep}>Lire cette étape<span className={styles.srOnly}> : {entry.name}, {entry.step}</span> →</a>
            </li>)}</ul>
          </>}
        </div>}
      </div>
      <div className={styles.caption}>
        <p>De Fonsorbes au camping Canadian Scottish. Tracé indicatif entre les étapes.</p>
        <p>Choisissez un repère pour ouvrir sa fiche. Les groupes se séparent en zoomant.</p>
        <a href="https://www.naturalearthdata.com/" className={styles.credit} target="_blank" rel="noreferrer">Fond : Natural Earth</a>
      </div>
      <details className={styles.itinerary} open>
        <summary>Les étapes dans l’ordre du voyage</summary>
        <nav aria-label="Itinéraire du voyage"><ol>
          {chronology.map((stop, index) => <li key={`${index}-${stop.key}`}>
            <a href={`#${stop.anchor}`} onClick={jumpToStep}>{stop.name}</a>
          </li>)}
        </ol></nav>
        <p className={styles.itineraryNote}>Géfosse-Fontenay — plage des Veys : halte conservée dans le récit, sans point géolocalisé.</p>
      </details>
      <MobileItinerary visits={chronology} onNavigate={jumpToStep} />
    </div>
  );
}
