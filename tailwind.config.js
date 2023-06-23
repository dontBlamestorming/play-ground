/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#499df3",
      secondary: "#50667f",
      b0: "#000",
      b3: "#333",
      b5: "#555",
      b7: "#777",
      ba: "#aaa",
      bd: "#ddd",
      white: "#fff",
    },
    borderRadius: {
      small: "8px",
      medium: "12px",
      large: "16px",
      xLarge: "24px",
    },
    extend: {},
  },
  plugins: [],
};
