import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/skylight/dist/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@/": `${__dirname}/src/`,
    },
  },
});
