import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: {
        50: "#eefffc",
        100: "#c5fffa",
        200: "#8bfff5",
        300: "#4afef0",
        400: "#15ece2",
        500: "#00d0c9",
        600: "#00a8a5",
        700: "#007b7b",
        800: "#066769",
        900: "#0a5757",
        950: "#003235",
      },
      black: colors.black,
      white: colors.white,
    },
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
