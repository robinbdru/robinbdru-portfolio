module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      display: ["group-hover"],
      colors: {
        darkestGray: "#0A0A0A",
        darkGray: "#121212",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
