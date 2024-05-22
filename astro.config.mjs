import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE,
  integrations: [
    tailwind(),
    react(),
    markdoc(),
    process.env.SKIP_KEYSTATIC ? null : keystatic(),
  ],
  output: process.env.SKIP_KEYSTATIC ? "hybrid" : "static",
  adapter: vercel(),
  trailingSlash: "never",
});
