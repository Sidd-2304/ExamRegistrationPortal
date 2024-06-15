/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%, 100%': { opacity: 1 },
          '20%': { opacity: 0 },
          '40%': { opacity: 0 },
          '60%': { opacity: 0 },
          '80%': { opacity: 0 },
        },
      },
      animation: {
        slide: 'slide 20s infinite',
      },
    },
  },
  plugins: [require("rippleui")],
}