import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "host",
      remotes: {
        welcome: "http://localhost:4173/assets/remoteEntry.js",
        // clientManagement: 'http://localhost:3002/assets/remoteEntry.js',
        // clientSelection: 'http://localhost:3003/assets/remoteEntry.js',
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5173,
    cors: true,
  },
});
