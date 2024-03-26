/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        default: {
          // COLORS PRIMARY UPeU
          'blue-primary': '#003865',
          'hellow-primary': '#F7A701',
          'white-primary': '#FFFFFF ',
          'cream-primary': '#FFE9BA',

          // COLORS HOVER UPeU
          'hellow-hover': '#E39900',
          'blue-hover': '#002949',
          'sky-blue-hover': '#005EAA',

          // COLORS EXTRAS
          'red-came-extra': '#861239',
          'sky-blue-extra': '#008DFF',
          'black-extra': '#1E1E1E',
          'gray-background': '#E7E7E7',

          // COLORS SELECTS
          'blue-select': '#2563EB',

          // COLORS BANNER
          'blue-banner': '#55B0F9'
        },

        dark: {
          // COLORS PRIMARY UPeU
          'blue-primary': '#002340',
          'hellow-primary': '#F7A701',
          'blue-background-primary': '#001424',
          'white-primary': '#FFFFFF ',
          'cream-primary': '#FFE9BA',

          // COLORS HOVER UPeU
          'hellow-hover': '#E39900',
          'black-background-select-hover': '#1B2234',

          // COLORS EXTRAS
          'gray-extra': '#ACACAC',
          'color-barra': '#000E18',

          // COLORS SELECTS
          'black-background-select': '#262C3C',
        }
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        body: ['Montserrat']
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
}

