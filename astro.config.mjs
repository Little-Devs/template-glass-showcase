import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    assetsPrefix: '.'
  },
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          charset: false
        }
      }
    }
  }
});
