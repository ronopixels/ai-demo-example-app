/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
      },
      colors: {
        void: "#030712",
        nebula: "#0f172a",
        aurora: "#22d3ee",
        flare: "#fbbf24",
        cosmos: "#e2e8f0",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(15,23,42,0.3), rgba(3,7,18,0.95)), radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56,189,248,0.15), transparent)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSlow: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 8s linear infinite",
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
        pop: "pop 0.55s ease-out both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        pop: {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "60%": { opacity: "1", transform: "scale(1.02)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
