<script setup lang="ts">
import { SpecialOffer } from '@/components/offers';
import { Hero } from '@/components/hero';
import img1 from '@/assets/img/tombs/offers/1.png';
import img2 from '@/assets/img/tombs/offers/2.png';
import img3 from '@/assets/img/tombs/offers/3.png';
import FormMail from '~/components/form/FormMail.vue';

const cards = [
  {
    h3: 'Лучшие предложения',
    data: [
      { img: img1, title: 'Гранитный комплекс', price: 12000, id: 1 },
      { img: img1, title: 'Гранитный комплекс', price: 12000, id: 2 },
      { img: img1, title: 'Гранитный комплекс', price: 12000, id: 3 },
      { img: img1, title: 'Гранитный комплекс', price: 12000, id: 4 },
    ],
  },
  {
    h3: 'Доступные варианты',
    data: [
      { img: img2, title: 'Гранитный комплекс', price: 12000, id: 5 },
      { img: img2, title: 'Гранитный комплекс', price: 12000, id: 6 },
      { img: img2, title: 'Гранитный комплекс', price: 12000, id: 7 },
      { img: img2, title: 'Гранитный комплекс', price: 12000, id: 8 },
    ],
  },
  {
    h3: 'Выбор покупателей',
    data: [
      { img: img3, title: 'Гранитный комплекс', price: 12000, id: 9 },
      { img: img3, title: 'Гранитный комплекс', price: 12000, id: 10 },
      { img: img3, title: 'Гранитный комплекс', price: 12000, id: 11 },
      { img: img3, title: 'Гранитный комплекс', price: 12000, id: 12 },
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
