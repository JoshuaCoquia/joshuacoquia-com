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
			black: {
				'50': '#f7fafb',
				'100': '#e7e7e7',
				'200': '#d1d1d1',
				'300': '#b0b0b0',
				'400': '#888888',
				'500': '#6d6d6d',
				'600': '#5d5d5d',
				'700': '#4f4f4f',
				'800': '#454545',
				'900': '#3d3d3d',
				'950': '#191919',
			}
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
			xs: '0.75rem',
			sm: '0.875rem',
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
