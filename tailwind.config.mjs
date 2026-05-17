/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: ["var(--font-jakarta)"],
      secondary: ["var(--font-playfair)"],
    },
    container: {
      center: true,
      padding: "15px",
    },
    extend: {
      colors: {
        // ── Core brand ──────────────────────────────────────────────
        // Deep navy — "TEXAS" wordmark & background
        primary:   "#1a2744",
        // Muted navy variant — used for subtle UI elements
        muted:     "#243260",
        // Warm gray — body text
        secondary: "#6b7280",

        // Brand red — house outline, stethoscope heart, "HOME CARE" text
        accent:    "#C8102E",
        // Gold — previous accent; kept as a named token for optional highlights
        gold:      "#c9a84c",

        // ── Surface & border ────────────────────────────────────────
        border:    "#e2e0d8",
        surface:   "#f7f4ed",

        // ── Ethiopian flag palette (hands in the logo) ───────────────
        // Use sparingly for decorative / flag-inspired accents
        "eth-green":  "#078930",
        "eth-yellow": "#FCDD09",
        "eth-blue":   "#0F47AF",
      },
      boxShadow: {
        custom: "0 4px 54px rgba(26, 39, 68, 0.08)",
        // Red-tinted glow for accent elements
        "accent-glow": "0 4px 32px rgba(200, 16, 46, 0.18)",
      },
      backgroundImage: {
        hero: "url('/assets/img/hero/bg.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};