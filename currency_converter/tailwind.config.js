/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-white":"rgba(219, 210, 214, 0.22)"
      }
    },
  },
  plugins: [],
}

