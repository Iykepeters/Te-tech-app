import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50:  { value: "#fff7e6" },
          100: { value: "#ffe9b8" },
          200: { value: "#ffd685" },
          300: { value: "#ffc152" },
          400: { value: "#ffab29" },
          500: { value: "#f59300" }, // primary brand color — amber/gold, feels premium for phones/tech
          600: { value: "#cc7a00" },
          700: { value: "#a36100" },
          800: { value: "#7a4900" },
          900: { value: "#523100" },
        },
        ink: {
          900: { value: "#0d0d0d" }, // near-black for headings, richer than pure #000
        },
      },
      fonts: {
        heading: { value: `'Poppins', sans-serif` },
        body:    { value: `'Inter', sans-serif` },
      },
      radii: {
        brand: { value: "14px" }, // consistent rounded corners across cards/buttons
      },
      shadows: {
        card:     { value: "0 4px 20px rgba(0,0,0,0.08)" },
        cardHover:{ value: "0 12px 32px rgba(245,147,0,0.25)" },
      },
    },
    semanticTokens: {
      colors: {
        "brand.solid":    { value: "{colors.brand.500}" },
        "brand.contrast": { value: "{colors.white}" },
        "brand.fg":       { value: "{colors.brand.600}" },
        "brand.muted":    { value: "{colors.brand.100}" },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)