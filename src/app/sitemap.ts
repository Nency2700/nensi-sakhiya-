import type { MetadataRoute } from "next";
import { localePath, SITE_URL } from "@/lib/profile";
import { LOCALES, ROLES } from "@/lib/types";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-11-13");
  const pages = LOCALES.flatMap((locale) =>
    ROLES.map((role) => ({
      url: `${SITE_URL}${localePath(locale, role)}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: role === "react-native" ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}${localePath("en", role)}`,
          de: `${SITE_URL}${localePath("de", role)}`,
          "x-default": `${SITE_URL}${localePath("en", role)}`,
        },
      },
    })),
  );

  const seen = new Set<string>();
  return pages.filter((page) => {
    if (seen.has(page.url)) return false;
    seen.add(page.url);
    return true;
  });
}
