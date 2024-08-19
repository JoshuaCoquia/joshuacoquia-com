/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			text: '#090d0f',
			background: '#f7fafb',
			transparent: 'transparent',
			current: 'currentColor',
			primary: '#8cbfd9',
			secondary: '#193b4d',
			accent: '#702424',
		},
		extend: {
			typography: {
				DEFAULT: {
					css: {
						h1: {
							fontWeight: '700',
							fontSize: '2.5rem',
						}
					}
				}
			}
		},
		fontSize: {
			base: '1rem',
			xl: '1.5rem',
			'2xl': '2rem',
			'3xl': '2.5rem',
			'4xl': '4.5rem',
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
