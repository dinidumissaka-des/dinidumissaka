"use client";

import LogoLoop from "@/components/ui/LogoLoop";
import { tools } from "@/lib/data/toolkit";

const logos = tools.map(t => ({ src: t.logo, alt: t.name }));

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
