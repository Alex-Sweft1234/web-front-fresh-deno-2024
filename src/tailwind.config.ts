import { type Config } from "tailwindcss"

export default {
  content: [
    "{routes,islands,layers}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "1000px",
        lg: "1300px",
        xl: "1920px",
      },
      colors: {
        "primary": "#FFFFFF",
        "secondary": "#25435D",
        "tertiary": "#EE403D",
      },
      fontFamily: {
        "primary": ["MontserratAlternates"],
      }
    },
  },
} satisfies Config;
