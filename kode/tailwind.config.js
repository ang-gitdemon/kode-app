/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./App.{js,jsx,ts,tsx}",
		"./app/**/*.{js,jsx,ts,tsx}"
	],
	theme: {
		colors: {
			'primary': '#F2A541',
			'primaryLighter': '#FFC786',
			'primaryDarker': '#E97B0C',
			'secondary': '#BA3F1D',
			'accent': '#1879DA',
			'white': '#ffffff',
			'gray100': '#fcfcfc',
			'gray200': '#E8E8E8',
			'gray300': '#ddd',
			'gray400': '#ddd',
			'gray500': '#7B7B7B',
			'gray600': '#5f5f5f',
			'gray700': '#393939',
			'gray800': '#101010',
			'gray900': '#101010',
			'black': '#000000',
		},
		extend: {
			fontFamily: {
				kanit_400: ['Kanit_400Regular'],
				kanit_500: ['Kanit_500Medium'],
			},
		},
	},
	plugins: [],
}

