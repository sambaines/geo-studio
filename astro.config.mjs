// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import expressiveCode from 'astro-expressive-code';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode({
    // Add bundled langs when we add server-side rendering
    themes: ['tokyo-night', 'one-light'],
    defaultProps: {
      wrap: true,
      overridesByLang: {
        'bash,sh,zsh': { wrap: false },
        }
    }
  }), mdx(), icon()],
    experimental: {
        fonts: [{
            provider: "local",
            name: "Manrope",
            cssVariable: "--font-manrope",
            variants: [
                {
                    weight: 200,
                    style: "normal",
                    src: ["./src/fonts/manrope-v15-latin_latin-ext-200.woff2"]
                },
                {
                    weight: 400,
                    style: "normal",
                    src: ["./src/fonts/manrope-v15-latin_latin-ext-regular.woff2"]
                },
                {
                    weight: 800,
                    style: "normal",
                    src: ["./src/fonts/manrope-v15-latin_latin-ext-800.woff2"]
                }
            ],
            fallbacks: [
              "Helvetica", "sans-serif"
            ]
        },
      {
            provider: "local",
            name: "Sora",
            cssVariable: "--font-sora",
            variants: [
                {
                    weight: 200,
                    style: "normal",
                    src: ["./src/fonts/sora-v12-latin_latin-ext-200.woff2"]
                },
                {
                    weight: 400,
                    style: "normal",
                    src: ["./src/fonts/sora-v12-latin_latin-ext-regular.woff2"]
                },
                {
                    weight: 700,
                    style: "normal",
                    src: ["./src/fonts/sora-v12-latin_latin-ext-700.woff2"]
                }
            ],
            fallbacks: [
              "Helvetica", "sans-serif"
            ]
        }]
    }
})