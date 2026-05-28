import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050608",
        panel: "#080b10",
        steel: "#111923",
        signal: "#4a9bea",
        cyanline: "#7dccff"
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "Segoe UI", "Arial", "sans-serif"],
        display: ["Newsreader", "Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        glow: "0 0 36px rgba(74, 155, 234, 0.22)",
        insetline: "inset 0 1px 0 rgba(255,255,255,0.06)"
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseLine: "pulseLine 4s ease-in-out infinite",
        scan: "scan 7s linear infinite",
        draw: "draw 4.5s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.34" },
          "50%": { opacity: "0.92" }
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        draw: {
          "0%": { strokeDashoffset: "460" },
          "55%, 100%": { strokeDashoffset: "0" }
        }
      }
    }
  },
  plugins: []
};

export default config;
