<script setup lang="ts">
import { SpecialOffer } from '@/components/offers';
import { Hero } from '@/components/hero';

const cards = [
  {
    h3: 'Лучшие предложения',
    data: [
      {
        img: `/img/katalog/pamyatniki/1.webp`,
        price: '27900',
        size: '100*50*5',
        article: 'ВП-1',
      },
      {
        img: `/img/katalog/pamyatniki/10.webp`,
        price: '27900',
        size: '100*50*5',
        article: 'ВП-10',
      },
      {
        img: `/img/katalog/pamyatniki/100(1).webp`,
        price: '51750',
        size: '100*50*5',
        article: 'ВП-100(1)',
      },
      {
        img: `/img/katalog/pamyatniki-figurnie/102.webp`,
        price: '39150',
        size: '100*50*5',
        article: 'ВФ-102',
      },
    ],
  },
  {
    h3: 'Доступные варианты',
    data: [
      {
        img: `/img/katalog/pamyatniki-figurnie/111.webp`,
        price: '27900',
        size: '100*50*5',
        article: 'ВФ-111(2)',
      },
      {
        img: `/img/katalog/pamyatniki-figurnie/123(2).webp`,
        price: '51750',
        size: '100*50*5',
        article: 'ВФ-123(2)',
      },
      {
        img: `/img/katalog/pamyatniki-gorizontalnie/11.webp`,
        price: '36200.0',
        size: '80*60*5',
        article: 'гп11',
      },
      {
        img: `/img/katalog/pamyatniki-gorizontalnie/12.webp`,
        price: '33100.0',
        size: '80*60*5',
        article: 'гп12',
      },
    ],
  },
  {
    h3: 'Выбор покупателей',
    data: [
      {
        img: `/img/katalog/pamyatniki-kombinirovannie-gorizontalnie/2.webp`,
        price: 'от 150000.0',
        size: '80*60*5',
        article: 'КГ-2',
      },
      {
        img: `/img/katalog/pamyatniki-kombinirovannie/1.webp`,
        price: 'от 150000.0',
        size: '',
        article: 'КВ-1',
      },
      {
        img: `/img/katalog/pamyatniki-kombinirovannie/115.webp`,
        price: 'от 150000.0',
        size: '',
        article: 'КВ-115',
      },
      {
        img: `/img/katalog/pamyatniki-kombinirovannie/130.webp`,
        price: 'от 150000.0',
        size: '',
        article: 'КВ-130',
      },
    ],
  },
];

function selectCardsGroup(groupName: string) {
  return cards.find((group) => group.h3 === groupName);
}
</script>

<template>
  <div>
    <div class="main-page">
      <hero-section-slider> </hero-section-slider>
      <special-offer
        :card-group="selectCardsGroup('Лучшие предложения')"
      ></special-offer>
      <special-offer
        :card-group="selectCardsGroup('Доступные варианты')"
      ></special-offer>
      <Hero />
      <CatalogSection />
      <special-offer
        :card-group="selectCardsGroup('Выбор покупателей')"
      ></special-offer>
      <SliderSection />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";
.main-page {
  @apply max-w-[90rem];
  @apply mx-auto;
}

@media (max-width: 480px) {
  .main-page {
    @apply flex;
    @apply flex-col;
    @apply justify-center;
    @apply w-full;
    @apply mx-0;
    @apply box-border;
  }
}
</style>
