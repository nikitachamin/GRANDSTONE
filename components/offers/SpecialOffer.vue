<script setup lang="ts">
defineProps({
  cardGroup: {
    type: Object,
    required: true,
    validator: (value) => {
      return 'h3' in value && 'data' in value
    }
  }
})

</script>
<template>
    <div>
        <section class="special-offer">
            <div class="heading">
                <div>
                    <h3>{{cardGroup.h3}}</h3>
                </div>
                <div>
                    <NuxtLink to="/catalog">Смотреть все <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <path
                                    d="M7.74408 15.5892C7.41864 15.2638 7.41864 14.7362 7.74408 14.4107L12.1548 9.99998L7.74408 5.58923C7.41864 5.2638 7.41864 4.73616 7.74408 4.41072C8.06951 4.08529 8.59715 4.08529 8.92259 4.41072L13.9226 9.41072C14.248 9.73616 14.248 10.2638 13.9226 10.5892L8.92259 15.5892C8.59715 15.9147 8.06951 15.9147 7.74408 15.5892Z"
                                    fill="#888888" />
                            </svg></span></NuxtLink>
                </div>
            </div>
            <div class="offers">
                <div class="offer-card" v-for="card in cardGroup.data" :key="card.id">
                    <img :src="card.img" :alt="card.title">
                    <div class="card-info">
                        <h3>{{ card.title }}</h3>
                        <p>от {{ card.price }}</p>
                        <button>Подробнее</button>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";

.special-offer {
    @apply mt-16;
}

.heading {
    @apply flex;
    @apply justify-between;
    @apply items-center;
    @apply mb-8;
}

.heading h3 {
    color: #000;
    font-family: "Golos Text";
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
    font-family: "Golos Text";
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
    @apply gap-6;

}

.offer-card img {
    @apply h-[21.785rem];
    @apply w-[21.375rem];
    background-color: #F6F6F6;
}

.card-info {
    @apply p-4;
}

.card-info h3 {
    color: #000;
    font-family: "Golos Text";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem;
    /* 160% */
    letter-spacing: -0.00325rem;
}

.card-info p {
    color: #000;
    font-family: "Golos Text";
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

    .special-offer{
        @apply mx-8;
    }

    .offers{
        @apply flex-wrap;
        @apply gap-6;
    }
    .offer-card{
        @apply w-117;
    }
    .offer-card img {
    @apply h-87;
    @apply w-117;
    background-color: #F6F6F6;
}
@media (max-width: 480px){
    .special-offer{    
     @apply max-w-120;
     @apply px-8;
     @apply mx-0;
    }
    .offer-card img {
     @apply h-80;
     @apply w-104;
    }
}
}
</style>