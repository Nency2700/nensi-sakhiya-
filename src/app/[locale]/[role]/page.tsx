import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioPage } from "@/components/PortfolioPage";
import { getPortfolioContent, ROLE_META } from "@/lib/profile";
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
  return {
    title: ROLE_META[role].label[locale],
    description: copy.metaDescription,
    alternates: {
      languages: {
        en: `/en/${role}`,
        de: `/de/${role}`,
      },
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
