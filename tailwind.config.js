/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FFA23D",
        "gray-dark": "#495057",
        blueGray: "bluegray",
        gray: "gray",
        black: "#3B3B3B",
        white: "#FFFFFF",
      },
      spacing: {
        "2x": "20px",
        "3x": "30px",
      },
      borderRadius: {
        "4xl": "40px",
        "5x1": "50%",
      },
    },
  },
  plugins: [],
};
