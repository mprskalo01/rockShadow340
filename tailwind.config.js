/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      animation: {
        'rainbow-text': 'rainbow-text 5s linear infinite',
      },
    },
  },

  plugins: [],
}
