/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        xl: "4rem",
      },
    },
    extend: {
      colors: {
        primary: "#2554FF",
        "primary-50": "#3CB8FE",
        secondary: "#2554FF",
        "secondary-50": "#B7D4FF",
        orange: "#F39D5A",
        purple: "#894AFF",
        black: "#1F1F20",
        white: "#FCFEFF",
        "white-50": "#F5F5F5",
        grey: "#828387",
        "grey-50": "#C7C8CB",
      },
    },
  },
  plugins: [],
};
