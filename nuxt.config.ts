export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/o-kompanii',
        '/katalog',
        '/katalog/pamyatniki',
        '/katalog/pamyatniki-kombinirovannie',
        '/katalog/kompleksi',
        '/katalog/pamyatniki-figurnie',
        '/katalog/pamyatniki-gorizontalnie',
        '/katalog/pamyatniki-kombinirovannie-gorizontalnie',
        '/katalog/skameiki',
        '/katalog/ogradi',
        '/katalog/tcokolya',
        '/katalog/nadgrobnie-pliti',
        '/ustanovka',
        '/voprosi-i-otveti',
        '/dostavka',
        '/oplata',
        '/garantii',
        '/kontakti',
      ],
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

  modules: ['@nuxt/image', '@nuxt/icon', 'vue-yandex-maps/nuxt', '@nuxtjs/seo'],

  components: [
{
      path: '~/components',
      extensions: ['.vue']
    }
  ],

  yandexMaps: {
    apikey: '1e3650af-24a6-465b-9289-24d5aee887bc',
  },

  site: { url: 'https://grandstone-memorial.ru/' },

  icon: {
    customCollections: [
      {
        prefix: 'icons',
        dir: 'assets/icons',
      },
    ],
  },
});
