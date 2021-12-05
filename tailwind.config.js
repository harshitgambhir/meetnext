const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      zIndex: {
        '2': 2,
      },
    },
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
