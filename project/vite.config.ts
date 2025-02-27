import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/', // Add a comma here
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
