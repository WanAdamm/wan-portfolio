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
    "Backend Software Engineer",
    "AI & Backend Engineering",
    "Applied AI Integration",
  ],
  phone: "+60 10-837 9125",
  phoneHref: "tel:+60108379125",
  summary:
    "Backend Software Engineer specializing in Intelligent Computing with hands-on enterprise experience in the medical technology domain. Proficient in Python, Java, and RESTful API architecture, with experience integrating AI capabilities into scalable backend systems. Proven track record of optimizing backend performance, automating cloud security pipelines, and deploying AI solutions serving 6,000+ users.",
} as const;

export const resumeFocusOptions = [
  {
    id: "all",
    label: "Full profile",
    prompt: "Show everything",
    summary:
      "A complete view of backend engineering, applied AI integration, full-stack delivery, education, and leadership.",
  },
  {
    id: "ai",
    label: "AI systems",
    prompt: "Show AI integration",
    summary:
      "Azure OpenAI, speech and avatar experiences, AI-assisted guidance, facial recognition, and intelligent computing foundations.",
  },
  {
    id: "backend",
    label: "Backend",
    prompt: "Show APIs & integrations",
    summary:
      "FastAPI services, 20+ REST APIs, SAP integrations, enterprise databases, and secure deployment.",
  },
  {
    id: "fullstack",
    label: "Full-stack",
    prompt: "Show product delivery",
    summary:
      "React and Flutter products spanning interfaces, application state, APIs, and persistence.",
  },
  {
    id: "leadership",
    label: "Leadership",
    prompt: "Show team impact",
    summary:
      "Head facilitator experience, division leadership, mentoring, and technical event delivery.",
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
      skill("Azure OpenAI", ["ai", "backend"], ["bbraun"]),
      skill("Azure Speech Services", ["ai", "backend"], ["bbraun"]),
      skill("AI Chatbot Services", ["ai"], ["bbraun"]),
      skill("Real-Time Speech & Avatar", ["ai"], ["bbraun"]),
      skill("Facial Recognition", ["ai", "backend"], ["bbraun"]),
      skill("Machine Learning Fundamentals", ["ai"], ["education"]),
      skill("Data Visualization (Tableau)", ["ai"], ["education"]),
    ],
  },
  {
    title: "Programming languages",
    accent: "white",
    skills: [
      skill("Python", ["ai", "backend"], ["bbraun"]),
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
      skill("FastAPI", ["backend"], ["bbraun"]),
      skill("Node.js", ["backend"]),
      skill("Flask", ["backend"]),
      skill("Django", ["backend"]),
      skill("Java Servlet", ["backend", "fullstack"], ["sejahit"]),
      skill("REST API Design", ["backend"], ["bbraun", "sejahit"]),
      skill("Authentication & Approval Workflows", ["backend"], ["bbraun"]),
    ],
  },
  {
    title: "Frontend",
    accent: "blue",
    skills: [
      skill("ReactJS", ["fullstack"], ["sejahit"]),
      skill("Flutter", ["fullstack"], ["duitwise"]),
      skill("Vite", ["fullstack"], ["sejahit"]),
      skill("TailwindCSS", ["fullstack"]),
      skill("Bootstrap", ["fullstack"]),
    ],
  },
  {
    title: "Data & platforms",
    accent: "white",
    skills: [
      skill("PostgreSQL", ["backend", "fullstack"], ["sejahit"]),
      skill("Enterprise Databases", ["backend"], ["bbraun"]),
      skill("Microsoft Azure", ["ai", "backend"], ["bbraun"]),
      skill("Google Cloud Platform", ["backend"]),
      skill("Docker", ["backend"]),
      skill("Git", ["backend", "fullstack"], ["bbraun"]),
      skill("npm", ["fullstack"], ["sejahit"]),
    ],
  },
  {
    title: "Enterprise integration",
    accent: "yellow",
    skills: [
      skill("SAP", ["backend"], ["bbraun"]),
      skill("System Interoperability", ["backend"], ["bbraun"]),
      skill("Door Access Retrieval", ["backend"], ["bbraun"]),
      skill("Automated Approval Routing", ["backend"], ["bbraun"]),
    ],
  },
  {
    title: "Security & engineering practices",
    accent: "coral",
    skills: [
      skill("API Documentation", ["backend"], ["bbraun"]),
      skill("Testing", ["backend"], ["bbraun"]),
      skill("Deployment", ["backend"], ["bbraun"]),
      skill("Snyk", ["backend"], ["bbraun"]),
      skill("SonarQube", ["backend"], ["bbraun"]),
      skill("Security Remediation", ["backend"], ["bbraun"]),
    ],
  },
] as const;

export const resumeExperience = {
  id: "bbraun",
  period: "March 2026 - August 2026",
  role: "Backend Developer Intern",
  organization: "B. Braun Medical Industries",
  summary:
    "Designed and developed a FastAPI backend for a physical access-management proof of concept, shipping 20+ RESTful APIs and integrating AI, SAP, and enterprise database services.",
  details: [
    "Designed and developed a FastAPI backend for a physical access-management proof of concept supporting access requests, status tracking, and door discovery workflows.",
    "Implemented 20+ RESTful APIs covering authentication, approval workflows, SAP integrations, AI chatbot services, real-time speech/avatar functionality, and facial recognition capabilities.",
    "Integrated Azure OpenAI, Azure Speech Services, SAP systems, and enterprise databases to enable AI-assisted user guidance, door access retrieval, and automated approval routing.",
    "Collaborated on backend architecture, API documentation, testing, and deployment, contributing over 240 code commits across multiple application modules.",
    "Leveraged Snyk and SonarQube code analysis tools to identify and remediate security and code-quality issues, contributing to a 67% reduction in reported vulnerabilities (30 to 10 findings).",
  ],
  technologies: [
    "FastAPI",
    "REST APIs",
    "Azure OpenAI",
    "Azure Speech Services",
    "SAP",
    "Enterprise Databases",
    "Facial Recognition",
    "Python",
    "Snyk",
    "SonarQube",
  ],
  contributionCount: "240+",
  confidentiality:
    "Private project names and implementation details are generalized to respect enterprise confidentiality.",
  tags: ["ai", "backend"],
} as const;

export const systemLayers = [
  {
    id: "api",
    label: "API surface",
    technology: "FastAPI / REST",
    contribution:
      "Built the backend for access requests, status tracking, and door discovery workflows.",
  },
  {
    id: "identity",
    label: "Identity & access",
    technology: "Authentication / approvals",
    contribution:
      "Implemented authentication, approval routing, and facial recognition across 20+ RESTful APIs.",
  },
  {
    id: "ai",
    label: "AI services",
    technology: "Azure OpenAI / Speech",
    contribution:
      "Added AI chatbot, real-time speech/avatar, and AI-assisted guidance services.",
  },
  {
    id: "enterprise",
    label: "Enterprise systems",
    technology: "SAP / enterprise databases",
    contribution:
      "Connected access workflows to SAP and enterprise data for automated approval routing.",
  },
  {
    id: "quality",
    label: "Security & quality",
    technology: "Snyk / SonarQube",
    contribution:
      "Remediated security and code-quality findings, reducing reported vulnerabilities by 67%.",
  },
] as const;

export const resumeProjects = [
  {
    id: "sejahit",
    title: "SeJahit",
    subtitle: "Full-Stack Used Clothing E-Commerce Platform",
    summary:
      "Built a full-stack used clothing platform with a ReactJS and Vite client, Java Servlet backend, and PostgreSQL persistence.",
    details: [
      "Built the ReactJS and Vite frontend and Java Servlet backend for complete client-server delivery.",
      "Developed the PostgreSQL-backed data layer and REST API for item management, form handling, and validation.",
      "Delivered UI design, routing, state management, and backend integration.",
    ],
    technologies: ["ReactJS", "Vite", "Java Servlet", "PostgreSQL", "REST API"],
    href: "https://github.com/WanAdamm/SeJahit-Bundle-E-Commerce-Website",
    linkLabel: "View source",
    tags: ["backend", "fullstack"],
  },
  {
    id: "duitwise",
    title: "DuitWise",
    subtitle: "Cross-Platform Personal Finance App",
    summary:
      "Built a cross-platform Flutter finance application with a modular, widget-driven architecture and mobile-first user flows.",
    details: [
      "Delivered consistent performance across Android and iOS.",
      "Implemented modular widgets and structured state management for scalability and maintainability.",
      "Designed mobile-first navigation and user flows to improve usability and performance.",
    ],
    technologies: ["Flutter", "Cross-Platform", "State Management"],
    href: "https://github.com/WanAdamm/DuitWise-CAT304/releases/tag/v2.1.1",
    linkLabel: "View release",
    tags: ["fullstack"],
  },
] as const;

export const resumeEducation = {
  id: "education",
  institution: "Universiti Sains Malaysia",
  qualification: "Bachelor of Computer Science (Intelligent Computing) with Honors",
  period: "Expected graduation: October 2027",
  cgpa: "3.75 / 4.00",
  distinction: "Dean's List, Sem 1 - Present",
  coursework: [
    "Data Structures",
    "Algorithms",
    "Database Design",
    "Machine Learning",
    "Computational Intelligence",
    "Operating Systems",
  ],
  certifications: [
    "Tableau Data Visualization workshop for the Semiconductor Industry",
    "Machine Learning workshop for the Semiconductor Industry",
  ],
  tags: ["ai", "backend", "fullstack"],
} as const;

export const resumeLeadership = [
  {
    id: "ppsl",
    role: "Penghulu (Head Facilitator)",
    organization: "Program Pembimbing Siswa Lestari (PPSL) Indah Kembara",
    period: "September 2026 - October 2026",
    summary:
      "Led a 10-member facilitator team through a two-week orientation program for 210+ incoming freshmen.",
    details: [
      "Led a 10-member facilitator team throughout a two-week university orientation program, overseeing daily operations, logistics, student welfare, and program execution for 210+ incoming freshmen at Desasiswa Indah Kembara.",
      "Streamlined freshman registration and hostel check-in workflows by coordinating student movement, facilitator assignments, and placement processes to reduce congestion and maintain efficient operations.",
      "Directed large-scale student movement and activity logistics across campus, ensuring schedule adherence, effective crowd management, and smooth execution of consecutive orientation activities.",
      "Managed evening programming, safety protocols, and welfare response while serving as a key communication link between university administrators, facilitators, and 210+ incoming students.",
    ],
    tags: ["leadership"],
  },
  {
    id: "mpdik",
    role: "Executive Committee Member",
    organization: "MPDIK",
    period: "October 2023 - October 2025",
    summary:
      "Led an eight-member division while managing logistics, budgets, and stakeholder coordination for university-scale programs.",
    details: [
      "Led a division of 8 members while managing logistics, budgeting, and stakeholder coordination for university-scale programs.",
      "Mentored junior committee members and improved team reliability, execution speed, and operational turnaround.",
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
      "Executed flagship events including VHACK and PIXEL, supporting large-scale participant operations and technical coordination.",
      "Directed logistics, AV systems, venue operations, and website-related contributions under the society's Technical Division.",
    ],
    tags: ["leadership"],
  },
] as const;
