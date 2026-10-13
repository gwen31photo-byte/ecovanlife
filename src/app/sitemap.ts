import type { MetadataRoute } from "next";
import { siteUrl, navigation, adventures } from "@/content/site";
import { photographs } from "./photos/catalog";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...navigation.map((n) => n.href),
    ...adventures.map((a) => `/voyages/${a.slug}`),
    "/voyages/de-toulouse-a-l-italie",
    "/voyages/la-grande-boucle-de-l-ouest",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
    ...(path === "/photos"
      ? { images: photographs.map((photo) => new URL(photo.src, siteUrl).href) }
      : {}),
  }));
}
