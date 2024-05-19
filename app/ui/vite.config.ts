import { URL, fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(
  async (_opt: UserConfig) =>
    await {
      plugins: [vue()],

      // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
      //
      // 1. prevent vite from obscuring rust errors
      clearScreen: false,
      // 2. tauri expects a fixed port, fail if that port is not available
      server: {
        port: 1420,
        strictPort: true,
        watch: {
          // 3. tell vite to ignore watching `src-tauri`
          ignored: ['**/core/**', '**/crates/**']
        }
      },
      resolve: {
        alias: [
          {
            find: '@',
            replacement: fileURLToPath(new URL('./src', import.meta.url))
          }
        ]
      }
    }
)
