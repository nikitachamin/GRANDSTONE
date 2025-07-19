<script setup lang="ts">
interface PageMainTitle {
  mainTitle: string;
}

const props = defineProps<PageMainTitle>();
</script>

<template>
  <div class="page-main">
    <div class="page-main__title">
      <h1>{{ mainTitle }}</h1>
    </div>
    <div class="page-cards">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";

.page-cards {
  @apply flex;
  @apply gap-6;
  @apply flex-wrap;
}

.page-main__title {
  @apply my-8;
}

.page-main__title h1 {
  color: var(--Black-Color-950, #000);
  font-family: 'Golos Text';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: -0.00325rem;
}
@media (max-width: 480px) {
  .page-cards {
    @apply flex-col;
  }
}
</style>
