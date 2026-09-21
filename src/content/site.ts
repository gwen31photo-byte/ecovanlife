export const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/voyages", label: "Voyages" },
  { href: "/vanlife", label: "Vanlife" },
  { href: "/photos", label: "Photos" },
  { href: "/guides", label: "Guides & Ebooks" },
  { href: "/boutique", label: "Boutique" },
  { href: "/a-propos", label: "À propos" },
];
export type Adventure = {
  slug: string;
  title: string;
  region: string;
  category: string;
  duration: string;
  image: string;
  alt: string;
  description: string;
  stops: string[];
};
export const adventures: Adventure[] = [
  {
    slug: "dolomites",
    title: "Les Dolomites, au-delà des sommets",
    region: "ITALIE",
    category: "Road trip",
    duration: "10 jours",
    image: "/images/dolomites.jpg",
    alt: "Lac turquoise au pied des montagnes des Dolomites",
    description:
      "Des lacs émeraude, des sommets qui effleurent les nuages et le bonheur de prendre son temps. Une idée de voyage au cœur des Alpes italiennes.",
    stops: [
      "Prendre le temps autour du lac de Braies",
      "Marcher au pied des Tre Cime",
      "Regarder le soleil se lever sur les sommets",
    ],
  },
  {
    slug: "cote-sauvage",
    title: "La Bretagne, au rythme des marées",
    region: "FRANCE",
    category: "Échappée nature",
    duration: "5 jours",
    image: "/images/coast.jpg",
    alt: "Côte sauvage, falaises et océan Atlantique",
    description:
      "Suivre la côte, se laisser surprendre par les lumières et retrouver le goût des choses simples, entre sentiers et embruns.",
    stops: [
      "Explorer les sentiers côtiers",
      "Faire une pause dans un village de pêcheurs",
      "Photographier les dernières lumières sur l’océan",
    ],
  },
  {
    slug: "norvege",
    title: "La Norvège, la liberté plein nord",
    region: "NORVÈGE",
    category: "Voyage en van",
    duration: "3 semaines",
    image: "/images/norway.jpg",
    alt: "Aurore boréale dans le ciel du grand nord",
    description:
      "Une route qui serpente entre les fjords, des nuits paisibles et un horizon qui semble ne jamais finir. Le grand nord comme invitation à ralentir.",
    stops: [
      "Longer les fjords de l’ouest",
      "Découvrir les petits ports",
      "Profiter des grandes lumières du nord",
    ],
  },
];
export const photos = [
  {
    src: "/images/coast.jpg",
    alt: "Falaises et océan dans une lumière douce",
    title: "Au bord du monde",
    category: "Océan",
  },
  {
    src: "/images/forest.jpg",
    alt: "Forêt dense et lumière naturelle",
    title: "Respirer, simplement",
    category: "Nature",
  },
  {
    src: "/images/dolomites.jpg",
    alt: "Lac alpin entouré de sommets",
    title: "Le silence des sommets",
    category: "Montagne",
  },
  {
    src: "/images/norway.jpg",
    alt: "Aurore boréale au-dessus d’un paysage nordique",
    title: "L’appel du nord",
    category: "Montagne",
  },
  {
    src: "/images/road.jpg",
    alt: "Route traversant un paysage sauvage",
    title: "Prendre la route",
    category: "Nature",
  },
];
export const guides = [
  {
    title: "Le premier départ en van",
    subtitle: "Les essentiels pour imaginer votre première aventure.",
    tag: "VANLIFE",
    image: "/images/road.jpg",
  },
  {
    title: "L’art de voyager plus lentement",
    subtitle: "Des idées pour explorer autrement, à votre rythme.",
    tag: "VOYAGE",
    image: "/images/forest.jpg",
  },
];
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ecovanlife.fr";
