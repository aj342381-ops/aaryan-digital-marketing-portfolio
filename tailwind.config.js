/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071324',
          900: '#0B1F3A', // Primary Navy
          800: '#132E54',
          700: '#1C4073',
          600: '#255494',
        },
        brand: {
          blue: '#2563EB', // Secondary Professional Blue
          light: '#3B82F6',
          dark: '#1D4ED8',
          accent: '#60A5FA',
          subtle: '#EFF6FF',
        },
        surface: {
          white: '#FFFFFF',
          light: '#F4F7FC', // Light Background
          card: '#FFFFFF',
          dark: '#0B1F3A',
        },
        charcoal: {
          900: '#172033', // Primary Text
          800: '#242F46',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(11, 31, 58, 0.04)',
        'card': '0 10px 30px -10px rgba(11, 31, 58, 0.08)',
        'card-hover': '0 20px 40px -15px rgba(37, 99, 235, 0.16)',
        'glow': '0 0 25px rgba(37, 99, 235, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
