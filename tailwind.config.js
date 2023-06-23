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
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
      },
    },
  },
  plugins: [],
}