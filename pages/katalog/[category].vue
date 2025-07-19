<script setup>
import { productsData } from '../../utils/data';
const route = useRoute();
const categoryName = route.params.category;

const breadCrumbLabel = computed(() => {
  const categoryMap = {
  'pamyatniki': 'Памятники прямые',
  'pamyatniki-kombinirovannie': 'Комбинированные ',
  'kompleksi' : 'Комплексы',
  'pamyatniki-figurnie' : 'Памятники фигурные',
  'pamyatniki-gorizontalnie' : 'Памятники горизонтальные ',
  'pamyatniki-kombinirovannie-gorizontalnie' : 'Комбинированные горизонтальные ',
  'skameiki' : 'Скамейки и лавочки',
  'ogradi' : 'Ограды',
  'tcokolya' : 'Цоколя',
  'nadgrobnie-pliti': 'Надгробные плиты',
  };

  return categoryMap[categoryName] || categoryName;
});

const cardName = computed(() => {
  const cardNameMap = {
  'pamyatniki': 'Памятник прямой',
  'pamyatniki-kombinirovannie': 'Комбинированный ',
  'kompleksi' : 'Комплекс',
  'pamyatniki-figurnie' : 'Памятник фигурный',
  'pamyatniki-gorizontalnie' : 'Памятник горизонтальный ',
  'pamyatniki-kombinirovannie-gorizontalnie' : 'Комбинированный горизонтальный ',
  'skameiki' : 'Скамейка',
  'ogradi' : 'Ограда',
  'tcokolya' : 'Цоколь',
  'nadgrobnie-pliti': 'Надгробная плита',
  };

  return cardNameMap[categoryName] || categoryName;
});

const currentCards = computed(() => {
  return productsData[categoryName]?.products || [];
});
const currentCardsDescription = computed(() => {
  return productsData[categoryName]?.description || [];
});


</script>

<template>
  <section class="category-section">
    <div class="header">
      <BreadCrumbs />
      <h1>{{ breadCrumbLabel }}</h1>
    </div>
    <div class="offers">
      <Card
        v-for="card in currentCards"
        :key="card.article"
        :cardData="card"
        :src="`/img/katalog/${categoryName}/${card.img}.webp`"
        :cardName = "cardName"
      />
    </div>

    <div class="category-info">
      <div
        v-for="(description, idx) in currentCardsDescription"
        :key="idx"
        v-html="description"
      ></div>
    </div>

    <p>Читать все</p>
  </section>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";

.category-section {
  @apply max-w-360;
  @apply flex;
  @apply flex-col;
  @apply mx-auto;
  @apply mt-12;
  @apply mb-24;
}

.bread-crum {
  color: var(--Black-Color-600, #5d5d5d);
  font-family: 'Golos Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
  /* 175% */
  letter-spacing: -0.01rem;
  text-decoration: none;
}
._active {
  color: var(--Black-Color-950, #000);
}
.header h1 {
  color: #000;
  font-family: 'Golos Text';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.25rem;
  /* 150% */
  letter-spacing: 0.00888rem;
}
.header {
  @apply mb-8;
}
.offers {
  @apply flex;
  @apply gap-6;
  @apply flex-wrap;
}
.offer-card {
  @apply w-85.5;
}
.offer-card img {
  @apply h-[21.785rem];
  @apply w-full;
  background-color: #f6f6f6;
}

.card-info {
  @apply p-4;
}

.card-info h3 {
  color: #000;
  font-family: 'Golos Text';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
  /* 160% */
  letter-spacing: -0.00325rem;
}

.card-info p {
  color: #000;
  font-family: 'Golos Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem;
  /* 175% */
  letter-spacing: 0.00588rem;
}

.card-info button {
  display: flex;
  height: 3.25rem;
  padding: 0.75rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 0.25rem;
  @apply w-full;
  border: 1px solid rgba(0, 0, 0, 0.05);
  @apply bg-[#FFF];
}
.category-info {
  color: var(--Black-Color-300, #b0b0b0);
  font-family: 'Golos Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  letter-spacing: -0.01rem;
  @apply mt-12;
}

@media (max-width: 1024px) {
  .category-section {
    @apply mx-8;
  }
  .offers {
    @apply flex-wrap;
    @apply gap-6;
  }
  .offer-card {
    @apply w-[calc(50vw-45px)];
  }
  .offer-card img {
    @apply h-87;
    @apply w-full;
    background-color: #f6f6f6;
  }
}

@media (max-width: 480px) {
  .offer-card {
    @apply w-full;
  }
  .offer-card img {
    @apply h-87.5;
  }
}
</style>
