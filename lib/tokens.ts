/**
 * Design Tokens — single source of truth
 * Structure mirrors Webflow variable panels:
 *   _base/neutral → _base/system → brand → semantic groups
 */

// ── Layer 1A: Base / Neutral ──────────────────────────────────
export const neutral = {
  100: "#ffffff", // White
  95:  "#f8f8f8",
  90:  "#ececec",
  80:  "#cac9c9",
  60:  "#8d8d8d",
  20:  "#444444",
  5:   "#080808",
  0:   "#101010",
} as const;

// ── Layer 1B: Base / System ───────────────────────────────────
export const system = {
  successLight: "#b7ffec",
  success:      "#5abba6",
  warningLight: "#ffdcc0",
  warning:      "#ba6a00",
  errorLight:   "#ffdada",
  error:        "#d74e5e",
} as const;

// ── Layer 1C: Brand ───────────────────────────────────────────
export const brand = {
  primary:     "#0055ff",
  primaryDark: "#0044cc",
  // From first screenshot
  yellow:         "#6e7c00",
  darkNavy:       "#0a1128",
  softGray:       "#f4f7fa",
  accentOrange:   "#ff8c42",
} as const;

// ── Layer 2A: Link Color ──────────────────────────────────────
export const linkColor = {
  primaryDefault:   brand.primary,
  primaryHover:     brand.primaryDark,
  primaryDisabled:  neutral[60],
  secondaryDefault: neutral[95],
  secondaryHover:   neutral[95],
  tertiaryDefault:  neutral[5],
  tertiaryHover:    neutral[0],
} as const;

// ── Layer 2B: Text Color ──────────────────────────────────────
export const textColor = {
  grey:    neutral[80],
  black:   neutral[5],
  white:   neutral[95],
  success: system.success,
  warning: system.warning,
  error:   system.error,
  primary: brand.primary,
  snow:    neutral[60],
} as const;

// ── Layer 2C: Background Color ────────────────────────────────
export const backgroundColor = {
  black:     neutral[5],
  neutral90: neutral[90],
  neutral95: neutral[95],
  white:     neutral[100],
  success:   system.successLight,
  warning:   system.warningLight,
  error:     system.errorLight,
  primary:   brand.primary,
  layer2:    neutral[0],
} as const;

// ── Layer 2D: Border Color ────────────────────────────────────
export const borderColor = {
  primary:      brand.primary,
  primaryHover: brand.primaryDark,
  line:         neutral[90],
  secondary:    "rgba(255, 255, 255, 0.11)",
  input:        neutral[80],
} as const;

// ── Type Scale ────────────────────────────────────────────────
export const typeScale = {
  base: {
    h1: "4rem", h2: "3rem", h3: "2.5rem", h4: "2rem",
    h5: "1.5rem", h6: "1.125rem", p: "0.9375rem", small: "0.6875rem",
  },
  tablet: {
    h1: "3.2rem", h2: "2.5rem", h3: "2.125rem", h4: "1.75rem",
    h5: "1.312rem", h6: "1rem", p: "0.875rem", small: "0.6875rem",
  },
  mobile: {
    h1: "2.8rem", h2: "2.25rem", h3: "1.875rem", h4: "1.5rem",
    h5: "1.25rem", h6: "0.9375rem", p: "0.8125rem", small: "0.625rem",
  },
} as const;
