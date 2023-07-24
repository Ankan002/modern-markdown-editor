/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				poppins: "'Poppins', sans-serif",
				quicksand: "'Quicksand', sans-serif",
			},
			colors: {
				"primary-dark": "#2D2D2D",
				"primary-light": "#F6F6F6",
				white: "#FFFFFF",
				"light-grey": "#D2D2D2",
				"dark-grey": "#737373",
				"primary-pink": "#DB6B97",
				"primary-red": "#D21312",
				"semi-transparent": "rgba(0, 0, 0, 0.4)",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
