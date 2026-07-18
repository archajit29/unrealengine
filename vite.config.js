import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true, //  Change this to 'true' for a permanent fix
    host: true,         // Allows the tunnel to see the local server
    port: 5173,          // Explicitly set the port to match your tunnel
    
  },
  base: '/unrealengine/',
})

