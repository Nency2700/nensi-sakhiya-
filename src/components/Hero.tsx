"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
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
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <ScaleImage />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(238,242,241,0.96)_0%,rgba(238,242,241,0.84)_42%,rgba(238,242,241,0.28)_68%,rgba(15,24,22,0.38)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(255,255,255,0.4),transparent_45%)]" />
      </div>

      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-end gap-10 px-5 pb-16 pt-28 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8 md:pb-20 md:pt-24">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-xs uppercase tracking-[0.28em] text-[var(--muted)]"
          >
            {ROLE_META[role].label[locale]}
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,5.6rem)] leading-[0.92] tracking-[-0.03em] text-[var(--ink)]"
          >
            {PROFILE.name}
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--body)] md:text-xl"
          >
            {copy.hero.title}
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--muted)] md:text-base"
          >
            {copy.hero.subtitle}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--bg)] transition hover:bg-[var(--accent)]"
            >
              {copy.hero.ctaPrimary}
            </a>
            <a
              href={resume}
              download
              className="rounded-full border border-[var(--ink)]/20 bg-white/50 px-6 py-3 text-sm font-medium text-[var(--ink)] backdrop-blur transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {copy.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden w-full max-w-md md:block lg:max-w-lg"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--accent)_28%,transparent),transparent_60%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/50 shadow-[0_40px_80px_-40px_rgba(20,30,25,0.55)]">
            <Image
              src={PROFILE.photos.hero}
              alt={`Professional portrait of ${PROFILE.name}`}
              width={900}
              height={1100}
              priority
              className="h-auto w-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-[var(--muted)] md:block"
      >
        scroll
      </motion.div>
    </section>
  );
}

function ScaleImage() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="absolute inset-0 md:hidden"
      initial={reduce ? false : { scale: 1.08 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src={PROFILE.photos.hero}
        alt=""
        fill
        priority
        className="object-cover object-[center_18%]"
      />
    </motion.div>
  );
}
