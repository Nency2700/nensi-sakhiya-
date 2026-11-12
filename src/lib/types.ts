export type Locale = "en" | "de";
export type Role = "full-stack" | "react-native" | "ai-engineer" | "devops";

export const LOCALES: Locale[] = ["en", "de"];
export const ROLES: Role[] = [
  "full-stack",
  "react-native",
  "ai-engineer",
  "devops",
];

export function isLocale(v: string): v is Locale {
  return LOCALES.includes(v as Locale);
}

export function isRole(v: string): v is Role {
  return ROLES.includes(v as Role);
}

export type Project = {
  title: string;
  stack: string;
  description: string;
  links?: { label: string; href: string }[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Stat = {
  value: string;
  label: string;
};

export type PortfolioCopy = {
  metaTitle: string;
  metaDescription: string;
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
    resume: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  stats: Stat[];
  about: {
    heading: string;
    title: string;
    body: string[];
  };
  skills: {
    heading: string;
    lead: string;
    groups: SkillGroup[];
  };
  projects: {
    heading: string;
    lead: string;
    items: Project[];
  };
  experience: {
    heading: string;
    lead: string;
    items: Experience[];
  };
  contact: {
    heading: string;
    lead: string;
    emailLabel: string;
    linkedinLabel: string;
    phoneLabel: string;
  };
  footer: string;
};
