import { stops, project, visits } from "./itinerary-data";

export const points = stops.map((stop) => ({ ...stop, ...project(stop.lon, stop.lat) }));
export type MapPoint = (typeof points)[number];
export type Cluster = { key: string; name: string; x: number; y: number; members: MapPoint[] };
export type View = { width: number; height: number; left: number; top: number };
const essentials = new Set(["fonsorbes", "pilat", "arces", "rochelle", "puy", "pontorson", "mont-saint-michel", "canadian-scottish"]);

// Distances are CSS pixels, so the same 44px touch spacing applies at every
// viewport size and zoom. Coordinates and the route itself never move.
export function clusterPoints(scale: number): Cluster[] {
  const area = (p: MapPoint) => p.lat > 49 ? "normandie" : p.lat > 48.4 ? "mont" : p.lat > 47 ? "rennes" : p.lat > 46.4 ? "puy" : p.lat > 45.3 ? "atlantique" : "sud";
  const remaining = [...points];
  const groups: Cluster[] = [];
  while (remaining.length) {
    const members = [remaining.shift()!];
    for (let i = 0; i < members.length; i++) {
      for (let j = remaining.length - 1; j >= 0; j--) {
        if (area(members[i]) === area(remaining[j]) && Math.hypot(members[i].x - remaining[j].x, members[i].y - remaining[j].y) * scale < 44) {
          members.push(remaining.splice(j, 1)[0]);
        }
      }
    }
    const name = members.length === 1 ? members[0].name
      : members.length === 8 && members.every((p) => p.lat > 49) ? "Normandie"
      : members.some((p) => p.key === "arromanches") ? "Arromanches"
      : members.some((p) => p.key === "maisy") ? "Maisy et environs"
      : members.some((p) => p.key === "mont-saint-michel") ? "Mont-Saint-Michel · Pontorson"
      : members.length > 4 && members.every((p) => p.lat > 45 && p.lat < 46.3) ? "Côte atlantique"
      : members.some((p) => p.key === "arces") ? "Arces-sur-Gironde"
      : "Lieux proches";
    groups.push({ key: members.map((p) => p.key).sort().join("/"), name,
      x: members.reduce((sum, p) => sum + p.x, 0) / members.length,
      y: members.reduce((sum, p) => sum + p.y, 0) / members.length, members });
  }
  return groups;
}

type Box = { x: number; y: number; width: number; height: number };

// Separate the excursions around Arces without moving their geographic endpoints.
const arcesRouteBends: Record<string, number> = {
  "arces-chateau": -16,
  "chassiron-arces": 12,
  "arces-rochelle": 20,
  "rochelle-arces": 20,
  "arces-meschers": -6,
  "plage-arces": 12,
  "arces-fumee": 34,
};

// One curve definition is shared by drawing and label collision checks.
const routeSequence = visits.map((visit) => points.find((point) => point.key === visit.stop)!);
export const routeSegments = routeSequence.slice(1).map((point, index) => {
  const before = routeSequence[index];
  const length = Math.hypot(point.x - before.x, point.y - before.y);
  const repeated = routeSequence.some((other, i) => i > 0 && other.key === before.key && routeSequence[i - 1].key === point.key);
  const localBend = arcesRouteBends[`${before.key}-${point.key}`];
  const bend = localBend ?? (repeated ? 12 : 0);
  const cx = (before.x + point.x) / 2 - (point.y - before.y) / length * bend;
  const cy = (before.y + point.y) / 2 + (point.x - before.x) / length * bend;
  const aroundArces = localBend !== undefined;
  const t = aroundArces ? (before.key === "arces" ? .65 : .35) : .5;
  const at = (t: number) => ({ x: (1 - t) ** 2 * before.x + 2 * (1 - t) * t * cx + t ** 2 * point.x,
    y: (1 - t) ** 2 * before.y + 2 * (1 - t) * t * cy + t ** 2 * point.y });
  const arrow = at(t);
  return { key: `${index}-${before.key}-${point.key}`, from: before.key, to: point.key,
    path: `M${before.x},${before.y}Q${cx},${cy} ${point.x},${point.y}`,
    arrow: length > (aroundArces ? 28 : 14) ? `M${before.x},${before.y}Q${before.x + t * (cx - before.x)},${before.y + t * (cy - before.y)} ${arrow.x},${arrow.y}` : null,
    samples: Array.from({ length: 25 }, (_, i) => at(i / 24)) };
});

// Clip each sampled curve edge against the padded label rectangle.
function crossesBox(a: { x: number; y: number }, b: { x: number; y: number }, box: Box) {
  let low = 0, high = 1;
  for (const [start, delta, min, max] of [
    [a.x, b.x - a.x, box.x - 4, box.x + box.width + 4],
    [a.y, b.y - a.y, box.y - 4, box.y + box.height + 4],
  ]) {
    if (Math.abs(delta) < .00001) { if (start < min || start > max) return false; }
    else {
      const first = (min - start) / delta, last = (max - start) / delta;
      low = Math.max(low, Math.min(first, last)); high = Math.min(high, Math.max(first, last));
      if (low > high) return false;
    }
  }
  return true;
}

export function routeIntersections(box: Box, scale: number, view: View) {
  return routeSegments.filter((segment) => {
    const samples = segment.samples.map((p) => ({ x: p.x * scale - view.left, y: p.y * scale - view.top }));
    return samples.slice(1).some((p, i) => crossesBox(samples[i], p, box));
  }).length;
}

export const normandyBounds = (() => {
  const normandy = points.filter((p) => p.lat > 49);
  return { minX: Math.min(...normandy.map((p) => p.x)), maxX: Math.max(...normandy.map((p) => p.x)),
    minY: Math.min(...normandy.map((p) => p.y)), maxY: Math.max(...normandy.map((p) => p.y)) };
})();

export function isNormandyView(scale: number, view: View) {
  const { minX, maxX, minY, maxY } = normandyBounds;
  const x = (minX + maxX) / 2 * scale - view.left, y = (minY + maxY) / 2 * scale - view.top;
  // The region must occupy most of the width and its centre remain on screen.
  return (maxX - minX) * scale >= view.width * .55 &&
    Math.abs(x - view.width / 2) <= view.width * .25 && Math.abs(y - view.height / 2) <= view.height * .3;
}

const overlaps = (a: Box, b: Box) => a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;

export function layoutLabels(groups: Cluster[], scale: number, view: View) {
  const visible = groups.filter((p) => p.x * scale - view.left > 12 && p.x * scale - view.left < view.width - 12 &&
    p.y * scale - view.top > 12 && p.y * scale - view.top < view.height - 12);
  const boxes: Box[] = visible.map((p) => ({ x: p.x * scale - view.left - 13, y: p.y * scale - view.top - 13, width: 26, height: 26 }));
  const labels: { key: string; text: string; x: number; y: number; box: Box; crossings: number }[] = [];
  const priority = (p: Cluster) => p.members.length > 1 ? 3 : essentials.has(p.members[0].key) ? 2 : 1;
  for (const p of [...visible].sort((a, b) => priority(b) - priority(a))) {
    // At overview resolution, reserve labels for grouped regions and main stops.
    // Above 1.5 CSS px per SVG unit, adjacent Normandy sites begin to separate.
    if (scale < 1.5 && priority(p) === 1) continue;
    const text = p.name;
    const width = text.length * 8 + 14;
    const px = p.x * scale - view.left, py = p.y * scale - view.top;
    const candidates = [
      { x: px + 17, y: Math.max(6, py - 12) }, { x: px - width - 17, y: Math.max(6, py - 12) },
      { x: Math.max(6, Math.min(view.width - width - 6, px - width / 2)), y: py - 39 }, { x: Math.max(6, Math.min(view.width - width - 6, px - width / 2)), y: py + 18 },
      { x: Math.max(6, Math.min(view.width - width - 6, px - width / 2)), y: py - 63 },
      { x: Math.max(6, Math.min(view.width - width - 6, px - width / 2)), y: py + 42 },
    ];
    const ranked = candidates.map((c) => ({ ...c, crossings: routeIntersections({ ...c, width, height: 25 }, scale, view) }))
      .sort((a, b) => a.crossings - b.crossings);
    for (const c of ranked) {
      const box = { ...c, width, height: 25 };
      if (c.x < 6 || c.y < 6 || c.x + width > view.width - 6 || c.y + 25 > view.height - 6 || boxes.some((b) => overlaps(box, b))) continue;
      boxes.push(box);
      labels.push({ key: p.key, text, x: (c.x + 7 + view.left) / scale, y: (c.y + 17 + view.top) / scale, box, crossings: c.crossings });
      break;
    }
  }
  return labels;
}
