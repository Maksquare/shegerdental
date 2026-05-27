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
      primary: ["var(--font-cormorant)"],    // Elegant serif for headings
      secondary: ["var(--font-jost)"],        // Clean geometric sans for body
      accent: ["var(--font-italiana)"],       // Decorative for special labels
    },
    container: {
      center: true,
      padding: "15px",
    },
    extend: {
      colors: {
        // ── Core Brand ──────────────────────────────────────────────
        // Deep midnight navy — primary brand color
        primary:    "#0D1B2A",
        // Slightly lighter navy — for cards, subtle UI
        muted:      "#1A2E45",

        // ── Gold Palette ─────────────────────────────────────────────
        // Warm champagne gold — CTAs, highlights, accents
        gold:       "#C9A84C",
        "gold-light": "#E2C97E",
        "gold-dark":  "#A0823A",

        // ── Neutral / Surface ────────────────────────────────────────
        // Porcelain white — hero backgrounds, cards
        porcelain:  "#F8F6F1",
        // Soft cream — section backgrounds
        cream:      "#F2EDE4",
        // Warm off-white — subtle dividers
        ivory:      "#EDE8DE",

        // ── Text ─────────────────────────────────────────────────────
        // Warm dark — body text
        secondary:  "#4A4A4A",
        // Light gray — captions, meta text
        subtle:     "#8A8A8A",

        // ── UI ───────────────────────────────────────────────────────
        border:     "#E0D9CE",
        surface:    "#FFFFFF",

        // ── Functional ───────────────────────────────────────────────
        success:    "#2A7A4B",
        error:      "#B83232",
      },

      backgroundImage: {
        // Subtle gold shimmer gradient
        "gold-shimmer": "linear-gradient(135deg, #C9A84C 0%, #E2C97E 50%, #C9A84C 100%)",
        // Deep navy gradient
        "navy-gradient": "linear-gradient(135deg, #0D1B2A 0%, #1A2E45 100%)",
        // Porcelain light gradient
        "porcelain-gradient": "linear-gradient(180deg, #FFFFFF 0%, #F8F6F1 100%)",
        // Hero overlay
        "hero-overlay": "linear-gradient(135deg, rgba(13,27,42,0.92) 0%, rgba(26,46,69,0.80) 100%)",
        // Subtle grain texture via CSS (applied via pseudo)
        hero: "url('/assets/img/hero/bg.png')",
      },

      boxShadow: {
        // Soft lift — cards
        "card":         "0 4px 32px rgba(13, 27, 42, 0.07)",
        // Elevated — modals, dropdowns
        "elevated":     "0 8px 48px rgba(13, 27, 42, 0.12)",
        // Gold glow — CTA buttons, highlighted elements
        "gold-glow":    "0 4px 24px rgba(201, 168, 76, 0.35)",
        // Inset for inputs
        "input":        "inset 0 2px 6px rgba(13, 27, 42, 0.06)",
        // Deep navy shadow for hero elements
        "deep":         "0 16px 64px rgba(13, 27, 42, 0.20)",
      },

      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "section": "7rem",
      },

      letterSpacing: {
        "widest-xl": "0.25em",
        "widest-2xl": "0.35em",
      },

      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "bounce-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },

      animation: {
        "fade-up":      "fadeUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "fade-in":      "fadeIn 0.6s ease both",
        "shimmer":      "shimmer 2.5s linear infinite",
        "float":        "float 6s ease-in-out infinite",
        "pulse-gold":   "pulseGold 2s ease-in-out infinite",
      },

      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201,168,76,0.4)" },
          "50%":      { boxShadow: "0 0 0 12px rgba(201,168,76,0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};