/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				satisfy: ["Satisfy", "cursive"],
			},

			colors: {
				primaryColor: "#bb2649",
				// secondaryColor: "#fe9ab2",
				sectionBgColor: "#f5f5dc",
			},

			boxShadow: {
				newsEventsShadow: "0px 8px 23px -8px",
			},
		},
	},
	plugins: [],
};
