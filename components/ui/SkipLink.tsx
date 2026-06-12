"use client";

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      style={{
        position: "absolute",
        left: "-9999px",
        top: "auto",
        width: "1px",
        height: "1px",
        overflow: "hidden",
        zIndex: 99999,
      }}
      onFocus={(e) => {
        const el = e.currentTarget;
        el.style.left = "16px";
        el.style.top = "16px";
        el.style.width = "auto";
        el.style.height = "auto";
        el.style.overflow = "visible";
        el.style.padding = "8px 16px";
        el.style.background = "var(--color-bg)";
        el.style.color = "var(--color-fg)";
        el.style.borderRadius = "8px";
        el.style.border = "2px solid var(--color-accent)";
        el.style.fontFamily = "var(--font-manrope), sans-serif";
        el.style.fontSize = "14px";
        el.style.fontWeight = "600";
      }}
      onBlur={(e) => {
        const el = e.currentTarget;
        el.style.left = "-9999px";
        el.style.top = "auto";
        el.style.width = "1px";
        el.style.height = "1px";
        el.style.overflow = "hidden";
        el.style.padding = "";
        el.style.background = "";
      }}
    >
      Skip to content
    </a>
  );
}
