/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#155dfd",
        primaryLight: "#4d7dff",  // lighter tint
        primaryDark: "#003ccc",   // darker shade
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #155dfd, #4d7dff)",
        "gradient-accent": "linear-gradient(to right, #155dfd, #00c6ff)",
        "gradient-deep": "linear-gradient(to right, #003ccc, #155dfd)",
        "gradient-soft": "linear-gradient(to right, #4d7dff, #b3ccff)",
        "gradient-vibrant": "linear-gradient(to right, #155dfd, #14b8a6)", // blue to teal
      },
    },
  },
  plugins: [],
}