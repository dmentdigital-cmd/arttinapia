import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
        caveat: "var(--font-caveat)",
      },
      colors: {
        cream: "#fdfcf8",
        red: "#d0442b",
        "blue-light": "#aac5e3",
        pink: "#e28eb5",
        green: "#8d9545",
        gold: "#e6bc5e",
        blue: "#306fe5",
        "dark-green": "#192e1f",
        black: "#171414",
      },
    },
  },
  plugins: [],
};
export default config;
