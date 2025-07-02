<script setup lang="ts">
interface PageCard {
    Image?: string,
    numberOfCard?: number,
    title: string,
    texts: string [],
    wide?: boolean,
    delivery?: boolean,
}

const props = defineProps<{cardData:PageCard}>();
const title = props.cardData.title;
const items = props.cardData.texts;


</script>



<template>
     <div class="page-card" :class="[{'_wide' : props.cardData.wide}, {'_half': props.cardData.delivery}]">
          <div class="page-card__heading" :class="{'_col' : props.cardData.delivery}">
            <div class="page-card__number"><slot/></div>
            <h3 class="page-card__title">{{ title }}</h3>
          </div>
          <div class="page-card__ul">
            <li v-for="text in items" v-html="text"></li>
         
          </div>
        </div>
</template>

<style>
@reference "tailwindcss";
.page-card {
  display: flex;
  @apply p-6;
  flex-direction: column;
  align-items: flex-start;
  @apply gap-6;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 1px solid var(--Black-Color-100, #e7e7e7);
  background: #fff;
  @apply max-w-116;
  box-sizing: border-box;
  min-height: 17.5rem;
}
.page-card__heading {
  @apply flex;
  @apply gap-3;
  @apply items-center;
}
._col{
    @apply flex-col;
    @apply items-start;
  

}
.page-card__number {
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  aspect-ratio: 1/1;
  border-radius: 0.5rem;
  background: #f4f4f4;
}
.page-card__number p {
  color: #000;
  font-family: 'Golos Text';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.25rem; /* 180% */
  letter-spacing: 0.00738rem;
}
.page-card__ul {
 
  list-style-type: none;

}
.page-card__ul li {
  color: var(--Black-Color-600, #5d5d5d);
  font-family: 'Golos Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  letter-spacing: -0.01rem;

}

._wide {
  @apply min-w-177;
}

@media (max-width: 1024px) {


  .page-card {
    @apply min-w-full;
    @apply w-full;
  }
  ._half{
      
     min-width: calc(50vw - 45px);

  }
  ._wide {
    @apply min-w-full;
  }
}
@media (max-width: 480px) {
  .page-card {
    @apply w-full;
  }
}
</style>