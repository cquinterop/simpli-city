import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  conditions: {
    light: "[data-theme=light] &",
    dark: "[data-theme=dark] &",
  },
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#f5f8ff" },
          100: { value: "#e6edff" },
          200: { value: "#cddaff" },
          300: { value: "#a9beff" },
          400: { value: "#7f98ff" },
          500: { value: "#5670ff" },
          600: { value: "#3d54e6" },
          700: { value: "#2f41b3" },
          800: { value: "#243388" },
          900: { value: "#1c286b" },
        },
        gray: {
          50: { value: "#f8fafc" },
          100: { value: "#f1f5f9" },
          200: { value: "#e2e8f0" },
          300: { value: "#cbd5e1" },
          400: { value: "#94a3b8" },
          500: { value: "#64748b" },
          600: { value: "#475569" },
          700: { value: "#334155" },
          800: { value: "#1f2937" },
          900: { value: "#0f172a" },
          950: { value: "#020617" },
        },
      },
      radii: {
        sm: { value: "6px" },
        md: { value: "10px" },
        lg: { value: "14px" },
        full: { value: "9999px" },
      },
      spacing: {
        1: { value: "0.25rem" },
        2: { value: "0.5rem" },
        3: { value: "0.75rem" },
        4: { value: "1rem" },
      },
    },
    semanticTokens: {
      colors: {
        bg: { value: { base: "{colors.gray.50}", dark: "{colors.gray.900}" } },
        fg: { value: { base: "{colors.gray.900}", dark: "{colors.gray.50}" } },
        muted: {
          value: { base: "{colors.gray.600}", dark: "{colors.gray.300}" },
        },
        surface: { value: { base: "white", dark: "{colors.gray.800}" } },
        surfaceAlt: {
          value: { base: "{colors.gray.100}", dark: "{colors.gray.700}" },
        },
        border: {
          value: { base: "{colors.gray.200}", dark: "{colors.gray.600}" },
        },
        accent: {
          value: { base: "{colors.brand.600}", dark: "{colors.brand.400}" },
        },
        accentFg: { value: { base: "white", dark: "{colors.gray.900}" } },
        accentMuted: {
          value: { base: "{colors.brand.100}", dark: "{colors.brand.800}" },
        },
        focusRing: {
          value: { base: "{colors.brand.500}", dark: "{colors.brand.400}" },
        },
      },
      radii: {
        card: { value: "{radii.lg}" },
        pill: { value: "{radii.full}" },
      },
      spacing: {
        gutter: { value: "{spacing.4}" },
      },
    },
    extend: {
      keyframes: {
        spin: {
          from: { rotate: "0deg" },
          to: { rotate: "360deg" },
        },
      },
    },
  },
  outdir: "styled-system",
  syntax: "object-literal",
  jsxFramework: "react",
});
