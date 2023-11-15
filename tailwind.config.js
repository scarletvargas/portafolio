/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        gray100: "#EBEBEB",
        gray200: "#848297",
        gray300: "#656572",
        gray400: "#353252",
        navy200: "#040217",
        primary: "#281AEF",
        secondary: "#07042F",
        sky: "#85DEFF",
        softblue100: "#DEDBFE",
        softblue200: "#9D9ACB",
        white100: "#F4F4F6",
      },
      flex: {
        2: "2 1 60%",
      },
      screens: {
        md: "810px",
        xl: "1200px",
      },
      boxShadow: {
        "3xl": "0 4px 30px 4px rgba(101, 101, 114, 0.2)",
      },
      borderRadius: {
        "4xl": "22px",
        "5xl": "26px",
      },
    },
  },
  plugins: [],
};
