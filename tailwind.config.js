/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#050508",
        bgDarker: "#020204",
        cardDark: "rgba(18, 20, 29, 0.6)",
        accentBlue: "#3b82f6",
        accentViolet: "#8b5cf6",
        accentIndigo: "#6366f1",
        accentCyan: "#06b6d4"
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      animation: {
        'grid-move': 'gridMove 25s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(40px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      boxShadow: {
        'glass-glow': '0 0 50px -10px rgba(99, 102, 241, 0.25)',
        'card-glow': '0 20px 40px -15px rgba(0, 0, 0, 0.7)'
      }
    },
  },
  plugins: [],
}
