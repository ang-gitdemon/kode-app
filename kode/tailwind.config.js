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
			'grayLightest': '#E8E8E8',
			'grayLighter': '#D9D9D9',
			'grayLight': '#ddd',
			'gray': '#7B7B7B',
			'grayDark': '#5f5f5f',
			'grayDarker': '#393939',
			'grayDarkest': '#101010',
			'black': '#000000',
		},
		extend: {},
	},
	plugins: [],
}

