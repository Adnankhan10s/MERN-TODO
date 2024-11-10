import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'process'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      process: 'process/browser',  // Polyfill process
    },
  },
  define: {
    'process.env': process.env, // Inject environment variables
  },
})
export default {
  build: {
    outDir: 'dist',
  },
};
