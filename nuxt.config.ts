export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true,
  },

  modules: [
    '@nuxtjs/tailwindcss',

    [
      '@storyblok/nuxt',
      {
        accessToken: 'E7rdEGgQsrlZER730dumgQtt',
        apiOptions: {
          region: 'eu',
        },
        useApiClient: true,
        enableSudoMode: false,
        bridge: import.meta.dev,
      },
    ],

    '@nuxt/image',

    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800],
    },

    display: 'swap',

    preload: true,

    prefetch: true,

    preconnect: false,

    download: true,

    inject: true,
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  image: {
    format: ['avif', 'webp'],
    quality: 80,
    densities: [1, 2],

    screens: {
      xs: 360,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      failOnError: false,
    },
  },

  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
  },

  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/logo.png?v=1',
        },

        {
          rel: 'shortcut icon',
          href: '/logo.png?v=1',
        },

        {
          rel: 'apple-touch-icon',
          href: '/logo.png?v=1',
        },
      ],

      meta: [
        {
          name: 'theme-color',
          content: '#002c50',
        },
      ],
    },
  },
});
