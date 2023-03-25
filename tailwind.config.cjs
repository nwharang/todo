/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/views/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	mode: "jit",
	theme: {
		extend: {},
		fontFamily: {
			sans: ["Poppins", "sans-serif"],
		},
		animation: {
			slidein: "slidein 0.5s ease-out alternate",
		},
		slidein: {
			"0%": {
				transform: "translateX(-20%)",
				opacity: 0,
			},
			"100%": { transform: "translateX(0%)", opacity: 1 },
		},
	},
	plugins: [require('@tailwindcss/forms')]
}
