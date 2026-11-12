"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { HUB_COPY, PROFILE, ROLE_META } from "@/lib/profile";
import type { Locale, Role } from "@/lib/types";
import { ROLES } from "@/lib/types";

export function Hub() {
  const [locale, setLocale] = useState<Locale>("en");
  const [role, setRole] = useState<Role>("full-stack");
  const copy = HUB_COPY[locale];

  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-[var(--bg)] text-[var(--ink)]">
      <div className="absolute inset-0">
        <Image
          src={PROFILE.photos.gallery[1]}
          alt=""
          fill
          priority
          className="object-cover object-[center_20%] opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(238,242,241,0.97)_0%,rgba(238,242,241,0.88)_45%,rgba(238,242,241,0.55)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 py-16 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]"
        >
          {copy.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-[family-name:var(--font-display)] text-[clamp(3.2rem,9vw,6.2rem)] leading-[0.9] tracking-[-0.03em]"
        >
          {copy.brand}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="mt-6 max-w-2xl text-xl text-[var(--body)] md:text-2xl"
        >
          {copy.title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)] md:text-base"
        >
          {copy.lead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38 }}
          className="mt-12 grid max-w-3xl gap-8"
        >
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              {copy.chooseLang}
            </p>
            <div className="flex gap-2">
              {(["en", "de"] as Locale[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLocale(l)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium uppercase tracking-wide transition ${
                    locale === l
                      ? "bg-[var(--ink)] text-[var(--bg)]"
                      : "border border-[var(--line)] bg-white/40 text-[var(--body)]"
                  }`}
                >
                  {l === "en" ? "English" : "Deutsch"}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              {copy.chooseRole}
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {ROLES.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`rounded-2xl border px-5 py-4 text-left transition ${
                    role === r
                      ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--bg)]"
                      : "border-[var(--line)] bg-white/50 text-[var(--ink)] hover:border-[var(--ink)]/40"
                  }`}
                >
                  <span className="block font-[family-name:var(--font-display)] text-xl">
                    {ROLE_META[r].label[locale]}
                  </span>
                  <span
                    className={`mt-1 block text-xs ${
                      role === r ? "text-white/70" : "text-[var(--muted)]"
                    }`}
                  >
                    /{locale}/{r}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={`/${locale}/${role}`}
              className="rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-white shadow-[0_16px_40px_-18px_var(--accent)] transition hover:brightness-110"
            >
              {copy.enter}
            </Link>
            <p className="text-xs text-[var(--muted)]">{copy.defaultNote}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
