export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
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
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block',
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
