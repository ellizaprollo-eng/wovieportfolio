import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'
import { nitro } from 'nitro/vite'

// Vercel sets VERCEL=1 during its builds. There, Nitro produces the Vercel
// output; everywhere else (Netlify, local) the Netlify plugin handles SSR.
const onVercel = !!process.env.VERCEL

const config = defineConfig({
  plugins: [
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    ...(onVercel ? [] : [netlify()]),
    tanstackStart(),
    ...(onVercel ? [nitro()] : []),
    viteReact(),
  ],
})

export default config
