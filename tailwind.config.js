/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#23BE0A',
        'blue-primary': '#59C6D2'
      }
    },
    fontFamily: {
      'work-sans': ["Work Sans", "sans-serif"],
      'playfair': ["Playfair Display", "sans-serif"]
    }
  },
  plugins: [require('daisyui')],
}