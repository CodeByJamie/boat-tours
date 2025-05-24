import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"ocean-blue": "#1A5A6D",
				"seafoam-green": "#72C3B6",
				"sand-beige": "#F1E2C6",
				"coral": "#FF6F61",
				"navy": "#003480", 
				"light-gray": "#F9F9F9", 
                        
			},
			animation: {
				fadeIn: "fadeIn 1s ease-out",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
