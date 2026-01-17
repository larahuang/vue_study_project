import { fileURLToPath, URL } from "node:url";
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'


export default defineConfig(({ mode, command }) =>
{
  console.log('目前模式', mode),
  console.log('目前command',command)
  return {
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  }
});
