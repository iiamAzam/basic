/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F16521',  // Button CTA
        secondary: '#FFFFFF',  // Background
        accent: '#333333',  // Text
      },
    },
  },
  plugins: [],
}

