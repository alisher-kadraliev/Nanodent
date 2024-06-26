/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./***.html",],

  theme: {
    extend: {},
    container: {
      padding: "20px",
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1120px",
      },
    },
    colors: {
      primary: '#aa8d65',
      white: '#fff'
    }
  },
  plugins: [require('@tailwindcss/typography'),],
}