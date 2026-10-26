import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import webfontDownload from 'vite-plugin-webfont-dl'

export default defineConfig({
  plugins: [
    react(),
    webfontDownload(),
  ],
  server: {
    host: '127.0.0.1'
  },
})
