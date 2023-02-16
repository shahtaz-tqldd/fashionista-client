/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["winter"]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
