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
        primary: {
          '50': '#e0f7fa',
          '100': '#b3e0f2',
          '200': '#80c8eb',
          '300': '#4dafe4',
          '400': '#1a97dd',
          '500': '#0080d6', // Close to your original #00b2fa, slightly adjusted for better gradient
          '600': '#006ab8',
          '700': '#005299',
          '800': '#003a7a',
          '900': '#00225c' ,
          '950': '#00143a',
          DEFAULT: '#00b2fa', // Keep your original primary as the default, but now you have shades
        },
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

