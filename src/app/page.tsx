import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";
import { getPortfolioContent, SITE_URL } from "@/lib/profile";

const copy = getPortfolioContent("en", "react-native");

export const metadata: Metadata = {
  title: { absolute: "Nensi Sakhiya — React Native Developer" },
  description: copy.metaDescription,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      de: "/de",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Nensi Sakhiya — React Native Developer",
    description: copy.metaDescription,
    url: SITE_URL,
    locale: "en_US",
    alternateLocale: ["de_DE"],
    type: "profile",
  },
};

export default function HomePage() {
  return <PortfolioPage locale="en" role="react-native" />;
}
