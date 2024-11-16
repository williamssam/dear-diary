const plugin = require('tailwindcss')
const { textSizes } = require('./styles/typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,jsx,ts,tsx}',
		'./ui/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
	],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			colors: {
				'dd-black': '#101828',
				'dd-gray-one': '#667085',
				'dd-gray-two': '#E7E8EC',
				'dd-white': '#fafafa',
				'dd-main': '#E93D82',
				'dd-pink-one': '#EAACC3',
				'dd-pink-two': '#E093B2',
				'dd-pink-three': '#FACEDD',
				'dd-pink-four': '#FEDCE7',
				'dd-main-light': '#FFE9F0',
			},
		},
		fontFamily: {
			architectsdaughter: 'ArchitectsDaughter-Regular',
			wixmadefor: 'WixMadeforText-Regular',
			'wixmadefor-medium': 'WixMadeforText-Medium',
			'wixmadefor-bold': 'WixMadeforText-Bold',
			'wixmadefor-extrabold': 'WixMadeforText-ExtraBold',
		},
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.text-xs': textSizes['text-xs'],
				'.text-13': textSizes['text-13'],
				'.text-sm': textSizes['text-sm'],
				'.text-15': textSizes['text-15'],
				'.text-base': textSizes['text-base'],
				'.text-lg': {
					...textSizes['text-lg'],
				},
				'.text-xl': textSizes['text-xl'],
				'.text-2xl': {
					...textSizes['text-2xl'],
				},
				'.text-3xl': textSizes['text-3xl'],
				'.text-4xl': textSizes['text-4xl'],
			})
		}),
	],
}
