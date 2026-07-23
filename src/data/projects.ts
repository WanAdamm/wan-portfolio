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
      "Architected an end-to-end tailoring service platform with a React/Vite client, Java Servlet REST backend on Tomcat, and PostgreSQL persistence. Implemented item workflows, validated form handling, routing, state management, and API integration.",
    stack: ["React", "Vite", "Java Servlet", "Tomcat", "PostgreSQL"],
    image: "images/sejahit.jpg",
    imageWidth: 1918,
    imageHeight: 1079,
    size: "large",
    github: "https://github.com/WanAdamm/SeJahit-Bundle-E-Commerce-Website",
  },
  {
    title: "Visit Penang",
    description:
      "Engineered a responsive tourism discovery app with React, Vite, and reusable Tailwind CSS components, delivering adaptive navigation and content across desktop, tablet, and mobile.",
    stack: ["React", "Vite", "Tailwind CSS"],
    image: "images/visit-penang.png",
    imageWidth: 1920,
    imageHeight: 1816,
    size: "medium",
    live: "https://visit-penang-sepia.vercel.app/",
  },
  {
    title: "DuitWise",
    description:
      "Built a cross-platform personal finance app in Flutter using modular, widget-driven architecture and structured state management for consistent Android and iOS behavior, maintainability, and feature growth.",
    stack: ["Flutter", "Cross-Platform", "State Management"],
    image: "images/duitwise.jpg",
    imageWidth: 1208,
    imageHeight: 666,
    size: "wide",
    github: "https://github.com/adamrujhan/DuitWise-CAT304/releases/tag/v1.0.0",
  },
];
