/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#63327D",
        darkPurple: "#4A235F",
        darkBg: "#1A1023",
        deepBlack: "#24142E",
        cream: "#F6F2EB",
        gold: "#D4AF37",
        textLight: "#F5F5F5",
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        inter: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
