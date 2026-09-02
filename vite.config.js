import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * GitHub Pages serves 404.html for any path that has no matching file.
 * Copying the built shell there lets /projects resolve client-side on a
 * cold load. Real files (public/thesis/index.html) still win, so the
 * thesis page is unaffected.
 */
function spaFallback() {
  return {
    name: 'spa-fallback-404',
    closeBundle() {
      const out = resolve(__dirname, 'dist');
      copyFileSync(resolve(out, 'index.html'), resolve(out, '404.html'));
    },
  };
}

export default defineConfig({
  base: '/',
  plugins: [react(), spaFallback()],
  build: {
    target: 'es2020',
    cssCodeSplit: false,
    assetsInlineLimit: 2048,
  },
});
