import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
  include: ["@tsparticles/engine"]
  },
  base: '/linktree/', 
  build: {
    outDir: 'docs'
  }
})

