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
        welcome: "https://teddy-welcome.vercel.app/assets/remoteEntry.js",
        clients: 'https://teddy-clients.vercel.app/assets/remoteEntry.js',
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    outDir: "dist",

  },
  server: {
    port: 5173,
    cors: true,
  },
});
