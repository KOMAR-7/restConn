import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        privacyPolicy: resolve(import.meta.dirname, 'privacy-policy/index.html'),
        termsOfService: resolve(import.meta.dirname, 'terms-of-service/index.html'),
        dataDeletion: resolve(import.meta.dirname, 'data-deletion/index.html'),
      },
    },
  },
})
