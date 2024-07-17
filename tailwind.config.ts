import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary" : "#363BBB",
        "primary-hovered" : "#7E84FF",
        "secondary" : "#B6B9FF",
        "widget-primary" : "#DCD9FF",
        "widget-primary-hovered" : "#CCCEFF",
        "widget-border" : "#636AFF"
      }
    },
  },
  plugins: [],
};
export default config;
