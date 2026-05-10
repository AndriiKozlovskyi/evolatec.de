export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
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
