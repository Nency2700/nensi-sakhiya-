import { PROFILE, SITE_URL } from "@/lib/profile";
import type { Locale, Role } from "@/lib/types";

export function personJsonLd(locale: Locale = "en", role?: Role) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    jobTitle:
      locale === "de" ? "Senior Softwareentwicklerin" : "Senior Software Engineer",
    url: role ? `${SITE_URL}/${locale}/${role}` : SITE_URL,
    email: `mailto:${PROFILE.email}`,
    telephone: "+918347049953",
    image: `${SITE_URL}${PROFILE.photos.hero}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    sameAs: [PROFILE.linkedin],
    knowsAbout: [
      "Next.js",
      "React",
      "React Native",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "AWS",
      "DevOps",
      "Docker",
      "Artificial Intelligence",
    ],
    knowsLanguage: ["en"],
    workLocation: {
      "@type": "Place",
      name: locale === "de" ? "Remote, weltweit" : "Remote",
    },
  };
}
