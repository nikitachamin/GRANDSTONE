<script setup lang="ts">

import heroImg1 from '@/assets/img/hero/1.png';
import heroImg2 from '@/assets/img/hero/2.png';
import heroImg3 from '@/assets/img/hero/3.png';
import heroImg4 from '@/assets/img/hero/4.png';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { ref, onMounted, onBeforeUnmount } from 'vue';

import { Navigation, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/vue';

const HERO_DATA = [
  {
    img: '/img/hero/slider/1.png',
    title: `Памятники
и мемориальные комплексы всех видов`,
  },
   {
    img: '/img/hero/slider/2.png',
    title: `Авторская гравировка по индивидуальному заказу`,
  },
   {
    img: '/img/hero/slider/3.png',
    title: `Память, которую невозможно забыть`,
  },
   {
    img: '/img/hero/slider/4.png',
    title: `Опыт мастеров — залог качества на долгие годы`,
  },
   {
    img: '/img/hero/slider/5.png',
    title: `Изготовление памятников 
с гравировкой по фото`,
  }
];

const swiperOptions = {
  modules: [Navigation, Autoplay],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
   autoplay: {
    delay: 4000,
    disableOnInteraction: false, 
    pauseOnMouseEnter: true
  }
};
</script>

<template>
  <div class="hero-container">
    <div class="hero-section-carousel">
      <Swiper v-bind="swiperOptions">
       
        <SwiperSlide
          v-for="(item, index) in HERO_DATA"
          :key="index"
          class="hero-section-carousel-item"
        >
          <NuxtImg :src="item.img" :alt="item.title" class="hero-section-carousel-item__image" />
           <div class="title">
            <div class="title-wrapper">
              <h1>{{item.title}}</h1>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
      <button class="button swiper-button-prev">
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14.7071 5.29289C15.0976 5.68342 15.0976 6.31658 14.7071 6.70711L9.41421 12L14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289Z"
              fill="#454545"
            /></svg
        ></span>
      </button>

      <button class="button swiper-button-next">
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.29289 5.29289C8.90237 5.68342 8.90237 6.31658 9.29289 6.70711L14.5858 12L9.29289 17.2929C8.90237 17.6834 8.90237 18.3166 9.29289 18.7071C9.68342 19.0976 10.3166 19.0976 10.7071 18.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L10.7071 5.29289C10.3166 4.90237 9.68342 4.90237 9.29289 5.29289Z"
              fill="#454545"
            /></svg
        ></span>
      </button>
    </div>
    <div class="hero-blocks">
      <div
        class="hero-block"
        :style="{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0) 100%), url(${heroImg1})`,
        }"
      >
        <h3 class="block-title">Бесплатная консультация и&nbspрасчёт стоимости</h3>
      </div>
      <div
        class="hero-block"
        :style="{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0) 100%), url(${heroImg2})`,
        }"
      >
        <h3 class="block-title">Бесплатная
установка</h3>
      </div>
      <div
        class="hero-block"
        :style="{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0) 100%), url(${heroImg3})`,
        }"
      >
        <h3 class="block-title">Наличие собственного производства</h3>
      </div>
      <div
        class="hero-block"
        :style="{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0) 100%), url(${heroImg4})`,
        }"
      >
        <h3 class="block-title">Услуга
доставки</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";
.hero-container {
  @apply max-w-[90rem];
  @apply mx-auto;
}
.hero-section-carousel {
  position: relative;
  @apply flex;
  @apply mt-10;

}

.hero-section-carousel-item {
  
  @apply w-full;
  @apply h-87.5;
  @apply object-cover;
  z-index: 1;
  overflow: visible;
}

.hero-section-carousel-item__image {
  @apply p-0;
  @apply w-full;
  @apply h-full;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.00) 100%), url(<path-to-image>) lightgray -16.764px -165px / 106.389% 196.41% no-repeat, #F6F6F6;
  @apply object-cover;
}

.title {
  position: absolute;
  @apply w-1/2;
  @apply h-full;
  @apply flex;
  @apply items-center;
  @apply pl-18;
  top: 0;
  left: 0;
  z-index: 10;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.40) 68.64%, rgba(217, 217, 217, 0.00) 105.52%, rgba(217, 217, 217, 0.00) 111.44%);
  
}
.title-wrapper{

}

h1 {
  color: var(--White-Color-50, #fff);
  font-family: 'Golos Text';
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
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
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
.hero-blocks {
  display: flex;
  gap: 2rem;
  @apply my-8;
}
.hero-block {
  background: #f6f6f6;
  width: 21rem;
  height: 18rem;
  padding: 1.5rem;
  background-size: cover;
  background-position: center;
}
.hero-block h3 {
  color: #fff;
  font-family: 'Golos Text';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 140% */
  letter-spacing: -0.052px;
  margin: 0;
}

@media (max-width: 1024px) {
  .hero-container {
    @apply justify-center;
    @apply px-6;
    @apply w-full;
    @apply box-border;
    @apply mx-0;
  }
  .hero-section-carousel {
    @apply mt-6;
  }

  .hero-blocks {
    gap: 24px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .hero-block {
    @apply w-[calc(50vw-38px)];
    @apply box-border;
  }

  @media (max-width: 480px) {
    .hero-section-carousel-item__image {
      @apply w-full;
      @apply h-62.5;
      object-fit: cover;
    }
    .button {
      width: 32px;
      height: 32px;
      top: 109px;
    }
    .title {
      @apply w-full;
      @apply h-62;
      @apply flex;
      @apply items-center;
      left: 0;
      top: 0px;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.4) 39.61%,
        rgba(217, 217, 217, 0) 114.46%,
        rgba(217, 217, 217, 0) 120.83%
      );
    }
    .hero-block {
      @apply w-full;
    }

    .title-wrapper {
      @apply ml-8;
    }
    .title h1 {
      font-size: 24px;
      @apply w-32;
      @apply m-0;
      line-height: 32px;
    }
  }
}
</style>
