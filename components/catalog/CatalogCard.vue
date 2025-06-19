<script setup>
defineProps({
    card: {
    type: Object,
    required: true,
  }
}

);
</script>


<template>
    <NuxtLink :to="card.to" >
        <div class="card">
            <img class="card__image" :src="card.imgSrc" :alt="card.title">
            <h4>{{ card.title }}</h4>
        </div>
    </NuxtLink>
</template>

<style scoped>
a {
    text-decoration: none;
    color: var(--Black-Color-950, #000);
    font-family: "Golos Text";
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem; /* 200% */
    letter-spacing: -0.00263rem;
}
.card {
    
    @apply flex;
    @apply flex-col;
    @apply items-center;
   

    
}
.card__image{
    @apply h-75;
    @apply w-84;
}

@media (max-width: 1024px) {
.card__image{
    @apply h-100;
    @apply w-117;
    background-color: #F0F0F0;
}
@media(max-width: 480px){
   .card__image{
    @apply w-104;
   
}
}
}
@reference "tailwindcss";
</style>