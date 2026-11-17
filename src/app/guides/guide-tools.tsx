"use client";

import { useEffect, useMemo, useState } from "react";
import {
  computeDay,
  computeFuel,
  computeHeat,
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
  type GasBottle,
  type HeatInsulation,
  type HeatSource,
  type HeatVehicle,
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
  { href: "#eco-chauffage", label: "Chauffage" },
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
  const [heatingWh, setHeatingWh] = useState(0);
  const [heatAdded, setHeatAdded] = useState("");
  const [outdoor, setOutdoor] = useState("2");
  const [indoor, setIndoor] = useState("16");
  const [heatVehicle, setHeatVehicle] = useState<HeatVehicle>("l2h2");
  const [insulation, setInsulation] = useState<HeatInsulation>("light");
  const [heatSource, setHeatSource] = useState<HeatSource>("diesel");
  const [heatHours, setHeatHours] = useState("8");
  const [cooking, setCooking] = useState("non");
  const [cookingMinutes, setCookingMinutes] = useState("30");
  const [bottle, setBottle] = useState<GasBottle>("propane13");
  const [otherKg, setOtherKg] = useState("13");
  const [dieselStock, setDieselStock] = useState("10");
  const [batteryStock, setBatteryStock] = useState("1280");
  const [dieselPrice, setDieselPrice] = useState("1.75");
  const [bottlePrice, setBottlePrice] = useState("35");

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
        heatingWh,
      }),
    [selected, extraWatts, extraHours, days, sunHours, heatingWh],
  );
  const heat = useMemo(
    () =>
      computeHeat({
        outdoorC: parseAmount(outdoor, 2),
        indoorC: parseAmount(indoor, 16),
        vehicle: heatVehicle,
        insulation,
        source: heatSource,
        hours: parseAmount(heatHours, 8),
        cooking: cooking === "oui",
        cookingMinutes: parseAmount(cookingMinutes, 30),
        bottle,
        otherKg: parseAmount(otherKg, 13),
        dieselLiters: parseAmount(dieselStock, 10),
        batteryCapacityWh: parseAmount(batteryStock, 1280),
        dieselPrice: parseAmount(dieselPrice, 1.75),
        bottlePrice: parseAmount(bottlePrice, 35),
      }),
    [
      outdoor,
      indoor,
      heatVehicle,
      insulation,
      heatSource,
      heatHours,
      cooking,
      cookingMinutes,
      bottle,
      otherKg,
      dieselStock,
      batteryStock,
      dieselPrice,
      bottlePrice,
    ],
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
          <h2 id="guide-tools-title">Sept outils, avant d’acheter.</h2>
        </div>
      </div>
      <p className="tools-lead">
        Électricité, solaire, eau, carburant, poids, heure de retour et chauffage. Le chiffre d’abord :
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
        {heatingWh > 0 ? (
          <div className="tool-actions">
            <p className="tool-sub">Chauffage ajouté : {formatMeasure(heatingWh, "Wh/nuit")}</p>
            <button type="button" onClick={() => { setHeatingWh(0); setHeatAdded("Chauffage retiré de Watts."); }}>
              Retirer
            </button>
          </div>
        ) : null}
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
        <h3>Arriver à sa destination avec le jour</h3>
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

      <article className="tool-card" id="eco-chauffage">
        <p className="eyebrow">HIVER · CHAUFFAGE</p>
        <h3>Tenir la nuit au chaud, et savoir combien de jours tient la bouteille.</h3>
        <p>Le besoin suit l’écart de température. La puissance inscrite sur l’appareil ne dit pas ce que la nuit coûte.</p>
        <div className="tool-fields">
          <label className="tool-field tool-field-wide">
            <span>Température extérieure la nuit : {formatGroupedTemp(outdoor)}{"\u00a0"}°C</span>
            <input
              type="range"
              min={-15}
              max={15}
              step={1}
              value={outdoor}
              aria-valuemin={-15}
              aria-valuemax={15}
              aria-valuenow={parseAmount(outdoor, 2)}
              aria-valuetext={`${formatGroupedTemp(outdoor)} degrés Celsius`}
              onChange={(event) => setOutdoor(event.target.value)}
            />
          </label>
        </div>
        <p className="tool-sub">Température visée à l’intérieur</p>
        <div className="tool-chips" role="group" aria-label="Température visée à l’intérieur">
          {["14", "16", "18", "20"].map((value) => (
            <button key={value} type="button" className={indoor === value ? "is-on" : undefined} aria-pressed={indoor === value} onClick={() => setIndoor(value)}>
              {value} °C
            </button>
          ))}
        </div>
        <div className="tool-fields">
          <label className="tool-field">
            <span>Véhicule</span>
            <select value={heatVehicle} onChange={(event) => setHeatVehicle(event.target.value as HeatVehicle)}>
              <option value="fourgonnette">Fourgonnette (~4 m³)</option>
              <option value="l1h1">Fourgon L1H1 (~6 m³)</option>
              <option value="l2h2">L2H2 (~10 m³)</option>
              <option value="l3h2">L3H2 (~13 m³)</option>
              <option value="profile">Profilé / capucine (~18 m³)</option>
            </select>
          </label>
          <label className="tool-field">
            <span>Isolation</span>
            <select value={insulation} onChange={(event) => setInsulation(event.target.value as HeatInsulation)}>
              <option value="none">Aucune</option>
              <option value="light">Légère (laine / armaflex partiel)</option>
              <option value="good">Bonne (complète, rideaux isolants)</option>
            </select>
          </label>
          <label className="tool-field">
            <span>Chauffage</span>
            <select value={heatSource} onChange={(event) => setHeatSource(event.target.value as HeatSource)}>
              <option value="diesel">Diesel à air 2 kW</option>
              <option value="gas">Gaz type Truma 2–4 kW</option>
              <option value="electric12">Électrique 12 V</option>
              <option value="electric230">Électrique 230 V via convertisseur</option>
            </select>
          </label>
          <Field label="Heures de chauffe par nuit" value={heatHours} onChange={setHeatHours} min={0} max={24} step={0.5} />
          <label className="tool-field">
            <span>Cuisine au gaz</span>
            <select value={cooking} onChange={(event) => setCooking(event.target.value)}>
              <option value="non">Non</option>
              <option value="oui">Oui</option>
            </select>
          </label>
          <Field label="Minutes de feu par jour" value={cookingMinutes} onChange={setCookingMinutes} min={0} step={5} disabled={cooking !== "oui"} />
          {heatSource === "gas" ? (
            <label className="tool-field">
              <span>Bouteille</span>
              <select value={bottle} onChange={(event) => setBottle(event.target.value as GasBottle)}>
                <option value="butane13">Butane 13 kg</option>
                <option value="propane13">Propane 13 kg</option>
                <option value="propane10">Propane 10 kg</option>
                <option value="other">Autre</option>
              </select>
            </label>
          ) : null}
          {heatSource === "gas" && bottle === "other" ? (
            <Field label="Gaz (kg)" value={otherKg} onChange={setOtherKg} min={0} step={0.5} />
          ) : null}
          {heatSource === "diesel" ? (
            <Field label="Gazole réservé au chauffage (L)" value={dieselStock} onChange={setDieselStock} min={0} step={0.5} />
          ) : null}
          {heatSource === "electric12" || heatSource === "electric230" ? (
            <Field label="Batterie (Wh)" value={batteryStock} onChange={setBatteryStock} min={0} step={10} />
          ) : null}
          {heatSource === "diesel" ? (
            <Field label="Gazole (€/L)" value={dieselPrice} onChange={setDieselPrice} min={0} step={0.01} />
          ) : null}
          {heatSource === "gas" ? (
            <Field label="Bouteille (€)" value={bottlePrice} onChange={setBottlePrice} min={0} step={1} />
          ) : null}
        </div>
        <Results
          items={[
            { label: "Besoin de chauffe moyen", value: heat.needText, alert: heat.undersized },
            { label: "Consommation par nuit", value: heat.consumption },
            { label: "Autonomie", value: heat.nightsText },
            { label: "Coût par nuit", value: heat.costText },
            { label: "Batterie par nuit", value: heat.batteryText },
          ]}
        />
        <p className="tool-note" aria-live="polite">{heat.sentence}</p>
        {heat.alerts.map((alert) => (
          <p key={alert} className="tool-note is-alert">{alert}</p>
        ))}
        <p className="tool-aside">
          Ordres de grandeur pour un van stationné, sans vent fort ni ouverture de porte. Pas un dimensionnement d’installation.
        </p>
        <div className="tool-actions">
          <button
            type="button"
            onClick={() => {
              setHeatingWh(heat.batteryWh);
              setHeatAdded(
                heat.batteryWh > 0
                  ? `${heat.batteryText} ajoutés à la conso journalière de Watts.`
                  : "Rien à ajouter : le chauffage ne tire pas sur la batterie.",
              );
              setHash("#eco-watts");
              window.location.hash = "eco-watts";
            }}
          >
            {heatingWh > 0 ? "Mettre à jour dans Watts" : "Ajouter à l’onglet Watts"}
          </button>
        </div>
        {heatAdded ? <p className="tool-note" aria-live="polite">{heatAdded}</p> : null}
        <p className="tool-links">
          <a href="https://economade.net/schema-electrique-van-amenage-12v/" target="_blank" rel="noopener noreferrer">Schéma électrique 12 V</a>
          <a href="https://economade.net/fiche-memo-12v-batterie-solaire/" target="_blank" rel="noopener noreferrer">Fiche mémo 12 V</a>
        </p>
        <div className="tool-faq">
          <details>
            <summary>Chauffage diesel ou gaz en van ?</summary>
            <p>Le diesel boit peu de litres, mais le ventilateur et la bougie tirent sur la batterie. Le gaz se voit à la bouteille : le butane cale vers 0 °C, le propane tient l’hiver. Les deux demandent un détecteur de CO et une aération, surtout la nuit.</p>
          </details>
          <details>
            <summary>Pourquoi ma bouteille de butane ne marche plus quand il gèle ?</summary>
            <p>Le butane ne se vaporise presque plus vers 0 °C. La bouteille est pleine, le brûleur non. Le propane continue plus bas : c’est lui qu’on emporte l’hiver.</p>
          </details>
          <details>
            <summary>Peut-on chauffer un van sur batterie ?</summary>
            <p>Un convecteur avale en une nuit ce qu’un frigo consomme en plusieurs jours. Sans branchement, la batterie ne suit pas. L’isolation baisse le besoin ; elle ne le remplace pas par des watts.</p>
          </details>
        </div>
      </article>
      <p className="tools-source">
        Méthode reprise des simulateurs Economade : tables d’ensoleillement France, marge batterie × 1,3, prix carburant au 5 novembre 2026.
      </p>
    </section>
  );
}

function formatGroupedTemp(value: string): string {
  const n = parseAmount(value, 0);
  return n.toLocaleString("fr-FR", { maximumFractionDigits: 0 });
}

function Field({
  label,
  value,
  onChange,
  min,
  max,
  step,
  disabled,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}) {
  return (
    <label className="tool-field">
      <span>{label}</span>
      <input type="number" inputMode="decimal" min={min} max={max} step={step} value={value} disabled={disabled} onChange={(event) => onChange(event.target.value)} />
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
