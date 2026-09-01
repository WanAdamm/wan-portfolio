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
  linkedin: "https://www.linkedin.com/in/wan-muhammad-adam-wan-mohd-fauzi/",
  homeUrl: assetPath(""),
  resumePageUrl: assetPath("resume/"),
  resumeUrl: assetPath("Wan Muhammad Adam Resume.pdf"),
  availability: {
    label: "Available from August 2027",
    detail:
      "Open to full-time software engineering roles from August 2027, after final examinations conclude in July.",
  },
} as const;

export const navigation = [
  { label: "Work", href: `${site.homeUrl}#projects` },
  { label: "Experience", href: `${site.homeUrl}#experience` },
  { label: "Skills", href: `${site.homeUrl}#skills` },
  { label: "Leadership", href: `${site.homeUrl}#leadership` },
  { label: "Contact", href: `${site.homeUrl}#contact` },
] as const;
