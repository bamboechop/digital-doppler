import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [db(), tailwind()],
  output: 'hybrid',
  adapter: node({
    mode: 'standalone'
  })
});
