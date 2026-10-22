const basePath = import.meta.env.BASE_URL.replace(/\/+$/, "");

export const assetPath = (path: string) =>
  `${basePath}/${path.replace(/^\/+/, "")}`;

export const site = {
  name: "Wan Muhammad Adam",
  title: "Wan Muhammad Adam | Backend & AI Engineer Portfolio",
  description:
    "Wan Muhammad Adam is a Backend Software Engineer specializing in Intelligent Computing, with enterprise experience building FastAPI services, REST APIs, and AI integrations. Available for full-time roles from October 2027.",
  email: "wanadamworkmail@gmail.com",
  github: "https://github.com/WanAdamm",
  linkedin: "https://www.linkedin.com/in/wan-muhammad-adam-wan-mohd-fauzi/",
  homeUrl: assetPath(""),
  resumePageUrl: assetPath("resume/"),
  resumeUrl: assetPath("Wan Muhammad Adam Resume.pdf"),
  availability: {
    label: "Available from October 2027",
    detail:
      "Open to full-time backend and AI engineering roles from October 2027, following graduation.",
  },
} as const;

export const navigation = [
  { label: "Work", href: `${site.homeUrl}#projects` },
  { label: "Experience", href: `${site.homeUrl}#experience` },
  { label: "Skills", href: `${site.homeUrl}#skills` },
  { label: "Leadership", href: `${site.homeUrl}#leadership` },
  { label: "Contact", href: `${site.homeUrl}#contact` },
] as const;
