const path = require("path");

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    preset: "service-worker",
    output: {
      publicDir: path.join(__dirname, "dist"),
    },
  },
});
