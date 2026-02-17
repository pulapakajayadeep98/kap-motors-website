/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kap-red': '#DC2626',
        'kap-dark-red': '#B91C1C',
        'kap-blue': '#1D4ED8',
        'kap-light-blue': '#3B82F6',
        'kap-black': '#0F0F0F',
        'kap-grey': '#374151',
        'kap-light-grey': '#6B7280',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
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
        heroFade: {
          '0%, 100%': { opacity: '0' },
          '5%, 30%': { opacity: '1' },
          '35%': { opacity: '0' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'hero-fade': 'heroFade 15s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
