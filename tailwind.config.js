// tailwind.config.js

module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.js"
  ],
  plugins: [],

  theme: {
    extend: {
      backgroundColor: {
        'black': '#000',
      },
      textColor: {
        'white': '#fff',
        'pink': '#ff69b4',
      },
    },
  },
};
