<script setup lang="ts">
import img1 from '@/assets/img/tombs/examples/1.jpeg';
import img2 from '@/assets/img/tombs/examples/2.jpeg';
import img3 from '@/assets/img/tombs/examples/3.jpeg';
import img4 from '@/assets/img/tombs/examples/4.jpeg';
import img6 from '@/assets/img/tombs/examples/6.jpeg';
import img7 from '@/assets/img/tombs/examples/7.jpeg';
import img8 from '@/assets/img/tombs/examples/8.jpeg';
import img9 from '@/assets/img/tombs/examples/9.jpeg';
import img10 from '@/assets/img/tombs/examples/10.jpeg';
import img11 from '@/assets/img/tombs/examples/11.jpeg';
import img12 from '@/assets/img/tombs/examples/12.png';
import img13 from '@/assets/img/tombs/examples/13.jpeg';
import img14 from '@/assets/img/tombs/examples/14.jpeg';
import img15 from '@/assets/img/tombs/examples/15.jpeg';
import img16 from '@/assets/img/tombs/examples/16.jpeg';
import img17 from '@/assets/img/tombs/examples/17.jpeg';
import img18 from '@/assets/img/tombs/examples/18.jpeg';
import img19 from '@/assets/img/tombs/examples/19.jpeg';
import img20 from '@/assets/img/tombs/examples/20.jpeg';
import img21 from '@/assets/img/tombs/examples/21.jpeg';
import img22 from '@/assets/img/tombs/examples/22.jpeg';
import img23 from '@/assets/img/tombs/examples/23.jpeg';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import {
    Navigation
} from 'swiper/modules';

import {
    Swiper,
    SwiperSlide,
} from 'swiper/vue';

const items = [
    img1, img2, img3, img4, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23
]

const swiperOptions = {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    loop: true,
    breakpoints: {
        481: { 
            slidesPerView: 2
        },
        1025: { 
            slidesPerView: 3
        }
    }
};
</script>

<template>
    <div class="hero-container">
        <div class="heading">
            <h2 class="heading__title">Популярные категории</h2>
            <p class="heading__text">Каждое наше преимущество — это гарантия уважительного отношения к памяти ваших
                близких и прозрачности в работе.</p>
        </div>
        <div class="hero-section-carousel">
            <Swiper v-bind="swiperOptions">
                <SwiperSlide v-for="(item, index) in items" :key="index" class="hero-section-carousel-item">
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

    </div>
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
    font-family: "Golos Text";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.25rem;
    /* 150% */
    letter-spacing: 0.00888rem;
    padding: 0;
    margin: 0;
}

.heading__text {
    width: 36.3125rem;
    color: var(--Black-Color-400, #888);
    font-family: "Golos Text";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    /* 175% */
    letter-spacing: -0.01rem;
    padding: 0;
    margin: 0;
}

.hero-section-carousel {
    @apply mt-12;
    @apply mb-40;
    @apply relative;
}

.hero-section-carousel-item__image {
    width: 29rem;
    align-self: stretch;
    height: 29rem;
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
    top: 13.02488rem;
}

.swiper-button-next {
    position: absolute;
    right: -1.5rem;
    top: 13.02488rem;
}

@media (max-width: 1024px) {
.hero-container{
    @apply mx-8;
}
.hero-section-carousel img{
   @apply w-full;
}
}

@media (max-width: 480px){
    .hero-container{    
     @apply w-104;
     @apply px-8;
     @apply mx-0;
    }
    .heading__text{
     @apply w-104;
     
    }
    .hero-section-carousel-item__image{
        @apply w-104;
    }
}
</style>