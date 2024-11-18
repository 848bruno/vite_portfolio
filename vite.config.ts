import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/vite_portfolio/',
  optimizeDeps: {
    exclude: ['chunk-REFQX4J5'],
    
  },
});