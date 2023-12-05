/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-pattern": "url('../assets/images/background-pattern-desktop.svg')",
			},
			keyframes: {
				wiggle: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(180deg)" },
				},
			},
			animation: {
				wiggle: "wiggle .4s cubic-bezier(.69,-0.62,.37,0.69)",
			},
		},
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
			LightPurple: "#AD28EB",
		},
		fontFamily: {
			sans: ["Work Sans", "sans-serif"],
		},
	},
	plugins: [],
};
