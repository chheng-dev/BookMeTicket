/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      colors: {
        primary: {
          DEFAULT: '#2EBAE2',
          '50': '#CFEFF8',
          '100': '#BDE9F6',
          '200': '#99DDF1',
          '300': '#76D2EC',
          '400': '#52C6E7',
          '500': '#2EBAE2',
          '600': '#1A99BE',
          '700': '#13718C',
          '800': '#0D4A5B',
          '900': '#06222A'
        },
      }
    },
    
  },
  plugins: [],
}
