import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/labdhi-portfolio/" : "/", // Use base only in production
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
}));
