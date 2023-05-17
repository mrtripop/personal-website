/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'dark-blue': '#002F47',
      black: '#000000',
      'dim-black': '#010101',
      white: '#ffffff',
      'dim-white': '#D9D9D9',
      gray: '#E5E5E5',
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
