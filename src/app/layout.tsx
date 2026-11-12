import type { Metadata } from "next";
import { Sora, Syne } from "next/font/google";
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
  title: {
    default: "Nensi Sakhiya — Software Engineer",
    template: "%s · Nensi Sakhiya",
  },
  description:
    "Portfolio of Nensi Sakhiya — smart software engineer specializing in Full Stack, React Native, AI, and DevOps. English & German.",
  openGraph: {
    title: "Nensi Sakhiya — Software Engineer",
    description:
      "Full Stack, React Native, AI, and DevOps portfolios in English and German.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)]">
        {children}
      </body>
    </html>
  );
}
