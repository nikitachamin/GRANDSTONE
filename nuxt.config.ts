// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

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

  modules: ['@nuxt/image'],

 
}
)