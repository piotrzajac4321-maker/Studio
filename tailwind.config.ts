import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50:  '#e8f4f8',
          100: '#c5e3ef',
          200: '#8fc7df',
          300: '#56a8cc',
          400: '#2a8bb8',
          500: '#0e6fa0',
          600: '#085585',
          700: '#053d66',
          800: '#02274a',
          900: '#011530',
          950: '#000d1e',
        },
        gold: {
          300: '#fde68a',
          400: '#fbbf24',
          500: '#d4a017',
          600: '#b8860b',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-ocean': 'linear-gradient(135deg, #011530 0%, #053d66 50%, #085585 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d4a017 0%, #fbbf24 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
