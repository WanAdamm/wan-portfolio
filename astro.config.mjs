import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://WanAdamm.github.io",
  base: "/wan-portfolio",
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
