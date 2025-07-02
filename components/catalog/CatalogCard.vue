<script setup>
defineProps({
  card: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <NuxtLink :to="card.to">
    <div class="card">
      <img class="card__image" :src="card.imgSrc" :alt="card.title" />
      <h4>{{ card.title }}</h4>
    </div>
  </NuxtLink>
</template>

<style scoped>
a {
  text-decoration: none;
  color: var(--Black-Color-950, #000);
  font-family: 'Golos Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem; /* 200% */
  letter-spacing: -0.00263rem;
}
.card {
  @apply flex;
  @apply flex-col;
  @apply items-center;
  @apply gap-4;
  @apply w-84;
}
.card__image {
  @apply h-75;
  @apply w-full;
  border-radius: 4px;
  background:  #F0F0F0;
}

@media (max-width: 1024px) {
  .card {
    @apply w-[calc(50vw-50px)];
    @apply box-border;
  }
  .card__image {
    @apply h-100;
    @apply w-full;
    background-color: #f0f0f0;
  }
  @media (max-width: 480px) {
    .card {
      @apply w-full;
    }
  }
}
@reference "tailwindcss";
</style>
