/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#281AEF",
        secondary: "#07042F",
        gray100: "#EBEBEB",
        gray200: "#848297",
        gray300: "#656572",
        softblue100: "#DEDBFE",
        softblue200: "#9D9ACB",
      },
      screens: {
        'md': '810px',
        'xl': '1200px',
      },
      boxShadow: {
        '3xl': '0 4px 30px 4px rgba(101, 101, 114, 0.2)',
      },
      borderRadius: {
        '4xl': '22px',
        '5xl': '26px',
      },
    },
  },
  plugins: [],
}
