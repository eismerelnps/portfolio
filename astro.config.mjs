import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';
import robotsTxt from "astro-robots-txt";




// https://astro.build/config
export default defineConfig({
  output: 'server',
      adapter: vercel({
        analytics: true,
        webAnalytics: {
          enabled: true,
        },
        runtime: 'nodejs18.x',
        mode: 'serverless'
      }),
  integrations: [tailwind(), robotsTxt()],
  site: 'https://eismerlobaina.vercel.app/'
});