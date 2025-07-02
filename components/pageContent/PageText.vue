<script setup lang="ts">
import { PAGE_DATA } from '../../utils/pagedata';
import {computed} from 'vue';

const route = useRoute();

const key = computed(() => route.path.replace(/^\//, ''));

const { data } = useAsyncData(() => {
  return PAGE_DATA[key.value];
});

const title = computed(() => data.value?.title ?? '');
const items = computed(() => data.value?.items ?? []);

</script>

<template>
  <div class="content">
    <div class="title-block">
      <h2 class="content__title" v-html="title">
    
      </h2>
    </div>
    <div class="content__list">
      <p class="content__text" v-for="text in items" v-html="text ">
  
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";

.content {
  @apply flex;
  @apply gap-6;
  @apply mt-12;
}
.title-block {
  @apply w-85.5;
}
.content__title {
  color: #000;
  font-family: 'Golos Text';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem; /* 160% */
  letter-spacing: -0.00325rem;
  margin: 0;
}
.content__list {
  @apply flex;
  @apply flex-col;
  @apply gap-4;
}
.content__text {
  color: var(--Black-Color-600, #5d5d5d);
  font-family: 'Golos Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  letter-spacing: -0.01rem;
  @apply max-w-177;
}
.contacts_list_title{ 
    color: var(--Black-Color-950, #000);
    font-family: "Golos Text";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px; /* 177.778% */
    @apply pb-4;
  }

@media (max-width: 1024px) {
  .content {
    @apply flex-col;
    @apply gap-6;
  }
  .content__text {
    @apply max-w-full;
  }
  .title-block {
    @apply w-150;
  }
}

@media (max-width: 480px) {
  .content__text {
    @apply w-full;
  }
  .title-block {
    @apply w-full;
  }
}
</style>
