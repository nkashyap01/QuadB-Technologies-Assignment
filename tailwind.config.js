/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        sm: { min: "0px", max: "575px" },
        md: { min: "576px", max: "767px" },
        lg: { min: "768px", max: "991px" },
        xl: { min: "992px", max: "1200px" },
        xxl: { min: "1200px", max: "1400px" },
      },
    },
  },
  plugins: [],
};
