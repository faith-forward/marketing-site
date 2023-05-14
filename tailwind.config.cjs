/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				blue: '#39ABEB',
				darkBlue: '#00419C',
				red: '#FF6F6F',
				yellow: '#FFFCB2',
				blue_white: '#E3F9FF',
				grey: '#818485',
				paper: '#F5F5F5',
				darkPaper: '#eaeaea',
				boldGrey: '#323438',
				text: '#3c3e42',
				white: '#FFFFFF',
				purple: '#8440f7',
				green: '#8fc9bd',
				orange: '#ff6745'
			},
			height: {
				'100v': '100vh'
			},
			fontFamily: {
				sans: ['Open Sans Medium', 'sans-serif'],
				'sans-bold': ['Open Sans Bold', 'sans-serif'],
				'sans-extra': ['Open Sans Extra Bold', 'sans-serif'],
				'sans-semi': ['Open Sans Semi Bold', 'sans-serif'],
				'sans-condensed': ['Open Sans Condensed', 'sans-serif'],
				'serif-bold': ['PT Serif Bold', 'serif'],
				sofia: ['Sofia Condensed', 'sans-serif']
			},
			screens: {
				tablet: '640px',
				laptop: '1024px',
				'big-laptop': '1340px',
				desktop: '1560px',
				ultrawide: '1900px'
			},
			flex: {
				2: '2',
				3: '3'
			}
		}
	},
	plugins: []
};
