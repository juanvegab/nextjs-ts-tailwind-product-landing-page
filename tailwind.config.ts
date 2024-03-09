import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      ...{
        primary: "#09063B",
        secondary: colors.white,
        tertiary: "#F6460B",
        quaternary: "#C5D8F8",
        quinary: "#252421",
      },
    },
    fontFamily: {
      body: ['"Open Sans"', "sans-serif"],
      SBlight: ["sangbleukingdom-light"],
      SBregular: ["sangbleukingdom-regular"],
      SBblack: ["sangbleuempire-black"],
      SBBlackItalic: ["sangbleuempire-black-italic"],
    },
    extend: {
      backgroundImage: {
        "gradient-linear-vertical":
          "linear-gradient(0deg, rgba(9,6,59,1) 0%, rgba(9,6,59,1) 78%, rgba(255,255,255,1) 78%)",
        "gradient-linear-horizontal":
          "linear-gradient(90deg, rgba(9,6,59,1) 0%, rgba(9,6,59,1) 60%, rgba(255,255,255,1) 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
