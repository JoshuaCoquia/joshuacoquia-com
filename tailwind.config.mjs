/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			text: '#F0F3F4',
			background: '#f7fafb',
			transparent: 'transparent',
			current: 'currentColor',
			primary: '#8cbfd9',
			secondary: '#193b4d',
			accent: '#11BB96',
			cta: '#1FC3FF',
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
			},
			'oceanblue': {
				'50': '#f1fafa',
				'100': '#dbeff2',
				'200': '#bae0e7',
				'300': '#8bc8d5',
				'400': '#54a9bc',
				'500': '#398da1',
				'600': '#327388',
				'700': '#2e5f70',
				'800': '#2d505d',
				'900': '#294350',
				'950': '#091115',
			},
		},
		extend: {
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						color: theme('colors.text'),
						h1: {
							fontWeight: '700',
							fontSize: '2.5rem',
							color: theme('colors.text'),
						},
						h2: { 
							color: theme('colors.text'),
						},
						a: {
							color: theme('colors.text'),
						},
						code: {
							color: theme('colors.text'),
						}
					}
				},
				lg: {
					css: {
						h1: {
							fontWeight: '700',
							fontSize: '2.5rem',
						},
					}
				}
			}) 
		},
		fontFamily: {
			'hind': ['Hind', 'ui-sans-serif', 'system-ui'],
			'montserrat': ['Montserrat', 'ui-sans-serif', 'system-ui'],
		},
		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.25rem',
			xl: '1.5rem',
			'2xl': '2rem',
			'2.5xl': '2.5rem',
			'3xl': '3rem',
			'4xl': '4rem',
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
