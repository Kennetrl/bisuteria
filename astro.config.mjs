import { defineConfig } from 'astro/config';

// ← Cambiar al dominio real antes de publicar
const SITE_URL = 'https://tusitio.com';

export default defineConfig({
  site: SITE_URL,
  image: {
    defaultFormat: 'webp'
  }
});
