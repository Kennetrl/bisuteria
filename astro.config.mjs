import { defineConfig } from 'astro/config';

const SITE_URL = 'https://joyeriasalome.site';

export default defineConfig({
  site: SITE_URL,
  image: {
    defaultFormat: 'webp'
  }
});
