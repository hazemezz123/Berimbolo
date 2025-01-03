/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        MainColor: "#140028",
        deepPurple: {
          DEFAULT: "#140028",
          light: "#24013D",
          lighter: "#340254",
          lightest: "#55077A",
          accent: "#7A4D9C",
          dark: "#0F0021",
          darker: "#0A0018",
          darkest: "#1D0034",
        },
        complementary: "#280014",
        triadicGreen: "#002814",
        triadicBlue: "#001428",
        neutral: {
          light: "#F8F8F8",
          medium: "#E2E2E2",
          dark: "#6E6E6E",
        },
      },
      fontFamily: {
        JetBrains: "JetBrains Mono",
      },
    },
  },
  plugins: [],
};
