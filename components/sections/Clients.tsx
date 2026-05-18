"use client";

import LogoLoop from "@/components/ui/LogoLoop";
import { tools } from "@/lib/data/toolkit";

const logoHeights: Record<string, number> = {
  Webflow: 16,
  "VS Code": 28,
};

const logos = tools.map(t => {
  const h = `${logoHeights[t.name] ?? 24}px`;
  const s = { height: h, width: "auto" };
  const node = t.logoLight ? (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={t.logo}      alt={t.name} className="logo-mode--dark"  style={s} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={t.logoLight} alt={t.name} className="logo-mode--light" style={s} />
    </>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={t.logo} alt={t.name} style={s} />
  );
  return { node, title: t.name };
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
