"use client";

import { useEffect } from "react";
import { getPortfolioContent, ROLE_META } from "@/lib/profile";
import type { Locale, Role } from "@/lib/types";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import {
  About,
  Contact,
  Experience,
  Footer,
  Gallery,
  Projects,
  RoleStrip,
  Skills,
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
    document.documentElement.style.setProperty(
      "--accent",
      ROLE_META[role].accent,
    );
  }, [role]);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <Navbar locale={locale} role={role} copy={copy} />
      <main>
        <Hero locale={locale} role={role} copy={copy} />
        <About locale={locale} copy={copy} />
        <Skills copy={copy} />
        <Projects copy={copy} />
        <Experience copy={copy} />
        <Gallery />
        <Contact locale={locale} role={role} copy={copy} />
        <RoleStrip locale={locale} role={role} />
      </main>
      <Footer copy={copy} />
    </div>
  );
}
