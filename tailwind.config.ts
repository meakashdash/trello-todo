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
        'indigo-600': '#4B36CC',
        'indigo-700': '#4C38C2',
        'blue-500': '#9C93D4',
        'blue-600': '#2F2188',
        "gray-600":"#868686",
        "gray-700":"#757575",
        "gray-100":"#F4F4F4"
      },
    },
  },
  plugins: [],
};
export default config;
