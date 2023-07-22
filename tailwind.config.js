/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mylahiru': 'pink',
      },
      dropShadow: {
        '3xl': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        'product-shadow': 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      },
    },
  },
  plugins: [],
}