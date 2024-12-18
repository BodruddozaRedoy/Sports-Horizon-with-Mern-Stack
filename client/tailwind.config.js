/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': "#C0153F",
        'text': '#A4A4A4'
      }
    },
    fontFamily: {
      'poppins': "Poppins",
      'protest': "Protest Revolution"
    }
  },
  plugins: [
    require('daisyui'),
  ],
}