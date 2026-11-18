export type Fuel = "diesel" | "e10" | "sp98" | "e85";
export type Station = "gd" | "total";

export type Device = {
  id: string;
  label: string;
  detail: string;
  watts: number;
  hours: number;
  defaultOn: boolean;
  fridge?: boolean;
};

export const devices: Device[] = [
  { id: "frontale", label: "Frontale LED", detail: "3 W × 3 h → 9 Wh", watts: 3, hours: 3, defaultOn: true },
  { id: "telephone", label: "Téléphone (une charge)", detail: "10 W × 1,5 h → 15 Wh", watts: 10, hours: 1.5, defaultOn: true },
  { id: "lampe", label: "Lampe de bivouac LED", detail: "5 W × 4 h → 20 Wh", watts: 5, hours: 4, defaultOn: false },
  { id: "ordinateur", label: "Ordinateur portable", detail: "45 W × 3 h → 135 Wh", watts: 45, hours: 3, defaultOn: false },
  { id: "glaciere", label: "Glacière à compression 12 V", detail: "~40 W × 8 h équiv. → 320 Wh", watts: 40, hours: 8, defaultOn: false, fridge: true },
  { id: "ventilateur", label: "Ventilateur 12 V", detail: "8 W × 6 h → 48 Wh", watts: 8, hours: 6, defaultOn: false },
  { id: "pompe", label: "Pompe à eau", detail: "30 W × 0,3 h → 9 Wh", watts: 30, hours: 0.3, defaultOn: false },
  { id: "box", label: "Box / routeur", detail: "12 W × 8 h → 96 Wh", watts: 12, hours: 8, defaultOn: false },
];

export type Vehicle = {
  id: string;
  label: string;
  litersPer100: number;
  fuel: Fuel;
  hint: string;
};

export const vehicleGroups: { label: string; vehicles: Vehicle[] }[] = [
  {
    label: "Motos",
    vehicles: [
      { id: "scooter-125", label: "Scooter / 125 cm³ · 3,2 L/100", litersPer100: 3.2, fuel: "e10", hint: "Petit cube : 3 L/100 si tu ne tires pas dessus." },
      { id: "moto-roadster", label: "Roadster / trail 600–900 · 5,0 L/100", litersPer100: 5, fuel: "e10", hint: "Cinq litres, jusqu’à ce que l’autoroute s’invite." },
      { id: "moto-gt", label: "Gros trail / GT 1200+ · 6,5 L/100", litersPer100: 6.5, fuel: "e10", hint: "Le vent et les valises se paient au litre." },
    ],
  },
  {
    label: "Voitures",
    vehicles: [
      { id: "citadine-e10", label: "Citadine essence · 6,0 L/100", litersPer100: 6, fuel: "e10", hint: "Ville et nationale. L’autoroute rallonge la note." },
      { id: "citadine-diesel", label: "Citadine diesel · 4,5 L/100", litersPer100: 4.5, fuel: "diesel", hint: "Sobre sur route. Moins vrai en ville froide." },
      { id: "compacte-e10", label: "Compacte essence (berline courte) · 7,0 L/100", litersPer100: 7, fuel: "e10", hint: "Golf, Mégane, Focus : 7 L/100 en ordre de grandeur." },
      { id: "compacte-diesel", label: "Compacte diesel · 5,2 L/100", litersPer100: 5.2, fuel: "diesel", hint: "Le diesel compact tient encore l’étape." },
      { id: "berline-e10", label: "Berline essence · 8,0 L/100", litersPer100: 8, fuel: "e10", hint: "Plus de caisse, plus d’air, plus de litre." },
      { id: "berline-diesel", label: "Berline diesel · 5,8 L/100", litersPer100: 5.8, fuel: "diesel", hint: "Longue distance : le diesel reste le moins cher au kilomètre." },
      { id: "break-e10", label: "Break essence · 8,2 L/100", litersPer100: 8.2, fuel: "e10", hint: "Le coffre chargé se voit à la pompe." },
      { id: "break-diesel", label: "Break diesel · 6,0 L/100", litersPer100: 6, fuel: "diesel", hint: "Famille et bagages, sans passer au fourgon." },
      { id: "suv-compact-e10", label: "SUV compact essence · 8,5 L/100", litersPer100: 8.5, fuel: "e10", hint: "La hauteur se paie : ce n’est plus une compacte." },
      { id: "suv-compact-diesel", label: "SUV compact diesel · 6,5 L/100", litersPer100: 6.5, fuel: "diesel", hint: "3008, Tucson, Sportage : 6 à 7 L/100 hors bourrasque." },
      { id: "suv-4x4-e10", label: "SUV / 4×4 essence · 11,0 L/100", litersPer100: 11, fuel: "e10", hint: "Pneus, garde au sol, Cx : onze litres sans forcer." },
      { id: "suv-4x4-diesel", label: "SUV / 4×4 diesel · 8,5 L/100", litersPer100: 8.5, fuel: "diesel", hint: "Piste ou autoroute chargée : vise plutôt 9." },
      { id: "monospace-diesel", label: "Monospace diesel · 7,0 L/100", litersPer100: 7, fuel: "diesel", hint: "Sept places, un coffre, pas encore un van." },
    ],
  },
  {
    label: "Pick-up",
    vehicles: [
      { id: "pickup", label: "Pick-up double cabine · 10,0 L/100", litersPer100: 10, fuel: "diesel", hint: "Amarok, Hilux, Ranger : vide, déjà 10 L/100." },
      { id: "pickup-cellule", label: "Pick-up + cellule / capucine · 12,5 L/100", litersPer100: 12.5, fuel: "diesel", hint: "La cellule pèse et prend le vent. Ce n’est plus un pick-up nu." },
    ],
  },
  {
    label: "Fourgons",
    vehicles: [
      { id: "fourgonnette", label: "Fourgonnette (Kangoo, Berlingo) · 6,5 L/100", litersPer100: 6.5, fuel: "diesel", hint: "Petit volume, petite conso. Le couchage, c’est un lit de camp." },
      { id: "fourgon-l1", label: "Fourgon compact L1 (Trafic, Transporter) · 8,0 L/100", litersPer100: 8, fuel: "diesel", hint: "Le format van le plus sobre, tant que le toit reste bas." },
      { id: "diesel-recent", label: "Fourgon diesel récent aménagé · 8,5 L/100", litersPer100: 8.5, fuel: "diesel", hint: "Péage, aire, détour : à ajouter dans les frais annexes." },
      { id: "fourgon-l2", label: "Fourgon L2H2 (T5/T6, Ducato court) · 9,0 L/100", litersPer100: 9, fuel: "diesel", hint: "Toit moyen, deux-trois mètres de vie : 9 L/100 tient." },
      { id: "t4-sp95", label: "VW T4 essence SP95 · 11,0 L/100", litersPer100: 11, fuel: "e10", hint: "T4 essence : plus soif qu’un TDi, moins qu’un aircooled." },
      { id: "t4-e85", label: "VW T4 éthanol E85 · 14,5 L/100", litersPer100: 14.5, fuel: "e85", hint: "Volume plus haut qu’au SP95 ; comparer au prix réel de la pompe." },
      { id: "fourgon-l3", label: "Fourgon long L3 (Ducato, Sprinter) · 10,5 L/100", litersPer100: 10.5, fuel: "diesel", hint: "La longueur prend l’air. Chargé, vise 11." },
      { id: "fourgon-l4", label: "Fourgon extra-long L4 / toit haut · 11,5 L/100", litersPer100: 11.5, fuel: "diesel", hint: "Bus de chantier version vie : le Cx n’est plus un argument." },
      { id: "combi-essence", label: "Combi vintage essence (T1, T2, T3 aircooled, T4) (SP95) · 12,0 L/100", litersPer100: 12, fuel: "e10", hint: "Aircooled ou T4 essence : 12 L/100 en ordre de grandeur, pas une fiche constructeur." },
      { id: "combi-diesel", label: "Van / Combi vintage (vieux diesel) · 10,0 L/100", litersPer100: 10, fuel: "diesel", hint: "Vieux diesel : moins de volume qu’un essence, plus de risque au filtre à gasoil." },
    ],
  },
  {
    label: "Camping-cars",
    vehicles: [
      { id: "van-amenage", label: "Van aménagé / fourgon camping-car · 9,0 L/100", litersPer100: 9, fuel: "diesel", hint: "Un fourgon avec fenêtres et isolation. Pas encore un profilé." },
      { id: "profile-petit", label: "Petit profilé (~6 m) · 10,5 L/100", litersPer100: 10.5, fuel: "diesel", hint: "Cabine de série, cellule basse. Le plus sobre des vrais camping-cars." },
      { id: "profile-moyen", label: "Profilé 7 m · 11,5 L/100", litersPer100: 11.5, fuel: "diesel", hint: "Lit pavillon, soute, couple. L’autoroute le fait boire." },
      { id: "capucine", label: "Capucine familiale · 12,5 L/100", litersPer100: 12.5, fuel: "diesel", hint: "Le lit au-dessus de la cabine, c’est un mur dans le vent." },
      { id: "integral-7m", label: "Intégral ~7 m · 13,5 L/100", litersPer100: 13.5, fuel: "diesel", hint: "Cabine intégrée, plus lourd, plus large. 13 à 14 L/100." },
      { id: "integral-long", label: "Intégral long / AL-KO (~8 m) · 15,5 L/100", litersPer100: 15.5, fuel: "diesel", hint: "Maison roulante. La conso suit le PTAC, pas la brochure." },
    ],
  },
  {
    label: "Poids lourds",
    vehicles: [
      { id: "porteur-35", label: "Petit porteur 3,5 t (caisse, food-truck) · 14,0 L/100", litersPer100: 14, fuel: "diesel", hint: "Même permis B, plus de face. 14 L à vide chargé." },
      { id: "porteur-75", label: "Porteur 7,5 t · 18,0 L/100", litersPer100: 18, fuel: "diesel", hint: "Permis C1. Atelier, cheval, stock : 18 L/100 tient." },
      { id: "porteur-12t", label: "Porteur 12 t · 22,0 L/100", litersPer100: 22, fuel: "diesel", hint: "Déjà un vrai camion. Le relief se voit au réservoir." },
      { id: "porteur-19t", label: "Porteur 19 t · 26,0 L/100", litersPer100: 26, fuel: "diesel", hint: "Chantier, déménagement, convoi. Vingt-six litres, sans forcer." },
      { id: "semi-40t", label: "Semi-remorque 40 t · 33,0 L/100", litersPer100: 33, fuel: "diesel", hint: "Tracteur + remorque. 30 à 35 L/100 selon le vent et la pente." },
    ],
  },
  {
    label: "Bus",
    vehicles: [
      { id: "minibus-9", label: "Minibus 9 places · 10,0 L/100", litersPer100: 10, fuel: "diesel", hint: "Trafic, Sprinter Combi : un fourgon à vitres." },
      { id: "minibus-20", label: "Minibus 16–22 places · 16,0 L/100", litersPer100: 16, fuel: "diesel", hint: "Navette, asso, scolaire court. Plus haut, plus lourd." },
      { id: "midibus", label: "Midibus / scolaire · 22,0 L/100", litersPer100: 22, fuel: "diesel", hint: "Car d’une vingtaine de places. Ce n’est plus un van." },
      { id: "autocar-12", label: "Autocar 12 m · 30,0 L/100", litersPer100: 30, fuel: "diesel", hint: "Grand tourisme. Trente litres, et encore selon le relief." },
    ],
  },
  {
    label: "Sans moteur",
    vehicles: [
      { id: "velo", label: "Vélo + train / 0 L", litersPer100: 0, fuel: "e10", hint: "Pas de litre. Le coût, c’est le billet — et les frais annexes si tu en mets." },
    ],
  },
];

export const vehicles: Vehicle[] = vehicleGroups.flatMap((group) => group.vehicles);

export const fuelLabels: Record<Fuel, string> = {
  diesel: "Diesel",
  e10: "SP95-E10",
  sp98: "SP98",
  e85: "Éthanol E85",
};

export const stationLabels: Record<Station, string> = {
  gd: "Grande distribution",
  total: "Total",
};

/** Prix €/L au 5 novembre 2026. */
export const fuelPrices: Record<Fuel, Record<Station, number>> = {
  diesel: { gd: 2.18, total: 2.25 },
  e10: { gd: 2.05, total: 1.99 },
  sp98: { gd: 2.16, total: 2.1 },
  e85: { gd: 0.88, total: 0.91 },
};

export const solarCities = [
  { id: "lille", label: "Lille · Nord" },
  { id: "paris", label: "Paris · Bassin parisien" },
  { id: "lyon", label: "Lyon · Centre-Est" },
  { id: "toulouse", label: "Toulouse · Sud-Ouest" },
  { id: "marseille", label: "Marseille · Méditerranée" },
  { id: "ajaccio", label: "Ajaccio · Corse" },
] as const;

export type SolarCity = (typeof solarCities)[number]["id"];

const peakSunHours: Record<SolarCity, number[]> = {
  lille: [0.75, 1.35, 2.4, 3.7, 4.7, 5.1, 5.0, 4.2, 2.9, 1.7, 0.85, 0.55],
  paris: [0.9, 1.55, 2.7, 3.95, 4.95, 5.4, 5.35, 4.55, 3.2, 1.9, 1.0, 0.7],
  lyon: [1.2, 1.9, 3.15, 4.4, 5.4, 6.0, 6.1, 5.2, 3.8, 2.3, 1.3, 0.95],
  toulouse: [1.45, 2.2, 3.45, 4.7, 5.7, 6.3, 6.4, 5.5, 4.1, 2.55, 1.5, 1.1],
  marseille: [1.85, 2.65, 3.95, 5.2, 6.3, 7.1, 7.25, 6.35, 4.85, 3.15, 2.0, 1.5],
  ajaccio: [1.7, 2.5, 3.8, 5.05, 6.15, 6.95, 7.1, 6.2, 4.7, 3.0, 1.85, 1.4],
};

export const solarMonths = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const mountFactors = {
  flat: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  tilt: [1.28, 1.22, 1.12, 1.04, 0.98, 0.95, 0.95, 0.98, 1.08, 1.18, 1.25, 1.3],
  portable: [1.5, 1.4, 1.28, 1.18, 1.12, 1.1, 1.1, 1.14, 1.25, 1.35, 1.45, 1.55],
};

const temperatureFactors = [0.97, 0.97, 0.94, 0.93, 0.9, 0.88, 0.87, 0.88, 0.92, 0.94, 0.96, 0.97];

export const panelPresets = [110, 180, 200, 300, 400];

export const dayMonths = [
  { label: "Janvier · ~17:20", sunset: "17:20" },
  { label: "Février · ~18:10", sunset: "18:10" },
  { label: "Mars · ~19:00", sunset: "19:00" },
  { label: "Avril · ~20:30", sunset: "20:30" },
  { label: "Mai · ~21:20", sunset: "21:20" },
  { label: "Juin · ~21:50", sunset: "21:50" },
  { label: "Juillet · ~21:35", sunset: "21:35" },
  { label: "Août · ~20:50", sunset: "20:50" },
  { label: "Septembre · ~19:50", sunset: "19:50" },
  { label: "Octobre · ~18:50", sunset: "18:50" },
  { label: "Novembre · ~17:15", sunset: "17:15" },
  { label: "Décembre · ~16:55", sunset: "16:55" },
];

export function parseAmount(value: string, fallback = 0): number {
  const n = parseFloat(String(value).replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

export function formatMeasure(value: number, unit: string): string {
  if (!Number.isFinite(value)) return "—";
  const rounded = Math.abs(value) >= 100 ? Math.round(value) : Math.round(value * 10) / 10;
  return `${String(rounded).replace(".", ",")} ${unit}`;
}

export function formatEuro(value: number): string {
  return value.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
}

export function formatEuroPerLiter(value: number): string {
  return value.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatLiters(value: number): string {
  return `${value.toLocaleString("fr-FR", { maximumFractionDigits: 1 })} L`;
}

export function hmToMinutes(value: string): number {
  const [hours, minutes] = (value || "00:00").split(":");
  return (parseInt(hours, 10) || 0) * 60 + (parseInt(minutes, 10) || 0);
}

export function minutesToHm(total: number): string {
  const wrapped = ((total % 1440) + 1440) % 1440;
  const hours = Math.floor(wrapped / 60);
  const minutes = wrapped % 60;
  return `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
}

export function computeWatts(input: {
  selected: Record<string, boolean>;
  extraWatts: number;
  extraHours: number;
  days: number;
  sunHours: number;
  heatingWh?: number;
}) {
  let dailyWh = 0;
  let fridgeOn = false;
  for (const device of devices) {
    if (!input.selected[device.id]) continue;
    dailyWh += device.watts * device.hours;
    if (device.fridge) fridgeOn = true;
  }
  dailyWh += input.extraWatts * input.extraHours;
  if (input.heatingWh && input.heatingWh > 0) dailyWh += input.heatingWh;
  const days = Math.max(input.days, 1);
  const sunHours = Math.max(input.sunHours, 0.1);
  const batteryWh = dailyWh * days * 1.3;
  const panelWc = dailyWh / sunHours / 0.7;
  let note = "Marge × 1,3 sur la batterie. Panneau = conso ÷ soleil ÷ 0,7.";
  if (!dailyWh) note = "Cochez au moins un appareil.";
  else if (fridgeOn && dailyWh < 400) {
    note = "La glacière écrase le reste. Questionnez-la avant d’acheter un plus gros panneau.";
  }
  if (input.heatingWh && input.heatingWh > 0) {
    note += ` Chauffage inclus : ${formatMeasure(input.heatingWh, "Wh")}.`;
  }
  return {
    dailyWh,
    batteryWh,
    ampHours: batteryWh / 12,
    panelWc,
    note,
    wiring: wiring(dailyWh, batteryWh),
  };
}

export function wiring(dailyWh: number, batteryWh: number) {
  const eveningAmps = dailyWh / (4 * 12);
  const c20 = batteryWh / (12 * 20);
  const peak = Math.max(eveningAmps, c20) * 2.4;
  if (!Number.isFinite(peak) || peak <= 0) return { cable: "—", fuse: "—" };
  if (peak < 35) return { cable: "6 mm²", fuse: "40 A" };
  if (peak < 65) return { cable: "10 mm²", fuse: "80 A" };
  if (peak < 105) return { cable: "16 mm²", fuse: "125 A" };
  return { cable: "25–35 mm²", fuse: "150–200 A" };
}

export function computeSolar(input: {
  city: SolarCity;
  month: number;
  watts: number;
  mount: keyof typeof mountFactors;
  shade: "none" | "van" | "trees";
  regulator: "mppt" | "pwm";
  consumptionWh: number;
}) {
  const monthIndex = Math.max(1, Math.min(12, Math.round(input.month))) - 1;
  const city = peakSunHours[input.city] ? input.city : "lyon";
  const shade = { none: 0.98, van: 0.82, trees: 0.42 }[input.shade] ?? 0.82;
  const regulator = { mppt: 0.94, pwm: 0.74 }[input.regulator] ?? 0.94;
  const watts = Math.max(input.watts, 0);
  const daily =
    watts *
    peakSunHours[city][monthIndex] *
    mountFactors[input.mount][monthIndex] *
    shade *
    regulator *
    temperatureFactors[monthIndex] *
    0.9;
  const daysToFill = daily > 1 ? (80 * 12.8) / daily : 0;
  let fill = "—";
  if (daysToFill) {
    if (daysToFill > 10) fill = "> 10 j";
    else if (daysToFill < 1) fill = `${String(Math.round(daysToFill * 10) / 10).replace(".", ",")} j`;
    else fill = formatMeasure(daysToFill, "j");
  }
  const monthName = solarMonths[monthIndex].toLocaleLowerCase("fr-FR");
  let verdict = "Indiquez la puissance STC du panneau.";
  if (watts > 0 && daily < 80) {
    verdict = `Téléphone et frontale, pas plus. En ${monthName}, l’alternateur (ou une halte) n’est pas optionnel.`;
  } else if (watts > 0 && daily < 200) {
    verdict = "Éclairage, téléphone, un peu d’ordi. La glacière à compression ne tient pas sur ce mois-là.";
  } else if (watts > 0 && daily < 400) {
    verdict = "Glacière possible les jours clairs, avec MPPT et peu d’ombre. Un jour voilé, ça plonge.";
  } else if (watts > 0) {
    verdict = "Un usage van sobre tient ce mois-ci. Décembre reste le juge, pas juillet.";
  }
  if (watts > 0 && daily > 0 && input.consumptionWh > 0) {
    if (daily < input.consumptionWh * 0.7) verdict += " La conso cochée dans Watts dépasse la production de ce mois.";
    else if (daily >= input.consumptionWh) verdict += " La production de ce mois couvre la conso cochée dans Watts.";
    else verdict += " Juste : production et conso Watts sont du même ordre.";
  }
  if (input.regulator === "pwm" && daily > 0) {
    verdict += " PWM : vous laissez ~20 % sur le tapis par rapport à un MPPT.";
  }
  return { daily, low: daily * 0.55, high: daily * 1.28, ampHours: daily / 12.8, fill, verdict };
}

export function computeWater(people: number, days: number, litersPerPerson: number, tank: number) {
  const need = people * days * litersPerPerson;
  const left = tank - need;
  let note = "Assez pour l’étape, si personne ne « juste une douche ».";
  if (left < 0) note = "La cuve ne tient pas l’étape.";
  else if (left < 15) note = "Fragile. Un jour de plus, et c’est sec.";
  return { need, left, note };
}

export function findVehicle(id: string): Vehicle {
  return vehicles.find((vehicle) => vehicle.id === id) ?? vehicles.find((vehicle) => vehicle.id === "t4-e85")!;
}

export function fuelPrice(fuel: Fuel, station: Station): number {
  return (fuelPrices[fuel] ?? fuelPrices.e85)[station] ?? fuelPrices.e85.gd;
}

export function computeFuel(input: {
  vehicleId: string;
  kilometers: number;
  fuel: Fuel;
  station: Station;
  tolls: number;
  lodging: number;
  detour: number;
  misc: number;
}) {
  const vehicle = findVehicle(input.vehicleId);
  const kilometers = input.kilometers > 0 ? input.kilometers : 0;
  const price = fuelPrice(input.fuel, input.station);
  const liters = (kilometers * vehicle.litersPer100) / 100;
  const fuelCost = liters * price;
  const extras =
    (input.tolls > 0 ? input.tolls : 0) +
    (input.lodging > 0 ? input.lodging : 0) +
    (input.detour > 0 ? input.detour : 0) +
    (input.misc > 0 ? input.misc : 0);
  return { vehicle, liters, price, fuelCost, extras, total: fuelCost + extras };
}

export function fuelSummary(
  result: ReturnType<typeof computeFuel>,
  kilometers: number,
  fuel: Fuel,
  station: Station,
): string {
  const { vehicle, liters, price, fuelCost, extras, total } = result;
  const priceLine =
    vehicle.litersPer100 === 0
      ? "Pas de litre. Le coût, c’est le billet."
      : `${fuelLabels[fuel]} · ${stationLabels[station]} · ${formatEuroPerLiter(price)} / L`;
  return [
    "Ce que coûte vraiment l’étape — EcoVanLife",
    `${vehicle.label.split(" · ")[0]} · ${String(vehicle.litersPer100).replace(".", ",")} L/100`,
    `${kilometers} km`,
    priceLine,
    `Carburant : ${formatLiters(liters)}`,
    `Coût pompe : ${formatEuro(fuelCost)}`,
    extras ? `Frais annexes : ${formatEuro(extras)}` : "",
    `Total étape : ${formatEuro(total)}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export function computeWeight(input: {
  payload: number;
  people: number;
  kilosPerPerson: number;
  water: number;
  kit: number;
  bikes: number;
}) {
  const used = input.people * input.kilosPerPerson + input.water + input.kit + input.bikes;
  const left = input.payload - used;
  let note = "Encore de la marge, si le chiffre de charge utile est le vrai.";
  if (left < 0) note = "Vous êtes au-dessus. Sortir de l’eau, un vélo, ou du kit.";
  else if (left < 80) note = "Juste. Un plein d’eau ou deux sacs et c’est rouge.";
  return { used, left, note };
}

export function computeDay(sunset: string, departure: string, driveHours: number, marginMinutes: number) {
  const arrival = minutesToHm(hmToMinutes(departure) + driveHours * 60);
  const latest = minutesToHm(hmToMinutes(sunset) - marginMinutes);
  const late = hmToMinutes(arrival) > hmToMinutes(latest);
  const note = late
    ? "Vous arrivez dans le noir, ou à le chercher. Couper l’étape, ou partir plus tôt."
    : `Coucher vers ${sunset}. La marge, c’est le parking.`;
  return { arrival, latest, late, note };
}

export type HeatVehicle = "fourgonnette" | "l1h1" | "l2h2" | "l3h2" | "profile";
export type HeatInsulation = "none" | "light" | "good";
export type HeatSource = "diesel" | "gas" | "electric12" | "electric230";
export type GasBottle = "butane13" | "propane13" | "propane10" | "other";

/**
 * Ordres de grandeur pour un van stationné.
 * Besoin (W) = déperdition (W/°C) × (T intérieure − T extérieure).
 * L’énergie sort ensuite du rendement de l’appareil, pas de sa puissance affichée.
 */
export const HEAT_CONFIG = {
  lossWPerC: {
    fourgonnette: { none: 45, light: 25, good: 15 },
    l1h1: { none: 60, light: 35, good: 20 },
    l2h2: { none: 85, light: 50, good: 28 },
    l3h2: { none: 105, light: 60, good: 35 },
    profile: { none: 130, light: 75, good: 45 },
  },
  heaters: {
    diesel: { maxW: 2000, efficiency: 0.85, fanW: 15, startWh: 30, starts: 1, converterLoss: 0 },
    /** Plafond : le haut de la plage Truma 2–4 kW. */
    gas: { maxW: 4000, efficiency: 0.9, fanW: 5, startWh: 0, starts: 0, converterLoss: 0 },
    /** Pas de plafond indiqué : le convecteur est supposé suivre le besoin. */
    electric12: { maxW: Number.POSITIVE_INFINITY, efficiency: 1, fanW: 0, startWh: 0, starts: 0, converterLoss: 0 },
    electric230: { maxW: Number.POSITIVE_INFINITY, efficiency: 1, fanW: 0, startWh: 0, starts: 0, converterLoss: 0.1 },
  },
  dieselKwhPerLiter: 10,
  gasKwhPerKg: 12.8,
  stoveKw: 1.5,
  butaneLimitC: 2,
  batteryShareAlert: 0.5,
  bottlesKg: { butane13: 13, propane13: 13, propane10: 10 },
} as const;

const heatInsulationLabel: Record<HeatInsulation, string> = {
  none: "Sans isolation",
  light: "Isolation légère",
  good: "Bonne isolation",
};

const heatFuelName: Record<GasBottle, string> = {
  butane13: "butane",
  propane13: "propane",
  propane10: "propane",
  other: "gaz",
};

function roundStep(value: number, step: number): number {
  if (!Number.isFinite(value)) return value;
  return Math.round(value / step) * step;
}

function formatGrouped(value: number, digits: number): string {
  return value.toLocaleString("fr-FR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function formatNights(value: number): string {
  if (!Number.isFinite(value)) return "—";
  const rounded = roundStep(value, 0.5);
  const text = Number.isInteger(rounded) ? formatGrouped(rounded, 0) : formatGrouped(rounded, 1);
  return `${text} ${rounded < 2 ? "nuit" : "nuits"}`;
}

export function computeHeat(input: {
  outdoorC: number;
  indoorC: number;
  vehicle: HeatVehicle;
  insulation: HeatInsulation;
  source: HeatSource;
  hours: number;
  cooking: boolean;
  cookingMinutes: number;
  bottle: GasBottle;
  otherKg: number;
  dieselLiters: number;
  batteryCapacityWh: number;
  dieselPrice: number;
  bottlePrice: number;
}) {
  const vehicle = HEAT_CONFIG.lossWPerC[input.vehicle] ?? HEAT_CONFIG.lossWPerC.l2h2;
  const insulation = vehicle[input.insulation] ? input.insulation : "light";
  const loss = vehicle[insulation];
  const delta = input.indoorC - input.outdoorC;
  const needW = delta > 0 ? loss * delta : 0;
  const heater = HEAT_CONFIG.heaters[input.source] ?? HEAT_CONFIG.heaters.diesel;
  const calledW = Math.min(needW, heater.maxW);
  const undersized = needW > heater.maxW;
  const hours = Math.min(Math.max(input.hours, 0), 24);
  const heating = needW > 0 && hours > 0;
  const thermalWh = calledW * hours;
  const fuelWh = heater.efficiency > 0 ? thermalWh / heater.efficiency : thermalWh;
  let dieselLitersUsed = 0;
  let gasKg = 0;
  let batteryWh = heating ? heater.fanW * hours + heater.startWh * heater.starts : 0;
  if (input.source === "diesel") {
    dieselLitersUsed = fuelWh / 1000 / HEAT_CONFIG.dieselKwhPerLiter;
  } else if (input.source === "gas") {
    gasKg = fuelWh / 1000 / HEAT_CONFIG.gasKwhPerKg;
  } else {
    batteryWh += fuelWh * (1 + heater.converterLoss);
  }
  let cookingKg = 0;
  if (input.cooking && input.cookingMinutes > 0) {
    cookingKg = (input.cookingMinutes * HEAT_CONFIG.stoveKw) / 60 / HEAT_CONFIG.gasKwhPerKg;
    if (input.source === "gas") gasKg += cookingKg;
  }
  const bottleKg =
    input.bottle === "other"
      ? Math.max(input.otherKg, 0)
      : HEAT_CONFIG.bottlesKg[input.bottle];
  const stockLiters = Math.max(input.dieselLiters, 0);
  const stockWh = Math.max(input.batteryCapacityWh, 0);
  let nights = Number.POSITIVE_INFINITY;
  if (input.source === "diesel") nights = dieselLitersUsed > 0 ? stockLiters / dieselLitersUsed : Number.POSITIVE_INFINITY;
  else if (input.source === "gas") nights = gasKg > 0 ? bottleKg / gasKg : Number.POSITIVE_INFINITY;
  else nights = batteryWh > 0 ? stockWh / batteryWh : Number.POSITIVE_INFINITY;

  let cost: number | null = null;
  if (input.source === "diesel" && dieselLitersUsed > 0) cost = dieselLitersUsed * Math.max(input.dieselPrice, 0);
  if (input.source === "gas" && gasKg > 0 && bottleKg > 0) cost = (gasKg / bottleKg) * Math.max(input.bottlePrice, 0);

  const alerts: string[] = [];
  if (undersized) alerts.push("Le chauffage ne suit pas, la température visée ne sera pas atteinte.");
  if (input.source === "gas" && input.bottle === "butane13" && input.outdoorC < HEAT_CONFIG.butaneLimitC) {
    alerts.push("Le butane ne se vaporise plus vers 0 °C : passez au propane pour l’hiver.");
  }
  if ((input.source === "electric12" || input.source === "electric230") && batteryWh > stockWh * HEAT_CONFIG.batteryShareAlert) {
    alerts.push("Ce n’est pas tenable sans branchement secteur : une nuit dépasse la moitié de la batterie.");
  }
  if (input.source === "diesel" || input.source === "gas") {
    alerts.push("Détecteur de CO et aération : indispensables avec le gaz ou le diesel, surtout la nuit.");
  }
  if (insulation === "none") {
    alerts.push("L’isolation rapporte plus que d’augmenter la puissance du chauffage.");
  }

  const outdoor = formatGrouped(input.outdoorC, 0);
  const nightsText = formatNights(nights);
  let sentence = hours === 0
    ? "Pas de chauffe : la durée est de zéro heure."
    : "Pas de chauffe : dehors, il fait déjà au moins aussi chaud que la température visée.";
  if (heating && input.source === "diesel") {
    sentence = `${heatInsulationLabel[insulation]}, gazole : ${formatGrouped(stockLiters, stockLiters % 1 === 0 ? 0 : 1)} L tiennent environ ${nightsText} à ${outdoor} °C.`;
  } else if (input.source === "gas" && gasKg > 0) {
    sentence = `${heatInsulationLabel[insulation]}, ${heatFuelName[input.bottle]} : une bouteille de ${formatGrouped(bottleKg, bottleKg % 1 === 0 ? 0 : 1)} kg tient environ ${nightsText} à ${outdoor} °C.`;
  } else if (heating) {
    sentence = `${heatInsulationLabel[insulation]}, batterie : ${formatGrouped(stockWh, 0)} Wh tiennent environ ${nightsText} à ${outdoor} °C.`;
  }
  if (!heating && input.source === "gas" && cookingKg > 0) {
    sentence = `Pas de chauffe. Autonomie de la bouteille pour la cuisine seule : ${nightsText}.`;
  }
  if (cookingKg > 0 && input.source !== "gas") {
    sentence += ` Cuisine au gaz en plus : ${formatGrouped(roundStep(cookingKg * 1000, 10), 0)} g.`;
  }

  const consumption =
    input.source === "diesel"
      ? `${formatGrouped(roundStep(dieselLitersUsed, 0.1), 1)} L`
      : input.source === "gas"
        ? `${formatGrouped(roundStep(gasKg * 1000, 10), 0)} g`
        : `${formatGrouped(Math.round(batteryWh), 0)} Wh`;

  return {
    needW,
    calledW,
    undersized,
    batteryWh: Math.round(batteryWh),
    nightsText,
    costText: cost === null ? "—" : cost.toLocaleString("fr-FR", { style: "currency", currency: "EUR" }),
    consumption,
    sentence,
    alerts,
    needText: `${formatGrouped(Math.round(needW), 0)} W`,
    batteryText: `${formatGrouped(Math.round(batteryWh), 0)} Wh`,
  };
}
