import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: true,
    host: true,
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'http:127.0.0.1:3000/',
        rewrite: path => path.replace(/^\api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '#': path.resolve(__dirname, 'types')
    }
  },
  build: {
    outDir: 'app'
  }
})
