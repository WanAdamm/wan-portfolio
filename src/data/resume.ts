export type ResumeFocus = "all" | "ai" | "backend" | "fullstack" | "leadership";

type EvidenceFocus = Exclude<ResumeFocus, "all">;

export type ResumeSkill = {
  name: string;
  tags: readonly EvidenceFocus[];
  evidence: readonly string[];
};

const skill = (
  name: string,
  tags: readonly EvidenceFocus[],
  evidence: readonly string[] = [],
): ResumeSkill => ({ name, tags, evidence });

export const resumeProfile = {
  roles: [
    "AI Solutions Engineer",
    "AI Developer",
    "Applied AI & Backend Engineering",
  ],
  phone: "+60 10-837 9125",
  phoneHref: "tel:+60108379125",
  summary:
    "Final-year Computer Science student with hands-on experience building agentic AI systems and enterprise software. Skilled at connecting AI services to SAP, SQL Server, facial recognition systems, and REST APIs on Azure, with a strong full-stack foundation and experience delivering features through peer-reviewed development workflows.",
} as const;

export const resumeFocusOptions = [
  {
    id: "all",
    label: "Full profile",
    prompt: "Show everything",
    summary:
      "A complete view of enterprise AI, backend integration, full-stack delivery, education, and leadership.",
  },
  {
    id: "ai",
    label: "AI systems",
    prompt: "Show enterprise AI",
    summary:
      "Grounded multi-agent workflows, voice-driven interaction, Azure AI Foundry, and intelligent computing foundations.",
  },
  {
    id: "backend",
    label: "Backend",
    prompt: "Show APIs & integrations",
    summary:
      "REST APIs, Azure deployment, SQL databases, and interoperability across enterprise systems.",
  },
  {
    id: "fullstack",
    label: "Full-stack",
    prompt: "Show product delivery",
    summary:
      "End-to-end web and mobile products spanning interfaces, application state, APIs, and persistence.",
  },
  {
    id: "leadership",
    label: "Leadership",
    prompt: "Show team impact",
    summary:
      "Team leadership, operational ownership, mentoring, and technical event delivery at university scale.",
  },
] as const satisfies readonly {
  id: ResumeFocus;
  label: string;
  prompt: string;
  summary: string;
}[];

export const resumeSkillGroups = [
  {
    title: "AI & machine learning",
    accent: "yellow",
    skills: [
      skill("Agentic AI Systems", ["ai"], ["bbraun"]),
      skill("Multi-Agent Orchestration", ["ai"], ["bbraun"]),
      skill("Azure AI Foundry", ["ai"], ["bbraun"]),
      skill("Grounded AI Workflows", ["ai"], ["bbraun"]),
      skill("Azure Speech Service", ["ai"], ["bbraun"]),
      skill("Machine Learning Fundamentals", ["ai"], ["education"]),
      skill("Data Visualization (Tableau)", ["ai"], ["education"]),
    ],
  },
  {
    title: "Programming languages",
    accent: "white",
    skills: [
      skill("Python", ["ai", "backend"]),
      skill("Java", ["backend", "fullstack"], ["sejahit"]),
      skill("C++", ["backend"]),
      skill("JavaScript", ["fullstack"], ["sejahit"]),
      skill("R", ["ai"]),
      skill("SQL", ["backend"], ["bbraun", "sejahit"]),
    ],
  },
  {
    title: "Backend & frameworks",
    accent: "coral",
    skills: [
      skill("Node.js", ["backend"]),
      skill("FastAPI", ["backend", "fullstack"], ["bbraun"]),
      skill("Flask", ["backend"]),
      skill("Django", ["backend"]),
      skill("Java Servlet", ["backend", "fullstack"], ["sejahit"]),
      skill("REST API Design", ["backend"], ["bbraun", "sejahit"]),
    ],
  },
  {
    title: "Frontend",
    accent: "blue",
    skills: [
      skill("ReactJS", ["fullstack"], ["bbraun", "sejahit"]),
      skill("Flutter", ["fullstack"], ["duitwise"]),
      skill("Vite", ["fullstack"], ["bbraun", "sejahit"]),
      skill("TailwindCSS", ["fullstack"], ["bbraun"]),
      skill("Enterprise Web Components", ["fullstack"], ["bbraun"]),
      skill("Bootstrap", ["fullstack"]),
    ],
  },
  {
    title: "Data & platforms",
    accent: "white",
    skills: [
      skill("PostgreSQL", ["backend", "fullstack"], ["sejahit"]),
      skill("SQL Server", ["backend"], ["bbraun"]),
      skill("Microsoft Azure", ["ai", "backend"], ["bbraun"]),
      skill("Google Cloud Platform", ["backend"]),
      skill("Docker", ["backend"]),
      skill("Git", ["backend", "fullstack"], ["sejahit"]),
    ],
  },
  {
    title: "Enterprise integration",
    accent: "yellow",
    skills: [
      skill("SAP", ["backend"], ["bbraun"]),
      skill("Axxon Face Recognition", ["backend"], ["bbraun"]),
      skill("Azure App Service", ["backend"], ["bbraun"]),
      skill("System Interoperability", ["backend"], ["bbraun"]),
    ],
  },
  {
    title: "Engineering practices",
    accent: "coral",
    skills: [
      skill("GitHub Enterprise", ["backend", "fullstack"], ["bbraun"]),
      skill("Branch-Based Development", ["backend", "fullstack"], ["bbraun"]),
      skill("Pull Requests", ["backend", "fullstack"], ["bbraun"]),
      skill("Code Reviews", ["backend", "fullstack"], ["bbraun"]),
      skill("Issue Tracking", ["backend", "fullstack"], ["bbraun"]),
      skill("Agile Delivery", ["backend", "fullstack"], ["bbraun"]),
    ],
  },
] as const;

export const resumeExperience = {
  id: "bbraun",
  period: "March 2026 - August 2026",
  role: "IT Trainee",
  organization: "B. Braun Medical Industries",
  summary:
    "Contributed across frontend, backend, and AI workflows for an enterprise digital access-management proof of concept.",
  details: [
    "Delivered React, Vite, Tailwind CSS, and FastAPI enhancements across user onboarding, contextual guidance, and identity-confirmation workflows.",
    "Integrated SAP, the Axxon Face Recognition Module, and SQL Server with REST APIs deployed on Azure App Service.",
    "Built grounded multi-agent orchestration workflows with Azure AI Foundry and Azure Speech Service for context-aware, voice-driven interactions.",
    "Recorded 230+ contributions across private enterprise repositories using branch-based development, pull requests, peer code reviews, issue tracking, and Agile delivery practices.",
    "Supported an internal knowledge-sharing platform through collaborative development and documentation contributions.",
  ],
  technologies: [
    "React",
    "Vite",
    "Tailwind CSS",
    "FastAPI",
    "Azure AI Foundry",
    "Azure Speech Service",
    "Azure App Service",
    "REST APIs",
    "SAP",
    "Axxon",
    "SQL Server",
    "GitHub Enterprise",
  ],
  contributionCount: "230+",
  confidentiality:
    "Private project names and implementation details are generalized to respect enterprise confidentiality.",
  tags: ["ai", "backend", "fullstack"],
} as const;

export const systemLayers = [
  {
    id: "interaction",
    label: "Product experience",
    technology: "React / Vite / Tailwind CSS",
    contribution:
      "Enhanced onboarding, contextual guidance, and identity-confirmation workflows.",
  },
  {
    id: "speech",
    label: "Speech layer",
    technology: "Azure Speech Service",
    contribution:
      "Connected spoken interaction to the grounded workflow experience.",
  },
  {
    id: "orchestration",
    label: "Orchestration",
    technology: "Azure AI Foundry",
    contribution:
      "Built grounded multi-agent workflows that coordinated context and decisions.",
  },
  {
    id: "backend",
    label: "Backend",
    technology: "FastAPI / REST / App Service",
    contribution:
      "Designed and deployed API components that connected AI workflows to business systems.",
  },
  {
    id: "enterprise",
    label: "Enterprise systems",
    technology: "SAP / Axxon / SQL Server",
    contribution:
      "Integrated identity, security, facial recognition, and ERP data across three enterprise technologies.",
  },
] as const;

export const resumeProjects = [
  {
    id: "sejahit",
    title: "SeJahit",
    subtitle: "Full-Stack Tailoring Service E-Commerce Platform",
    summary:
      "Delivered an end-to-end e-commerce platform with a React and Vite client, Java Servlet backend on Tomcat, and PostgreSQL persistence.",
    details: [
      "Built the ReactJS and Vite frontend and Java Servlet backend for complete client-server delivery.",
      "Developed a PostgreSQL-backed REST API for item management, form handling, and validation.",
      "Implemented UI design, application state, routing, and backend integration.",
    ],
    technologies: ["ReactJS", "Vite", "Java Servlet", "Tomcat", "PostgreSQL"],
    href: "https://github.com/WanAdamm/SeJahit-Bundle-E-Commerce-Website",
    linkLabel: "View source",
    tags: ["backend", "fullstack"],
  },
  {
    id: "duitwise",
    title: "DuitWise",
    subtitle: "Cross-Platform Personal Finance App",
    summary:
      "Built a Flutter mobile application with a modular, widget-driven architecture and structured state management for Android and iOS.",
    details: [
      "Delivered consistent cross-platform behavior across Android and iOS.",
      "Used modular widgets and structured state management to support maintainability and feature growth.",
      "Designed mobile-first navigation and performance-conscious user flows.",
    ],
    technologies: ["Flutter", "Cross-Platform", "State Management"],
    href: "https://github.com/WanAdamm/DuitWise-CAT304/releases/tag/v2.0.0",
    linkLabel: "View release",
    tags: ["fullstack"],
  },
] as const;

export const resumeEducation = {
  id: "education",
  institution: "Universiti Sains Malaysia",
  qualification: "Bachelor of Computer Science (Intelligent Computing), with Honours",
  period: "Expected graduation: October 2027",
  cgpa: "3.75 / 4.00",
  distinction: "Dean's List, Semester 1 - Present",
  coursework: [
    "Programming Methodology & Data Structures",
    "Design & Analysis of Algorithms",
    "Database Organization & Design",
    "Machine Learning and Computational Intelligence",
    "Operating Systems",
  ],
  certifications: [
    "Introduction to Data Visualization by Tableau for the Semiconductor Industry",
    "Introduction to Machine Learning for the Semiconductor Industry",
  ],
  tags: ["ai", "backend", "fullstack"],
} as const;

export const resumeLeadership = [
  {
    id: "mpdik",
    role: "Executive Committee Member",
    organization: "MPDIK",
    period: "October 2023 - October 2025",
    summary:
      "Led an eight-member division while owning logistics, budgets, stakeholder communication, and delivery for university-scale events.",
    details: [
      "Improved operational turnaround and team coordination while delivering events for 30-50 participants.",
      "Owned end-to-end logistics, budgeting, and stakeholder communication across high-pressure programs.",
      "Mentored committee members to strengthen the junior talent pipeline and team reliability.",
    ],
    tags: ["leadership"],
  },
  {
    id: "cssusm",
    role: "Executive Committee Member",
    organization: "Computer Science Society, USM",
    period: "October 2023 - October 2024",
    summary:
      "Delivered technical and operational support for flagship events including the international VHACK hackathon and PIXEL.",
    details: [
      "Provided full-cycle operational oversight for events serving hundreds of participants.",
      "Directed logistics, AV systems, and venue operations to reduce setup downtime.",
      "Contributed to the Technical Division and maintained key features of the society website.",
    ],
    tags: ["leadership"],
  },
] as const;
