<script setup>
import PageText from '~/components/pageContent/PageText.vue';
</script>

<template>
  <section class="about-section">
    <div class="header">
      <BreadCrumbs />
    </div>
    <HeroImg alt="Надгробная плита" />
    <PageText />
  </section>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";

.about-section {
  @apply max-w-360;
  @apply flex;
  @apply flex-col;
  @apply mx-auto;
  @apply mt-12;
  @apply mb-24;
}

@media (max-width: 1024px) {
  .about-section {
    @apply box-border;
    @apply mx-0;
    @apply px-8;
  }
}
</style>
