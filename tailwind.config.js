/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: [
       `./public/**/*.html`
    ],
    darkMode: true,
    content: ["./src/**/*.{html,js}"],
    theme: {
      colors: {
        'blue': '#179CE6',
        'purple': '#E99151',
        'pink': '#B33100',
        'orange': '#179CE6',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      extend: {},
    },
    plugins: [],
  }