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
  { key: "mont-saint-michel", name: "Mont-Saint-Michel", lon: -1.511, lat: 48.636, anchor: "etape-8", label: [275, 30, 220] },
  { key: "arromanches", name: "Arromanches", lon: -0.621, lat: 49.339, anchor: "arromanches-camping-title", label: [650, 25, 160] },
  // Coordinates identify the published sites, not parking positions.
  // Sources: Council of Europe (Airborne); OT Isigny-Omaha via Cirkwi (other sites).
  { key: "sainte-mere-eglise", name: "Sainte-Mère-Église", lon: -1.3151779636385965, lat: 49.40856880851476, anchor: "etape-9", label: [850, 80, 245] },
  { key: "maisy", name: "Batteries de Maisy", lon: -1.063024, lat: 49.3759543, anchor: "etape-9-maisy", label: [850, 135, 210] },
  { key: "pointe-du-hoc", name: "Pointe du Hoc", lon: -0.9861666, lat: 49.3939177, anchor: "etape-9-pointe-du-hoc", label: [850, 190, 180] },
  { key: "la-cambe", name: "La Cambe", lon: -1.0266476, lat: 49.3430888, anchor: "etape-9-la-cambe", label: [850, 245, 140] },
  // Étape 10 : lieux vérifiés, sans déduire les positions des EXIF.
  // ABMC : https://www2.abmc.gov/sites/default/files/2024-11/EN_Normandy_Booklet_02-2024_1.pdf
  // N 49°20.910, W 0°51.285 (degrés et minutes décimales).
  { key: "cimetiere-americain", name: "Cimetière américain", lon: -0.85475, lat: 49.3485, anchor: "etape-10-cimetiere", label: [535, 145, 245] },
  // https://www.arromanches360.fr/preparer-ma-visite/acces/
  // N 49°20′19.075″, W 0°37′4.123″.
  { key: "arromanches-360", name: "Arromanches 360", lon: -(37 / 60 + 4.123 / 3600), lat: 49 + 20 / 60 + 19.075 / 3600, anchor: "etape-10-arromanches", label: [850, 300, 220] },
  // Repère de la carte intégrée au site officiel, pas une position d’emplacement :
  // https://campingcanadianscottish.jimdofree.com/o%C3%B9-sommes-nous/
  { key: "canadian-scottish", name: "Canadian Scottish", lon: -0.478067486816, lat: 49.3364613858, anchor: "etape-10-camping", label: [850, 355, 240] },
  // Étape 11 : repères des lieux visités, jamais des emplacements de stationnement.
  // https://www.memorial-caen.fr/votre-visite/acces/
  // N 49°11′50,2″, O 0°23′02,3″.
  { key: "memorial-caen", name: "Mémorial de Caen", lon: -(23 / 60 + 2.3 / 3600), lat: 49 + 11 / 60 + 50.2 / 3600, anchor: "etape-11", label: [850, 410, 195] },
  // Centre indicatif du plan d’eau, sans déduire la position du van des photos.
  // OpenStreetMap, way 243197230 : https://mapcarta.com/fr/W243197230
  { key: "chouzy", name: "Plan d’eau de Chouzy · Valloire-sur-Cisse", lon: 1.24136, lat: 47.52123, anchor: "etape-11-chouzy", label: [810, 220, 280] },
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
  { stop: "mont-saint-michel" }, { stop: "arromanches" },
  { stop: "sainte-mere-eglise" }, { stop: "maisy" }, { stop: "pointe-du-hoc" }, { stop: "la-cambe" },
  { stop: "cimetiere-americain" }, { stop: "arromanches-360" }, { stop: "canadian-scottish" },
  { stop: "memorial-caen" }, { stop: "chouzy" },
];
export const majorStops = new Set<StopKey>(["pilat", "rochelle", "meschers", "puy", "pontorson", "mont-saint-michel", "arromanches", "sainte-mere-eglise", "maisy", "pointe-du-hoc", "la-cambe", "cimetiere-americain", "arromanches-360", "canadian-scottish"]);
export function project(lon: number, lat: number) {
  return { x: 50 + (lon + 5.5) * 110, y: 40 + (49.5 - lat) * 92 };
}

// The named parking has not been located precisely enough to add a geographic point.
export const eveningStop = { name: "Géfosse-Fontenay — plage des Veys", anchor: "etape-9-plage" } as const;
