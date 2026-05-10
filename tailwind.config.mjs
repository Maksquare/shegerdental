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
        primary:   "#1a2744",
        secondary: "#6b7280",
        accent:    "#c9a84c",
        border:    "#e2e0d8",
        surface:   "#f7f4ed",
        muted:     "#243260",
      },
      boxShadow: {
        custom: "0 4px 54px rgba(26, 39, 68, 0.08)",
      },
      backgroundImage: {
        hero: "url('/assets/img/hero/bg.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};