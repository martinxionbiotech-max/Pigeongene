/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4fb',
          100: '#d9e6f5',
          200: '#b3cded',
          300: '#85b0e0',
          400: '#5791d1',
          500: '#3a76bd',
          600: '#2c5da0',
          700: '#254a80',
          800: '#203d68',
          900: '#1c3457',
          950: '#12203a',
        },
        accent: {
          500: '#e8a33d',
          600: '#d68a1f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
