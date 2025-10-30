import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0', // Accessible from any IP on the network
    port: 5173,
    /* hmr: {
      host: '10.1.72.194', // Set to your confirmed LAN IP
      protocol: 'ws',
      port: 5173
    } */
  }
});
