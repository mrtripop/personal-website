/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
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
      gray: '#ECEFF1',
      'light-gray': '#E4E4E4',
      'white-mill': '#F6F6F6',
      'dim-white': '#D9D9D9',
      'dark-blue-green': '#114357',
      pink: '#F29492',

      // new color
      'new-primary': 'var(--primary-color)',
      'new-secondary': 'var(--secondary-color)',
      'new-gray': 'var(--gray-color)',
      'new-light-gray': 'var(--light-gray-color)',
      'new-brown': 'var(--brown-color)',
      'new-black': 'var(--black-color)',
      'new-white': 'var(--white-color)',
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
      // re-write config font
      lato: ['var(--font-lato)'],
    },
    extend: {},
  },
  plugins: [],
}
