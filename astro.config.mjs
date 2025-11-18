import { defineConfig } from "astro/config";
import icon from "astro-icon";
import i18n from "@astrolicious/i18n";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.thaispapro.com", // update me!
  integrations: [
    icon(),
    i18n({
      defaultLocale: "en",
      locales: ["th", "en"],  // ← Changed "fr" to "th"
      client: {
        data: true,
        paths: true,
      },
      // used to localize the routes
      pages: {
        "/about": {
          th: "/about",  // ← Changed from "fr: /a-propos"
        }
      },
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          th: 'th-TH',  // ← Changed from "fr: 'fr-FR'"
        },
      },
    }),
  ],
});
