# Design Spec — Dinidu Missaka Portfolio

Reference this file for every page and component. All values come from `app/globals.css`.

---

## Fonts

| Role | Family | Variable |
|------|--------|----------|
| Display / Headings | Fraunces | `var(--font-fraunces), Georgia, serif` |
| Body / UI | Manrope | `var(--font-manrope), sans-serif` |

---

## Typography Scale

| Token | Size | Usage |
|-------|------|-------|
| Page H1 | `48px` | Hero title, page title (`fontWeight: 300`, `lineHeight: 1.05`, `letterSpacing: "-0.02em"`, Fraunces) |
| Section H2 | `32px` | Section titles (`fontWeight: 300`, `lineHeight: 1.1`, Fraunces) |
| Sub-heading | `clamp(1.25rem, 2.5vw, 1.5rem)` | Inline prose headings (Fraunces 300) |
| Body large | `14px` | Hero description, lead paragraphs (`lineHeight: 1.75`, Manrope, `var(--color-muted)`) |
| Body | `13px` | Experience bullets, case study prose (`lineHeight: 1.7`, Manrope, `var(--color-muted)`) |
| Label / Eyebrow | `12px` | Section labels ("Skills", "Experience", "What I do") — Manrope, `var(--color-muted)` |
| Meta / Caption | `11px` | Dates, captions, figcaptions — Manrope, `var(--color-muted)` |

---

## Colour Tokens

| Token | Dark value | Light value | Usage |
|-------|-----------|-------------|-------|
| `--color-fg` | `#f8f8f8` | `#080808` | All primary text |
| `--color-muted` | `#8d8d8d` | `#444444` | Labels, body copy, captions |
| `--color-bg` | `#101010` | `#ffffff` | Page background |
| `--bg-subtle` | `rgba(255,255,255,0.08)` | `rgba(0,0,0,0.08)` | Tag pills, image placeholders |
| `--border-section` | `rgba(255,255,255,0.15)` | `rgba(0,0,0,0.1)` | Section dividers |
| `--border-item` | `rgba(255,255,255,0.1)` | `rgba(0,0,0,0.08)` | Card/item borders |

---

## Reusable Style Objects

Copy-paste these into any page:

```tsx
const sectionLabel: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "12px",
  color: "var(--color-muted)",
  marginBottom: "12px",
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "var(--font-fraunces), Georgia, serif",
  fontSize: "32px",
  fontWeight: 300,
  lineHeight: 1.1,
  color: "var(--color-fg)",
  marginBottom: "2rem",
};

const pageTitle: React.CSSProperties = {
  fontFamily: "var(--font-fraunces), Georgia, serif",
  fontSize: "clamp(2.5rem, 6vw, 4rem)",
  fontWeight: 300,
  lineHeight: 1.05,
  letterSpacing: "-0.02em",
  color: "var(--color-fg)",
};

const bodyLarge: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "14px",
  lineHeight: 1.75,
  color: "var(--color-muted)",
};

const body: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "13px",
  lineHeight: 1.7,
  color: "var(--color-muted)",
};

const metaSmall: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "11px",
  color: "var(--color-muted)",
};

const divider: React.CSSProperties = {
  borderBottom: "1px solid var(--border-section)",
  paddingBottom: "3rem",
  marginBottom: "3rem",
};
```

---

## Layout

- **Max content width:** `1016px` (`.container` class)
- **Section vertical padding:** `3rem` top + bottom (`paddingBlock: "3rem"`)
- **Section divider:** `borderBottom: "1px solid var(--border-section)"` + `paddingBottom: "3rem"` + `marginBottom: "3rem"`
- **Vertical rails:** Rendered by `body::before` / `body::after` — do not replicate in components

---

## Tag / Pill

```tsx
// Skill tag, case study tag
{
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "11px",
  padding: "4px 10px",
  border: "1px solid var(--border-item)",
  borderRadius: "999px",
  color: "var(--color-muted)",
}
```

---

## Links

- External links: `color: "var(--color-muted)"`, `textDecoration: "underline"`, `textUnderlineOffset: "3px"`, hover → `var(--color-fg)`
- Navigation back link: `fontSize: "12px"`, Manrope, `var(--color-muted)`

---

## Case Study — Image Placeholder

```tsx
// Use until real screenshots are ready
<div style={{
  width: "100%",
  aspectRatio: "16 / 9",
  borderRadius: "12px",
  border: "1px dashed var(--border-section)",
  background: "var(--bg-subtle)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}}>
  <span style={{ fontSize: "12px", color: "var(--color-muted)", opacity: 0.5 }}>
    Caption / description
  </span>
</div>
```
