/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#0B0B0D",
        mint: "#8BE4C8",
        cyanSoft: "#52D6FF",
        smoke: "#EFEFEF"
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
