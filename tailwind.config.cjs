/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBlue:'#263159',
        lightBlue:''
      }
    },
  },
  plugins: [],
}