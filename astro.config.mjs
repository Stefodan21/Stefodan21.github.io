// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://Stefodan21.github.io",
  base: "/",
  
  integrations: [preact(), 
    icon({
    iconDir: "./src/icons"
  }), 
  sitemap({
    filter: (page) =>
      !page.includes("/blog/tags") &&
      !page.includes("/blog/techs"),
  }),],

  vite: {
    define: {
      'Astro.env.PUBLIC_GA_MEASUREMENT_ID': JSON.stringify(process.env.PUBLIC_GA_MEASUREMENT_ID),
      'Astro.env.PUBLIC_MS_CLARITY_ID': JSON.stringify(process.env.PUBLIC_MS_CLARITY_ID),
    },
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    },
  },
});
