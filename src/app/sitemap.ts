import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/profile";
import { LOCALES, ROLES } from "@/lib/types";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-11-13");
  const rolePages = LOCALES.flatMap((locale) =>
    ROLES.map((role) => ({
      url: `${SITE_URL}/${locale}/${role}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: locale === "de" ? 0.9 : 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/en/${role}`,
          de: `${SITE_URL}/de/${role}`,
          "x-default": `${SITE_URL}/en/${role}`,
        },
      },
    })),
  );

  return [
    {
      url: SITE_URL,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...rolePages,
  ];
}
