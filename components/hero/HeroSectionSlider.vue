<script setup lang="ts">
import img1 from '@/assets/img/hero/slider/1.png';
import img2 from '@/assets/img/hero/slider/1.png';
import img3 from '@/assets/img/hero/slider/1.png';
import heroImg1 from '@/assets/img/hero/1.png';
import heroImg2 from '@/assets/img/hero/2.png';
import heroImg3 from '@/assets/img/hero/3.png';
import heroImg4 from '@/assets/img/hero/4.png';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { ref, onMounted, onBeforeUnmount } from 'vue';

import {
    Navigation
} from 'swiper/modules';

import {
    Swiper,
    SwiperSlide,
} from 'swiper/vue';

const images = [
img1, img2, img3]
 



const swiperOptions = {
    modules: [Navigation],
    navigation: { 
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev' 
    },
    loop: true 
};
</script>

<template>
    <div class="hero-container">
    <div class="hero-section-carousel">

        <Swiper v-bind="swiperOptions">
             <div class="title">
                    <h1>Памятники
                        и мемориальные комплексы всех видов</h1>
                </div> 
            <SwiperSlide v-for="(item, index) in images" :key="index" class="hero-section-carousel-item" >
                <img :src="item" class="hero-section-carousel-item__image" />
                
            </SwiperSlide>

          

        </Swiper>
          <button class="button swiper-button-prev">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M14.7071 5.29289C15.0976 5.68342 15.0976 6.31658 14.7071 6.70711L9.41421 12L14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289Z"
                            fill="#454545" />
                    </svg></span>
            </button>


            <button class="button swiper-button-next">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M9.29289 5.29289C8.90237 5.68342 8.90237 6.31658 9.29289 6.70711L14.5858 12L9.29289 17.2929C8.90237 17.6834 8.90237 18.3166 9.29289 18.7071C9.68342 19.0976 10.3166 19.0976 10.7071 18.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L10.7071 5.29289C10.3166 4.90237 9.68342 4.90237 9.29289 5.29289Z"
                            fill="#454545" />
                    </svg></span></button>
    </div>
    <div class="hero-blocks">
        <div class="hero-block" :style="{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0) 100%), url(${heroImg1})`}">
            <h3 class="block-title">Бесплатная консультация и расчёт стоимости</h3>
          
        </div>
        <div class="hero-block" :style="{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0) 100%), url(${heroImg2})`}">
            <h3 class="block-title">Бесплатная консультация и расчёт стоимости</h3>
           
        </div>
        <div class="hero-block" :style="{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0) 100%), url(${heroImg3})`}">
            <h3 class="block-title">Бесплатная консультация и расчёт стоимости</h3>
            
        </div>
        <div class="hero-block" :style="{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0) 100%), url(${heroImg4})`}" >
            <h3 class="block-title">Бесплатная консультация и расчёт стоимости</h3>
            
        </div>
    </div>
    </div>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";
.hero-container{
 @apply max-w-[90rem];
 @apply mx-auto;
}
.hero-section-carousel {
    @apply flex;
    @apply mt-10;  
    position: relative;
}

.hero-section-carousel-item {
    @apply w-full;
    @apply h-full;
    
    z-index: 1;
    overflow:visible;  
}

.hero-section-carousel-item__image {
    @apply p-0;
    @apply w-[90rem];
    @apply h-[24.3rem];
    @apply object-cover;
}

.title {
    position: absolute;
    @apply w-[37.0625rem];
    top: 7.5rem;
    left: 4.5rem;
    z-index: 10;
    margin: 0;
    padding: 0;
   


} 

h1 {
    color: var(--White-Color-50, #FFF);
    font-family: "Golos Text";
    font-size: 3rem;
    font-style: normal;
    font-weight: 500;
    line-height: 3.125rem;
    /* 104.167% */
    letter-spacing: -0.02881rem;
    margin: 0;
    padding: 0;
   
}

.button {
    display: flex;
    width: 3rem;
    height: 3rem;
    padding: 1.125rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 1.875rem;
    border: 1px solid rgba(0, 0, 0, 0.10);
    background: #FFF;
    z-index: 10;
  
}

.swiper-button-prev {
    position: absolute;
    left: -1.5rem;
    top: 10.3125rem;
}

.swiper-button-next {
    position: absolute;
    right: -1.5rem;
    top: 10.6875rem;
}
.hero-blocks{
    display: flex;
    gap: 2rem;
    @apply my-8;
}
.hero-block{
    background: #F6F6F6;
    width: 21rem;
    height: 18rem;
    padding: 1.5rem;
    background-size: cover;
    background-position: center;   
}
.hero-block h3{
    color: #FFF;
    font-family: "Golos Text";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 140% */
    letter-spacing: -0.052px;
    margin: 0;
}





@media (max-width: 1024px) {
    .hero-container{
        @apply justify-center;
        @apply px-6;
    }
   .hero-section-carousel {  
    @apply mt-6;  
   }

    .hero-blocks{
       gap:24px;
       justify-content: center;
       flex-wrap: wrap;
    }
    .hero-block{
        width: 476px;
        height: 320px;
        box-sizing: border-box;     
    }
@media (max-width: 480px){
    .hero-container{    
     @apply max-w-120;
     @apply px-8;
    }
    
    .hero-section-carousel-item__image {
        width: 416px;
        height: 250px;
    }   
    .button{
        width: 32px;
        height: 32px;
        top: 109px;
    }
    .title{
        @apply w-104;
        @apply h-62;
        @apply flex;
        @apply pl-15;
        @apply items-center;
        left: 0;
        top: 0px;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.40) 39.61%, rgba(217, 217, 217, 0.00) 114.46%, rgba(217, 217, 217, 0.00) 120.83%);
      
    }
    .title h1{
          font-size: 24px;
          width: 128px;
          margin: 0;
          line-height: 32px;
    }
    
}
}
</style>
