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
  const [first, last] = PROFILE.name.split(" ");

  return (
    <section id="top" className="relative overflow-hidden px-5 pb-8 pt-28 md:px-8 md:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_at_top_left,rgba(196,92,62,0.16),transparent_58%)]" />
      <div className="relative mx-auto grid max-w-6xl items-end gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:gap-16">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#9a3f28]"
          >
            {ROLE_META[role].label[locale]}
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-[family-name:var(--font-display)] text-[clamp(3.6rem,8.4vw,6.6rem)] leading-[0.86] tracking-[-0.05em] text-[#1b1412]"
          >
            {first}
            <span className="block text-[#c45c3e]">{last}</span>
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-7 max-w-xl font-[family-name:var(--font-display)] text-[1.65rem] leading-[1.15] tracking-[-0.03em] text-[#1b1412] md:text-4xl"
          >
            {copy.hero.title}
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#4d433e] md:text-base"
          >
            {copy.hero.subtitle}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="btn-ink inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium">
              {copy.hero.ctaPrimary}
              <ArrowDownRight size={16} />
            </a>
            <a href={resume} download className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium">
              <Download size={16} />
              {copy.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <motion.figure
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="overflow-hidden rounded-[1.75rem] bg-[#eadfd3] shadow-[0_28px_60px_-32px_rgba(27,20,18,0.55)] ring-1 ring-[#eadfd3]">
            <Image
              src={PROFILE.photos.hero}
              alt={`Portrait of ${PROFILE.name}`}
              width={900}
              height={1100}
              priority
              className="aspect-[4/5] w-full object-cover object-[center_18%]"
            />
          </div>
          <figcaption className="mt-4 flex items-center justify-between text-sm text-[#5c514c]">
            <span>{PROFILE.location[locale]}</span>
            <span>{locale === "de" ? "Seit 2021" : "Since 2021"}</span>
          </figcaption>
        </motion.figure>
      </div>

      <div className="relative mx-auto mt-14 grid max-w-6xl overflow-hidden rounded-[1.6rem] border border-[#eadfd3] bg-[#fffdf9] sm:grid-cols-3">
        {copy.stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-6 py-6 ${index > 0 ? "border-t border-[#eadfd3] sm:border-l sm:border-t-0" : ""}`}
          >
            <p className="font-[family-name:var(--font-display)] text-3xl tracking-tight text-[#1b1412] md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#8a7b72]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
