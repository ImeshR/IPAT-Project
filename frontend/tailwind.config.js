/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1920px',
      // => @media (min-width: 1024px) { ... }
    },
    keyframes: {
      ping: {
        "50%, 100%": {
          transform: "scale(2)",
          opacity: "0",
        },
      },
    },
    animation: {
      ping: "ping 4s cubic-bezier(0, 0, 0.2, 1) infinite",
    },
  },
  plugins: [],
};
