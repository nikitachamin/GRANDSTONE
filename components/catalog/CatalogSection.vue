<script setup>
import horizontal from '@/assets/img/tombs/catalog/horizontal.png'
import straight from '@/assets/img/tombs/catalog/straight.png'
import comb from '@/assets/img/tombs/catalog/comb.png'
import comb_horizontal from '@/assets/img/tombs/catalog/comb_horizontal.png'
import complex from '@/assets/img/tombs/catalog/complex.png'
import tombstone from '@/assets/img/tombs/catalog/tombstone.png'
import fences from '@/assets/img/tombs/catalog/fences.png'
import bench from '@/assets/img/tombs/catalog/bench.png'


const catalog = [
    {
    title: 'Памятники горизонтальные',
    imgSrc: horizontal,
    to: '/',
    id: 'horizontal' },
     {
    title: 'Памятники вертикальные',
    imgSrc: straight,
    to: '/catalog/straight',
    id: 'straight' },
     {
    title: 'Комбинированные',
    imgSrc: comb,
    to: '/catalog/comb',
    id: 'comb' },
     {
    title: 'Двойные памятники',
    imgSrc: comb_horizontal,
    to: '/',
    id: 'comb_horizontal' },
     {
    title: 'Мемориальные комплексы',
    imgSrc: complex,
    to: '/',
    id: 'complex' },
     {
    title: 'Надгробные плиты',
    imgSrc: tombstone,
    to: '/',
    id: 'tombstone' },
     {
    title: 'Цоколя и ограды',
    imgSrc: fences,
    to: '/',
    id: 'fences' },
     {
    title: 'Лавочки и скамейки',
    imgSrc: bench,
    to: '/',
    id: 'bench' },
]
</script>




<template>
    <section class="catalog">
        <div class="heading">
            <h2 class="heading__title">Популярные категории</h2>
            <p class="heading__text">Каждое наше преимущество — это гарантия уважительного отношения к памяти ваших близких и прозрачности в работе.</p>
        </div>
        <div class="card-list">
         <CatalogCard v-for="card in catalog" :key="card.id" :card="card" />
        </div>
    </section>
</template>

<style scoped>
@reference "tailwindcss";
.heading{
    @apply  mt-16;
    @apply flex;
    @apply flex-col;
    @apply items-start;
    @apply gap-6;
    @apply self-stretch;
}
.heading__title{
    color: var(--Black-Color-950, #000);
    font-family: "Golos Text";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.25rem; /* 150% */
    letter-spacing: 0.00888rem;
    padding: 0;
    margin: 0;
}
.heading__text{
    width: 36.3125rem;
    color: var(--Black-Color-400, #888);
    font-family: "Golos Text";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
    letter-spacing: -0.01rem;
    padding: 0;
    margin: 0;
    }
.card-list{
    @apply flex-wrap;
    @apply flex;
    @apply gap-8;
}

@media (max-width: 1024px) {
  .catalog{
    @apply mx-8;
  }
  .card-list{
    @apply mt-8;
    @apply gap-6;
  }
}

@media (max-width: 480px){
    .catalog{    
     @apply w-104;
     @apply px-8;
     @apply mx-0;
    }
 
    .heading__text{
     @apply w-104;
     
    }
   
}
</style>