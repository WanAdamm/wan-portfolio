export type ProjectSize = "large" | "medium" | "wide";

export type Project = {
  title: string;
  description: string;
  stack: readonly string[];
  image: string;
  imageAlt: string;
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
    image: "images/sejahit.png",
    imageAlt:
      "SeJahit landing page featuring an editorial second-hand clothing rail and a Uniqlo shirt",
    imageWidth: 1920,
    imageHeight: 947,
    size: "large",
    github: "https://github.com/WanAdamm/SeJahit-Docker",
  },
  {
    title: "Visit Penang",
    description:
      "Engineered a responsive tourism discovery app with React, Vite, and reusable Tailwind CSS components, delivering adaptive navigation and content across desktop, tablet, and mobile.",
    stack: ["React", "Vite", "Tailwind CSS"],
    image: "images/visit-penang.png",
    imageAlt:
      "Visit Penang tourism homepage featuring a George Town landmark and local event cards",
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
    imageAlt:
      "DuitWise interface showing the latest dashboard, category budget planning, and spending analytics views",
    imageWidth: 1918,
    imageHeight: 946,
    size: "wide",
    github: "https://github.com/WanAdamm/DuitWise-CAT304/releases/tag/v2.0.0",
  },
];
