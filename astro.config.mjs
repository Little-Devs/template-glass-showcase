import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://little-devs.github.io',
  base: '/template-glass-showcase',
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
