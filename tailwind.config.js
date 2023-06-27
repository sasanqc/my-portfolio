/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "650px",
      md: "850px",
      lg: "976px",
      xl: "1440px",
    },
    fontSize: {
      base: ["18px", "28px"],
      md: ["24px", "32px"],
      lg: ["48px", "56px"],
      xlm: ["40px", "40px"],
      xlt: ["72px", "72px"],
      xl: ["88px", "88px"],
    },
    colors: {
      black: "#151515",
      white: "#FFFFFF",
      black1: "#242424",
      gray: "#d9d9d9",
      green: "#4EE1A0",
      red: "#FF6F5B",
    },
    fontFamily: { spaceGrotesk: "'Space Grotesk', sans serif" },
  },
  plugins: [],
};
