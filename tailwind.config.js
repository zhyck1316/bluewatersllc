/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}" ],
  safelist: [
    'text-6xl',
    'text-7xl',
    'text-8xl',
    'text-9xl',
    'text-10xl',
  ],
  theme: {
    extend: {
      screens: {
        '2sm': '320px',

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        poppins: 'Poppins', 
        worksans: 'Work Sans',
        montserrat: 'Montserrat'
      },
      colors:{
        'blue1': '#141434',
        'blue2': '#00021AF2',
      },
    },
  },
  plugins: [],
}

