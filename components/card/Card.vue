<script setup lang="ts">
interface Card {
  img?: string;
  article?: string;
  size?: string;
  price: string;
}

const props = defineProps<{ cardData?: Card; src?: string, cardName?: string; }>();

const openWhatsApp = (article) => {
  const phone = '79854270852';
  const message = encodeURIComponent(
    `Здравствуйте! У меня вопрос по товару c артикулом: ${article}`,
  );
  const url = `https://wa.me/${phone}?text=${message}`;

  window.open(url, '_blank');
};
</script>

<template>
  <div class="card">
    <NuxtImg :src="props.src" :alt="cardData.article" />
    <div class="card-info">
      <h2 v-if="cardName">{{ cardName }} {{ cardData.article ? cardData.article : cardData.img }}</h2>
      <p v-else><strong>Артикул: {{ cardData.article ? cardData.article : cardData.img }} </strong></p>
      {{
        cardData.price ? `от ${cardData.price} руб.` : 'Цена по согласованию'
      }}
      <a
        @click.prevent="openWhatsApp(cardData?.article)"
        class="stretched-link"
      ></a>
      <button>Подробнее</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";

.card {
  @apply flex;
  @apply flex-col;
  @apply gap-4;
  position: relative;
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

.card-info h2 {
  color: #000;
  font-family: "Golos Text";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 177.778% */
}

.card-info p {
  color: #000;
  font-family: 'Golos Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem;
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
