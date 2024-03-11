import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      ...colors,
    },
    extend: {
      fontFamily: {
        sans: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
