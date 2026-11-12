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

const LINKS = {
  zappfreshCustomerAndroid: {
    label: "Customer Android",
    href: "https://play.google.com/store/apps/details?id=com.zappfresh.android.zappfresh",
  },
  zappfreshCustomerIos: {
    label: "Customer iOS",
    href: "https://apps.apple.com/in/app/zappfresh/id1330553696",
  },
  welzaa: { label: "welzaa.com", href: "https://welzaa.com" },
  evifyRider: {
    label: "Rider App",
    href: "https://play.google.com/store/apps/details?id=com.evifyrider.android",
  },
  evifyTeamIos: {
    label: "Team iOS",
    href: "https://apps.apple.com/in/app/evify-team/id6748310845",
  },
  tourigenAndroid: {
    label: "Android",
    href: "https://play.google.com/store/apps/details?id=com.toureign",
  },
  tourigenIos: {
    label: "iOS",
    href: "https://apps.apple.com/app/app-store/id6459451393",
  },
  pmAndroid: {
    label: "Android",
    href: "https://play.google.com/store/apps/details?id=com.PMPeople",
  },
  pmIos: {
    label: "iOS",
    href: "https://apps.apple.com/in/app/pmpeople/id1253865399",
  },
} as const;

type CatalogProject = {
  roles: Role[];
  stack: string;
  links?: { label: string; href: string }[];
  en: { title: string; description: string };
  de: { title: string; description: string };
};

const CATALOG: CatalogProject[] = [
  {
    roles: ["react-native", "full-stack", "ai-engineer", "devops"],
    stack: "React Native · Redux · REST · Maps · Geofencing",
    links: [LINKS.zappfreshCustomerAndroid, LINKS.zappfreshCustomerIos],
    en: {
      title: "Zappfresh",
      description:
        "Customer, rider, sales, and partner apps. Orders, cart, payments, push, and GPS delivery with geofencing on Android and iOS.",
    },
    de: {
      title: "Zappfresh",
      description:
        "Kunden-, Rider-, Sales- und Partner-Apps. Bestellungen, Warenkorb, Payments, Push und GPS-Lieferung mit Geofencing auf Android und iOS.",
    },
  },
  {
    roles: ["react-native", "full-stack", "ai-engineer", "devops"],
    stack: "React Native · Next.js · Node.js · PostgreSQL · AWS",
    links: [LINKS.welzaa],
    en: {
      title: "Welzaa",
      description:
        "Mental wellness product: the mobile app, admin, counselor matching, scheduling, payments, and the content tools behind welzaa.com.",
    },
    de: {
      title: "Welzaa",
      description:
        "Mental-Wellness-Produkt: Mobile App, Admin, Counselor-Matching, Termine, Payments und die Content-Tools hinter welzaa.com.",
    },
  },
  {
    roles: ["react-native", "full-stack", "ai-engineer", "devops"],
    stack: "React Native · Bluetooth · GPS · IoT",
    links: [LINKS.evifyRider, LINKS.evifyTeamIos],
    en: {
      title: "Evify",
      description:
        "Rider and team apps for delivery, attendance, and salary. Bluetooth for vehicle access, live GPS, and role-based fleet work.",
    },
    de: {
      title: "Evify",
      description:
        "Rider- und Team-Apps für Lieferung, Anwesenheit und Gehalt. Bluetooth für Fahrzeugzugang, Live-GPS und rollenbasierte Flottenarbeit.",
    },
  },
  {
    roles: ["react-native", "full-stack", "ai-engineer", "devops"],
    stack: "React Native · Redux Thunk · Axios",
    links: [LINKS.tourigenAndroid, LINKS.tourigenIos],
    en: {
      title: "Tourigen",
      description:
        "Travel booking on Android and iOS: sign-in, journey planning, guests, search, favorites, and the booking flow.",
    },
    de: {
      title: "Tourigen",
      description:
        "Reisebuchung auf Android und iOS: Anmeldung, Reiseplanung, Gäste, Suche, Favoriten und der Buchungsablauf.",
    },
  },
  {
    roles: ["react-native", "full-stack", "ai-engineer", "devops"],
    stack: "React Native · Node.js · REST",
    links: [LINKS.pmAndroid, LINKS.pmIos],
    en: {
      title: "PMPeople",
      description:
        "Project-management screens on Android and iOS: planning, tasks, team collaboration, and reporting, backed by REST APIs.",
    },
    de: {
      title: "PMPeople",
      description:
        "Projektmanagement-Screens auf Android und iOS: Planung, Aufgaben, Teamzusammenarbeit und Reporting über REST-APIs.",
    },
  },
  {
    roles: ["react-native"],
    stack: "React Native · TypeScript · REST",
    en: {
      title: "Fliip",
      description:
        "Fitness product for workshops, yoga, games, and member activity. Feature work, API hooks, and shared components on Android and iOS.",
    },
    de: {
      title: "Fliip",
      description:
        "Fitness-Produkt für Workshops, Yoga, Spiele und Mitgliederaktivität. Features, API-Anbindung und gemeinsame Komponenten auf Android und iOS.",
    },
  },
  {
    roles: ["react-native"],
    stack: "React Native · Axios · REST",
    en: {
      title: "Heer CRM",
      description:
        "CRM screens for customers, follow-ups, and reporting. REST calls through Axios and reusable UI for the daily workflow.",
    },
    de: {
      title: "Heer CRM",
      description:
        "CRM-Screens für Kunden, Nachverfolgung und Reporting. REST-Aufrufe über Axios und wiederverwendbare UI für den Alltag.",
    },
  },
  {
    roles: ["react-native"],
    stack: "React Native · Node.js",
    en: {
      title: "Digital Society",
      description:
        "Society app for maintenance, complaints, events, and messages between residents and the admin.",
    },
    de: {
      title: "Digital Society",
      description:
        "Hausverwaltungs-App für Wartung, Beschwerden, Events und Nachrichten zwischen Bewohnern und Verwaltung.",
    },
  },
  {
    roles: ["react-native"],
    stack: "React Native · REST · Location",
    en: {
      title: "WashOff",
      description:
        "Car-service app for finding nearby providers, filtering, booking a slot, and contacting the center from the phone.",
    },
    de: {
      title: "WashOff",
      description:
        "Autoservice-App zum Finden naher Anbieter, Filtern, Buchen eines Termins und Kontakt zum Service-Center.",
    },
  },
  {
    roles: ["react-native", "full-stack", "devops"],
    stack: "React Native · Next.js · Node.js · MongoDB",
    en: {
      title: "Pulse CRM",
      description:
        "CRM for more than one organization: leads, contacts, pipelines, and team assignment, plus Android and iOS apps, IVR, WhatsApp, and email.",
    },
    de: {
      title: "Pulse CRM",
      description:
        "CRM für mehrere Organisationen: Leads, Kontakte, Pipelines und Teamzuordnung, plus Android- und iOS-Apps, IVR, WhatsApp und E-Mail.",
    },
  },
  {
    roles: ["full-stack", "ai-engineer", "devops"],
    stack: "MERN · RAG · Pinecone · Docker · AWS ECS",
    en: {
      title: "DocForUs",
      description:
        "Healthcare product whose main screen is a chatbot for medical-information questions. Chat sessions, document upload, retrieval from a Pinecone index, then Docker on AWS ECS.",
    },
    de: {
      title: "DocForUs",
      description:
        "Gesundheitsprodukt, dessen Hauptscreen ein Chatbot für medizinische Fragen ist. Chat-Sitzungen, Dokument-Upload, Retrieval über einen Pinecone-Index, danach Docker auf AWS ECS.",
    },
  },
  {
    roles: ["full-stack", "devops"],
    stack: "Next.js · Node.js · MongoDB · AWS",
    en: {
      title: "AUM Pharmacy",
      description:
        "Pharmacy shop with a large catalog, search, REST APIs, and the AWS deploy and CI around the store.",
    },
    de: {
      title: "AUM Pharmacy",
      description:
        "Apotheken-Shop mit großem Katalog, Suche, REST-APIs und dem AWS-Deploy samt CI rund um den Shop.",
    },
  },
  {
    roles: ["ai-engineer"],
    stack: "Next.js · Node.js · LLM · MongoDB",
    en: {
      title: "FoxCRM",
      description:
        "CRM with model-written next-step suggestions and status updates on leads the team is already working.",
    },
    de: {
      title: "FoxCRM",
      description:
        "CRM mit Modell-Vorschlägen für den nächsten Schritt und Statusupdates zu Leads, an denen das Team gerade arbeitet.",
    },
  },
  {
    roles: ["ai-engineer"],
    stack: "Next.js · Node.js · LLM · Google APIs · Zoom",
    en: {
      title: "FoxMeetings",
      description:
        "Turns a meeting transcript into notes and a follow-up email, and can open a lead from what was decided in the call.",
    },
    de: {
      title: "FoxMeetings",
      description:
        "Macht aus einem Meeting-Transkript Notizen und eine Follow-up-Mail und kann aus dem Gespräch einen Lead anlegen.",
    },
  },
  {
    roles: ["ai-engineer"],
    stack: "Computer vision · AWS Rekognition · Node.js · Python",
    en: {
      title: "FoxTracking",
      description:
        "Video analytics on AWS Rekognition, with the Node and Python services that store and serve the results.",
    },
    de: {
      title: "FoxTracking",
      description:
        "Videoanalyse mit AWS Rekognition und den Node- und Python-Services, die Ergebnisse speichern und ausliefern.",
    },
  },
  {
    roles: ["ai-engineer"],
    stack: "Python · FastAPI · AWS Bedrock · Docker · ECS",
    en: {
      title: "SustainAI",
      description:
        "Sustainability questions answered through FastAPI and Bedrock, packaged with Docker and released on ECS.",
    },
    de: {
      title: "SustainAI",
      description:
        "Nachhaltigkeitsfragen über FastAPI und Bedrock, verpackt mit Docker und ausgeliefert auf ECS.",
    },
  },
  {
    roles: ["ai-engineer"],
    stack: "Node.js · AWS Rekognition · Docker · MongoDB",
    en: {
      title: "AI Attendance",
      description:
        "Attendance from face checks with Rekognition, a Node API, MongoDB, and a Docker release.",
    },
    de: {
      title: "AI Attendance",
      description:
        "Anwesenheit über Gesichtsprüfung mit Rekognition, einer Node-API, MongoDB und einem Docker-Release.",
    },
  },
  {
    roles: ["ai-engineer"],
    stack: "Next.js · Node.js · AWS · Docker",
    en: {
      title: "AI Content",
      description:
        "Content desk on Next.js and Node, with AWS and Docker for the environments it runs in.",
    },
    de: {
      title: "AI Content",
      description:
        "Content-Arbeitsplatz mit Next.js und Node, dazu AWS und Docker für die Umgebungen, in denen er läuft.",
    },
  },
  {
    roles: ["ai-engineer"],
    stack: "Next.js · React · Node.js",
    en: {
      title: "FoxSites",
      description:
        "Site and shop builder: pages, catalog blocks, and AI help for the copy and layout the merchant edits.",
    },
    de: {
      title: "FoxSites",
      description:
        "Website- und Shop-Baukasten: Seiten, Katalogblöcke und KI-Hilfe für Texte und Layout, die der Händler bearbeitet.",
    },
  },
];

function projectsFor(locale: Locale, role: Role): Project[] {
  return CATALOG.filter((item) => item.roles.includes(role)).map((item) => ({
    title: item[locale].title,
    description: item[locale].description,
    stack: item.stack,
    links: item.links ? [...item.links] : undefined,
  }));
}

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
          "Android",
          "iOS",
          "React Navigation",
          "Hermes",
        ],
      },
      {
        label: "State & APIs",
        items: ["Redux Toolkit", "Thunk", "Axios", "GraphQL", "REST"],
      },
      {
        label: "On the device",
        items: ["Maps", "Geofencing", "Bluetooth", "Camera", "Push", "Payments"],
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
          "Android",
          "iOS",
          "React Navigation",
          "Hermes",
        ],
      },
      {
        label: "State & APIs",
        items: ["Redux Toolkit", "Thunk", "Axios", "GraphQL", "REST"],
      },
      {
        label: "Am Gerät",
        items: ["Maps", "Geofencing", "Bluetooth", "Kamera", "Push", "Payments"],
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
      title: "Web and mobile products, from the screen to the API.",
      subtitle:
        "Since 2021 I have built MERN and Next.js products and the React Native apps next to them — pharmacy commerce, CRM, health, and delivery. Day to day that is pages, REST and GraphQL, PostgreSQL or MongoDB, and an AWS release.",
    },
    de: {
      title: "Web- und Mobile-Produkte, vom Screen bis zur API.",
      subtitle:
        "Seit 2021 baue ich MERN- und Next.js-Produkte und die React-Native-Apps daneben — Apotheke, CRM, Gesundheit und Delivery. Im Alltag sind das Seiten, REST und GraphQL, PostgreSQL oder MongoDB und ein AWS-Release.",
    },
  },
  "react-native": {
    en: {
      title: "React Native apps for Android and iOS.",
      subtitle:
        "Since 2021 I have been writing mobile apps that go to the Play Store and the App Store — delivery, fleet, health, travel, and internal tools. Day to day that means screens, navigation, Redux, APIs, and device work such as maps, geofencing, Bluetooth, camera, push, and payments.",
    },
    de: {
      title: "React-Native-Apps für Android und iOS.",
      subtitle:
        "Seit 2021 schreibe ich Mobile-Apps, die in den Play Store und den App Store gehen — Delivery, Flotte, Gesundheit, Reisen und interne Tools. Im Alltag sind das Screens, Navigation, Redux, APIs und Gerätearbeit wie Karten, Geofencing, Bluetooth, Kamera, Push und Payments.",
    },
  },
  "ai-engineer": {
    en: {
      title: "AI features inside products people already open.",
      subtitle:
        "The work is chat, retrieval, and vision inside real apps — DocForUs for health questions, meeting notes, attendance, and content tools. Around the model there is still a session, a document store, an API, and a deploy.",
    },
    de: {
      title: "KI-Funktionen in Produkten, die Menschen schon öffnen.",
      subtitle:
        "Die Arbeit ist Chat, Retrieval und Vision in echten Apps — DocForUs für Gesundheitsfragen, Meeting-Notizen, Anwesenheit und Content-Tools. Um das Modell herum bleiben Sitzung, Dokumentenspeicher, API und Deploy.",
    },
  },
  devops: {
    en: {
      title: "From a commit to a release that stays up.",
      subtitle:
        "I run the Docker, CI, and AWS side of the same web and mobile products — EC2, ECS, EKS, and Lambda — so a build can go out and be watched after it ships.",
    },
    de: {
      title: "Vom Commit zu einem Release, das oben bleibt.",
      subtitle:
        "Ich mache die Docker-, CI- und AWS-Seite derselben Web- und Mobile-Produkte — EC2, ECS, EKS und Lambda — damit ein Build rausgeht und danach beobachtet werden kann.",
    },
  },
};

const ABOUT_BY_ROLE: Record<Role, { en: string[]; de: string[] }> = {
  "full-stack": {
    en: [
      "I'm Nensi Sakhiya, a software engineer in Ahmedabad. For a little over five years I have built products from the page through the API: Next.js and React in the browser, Node on the server, and React Native when the same product needs a phone.",
      "A piece of work usually covers the screen, the API behind it, the database it writes, and the AWS release. That has been pharmacy commerce, CRM, counseling, and delivery.",
    ],
    de: [
      "Ich bin Nensi Sakhiya, Softwareentwicklerin in Ahmedabad. Seit etwas mehr als fünf Jahren baue ich Produkte von der Seite bis zur API: Next.js und React im Browser, Node auf dem Server und React Native, wenn dasselbe Produkt eine App braucht.",
      "Ein Auftrag umfasst meist den Screen, die API dahinter, die Datenbank und das AWS-Release. Dazu gehörten Apothekenhandel, CRM, Beratung und Delivery.",
    ],
  },
  "react-native": {
    en: [
      "I'm Nensi Sakhiya, a software engineer in Ahmedabad. Since 2021 I have shipped React Native apps for Android and iOS, from the first screen through a Play Store or App Store release.",
      "Most of that work is React Native CLI, with Expo when it fits. A feature is the screen, its navigation and state, the API, and the phone itself: maps, geofencing, Bluetooth, camera, push, or payments. The apps have been rider and fleet products, wellness, travel booking, and tools used inside companies.",
    ],
    de: [
      "Ich bin Nensi Sakhiya, Softwareentwicklerin in Ahmedabad. Seit 2021 liefere ich React-Native-Apps für Android und iOS, vom ersten Screen bis zum Release im Play Store oder App Store.",
      "Der größte Teil läuft über die React Native CLI, Expo wenn es passt. Ein Feature ist der Screen, Navigation und State, die API und das Telefon selbst: Karten, Geofencing, Bluetooth, Kamera, Push oder Payments. Das waren Rider- und Flotten-Apps, Wellness, Reisebuchung und interne Tools.",
    ],
  },
  "ai-engineer": {
    en: [
      "I'm Nensi Sakhiya, a software engineer in Ahmedabad. I add AI where a product already has users, on the same MERN, Next.js, and React Native systems I build.",
      "DocForUs is the clearest case: a health chatbot that answers from uploaded documents, with a session, a document store, an API, and a deploy. The same shape shows up in meeting notes, attendance, video checks, and content tools.",
    ],
    de: [
      "Ich bin Nensi Sakhiya, Softwareentwicklerin in Ahmedabad. KI baue ich dort ein, wo ein Produkt schon Nutzer hat — auf denselben MERN-, Next.js- und React-Native-Systemen.",
      "DocForUs ist das klarste Beispiel: ein Gesundheits-Chatbot, der aus hochgeladenen Dokumenten antwortet, mit Sitzung, Dokumentenspeicher, API und Deploy. Dieselbe Form gibt es bei Meeting-Notizen, Anwesenheit, Videoprüfung und Content-Tools.",
    ],
  },
  devops: {
    en: [
      "I'm Nensi Sakhiya, a software engineer in Ahmedabad. Alongside the apps, I take those products to AWS and keep the release path clear after they ship.",
      "That is Docker, GitHub Actions, and the EC2, ECS, EKS, and Lambda setup behind the health, commerce, CRM, and mobile backends I deliver.",
    ],
    de: [
      "Ich bin Nensi Sakhiya, Softwareentwicklerin in Ahmedabad. Neben den Apps bringe ich diese Produkte auf AWS und halte den Release-Weg danach übersichtlich.",
      "Das sind Docker, GitHub Actions und das EC2-, ECS-, EKS- und Lambda-Setup hinter den Health-, Commerce-, CRM- und Mobile-Backends, die ich ausliefere.",
    ],
  },
};

const ABOUT_TITLE: Record<Role, { en: string; de: string }> = {
  "full-stack": {
    en: "From the page to the API.",
    de: "Von der Seite bis zur API.",
  },
  "react-native": {
    en: "From the screen to the store.",
    de: "Vom Screen bis in den Store.",
  },
  "ai-engineer": {
    en: "AI inside products people already use.",
    de: "KI in Produkten, die schon genutzt werden.",
  },
  devops: {
    en: "A release that goes out and stays up.",
    de: "Ein Release, das rausgeht und oben bleibt.",
  },
};

const STATS: Record<Role, { en: { value: string; label: string }[]; de: { value: string; label: string }[] }> = {
  "react-native": {
    en: [
      { value: "5+", label: "Years in React Native" },
      { value: "Android · iOS", label: "Both platforms" },
      { value: "Play · App Store", label: "Store builds" },
    ],
    de: [
      { value: "5+", label: "Jahre mit React Native" },
      { value: "Android · iOS", label: "Beide Plattformen" },
      { value: "Play · App Store", label: "Store-Builds" },
    ],
  },
  "full-stack": {
    en: [
      { value: "5+", label: "Years building" },
      { value: "Web · Mobile", label: "Both sides" },
      { value: "APIs · AWS", label: "Through release" },
    ],
    de: [
      { value: "5+", label: "Jahre im Aufbau" },
      { value: "Web · Mobile", label: "Beide Seiten" },
      { value: "APIs · AWS", label: "Bis zum Release" },
    ],
  },
  "ai-engineer": {
    en: [
      { value: "5+", label: "Years shipping" },
      { value: "DocForUs", label: "Health chat" },
      { value: "RAG · Vision", label: "In real products" },
    ],
    de: [
      { value: "5+", label: "Jahre in Produktion" },
      { value: "DocForUs", label: "Gesundheits-Chat" },
      { value: "RAG · Vision", label: "In echten Produkten" },
    ],
  },
  devops: {
    en: [
      { value: "5+", label: "Years shipping" },
      { value: "Docker · CI", label: "Release path" },
      { value: "AWS", label: "EC2 · ECS · Lambda" },
    ],
    de: [
      { value: "5+", label: "Jahre in Produktion" },
      { value: "Docker · CI", label: "Release-Weg" },
      { value: "AWS", label: "EC2 · ECS · Lambda" },
    ],
  },
};

const SKILL_LEAD: Record<Role, { en: string; de: string }> = {
  "react-native": {
    en: "What I use day to day on Android and iOS apps.",
    de: "Was ich täglich in Android- und iOS-Apps benutze.",
  },
  "full-stack": {
    en: "What I use day to day across the web app, the API, and the phone.",
    de: "Was ich täglich in der Web-App, der API und auf dem Telefon benutze.",
  },
  "ai-engineer": {
    en: "What I actually wire into the product, plus the stack around it.",
    de: "Was ich konkret ins Produkt einbaue, plus der Stack darum.",
  },
  devops: {
    en: "What I use to get a build onto AWS and keep an eye on it.",
    de: "Was ich nutze, um einen Build auf AWS zu bringen und ihn im Blick zu behalten.",
  },
};

const PROJECT_LEAD: Record<Role, { en: string; de: string }> = {
  "react-native": {
    en: "Every mobile product from the résumé, including Zappfresh, Welzaa, Evify, and the rest.",
    de: "Jedes Mobile-Produkt aus dem Lebenslauf, einschließlich Zappfresh, Welzaa, Evify und der übrigen.",
  },
  "full-stack": {
    en: "Products from the résumé: DocForUs, AUM Pharmacy, Pulse, Zappfresh, and the platforms around them.",
    de: "Produkte aus dem Lebenslauf: DocForUs, AUM Pharmacy, Pulse, Zappfresh und die Plattformen darum.",
  },
  "ai-engineer": {
    en: "AI products from the résumé, starting with DocForUs, then the Fox tools and the mobile apps beside them.",
    de: "KI-Produkte aus dem Lebenslauf, beginnend mit DocForUs, dann die Fox-Tools und die Mobile-Apps daneben.",
  },
  devops: {
    en: "The same shipped products, from the DocForUs and pharmacy deploys through the mobile platforms.",
    de: "Dieselben ausgelieferten Produkte, von den DocForUs- und Apotheken-Deploys bis zu den Mobile-Plattformen.",
  },
};

export function getPortfolioContent(locale: Locale, role: Role) {
  const meta = ROLE_META[role];
  const hero = HERO_BY_ROLE[role][locale];
  const aboutBody = ABOUT_BY_ROLE[role][locale];
  const skills = SKILLS_BY_ROLE[role][locale];
  const projects = projectsFor(locale, role);
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
        ctaSecondary: "Lebenslauf",
      },
      stats: STATS[role].de,
      about: {
        heading: "Über mich",
        title: ABOUT_TITLE[role].de,
        body: aboutBody,
      },
      skills: {
        heading: "Skills",
        lead: SKILL_LEAD[role].de,
        groups: skills,
      },
      projects: {
        heading: "Projekte",
        lead: PROJECT_LEAD[role].de,
        items: projects,
      },
      experience: {
        heading: "Erfahrung",
        lead: "Stellen seit 2020, in Ahmedabad und remote.",
        items: experience,
      },
      contact: {
        heading: "Kontakt",
        lead: "Schreib mir, wenn ein Produkt ansteht.",
        emailLabel: "E-Mail",
        linkedinLabel: "LinkedIn",
        phoneLabel: "Telefon",
      },
      footer: `© 2026 ${PROFILE.name}`,
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
      ctaSecondary: "Resume",
    },
    stats: STATS[role].en,
    about: {
      heading: "About",
      title: ABOUT_TITLE[role].en,
      body: aboutBody,
    },
    skills: {
      heading: "Skills",
      lead: SKILL_LEAD[role].en,
      groups: skills,
    },
    projects: {
      heading: "Projects",
      lead: PROJECT_LEAD[role].en,
      items: projects,
    },
    experience: {
      heading: "Experience",
      lead: "Roles since 2020, in Ahmedabad and remote.",
      items: experience,
    },
    contact: {
      heading: "Contact",
      lead: "Write if a product needs this kind of work.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      phoneLabel: "Phone",
    },
    footer: `© 2026 ${PROFILE.name}`,
  };
}

export function localePath(locale: Locale, role: Role) {
  if (role === "react-native") return locale === "en" ? "/" : "/de";
  return `/${locale}/${role}`;
}
