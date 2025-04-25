/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-blue': '#0B1437',
        'plasma-cyan': '#00F0FF',
        'ion-orange': '#FF5F1F',
        'starfield-gray': '#F8F9FA',
        'moon-dust': '#1A1B1E',
      },
      fontFamily: {
        'exo': ['"Exo 2"', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}