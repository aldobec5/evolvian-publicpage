import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/", // 👈 asegura rutas absolutas
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // 👈 asegura que use el correcto
  },
})
