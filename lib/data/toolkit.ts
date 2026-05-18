export interface Tool {
  name: string;
  logo: string;
  logoLight?: string;
}

export const tools: Tool[] = [
  { name: "Claude",     logo: "/images/tools/claude.svg",     logoLight: "/images/tools/claude-light.svg" },
  { name: "Cursor",     logo: "/images/tools/cursor.svg",     logoLight: "/images/tools/cursor-light.svg" },
  { name: "VS Code",    logo: "/images/tools/vscode.svg",     logoLight: "/images/tools/vscode-light.svg" },
  { name: "Google AI",  logo: "/images/tools/google-ai.svg",  logoLight: "/images/tools/google-ai-light.svg" },
  { name: "Figma",      logo: "/images/tools/figma.svg",      logoLight: "/images/tools/figma-light.svg" },
  { name: "Adobe",      logo: "/images/tools/adobe.svg" },
  { name: "Webflow",    logo: "/images/tools/webflow.svg",    logoLight: "/images/tools/webflow-light.svg" },
  { name: "Framer",     logo: "/images/tools/framer.svg",     logoLight: "/images/tools/framer-light.svg" },
];

export const clients: { name: string; logo: string }[] = [
  { name: "Deriv", logo: "/images/clients/deriv.svg" },
  { name: "KeoSpace", logo: "/images/clients/keospace.svg" },
  { name: "EcoByte", logo: "/images/clients/ecobyte.svg" },
  { name: "Taletellers", logo: "/images/clients/taletellers.svg" },
  { name: "GreenPilot", logo: "/images/clients/greenpilot.svg" },
  { name: "Supr", logo: "/images/clients/supr.svg" },
];
