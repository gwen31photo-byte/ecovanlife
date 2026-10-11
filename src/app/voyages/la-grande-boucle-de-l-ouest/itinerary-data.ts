// Approximate locations, not parking positions or a road/GPS track.
// Add a place here, then append its visits below. Labels are SVG coordinates.
export const stops = [
  { key: "fonsorbes", name: "Fonsorbes · départ", lon: 1.23, lat: 43.535, anchor: "depart-title", label: [650, 598, 200] },
  { key: "sainte-bazeille", name: "Sainte-Bazeille", lon: 0.094, lat: 44.53, anchor: "sainte-bazeille-title", label: [700, 488, 155] },
  { key: "pilat", name: "Dune du Pilat", lon: -1.213, lat: 44.59, anchor: "pilat-title", label: [335, 485, 155] },
  { key: "arces", name: "Arces-sur-Gironde", lon: -0.859, lat: 45.554, anchor: "camping-title", label: [635, 418, 190] },
  { key: "chateau", name: "Château-d’Oléron", lon: -1.196, lat: 45.886, anchor: "oleron-chateau-title", label: [290, 377, 185] },
  { key: "boyardville", name: "Boyardville", lon: -1.243, lat: 45.968, anchor: "oleron-boyardville-title", label: [275, 328, 135] },
  { key: "chassiron", name: "Chassiron", lon: -1.410, lat: 46.047, anchor: "oleron-chassiron-title", label: [285, 279, 125] },
  { key: "rochelle", name: "La Rochelle", lon: -1.152, lat: 46.160, anchor: "rochelle-port-title", label: [620, 260, 145] },
  { key: "meschers", name: "Meschers-sur-Gironde", lon: -0.957, lat: 45.558, anchor: "meschers-decouverte-title", label: [300, 545, 235] },
  { key: "plage", name: "Plage Espagnole", lon: -1.25, lat: 45.76, anchor: "meschers-plage-title", label: [300, 431, 175] },
  { key: "fumee", name: "Pointe de la Fumée", lon: -1.115, lat: 46.006, anchor: "fouras-arrivee-title", label: [625, 310, 200] },
  { key: "fouras", name: "Fouras", lon: -1.094, lat: 45.987, anchor: "fouras-chateau-title", label: [645, 362, 90] },
  { key: "puy", name: "Puy du Fou", lon: -0.932, lat: 46.889, anchor: "etape-6-title", label: [615, 207, 140] },
  { key: "noyal", name: "Noyal-Châtillon", lon: -1.659, lat: 48.042, anchor: "pontorson-pause-title", label: [310, 151, 175] },
  { key: "pontorson", name: "Pontorson", lon: -1.507, lat: 48.553, anchor: "pontorson-nuit-title", label: [565, 90, 130] },
] as const;

type StopKey = (typeof stops)[number]["key"];
// Repeated visits keep the excursions and returns in chronological order.
export const visits: { stop: StopKey; anchor?: string; name?: string }[] = [
  { stop: "fonsorbes" }, { stop: "sainte-bazeille" }, { stop: "pilat" }, { stop: "arces" },
  { stop: "chateau" }, { stop: "boyardville" }, { stop: "chassiron" },
  { stop: "arces", anchor: "oleron-retour-title", name: "Arces-sur-Gironde · retour d’Oléron" },
  { stop: "rochelle" },
  { stop: "arces", anchor: "etape-4-title", name: "Arces-sur-Gironde · retour de La Rochelle" },
  { stop: "meschers" }, { stop: "plage" },
  { stop: "arces", anchor: "etape-5-title", name: "Arces-sur-Gironde · dernière nuit au camping" },
  { stop: "fumee" }, { stop: "fouras" }, { stop: "puy" }, { stop: "noyal" }, { stop: "pontorson" },
];
export const majorStops = new Set<StopKey>(["pilat", "rochelle", "meschers", "puy", "pontorson"]);
export function project(lon: number, lat: number) {
  return { x: 50 + (lon + 5.5) * 110, y: 40 + (49.5 - lat) * 92 };
}
