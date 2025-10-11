// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  base: "./", // relativo para que los assets funcionen bien en Render/Supabase
  plugins: [
    react(),
    // Copia _headers desde public/ al dist final
    viteStaticCopy({
      targets: [
        {
          src: "public/_headers", // origen
          dest: "."               // raíz de dist
        }
      ]
    })
  ],
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
        main: resolve(__dirname, "index.html"), // ✅ Solo la página pública
      },
    },
  },
});
