const config = {
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
