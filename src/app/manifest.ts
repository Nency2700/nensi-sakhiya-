import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nensi Sakhiya — Software Engineer",
    short_name: "Nensi Sakhiya",
    description:
      "Senior software engineer portfolio in English and German: Full Stack, React Native, AI, and DevOps.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f2ea",
    theme_color: "#1b1412",
    lang: "en",
  };
}
