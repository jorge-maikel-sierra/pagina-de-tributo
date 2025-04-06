/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html", // para archivos HTML en la raíz
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
        secondary: "#0f766e",
        accent: "#c2410c",
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};