module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: "#49B064",
        mintPrimary: "#C7C9BE",
        dark: "#131214",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          lg: "1140px",
          xl: "1140px",
          "2xl": "1320px",
        },
      },
      fontFamily: {
        sans: ["Gluten", "cursive"],
      },
      textColor: {
        primary: "#49B064",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
