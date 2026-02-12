/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx}"],
  theme: {
    extend: {colors: {
          light: '#b8a77c',
          dark: '#a08f65',
        },
      },
  },
  plugins: [],
}

