module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: { 68: "17.125rem", "12/10": "120%" },
      translate: { 50: "-50%" },
    },
    fontFamily: {
      sans: "Barlow, sans-serif",
      bellefair: "Bellefair, serif",
      barlowcond: "Barlow Condensed, sans-serif",
    },
    letterSpacing: {
      wide: "4.725px",
    },
    colors: {
      lb: "#D0D6F9",
      w: "#FFF",
      db: "#0B0D17",
      b: "#0B0D17",
    },
    fontSize: {
      h1: "150px",
      h1m: "80px",
      h2: "100px",
      h3: "56px",
      h4: "32px",
      h5: "28px",
      h5t: "24px",
      h5m: "20px",
    },
  },
  plugins: [],
};
