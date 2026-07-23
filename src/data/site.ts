const basePath = import.meta.env.BASE_URL.replace(/\/+$/, "");

export const assetPath = (path: string) =>
  `${basePath}/${path.replace(/^\/+/, "")}`;

export const site = {
  name: "Wan Muhammad Adam",
  title: "Wan Muhammad Adam | Software Engineer Portfolio",
  description:
    "Wan Muhammad Adam is a final-year Computer Science student building data, automation, and full-stack systems. Open to full-time roles from August 2027.",
  email: "wanadamworkmail@gmail.com",
  github: "https://github.com/WanAdamm",
  linkedin: "https://www.linkedin.com/in/wan-muhammad-adam-74409427a/",
  resumeUrl: assetPath("resume.pdf"),
} as const;

export const navigation = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
] as const;
