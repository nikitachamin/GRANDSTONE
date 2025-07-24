<script lang="ts" setup>
import { Top, Heading } from '@/components/header';
import { Footer } from '../components/footer';
import { FormMail } from '../components/form';
import { ref, provide } from 'vue';

const formRef = ref<HTMLFormElement | null>(null);
const scrollToForm = () => {
  console.log('scrollToForm вызван, formRef:', formRef.value);
  formRef.value?.scrollIntoView({ behavior: 'smooth', block: 'center' });
};
provide('scrollToForm', scrollToForm);
provide('formRef', formRef);
</script>
<template>
  <div>
    <header>
      <div class="heading_wrapper">
        <Heading />
      </div>
      <Top />
    </header>
    <slot />

    <div class="black-form">
      <FormMail />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.heading_wrapper {
  @apply bg-[#F9F9F9];
  @apply w-full;
  @apply px-8;

  @apply box-border;
}
.black-form {
  @apply py-28;
  @apply bg-[#222];
}

@media (max-width: 1024px) {
  .black-form {
    @apply py-0;
  }
}
@media (max-width: 480px) {
  .heading_wrapper {
    @apply bg-[#F9F9F9];
    @apply flex;
    @apply justify-center;
  }
  .black-form {
    @apply py-0;
  }
}
</style>
