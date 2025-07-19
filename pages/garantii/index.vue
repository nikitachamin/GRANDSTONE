<script setup>
import PageText from '~/components/pageContent/PageText.vue';
import PageCard from '~/components/pageContent/PageCard.vue';
import PageMainSection from '~/components/pageContent/PageMainSection.vue';

const data = [
  {
    numberOfCard: 1,
    title: 'Устойчивость конструкции',
    texts: [ `Памятник надёжно выдерживает любые нагрузки и сохраняет форму`,`Основа тщательно подготавливается для дополнительной стабильности.`
    ],
  },
  {
    numberOfCard: 2,
    title: 'Целостность и прочность камня',
    texts: [`Используем гранит повышенной прочности без скрытых дефектов.`,`Камень устойчив к истиранию и не поддаётся коррозии.`],
  },
  {
    numberOfCard: 3,
    title: 'Качество монтажа и герметизации',
    texts: [`Профессиональная установка исключает перекосы и повреждения.`,`Герметизация предотвращает проникновение воды внутрь памятника.`],
  },
  {
    numberOfCard: 4,
    title: 'Сохранность декоративных элементов',
    texts: [`Декор крепится долговечными способами и не изменяет вид под действием солнца и дождя.`,`Гравировка и изображения остаются чёткими долгие годы.`],
  },
];
</script>

<template>
  <section class="payment-section">
    <div class="header">
      <BreadCrumbs />
    </div>
    <HeroImg alt="Терминал для оплаты" />
    <PageMainSection mainTitle="Мы гарантируем:">
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
