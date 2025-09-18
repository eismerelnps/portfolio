import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';
import robotsTxt from "astro-robots-txt";


import node from '@astrojs/node';


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [tailwind(), robotsTxt()],
  site: 'https://eismerlobaina.vercel.app/'
});