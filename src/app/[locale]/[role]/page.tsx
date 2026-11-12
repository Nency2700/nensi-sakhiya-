import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioPage } from "@/components/PortfolioPage";
import { getPortfolioContent, ROLE_META, SITE_URL } from "@/lib/profile";
import { isLocale, isRole, LOCALES, ROLES, type Locale, type Role } from "@/lib/types";

type Params = { locale: string; role: string };

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    ROLES.map((role) => ({ locale, role })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale: localeParam, role: roleParam } = await params;
  if (!isLocale(localeParam) || !isRole(roleParam)) {
    return { title: "Not found" };
  }
  const locale = localeParam as Locale;
  const role = roleParam as Role;
  const copy = getPortfolioContent(locale, role);
  const path = `/${locale}/${role}`;
  const title = ROLE_META[role].label[locale];
  const description =
    locale === "de"
      ? `${copy.metaDescription} Lebenslauf als PDF. Portfolio für Personalverantwortliche in Deutschland, Österreich und der Schweiz.`
      : `${copy.metaDescription} Downloadable résumé. Open to remote collaboration with European teams.`;

  return {
    title,
    description,
    keywords:
      locale === "de"
        ? [
            "Nensi Sakhiya",
            "Softwareentwicklerin",
            title,
            "Lebenslauf",
            "Remote",
            "Next.js",
            "React Native",
            "Full Stack",
            "DevOps",
            "KI",
          ]
        : [
            "Nensi Sakhiya",
            "Senior Software Engineer",
            title,
            "Resume",
            "Remote",
            "Next.js",
            "React Native",
          ],
    alternates: {
      canonical: path,
      languages: {
        en: `/en/${role}`,
        de: `/de/${role}`,
        "x-default": `/en/${role}`,
      },
    },
    openGraph: {
      title: `${title} · Nensi Sakhiya`,
      description,
      url: `${SITE_URL}${path}`,
      locale: locale === "de" ? "de_DE" : "en_US",
      alternateLocale: locale === "de" ? ["en_US"] : ["de_DE"],
      type: "profile",
    },
  };
}

export default async function RolePortfolioPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale: localeParam, role: roleParam } = await params;
  if (!isLocale(localeParam) || !isRole(roleParam)) {
    notFound();
  }
  return (
    <PortfolioPage locale={localeParam as Locale} role={roleParam as Role} />
  );
}
