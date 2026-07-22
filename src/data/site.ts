const basePath = import.meta.env.BASE_URL.replace(/\/+$/, "");

export const assetPath = (path: string) =>
  `${basePath}/${path.replace(/^\/+/, "")}`;

export const site = {
  name: "Wan Muhammad Adam",
  title: "Wan Muhammad Adam | AI & Full Stack Portfolio",
  description:
    "Portfolio of Wan Muhammad Adam, Computer Science student focused on Intelligent Computing, AI, and full-stack development.",
  email: "wanadamworkmail@gmail.com",
  github: "https://github.com/WanAdamm",
  linkedin: "https://www.linkedin.com/in/wan-muhammad-adam-74409427a/",
  resumeUrl: assetPath("resume.pdf"),
} as const;

export const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
] as const;
