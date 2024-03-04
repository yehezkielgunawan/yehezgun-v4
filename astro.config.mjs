import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    markdoc(),
    process.env.SKIP_KEYSTATIC ? null : keystatic(),
  ],
  output: "hybrid",
  adapter: cloudflare(),
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
});
