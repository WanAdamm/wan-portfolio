import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://WanAdamm.github.io",
  base: "/wan-portfolio",

  vite: {
    plugins: [tailwindcss()],
  },
});
