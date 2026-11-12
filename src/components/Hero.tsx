"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import { PROFILE, ROLE_META } from "@/lib/profile";
import type { Locale, PortfolioCopy, Role } from "@/lib/types";

export function Hero({
  locale,
  role,
  copy,
}: {
  locale: Locale;
  role: Role;
  copy: PortfolioCopy;
}) {
  const reduce = useReducedMotion();
  const resume = ROLE_META[role].resumeFile(locale);

  return (
    <section className="relative overflow-hidden px-5 pb-10 pt-28 md:px-8 md:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] uppercase tracking-[0.32em] text-[var(--accent-deep)]"
          >
            {ROLE_META[role].label[locale]}
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-[family-name:var(--font-display)] text-[clamp(3.4rem,8vw,6.4rem)] leading-[0.88] tracking-[-0.045em]"
          >
            {PROFILE.name.split(" ")[0]}
            <span className="block text-[var(--accent)]">
              {PROFILE.name.split(" ")[1]}
            </span>
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--body)] md:text-xl"
          >
            {copy.hero.title}
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--muted)] md:text-base"
          >
            {copy.hero.subtitle}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="btn-ink inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition"
            >
              {copy.hero.ctaPrimary}
              <ArrowDownRight size={16} />
            </a>
            <a
              href={resume}
              download
              className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition"
            >
              <Download size={16} />
              {copy.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -left-6 top-8 hidden h-28 w-28 rounded-full bg-[var(--glow)] blur-2xl md:block" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[var(--surface)] shadow-[0_30px_80px_-40px_rgba(27,20,18,0.55)]">
            <Image
              src={PROFILE.photos.hero}
              alt={`Professional portrait of ${PROFILE.name}`}
              width={900}
              height={1100}
              priority
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55 }}
            className="absolute -bottom-5 left-5 rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 shadow-lg md:left-auto md:right-[-12px]"
          >
            <p className="font-[family-name:var(--font-display)] text-2xl leading-none">
              5+
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
              {locale === "de" ? "Jahre Produktion" : "Years shipping"}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
