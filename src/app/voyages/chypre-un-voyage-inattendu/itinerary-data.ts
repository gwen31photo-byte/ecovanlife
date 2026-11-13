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
