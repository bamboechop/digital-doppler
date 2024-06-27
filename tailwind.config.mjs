/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'background-black-linen': 'url(\'/bg/black-linen.png\')',
				'background-pattern': 'var(--background-image-url)',
				'background-fabric': 'url(\'/bg/black-linen.png\')',
			},
			dropShadow: {
				'logo': ['0 4px 3px rgba(0, 0, 0, .4)', '0 2px 2px rgba(0, 0, 0, .39)'],
				'stationery': '4px 4px 4px rgba(0, 0, 0, .5)',
			},
			screens: {
				'xs': '375px',
				'md': '640px',
			},
		},
	},
	plugins: [],
}
