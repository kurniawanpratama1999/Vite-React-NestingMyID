/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: "400px",
      tablet: "600px",
      desktop: "900px",
    },
  },
  plugins: [],
};
