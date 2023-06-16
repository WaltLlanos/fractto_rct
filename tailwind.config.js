/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '430px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundColor: theme =>({
				...theme('colors'),
				'primary': '#1EA3BC',
				'secondary': '#FC7901',
				'alternate1': '#F0F2FF',
        'alternate2': '#F5F5F5',
			}),
			textColor:{
				'primary': '#000000',
				'secondary': '#434552',
				'alternate1': '#0081F8',
        'alternate2': '#1EA3BC',
			},
			fontFamily: {
				Montserrat: ["Montserrat", "sans-serif"],
			 },
       fontSize: {
        'xs': '.8rem',
      },
    },
  },
  plugins: [],
}
