"use client";

import { useEffect } from "react";
import { getPortfolioContent, ROLE_META } from "@/lib/profile";
import { personJsonLd } from "@/lib/seo";
import type { Locale, Role } from "@/lib/types";
import { CursorAura } from "./CursorAura";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import {
  About,
  Contact,
  Experience,
  Footer,
  Projects,
  RoleStrip,
  Skills,
  Stats,
} from "./Sections";

export function PortfolioPage({
  locale,
  role,
}: {
  locale: Locale;
  role: Role;
}) {
  const copy = getPortfolioContent(locale, role);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.style.setProperty("--accent", ROLE_META[role].accent);
  }, [locale, role]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--ink)]">
      <CursorAura />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd(locale, role)),
        }}
      />
      <Navbar locale={locale} role={role} copy={copy} />
      <main className="relative z-10">
        <Hero locale={locale} role={role} copy={copy} />
        <Stats locale={locale} />
        <About locale={locale} copy={copy} />
        <Skills copy={copy} />
        <Projects copy={copy} />
        <Experience copy={copy} />
        <Contact locale={locale} role={role} copy={copy} />
        <RoleStrip locale={locale} role={role} />
      </main>
      <Footer copy={copy} />
    </div>
  );
}
