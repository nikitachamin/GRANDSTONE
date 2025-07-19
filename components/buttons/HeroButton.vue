<script setup>
const openWhatsApp = () => {
  const phone = '79854270852'; // Номер в международном формате (без +)
  const message = encodeURIComponent('Здравствуйте! У меня вопрос'); // Опциональное сообщение
  const url = `https://wa.me/${phone}?text=${message}`;

  window.open(url, '_blank'); // Открыть в новой вкладке
};
</script>

<template>
  <button class="app-btn -black" @click="openWhatsApp">
    Рассчитать стоимость
  </button>
</template>

<style scope>
@reference "tailwindcss";

.app-btn {
  @apply flex;
  @apply h-14;
  @apply py-4;
  @apply px-6;
  @apply justify-center;
  @apply items-center;
  @apply rounded-sm;
  @apply cursor-pointer;
}
.app-btn_mobile {
  display: none;
}

.app-btn.-black {
  @apply bg-[#1A1A1A];
  @apply text-[#FFF];
}
@media (max-width: 480px) {
  .app-btn_mobile {
    display: block;
    @apply w-full;
  }
  ._hide {
    display: none;
  }
}
</style>
