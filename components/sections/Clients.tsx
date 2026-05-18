"use client";

import LogoLoop from "@/components/ui/LogoLoop";
import { tools } from "@/lib/data/toolkit";

const logoHeights: Record<string, number> = {
  Webflow: 16,
  "VS Code": 28,
};

const logos = tools.map(t => {
  const h = `${logoHeights[t.name] ?? 24}px`;
  return {
    node: (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={t.logo} alt={t.name} className="logo-mode--dark" style={{ height: h, width: "auto" }} />
        {t.logoLight && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={t.logoLight} alt={t.name} className="logo-mode--light" style={{ height: h, width: "auto" }} />
        )}
      </>
    ),
    title: t.name,
  };
});

export default function Clients() {
  return (
    <section>
      <div className="container" style={{ paddingBlock: "3rem" }}>
        <div className="logo-strip">
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
