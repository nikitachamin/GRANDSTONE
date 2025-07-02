// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true, // Включите SSR для SSG (обязательно!)
  nitro: {
    prerender: {
      crawlLinks: true, // Автоматический предрендеринг всех ссылок
      routes: [
        '/about',
        '/catalog',
        '/catalog/straight',
        '/catalog/comb',
        '/installation',
        '/FAQ',
        '/delivery',
        '/payment',
        '/guarantee',
        '/contacts',
      ], // Ручное указание маршрутов
    },
  },
  css: [
    '@/assets/styles/index.scss',
    'swiper/css',
    'swiper/css/pagination',
    'swiper/css/effect-fade',
  ],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },


  modules: ['@nuxt/image', '@nuxt/icon', 'vue-yandex-maps/nuxt'],
    yandexMaps: {
    apikey: '1e3650af-24a6-465b-9289-24d5aee887bc',
  },

  icon: {
    customCollections: [
      {
        prefix: 'icons',
        dir: 'assets/icons',
      },
    ],
  },
});
