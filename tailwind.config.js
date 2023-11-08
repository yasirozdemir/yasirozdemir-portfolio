// color palette from -> https://coolors.co/d6e8fe-323639-b5d3fe-8999b3-4d5259

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        columbia_blue: "#D6E8FE",
        onyx: "#323639",
        uranian_blue: "#B5D3FE",
        cool_gray: "#8999B3",
        davys_gray: "#4D5259",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
