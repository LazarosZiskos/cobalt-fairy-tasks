import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// changed the vite.config and created a proxy to overcoke the CORS issue

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://dev.cobaltfairy.online",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
