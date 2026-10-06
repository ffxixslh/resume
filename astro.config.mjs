import { fileURLToPath } from 'node:url'
import { defineConfig } from 'astro/config'
import solidJs from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  base: '/resume',
  server: {
    port: 12230,
  },
  vite: {
    resolve: {
      alias: {
        src: fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
  integrations: [solidJs(), tailwind()],
  output: 'static',
})
