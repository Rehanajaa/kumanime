/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      'colors': {
        'karunime': '#2dc653',
        'bg-karunime': '#141519',
        'bg-karunime-2': '#0E1A22',
        'bg-karunime-semi': '#15202B'
      },
      'fontFamily': {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

