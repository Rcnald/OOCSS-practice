/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'indicator-text-color':'var(--indicator-text-color)',
        'accent-text-color':'var(--accent-text-color)',
        'rate-text-color':'var(--rate-text-color)',
        'main-text-color':'var(--main-text-color)',
        'card-bg-color':'var(--card-bg-color)',
        'card-weather-bg-color':'var(--card-weather-bg-color)',
      },
      fontFamily:{
        'main-font-family':'var(--main-font-family)',
      },
      fontSize:{
        'header-font-size':'var(--header-font-size)',
        'small-font-size':'var(--small-font-size)',
        'regular-font-size':'var(--regular-font-size)',
        'emphasis-font-size':'var(--emphasis-font-size)',
      },
      spacing:{
        'main-padding':'var(--main-padding)',
        'card-padding':'var(--card-padding)',
        'week-weather-padding':'var(--week-weather-padding)',
        'temperature-padding':'var(--temperature-padding)',
      },
      backgroundImage:{
        'main-bg-image':'var(--main-bg-image)',
        'card-bg-image':'var(--card-bg-image)',
        'cloud-big-image':'var(--cloud-big-image)',
      },
      backdropBlur:{
        'main-blur':'var(--main-blur)',
      },
      borderRadius:{
        'card-radius':'var(--card-radius)',
      },
    },
  },
  plugins: [],
}
