<script setup lang="ts">
import Card from '../card/Card.vue';

defineProps({
  cardGroup: {
    type: Object,
    required: true,
    validator: (value) => {
      return 'h3' in value && 'data' in value;
    },
  },
});
const openWhatsApp = () => {
  const phone = '79854270852';
  const message = encodeURIComponent('Здравствуйте! У меня вопрос');
  const url = `https://wa.me/${phone}?text=${message}`;

  window.open(url, '_blank');
};
</script>
<template>
  <div>
    <section class="special-offer">
      <div class="heading">
        <div>
          <h3>{{ cardGroup.h3 }}</h3>
        </div>
        <div>
          <NuxtLink to="/katalog"
            >Смотреть все
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M7.74408 15.5892C7.41864 15.2638 7.41864 14.7362 7.74408 14.4107L12.1548 9.99998L7.74408 5.58923C7.41864 5.2638 7.41864 4.73616 7.74408 4.41072C8.06951 4.08529 8.59715 4.08529 8.92259 4.41072L13.9226 9.41072C14.248 9.73616 14.248 10.2638 13.9226 10.5892L8.92259 15.5892C8.59715 15.9147 8.06951 15.9147 7.74408 15.5892Z"
                  fill="#888888"
                /></svg></span
          ></NuxtLink>
        </div>
      </div>
      <div class="offers">
        <Card
          v-for="card in cardGroup.data"
          :key="card.article"
          :cardData="card"
          :src="card.img"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";

.special-offer {
  @apply mt-32;
  @apply w-full;
}

.heading {
  @apply flex;
  @apply justify-between;
  @apply items-center;
  @apply mb-12;
}

.heading h3 {
  color: #000;
  font-family: 'Golos Text';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.25rem;
  letter-spacing: 0.00888rem;
  padding: 0;
  margin: 0;
}

.heading a {
  height: 1.25rem;
  color: var(--Black-Color-950, #000);
  font-family: 'Golos Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.00588rem;
  text-decoration: none;
  @apply flex;
  @apply items-center;
}

.heading span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.offers {
  @apply flex;
  @apply flex-wrap;
  @apply gap-6;
}
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
.offer-card img {
  @apply h-87;
  @apply w-85.5;
  background-color: #f6f6f6;
}

.card-info {
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
  .special-offer {
    @apply mx-0;
    @apply w-full;
    @apply box-border;
    @apply px-8;
  }

  .offers {
    @apply flex-wrap;
    @apply gap-6;
  }
  .offer-card {
    @apply w-[calc(50vw-50px)];
    @apply box-border;
  }
  .offer-card img {
    @apply h-87;
    @apply w-full;

    background-color: #f6f6f6;
  }

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
    .special-offer {
      @apply w-full;

      @apply mx-0;
    }
    .offer-card {
      @apply w-full;
    }
    .offer-card img {
      @apply max-h-80;
      @apply max-w-104;
    }
    .heading {
      @apply min-w-full;
      @apply flex;
      @apply justify-between;
    }
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
