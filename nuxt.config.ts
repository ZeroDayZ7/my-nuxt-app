// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // modules: ['nuxt-security'],
  modules: [
    "@nuxt/ui", 
    "@vite-pwa/nuxt"
  ],
  app: {
    // baseURL: `/${process.env.APP_NAME}/`,
    baseURL: "/my-nuxt-app/",
    head: {
      title: 'Centrum PNP',
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/my-nuxt-app/favicon.ico",
        },
      ],
      meta: [
        { name: 'description', content: 'CPNP' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1'},
      ],
    },
  },
  css: [
    "~/assets/main.css", // Ścieżka do pliku CSS
  ],
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      id: '/my-nuxt-app',
      name: "Centralne PNP",
      short_name: "CPNP",
      lang: "pl",
      display: "standalone",
      start_url: "/my-nuxt-app/",
      background_color: "#000000",
      theme_color: "#000000",
      icons: [
        {
          src: "icon-192x192.jpg",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icon-512x512.jpg",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      screenshots: [
        {
          src: "/my-nuxt-app/screenshot1.jpg",
          sizes: "720x1280",
          type: "image/jpg",
          form_factor: "narrow",
          label: "Bądź i Rządź - CPNP",
        },
        {
          src: "/my-nuxt-app/screenshot2.jpg",
          sizes: "1024x1024",
          type: "image/jpg",
          form_factor: "wide",
          label: "Bądź i Rządź - CPNP",
        },
      ],
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico,jpg}"],
      runtimeCaching: [
        {
          urlPattern: "/my-nuxt-app/",
          handler: "NetworkFirst", // lub 'CacheFirst' w zależności od potrzeb
          options: {
            cacheName: "my-app-cache",
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 dni
            },
          },
        },
      ],
    },
    devOptions: {
      suppressWarnings: true,
    },
  },
  ui: {
    global: true,
  },
  build: {
    transpile: [
      "@headlessui/vue",
      "@heroicons/vue",
      "@nuxt/icon",
      "@iconify-json/heroicons",
    ],
  },
  alias: {
    "@A": "<rootDir>/assets/",
    "@P": "<rootDir>/public/",
    "@C": "<rootDir>/components/",
  },
  compatibilityDate: "2024-04-03",
  devtools: {
    enabled: process.env.NODE_ENV === 'development'
  },
  runtimeConfig: {
    JWT_SECRET: process.env.JWT_SECRET,
    COOKIE_NAME: process.env.COOKIE_NAME,
    COOKIE_MAX_AGE: process.env.COOKIE_MAX_AGE,
    COOKIE_SECURE: process.env.COOKIE_SECURE,
    public: {
      // apiUrl: process.env.APP_URL,
      apiUrl: "http://localhost:3001/my-nuxt-app",
    },
  },
  routeRules: {
    "/**": {
      prerender: false,
      // appMiddleware: ["auth"],
    },
    "/api/**": {
      cors: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "*",
      },
    },
    "/admin/**": {
      ssr: false,
      appMiddleware: ["auth"],
    },
  },
  ssr: false,
  components: {
    dirs: [
      {
        path: "~/components",
        priority: 2,
      },
    ],
    global: true,
  },
  devServer: {
    port: 3001,
  },
  nitro: {
    preset: "node-server",
  },
  typescript: {
    strict: true,
  }
  // security: {
  //   strict: false,
  //   headers: {
  //     crossOriginResourcePolicy: 'same-origin',
  //     crossOriginOpenerPolicy: 'same-origin',
  //     crossOriginEmbedderPolicy: 'credentialless',
  //     contentSecurityPolicy: {
  //       'base-uri': ["'none'"],
  //       'font-src': ["'self'", 'https:', 'data:'],
  //       'form-action': ["'self'"],
  //       'frame-ancestors': ["'self'"],
  //       'img-src': ["'self'", 'data:'],
  //       'object-src': ["'none'"],
  //       'script-src-attr': ["'none'"],
  //       'style-src': ["'self'", 'https:', "'unsafe-inline'"],
  //       'script-src': ["'self'", 'https:', "'unsafe-inline'", "'strict-dynamic'", "'nonce-{{nonce}}'"],
  //       'upgrade-insecure-requests': true
  //     },
  //     originAgentCluster: '?1',
  //     referrerPolicy: 'no-referrer',
  //     strictTransportSecurity: {
  //       maxAge: 15552000,
  //       includeSubdomains: true,
  //     },
  //     xContentTypeOptions: 'nosniff',
  //     xDNSPrefetchControl: 'off',
  //     xDownloadOptions: 'noopen',
  //     xFrameOptions: 'SAMEORIGIN',
  //     xPermittedCrossDomainPolicies: 'none',
  //     xXSSProtection: '0',
  //     permissionsPolicy: {
  //       camera: [],
  //       'display-capture': [],
  //       fullscreen: [],
  //       geolocation: [],
  //       microphone: []
  //     }
  //   },
  //   requestSizeLimiter: {
  //     maxRequestSizeInBytes: 2000000,
  //     maxUploadFileRequestInBytes: 8000000,
  //     throwError: true
  //   },
  //   rateLimiter: {
  //     tokensPerInterval: 150,
  //     interval: 300000,
  //     headers: false,
  //     driver: {
  //       name: 'lruCache'
  //     },
  //     throwError: true
  //   },
  //   xssValidator: {
  //     throwError: true
  //   },
  //   corsHandler: {
  //     origin: '*',
  //     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  //     preflight: {
  //       statusCode: 204
  //     },
  //   },
  //   allowedMethodsRestricter: {
  //     methods: '*',
  //     throwError: true
  //   },
  //   hidePoweredBy: true,
  //   basicAuth: false,
  //   enabled: true,
  //   csrf: false,
  //   nonce: true,
  //   removeLoggers: {
  //     external: [],
  //     consoleType: ['log', 'debug'],
  //     include: [/\.[jt]sx?$/, /\.vue\??/],
  //     exclude: [/node_modules/, /\.git/]
  //   },
  //   ssg: {
  //     meta: true,
  //     hashScripts: true,
  //     hashStyles: false,
  //     nitroHeaders: true,
  //     exportToPresets: true,
  //   },
  //   sri: true
  // },

  // security: {
  //   headers: {
  //     crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
  //   },
  //   corsHandler: {
  //     origin: '*', // Zezwól na żądania z każdej domeny
  //     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  //     allowedHeaders: ['Content-Type', 'Authorization'],
  //     // credentials: true
  //   },
  // },
});
