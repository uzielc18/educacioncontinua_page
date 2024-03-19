/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {

        // COLORS PRIMARY UPeU
        'blue-primary': '#003865',
        'hellow-primary': '#F7A701',

        // COLORS HOVER UPeU
        'hellow-hover': '#E39900',
        'blue-hover': '#002949',

        // COLORS EXTRAS
        'hellow-extra': '#FFE9BA',
        'red-came-extra': '#861239',
        'sky-blue-extra': '#008DFF',
        'black-extra': '#1E1E1E',
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

