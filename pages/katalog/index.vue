<script setup>
import { NuxtImg } from '#components';



const data = [
  {
    category_name: 'Памятники',
    items: [
      {
        name: 'Прямые',
        imgSrc: '/img/katalog/straight.webp',
        to: '/pamyatniki',
      },
      {
        name: 'Фигурные',
        imgSrc: '/img/katalog/curly.webp',
        to: '/pamyatniki-figurnie',
      },
      {
        name: 'Горизонтальные',
        imgSrc: '/img/katalog/horizontal.webp',
        to: '/pamyatniki-gorizontalnie',
      },
    ],
  },
  {
    category_name: 'Комбинированные',
    items: [
      {
        name: 'Вертикальные',
        imgSrc: '/img/katalog/comb.webp',
        to: '/pamyatniki-kombinirovannie',
      },

      {
        name: 'Горизонтальные',
        imgSrc: '/img/katalog/comb_horizontal.webp',
        to: '/pamyatniki-kombinirovannie-gorizontalnie',
      },
      {
        name: 'Комплексы',
        imgSrc: '/img/katalog/complex.webp',
        to: '/kompleksi',
      },
    ],
  },
  {
    category_name: 'Надгробные плиты',
    items: [
      {
        name: 'Надгробные плиты',
        imgSrc: '/img/katalog/tombstone.webp',
        to: '/nadgrobnie-pliti',
      },
    ],
  },
  {
    category_name: 'Прочее',
    items: [
      {
        name: 'Скамейки и лавочки',
        imgSrc: '/img/katalog/bench.webp',
        to: '/skameiki',
      },
      {
        name: 'Цоколя',
        imgSrc: '/img/katalog/pedestal.webp',
        to: '/tcokolya',
      },
      {
        name: 'Ограды',
        imgSrc: '/img/katalog/fences.webp',
        to: '/ogradi',
      },
    ],
  },
];
</script>

<template>
  <section class="katalog-section">
    <div class="header">
      <BreadCrumbs />
      <h1 class="header-title">Каталог</h1>
    </div>
    <div class="hero">
      <NuxtImg
        class="hero__img"
        src="/img/katalog/hero.webp"
        alt="Надгробная плита"
      />
      <div class="hero-text-wrapper">
        <div class="hero-text-container">
          <h2 class="hero-text">
            Изготовление памятников с гравировкой по фото
          </h2>
        </div>
      </div>
    </div>

    <div class="katalog">
      <div
        class="katalog-lists"
        v-for="(list, index) in data"
        :key="list.category_name"
        :class="{ _black: index % 2 !== 0 }"
      >
        <div class="category-list__name">
          <h2>{{ list.category_name }}</h2>
        </div>
        <div class="katalog-list">
          <NuxtLink
            class="category-item"
            v-for="item in list.items"
            :key="item.name"
            :to="`/katalog${item.to}`"
          >
            <img
              class="category-item__img"
              :src="item.imgSrc"
              :alt="item.name"
            />
            <p class="category-item__name">{{ item.name }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";

.katalog-section {
  @apply max-w-360;
  @apply flex;
  @apply flex-col;
  @apply mx-auto;
  @apply mt-12;
  @apply mb-24;
}

.header-title {
  color: #000;
  font-family: 'Golos Text';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.25rem;
  /* 150% */
  letter-spacing: 0.00888rem;
}
.hero {
  @apply mt-8;
  position: relative;
}
.hero__img {
  @apply w-full;
  @apply h-[24.375rem];
  object-fit: cover;
}
.hero-text-wrapper {
  @apply w-full;
  @apply h-[24.375rem];
  position: absolute;
  top: 0;
  @apply flex;
  @apply items-center;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.4) 39.61%,
    rgba(217, 217, 217, 0) 114.46%,
    rgba(217, 217, 217, 0) 120.83%
  );
}
.hero-text-container {
  @apply w-[37rem];
  @apply pl-15;
}
.hero-text {
  color: var(--White-Color-50, #fff);
  font-family: 'Golos Text';
  font-size: 3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.125rem; /* 104.167% */
  letter-spacing: -0.02881rem;
  padding: 0;
  margin: 0;
}
.katalog-lists {
  @apply flex;
  @apply gap-6;
}
.katalog-list {
  @apply flex;
  @apply gap-6;
}

._black {
  background: var(--Black-Color-50, #f6f6f6);
}
.category-list__name {
  display: flex;
  padding: 2rem 0rem 2rem 2rem;
  align-items: center;
  gap: 4rem;
  align-self: stretch;
  @apply mr-10;
  @apply min-w-55;
}

.category-list__name h2 {
  color: #000;
  font-family: 'Golos Text';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
  margin: 0;
  letter-spacing: -0.00325rem;
}

.category-item {
  display: flex;
  padding: 0.75rem 0rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  text-decoration: none;
  color: var(--Black-Color-600, #5d5d5d);
  text-align: center;
  font-family: 'Golos Text';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 200% */
}

.category-item__img {
  display: flex;
  width: 9rem;
  height: 8.8125rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
@media (max-width: 1024px) {
  .katalog-section {
    @apply mx-0;
    @apply w-full;
    @apply px-8;
    @apply box-border;
  }
  .hero__img {
    @apply w-full;
  }
  .hero-text-container {
    @apply w-1/2;
    @apply pl-15;
  }
  .hero-text-wrapper {
    @apply w-full;
  }
  .hero-text {
    font-size: 36px;
  }
  .katalog-lists {
    @apply flex;
    @apply flex-col;

    @apply gap-0;
  }
  .category-list__name {
    padding: 0;
    @apply my-6;
  }
  .katalog-list {
    @apply flex-wrap;
  }
  .category-item {
    @apply flex;
    @apply flex-row;
    @apply justify-start;
    @apply gap-6;
    @apply p-3;
    @apply min-w-[calc(50vw-70px)];
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #fff;
  }
  .category-item__img {
    @apply w-18;
    @apply h-18;
  }
  ._black {
    background-color: #fff;
  }
}

@media (max-width: 480px) {
  .hero__img {
    @apply w-full;
    @apply h-62;
  }
  .hero-text-container {
    @apply w-full;
    @apply pl-15;
  }
  .hero-text-wrapper {
    @apply justify-start;
    @apply w-full;
    @apply h-62;
    @apply flex;
    left: 0;
    top: 0px;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.4) 39.61%,
      rgba(217, 217, 217, 0) 114.46%,
      rgba(217, 217, 217, 0) 120.83%
    );
  }
  .hero-text {
    font-size: 24px;
    @apply w-32;
    margin: 0;
    line-height: 32px;
  }
  .katalog-lists {
    @apply flex;
    @apply flex-col;
    @apply gap-0;
  }
  .katalog-list {
    @apply flex;
    @apply flex-col;
    @apply gap-3;
  }
  .category-list__name {
    padding: 0;
    @apply my-6;
  }
  .category-item {
    @apply justify-start;
    @apply gap-6;
    @apply w-full;
    @apply box-border;
  }
}
</style>
