/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: '#f3f3ec',
        'linen-light': '#fafaf6',
        ink: '#17233b',
        'ink-muted': 'rgba(23, 35, 59, 0.65)',
        'ink-subtle': 'rgba(23, 35, 59, 0.40)',
        'ink-hairline': 'rgba(23, 35, 59, 0.12)',
        'ink-surface': 'rgba(23, 35, 59, 0.04)',
        blush: '#f8bbcb',
        plum: '#340c24',
        powder: '#b5cedb',
        gold: '#c5a880',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Didot', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        script: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'super-wide': '0.35em',
        'monumental': '0.7em',
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'marquee': 'marquee 45s linear infinite',
        'marquee-slow': 'marquee 70s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
