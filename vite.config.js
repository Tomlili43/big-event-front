import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@router": path.resolve(__dirname, "./src/router/"),
      "@views": path.resolve(__dirname, "./src/views/"),
      "@api": path.resolve(__dirname, "./src/api/"),
      "@stores": path.resolve(__dirname, "./src/stores/"),
      // "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "0.0.0.0",
    proxy: {
      "/api": {
        //获取路径中包含了/api的请求
        target: "http://localhost:8080", //后台服务所在的源
        changeOrigin: true, //修改源
        rewrite: (path) => path.replace(/^\/api/, ""), ///api替换为''
      },
    },
  },
});
