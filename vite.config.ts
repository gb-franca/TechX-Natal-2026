import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 1. O 'base' deve ficar aqui fora, no nível principal!
  base: '/techx-natal-26/', 

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    // Remova o base daqui de dentro
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
