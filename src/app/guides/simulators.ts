import { Droplets, Fuel, Moon, Scale, Sun, Zap } from "lucide-react";

export const simulators = {
  electricite: {
    name: "Électricité",
    anchor: "eco-watts",
    href: "/guides/simulateurs/electricite",
    description: "Estimez votre consommation et dimensionnez votre batterie.",
    icon: Zap,
  },
  solaire: {
    name: "Solaire",
    anchor: "eco-solaire",
    href: "/guides/simulateurs/solaire",
    description: "Estimez la production d’un panneau selon le lieu et le mois.",
    icon: Sun,
  },
  eau: {
    name: "Eau",
    anchor: "eco-eau",
    href: "/guides/simulateurs/eau",
    description: "Calculez votre réserve d’eau et votre autonomie.",
    icon: Droplets,
  },
  carburant: {
    name: "Carburant",
    anchor: "eco-carburant",
    href: "/guides/simulateurs/carburant",
    description: "Estimez le coût du trajet, carburant et frais annexes compris.",
    icon: Fuel,
  },
  poids: {
    name: "Poids",
    anchor: "eco-poids",
    href: "/guides/simulateurs/poids",
    description: "Vérifiez la marge de chargement avant d’atteindre le PTAC.",
    icon: Scale,
  },
  nuit: {
    name: "Nuit",
    anchor: "eco-jour",
    href: "/guides/simulateurs/nuit",
    description: "Trouvez l’heure de départ pour arriver avant la nuit.",
    icon: Moon,
  },
} as const;

export type SimulatorSlug = keyof typeof simulators;
