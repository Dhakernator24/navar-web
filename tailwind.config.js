/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        'max': '2000px',
      },
      minHeight: {
        'min': '500px',
      },
      fontFamily: {
        oxygen: ['"Oxygen"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'logo': {
          //DEFAULT: '#00283f',
          'main': '#00283e',
          'second': '#00d397',
          'light': '#9faeb7',
          'secLight': '#bff4e5'
        }
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

