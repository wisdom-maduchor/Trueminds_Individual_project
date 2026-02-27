/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chuks-orange': '#FF7A1B',
        'dark-brown': '#2D1A14',
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
