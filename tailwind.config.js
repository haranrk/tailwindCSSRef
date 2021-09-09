const colors = require("tailwindcss/colors");

module.exports = {
  // mode: "jit",
  purge: ["./public/**/*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // mycolor: colors.red,
        // mygreen: {
        //   light: "#ff7ce5",
        //   DEFAULT: "#ff49db",
        //   dark: "#ff16d1",
        // },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
