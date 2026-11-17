import { paphosPosition } from "./cyprus-map-geography";

// Ajouter ici les étapes suivantes uniquement une fois leurs souvenirs racontés.
// Coordonnées Mercator précalculées : conserver les mêmes valeurs sur le serveur et
// dans le navigateur. Math.log/Math.tan peuvent varier aux derniers bits selon le moteur.
export const stops = [
  { key: "toulouse", name: "Toulouse-Blagnac · départ", longitude: 1.3678, latitude: 43.6293, x: 577.356, y: 537.4592161972568, chapter: "01", anchor: "toulouse-title" },
  { key: "manchester-airport", name: "Aéroport de Manchester · arrivée et nuit", longitude: -2.2749, latitude: 53.3537, x: 504.502, y: 242.7329041740271, chapter: "01", anchor: "aeroport-title" },
  { key: "manchester", name: "Manchester · promenade en soirée", longitude: -2.2309, latitude: 53.4774, x: 505.382, y: 238.58194226949675, chapter: "01", anchor: "manchester-title" },
  // Paphos : Natural Earth, ne_10m_populated_places_simple (coordonnées projetées hors exécution).
  { key: "paphos", name: "Manchester → Paphos · début de l’étape 02", longitude: 32.422457, latitude: 34.755915, x: 1198.4491400000002, y: 766.9775737516975, chapter: "02", anchor: "etape-2-title" },
];
export const regions = [
  { name: "Toulouse", point: "toulouse", keys: ["toulouse"], side: "right" },
  { name: "Manchester", point: "manchester", keys: ["manchester-airport", "manchester"], side: "right" },
  { name: "Paphos", point: "paphos", keys: ["paphos"], side: "left" },
];
export const points = stops;

// Chaînes SVG fixes : aucun recalcul de projection à l’hydratation.
// Les traits indiquent les liaisons aériennes, sans itinéraire routier local.
export const routeSegments = [
  { key: "vol-toulouse-manchester", path: "M577.356,537.4592161972568L504.502,242.7329041740271", arrow: "M577.356,537.4592161972568L540.929,390.09606018564197" },
  { key: "vol-manchester-paphos", path: "M504.502,242.7329041740271L1198.4491400000002,766.9775737516975", arrow: "M504.502,242.7329041740271L851.4755700000001,504.8552389628623" },
];

// Étapes publiées, dans l’ordre du récit. Plusieurs étapes peuvent partager un lieu.
// Ajouter ici chaque nouvelle étape avec sa date et l’ancre de son chapitre.
export type CyprusStep = {
  key: string;
  chapter: string;
  date: string;
  dateLabel: string;
  placeKey: string;
  additionalPlaceKeys?: string[];
  title: string;
  anchor: string;
};
export const cyprusSteps: CyprusStep[] = [{
  key: "etape-02",
  chapter: "02",
  date: "2026-04-23",
  dateLabel: "23 avril 2026",
  placeKey: "paphos",
  title: "Notre arrivée à Chypre et nos premières découvertes de Paphos",
  anchor: "etape-2-title",
}, {
  key: "etape-03",
  chapter: "03",
  date: "2026-04-24",
  dateLabel: "24 avril 2026",
  placeKey: "paphos",
  additionalPlaceKeys: ["cape-aspro"],
  title: "Des mosaïques de Paphos aux falaises de Cape Aspro",
  anchor: "etape-3-title",
}];
// Aucun trajet routier ou sentier précis représenté sans tracé documenté.

// Repères géographiques fixes ; plusieurs étapes peuvent référencer un même lieu.
export const cyprusPlaces = [
  { key: "paphos", name: "Paphos", position: paphosPosition, description: "Le château, le parc archéologique de Nea Paphos et les Tombeaux des Rois sont regroupés sous ce repère à l’échelle de l’île." },
  // Repère du secteur côtier, arrondi au centième : ni plage exacte, ni départ de randonnée.
  // Cape Aspro : https://www.wikidata.org/wiki/Q22991976 (GNS), recoupé avec la
  // carte de la Blue Route du conseil de Pissouri : https://www.pissouri.org.cy/en/visitors/10/touristguide_items?cat=12
  // Projection fixe de cyprus-map-geography.ts ; aucune projection à l’hydratation.
  { key: "cape-aspro", name: "Cape Aspro", longitude: 32.72, latitude: 34.64, position: { x: 201.5, y: 469.744 }, description: "Repère général du secteur côtier de Cape Aspro, près de Pissouri. Il ne désigne ni notre plage exacte ni un départ de randonnée." },
];

// Visites regroupées dans les panneaux : les trois sites de Paphos ne sont séparés
// que de quelques pixels à cette échelle. Les coordonnées identifient les lieux,
// sans déplacer leurs marqueurs pour fabriquer de l’espace ou tracer un trajet.
export const cyprusVisits = [
  {
    key: "paphos-castle", name: "Château de Paphos", stepKey: "etape-03", placeKey: "paphos", anchor: "paphos-chateau-title",
    mapLabel: "Château de Paphos",
    order: 1, period: "Le matin",
    latitude: 34.753619, longitude: 32.406937,
    source: "https://www.visitcyprus.com/discover-cyprus/culture/sites-and-monuments/pafos-paphos-castle/",
  },
  {
    key: "nea-paphos", name: "Parc archéologique de Nea Paphos", stepKey: "etape-03", placeKey: "paphos", anchor: "nea-paphos-title",
    mapLabel: "Parc archéologique",
    order: 2, period: "Le matin",
    latitude: 34.75658, longitude: 32.40478,
    source: "https://www.geonames.org/414543/nea-pafos.html",
  },
  {
    key: "tombs-of-kings", name: "Tombeaux des Rois", stepKey: "etape-03", placeKey: "paphos", anchor: "tombeaux-rois-title",
    mapLabel: "Tombeaux des Rois",
    order: 3, period: "Le matin",
    latitude: 34.775461, longitude: 32.405828,
    source: "https://apsida.cut.ac.cy/items/show/19532",
  },
  {
    key: "cape-aspro-coast", name: "Cape Aspro · secteur côtier", stepKey: "etape-03", placeKey: "cape-aspro", anchor: "cape-aspro-title",
    mapLabel: "Falaises et randonnée",
    order: 4, period: "L’après-midi",
    latitude: 34.64, longitude: 32.72,
    source: "https://www.wikidata.org/wiki/Q22991976",
  },
];

// Liaison entre les repères généraux existants : jamais un itinéraire GPS.
// Les deux vues utilisent les mêmes extrémités et la même légende.
export const cyprusTransfers = [{
  key: "paphos-cape-aspro", stepKey: "etape-03", from: "paphos", to: "cape-aspro",
  label: "Paphos → Cape Aspro · l’après-midi",
  note: "Liaison schématique entre les secteurs, sans tracé routier ni itinéraire de randonnée.",
}];

// Libellés compacts communs aux encadrés de l’île et aux rubriques mobiles.
// Réutiliser les ancres du récit et les numéros d’étapes existants.
export const cyprusPanelLinks = [
  { key: "paphos-arrival", placeKey: "paphos", label: "02 · Arrivée à Paphos", anchor: cyprusSteps.find((step) => step.key === "etape-02")!.anchor },
  ...cyprusVisits.map((visit) => {
    const step = cyprusSteps.find((item) => item.key === visit.stepKey)!;
    return { key: visit.key, placeKey: visit.placeKey, label: `${step.chapter} · ${visit.mapLabel}`, anchor: visit.anchor };
  }),
];
export const mobileRegions = [
  ...regions.filter((region) => region.point !== "paphos").map((region) => ({
    name: region.name,
    links: stops.filter((stop) => region.keys.includes(stop.key)).map((stop) => ({ key: stop.key, label: `${stop.chapter} · ${stop.name}`, anchor: stop.anchor })),
  })),
  ...cyprusPlaces.map((place) => ({ name: place.name, links: cyprusPanelLinks.filter((link) => link.placeKey === place.key) })),
];
