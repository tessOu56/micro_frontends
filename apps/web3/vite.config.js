import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".",  // 確保 Vite 找得到 index.html
  server: {
    port: 5173,
    strictPort: true
  }
});