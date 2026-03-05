/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f4f9f0',
          100: '#e5f2db',
          200: '#c8e4b7',
          300: '#9fce87',
          400: '#74b357',
          500: '#4f9434',
          600: '#3b7526',
          700: '#2f5d1f',
          800: '#274a1b',
          900: '#1e3a15',
          950: '#0f2009',
        },
        earth: {
          50:  '#faf7f2',
          100: '#f2ebe0',
          200: '#e4d4be',
          300: '#d2b896',
          400: '#be976c',
          500: '#a87850',
          600: '#8f6143',
          700: '#744e38',
          800: '#5e4030',
          900: '#4d352a',
        },
        forest: '#1a2e1a',
        cream:  '#faf8f3',
        sage:   '#8fa882',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem,6vw,5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.2rem,4.5vw,4rem)',  { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.6rem,3vw,2.5rem)',  { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        'soft':    '0 4px 24px rgba(26,46,26,0.07)',
        'card':    '0 8px 40px rgba(26,46,26,0.10)',
        'lifted':  '0 16px 60px rgba(26,46,26,0.15)',
      },
      backgroundImage: {
        'gradient-hero':   'linear-gradient(135deg, #0f2009 0%, #1a2e1a 40%, #2f5d1f 100%)',
        'gradient-subtle': 'linear-gradient(180deg, #faf8f3 0%, #f4f9f0 100%)',
        'gradient-earth':  'linear-gradient(135deg, #faf7f2 0%, #f2ebe0 100%)',
      },
    },
  },
  plugins: [],
}
