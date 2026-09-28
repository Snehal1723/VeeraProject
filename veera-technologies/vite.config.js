import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // '127.0.0.1' ऐवजी true वापरा (म्हणजे 0.0.0.0 सेट होईल)
    port: 5137,
    strictPort: true,
    allowedHosts: true, // टनेलवरून येणाऱ्या सर्व होस्ट्सना परवानगी देण्यासाठी
  },
})