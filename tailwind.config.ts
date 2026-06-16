import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A8A",
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
          950: "#172554",
        },
        secondary: "#2563EB",
        accent: {
          DEFAULT: "#F59E0B",
          light: "#FDE68A",
          dark: "#D97706",
        },
        navy: {
          DEFAULT: "#1E3A8A",
          light: "#2D4FA3",
          dark: "#162B6B",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #3B82F6 100%)",
        "gradient-accent": "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)",
        "gradient-dark": "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s infinite",
        "gradient": "gradient 8s ease infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "glow": "0 0 30px rgba(37, 99, 235, 0.3)",
        "glow-accent": "0 0 30px rgba(245, 158, 11, 0.3)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.08)",
        "card-dark": "0 4px 24px rgba(0, 0, 0, 0.4)",
        "glass": "0 8px 32px rgba(31, 38, 135, 0.15)",
      },
      backdropBlur: {
        xs: "2px",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
export default config;
