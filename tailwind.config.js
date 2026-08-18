/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // New Semantic Theme Colors (CSS Variables)
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        "bg-light": "var(--color-bg-light)",
        "bg-dark": "var(--color-bg-dark)",
        muted: "var(--color-muted)",
        gold: {
          DEFAULT: "var(--color-gold)",
          hover: "#ad966d",
          light: "var(--color-bg-dark)",
        },

        // Backward compatibility
        sage: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-secondary)",
          pale: "var(--color-tertiary)",
          dark: "var(--color-primary)",
        },
        ivory: {
          DEFAULT: "var(--color-bg-light)",
          dark: "var(--color-bg-dark)",
        },
        slate: {
          dark: "#2E302D",
          muted: "#6B6D6A",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Quicksand"', "sans-serif"],
        cursive: ['"Pinyon Script"', "cursive"],
        cookie: ['"Cookie"', "cursive"],
        inria: ['"Inria Sans"', "sans-serif"],
        "new-icon": ['"new-icon-serif"', "serif"],
        "new-icon-script": ['"new-icon-script"', "cursive"],
        "new-icon-serif": ['"new-icon-serif"', "serif"],
        "new-icon-serif-condensed": ['"new-icon-serif-condensed"', "serif"],
      },
      boxShadow: {
        "sage-sm": "0 4px 12px rgba(94, 111, 82, 0.06)",
        "sage-md": "0 12px 32px rgba(94, 111, 82, 0.1)",
        "sage-lg": "0 20px 48px rgba(94, 111, 82, 0.15)",
      },
      animation: {
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
        "bounce-arrow": "bounceArrow 2s infinite",
      },
      keyframes: {
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.15)" },
        },
        bounceArrow: {
          "0%, 20%, 50%, 80%, 100%": {
            transform: "translateX(-50%) translateY(0)",
          },
          "40%": { transform: "translateX(-50%) translateY(-10px)" },
          "60%": { transform: "translateX(-50%) translateY(-5px)" },
        },
      },
    },
  },
  plugins: [],
};
