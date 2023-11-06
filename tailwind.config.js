/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D87D4A',
        lightDar: '#101010',
        lightGray: '#F1F1F1',
        veryLightGray: '#FAFAFA',
        primaryLight: '#fbaf85',
        customGray: '#CFCFCF'
      }
    },
  },
  plugins: [],
}