// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true, // Включите SSR для SSG (обязательно!)
     nitro: {
       prerender: {
         crawlLinks: true, // Автоматический предрендеринг всех ссылок
         routes: ['/about', '/catalog', '/catalog/straight', '/catalog/comb', '/installation', '/faq', '/delivery'], // Ручное указание маршрутов
       }
     },
  css: [
    '@/assets/styles/index.scss',
    'swiper/css',
    'swiper/css/pagination',
    'swiper/css/effect-fade',
  ],

  postcss: {
    plugins: {
       "@tailwindcss/postcss": {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxt/image','@nuxt/icon'],

  icon: {
    customCollections: [
      {
        prefix: 'icons',
        dir: 'assets/icons'
      },
    ],
  },
 
}
)