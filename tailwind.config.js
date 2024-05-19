/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FFFFFF'
        },

        secondary: {
          100: '#818b90',
          200: '#1d262b'
        },

        accent: {
          100: '#AB8BFF',
          200: "#8153fd"
        }
      },

      fontFamily: {
        vietnam: ["Be Vietnam Pro", "sans-serif"],
        playfair: ["Playfair Display", "serif"]
      },

      width: {
        xl: '1200px',
        lg: '1024px',
        md: '922px',
        sm: '768px',
      }
    },

    screens: {
      xl: '1200px',
      lg: '1024px',
      md: '922px',
      sm: '768px'
    }
  },
  plugins: [],
};