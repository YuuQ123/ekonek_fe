import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Allow external connections
    port: 5173,
    allowedHosts: [
      '9de6d959a860.ngrok-free.app',
      '.ngrok-free.app',
      '.ngrok.io'
    ],
  },
})
