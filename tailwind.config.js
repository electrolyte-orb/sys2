const plugin = require('tailwindcss/plugin');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette');
module.exports = {
	mode: 'jit',
	purge: ['pages/**/*.tsx', 'components/**/*.tsx'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		underlineColors: (theme) => flattenColorPalette.default(theme('colors')),
		fontFamily: {
			sans: ['Inter', 'system-ui'],
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					underline: (values) => ({
						'text-decoration-color': values,
					}),
				},
				{ values: theme('underlineColors') }
			);
		}),
	],
};
