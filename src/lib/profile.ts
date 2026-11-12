import type { Experience, Locale, Project, Role, SkillGroup } from "./types";

export const SITE_URL = "https://nensi-sakhiya.vercel.app";

export const PROFILE = {
  name: "Nensi Sakhiya",
  email: "nensinsakhiya@gmail.com",
  phone: "+91 8347049953",
  location: {
    en: "Ahmedabad, Gujarat, India",
    de: "Ahmedabad, Gujarat, Indien",
  },
  linkedin: "https://www.linkedin.com/in/nensi-sakhiya-96580b208/",
  photos: {
    hero: "/photos/hero.jpg",
    about: "/photos/about.jpg",
    gallery: [
      "/photos/portrait-1.jpg",
      "/photos/portrait-2.jpg",
      "/photos/portrait-3.jpg",
      "/photos/portrait-4.jpg",
      "/photos/portrait-5.jpg",
      "/photos/portrait-6.jpg",
      "/photos/portrait-7.jpg",
      "/photos/portrait-8.jpg",
    ],
  },
} as const;

export const ROLE_META: Record<
  Role,
  {
    slug: Role;
    label: { en: string; de: string };
    short: { en: string; de: string };
    accent: string;
    resumeFile: (locale: Locale) => string;
  }
> = {
  "full-stack": {
    slug: "full-stack",
    label: {
      en: "Full Stack Developer",
      de: "Full-Stack-Entwicklerin",
    },
    short: { en: "Full Stack", de: "Full Stack" },
    accent: "#c45c3e",
    resumeFile: (locale) => `/resumes/${locale}-full-stack.pdf`,
  },
  "react-native": {
    slug: "react-native",
    label: {
      en: "React Native Developer",
      de: "React-Native-Entwicklerin",
    },
    short: { en: "React Native", de: "React Native" },
    accent: "#8d4a3c",
    resumeFile: (locale) => `/resumes/${locale}-react-native.pdf`,
  },
  "ai-engineer": {
    slug: "ai-engineer",
    label: { en: "AI Engineer", de: "AI-Engineerin" },
    short: { en: "AI Engineer", de: "AI Engineer" },
    accent: "#a33d4c",
    resumeFile: (locale) => `/resumes/${locale}-ai-engineer.pdf`,
  },
  devops: {
    slug: "devops",
    label: { en: "DevOps Engineer", de: "DevOps-Engineerin" },
    short: { en: "DevOps", de: "DevOps" },
    accent: "#7a5346",
    resumeFile: (locale) => `/resumes/${locale}-devops.pdf`,
  },
};

export const SHARED_EXPERIENCE_EN: Experience[] = [
  {
    company: "Buzytech Technologies Pvt. Ltd.",
    role: "Senior Software Engineer",
    period: "Apr 2026 — Present",
    location: "Remote",
    points: [
      "Building scalable web and mobile products for international clients.",
      "Owning architecture, APIs, and performance across the delivery stack.",
      "Mentoring peers, running Agile rituals, and shipping production releases.",
    ],
  },
  {
    company: "Budventure Technologies Pvt. Ltd.",
    role: "Senior Software Engineer",
    period: "Feb 2025 — Apr 2026",
    location: "Ahmedabad, India",
    points: [
      "Shipped full-stack apps with Next.js, Node.js, and PostgreSQL.",
      "Designed REST APIs and cloud deployments on AWS EC2.",
      "Delivered React Native clients with auth and payment integrations.",
    ],
  },
  {
    company: "PLUSINFOSYS",
    role: "Software Engineer",
    period: "Apr 2024 — Jan 2025",
    location: "Ahmedabad, India",
    points: [
      "Enhanced web and mobile products from requirements through release.",
      "Improved performance, fixed production issues, and integrated APIs.",
    ],
  },
  {
    company: "TRooTech Business Solutions Pvt. Ltd.",
    role: "Software Engineer — React Native",
    period: "Nov 2022 — Feb 2024",
    location: "Ahmedabad, India",
    points: [
      "Built cross-platform mobile apps with GraphQL and REST integrations.",
      "Created reusable components, state patterns, and polished UX flows.",
    ],
  },
  {
    company: "Metizsoft Solutions Pvt. Ltd.",
    role: "Junior Software Engineer — React Native",
    period: "Sep 2021 — Nov 2022",
    location: "Ahmedabad, India",
    points: [
      "Delivered Android and React Native apps for multiple client briefs.",
      "Owned feature work, bug fixes, testing, and release support.",
    ],
  },
  {
    company: "TOPS Technologies Pvt. Ltd.",
    role: "Internship Trainee — Android",
    period: "Nov 2020 — Mar 2021",
    location: "Rajkot, India",
    points: [
      "Completed Android development training with Java and the Android SDK.",
      "Built sample apps covering architecture, debugging, and deployment.",
    ],
  },
];

export const SHARED_EXPERIENCE_DE: Experience[] = [
  {
    company: "Buzytech Technologies Pvt. Ltd.",
    role: "Senior Software Engineer",
    period: "Apr 2026 — heute",
    location: "Remote",
    points: [
      "Entwicklung skalierbarer Web- und Mobile-Produkte für internationale Kunden.",
      "Verantwortung für Architektur, APIs und Performance über den gesamten Stack.",
      "Mentoring, Agile-Abläufe und produktive Releases.",
    ],
  },
  {
    company: "Budventure Technologies Pvt. Ltd.",
    role: "Senior Software Engineer",
    period: "Feb 2025 — Apr 2026",
    location: "Ahmedabad, Indien",
    points: [
      "Full-Stack-Apps mit Next.js, Node.js und PostgreSQL geliefert.",
      "REST-APIs und Cloud-Deployments auf AWS EC2 umgesetzt.",
      "React-Native-Clients mit Auth- und Payment-Integrationen gebaut.",
    ],
  },
  {
    company: "PLUSINFOSYS",
    role: "Software Engineer",
    period: "Apr 2024 — Jan 2025",
    location: "Ahmedabad, Indien",
    points: [
      "Web- und Mobile-Produkte von Anforderung bis Release weiterentwickelt.",
      "Performance verbessert, Produktionsprobleme behoben und APIs integriert.",
    ],
  },
  {
    company: "TRooTech Business Solutions Pvt. Ltd.",
    role: "Software Engineer — React Native",
    period: "Nov 2022 — Feb 2024",
    location: "Ahmedabad, Indien",
    points: [
      "Cross-Platform-Mobile-Apps mit GraphQL- und REST-Integrationen gebaut.",
      "Wiederverwendbare Komponenten, State-Patterns und UX-Flows erstellt.",
    ],
  },
  {
    company: "Metizsoft Solutions Pvt. Ltd.",
    role: "Junior Software Engineer — React Native",
    period: "Sep 2021 — Nov 2022",
    location: "Ahmedabad, Indien",
    points: [
      "Android- und React-Native-Apps für mehrere Kundenprojekte geliefert.",
      "Features, Bugfixes, Tests und Release-Support verantwortet.",
    ],
  },
  {
    company: "TOPS Technologies Pvt. Ltd.",
    role: "Praktikantin — Android",
    period: "Nov 2020 — Mär 2021",
    location: "Rajkot, Indien",
    points: [
      "Android-Training mit Java und Android SDK abgeschlossen.",
      "Beispiel-Apps zu Architektur, Debugging und Deployment gebaut.",
    ],
  },
];

export const PROJECTS_EN: Project[] = [
  {
    title: "Zappfresh Mobile Ecosystem",
    stack: "React Native · Redux · REST · Geolocation · Geofencing",
    description:
      "Customer, rider, sales, and partner apps for a fresh-commerce platform — orders, payments, GPS delivery, and retailer workflows.",
    links: [
      {
        label: "Customer Android",
        href: "https://play.google.com/store/apps/details?id=com.zappfresh.android.zappfresh",
      },
      {
        label: "Customer iOS",
        href: "https://apps.apple.com/in/app/zappfresh/id1330553696",
      },
    ],
  },
  {
    title: "Welzaa Mental Health Platform",
    stack: "React Native · Next.js · Node.js · PostgreSQL · AWS",
    description:
      "End-to-end wellness product: mobile app, admin, counselor matching, scheduling, payments, and content operations.",
    links: [{ label: "welzaa.com", href: "https://welzaa.com" }],
  },
  {
    title: "Evify Rider & Fleet Platform",
    stack: "React Native · IoT · Bluetooth · GPS",
    description:
      "Rider and team apps with Bluetooth vehicle access, live GPS, attendance, salary flows, and role-based fleet ops.",
    links: [
      {
        label: "Rider App",
        href: "https://play.google.com/store/apps/details?id=com.evifyrider.android",
      },
      {
        label: "Team iOS",
        href: "https://apps.apple.com/in/app/evify-team/id6748310845",
      },
    ],
  },
  {
    title: "Tourigen Travel Experiences",
    stack: "React Native · Redux Thunk · Axios",
    description:
      "Travel booking app with auth, journey planning, guest management, search, favorites, and booking flows on Android & iOS.",
    links: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.toureign",
      },
      {
        label: "iOS",
        href: "https://apps.apple.com/app/app-store/id6459451393",
      },
    ],
  },
  {
    title: "PMPeople Project Management",
    stack: "React Native · Node.js · REST",
    description:
      "Enterprise mobile features for planning, collaboration, reporting, and task tracking across Android and iOS.",
    links: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.PMPeople",
      },
      {
        label: "iOS",
        href: "https://apps.apple.com/in/app/pmpeople/id1253865399",
      },
    ],
  },
  {
    title: "Fliip Fitness Platform",
    stack: "React Native · TypeScript · REST",
    description:
      "Fitness and activity product for workshops, yoga, games, and member engagement — features, APIs, and UX polish.",
  },
  {
    title: "Heer CRM",
    stack: "React Native · Axios · REST",
    description:
      "CRM workflows for customer management, automation, reporting, and operational tracking with reusable UI.",
  },
  {
    title: "Digital Society",
    stack: "React Native · Node.js",
    description:
      "Society management for maintenance, complaints, events, and resident–admin communication.",
  },
];

export const PROJECTS_DE: Project[] = [
  {
    title: "Zappfresh Mobile Ecosystem",
    stack: "React Native · Redux · REST · Geolocation · Geofencing",
    description:
      "Kunden-, Rider-, Sales- und Partner-Apps für Fresh Commerce — Bestellungen, Payments, GPS-Lieferung und Händlerprozesse.",
    links: [
      {
        label: "Customer Android",
        href: "https://play.google.com/store/apps/details?id=com.zappfresh.android.zappfresh",
      },
      {
        label: "Customer iOS",
        href: "https://apps.apple.com/in/app/zappfresh/id1330553696",
      },
    ],
  },
  {
    title: "Welzaa Mental-Health-Plattform",
    stack: "React Native · Next.js · Node.js · PostgreSQL · AWS",
    description:
      "End-to-End Wellness-Produkt: Mobile App, Admin, Counselor-Matching, Termine, Payments und Content-Betrieb.",
    links: [{ label: "welzaa.com", href: "https://welzaa.com" }],
  },
  {
    title: "Evify Rider- & Flottenplattform",
    stack: "React Native · IoT · Bluetooth · GPS",
    description:
      "Rider- und Team-Apps mit Bluetooth-Fahrzeugzugang, Live-GPS, Anwesenheit, Gehalt und rollenbasierter Flottensteuerung.",
    links: [
      {
        label: "Rider App",
        href: "https://play.google.com/store/apps/details?id=com.evifyrider.android",
      },
      {
        label: "Team iOS",
        href: "https://apps.apple.com/in/app/evify-team/id6748310845",
      },
    ],
  },
  {
    title: "Tourigen Travel Experiences",
    stack: "React Native · Redux Thunk · Axios",
    description:
      "Reisebuchungs-App mit Auth, Reiseplanung, Gästeverwaltung, Suche, Favoriten und Buchungsflows auf Android & iOS.",
    links: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.toureign",
      },
      {
        label: "iOS",
        href: "https://apps.apple.com/app/app-store/id6459451393",
      },
    ],
  },
  {
    title: "PMPeople Projektmanagement",
    stack: "React Native · Node.js · REST",
    description:
      "Enterprise-Mobile-Features für Planung, Kollaboration, Reporting und Aufgaben über Android und iOS.",
    links: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.PMPeople",
      },
      {
        label: "iOS",
        href: "https://apps.apple.com/in/app/pmpeople/id1253865399",
      },
    ],
  },
  {
    title: "Fliip Fitness-Plattform",
    stack: "React Native · TypeScript · REST",
    description:
      "Fitness- und Aktivitätsprodukt für Workshops, Yoga, Spiele und Mitgliederbindung — Features, APIs und UX.",
  },
  {
    title: "Heer CRM",
    stack: "React Native · Axios · REST",
    description:
      "CRM-Workflows für Kundenmanagement, Automatisierung, Reporting und operative Nachverfolgung.",
  },
  {
    title: "Digital Society",
    stack: "React Native · Node.js",
    description:
      "Hausverwaltungsplattform für Wartung, Beschwerden, Events und Kommunikation zwischen Bewohnern und Verwaltung.",
  },
];

const SKILLS_BY_ROLE: Record<Role, { en: SkillGroup[]; de: SkillGroup[] }> = {
  "full-stack": {
    en: [
      {
        label: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      },
      {
        label: "Backend",
        items: ["Node.js", "Express", "REST", "GraphQL", "JWT"],
      },
      {
        label: "Data & Cloud",
        items: ["PostgreSQL", "MongoDB", "AWS EC2", "S3", "Docker"],
      },
      {
        label: "Mobile",
        items: ["React Native", "Expo", "FCM", "Maps", "Payments"],
      },
    ],
    de: [
      {
        label: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      },
      {
        label: "Backend",
        items: ["Node.js", "Express", "REST", "GraphQL", "JWT"],
      },
      {
        label: "Daten & Cloud",
        items: ["PostgreSQL", "MongoDB", "AWS EC2", "S3", "Docker"],
      },
      {
        label: "Mobile",
        items: ["React Native", "Expo", "FCM", "Maps", "Payments"],
      },
    ],
  },
  "react-native": {
    en: [
      {
        label: "Mobile",
        items: [
          "React Native CLI",
          "Expo",
          "TypeScript",
          "React Navigation",
          "Hermes",
        ],
      },
      {
        label: "State & APIs",
        items: ["Redux Toolkit", "Thunk", "Axios", "GraphQL", "REST"],
      },
      {
        label: "Device Features",
        items: ["Maps", "Geofencing", "Bluetooth", "Camera", "Push"],
      },
      {
        label: "Delivery",
        items: ["Play Store", "App Store", "Firebase", "CI builds", "Debugging"],
      },
    ],
    de: [
      {
        label: "Mobile",
        items: [
          "React Native CLI",
          "Expo",
          "TypeScript",
          "React Navigation",
          "Hermes",
        ],
      },
      {
        label: "State & APIs",
        items: ["Redux Toolkit", "Thunk", "Axios", "GraphQL", "REST"],
      },
      {
        label: "Geräte-Features",
        items: ["Maps", "Geofencing", "Bluetooth", "Kamera", "Push"],
      },
      {
        label: "Delivery",
        items: ["Play Store", "App Store", "Firebase", "CI Builds", "Debugging"],
      },
    ],
  },
  "ai-engineer": {
    en: [
      {
        label: "AI / LLM",
        items: ["Prompting", "RAG", "Agents", "Tool calling", "Streaming"],
      },
      {
        label: "Stack",
        items: ["Python", "Node.js", "Next.js", "React Native", "Vector DBs"],
      },
      {
        label: "Product",
        items: ["Voice agents", "Vision flows", "Chat UIs", "Eval loops"],
      },
      {
        label: "Ops",
        items: ["AWS", "Docker", "CI/CD", "Monitoring", "Secure APIs"],
      },
    ],
    de: [
      {
        label: "AI / LLM",
        items: ["Prompting", "RAG", "Agents", "Tool Calling", "Streaming"],
      },
      {
        label: "Stack",
        items: ["Python", "Node.js", "Next.js", "React Native", "Vector DBs"],
      },
      {
        label: "Produkt",
        items: ["Voice Agents", "Vision Flows", "Chat UIs", "Eval Loops"],
      },
      {
        label: "Ops",
        items: ["AWS", "Docker", "CI/CD", "Monitoring", "Secure APIs"],
      },
    ],
  },
  devops: {
    en: [
      {
        label: "CI / CD",
        items: ["Pipelines", "GitHub Actions", "Release gates", "Artifacts"],
      },
      {
        label: "Containers",
        items: ["Docker", "Kubernetes", "ECS", "EKS", "Lambda"],
      },
      {
        label: "Cloud",
        items: ["AWS EC2", "S3", "IAM", "Networking", "Observability"],
      },
      {
        label: "App Delivery",
        items: ["MERN", "React Native", "Node.js", "IaC basics", "Monitoring"],
      },
    ],
    de: [
      {
        label: "CI / CD",
        items: ["Pipelines", "GitHub Actions", "Release Gates", "Artifacts"],
      },
      {
        label: "Container",
        items: ["Docker", "Kubernetes", "ECS", "EKS", "Lambda"],
      },
      {
        label: "Cloud",
        items: ["AWS EC2", "S3", "IAM", "Networking", "Observability"],
      },
      {
        label: "App Delivery",
        items: ["MERN", "React Native", "Node.js", "IaC Basics", "Monitoring"],
      },
    ],
  },
};

const HERO_BY_ROLE: Record<
  Role,
  { en: { title: string; subtitle: string }; de: { title: string; subtitle: string } }
> = {
  "full-stack": {
    en: {
      title: "I design and ship full-stack products that feel fast and reliable.",
      subtitle:
        "Senior engineer with 5+ years on MERN, Next.js, React Native, and AWS — from API design to polished mobile and web experiences.",
    },
    de: {
      title: "Ich entwerfe und liefere Full-Stack-Produkte, die schnell und zuverlässig wirken.",
      subtitle:
        "Senior Engineerin mit über fünf Jahren Erfahrung in MERN, Next.js, React Native und AWS — vom API-Design bis zu klaren Web- und Mobile-Erlebnissen.",
    },
  },
  "react-native": {
    en: {
      title: "I build production React Native apps people actually use every day.",
      subtitle:
        "5+ years shipping Android & iOS for delivery, fleet, health, travel, and enterprise — maps, geofencing, Bluetooth, and payments included.",
    },
    de: {
      title: "Ich baue produktionsreife React-Native-Apps, die Menschen täglich nutzen.",
      subtitle:
        "Über fünf Jahre Android- & iOS-Apps für Delivery, Flotte, Health, Travel und Enterprise — inklusive Maps, Geofencing, Bluetooth und Payments.",
    },
  },
  "ai-engineer": {
    en: {
      title: "I put intelligent workflows into real software products.",
      subtitle:
        "LLM features, RAG, agents, and vision flows — wired into MERN, Next.js, and React Native systems that run on AWS.",
    },
    de: {
      title: "Ich bringe intelligente Workflows in echte Softwareprodukte.",
      subtitle:
        "LLM-Features, RAG, Agents und Vision-Flows — integriert in MERN-, Next.js- und React-Native-Systeme auf AWS.",
    },
  },
  devops: {
    en: {
      title: "I take products from commit to production with calm, repeatable pipelines.",
      subtitle:
        "CI/CD, Docker, Kubernetes, and AWS delivery for web and mobile stacks — with monitoring that keeps releases trustworthy.",
    },
    de: {
      title: "Ich bringe Produkte mit ruhigen, wiederholbaren Pipelines von Commit bis Produktion.",
      subtitle:
        "CI/CD, Docker, Kubernetes und AWS-Delivery für Web- und Mobile-Stacks — mit Monitoring, dem Releases vertrauen können.",
    },
  },
};

const ABOUT_BY_ROLE: Record<Role, { en: string[]; de: string[] }> = {
  "full-stack": {
    en: [
      "I'm Nensi — a senior software engineer who loves turning messy product ideas into clean, shippable systems.",
      "I work across React, Next.js, Node.js, databases, and React Native, collaborating with designers and stakeholders to deliver dependable releases.",
    ],
    de: [
      "Ich bin Nensi — eine Senior Software Engineerin, die unscharfe Produktideen in klare, lieferbare Systeme verwandelt.",
      "Ich arbeite über React, Next.js, Node.js, Datenbanken und React Native hinweg — gemeinsam mit Design und Stakeholdern für verlässliche Releases.",
    ],
  },
  "react-native": {
    en: [
      "I'm Nensi — a mobile-focused engineer who ships cross-platform apps with care for performance, UX, and store-ready quality.",
      "From rider GPS apps to wellness platforms, I own features end-to-end: navigation, state, native device APIs, and release polish.",
    ],
    de: [
      "Ich bin Nensi — eine mobile-fokussierte Engineerin, die Cross-Platform-Apps mit Fokus auf Performance, UX und Store-Qualität liefert.",
      "Von Rider-GPS-Apps bis Wellness-Plattformen verantworte ich Features end-to-end: Navigation, State, native APIs und Release-Feinschliff.",
    ],
  },
  "ai-engineer": {
    en: [
      "I'm Nensi — a builder who connects modern AI capabilities to practical product surfaces.",
      "I combine LLM tooling with solid full-stack and mobile craft so intelligent features feel useful, not experimental.",
    ],
    de: [
      "Ich bin Nensi — eine Builderin, die moderne AI-Fähigkeiten an praktische Produktflächen anbindet.",
      "Ich kombiniere LLM-Tooling mit solidem Full-Stack- und Mobile-Handwerk, damit intelligente Features nützlich wirken — nicht experimentell.",
    ],
  },
  devops: {
    en: [
      "I'm Nensi — an engineer who cares as much about how software ships as how it looks.",
      "I automate builds, containerize services, and stabilize cloud releases so teams can move fast without breaking trust.",
    ],
    de: [
      "Ich bin Nensi — eine Engineerin, der die Auslieferung von Software genauso wichtig ist wie die Oberfläche.",
      "Ich automatisiere Builds, containerisiere Services und stabilisiere Cloud-Releases, damit Teams schnell bleiben ohne Vertrauen zu verlieren.",
    ],
  },
};

export function getPortfolioContent(locale: Locale, role: Role) {
  const meta = ROLE_META[role];
  const hero = HERO_BY_ROLE[role][locale];
  const aboutBody = ABOUT_BY_ROLE[role][locale];
  const skills = SKILLS_BY_ROLE[role][locale];
  const projects = locale === "en" ? PROJECTS_EN : PROJECTS_DE;
  const experience =
    locale === "en" ? SHARED_EXPERIENCE_EN : SHARED_EXPERIENCE_DE;

  if (locale === "de") {
    return {
      metaTitle: `${PROFILE.name} · ${meta.label.de}`,
      metaDescription: hero.subtitle,
      nav: {
        about: "Über mich",
        skills: "Skills",
        projects: "Projekte",
        experience: "Erfahrung",
        contact: "Kontakt",
        resume: "Lebenslauf",
      },
      hero: {
        title: hero.title,
        subtitle: hero.subtitle,
        ctaPrimary: "Projekte ansehen",
        ctaSecondary: "Lebenslauf laden",
      },
      about: {
        heading: "Über mich",
        body: aboutBody,
      },
      skills: {
        heading: "Skills",
        lead: "Ein klarer Überblick über die Werkzeuge, mit denen ich Produkte baue.",
        groups: skills,
      },
      projects: {
        heading: "Projekte",
        lead: "Ausgewählte Produkte aus Delivery, Health, Travel und Enterprise.",
        items: projects,
      },
      experience: {
        heading: "Erfahrung",
        lead: "Vom Junior Mobile Engineer zur Senior Software Engineerin.",
        items: experience,
      },
      contact: {
        heading: "Kontakt",
        lead: "Lass uns über dein nächstes Produkt sprechen.",
        emailLabel: "E-Mail",
        linkedinLabel: "LinkedIn",
        phoneLabel: "Telefon",
      },
      footer: `© 2026 ${PROFILE.name}. Gebaut mit Next.js & Framer Motion.`,
    };
  }

  return {
    metaTitle: `${PROFILE.name} · ${meta.label.en}`,
    metaDescription: hero.subtitle,
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      title: hero.title,
      subtitle: hero.subtitle,
      ctaPrimary: "View projects",
      ctaSecondary: "Download resume",
    },
    about: {
      heading: "About",
      body: aboutBody,
    },
    skills: {
      heading: "Skills",
      lead: "A focused toolkit for shipping reliable web and mobile products.",
      groups: skills,
    },
    projects: {
      heading: "Projects",
      lead: "Selected work across delivery, health, travel, and enterprise.",
      items: projects,
    },
    experience: {
      heading: "Experience",
      lead: "From junior mobile engineer to senior software engineer.",
      items: experience,
    },
    contact: {
      heading: "Contact",
      lead: "Let’s talk about your next product.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      phoneLabel: "Phone",
    },
    footer: `© 2026 ${PROFILE.name}. Built with Next.js & Framer Motion.`,
  };
}

export const HUB_COPY = {
  en: {
    brand: "Nensi Sakhiya",
    eyebrow: "Portfolio hub",
    title: "One site. Four specialist paths.",
    lead: "Choose a focus — Full Stack, React Native, AI, or DevOps — in English or German. Each path has its own résumé and story.",
    chooseRole: "Choose a specialty",
    chooseLang: "Language",
    enter: "Open portfolio",
    defaultNote: "Default language is English. German versions live under /de/…",
  },
  de: {
    brand: "Nensi Sakhiya",
    eyebrow: "Portfolio-Hub",
    title: "Eine Website. Vier Spezialpfade.",
    lead: "Wähle den Fokus — Full Stack, React Native, AI oder DevOps — auf Englisch oder Deutsch. Jeder Pfad hat eigenen Lebenslauf und Story.",
    chooseRole: "Spezialisierung wählen",
    chooseLang: "Sprache",
    enter: "Portfolio öffnen",
    defaultNote: "Standardsprache ist Englisch. Deutsche Versionen unter /de/…",
  },
};
