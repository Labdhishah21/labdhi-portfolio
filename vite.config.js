import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/labdhi-portfolio/", // Required for GitHub Pages deployment
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
