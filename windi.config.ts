import { defineConfig } from "windicss/helpers"
import plugin from "windicss/plugin"
import forms from "windicss/plugin/forms"
import interactionVaraints from "@windicss/plugin-interaction-variants"

export default defineConfig({
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
      }
    },
  },
  plugins: [
    interactionVaraints
  ]
})