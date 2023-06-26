import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: process.env.SOURCE_MAP === "true",
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./") }],
  },
  plugins: [vue()],
});
