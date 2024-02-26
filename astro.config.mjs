import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), markdoc()],
  output: "hybrid",
});