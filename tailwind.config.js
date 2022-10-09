/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: [
       `./public/**/*.html`
    ],
    darkMode: true,
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }