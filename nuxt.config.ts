// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@/assets/main.css", // Ścieżka do pliku CSS
  ],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,
  app: {
    baseURL: "/",
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.VITE_API_URL || 'http://localhost:3000',
    },
    private:{
      JWT_SECRET: process.env.JWT_SECRET,
      COOKIE_NAME: process.env.COOKIE_NAME,
      COOKIE_MAX_AGE: process.env.COOKIE_MAX_AGE,
      COOKIE_SECURE: process.env.COOKIE_SECURE
    }
  },
  routeRules:{
    "/**":{
      ssr: true,
      appMiddleware: ["auth"],
    }
  },
  devServer:{
    port: 3001,
    host: '0'
  }
});
