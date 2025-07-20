import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        'text-primary': '#FFFFFF',
        'accent-purple': '#D871E3',
        'accent-green': '#7FFF00',
        'accent-pink': '#FF6DCB',
        'text-gray': '#CCCCCC',
        'nav-loop-text': '#F7CFFF',
        'inactive-dot': '#666666',
      },
      fontFamily: {
        'condensed': ['ui-sans-serif', 'system-ui', 'sans-serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
        'techno': ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(3rem, 10vw, 9rem)',
      },
      spacing: {
        'section': '4rem',
        'module-gap': '3rem',
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
        'glitch': 'glitch 2s infinite',
        'fade-in': 'fadeIn 0.6s ease-in-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        glitch: {
          '0%, 100%': { 
            transform: 'translate(0)',
            filter: 'hue-rotate(0deg)',
          },
          '20%': { 
            transform: 'translate(-2px, 2px)',
            filter: 'hue-rotate(90deg)',
          },
          '40%': { 
            transform: 'translate(-2px, -2px)',
            filter: 'hue-rotate(180deg)',
          },
          '60%': { 
            transform: 'translate(2px, 2px)',
            filter: 'hue-rotate(270deg)',
          },
          '80%': { 
            transform: 'translate(2px, -2px)',
            filter: 'hue-rotate(360deg)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config