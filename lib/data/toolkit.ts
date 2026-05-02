export interface Tool {
  name: string;
  logo: string;
}

export const tools: Tool[] = [
  { name: "Claude", logo: "/images/tools/claude.svg" },
  { name: "Cursor", logo: "/images/tools/cursor.svg" },
  { name: "VS Code", logo: "/images/tools/vscode.svg" },
  { name: "Google AI", logo: "/images/tools/google-ai.svg" },
  { name: "Figma", logo: "/images/tools/figma.svg" },
  { name: "Adobe", logo: "/images/tools/adobe.svg" },
  { name: "Webflow", logo: "/images/tools/webflow.svg" },
  { name: "Framer", logo: "/images/tools/framer.svg" },
];

export const clients: { name: string; logo: string }[] = [
  { name: "Deriv", logo: "/images/clients/deriv.svg" },
  { name: "KeoSpace", logo: "/images/clients/keospace.svg" },
  { name: "EcoByte", logo: "/images/clients/ecobyte.svg" },
  { name: "Taletellers", logo: "/images/clients/taletellers.svg" },
  { name: "GreenPilot", logo: "/images/clients/greenpilot.svg" },
  { name: "Supr", logo: "/images/clients/supr.svg" },
];
