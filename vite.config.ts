import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/aaryan-digital-marketing-portfolio/',
  server: {
    port: 5173,
    host: true
  }
});
