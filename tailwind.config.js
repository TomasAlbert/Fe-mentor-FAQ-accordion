/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		screens: {
			sm: "375px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			white: "hsl(0, 0%, 100%)",
			lightPink: "hsl(275, 100%, 97%)",
			GrayishPurple: "hsl(292, 16%, 49%)",
			DarkPurple: "hsl(292, 42%, 14%)",
		},
		fontFamily: {
			sans: ["Work Sans", "sans-serif"],
		},
	},
	plugins: [],
};
