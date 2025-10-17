import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: process.env.PORT || 4173,
    host: "0.0.0.0",
    allowedHosts: [
      "chatkit-on-render-1.onrender.com", // 👈 your Render frontend host
    ],
  },
  server: {
    port: 5173,
    host: "0.0.0.0",
  },
});
