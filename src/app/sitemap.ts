import type { MetadataRoute } from "next";
import { siteUrl, navigation, adventures } from "@/content/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...navigation.map((n) => n.href),
    ...adventures.map((a) => `/voyages/${a.slug}`),
    "/voyages/de-toulouse-a-l-italie",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
