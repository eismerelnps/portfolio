import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';
import robotsTxt from "astro-robots-txt";
import vercelServerless from '@astrojs/vercel/serverless';
import vercelStatic from "@astrojs/vercel/static";


// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercelStatic(),

  // adapter: vercel({
      //   analytics: true,
      //   webAnalytics: {
      //     enabled: true,
      //   },
      //   runtime: 'nodejs20.x',
      //   mode: 'serverless'
      // }),
  integrations: [tailwind(), robotsTxt()],
  site: 'https://eismerlobaina.vercel.app/'
});