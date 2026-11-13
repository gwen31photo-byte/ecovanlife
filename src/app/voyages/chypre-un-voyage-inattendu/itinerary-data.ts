// Ajouter ici les étapes suivantes uniquement une fois leurs souvenirs racontés.
// Coordonnées Mercator précalculées : conserver les mêmes valeurs sur le serveur et
// dans le navigateur. Math.log/Math.tan peuvent varier aux derniers bits selon le moteur.
export const stops = [
  { key: "toulouse", name: "Toulouse-Blagnac · départ", longitude: 1.3678, latitude: 43.6293, x: 577.356, y: 537.4592161972568, anchor: "toulouse-title" },
  { key: "manchester-airport", name: "Aéroport de Manchester · arrivée et nuit", longitude: -2.2749, latitude: 53.3537, x: 504.502, y: 242.7329041740271, anchor: "aeroport-title" },
  { key: "manchester", name: "Manchester · promenade en soirée", longitude: -2.2309, latitude: 53.4774, x: 505.382, y: 238.58194226949675, anchor: "manchester-title" },
];
export const regions = [
  { name: "Toulouse", point: "toulouse", keys: ["toulouse"], side: "right" },
  { name: "Manchester", point: "manchester", keys: ["manchester-airport", "manchester"], side: "right" },
];
export const points = stops;
