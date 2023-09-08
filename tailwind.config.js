/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#d35f5f",
        primary2:"#e29e64",
        secondary: "#ffff",
        footer:"#12333b"
      }


      
    },
  },
  plugins: [],
}