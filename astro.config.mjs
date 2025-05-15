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
    experimental: {
        fonts: [{
            provider: "local",
            name: "Nohemi",
            cssVariable: "--font-nohemi",
            variants: [
                {
                    weight: 400,
                    style: "normal",
                    src: ["./src/fonts/Nohemi-Regular.woff2"]
                },
                {
                    weight: 700,
                    style: "normal",
                    src: ["./src/fonts/Nohemi-SemiBold.woff2"]
                }
            ],
            fallbacks: [
              "Nohemi", "Helvetica", "sans-serif"
            ]
        }]
    }
});