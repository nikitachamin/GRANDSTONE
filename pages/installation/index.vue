<script setup>

import PageCard from '~/components/pageContent/PageCard.vue';
import PageMainSection from '~/components/pageContent/PageMainSection.vue';
import PageText from '~/components/pageContent/PageText.vue';
const data = [{
 numberOfCard: 1,
 title:'Подготовка и согласование',
 texts: ['Подписание договора, выбор места установки',`Получение необходимых разрешений и согласование с администрацией
              кладбища (если требуется)`,`Подготовка технической документации` ]
},
{
 numberOfCard: 2,
 title:'Доставка памятника',
 texts: [`Аккуратная транспортировка изделия с нашего производства на место
              установки`,
              `Использование специализированного транспорта и упаковки
              для предотвращения повреждений` ]
},
{
 numberOfCard: 3,
 title:'Подготовка фундамента',
 texts: [`Выемка грунта, установка армированного основания`,
              `Монтаж бетонной плиты (при необходимости) с учётом типа почвы
              и рельефа`,`Гарантия надёжности и устойчивости конструкции на долгие годы` ]
},
{
 numberOfCard: 4,
 title:'Монтаж памятника и элементов комплекса',
 texts: [`Подписание договора, выбор места установки`,
              `Получение необходимых разрешений и согласование с администрацией
              кладбища (если требуется)`,`Подготовка технической документации` ],
 wide : true,
},
{
 numberOfCard: 5,
 title:'Завершающие работы и уборка',
 texts: [`Подписание договора, выбор места установки`,
              `Получение необходимых разрешений и согласование с администрацией
              кладбища (если требуется)`,`Подготовка технической документации` ],
 wide : true,
},]
</script>

  

<template>
  <section class="installation-section">
    <div class="header">
      <BreadCrumbs />
    </div>
    <HeroImg alt="Пример установки" />
       <PageMainSection mainTitle="Процесс установки">
          <PageCard v-for="cardData in data" :cardData="cardData" :key="cardData.title" >
           <p>{{cardData.numberOfCard}}</p>
        </PageCard>
      </PageMainSection>
    <PageText />
  </section>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";

.installation-section {
  @apply max-w-360;
  @apply flex;
  @apply flex-col;
  @apply mx-auto;
  @apply mt-12;
  @apply mb-24;
}


@media (max-width: 1024px) {
  .installation-section {
    @apply mx-0;
    @apply px-8;
  }

}

</style>
