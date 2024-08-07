/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#190a40",
        secondry: "#c92c1e",
        tertiary: "#30858a",
      },
    },
    screens: {
      lg: { max: "2020px" },
      sm: { max: "800px" },
    },
  },
  plugins: [],
};
