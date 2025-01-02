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
        'lg': '1024px', // Default large screen size
        'xl': '1280px', // Default extra-large screen size
        '2xl': '1536px', // Default 2x extra-large screen size
        '3xl': '1800px', // Your custom size
      },
      colors: {
        primary: '#05bdfa',
        initial: '#00AEEF', 
        secondary: '#f5f5f5'
      }
    },
  },
  plugins: [],
}

