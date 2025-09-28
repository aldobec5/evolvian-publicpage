import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  base: "/", // rutas absolutas en producción
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),           // página principal
        widget: resolve(__dirname, "public/widget.html"), // ✅ apunta al public
      },
    },
  },
  css: {
    postcss: "./postcss.config.js",
  },
});
