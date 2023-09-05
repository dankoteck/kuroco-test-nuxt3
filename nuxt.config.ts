const path = require("path");

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  ssr: false,
  nitro: {
    output: {
      publicDir: path.join(__dirname, "dist"),
    },
  },
  runtimeConfig: {
    public: {
      apiURL: process.env.API_URL,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
