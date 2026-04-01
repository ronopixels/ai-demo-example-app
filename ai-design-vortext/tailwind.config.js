/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vortex: {
          primary: "#051A24",
          dark: "#0D212C",
          muted: "#273C46",
          light: "#F6FCFF",
          "light-muted": "#E0EBF0",
        },
      },
      fontFamily: {
        sans: [
          '"PP Neue Montreal"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
