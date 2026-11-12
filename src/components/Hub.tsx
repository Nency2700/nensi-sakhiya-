"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HUB_COPY, PROFILE, ROLE_META } from "@/lib/profile";
import type { Locale, Role } from "@/lib/types";
import { ROLES } from "@/lib/types";
import { CursorAura } from "./CursorAura";

export function Hub() {
  const [locale, setLocale] = useState<Locale>("en");
  const [role, setRole] = useState<Role>("full-stack");
  const copy = HUB_COPY[locale];

  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-[var(--bg)] text-[var(--ink)]">
      <CursorAura />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] md:block">
        <Image
          src={PROFILE.photos.gallery[1]}
          alt=""
          fill
          priority
          className="object-cover object-[center_18%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/55 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 py-16 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[11px] uppercase tracking-[0.32em] text-[var(--accent-deep)]"
        >
          {copy.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(3.4rem,8vw,6.5rem)] leading-[0.88] tracking-[-0.045em]"
        >
          {copy.brand}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="mt-6 max-w-xl text-xl text-[var(--body)] md:text-2xl"
        >
          {copy.title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.24 }}
          className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--muted)]"
        >
          {copy.lead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
          className="mt-10 max-w-xl"
        >
          <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
            {copy.chooseLang}
          </p>
          <div className="flex gap-2">
            {(["en", "de"] as Locale[]).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLocale(item)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  locale === item
                    ? "bg-[var(--ink)] text-[#fffaf6]"
                    : "btn-ghost"
                }`}
              >
                {item === "en" ? "English" : "Deutsch"}
              </button>
            ))}
          </div>

          <p className="mb-3 mt-8 text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
            {copy.chooseRole}
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {ROLES.map((item) => {
              const active = role === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setRole(item)}
                  className={`rounded-2xl border px-4 py-4 text-left transition hover:-translate-y-0.5 ${
                    active
                      ? "border-[var(--ink)] bg-[var(--ink)] text-[#fffaf6]"
                      : "border-[var(--line)] bg-[var(--surface)]/80 hover:border-[var(--accent)]"
                  }`}
                >
                  <span className="block font-[family-name:var(--font-display)] text-lg">
                    {ROLE_META[item].label[locale]}
                  </span>
                  <span className={`mt-1 block text-xs ${active ? "text-white/60" : "text-[var(--muted)]"}`}>
                    /{locale}/{item}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={`/${locale}/${role}`}
              className="btn-ink inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition"
            >
              {copy.enter}
              <ArrowUpRight size={16} />
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-[var(--muted)]">
              {copy.defaultNote}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
