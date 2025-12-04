module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Netflix-inspired palette
        primary: {
          50: '#ffe0e0',
          100: '#ffc2c2',
          200: '#ff8888',
          300: '#ff5555',
          400: '#ff3333',
          500: '#e50914',
          600: '#cc0812',
          700: '#b30710',
          800: '#99060e',
          900: '#800505',
        },
        accent: {
          50: '#fff5f0',
          100: '#ffe5d6',
          200: '#ffcbad',
          300: '#ffb385',
          400: '#ff9a5c',
          500: '#ff6b35',
          600: '#ff5522',
          700: '#e63d0d',
          800: '#cc3608',
          900: '#b32e04',
        },
        surface: {
          50: '#f5f5f1',
          100: '#ebe5db',
          200: '#d8cec0',
          300: '#c5b5a5',
          400: '#a89888',
          500: '#8b7d6d',
          600: '#6e6a62',
          700: '#564d48',
          800: '#3e3a35',
          900: '#2a2622',
        },
        dark: {
          50: '#fafafa',
          100: '#262626',
          200: '#1f1f1f',
          300: '#1a1a1a',
          400: '#141414',
          500: '#0f0f0f',
          600: '#0a0a0a',
          700: '#050505',
          800: '#000000',
          900: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'glow': 'glow 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(229, 9, 20, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 107, 53, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    }
  },
  plugins: []
}
