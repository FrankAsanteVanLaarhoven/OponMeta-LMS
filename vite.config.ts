import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true, // Listen on all addresses
    port: 8080,
    hmr: {
      host: 'localhost',
      port: 8080,
    },
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "react": path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
