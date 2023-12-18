module.exports = {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    colors: {
      gray: "#f7f8f9",
      white: "#ffffff",
      black: "#000000",
      yellow: "#ffc700",
      red: "#ff3f3f",
      green: "#69da57",
      "gray-100": "#d7d7d7",
      "gray-140": "#868c9b",
      "gray-160": "#656d7e",
      "gray-180": "#3e4958",
      "gray-200": "#1a2433",
      "blue-160": "#eaf4ff",
      "blue-180": "#3d86f5",
      "blue-200": "#3d86f5",
      "violet-180": "#f3eefd",
      "violet-200": "#9975e2",
      "orange-180": "#fff7f0",
      "orange-200": "#e9ae7a",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      roboto: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      md: { max: "767px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
