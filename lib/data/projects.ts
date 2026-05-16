export interface Project {
  id: string;
  title: string;
  rotatingTexts: string[];
  description: string;
  image: string;
  url?: string;
}

export const projects: Project[] = [
  {
    id: "deriv",
    title: "Deriv",
    rotatingTexts: ["Enterprise Website", "Web Design System", "Webflow", "6000+ pages"],
    description: "Redesigned the enterprise website experience for Deriv, a global fintech trading platform.",
    image: "/images/projects/project-deriv.webp",
  },
  {
    id: "planr",
    title: "Planr",
    rotatingTexts: ["Consultation Platform", "Web Application", "Vibe Coding", "Claude Code"],
    description: "Designed Planr, an AI-powered planning tool integrated into VS Code to help developers think through and structure their projects faster.",
    image: "/images/projects/project-planr.webp",
  },
  {
    id: "ecobyte",
    title: "EcoByte",
    rotatingTexts: ["Digital Sustainability", "Mobile App", "Vibe Coding", "Brand Design"],
    description: "Built a sustainability-focused digital experience helping businesses track and reduce their environmental footprint.",
    image: "/images/projects/project-ecobyte.webp",
  },
  {
    id: "minti",
    title: "Minti",
    rotatingTexts: ["Personal Expense Tracker", "Progressive App", "Vibe Coding", "Claude Code"],
    description: "Designed Minti, a personal finance tracker that makes managing expenses simple and visual.",
    image: "/images/projects/project-minti.webp",
  },
];
