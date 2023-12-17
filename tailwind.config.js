/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#D9D9D9",
      secondary: "#666666",
      teritary: "#690000",
      accent: {
        1: "#481D24",
        2: "#CBD1D1",
      },
    },
    fontFamily: {
      dm: ["DM Sans", fontFamily.sans],
    },
    fontSize: {
      h1: "1rem",
      h2: "0.9rem",
      p: "0.75rem",
    },
  },
  plugins: [],
};
