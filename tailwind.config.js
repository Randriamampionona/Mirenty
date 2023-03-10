/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				dancingScript: ["Dancing Script", "cursive"],
			},

			colors: {
				primaryColor: "#bb2649",
				sectionBgColor: "#f5f5dc",
			},

			boxShadow: {
				btnShadow: "0px 6px 13px #11172869",
				aboutUsShadow: "0px 0px 10px 0px #111827",
				newsEventsShadow: "0px 8px 23px -8px",
			},
		},
	},
	plugins: [],
};
