import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Instrument Serif", "Georgia", "serif"],
      },
      colors: {
        bg: "hsl(var(--bg))",
        surface: "hsl(var(--surface))",
        "text-primary": "hsl(var(--text))",
        muted: "hsl(var(--muted))",
        stroke: "hsl(var(--stroke))",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
