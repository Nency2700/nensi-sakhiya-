"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { localePath, PROFILE, ROLE_META } from "@/lib/profile";
import type { Locale, PortfolioCopy, Role } from "@/lib/types";

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

  function stayHere() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-[#eadfd3] bg-[#f7f2ea]/95 shadow-[0_10px_30px_-24px_rgba(27,20,18,0.45)] backdrop-blur-xl"
          : "border-[#eadfd3]/70 bg-[#f7f2ea]/90 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <button
          type="button"
          onClick={stayHere}
          className="font-[family-name:var(--font-display)] text-lg tracking-tight text-[#1b1412] md:text-xl"
        >
          {PROFILE.name}
        </button>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm text-[#5c514c] transition hover:text-[#1b1412]"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#c45c3e] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="seg" role="group" aria-label="Language">
            {(["en", "de"] as Locale[]).map((item) => {
              const active = locale === item;
              return (
                <a
                  key={item}
                  href={localePath(item, role)}
                  aria-current={active ? "page" : undefined}
                  hrefLang={item}
                >
                  {item}
                </a>
              );
            })}
          </div>
          <a
            href={resume}
            download
            className="btn-ink inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium"
          >
            <Download size={15} />
            <span className="hidden sm:inline">{copy.nav.resume}</span>
          </a>
          <button
            type="button"
            aria-label="Menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#eadfd3] bg-[#fffdf9] text-[#1b1412] lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#eadfd3] bg-[#f7f2ea] px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-3 text-[#1b1412]">
            {links.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
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
          </div>
        </div>
      )}
    </motion.header>
  );
}
