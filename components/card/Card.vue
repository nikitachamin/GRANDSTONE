<script setup lang="ts">

interface Card {
    img: string,
    title: string,
    id: number | string,
    price: number
}

const props = defineProps<{CardData : Card}>();

const openWhatsApp = () => {
  const phone = '79109725858'; 
  const message = encodeURIComponent('Здравствуйте! У меня вопрос'); 
  const url = `https://wa.me/${phone}?text=${message}`;
  
  window.open(url, '_blank'); 
};
</script>


<template>
       <div class="card" v-for="card in CardData" :key="card.id">
          <img :src="card.img" :alt="card.title" />
          <div class="card-info">
            <h3>{{ card.title }}</h3>
            <p>от {{ card.price }}</p>
            <a @click.prevent="openWhatsApp" class="stretched-link"></a>
            <button>Подробнее</button>
          </div>
        </div>
</template>


<style lang="scss" scoped>
@reference "tailwindcss";

.card{ 
  @apply flex;
  @apply flex-col;
  @apply gap-4;
  position: relative
}

.stretched-link {
  @apply cursor-pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; 
}
.card img {
  @apply h-87;
  @apply w-85.5;
  background-color: #f6f6f6;
}

.card-info {
  @apply flex;
  @apply flex-col;
  @apply gap-4.5;
  @apply p-4;
}

.card-info h3 {
  color: #000;
  font-family: 'Golos Text';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
  /* 160% */
  letter-spacing: -0.00325rem;
}

.card-info p {
  color: #000;
  font-family: 'Golos Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem;
  /* 175% */
  letter-spacing: 0.00588rem;
}

.card-info button {
  display: flex;
  height: 3.25rem;
  padding: 0.75rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 0.25rem;
  @apply w-full;
  border: 1px solid rgba(0, 0, 0, 0.05);
  @apply bg-[#FFF];
}

@media (max-width: 1024px) {

  .card {
    @apply w-[calc(50vw-50px)];
    @apply box-border;
  }
  .card img {
    @apply h-87;
    @apply w-full;

    background-color: #f6f6f6;
  }
  @media (max-width: 480px) {

    .card {
      @apply w-full;
    }
    .card img {
      @apply max-h-80;
      @apply max-w-104;
    }
  }
}
</style>
