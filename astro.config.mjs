// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  integrations: [
    expressiveCode({
      // Add bundled langs when we add server-side rendering
      themes: ['tokyo-night', 'one-light'],
      defaultProps: {
        wrap: true,
        overridesByLang: {
          'bash,sh,zsh': { wrap: false },
          }
      }
    }),
    mdx()],
});