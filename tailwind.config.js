/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        customGreen: '#004D43',
        customGreen1:'#CDEA68',
        customBlack:'#192826',
      },
      fontFamily: {
        'founders-grotesk': ['Founders_Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

