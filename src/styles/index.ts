import { createStitches } from "@stitches/react";



export const {
	config,
    globalCss,
    styled,
	css,
	keyframes,
	getCssText,
	theme,
	createTheme
} = createStitches({
    theme: {
        colors: {
        
        white: '#fff',
	  
	    'gray-100': '#E1E1E6',
	    'gray-300': '#C4C4CC',
	    'gray-400': '#8D8D99',
	    'gray-500': '#7C7C8A',
	    'gray-600': '#323238',
	    'gray-700': '#29292E',
	    'gray-800': '#202024',
	    'gray-900': '#121214',
	  
	    'green-300': '#00B37E',
	    'green-500': '#00875F',
	    'green-700': '#015F43',
	  
	    'red-300': '#F75A68',
	    'red-500': '#AB222E',
        'red-700': '#7A1921',
        },
		fontSizes: {
		'xs': '0.75rem',
  		'sm': '0.875rem',
  		'md': '1rem',
  		'lg': '1.125rem',
  		'xl': '1.25rem',
  		'2xl': '1.5rem',
  		'4xl': '2rem',
  		'5xl': '2.25rem',
  		'6xl': '3rem'
		},
		fontWeights: {
			'regular': '400',
			'medium': '500',
			'semibold': '600',
			'bold': '700'
		},
		lineHeights: {
			shorter: '125%',
  			short: '140%',
  			base: '160%',
  			tall: '180%',
		},
		radii: {
			px: '1px',
			xs: '4px',
			sm: '6px',
			md: '8px',
			lg: '16px',
			full: '99999px',
		},
		space: {
			1: '0.25rem',
			2: '0.5rem',
			3: '0.75rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			10: '2.5rem',
			12: '3rem',
			16: '4rem',
			20: '5rem',
			40: '10rem',
			64: '16rem',
			80: '20rem',
		},
		fonts: {
			default: 'Roboto, sans-serif',
			code: 'monospace',
		}
    },
	
})