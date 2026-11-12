"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PROFILE, ROLE_META } from "@/lib/profile";
import type { Locale, PortfolioCopy, Role } from "@/lib/types";
import { ROLES } from "@/lib/types";
import { FadeUp, Stagger, StaggerItem } from "./Motion";

export function About({
  locale,
  copy,
}: {
  locale: Locale;
  copy: PortfolioCopy;
}) {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <FadeUp>
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <Image
              src={PROFILE.photos.about}
              alt={`${PROFILE.name} portrait`}
              width={800}
              height={1000}
              className="h-auto w-full object-cover"
            />
          </div>
        </FadeUp>
        <div>
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              {copy.about.heading}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--ink)] md:text-5xl">
              {locale === "de"
                ? "Eine smarte Entwicklerin mit klarer Handschrift."
                : "A sharp developer with a calm, polished craft."}
            </h2>
          </FadeUp>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--body)] md:text-lg">
            {copy.about.body.map((p) => (
              <FadeUp key={p.slice(0, 24)} delay={0.08}>
                <p>{p}</p>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.15} className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
            <span>{PROFILE.location[locale]}</span>
            <span aria-hidden>·</span>
            <a className="hover:text-[var(--accent)]" href={`mailto:${PROFILE.email}`}>
              {PROFILE.email}
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

export function Skills({ copy }: { copy: PortfolioCopy }) {
  return (
    <section id="skills" className="scroll-mt-24 border-y border-[var(--line)] bg-[var(--surface)] px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
            {copy.skills.heading}
          </p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--ink)] md:text-5xl">
            {copy.skills.lead}
          </h2>
        </FadeUp>
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {copy.skills.groups.map((g) => (
            <StaggerItem key={g.label}>
              <div className="h-full rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--ink)]">
                  {g.label}
                </h3>
                <ul className="mt-4 space-y-2">
                  {g.items.map((item) => (
                    <li key={item} className="text-sm text-[var(--body)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function Projects({ copy }: { copy: PortfolioCopy }) {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
            {copy.projects.heading}
          </p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--ink)] md:text-5xl">
            {copy.projects.lead}
          </h2>
        </FadeUp>
        <Stagger className="mt-14 grid gap-5 md:grid-cols-2">
          {copy.projects.items.map((p, i) => (
            <StaggerItem key={p.title}>
              <article className="group relative h-full overflow-hidden rounded-[1.35rem] border border-[var(--line)] bg-[var(--surface)] p-7 transition hover:border-[color-mix(in_oklab,var(--accent)_40%,var(--line))]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 transition group-hover:opacity-100" />
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.08em] text-[var(--accent)]">
                  {p.stack}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--body)]">
                  {p.description}
                </p>
                {p.links && p.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function Experience({ copy }: { copy: PortfolioCopy }) {
  return (
    <section id="experience" className="scroll-mt-24 border-y border-[var(--line)] bg-[var(--surface)] px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
            {copy.experience.heading}
          </p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--ink)] md:text-5xl">
            {copy.experience.lead}
          </h2>
        </FadeUp>
        <div className="mt-14 space-y-0">
          {copy.experience.items.map((job, idx) => (
            <FadeUp key={`${job.company}-${job.period}`} delay={idx * 0.04}>
              <div className="grid gap-4 border-t border-[var(--line)] py-8 md:grid-cols-[220px_1fr]">
                <div>
                  <p className="text-sm text-[var(--muted)]">{job.period}</p>
                  <p className="mt-1 text-sm text-[var(--body)]">{job.location}</p>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--accent)]">{job.company}</p>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((point) => (
                      <li key={point} className="text-sm leading-relaxed text-[var(--body)]">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact({
  locale,
  role,
  copy,
}: {
  locale: Locale;
  role: Role;
  copy: PortfolioCopy;
}) {
  const resume = ROLE_META[role].resumeFile(locale);
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
            {copy.contact.heading}
          </p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--ink)] md:text-5xl">
            {copy.contact.lead}
          </h2>
        </FadeUp>
        <FadeUp delay={0.1} className="mt-12 grid gap-6 md:grid-cols-3">
          <a
            href={`mailto:${PROFILE.email}`}
            className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent)]"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              {copy.contact.emailLabel}
            </p>
            <p className="mt-3 break-all text-[var(--ink)]">{PROFILE.email}</p>
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent)]"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              {copy.contact.linkedinLabel}
            </p>
            <p className="mt-3 text-[var(--ink)]">linkedin.com/in/nensi-sakhiya</p>
          </a>
          <a
            href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
            className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent)]"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              {copy.contact.phoneLabel}
            </p>
            <p className="mt-3 text-[var(--ink)]">{PROFILE.phone}</p>
          </a>
        </FadeUp>
        <FadeUp delay={0.15} className="mt-10">
          <a
            href={resume}
            download
            className="inline-flex rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-white shadow-[0_16px_40px_-18px_var(--accent)] transition hover:brightness-110"
          >
            {copy.nav.resume} PDF
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

export function RoleStrip({ locale, role }: { locale: Locale; role: Role }) {
  return (
    <div className="border-t border-[var(--line)] px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-[var(--muted)]">
          {locale === "de"
            ? "Andere Spezialpfade in diesem Repo"
            : "Other specialty paths in this repo"}
        </p>
        <div className="flex flex-wrap gap-2">
          {ROLES.map((r) => (
            <a
              key={r}
              href={`/${locale}/${r}`}
              className={`rounded-full px-4 py-2 text-sm transition ${
                r === role
                  ? "bg-[var(--ink)] text-[var(--bg)]"
                  : "border border-[var(--line)] text-[var(--body)] hover:border-[var(--ink)]"
              }`}
            >
              {ROLE_META[r].short[locale]}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <section className="overflow-hidden px-5 pb-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="mb-8 text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
            Studio
          </p>
        </FadeUp>
        <div className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {PROFILE.photos.gallery.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="relative h-64 w-48 shrink-0 overflow-hidden rounded-2xl md:h-80 md:w-60"
            >
              <Image
                src={src}
                alt={`${PROFILE.name} professional photo ${i + 1}`}
                fill
                className="object-cover object-top"
                sizes="240px"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer({ copy }: { copy: PortfolioCopy }) {
  return (
    <footer className="border-t border-[var(--line)] px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <p>{copy.footer}</p>
        <a href="/" className="hover:text-[var(--ink)]">
          Hub /
        </a>
      </div>
    </footer>
  );
}
