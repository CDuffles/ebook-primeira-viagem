/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        ink:    '#0f0d0b',
        paper:  '#f7f3ec',
        cream:  '#efe9dc',
        deep:   '#1c1712',
        rust:   '#b85c2a',
        amber:  '#c49a35',
        forest: '#3d6b50',
        slate:  '#3a5f78',
        muted:  '#7a7060',
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease both',
        'fade-up-d': 'fadeUp 0.7s 0.15s ease both',
        'fade-up-d2':'fadeUp 0.7s 0.3s ease both',
        'pulse-bar': 'pulseBar 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        pulseBar: {
          '0%, 100%': { opacity: 0.25 },
          '50%':      { opacity: 0.7  },
        },
      },
    },
  },
  plugins: [],
}
