import type { Config } from 'tailwindcss';

export default {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--main-bg)',
				block: 'var(--block-bg)',

				primary: 'var(--primary-foreground)',
				secondary: 'var(--secondary-foreground)',

				input: 'var(--input)',
				border: 'var(--border)',
				placeholder: 'var(--placeholder)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 6px)',
				sm: 'calc(var(--radius) - 10px)',
			},
		},
	},
	plugins: [],
} satisfies Config;
