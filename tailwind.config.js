// tailwind.config.js
module.exports = {
  darkMode: "class", // <-- switchable via .dark on <html>
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        cinelineGold: "#cbb99e",
        cinelineDark: "#0b0b0b",
      },
      boxShadow: {
        cinematic: "0 28px 80px rgba(0,0,0,0.25)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
