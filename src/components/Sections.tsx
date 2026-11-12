"use client";

import Image from "next/image";
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
import { motion, useReducedMotion } from "framer-motion";
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
import type { Locale, PortfolioCopy, Role } from "@/lib/types";
import { FadeUp, Stagger, StaggerItem } from "./Motion";

const ICONS: LucideIcon[] = [Braces, Database, Cloud, Smartphone, Sparkles];

export function About({ locale, copy }: { locale: Locale; copy: PortfolioCopy }) {
  return (
    <section id="about" className="scroll-mt-28 px-5 py-20 md:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <FadeUp>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent-deep)]">
              {copy.about.heading}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-[1.05] tracking-tight text-[#1b1412] md:text-5xl">
              {copy.about.title}
            </h2>
          </FadeUp>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--body)] md:text-lg">
            {copy.about.body.map((paragraph) => (
              <FadeUp key={paragraph.slice(0, 32)}>
                <p>{paragraph}</p>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#1b1412]">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 underline decoration-[#c45c3e] decoration-2 underline-offset-4"
            >
              <Mail size={16} />
              {PROFILE.email}
            </a>
            <span className="inline-flex items-center gap-2 text-[#5c514c]">
              <MapPin size={15} className="text-[var(--accent)]" />
              {PROFILE.location[locale]}
            </span>
          </FadeUp>
        </div>
        <FadeUp>
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[1.75rem] bg-[#eadfd3] shadow-[0_24px_50px_-30px_rgba(27,20,18,0.5)] ring-1 ring-[#eadfd3]">
            <Image
              src={PROFILE.photos.about}
              alt={`Portrait of ${PROFILE.name}`}
              width={800}
              height={1000}
              className="aspect-[4/5] w-full object-cover object-[center_20%]"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export function Skills({ copy }: { copy: PortfolioCopy }) {
  const reduce = useReducedMotion();
  const names = copy.skills.groups.flatMap((group) => group.items);
  const ribbon = [...names, ...names];

  return (
    <section id="skills" className="scroll-mt-28 overflow-hidden px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#9a3f28]">
            {copy.skills.heading}
          </p>
          <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-4xl tracking-tight text-[#1b1412] md:text-5xl">
            {copy.skills.lead}
          </h2>
        </FadeUp>
      </div>

      <div className="marquee relative left-1/2 mt-8 w-screen -translate-x-1/2 overflow-hidden border-y border-[#eadfd3] bg-[#fffdf9]/80 py-3">
        <div
          className="marquee-track flex w-max gap-2 px-3"
          style={reduce ? { animation: "none" } : undefined}
        >
          {ribbon.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="inline-flex rounded-full bg-[#f6e7e1] px-3 py-1 text-sm text-[#9a3f28]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <Stagger className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-2">
        {copy.skills.groups.map((group, index) => {
          const Icon = ICONS[index % ICONS.length];
          return (
            <StaggerItem key={group.label}>
              <article className="h-full rounded-[1.5rem] border border-[#eadfd3] bg-[#fffdf9] p-6 text-[#1b1412] shadow-[0_18px_40px_-32px_rgba(27,20,18,0.45)]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f6e7e1] text-[#9a3f28]">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl">{group.label}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={reduce ? false : { opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ delay: itemIndex * 0.05, duration: 0.4 }}
                      whileHover={reduce ? undefined : { y: -3 }}
                    >
                      <span className="inline-flex rounded-full border border-[#eadfd3] bg-[#fffdf9] px-3 py-1.5 text-sm text-[#1b1412] transition duration-200 hover:border-[#1b1412] hover:bg-[#1b1412] hover:text-white">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </article>
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
    <section id="projects" className="scroll-mt-28 px-5 py-20 md:px-8">
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
                      className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-xs text-[#fffaf6] transition hover:bg-[#fffaf6] hover:text-[#1b1412]"
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
              className="group grid gap-3 bg-[#fffdf9] px-5 py-6 text-[#1b1412] transition hover:bg-[#fff6f1] md:grid-cols-[72px_1.2fr_0.9fr] md:items-center md:px-7"
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
                    className="inline-flex items-center gap-1 rounded-full border border-[#eadfd3] bg-[#fffdf9] px-3 py-1 text-xs text-[#1b1412] transition hover:border-[#1b1412] hover:bg-[#1b1412] hover:text-white"
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
      className="scroll-mt-28 border-y border-[var(--line)] bg-[color-mix(in_oklab,var(--surface)_70%,transparent)] px-5 py-20 md:px-8"
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
        <div className="relative mt-12">
          <div className="absolute bottom-2 left-[5px] top-3 w-px bg-[#eadfd3] md:left-[200px]" />
          {copy.experience.items.map((job, index) => (
            <FadeUp key={`${job.company}-${job.period}`} delay={index * 0.03}>
              <article className="relative grid gap-2 py-7 md:grid-cols-[200px_1fr]">
                <div className="pl-8 md:pl-0 md:pr-10 md:text-right">
                  <span className="absolute left-0 top-9 h-2.5 w-2.5 rounded-full bg-[var(--accent)] ring-4 ring-[#f7f2ea] md:left-[195px]" />
                  <p className="text-sm font-medium text-[#1b1412]">{job.period}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#8a7b72]">
                    {job.location}
                  </p>
                </div>
                <div className="pl-8 md:pl-12">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-[#1b1412]">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--accent-deep)]">{job.company}</p>
                  <ul className="mt-3 space-y-1.5">
                    {job.points.map((point) => (
                      <li key={point} className="text-sm leading-relaxed text-[#4d433e]">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
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
    <section id="contact" className="scroll-mt-28 px-5 py-20 md:px-8">
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
              className="group rounded-2xl border border-white/15 bg-white/10 p-5 text-[#fffaf6] transition hover:-translate-y-1 hover:border-[#fffaf6] hover:bg-[#fffaf6] hover:text-[#1b1412]"
            >
              <card.icon size={18} className="text-[#f0c2b4] group-hover:text-[#9a3f28]" />
              <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-[#f0c2b4] group-hover:text-[#8a7b72]">
                {card.label}
              </p>
              <p className="mt-1 break-all text-sm text-[#fffaf6] group-hover:text-[#1b1412]">{card.value}</p>
            </a>
          ))}
        </div>
        <FadeUp className="mt-8">
          <a
            href={resume}
            download
            className="inline-flex items-center gap-2 rounded-full bg-[#fffaf6] px-6 py-3 text-sm font-medium text-[#1b1412] transition hover:bg-[#9a3f28] hover:text-white"
          >
            <Download size={16} />
            {copy.nav.resume}
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

export function Footer({ copy }: { copy: PortfolioCopy }) {
  return (
    <footer className="border-t border-[#eadfd3] px-5 py-8 md:px-8">
      <div className="mx-auto max-w-6xl text-sm text-[#8a7b72]">
        <p>{copy.footer}</p>
      </div>
    </footer>
  );
}
