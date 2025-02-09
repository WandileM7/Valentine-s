import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Add these optimizations
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Group React dependencies together
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // Optimize large assets
    assetsInlineLimit: 4096, // 4kb
    chunkSizeWarningLimit: 1000,
  },
  // Configure asset handling
  assetsInclude: ['**/*.mp3', '**/*.jpg', '**/*.png'],
  // Development server options
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
});