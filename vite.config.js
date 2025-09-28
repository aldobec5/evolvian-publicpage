import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({

  base: "/", // 👈 asegura rutas absolutas


  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 👈 acceso más limpio a /src
    },
  },
  build: {
    outDir: "dist", // 👈 donde se genera el build
    assetsDir: "assets", // 👈 subcarpeta para CSS/JS/imagenes
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),   // página principal
        widget: resolve(__dirname, "widget.html") // tu widget iframe
      },
    },
  },
  css: {
    postcss: "./postcss.config.js", // 👈 asegura que Vite use tu config de Tailwind/PostCSS
  },
});
