const colors = require("tailwindcss/colors");

module.exports = {
  // mode: "jit",
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
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
