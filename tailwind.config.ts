import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "screen-lg": "1100px",
        "7xl": "1275px",
      },
      spacing: {
        112: "456.37px",
        120: "470px",
        144: "572px",
        140: "568px",
        160: "712px",
        68: "17.125rem",
        44: "177.12px",
        56: "222px",
        28: "120px",
        4: "15px",
        16: "60px",
        6: "26px",
        "12/10": "120%",
        navlg: "51rem",
        navmd: "28.125rem",
        planetD: "27.813rem",
        planetT: "18.75rem",
        planetM: "10.625rem",
        3.75: "0.938rem",
        7: "1.688rem",
      },
      translate: { 50: "-50%" },
      fontSize: {
        h1: "150px",
        h1m: "80px",
        h2: "100px",
        h3: "56px",
        h4: "32px",
        h5: "28px",
        h5t: "24px",
        h5m: "20px",
        xl: "28px",
        "3xl": "32px",
        "4xl": ["2.25rem", "1"],
      },
      borderWidth: {
        3: "3px",
        1: "1px",
      },
    },
    fontFamily: {
      sans: "__Barlow_409960, __Barlow_Fallback_409960",
      bellefair: "__Bellefair_6258c4, serif",
      barlowcond: "__Barlow_Condensed_9edf1d, sans-serif",
    },
    letterSpacing: {
      wide: "4.725px",
    },
    colors: {
      lb: "#D0D6F9",
      w: "#FFF",
      wo: "rgba(255,255,255, 0.5)",
      db: "#0B0D17",
      b: "#0B0D17",
      g: "#383B4B",
      dg: "#979797",
      transparent: "transparent",
    },
  },
  plugins: [],
};
export default config;
