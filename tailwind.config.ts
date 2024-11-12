import type { Config } from "tailwindcss"
import daisyui from "daisyui"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        ["infinite-scroll"]: "infiniteScroll 20s linear infinite",
        ["infinite-scroll-about"]: "infiniteScrollAbout 10s linear infinite",
      },
      keyframes: {
        infiniteScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        infiniteScrollAbout: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "dracula"],
  },
}

export default config
