/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',  // Custom screen size
        'sm': '640px',  // Default small screen size
        'md': '768px',  // Default medium screen size
        'hero': '881px',     // a size made to deal with an absolute issue on the hero section on 768 < size < 881 screens
        'lg': '1024px', // Default large screen size
        'xl': '1280px', // Default extra-large screen size
        '2xl': '1536px', // Default 2x extra-large screen size
        '3xl': '1800px', // Your custom size
  
      }, 
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], // 'Poppins' is the font family name you'll use in Tailwind classes
      },
      dropShadow: {
        'header': '0 4px 4px hsla(0, 0%, 0%, 0.25)',
        'icons': '0 15px 44px hsla(232, 37%, 8%, 0.12)',
        // You can add or override other drop shadows here if needed
      },
      boxShadow: {
        'boxes': '0 10px 60px hsla(0, 0%, 0%, 0.25)',
        'header': '0 4px 4px hsla(0, 0%, 0%, 0.25)',
      },
      colors: {
        primary: '#00b2fa',
        chartColor: '#05bdfa',
        initial: '#00AEEF', 
        secondary: '#f5f5f5',
        terciary: 'hsla(240, 11%, 46%, 1)',
        blueish: 'hsla(238, 45%, 34%, 1)'
      }
    },
  },
  plugins: [],
}

