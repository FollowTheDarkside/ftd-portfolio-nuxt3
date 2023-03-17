/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // https://tailwindcss.com/docs/font-family#customizing-the-default-font
        // 'sans': ['MySelectFont', defaultTheme.fontFamily.sans],
        body: [
          '"Avenir Next"', // for mac & en
          'Avenir', // for mac & en
          '"Segoe UI"', // for win & en
          'Candara', // for win & en
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          '"HiraginoSans-W2"',
          // '"Hiragino Sans"',
          'Meiryo',
          'YuGothic',
          '"Yu Gothic"',
          '"MS PGothic"',
          'sans-serif'
        ],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
}
