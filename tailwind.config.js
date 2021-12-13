module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Gochi Hand", "sans-serif"],
      },
      animation: {
        blob: "blob 10s infinite",
        blobim: "blobim 10s infinite",
        spectrum: "spectrum 1.5s",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },

          "33%": {
            transform: "translate(0px, 0px) scale(0.8)",
          },
          "66%": {
            transform: "translate(0px, 0px) scale(0.1)",
          },

          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        blobim: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },

          "33%": {
            transform: "translate(0px, 10px) scale(1)",
          },
          "66%": {
            transform: "translate(0px, -10px) scale(1)",
          },

          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        spectrum: {
          "0%": {
            filter: "hue-rotate(0deg)",
          },

          "50%": {
            filter: "hue-rotate(360deg)",
          },

          "100%": {
            filter: "hue-rotate(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
