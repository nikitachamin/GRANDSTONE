<script setup>
import { NuxtImg } from '#components';

import img1 from '@/assets/img/catalog/1.png';

const data = [
    {
        category_name: 'Памятники',
        items: [
            {
                name: 'Прямые',
                imgSrc: img1,
                to: '/straight'
               
            },
            {
                name: 'Фигурные',
                imgSrc: img1,
                to: '/straight'
            },
            {
                name: 'Горизонтальные',
                imgSrc: img1,
                to: '/straight'
            },
        ]
    },
    {
        category_name: 'Комплексы',
        items: [
            {
                name: 'Комбинированные',
                imgSrc: img1,
                to: '/comb'
            },
            {
                name: 'Комплексы',
                imgSrc: img1,
                to: '/comb'
            },
            {
                name: 'Горизонтальные',
                imgSrc: img1,
                to: '/comb'
            },
        ]
    },
      {
        category_name: 'Комплексы',
        items: [
            {
                name: 'Комбинированные',
                imgSrc: img1,
                to: '/complex'
            },
            {
                name: 'Комплексы',
                imgSrc: img1,
                to: '/complex'
            },
            {
                name: 'Горизонтальные',
                imgSrc: img1,
                to: '/complex'
            },
        ]
    },
      {
        category_name: 'Комплексы',
        items: [
            {
                name: 'Комбинированные',
                imgSrc: img1,
                to: '/complex'
            },
            {
                name: 'Комплексы',
                imgSrc: img1,
                to: '/complex'
            },
            {
                name: 'Горизонтальные',
                imgSrc: img1,
                to: '/complex'
            },
        ]
    },
]

</script>

<template>

    <section class="catalog-section">
        <div class="header">
            <div class="bread-crumps">
                <NuxtLink class="bread-crum" to="/">Главная</NuxtLink> /
                <NuxtLink class="bread-crum _active" to="/catalog">Каталог</NuxtLink>
            </div>
            <h3>Каталог</h3>
        </div>
        <div class="hero">
            <img class="hero__img" src="/assets/img/catalog/hero.png" alt="Надгробная плита" />
            <div class="hero-text-wrapper">
             <div class="hero-text-container">
            <h2 class="hero-text">Изготовление памятников
                с гравировкой по фото</h2>
        </div>
        </div>
        
        </div>
       
        <div class="catalog">
            <div class="catalog-lists" v-for="(list, index) in data" :key="list.category_name" :class="{ '_black': index % 2 !== 0 }">
                <div class="category-list__name">
                    <h2>{{ list.category_name }}</h2>
                </div>
                <div class="catalog-list">
                <NuxtLink class="category-item" v-for="item in list.items" :key="item.name" :to="`/catalog${item.to}`">
                    <img class="category-item__img" :src="item.imgSrc" :alt="item.name">
                    <p class="category-item__name">{{ item.name }}</p>
                </NuxtLink >
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";


.catalog-section {
    @apply max-w-360;
    @apply flex;
    @apply flex-col;
    @apply mx-auto;
    @apply mt-12;
    @apply mb-24;

}

.bread-crum {
    color: var(--Black-Color-600, #5D5D5D);
    font-family: "Golos Text";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    /* 175% */
    letter-spacing: -0.01rem;
    text-decoration: none;
}
._active{
   color: var(--Black-Color-950, #000);
}
.header h3 {
    color: #000;
    font-family: "Golos Text";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.25rem;
    /* 150% */
    letter-spacing: 0.00888rem;
}
.hero{
    position: relative;
}
.hero__img {
    @apply w-360;
    @apply h-[24.375rem];
}
.hero-text-wrapper{
    width: 48rem;
    height: 24.375rem;
    position: absolute;
    top: 0;
    @apply flex;
    @apply items-center;
    @apply justify-center;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.05) 78.77%, rgba(217, 217, 217, 0.00) 95.23%, rgba(217, 217, 217, 0.00) 111.44%);
}
.hero-text-container{
    @apply w-[37rem];
}
.hero-text{
    color: var(--White-Color-50, #FFF);
    font-family: "Golos Text";
    font-size: 3rem;
    font-style: normal;
    font-weight: 500;
    line-height: 3.125rem; /* 104.167% */
    letter-spacing: -0.02881rem;
    padding: 0;
    margin: 0;
}
.catalog-lists {
    @apply flex;
    @apply gap-6;
}
.catalog-list {
    @apply flex;
    @apply gap-6;
}

._black{
    background: var(--Black-Color-50, #F6F6F6);
}
.category-list__name {
    display: flex;
    padding: 2rem 0rem 2rem 2rem;
    align-items: center;
    gap: 4rem;
    align-self: stretch;
    @apply mr-10;
}

.category-list__name h2 {
    color: #000;
    font-family: "Golos Text";
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
    color: var(--Black-Color-600, #5D5D5D);
    text-align: center;
    font-family: "Golos Text";
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
   .catalog-section{
    @apply mx-8;
   }
   .hero__img{
    @apply w-full;
   }
   .hero-text-container{
    @apply w-150;
   }
   .hero-text-wrapper{
    top: 5px;
   }
   .hero-text{
    font-size: 36px;
   }
   .catalog-lists{
    @apply flex;
    @apply flex-col;
    @apply gap-0;
   }
   .category-list__name{
    padding: 0;
    @apply my-6;
   }
   .category-item{
    @apply flex;
    @apply flex-row;
    @apply justify-start;
    @apply gap-6;
    @apply p-3;
    @apply w-118.5;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #FFF;   
   }
   .category-item__img{
     @apply w-18;
     @apply h-18;
   }
   ._black{
    background-color: #fff;
   }
}

@media (max-width: 480px) {
  
   .hero__img{
    @apply w-104;
    @apply h-62;
   }
   .hero-text-container{
     @apply w-65;
     @apply pl-15;
   
   
   }
   .hero-text-wrapper{
      @apply justify-start;
      @apply w-104;
      @apply h-62;
      @apply flex;
      left: 0;
      top: 0px;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.40) 39.61%, rgba(217, 217, 217, 0.00) 114.46%, rgba(217, 217, 217, 0.00) 120.83%);
   }
   .hero-text{    
    font-size: 24px;
    width: 128px;
    margin: 0;
    line-height: 32px; 
   }
   .catalog-lists{
    @apply flex;
    @apply flex-col;
    @apply gap-0;
   }
     .catalog-list{
    @apply flex;
    @apply flex-col;
    @apply gap-3;
   }
   .category-list__name{
    padding: 0;
    @apply my-6;
   }
   .category-item{
    @apply justify-start;
    @apply gap-6;
    @apply w-100;
  
   }

}
</style>