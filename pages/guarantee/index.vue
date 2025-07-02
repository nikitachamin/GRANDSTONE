<script setup>
import PageText from '~/components/pageContent/PageText.vue';
import PageCard from '~/components/pageContent/PageCard.vue';
import PageMainSection from '~/components/pageContent/PageMainSection.vue';

const data = [{
 numberOfCard: 1,
 title:'Устойчивость конструкции',
 texts: [`
` ],
},
{
 numberOfCard: 2,
 title:'Целостность и прочность камня',
 texts: [ ``],

},
{
 numberOfCard: 3,
 title:'Качество монтажа и герметизации',
 texts: [ ``],

},
{
 numberOfCard: 4,
 title:'Сохранность декоративных элементов',
 texts: [ ``],

},
]

</script>

<template>
  <section class="payment-section">
    <div class="header">
      <BreadCrumbs />
    </div>
    <HeroImg alt="Терминал для оплаты" />
    <PageMainSection mainTitle="Мы гарантируем:">
         <PageCard v-for="cardData in data" :cardData="cardData" :key="cardData.title"> 
             <p>{{cardData.numberOfCard}}</p>
        </PageCard>
    </PageMainSection>
    <PageText />
  </section>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";



.payment-section {
  @apply max-w-360;
  @apply flex;
  @apply flex-col;
  @apply mx-auto;
  @apply mt-12;
  @apply mb-24;
}


@media (max-width: 1024px) {
  .payment-section {
    @apply mx-0;
    @apply px-8;
    @apply w-full;
    @apply box-border;
  }
}
</style>