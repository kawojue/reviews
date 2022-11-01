/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        "pry-clr-0": 'rgb(241, 245, 248)',
        "pry-clr-1": 'rgb(16, 42, 66)',
        "pry-clr-2": 'rgb(73, 166, 233)',
        "pry-clr-3": 'rgb(235, 247, 255)',
        "pry-clr-4": 'rgb(6, 50, 81)',
      }
    },
  },
  plugins: [],
}