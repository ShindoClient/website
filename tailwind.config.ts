import type { Config } from 'tailwindcss'

export default {
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts,tsx}',
    './layouts/**/*.{vue,js,ts,tsx}',
    './pages/**/*.{vue,js,ts,tsx}',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Tight', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Outfit', 'Inter Tight', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      colors: {
        surface: '#050712',
        'surface-elevated': '#0b0f20',
        accent: {
          50: '#f3e9ff',
          100: '#ead8ff',
          200: '#d4b4ff',
          300: '#bc8dff',
          400: '#a26bff',
          500: '#7f5fff',
          600: '#5a3ef7',
          700: '#432bd3',
          800: '#3021a5',
          900: '#211873'
        },
        success: '#14cc8a',
        warning: '#f5a524'
      },
      maxWidth: {
        container: '1120px'
      },
      boxShadow: {
        glow: '0 25px 60px -25px rgba(90, 62, 247, 0.55)'
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at 20% 20%, rgba(127, 95, 255, 0.18), transparent 55%), radial-gradient(circle at 80% 0%, rgba(67, 43, 211, 0.22), transparent 50%)',
        'panel-glow': 'linear-gradient(135deg, rgba(90, 62, 247, 0.28), rgba(33, 24, 115, 0.12))'
      },
      animation: {
        marquee: 'marquee 18s linear infinite',
        float: 'float 14s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, -4px, 0)' },
          '50%': { transform: 'translate3d(0, 6px, 0)' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' }
        }
      }
    }
  },
  plugins: []
} satisfies Config
