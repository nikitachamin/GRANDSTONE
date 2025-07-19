<script setup>
const props = defineProps({
  buttonClass: {
    type: [String, Object, Array], // Поддерживаем разные форматы классов
    default: '', // Значение по умолчанию
  },
  colorful: {
    type: Boolean, // Поддерживаем разные форматы классов
    default: true, // Значение по умолчанию
  },
});

const openTelegram = () => {
  const phone = 'Malinovskay1990';
  const url = `https://t.me/${phone}`;
  window.open(url, '_blank');
};
</script>

<template>
  <button :class="buttonClass" @click="openTelegram">
    <Icon v-if="colorful" name="icons:telegram" size="20" />
    <Icon v-else name="icons:telegram-dark" size="20" />
  </button>
</template>
