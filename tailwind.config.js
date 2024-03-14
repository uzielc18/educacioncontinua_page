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
        'hellow-hover': '#C68500',
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

