import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [tailwind()],
  output: 'server',
  server: {
    host: import.meta.env.PROD ? '0.0.0.0' : undefined,
    port: import.meta.env.PORT ?? 4321
  },
  // site: 'https://digital-doppler.bamboechop.at',
});
