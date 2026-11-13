import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FE5C21',
          navy: '#102840',
          white: '#FFFFFF',
          grey: '#F4F6F8',
        },
      },
      boxShadow: {
        soft: '0 30px 80px rgba(16,40,64,0.12)',
        card: '0 24px 60px rgba(16,40,64,0.12)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(16,40,64,0.08) 1.5px, transparent 0)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
