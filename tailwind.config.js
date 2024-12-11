/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins', 
        worksans: 'Work Sans',
        montserrat: 'Montserrat'
      },
      colors:{
        'blue1': '#141434',
      },
    },
  },
  plugins: [],
}

