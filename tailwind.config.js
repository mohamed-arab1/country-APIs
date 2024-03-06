/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark_blue: "#2b3945",
        very_dark_blue: "#202c37",
        dark_blue_light: "#111517",
        dark_gray: "#858585",
        very_light_gray: "#fafafa",
      }
    },
  },
  plugins: [],
}

