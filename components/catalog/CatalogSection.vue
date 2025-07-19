<script setup>


const katalog = [
  {
    title: 'Памятники горизонтальные',
    imgSrc: '/img/katalog/horizontal.webp',
    to: '/katalog/pamyatniki-gorizontalnie',
    id: 'horizontal',
  },
  {
    title: 'Памятники вертикальные',
    imgSrc: '/img/katalog/straight.webp',
    to: '/katalog/pamyatniki',
    id: 'straight',
  },
  {
    title: 'Комбинированные',
    imgSrc: '/img/katalog/comb.webp',
    to: '/katalog/pamyatniki-kombinirovannie',
    id: 'comb',
  },
  {
    title: 'Двойные памятники',
    imgSrc:'/img/katalog/comb_horizontal.webp',
    to: '/katalog/pamyatniki-kombinirovannie-gorizontalnie',
    id: 'comb_horizontal',
  },
  {
    title: 'Мемориальные комплексы',
    imgSrc: '/img/katalog/complex.webp',
    to: '/katalog/kompleksi',
    id: 'complex',
  },
  {
    title: 'Надгробные плиты',
    imgSrc: '/img/katalog/tombstone.webp',
    to: '/katalog/nadgrobnie-pliti',
    id: 'tombstone',
  },
  {
    title: 'Цоколя и ограды',
    imgSrc:'/img/katalog/fences.webp',
    to: '/katalog/ogradi',
    id: 'fences',
  },
  {
    title: 'Лавочки и скамейки',
    imgSrc: '/img/katalog/bench.webp',
    to: '/katalog/skameiki',
    id: 'bench',
  },
];
</script>

<template>
  <section class="catalog">
    <div class="heading">
      <h2 class="heading__title">Популярные категории</h2>
      <p class="heading__text">
        Каждое наше преимущество — это гарантия уважительного отношения к памяти
        ваших близких и прозрачности в работе.
      </p>
    </div>
    <div class="card-list">
      <catalogCard v-for="card in katalog" :key="card.id" :card="card" />
    </div>
  </section>
</template>

<style scoped>
@reference "tailwindcss";
.heading {
  @apply mt-16;
  @apply flex;
  @apply flex-col;
  @apply items-start;
  @apply gap-6;
  @apply self-stretch;
}
.heading__title {
  color: var(--Black-Color-950, #000);
  font-family: 'Golos Text';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.25rem; /* 150% */
  letter-spacing: 0.00888rem;
  padding: 0;
  margin: 0;
}
.heading__text {
  width: 36.3125rem;
  color: var(--Black-Color-400, #888);
  font-family: 'Golos Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  letter-spacing: -0.01rem;
  padding: 0;
  margin: 0;
}
.card-list {
  @apply flex-wrap;
  @apply flex;
  @apply gap-8;
  @apply mt-12;
}

@media (max-width: 1024px) {
  .catalog {
    @apply mx-0;
    @apply w-full;
    @apply px-8;
    @apply box-border;
  }
  .card-list {
    @apply mt-8;
    @apply gap-6;
  }
}

@media (max-width: 480px) {
  .heading__text {
    @apply w-full;
  }
}
</style>
