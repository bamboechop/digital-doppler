import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';

// https://docs.astro.build/en/guides/configuring-astro/#environment-variables
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV, process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone'
  }),
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
  integrations: [tailwind()],
  output: 'server',
  server: {
    host: env.HOST ?? undefined,
    port: env.PORT ? parseInt(env.PORT, 10) : 4321
  },
  site: env.SITE_URL ?? undefined,
});
