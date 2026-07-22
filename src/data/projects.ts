export type ProjectSize = "large" | "medium" | "wide";

export type Project = {
  title: string;
  description: string;
  stack: readonly string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  size: ProjectSize;
  github?: string;
  live?: string;
};

export const projects: readonly Project[] = [
  {
    title: "SeJahit",
    description:
      "A full-stack tailoring service platform with item management, form handling, validation, and client-server integration.",
    stack: ["React", "Vite", "Java Servlet", "PostgreSQL"],
    image: "images/sejahit.jpg",
    imageWidth: 1918,
    imageHeight: 1079,
    size: "large",
    github: "https://github.com/WanAdamm/SeJahit-Bundle-E-Commerce-Website",
  },
  {
    title: "Visit Penang",
    description:
      "A responsive tourism web app optimized for desktop, tablet, and mobile experiences.",
    stack: ["React", "Vite", "Tailwind"],
    image: "images/visit-penang.png",
    imageWidth: 1920,
    imageHeight: 1816,
    size: "medium",
    live: "https://visit-penang-sepia.vercel.app/",
  },
  {
    title: "DuitWise",
    description:
      "A cross-platform finance application built with Flutter and modular widget-driven architecture.",
    stack: ["Flutter", "Mobile", "State Management"],
    image: "images/duitwise.jpg",
    imageWidth: 1208,
    imageHeight: 666,
    size: "wide",
    github: "https://github.com/adamrujhan/DuitWise-CAT304/releases/tag/v1.0.0",
  },
];
