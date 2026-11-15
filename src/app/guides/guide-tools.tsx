"use client";

import { useEffect, useMemo, useState } from "react";
import {
  computeDay,
  computeFuel,
  computeSolar,
  computeWater,
  computeWatts,
  computeWeight,
  dayMonths,
  devices,
  findVehicle,
  formatEuro,
  formatEuroPerLiter,
  formatLiters,
  formatMeasure,
  fuelLabels,
  fuelSummary,
  panelPresets,
  parseAmount,
  solarCities,
  solarMonths,
  stationLabels,
  vehicleGroups,
  type Fuel,
  type SolarCity,
  type Station,
} from "./calculators";

const toolLinks = [
  { href: "#eco-watts", label: "Watts" },
  { href: "#eco-solaire", label: "Solaire" },
  { href: "#eco-eau", label: "Eau" },
  { href: "#eco-carburant", label: "Carburant" },
  { href: "#eco-poids", label: "Poids" },
  { href: "#eco-jour", label: "Nuit" },
];

export function GuideTools() {
  const [hash, setHash] = useState("#eco-watts");
  const [selected, setSelected] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(devices.map((device) => [device.id, device.defaultOn])),
  );
  const [extraWatts, setExtraWatts] = useState("0");
  const [extraHours, setExtraHours] = useState("0");
  const [days, setDays] = useState("1");
  const [sunHours, setSunHours] = useState("4");
  const [city, setCity] = useState<SolarCity>("lyon");
  const [month, setMonth] = useState("11");
  const [panelWatts, setPanelWatts] = useState("180");
  const [mount, setMount] = useState<"flat" | "tilt" | "portable">("flat");
  const [shade, setShade] = useState<"none" | "van" | "trees">("van");
  const [regulator, setRegulator] = useState<"mppt" | "pwm">("mppt");
  const [waterRate, setWaterRate] = useState("12");
  const [people, setPeople] = useState("2");
  const [waterDays, setWaterDays] = useState("3");
  const [tank, setTank] = useState("60");
  const [vehicleId, setVehicleId] = useState("t4-e85");
  const [fuel, setFuel] = useState<Fuel>("e85");
  const [station, setStation] = useState<Station>("gd");
  const [kilometers, setKilometers] = useState("280");
  const [tolls, setTolls] = useState("0");
  const [lodging, setLodging] = useState("0");
  const [detour, setDetour] = useState("0");
  const [misc, setMisc] = useState("0");
  const [copyLabel, setCopyLabel] = useState("Copier le résumé");
  const [copyMessage, setCopyMessage] = useState("");
  const [payload, setPayload] = useState("650");
  const [occupants, setOccupants] = useState("2");
  const [kilosPerPerson, setKilosPerPerson] = useState("75");
  const [waterKilos, setWaterKilos] = useState("60");
  const [kit, setKit] = useState("80");
  const [bikes, setBikes] = useState("0");
  const [sunset, setSunset] = useState("16:55");
  const [departure, setDeparture] = useState("10:00");
  const [driveHours, setDriveHours] = useState("6");
  const [margin, setMargin] = useState("45");

  useEffect(() => {
    const sync = () => setHash(window.location.hash || "#eco-watts");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const watts = useMemo(
    () =>
      computeWatts({
        selected,
        extraWatts: parseAmount(extraWatts),
        extraHours: parseAmount(extraHours),
        days: parseAmount(days, 1),
        sunHours: parseAmount(sunHours, 4),
      }),
    [selected, extraWatts, extraHours, days, sunHours],
  );
  const solar = useMemo(
    () =>
      computeSolar({
        city,
        month: parseAmount(month, 11),
        watts: parseAmount(panelWatts, 180),
        mount,
        shade,
        regulator,
        consumptionWh: watts.dailyWh,
      }),
    [city, month, panelWatts, mount, shade, regulator, watts.dailyWh],
  );
  const water = useMemo(
    () => computeWater(parseAmount(people, 1), parseAmount(waterDays, 1), parseAmount(waterRate, 12), parseAmount(tank)),
    [people, waterDays, waterRate, tank],
  );
  const trip = useMemo(
    () =>
      computeFuel({
        vehicleId,
        kilometers: parseAmount(kilometers),
        fuel,
        station,
        tolls: parseAmount(tolls),
        lodging: parseAmount(lodging),
        detour: parseAmount(detour),
        misc: parseAmount(misc),
      }),
    [vehicleId, kilometers, fuel, station, tolls, lodging, detour, misc],
  );
  const weight = useMemo(
    () =>
      computeWeight({
        payload: parseAmount(payload),
        people: parseAmount(occupants),
        kilosPerPerson: parseAmount(kilosPerPerson),
        water: parseAmount(waterKilos),
        kit: parseAmount(kit),
        bikes: parseAmount(bikes),
      }),
    [payload, occupants, kilosPerPerson, waterKilos, kit, bikes],
  );
  const daylight = useMemo(
    () => computeDay(sunset, departure, parseAmount(driveHours), parseAmount(margin)),
    [sunset, departure, driveHours, margin],
  );
  const vehicle = findVehicle(vehicleId);
  const noFuel = vehicle.litersPer100 === 0;
  const roundedPanel = String(Math.round(parseAmount(panelWatts)));
  const roundedKm = String(Math.round(parseAmount(kilometers)));

  async function copyTrip() {
    const text = fuelSummary(trip, parseAmount(kilometers) > 0 ? parseAmount(kilometers) : 0, fuel, station);
    let copiedOk = false;
    try {
      if (navigator.clipboard?.writeText) {
        await Promise.race([
          navigator.clipboard.writeText(text),
          new Promise((_, reject) => window.setTimeout(() => reject(new Error("timeout")), 800)),
        ]);
        copiedOk = true;
      }
    } catch {
      copiedOk = false;
    }
    if (!copiedOk) {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      try {
        copiedOk = document.execCommand("copy");
      } catch {
        copiedOk = false;
      }
      area.remove();
    }
    setCopyLabel(copiedOk ? "Copié" : "Non copié");
    setCopyMessage(copiedOk ? "Résumé copié." : "La copie a échoué.");
    window.setTimeout(() => setCopyLabel("Copier le résumé"), 2500);
  }

  return (
    <section className="section guide-tools" aria-labelledby="guide-tools-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">SIMULATEURS</p>
          <h2 id="guide-tools-title">Six outils, avant d’acheter.</h2>
        </div>
      </div>
      <p className="tools-lead">
        Électricité, solaire, eau, carburant, poids et heure de retour au camp. Le chiffre d’abord :
        des ordres de grandeur, pas un devis.
      </p>
      <nav className="tool-nav" aria-label="Simulateurs">
        {toolLinks.map((tool) => (
          <a key={tool.href} href={tool.href} className={hash === tool.href ? "is-on" : undefined} aria-current={hash === tool.href ? "true" : undefined}>
            {tool.label}
          </a>
        ))}
      </nav>

      <article className="tool-card" id="eco-watts">
        <p className="eyebrow">ÉLECTRICITÉ</p>
        <h3>Quelle batterie, quel panneau ?</h3>
        <p>Cochez ce que vous branchez vraiment. Wh = W × h. Marge 30 % sur la batterie.</p>
        <div className="tool-devices" role="group" aria-label="Appareils">
          {devices.map((device) => (
            <label key={device.id}>
              <input
                type="checkbox"
                checked={Boolean(selected[device.id])}
                onChange={() => setSelected((current) => ({ ...current, [device.id]: !current[device.id] }))}
              />
              <span>
                {device.label}
                <small>{device.detail}</small>
              </span>
            </label>
          ))}
        </div>
        <p className="tool-sub">Appareil en plus (facultatif)</p>
        <div className="tool-fields">
          <Field label="Watts" value={extraWatts} onChange={setExtraWatts} min={0} step={1} />
          <Field label="Heures / jour" value={extraHours} onChange={setExtraHours} min={0} step={0.5} />
          <Field label="Jours d’autonomie" value={days} onChange={setDays} min={1} step={1} />
          <Field label="Heures de soleil utiles" value={sunHours} onChange={setSunHours} min={0.5} step={0.5} />
        </div>
        <Results
          items={[
            { label: "Conso journalière", value: formatMeasure(watts.dailyWh, "Wh/j") },
            { label: "LiFePO4 12 V", value: formatMeasure(watts.ampHours, "Ah") },
            { label: "Batterie (Wh + 30 %)", value: formatMeasure(watts.batteryWh, "Wh") },
            { label: "Solaire indicatif", value: formatMeasure(watts.panelWc, "Wc") },
            { label: "Section de câble", value: watts.wiring.cable },
            { label: "Fusible maître ANL", value: watts.wiring.fuse },
          ]}
        />
        <p className="tool-note" aria-live="polite">{watts.note}</p>
        <p className="tool-aside">
          Le solaire indicatif suppose des heures de soleil. L’outil Solaire calcule la production réelle, mois par mois.
          Câble et fusible valent pour une liaison 12 V courte : ce n’est pas un dimensionnement de chantier.
        </p>
      </article>

      <article className="tool-card" id="eco-solaire">
        <p className="eyebrow">PRODUCTION</p>
        <h3>Ce que le panneau produit vraiment</h3>
        <p>Toit de van, mois, pose, MPPT. Pas 5 h × la plaque STC. Ordre de grandeur pour la France et l’Europe proche.</p>
        <div className="tool-fields">
          <label className="tool-field">
            <span>Ville</span>
            <select value={city} onChange={(event) => setCity(event.target.value as SolarCity)}>
              {solarCities.map((item) => (
                <option key={item.id} value={item.id}>{item.label}</option>
              ))}
            </select>
          </label>
          <label className="tool-field">
            <span>Mois</span>
            <select value={month} onChange={(event) => setMonth(event.target.value)}>
              {solarMonths.map((name, index) => (
                <option key={name} value={String(index + 1)}>{name}</option>
              ))}
            </select>
          </label>
          <Field label="Puissance STC (W)" value={panelWatts} onChange={setPanelWatts} min={20} max={2000} step={10} />
          <label className="tool-field">
            <span>Pose</span>
            <select value={mount} onChange={(event) => setMount(event.target.value as typeof mount)}>
              <option value="flat">Toit plat (van, fourgon)</option>
              <option value="tilt">Légèrement incliné (camping-car)</option>
              <option value="portable">Pliable calé au soleil</option>
            </select>
          </label>
          <label className="tool-field">
            <span>Ombre</span>
            <select value={shade} onChange={(event) => setShade(event.target.value as typeof shade)}>
              <option value="none">Aucune</option>
              <option value="van">Van typique (lanterneau, spoiler)</option>
              <option value="trees">Sous les arbres / ombre partielle</option>
            </select>
          </label>
          <label className="tool-field">
            <span>Régulateur</span>
            <select value={regulator} onChange={(event) => setRegulator(event.target.value as typeof regulator)}>
              <option value="mppt">MPPT (~94 %)</option>
              <option value="pwm">PWM (~74 %)</option>
            </select>
          </label>
        </div>
        <div className="tool-chips" aria-label="Puissances types">
          {panelPresets.map((preset) => (
            <button
              key={preset}
              type="button"
              className={roundedPanel === String(preset) ? "is-on" : undefined}
              onClick={() => setPanelWatts(String(preset))}
            >
              {preset} W
            </button>
          ))}
        </div>
        <Results
          items={[
            { label: "Production du mois", value: formatMeasure(solar.daily, "Wh/j") },
            { label: "Jour voilé → clair", value: `${formatMeasure(solar.low, "Wh")} – ${formatMeasure(solar.high, "Wh")}` },
            { label: "Ah utiles (12,8 V)", value: formatMeasure(solar.ampHours, "Ah/j") },
            { label: "Recharge 100 Ah depuis 20 %", value: solar.fill },
          ]}
        />
        <p className="tool-note" aria-live="polite">{solar.verdict}</p>
        <div className="tool-faq">
          <details>
            <summary>Un panneau 180 W produit-il 900 Wh par jour ?</summary>
            <p>Non. La plaque STC est mesurée au laboratoire. Sur un toit de van à plat, en janvier, avec l’ombre d’un lanterneau et les pertes du MPPT, on est souvent autour de 150 à 350 Wh/j selon la ville.</p>
          </details>
          <details>
            <summary>Toit plat ou pliable : quelle différence en hiver ?</summary>
            <p>Le plat subit le soleil rasant. Un pliable calé face au soleil rattrape souvent 40 à 50 % en décembre. En juillet, l’écart se resserre.</p>
          </details>
          <details>
            <summary>MPPT ou PWM, ça change vraiment la production ?</summary>
            <p>Oui, surtout hors 12 V pile et par temps frais. Un PWM laisse environ 20 % sur le tapis par rapport à un MPPT.</p>
          </details>
        </div>
      </article>

      <article className="tool-card" id="eco-eau">
        <p className="eyebrow">AUTONOMIE</p>
        <h3>Combien de litres avant la prochaine ville</h3>
        <p>Un litre, c’est un kilo. Le confort se paie au PTAC autant qu’au robinet.</p>
        <div className="tool-fields">
          <label className="tool-field">
            <span>Rythme</span>
            <select value={waterRate} onChange={(event) => setWaterRate(event.target.value)}>
              <option value="6">Sobre — 6 L / pers. / jour</option>
              <option value="12">Juste — 12 L / pers. / jour</option>
              <option value="25">Confort — 25 L / pers. / jour</option>
            </select>
          </label>
          <Field label="Personnes" value={people} onChange={setPeople} min={1} step={1} />
          <Field label="Jours" value={waterDays} onChange={setWaterDays} min={1} step={1} />
          <Field label="Cuve (L)" value={tank} onChange={setTank} min={0} step={1} />
        </div>
        <Results
          items={[
            { label: "Besoin", value: formatMeasure(water.need, "L") },
            { label: "Reste dans la cuve", value: formatMeasure(water.left, "L"), alert: water.left < 0 },
          ]}
        />
        <p className="tool-note" aria-live="polite">{water.note}</p>
      </article>

      <article className="tool-card" id="eco-carburant">
        <p className="eyebrow">ROUTE</p>
        <h3>Ce que coûte vraiment l’étape</h3>
        <p>Distance × conso × le litre à la pompe. Prix au 5 novembre 2026. Ordre de grandeur, pas un devis.</p>
        <div className="tool-fields">
          <label className="tool-field tool-field-wide">
            <span>Véhicule</span>
            <select
              value={vehicleId}
              onChange={(event) => {
                const next = findVehicle(event.target.value);
                setVehicleId(next.id);
                setFuel(next.fuel);
              }}
            >
              {vehicleGroups.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.vehicles.map((item) => (
                    <option key={item.id} value={item.id}>{item.label}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </label>
          <Field label="Kilomètres" value={kilometers} onChange={setKilometers} min={0} step={1} />
          <label className="tool-field">
            <span>Carburant</span>
            <select value={fuel} disabled={noFuel} onChange={(event) => setFuel(event.target.value as Fuel)}>
              {(Object.keys(fuelLabels) as Fuel[]).map((item) => (
                <option key={item} value={item}>{fuelLabels[item]}</option>
              ))}
            </select>
          </label>
        </div>
        <p className="tool-sub">Où faire le plein</p>
        <div className="tool-chips">
          {(Object.keys(stationLabels) as Station[]).map((item) => (
            <button key={item} type="button" disabled={noFuel} className={station === item ? "is-on" : undefined} onClick={() => setStation(item)}>
              {stationLabels[item]}
            </button>
          ))}
        </div>
        <p className="tool-price">
          {noFuel ? "Pas de litre. Le coût, c’est le billet." : `${formatEuroPerLiter(trip.price)} / L · ${stationLabels[station].toLowerCase()} · 5 nov. 2026`}
        </p>
        <div className="tool-chips" aria-label="Distances types">
          {[80, 280, 500, 800].map((distance) => (
            <button key={distance} type="button" className={roundedKm === String(distance) ? "is-on" : undefined} onClick={() => setKilometers(String(distance))}>
              {distance} km
            </button>
          ))}
        </div>
        <details className="tool-extra">
          <summary>Frais annexes</summary>
          <div className="tool-fields">
            <Field label="Péages (€)" value={tolls} onChange={setTolls} min={0} step={0.5} />
            <Field label="Nuit / aire (€)" value={lodging} onChange={setLodging} min={0} step={0.5} />
            <Field label="Détour (€)" value={detour} onChange={setDetour} min={0} step={0.5} />
            <Field label="Divers (€)" value={misc} onChange={setMisc} min={0} step={0.5} />
          </div>
        </details>
        <Results
          items={[
            { label: "Carburant", value: formatLiters(trip.liters) },
            { label: "Coût pompe", value: formatEuro(trip.fuelCost) },
            { label: "Coût de l’étape", value: formatEuro(trip.total) },
          ]}
        />
        <p className="tool-note" aria-live="polite">{vehicle.hint}</p>
        {copyMessage ? <p className="tool-note">{copyMessage}</p> : null}
        <div className="tool-actions">
          <button type="button" onClick={copyTrip}>{copyLabel}</button>
          <button type="button" onClick={() => window.print()}>Imprimer</button>
        </div>
      </article>

      <article className="tool-card" id="eco-poids">
        <p className="eyebrow">FOURGON</p>
        <h3>Ce qui reste avant le PTAC</h3>
        <p>Charge utile après aménagement. L’eau compte double : on la boit, et elle pèse.</p>
        <div className="tool-fields">
          <Field label="Charge utile restante (kg)" value={payload} onChange={setPayload} min={0} step={1} />
          <Field label="Occupants" value={occupants} onChange={setOccupants} min={0} step={1} />
          <Field label="Kg / personne" value={kilosPerPerson} onChange={setKilosPerPerson} min={0} step={1} />
          <Field label="Eau (L = kg)" value={waterKilos} onChange={setWaterKilos} min={0} step={1} />
          <Field label="Kit / vivres (kg)" value={kit} onChange={setKit} min={0} step={1} />
          <Field label="Vélos / extras (kg)" value={bikes} onChange={setBikes} min={0} step={1} />
        </div>
        <Results
          items={[
            { label: "Déjà chargé", value: formatMeasure(weight.used, "kg") },
            { label: "Marge PTAC", value: formatMeasure(weight.left, "kg"), alert: weight.left < 0 },
          ]}
        />
        <p className="tool-note" aria-live="polite">{weight.note}</p>
      </article>

      <article className="tool-card" id="eco-jour">
        <p className="eyebrow">HIVER</p>
        <h3>Rentrer au camp encore jour</h3>
        <p>Heures de coucher de soleil, France métropolitaine, ordre de grandeur.</p>
        <div className="tool-fields">
          <label className="tool-field">
            <span>Mois</span>
            <select value={sunset} onChange={(event) => setSunset(event.target.value)}>
              {dayMonths.map((item) => (
                <option key={item.sunset} value={item.sunset}>{item.label}</option>
              ))}
            </select>
          </label>
          <label className="tool-field">
            <span>Départ</span>
            <input type="time" value={departure} onChange={(event) => setDeparture(event.target.value)} />
          </label>
          <Field label="Heures de route" value={driveHours} onChange={setDriveHours} min={0} step={0.5} />
          <Field label="Marge avant le soleil (min)" value={margin} onChange={setMargin} min={0} step={1} />
        </div>
        <Results
          items={[
            { label: "Arrivée estimée", value: daylight.arrival, alert: daylight.late },
            { label: "Dernière heure raisonnable", value: daylight.latest },
          ]}
        />
        <p className="tool-note" aria-live="polite">{daylight.note}</p>
      </article>
      <p className="tools-source">
        Méthode reprise des simulateurs Economade : tables d’ensoleillement France, marge batterie × 1,3, prix carburant au 5 novembre 2026.
      </p>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  min,
  max,
  step,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <label className="tool-field">
      <span>{label}</span>
      <input type="number" inputMode="decimal" min={min} max={max} step={step} value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function Results({ items }: { items: { label: string; value: string; alert?: boolean }[] }) {
  return (
    <dl className="tool-results">
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd className={item.alert ? "is-short" : undefined}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
