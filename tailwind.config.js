/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['AmberEN', 'Tajawal', 'sans-serif'],
      title: ['AmberEN', 'All Genders', 'sans-serif'],
    },
    screens: {
      phone: { 'max': '440px' },
    },
    colors: {
      "white": "#FFFFFF",
      "dark": "#0E1110",
      "light-green": "#03F79A",
      "medium-green": "#00BDA1",
      "dark-green": "#142E2F",
    },
    plugins: [],
  }
}