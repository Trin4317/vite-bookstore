import { fileURLToPath, URL } from "url";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // set publicPath to repository name to route all static assets to proper path
  // which is https://<account>.github.io/<repository-name>/
  base: process.env.NODE_ENV === "production" ? "/vite-bookstore/" : "/",
  define: {
  	APP_BASE_URL: process.env.NODE_ENV === "production" ? JSON.stringify("/vite-bookstore/") : JSON.stringify("/"),
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
