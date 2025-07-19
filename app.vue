<script setup>
import { useHead, useRoute } from '#imports'
import { HEADS } from '#imports'
import { onMounted } from 'vue'



const route = useRoute()

 

const seo = computed(() => {
  const meta = HEADS[route.path] || {}
  return {
    title: meta.title || 'Default Title',
    description: meta.description || 'Default Description',
    keywords: meta.keywords || 'default, keywords'
  }
})


useHead(() => ({
  title: seo.value.title,
  meta: [
    { name: 'description', content: seo.value.description },
    { name: 'keywords', content: seo.value.keywords }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ]
}))
</script>

<template>
  <div>
    <noscript>
      <div>
        <img src="https://mc.yandex.ru/watch/103296773" style="position:absolute; left:-9999px;" alt="" />
      </div>
    </noscript>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
