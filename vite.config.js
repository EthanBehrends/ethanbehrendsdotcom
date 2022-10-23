import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { windi } from "svelte-windicss-preprocess"
import viteWindi from "vite-plugin-windicss"
import sveltePreprocess from 'svelte-preprocess'
import Unocss from "unocss/vite"
import { extractorSvelte } from '@unocss/core'
import { presetUno } from "unocss"
import transformerDirective from '@unocss/transformer-directives'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 443,
    strictPort: true,
    https: true,
  },
  plugins: [
    Unocss({
      extractors: [extractorSvelte],
      presets: [
        presetUno()
      ],
      theme: {
        colors: {
          primary: "var(--color-primary, hsla(var(--primary-h) var(--primary-s) var(--primary-l) / var(--primary-a)))"
        }
      },
      rules: [
        [/^l-([\d]{1,2})$/, ([, d]) => ({ "--primary-l": `${d}%`})]
      ],
      transformers: [
        transformerDirective()
      ]
    }),
    svelte({
      extensions: [".svelte"],
      preprocess: [
        sveltePreprocess({
          typescript: true
        }),
      ]
    })
  ]
})
