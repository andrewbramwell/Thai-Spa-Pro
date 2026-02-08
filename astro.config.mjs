import { defineConfig } from "astro/config";
import icon from "astro-icon";
import i18n from "@astrolicious/i18n";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.thaispapro.com",
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true, // This minifies HTML output
  integrations: [
    icon(),
    i18n({
      defaultLocale: "en",
      locales: ["th", "en"],
      client: {
        data: true,
        paths: true,
      },
      routing: {
        prefixDefaultLocale: false,
      },
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-GB',
          th: 'th-TH',
        },
      },
    }),
  ],
});
