const basePath = import.meta.env.BASE_URL.replace(/\/+$/, "");

export const assetPath = (path: string) =>
  `${basePath}/${path.replace(/^\/+/, "")}`;

export const site = {
  name: "Wan Muhammad Adam",
  title: "Wan Muhammad Adam | Software Engineer Portfolio",
  description:
    "Wan Muhammad Adam is a final-year Computer Science student building AI, backend, automation, and full-stack systems. Available for full-time roles from August 2027.",
  email: "wanadamworkmail@gmail.com",
  github: "https://github.com/WanAdamm",
  linkedin: "https://www.linkedin.com/in/wan-muhammad-adam-74409427a/",
  resumeUrl: assetPath("resume.pdf"),
  availability: {
    label: "Available from August 2027",
    detail:
      "Open to full-time software engineering roles from August 2027, after final examinations conclude in July.",
  },
} as const;

export const navigation = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
] as const;
