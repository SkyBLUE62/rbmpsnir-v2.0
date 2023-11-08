import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#131212",
        secondary: "#E6E6E6",
      },
      colors: {
        primary: "#E6E6E6",
        secondary: "#131212",
      },
      fontSize: {
        "11xl": "10rem",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        monument: ["MonumentExtended"],
      },
      maxWidth: {
        "9xl": "100rem",
      },
      backgroundImage: {
        "white-black": "linear-gradient(90deg, #E6E6E6 0%, #131212 100%)",
      },
      height: {
        "1/2-screen": "50vh",
        "1/4-screen": "25vh",
        "2/3-screen": "66vh",
        "3/4-screen": "75vh",
      },
      zIndex: {
        60: "60",
        70: "70",
      },
    },
  },
  plugins: [],
};
export default config;
