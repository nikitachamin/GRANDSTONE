<script setup>
import {HeroButton} from '@/components/buttons';

</script>

<template>
    <section class="hero">
        <div class="hero__title">
            <h2>Изготовим и установим памятник с уважением
к памяти близкого человека </h2>
        </div>
        <div>
            <HeroButton/>
        </div>
        <div class="image"></div>
    </section>
</template>

<style scoped>
@reference "tailwindcss";

    .hero {
        @apply mt-32;
        @apply mb-28;
        @apply relative;
        @apply flex;
        @apply flex-col;
        @apply justify-end;
        @apply justify-items-start;
        @apply gap-8;
        @apply w-full;
        @apply box-border;
        @apply bg-[#F6F6F6];
        @apply px-16;
        @apply py-24;
        @apply overflow-hidden;
    }
    .hero__title{
        @apply w-167.75;
        z-index: 10;
        

    }
    .hero__title h3{
        padding: 0;
        margin: 0;
        color: #000;
        font-family: "Golos Text";
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2.5rem; /* 142.857% */
        letter-spacing: -0.0175rem;
    }
    
   .image{
    @apply absolute;
    @apply flex;
    @apply justify-center;
    width: 21.69238rem;
    height: 24.82388rem;
    transform: rotate(-17.758deg);
    aspect-ratio: 347.08/397.18;
    right: 7.02013rem;
    bottom: -5.63213rem;
    background: url('@/assets/img/hero/flower.png') #F6F6F6 -290.026px -259.07px / 251.874% 330.111% no-repeat;
    z-index: 9;
   }

   @media (max-width: 1024px) {
    .hero{
        @apply px-8;
    }
    .hero__title{
        @apply w-98.75;
        
    }
    .image{
        position: absolute;
        right: -38.405px;
        bottom: -67.308px;
    }
   }

   @media (max-width: 480px) {
    .hero{
        @apply w-120;
        @apply px-8;
    }
    .hero__title{
        font-size: 14px;
        width: 261px;
    

    }
    .image{
       position: absolute;
    right: -171.379px;
    bottom: -36.559px;
    }
   }
</style>