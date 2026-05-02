export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  url?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "deriv",
    title: "Deriv",
    category: "Enterprise Website",
    tags: ["UX/UI", "Design System", "Fintech"],
    description:
      "Redesigned the enterprise website experience for Deriv, a global fintech trading platform — focused on clarity, scalability, and brand consistency.",
    image: "/images/projects/deriv.webp",
    featured: true,
  },
  {
    id: "planr",
    title: "Planr",
    category: "AI + Dev Tool",
    tags: ["AI", "VSCode", "Product Design"],
    description:
      "Designed Planr, an AI-powered planning tool integrated into VS Code to help developers think through and structure their projects faster.",
    image: "/images/projects/planr.webp",
    featured: true,
  },
  {
    id: "ecobyte",
    title: "EcoByte",
    category: "Sustainability Platform",
    tags: ["UX Research", "Web App", "Sustainability"],
    description:
      "Built a sustainability-focused digital experience helping businesses track and reduce their environmental footprint.",
    image: "/images/projects/ecobyte.webp",
  },
  {
    id: "taletellers",
    title: "Taletellers",
    category: "Cultural Storytelling",
    tags: ["Branding", "Web Design", "Editorial"],
    description:
      "Crafted the brand identity and digital experience for Taletellers, a platform celebrating cultural storytelling from around the world.",
    image: "/images/projects/taletellers.webp",
  },
  {
    id: "keospace",
    title: "KeoSpace",
    category: "Web App",
    tags: ["UI Design", "SaaS", "Dashboard"],
    description:
      "Designed the web app interface for KeoSpace, a productivity and collaboration tool for distributed teams.",
    image: "/images/projects/keospace.webp",
  },
  {
    id: "greenpilot",
    title: "GreenPilot",
    category: "Webflow Template",
    tags: ["Webflow", "Template", "Green Tech"],
    description:
      "Created a premium Webflow template for green tech startups — clean, conversion-focused, and fully responsive.",
    image: "/images/projects/greenpilot.webp",
  },
  {
    id: "supr",
    title: "Supr",
    category: "Visual Design",
    tags: ["Branding", "Visual Design", "Motion"],
    description:
      "Developed the full visual identity and design language for Supr — from logo to motion assets.",
    image: "/images/projects/supr.svg",
  },
];
