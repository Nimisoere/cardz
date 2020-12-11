module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ['Work Sans', 'sans-serif'],
      },
      colors: {
        primary: '#01801d',
        secondary: '#b47c00',
        cGreen: '#01801d'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
