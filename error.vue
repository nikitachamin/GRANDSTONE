<script lang="ts" setup>
import { Top, Heading } from '@/components/header/';
import { Footer } from './components/footer/';

import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})


const router = useRouter()

// Обработка клика на кнопке
const handleError = () => {
  // Очистка ошибки
  clearError()

  // Проверка истории навигации
  if (window.history.state?.back) {
    router.back()
  } else {
    router.replace('/')
  }
}

const handleErrorGoMain = () => clearError({ redirect: '/' })

</script>
<template>
  <header>
    <div class="heading_wrapper">
      <Heading />
    </div>
    <Top />
  </header>


  <div class="error-wrapper">
    <div><h1>404</h1></div> 
    <div><h2>Страница не найдена</h2></div> 
    <p>К сожалению, такой страницы не существует или она была удалена.</p>
    <div class="btn-wrapper">
        <button class="btn" @click="handleError">Вернуться назад</button>
        <button class="btn _black" @click="handleErrorGoMain">На главную</button>
    </div>

  </div>


 
  <Footer></Footer>
</template>

<style scoped>
@reference "tailwindcss";
.heading_wrapper {
  @apply bg-[#F9F9F9];
  @apply w-full;
  @apply px-8;

  @apply box-border;
}
.error-wrapper{
    @apply max-w-360;
    @apply mx-auto;
    @apply flex;
    @apply flex-col;
    @apply gap-6;
    @apply justify-center;
    @apply items-center;
    @apply pt-12;
    @apply pb-24;
    @apply mb-90;
}
.error-wrapper h1{
    color: var(--Black-Color-200, #D1D1D1);
    font-family: "Golos Text";
    font-size: 176px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.038px;
}
.error-wrapper h2{
    color: var(--Black-Color-600, #5D5D5D);
    font-family: "Golos Text";
    font-size: 29px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px; /* 124.138% */
    letter-spacing: 0.171px;
}
.error-wrapper p{
    color: var(--Black-Color-600, #5D5D5D);
    font-family: "Golos Text";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 175% */
    letter-spacing: -0.16px;
}
.btn-wrapper{
    @apply flex;
    @apply gap-3;
}
.btn{
    display: flex;
    height: 56px;
    padding: 16px 24px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    color: var( #000);
    font-family: "Golos Text";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.4px;
    border: 1px solid rgba(0, 0, 0, 0.10);
}
._black{
    color: var(--White-Color-50, #FFF);
    border-radius: 4px;
    background: #1A1A1A;
}

@media (max-width: 480px){
     .heading_wrapper {
    @apply bg-[#F9F9F9];
    @apply flex;
    @apply justify-center;
  }
      .error-wrapper{
     @apply w-full;
     @apply px-8;
}
    .error-wrapper p{
     @apply w-full;
}
}
</style>