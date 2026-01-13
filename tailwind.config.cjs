/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        zone: {
          urgent: '#000000', // Black
          longterm: '#404040', // Dark Grey
          progress: '#737373', // Mid Grey
          completed: '#a3a3a3', // Light Grey
        },
        app: {
          bg: 'var(--app-bg)',
          text: 'var(--app-text)',
          'text-muted': 'var(--app-text-muted)',
          primary: 'var(--app-primary)',
          'primary-light': 'var(--app-primary-light)',
          surface: 'rgba(var(--app-surface-rgba), <alpha-value>)',
          border: 'rgba(var(--app-border-rgba), <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'ink': '3px 3px 0px 0px var(--app-shadow)',
        'ink-sm': '1px 1px 0px 0px var(--app-shadow)',
        'none': 'none',
        'neumorphic': '6px 6px 12px rgba(0, 0, 0, 0.05), -6px -6px 12px rgba(255, 255, 255, 0.8)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
