/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          slate: "#334155",
        },
        electric: {
          blue: "#0033FF",
        },
      },
      fontFamily: {
        sans: ["Pretendard", "Inter", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
}
