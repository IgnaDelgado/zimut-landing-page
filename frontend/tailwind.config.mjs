/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "zimut-gray": {
          0: "#FFFFFF",
          100: "#F4F6F7",
          200: "#E9ECED",
          300: "#D4D9DB",
          400: "#BFC5C8",
          500: "#9FA8AD",
          600: "#7C878C",
          700: "#59656A",
          800: "#3A4447",
          900: "#1A1F21"
        },
        "zimut-green": {
          100: "#E3F8EB",
          200: "#BFF1D6",
          300: "#8AE5B3",
          400: "#53D98A",
          500: "#24C768",
          600: "#1B9E53",
          700: "#147A41",
          800: "#0E5C31",
          900: "#083D20"
        }
      },
      fontFamily: {
        sans: ["var(--font-raleway)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "SFMono-Regular", "Menlo", "monospace"]
      },
      boxShadow: {
        lift: "0 18px 40px -24px rgba(26, 31, 33, 0.25)",
        inset: "inset 0 1px 0 rgba(255, 255, 255, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
