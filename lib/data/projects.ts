export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  rotatingTexts: string[];
  description: string;
  image: string;
  homeImage: string;
  url?: string;
}

export const projects: Project[] = [
  {
    id: "deriv",
    title: "Deriv",
    subtitle: "Enterprise Website",
    year: "2024",
    rotatingTexts: ["Enterprise Website", "Web Design System", "Webflow", "6000+ pages"],
    description: "Redesigned the enterprise website experience for Deriv, a global fintech trading platform.",
    image: "/images/projects/project-deriv.webp",
    homeImage: "/images/home/projects/deriv.webp",
  },
  {
    id: "planr",
    title: "Planr",
    subtitle: "Consultation Platform",
    year: "2025",
    rotatingTexts: ["Consultation Platform", "Web Application", "Vibe Coding", "Claude Code"],
    description: "Designed Planr, an AI-powered planning tool integrated into VS Code to help developers think through and structure their projects faster.",
    image: "/images/projects/project-planr.webp",
    homeImage: "/images/home/projects/planr.webp",
  },
  {
    id: "minti",
    title: "Minti",
    subtitle: "Personal Expense Tracker",
    year: "2026",
    rotatingTexts: ["Personal Expense Tracker", "Progressive App", "Vibe Coding", "Claude Code"],
    description: "Designed Minti, a personal finance tracker that makes managing expenses simple and visual.",
    image: "/images/projects/project-minti.webp",
    homeImage: "/images/home/projects/minti.webp",
  },
  {
    id: "rata",
    title: "Ratā",
    subtitle: "Design System",
    year: "2026",
    rotatingTexts: ["Design System", "Multi-Brand Theming", "Accessibility", "Design Tokens"],
    description:
      "Designed and built Ratā, a multi-brand design system of 30 components where accessibility and design decisions are enforced by the build instead of written down and hoped for.",
    image: "/images/projects/rata/gallery-color.png",
    homeImage: "/images/home/projects/rata.png",
    url: "https://rats-design.vercel.app",
  },
  {
    id: "ecobyte",
    title: "EcoByte",
    subtitle: "Digital Sustainability",
    year: "2024",
    rotatingTexts: ["Digital Sustainability", "Mobile App", "Vibe Coding", "Brand Design"],
    description: "Built a sustainability-focused digital experience helping businesses track and reduce their environmental footprint.",
    image: "/images/projects/project-ecobyte.webp",
    homeImage: "/images/home/projects/ecobyte.avif",
  },
];
