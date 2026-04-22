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
  fontFamily:{
      primary:["var(--font-dmSans)"],
      secondary:["var(--font-barlow)"],
  },
    container: {
  			center: true,
  			padding: "15px",
  	},
    
  	extend: {
      colors: {
        primary:"#0F3D3E",
        secondary:"#666666",
        accent:"#05c4a8",
        border:"#d7d7d7",
        // primary:"#231f20",
        // secondary:"#524c4a",
        // accent:"#dc3645",
        // border:"#d7d7d7",
  	},
    boxShadow: {
      custom:"0 4px 54px  rgba(10, 19, 21, 0.06)",
  },
  backgroundImage:{
    hero:"url('/assets/img/hero/bg.jpg')",
  }
},
    }, 
     plugins: [require("tailwindcss-animate")],
};
