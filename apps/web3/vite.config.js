import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".",  // 確保 Vite 找得到 index.html
  server: {
    host: "0.0.0.0",  // 讓 Vite 監聽所有請求
    port: 5173,
    strictPort: true
  }
});