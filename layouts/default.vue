<script lang="ts" setup>


import { Top, Heading } from '@/components/header/';
import { Footer } from '../components/footer/';
import {FormMail} from '../components/form/';
</script>
<template>
   
    <header>
        <div class="heading_wrapper">
          <Heading />
        </div>
        <Top />
     </header>
       <slot/>

      <div class="black-form">
         <FormMail />
     </div>
    <Footer></Footer>

</template>

<style scoped>
@reference "tailwindcss";

.heading_wrapper{
    @apply bg-[#F9F9F9];
    @apply w-full;
    @apply box-border;
    @apply px-8;
}
.black-form{
 @apply py-28;
 @apply bg-[#222];
  
}

@media (max-width: 1024px) {
  .heading_wrapper{
    @apply bg-[#F9F9F9];
    @apply px-8;
  } 
  .black-form{
    
    @apply py-0;  
}
}
</style>