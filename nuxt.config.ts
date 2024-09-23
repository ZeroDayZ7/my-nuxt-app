// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // modules: ['nuxt-security'],
  modules: ['@nuxt/ui'],
  css: [
    "@/assets/main.css", // Ścieżka do pliku CSS
  ],
  build: {
    transpile: 
    [
      '@headlessui/vue',
      '@heroicons/vue',
      '@nuxt/icon',
      '@iconify-json/heroicons'
    ]
  },
  srcDir: "src/",
  alias: {
    assets: "/<rootDir>/assets",
    "@C": "<rootDir>/components/",
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  ssr: true,
  app: {
    // baseURL: "/",
    baseURL: "/my-nuxt-app/",
    // head: {
    //   link: [
    //     {
    //       rel: "icon",
    //       type: "image/x-icon",
    //       href: "/favicon.ico",
    //     },
    //   ],
    // },
    // head:{
    //   link: [
    //     {
    //       rel: 'stylesheet',
    //       href: 'https://cdn.jsdelivr.net/npm/heroicons-css@0.1.1/heroicons.min.css'
    //     }
    //   ],
    //   script: [
    //     {
    //       src: 'https://cdn.jsdelivr.net/npm/heroicons-css@0.1.1/heroicons.min.js'
    //     }
    //   ]
    // }
  },
  runtimeConfig: {
    apiSecret: "123",
    public: {
      apiUrl: process.env.VITE_API_URL || "http://localhost:3001",
      apiBase: "/api",
    },
  },
  routeRules: {
    "/": {
      prerender: true,
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
    "/dashbaord/": {
      ssr: true,
      appMiddleware: ["auth"],
    },
  },
  // components: [{
  //   path: '~/components',
  //   pathPrefix: false,
  // }],
  devServer: {
    port: 3001,
    host: "0",
    https: false,
  },
  nitro: {
    preset: "node-server",
  },
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
