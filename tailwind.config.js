/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			'serif': ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
			'sans': ['montserrat', 'system-ui'],
			'mono': ['ui-monospace', 'SFMono-Regular', 'Courier New'],
		},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'black': '#0c0c0c',
			'purple': '#7e7ca6',
			'darker-purple': '#65629e',
			'light-white': '#f7f7f7',
			'light-gray': '#b6b6b6',
			'mensxp-orange': '#ff5e03',
			'vitro-green': '#2c4b35',
			'wow-gold': '#bc9850',
			'sleepycat-orange': '#ff6832',
			'jbl-orange': '#ff3200',
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
		},
		extend: {},
	},
	plugins: [],
}
