/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "Green/500": "#38C97C",
        "Grey/200": "#A7AEB4",
        "Grey/400": "#8C959D",
        "Grey/800": "#596269",
        "Grid-bg": "#EEF4FA",
        "info/50": "#F1F5FE",
        "Info/500": "#276EF1",
        "Info/600": "#1E54B7",
        "Neutral/500": "#DEE1E3",
        "Primary/100": "#D9EBF9",
        "Primary/200": "#B3D6F3",
        "Primary/500": "#4299E1",
        "White/50": "#FFFFFF80",
      },
      textColor: {
        "Text/Main": "#2E3F51",
        "Text/Menu": "#5F799C",
        "Grey/400": "#8C959D",
        "Grey/800": "#596269",
        "Info/600": "#1E54B7",
      },
      fontSize: {
        32: "32px",
      },
      colors: {
        "Neutral/500": "#DEE1E3",
        "Primary/100": "#D9EBF9",
      },
      padding: {
        main: "60px",
      },
      lineHeight: {
        18: "18px",
        21: "21px",
        26: "26px",
        42: "42px",
      },
      borderRadius: {
        4: "4px",
      },
      boxShadow: {
        container:
          "0px 1px 2px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
      },
    },
    fontFamily: {
      main: ["Noto Sans JP", "sans-serif"],
    },
  },
  plugins: [],
}
