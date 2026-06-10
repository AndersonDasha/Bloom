import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Builds the entire app into one self-contained HTML file (demo/bloom.html)
// that runs from a double-click — no server, no install.
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: 'demo',
    emptyOutDir: true,
  },
})
