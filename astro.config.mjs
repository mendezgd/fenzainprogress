import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'www.fenza.com.ar',
  integrations: [sitemap()],
});
