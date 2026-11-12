import type { Metadata } from "next";
import { Sora, Syne } from "next/font/google";
import { SITE_URL } from "@/lib/profile";
import { personJsonLd } from "@/lib/seo";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nensi Sakhiya — Senior Software Engineer",
    template: "%s · Nensi Sakhiya",
  },
  description:
    "Nensi Sakhiya is a senior software engineer building Full Stack, React Native, AI, and DevOps products. English and German portfolios with downloadable résumés. Open to remote work with European teams.",
  keywords: [
    "Nensi Sakhiya",
    "Senior Software Engineer",
    "Full Stack Developer",
    "React Native Developer",
    "DevOps Engineer",
    "AI Engineer",
    "Softwareentwicklerin",
    "Full-Stack Entwicklerin",
    "React Native Entwicklerin",
    "DevOps Engineerin",
    "Lebenslauf",
    "Remote",
    "Next.js",
    "Node.js",
  ],
  authors: [{ name: "Nensi Sakhiya", url: SITE_URL }],
  creator: "Nensi Sakhiya",
  alternates: {
    canonical: "/",
    languages: {
      en: "/en/full-stack",
      de: "/de/full-stack",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Nensi Sakhiya",
    title: "Nensi Sakhiya — Senior Software Engineer",
    description:
      "Full Stack, React Native, AI, and DevOps portfolios in English and German. Résumé download on every path.",
    locale: "en_US",
    alternateLocale: ["de_DE"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nensi Sakhiya — Senior Software Engineer",
    description:
      "Full Stack, React Native, AI, and DevOps — English & German portfolios.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd("en")),
          }}
        />
        {children}
      </body>
    </html>
  );
}
