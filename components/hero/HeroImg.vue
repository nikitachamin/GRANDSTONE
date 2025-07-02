<script setup lang="ts">
const route = useRoute();
const pathToImg = route.path.replace(/^\//, '').toLowerCase();
const imgSrc = `/img/${pathToImg}/${pathToImg}.png`;

interface HeroAlt {
  alt: string;
}

const props = defineProps<HeroAlt>();
</script>

<template>
  <div class="hero">
    <NuxtImg class="hero__img" :src="imgSrc" :alt="alt" />
  </div>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";

.hero {
  @apply mt-8;
}

.hero__img {
  @apply w-full;
  @apply h-140.5;
  object-fit: cover;
}

@media (max-width: 1024px) {
  .hero__img {
    @apply w-full;
    @apply h-97.5;
  }
}

@media (max-width: 480px) {
  .hero__img {
    @apply w-full;
    @apply h-65;
  }
}
</style>
