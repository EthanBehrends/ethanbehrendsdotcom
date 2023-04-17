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
    plugin(({ addDynamic }) => {
      addDynamic("l-", ({ Utility, Property, Style }) => {
        const value = Utility.handler.handleNumber(1, 100, "int").value

        if (value) {
          return Style.generate(Utility.class, {
            "--primary-l": `${value}%`
          })
        }
      })
      addDynamic("a-", ({ Utility, Property, Style }) => {
        const value = Utility.handler.handleNumber(1, 100, "int").value

        if (value) {
          return Style.generate(Utility.class, {
            "--primary-a": `${Number(value) / 100}`
          })
        }
      })
    }),
    interactionVaraints
  ]
})