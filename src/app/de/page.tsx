import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";
import { getPortfolioContent, SITE_URL } from "@/lib/profile";

const copy = getPortfolioContent("de", "react-native");

export const metadata: Metadata = {
  title: { absolute: "Nensi Sakhiya — React-Native-Entwicklerin" },
  description: copy.metaDescription,
  alternates: {
    canonical: "/de",
    languages: {
      en: "/",
      de: "/de",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Nensi Sakhiya — React-Native-Entwicklerin",
    description: copy.metaDescription,
    url: `${SITE_URL}/de`,
    locale: "de_DE",
    alternateLocale: ["en_US"],
    type: "profile",
  },
};

export default function GermanPortfolioPage() {
  return <PortfolioPage locale="de" role="react-native" />;
}
