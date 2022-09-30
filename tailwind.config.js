/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        7: "repeat(7, minmax(0, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
