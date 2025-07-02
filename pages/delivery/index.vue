<script setup>
import PageText from '~/components/pageContent/PageText.vue';
import PageCard from '~/components/pageContent/PageCard.vue';
import PageMainSection from '~/components/pageContent/PageMainSection.vue';

const data = [{
 Image: 'icons:delivery1',
 title:'Надёжная упаковка',
 texts: [`Каждое изделие упаковывается с учётом веса, формы и особенностей материала, чтобы исключить сколы, трещины и повреждения в пути` ],
 delivery: true,
},
{
 Image: 'icons:delivery2',
 title:'Погрузка и разгрузка опытными специалистами',
 texts: [`Работы выполняют специалисты с использованием спецтехники, что обеспечивает аккуратную и безопасную доставку.` ],
delivery: true,
},
{
Image: 'icons:delivery3',
 title:'Страхование всех этапов доставки',
 texts: [`Мы страхуем груз от момента погрузки до установки, чтобы в случае непредвиденных ситуаций все расходы взяли на себя.` ],
delivery: true,
},
{
 Image: 'icons:delivery4',
 title:'Доставка точно в оговорённый срок',
 texts: [`Доставляем памятники в строго согласованный день и время, учитывая график кладбища и пожелания клиента.` ],
 delivery: true,
},
]

</script>

<template>
  <section class="delivery-section">
    <div class="header">
      <BreadCrumbs />
    </div>
    <HeroImg alt="Примеры доставки" />
    <PageMainSection mainTitle="Особенности нашей доставки">
         <PageCard v-for="cardData in data" :cardData="cardData" :key="cardData.title"> 
            <Icon :name="cardData.Image"  size="24"  />
        </PageCard>
    </PageMainSection>
    <PageText />
  </section>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";



.delivery-section {
  @apply max-w-360;
  @apply flex;
  @apply flex-col;
  @apply mx-auto;
  @apply mt-12;
  @apply mb-24;
}


@media (max-width: 1024px) {
  .delivery-section {
    @apply mx-0;
    @apply px-8;
    @apply w-full;
    @apply box-border;
  }
}
</style>
