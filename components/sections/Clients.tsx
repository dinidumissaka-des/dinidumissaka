"use client";

import LogoLoop from "@/components/ui/LogoLoop";
import { tools } from "@/lib/data/toolkit";

const logoHeights: Record<string, number> = {
  Webflow: 16,
  "VS Code": 28,
};

// eslint-disable-next-line @next/next/no-img-element
const logos = tools.map(t => ({
  node: <img src={t.logo} alt={t.name} style={{ height: `${logoHeights[t.name] ?? 24}px`, width: "auto" }} />,
  title: t.name,
}));

export default function Clients() {
  return (
    <section>
      <div className="container" style={{ paddingBlock: "3rem" }}>
        <div style={{ overflow: "hidden", padding: "20px 0", color: "var(--color-fg)" }}>
        <LogoLoop
          logos={logos}
          speed={35}
          direction="left"
          logoHeight={24}
          gap={56}
          hoverSpeed={0}
          fadeOut
          scaleOnHover
          ariaLabel="Tools I use"
        />
        </div>
      </div>
    </section>
  );
}
