/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%' : {transform : "translateY(-300px)"},
          "100%": { transform : "translateY(0)" },
        },
        slideUp:{
          '0%' : {transform : "translateY(0)"},
          "100%": { transform : "translateY(-400px)" },
        }
      },
      animation: {
        "slideDown": "slideDown 0.8s ease-in-out forwards",
        "slideUp": "slideUp 0s linear forwards",
      }
    },
  },
  plugins: [],
}

