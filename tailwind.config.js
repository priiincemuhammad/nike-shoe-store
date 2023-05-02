/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      oswald: "'Fredoka', sans-serif",
      urban: "'Urbanist', sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
