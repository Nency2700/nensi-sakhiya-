"use client";

import Image from "next/image";
import Link from "next/link";
function LinkIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.84-2.1 3.79-2.1 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24h-4V8.5z" />
    </svg>
  );
}
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Braces,
  Cloud,
  Database,
  Download,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { PROFILE, ROLE_META } from "@/lib/profile";
import type { Locale, PortfolioCopy, Role, SkillGroup } from "@/lib/types";
import { ROLES } from "@/lib/types";
import { FadeUp, Stagger, StaggerItem } from "./Motion";

const ICONS: LucideIcon[] = [Braces, Database, Cloud, Smartphone, Sparkles];

export function Stats({ locale }: { locale: Locale }) {
  const items =
    locale === "de"
      ? [
          ["5+", "Jahre"],
          ["8", "Produkte"],
          ["4", "Schwerpunkte"],
          ["EN · DE", "Lebenslauf"],
        ]
      : [
          ["5+", "Years"],
          ["8", "Products"],
          ["4", "Specialties"],
          ["EN · DE", "Résumés"],
        ];

  return (
    <section className="px-5 pb-8 md:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface)] md:grid-cols-4">
        {items.map(([value, label], i) => (
          <FadeUp key={label} delay={i * 0.05}>
            <div
              className={`px-6 py-7 ${i % 2 === 1 ? "border-l border-[var(--line)]" : ""} ${i > 1 ? "border-t border-[var(--line)] md:border-t-0" : ""} ${i > 0 ? "md:border-l md:border-[var(--line)]" : ""}`}
            >
              <p className="font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">
                {value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                {label}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

export function About({ locale, copy }: { locale: Locale; copy: PortfolioCopy }) {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-20 md:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.82fr_1.18fr]">
        <FadeUp>
          <div className="relative">
            <div className="overflow-hidden rounded-[1.8rem]">
              <Image
                src={PROFILE.photos.about}
                alt={`${PROFILE.name} portrait`}
                width={800}
                height={1000}
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <div className="absolute -right-3 bottom-8 max-w-[11rem] rounded-2xl bg-[var(--ink)] px-4 py-3 text-[#fffaf6] shadow-xl">
              <MapPin size={14} className="text-[var(--accent)]" />
              <p className="mt-2 text-sm leading-snug">{PROFILE.location[locale]}</p>
            </div>
          </div>
        </FadeUp>
        <div>
          <FadeUp>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent-deep)]">
              {copy.about.heading}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-[1.05] tracking-tight md:text-5xl">
              {locale === "de"
                ? "Klar im Denken. Ruhig im Handwerk."
                : "Clear thinking. Calm, polished craft."}
            </h2>
          </FadeUp>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--body)] md:text-lg">
            {copy.about.body.map((paragraph) => (
              <FadeUp key={paragraph.slice(0, 32)}>
                <p>{paragraph}</p>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="mt-8">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 text-sm text-[var(--ink)] underline decoration-[var(--accent)] decoration-2 underline-offset-4"
            >
              <Mail size={16} />
              {PROFILE.email}
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function chips(groups: SkillGroup[]) {
  return groups.flatMap((group) =>
    group.items.map((item) => ({ item, label: group.label })),
  );
}

export function Skills({ copy }: { copy: PortfolioCopy }) {
  const row = chips(copy.skills.groups);
  const loop = [...row, ...row];

  return (
    <section id="skills" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeUp>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent-deep)]">
            {copy.skills.heading}
          </p>
          <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">
            {copy.skills.lead}
          </h2>
        </FadeUp>
      </div>

      <div className="marquee mt-10 overflow-hidden">
        <div className="marquee-track flex w-max gap-3 px-3">
          {loop.map((chip, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <span
                key={`${chip.item}-${i}`}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--ink)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
              >
                <Icon size={15} className="text-[var(--accent)]" />
                {chip.item}
              </span>
            );
          })}
        </div>
      </div>
      <div className="marquee mt-3 overflow-hidden">
        <div className="marquee-track reverse flex w-max gap-3 px-3">
          {[...loop].reverse().map((chip, i) => (
            <span
              key={`b-${chip.item}-${i}`}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-4 py-2.5 text-sm text-[#fffaf6]"
            >
              {chip.item}
            </span>
          ))}
        </div>
      </div>

      <Stagger className="mx-auto mt-12 grid max-w-6xl gap-4 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
        {copy.skills.groups.map((group, index) => {
          const Icon = ICONS[index % ICONS.length];
          return (
            <StaggerItem key={group.label}>
              <div
                data-cursor="hot"
                className="group h-full rounded-[1.4rem] border border-[var(--line)] bg-[var(--surface)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-32px_rgba(27,20,18,0.6)]"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f6e7e1] text-[var(--accent-deep)] transition group-hover:rotate-6 group-hover:bg-[var(--ink)] group-hover:text-[#fffaf6]">
                  <Icon size={18} />
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl">
                  {group.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--body)]">
                  {group.items.join(" · ")}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}

export function Projects({ copy }: { copy: PortfolioCopy }) {
  const [lead, ...rest] = copy.projects.items;

  return (
    <section id="projects" className="scroll-mt-24 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent-deep)]">
            {copy.projects.heading}
          </p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">
            {copy.projects.lead}
          </h2>
        </FadeUp>

        {lead && (
          <FadeUp className="mt-10">
            <article
              data-cursor="hot"
              className="group relative overflow-hidden rounded-[1.8rem] bg-[var(--ink)] p-7 text-[#fffaf6] md:p-10"
            >
              <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-[var(--accent)]/30 blur-3xl transition duration-500 group-hover:scale-125" />
              <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/50">01</p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl md:text-5xl">
                    {lead.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#f0c2b4]">{lead.stack}</p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
                    {lead.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {lead.links?.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-xs transition hover:bg-white hover:text-[var(--ink)]"
                    >
                      {link.label}
                      <ArrowUpRight size={13} />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </FadeUp>
        )}

        <div className="mt-4 divide-y divide-[var(--line)] overflow-hidden rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface)]">
          {rest.map((project, index) => (
            <motion.article
              key={project.title}
              data-cursor="hot"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.04, duration: 0.45 }}
              className="group grid gap-3 px-5 py-6 transition hover:bg-[#fff8f4] md:grid-cols-[72px_1.2fr_0.9fr] md:items-center md:px-7"
            >
              <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--muted)] transition group-hover:text-[var(--accent)]">
                {String(index + 2).padStart(2, "0")}
              </p>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.08em] text-[var(--accent-deep)]">
                  {project.stack}
                </p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--body)]">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 md:justify-end">
                {project.links?.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--body)] transition group-hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[#fffaf6]"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={13}
                      className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience({ copy }: { copy: PortfolioCopy }) {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-y border-[var(--line)] bg-[color-mix(in_oklab,var(--surface)_70%,transparent)] px-5 py-20 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent-deep)]">
            {copy.experience.heading}
          </p>
          <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">
            {copy.experience.lead}
          </h2>
        </FadeUp>
        <div className="relative mt-12 space-y-0 pl-6 md:pl-0">
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-[var(--line)] md:left-[148px]" />
          {copy.experience.items.map((job, index) => (
            <FadeUp key={`${job.company}-${job.period}`} delay={index * 0.03}>
              <div className="relative grid gap-2 py-7 md:grid-cols-[160px_1fr] md:gap-10">
                <div className="md:text-right">
                  <span className="absolute left-[-18px] top-9 h-3.5 w-3.5 rounded-full border-2 border-[var(--surface)] bg-[var(--accent)] md:left-[142px]" />
                  <p className="text-sm text-[var(--ink)]">{job.period}</p>
                  <p className="text-xs text-[var(--muted)]">{job.location}</p>
                </div>
                <div className="rounded-2xl border border-transparent p-1 transition hover:border-[var(--line)] hover:bg-[var(--surface)] md:p-4">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--accent-deep)]">{job.company}</p>
                  <ul className="mt-3 space-y-1.5">
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
  const cards = [
    {
      href: `mailto:${PROFILE.email}`,
      label: copy.contact.emailLabel,
      value: PROFILE.email,
      icon: Mail,
    },
    {
      href: PROFILE.linkedin,
      label: copy.contact.linkedinLabel,
      value: "nensi-sakhiya",
      icon: LinkIcon,
      external: true,
    },
    {
      href: `tel:${PROFILE.phone.replace(/\s/g, "")}`,
      label: copy.contact.phoneLabel,
      value: PROFILE.phone,
      icon: Phone,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[var(--ink)] px-6 py-12 text-[#fffaf6] md:px-12 md:py-16">
        <FadeUp>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#f0c2b4]">
            {copy.contact.heading}
          </p>
          <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-6xl">
            {copy.contact.lead}
          </h2>
        </FadeUp>
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {cards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noreferrer" : undefined}
              data-cursor="hot"
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white hover:text-[var(--ink)]"
            >
              <card.icon size={18} className="text-[var(--accent)] group-hover:text-[var(--accent-deep)]" />
              <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-white/50 group-hover:text-[var(--muted)]">
                {card.label}
              </p>
              <p className="mt-1 break-all text-sm">{card.value}</p>
            </a>
          ))}
        </div>
        <FadeUp className="mt-8">
          <a
            href={resume}
            download
            className="inline-flex items-center gap-2 rounded-full bg-[#fffaf6] px-6 py-3 text-sm font-medium text-[var(--ink)] transition hover:bg-[var(--accent)] hover:text-white"
          >
            <Download size={16} />
            {copy.nav.resume}
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

export function RoleStrip({ locale, role }: { locale: Locale; role: Role }) {
  return (
    <section className="px-5 pb-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
          {locale === "de" ? "Weitere Schwerpunkte" : "Other specialties"}
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.map((item) => {
            const active = item === role;
            return (
              <Link
                key={item}
                href={`/${locale}/${item}`}
                data-cursor="hot"
                className={`group rounded-2xl border px-4 py-4 transition hover:-translate-y-1 ${
                  active
                    ? "border-[var(--ink)] bg-[var(--ink)] text-[#fffaf6]"
                    : "border-[var(--line)] bg-[var(--surface)] hover:border-[var(--accent)]"
                }`}
              >
                <span className="flex items-center justify-between font-[family-name:var(--font-display)] text-lg">
                  {ROLE_META[item].short[locale]}
                  <ArrowUpRight
                    size={16}
                    className={`transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                      active ? "text-[#f0c2b4]" : "text-[var(--accent)]"
                    }`}
                  />
                </span>
                <span className={`mt-1 block text-xs ${active ? "text-white/60" : "text-[var(--muted)]"}`}>
                  /{locale}/{item}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Footer({ copy }: { copy: PortfolioCopy }) {
  return (
    <footer className="border-t border-[var(--line)] px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <p>{copy.footer}</p>
        <Link href="/" className="hover:text-[var(--ink)]">
          Hub
        </Link>
      </div>
    </footer>
  );
}
