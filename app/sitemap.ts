import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Renseigner NEXT_PUBLIC_SITE_URL (ex. https://mondomaine.fr) pour générer le sitemap
export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.url) return [];
  return ["", "/test", "/tarifs", "/a-propos", "/contact"].map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : p === "/test" ? 0.9 : 0.6,
  }));
}
