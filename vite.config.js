import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Port for the Vite development server
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Backend API server
        changeOrigin: true, // Change the origin of the host header to the target URL
        rewrite: (path) => path.replace(/^\/api/, '') // Remove `/api` from the request path
      }
    }
  },
});
