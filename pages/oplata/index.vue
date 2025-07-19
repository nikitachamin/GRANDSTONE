<script setup>
import PageText from '~/components/pageContent/PageText.vue';
import PageCard from '~/components/pageContent/PageCard.vue';
import PageMainSection from '~/components/pageContent/PageMainSection.vue';

const data = [
  {
    numberOfCard: 1,
    title: 'Комфортный размер аванса',
    texts: [
      `
<strong>60% предоплата</strong>
— после согласования проекта и заключения договора`,
      `
<strong>40% остаток</strong>
— оплачивается после приёмки готового памятника, перед установкой`,
    ],
    wide: true,
  },
  {
    numberOfCard: 2,
    title: 'Удобные формы оплаты:',
    texts: [
      `Наличный и безналичный расчёт`,
      `Оплата по счёту для физ. и юр. лиц`,
      `Беспроцентная рассрочка через Тинькофф Банк — быстрое оформление, без скрытых условий и переплат`,
    ],
    wide: true,
  },
];
</script>

<template>
  <section class="payment-section">
    <div class="header">
      <BreadCrumbs />
    </div>
    <HeroImg alt="Терминал для оплаты" />
    <PageMainSection mainTitle="Оплата">
      <PageCard
        v-for="cardData in data"
        :cardData="cardData"
        :key="cardData.title"
      >
        <p>{{ cardData.numberOfCard }}</p>
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
