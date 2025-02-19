import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      secondary: "hsl(var(--secondary))",

      accent: {
        DEFAULT: "hsl(var(--acent))",
        foreground: "hsl(var(--acent-foreground))",
      }
      }
    },
  },
  plugins: [],
} satisfies Config;
