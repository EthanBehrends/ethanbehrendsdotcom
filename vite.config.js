import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { windi } from "svelte-windicss-preprocess"
import viteWindi from "vite-plugin-windicss"
import sveltePreprocess from 'svelte-preprocess'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteWindi({}),
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
