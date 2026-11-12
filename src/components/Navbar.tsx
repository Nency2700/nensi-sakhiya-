"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { PROFILE, ROLE_META } from "@/lib/profile";
import type { Locale, PortfolioCopy, Role } from "@/lib/types";
import { ROLES } from "@/lib/types";

export function Navbar({
  locale,
  role,
  copy,
}: {
  locale: Locale;
  role: Role;
  copy: PortfolioCopy;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const resume = ROLE_META[role].resumeFile(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: copy.nav.about },
    { href: "#skills", label: copy.nav.skills },
    { href: "#projects", label: copy.nav.projects },
    { href: "#experience", label: copy.nav.experience },
    { href: "#contact", label: copy.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--bg)_86%,white)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link href="/" className="leading-none">
          <span className="font-[family-name:var(--font-display)] text-lg tracking-tight md:text-xl">
            {PROFILE.name}
          </span>
          <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
            {ROLE_META[role].short[locale]}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm text-[var(--muted)] transition hover:text-[var(--ink)]"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden rounded-full border border-[var(--line)] bg-[var(--surface)] p-1 sm:flex">
            {(["en", "de"] as Locale[]).map((l) => (
              <Link
                key={l}
                href={`/${l}/${role}`}
                className={`rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wide transition ${
                  locale === l
                    ? "bg-[var(--ink)] text-[#fffaf6]"
                    : "text-[var(--muted)] hover:text-[var(--ink)]"
                }`}
              >
                {l}
              </Link>
            ))}
          </div>
          <a
            href={resume}
            download
            className="btn-ink hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition md:inline-flex"
          >
            <Download size={15} />
            {copy.nav.resume}
          </a>
          <button
            type="button"
            aria-label="Menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--bg)] px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              href={resume}
              download
              className="btn-ink mt-2 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm"
            >
              <Download size={15} />
              {copy.nav.resume}
            </a>
            <div className="mt-2 flex flex-wrap gap-2">
              {ROLES.map((r) => (
                <Link
                  key={r}
                  href={`/${locale}/${r}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-full px-3 py-1 text-xs ${
                    r === role
                      ? "bg-[var(--ink)] text-[#fffaf6]"
                      : "border border-[var(--line)] text-[var(--muted)]"
                  }`}
                >
                  {ROLE_META[r].short[locale]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}
