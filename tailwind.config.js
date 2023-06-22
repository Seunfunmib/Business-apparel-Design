/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{

      },
      backgroundColor:{
        "desaturated-red":"#ce9797",
        "soft-red":"#f96262",
        "dark-grayish-red":"#413a3a",
      },
      textColor:{
        "desaturated-red":"#ce9797",
        "soft-red":"#f96262",
        "dark-grayish-red":"#413a3a",
      }
    },
  },
  plugins: [],
}