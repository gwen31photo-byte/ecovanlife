export const photoCollections = [
  { id: "instant-de-lumiere", label: "Instant de lumière", folder: "instant de lumière" },
  { id: "littoral-atlantique", label: "Littoral atlantique", folder: "littoral atlantique" },
  { id: "lumiere-de-mediterranee", label: "Lumière de Méditerranée", folder: "lumière de méditeranée" },
  { id: "nature", label: "Nature", folder: "nature" },
  { id: "patrimoine-francais", label: "Patrimoine français", folder: "patrimoine français" },
  { id: "paysages", label: "Paysages", folder: "paysages" },
  { id: "voyages", label: "Voyages", folder: "voyages" },
] as const;

export type PhotoCollectionId = (typeof photoCollections)[number]["id"];
