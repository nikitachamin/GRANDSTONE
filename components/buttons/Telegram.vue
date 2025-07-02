<script setup>
const props = defineProps({
  buttonClass: {
    type: [String, Object, Array], // Поддерживаем разные форматы классов
    default: '' // Значение по умолчанию
  },
  colorful:{
    type: Boolean, // Поддерживаем разные форматы классов
    default: true // Значение по умолчанию
  }, 
});
const openTelegram = () => {
  const phone = '79109725858';
  const message = encodeURIComponent('Здравствуйте!');
  
  // Для мобильных используем deep link, для десктопа - web
  const url = /Android|iPhone|iPad/i.test(navigator.userAgent)
    ? `tg://resolve?phone=${phone}&text=${message}` // Deep link
    : `https://t.me/+${phone}?text=${message}`; // Web fallback
  
  window.open(url, '_blank');
};
</script>

<template>
    <button :class="buttonClass" @click="openTelegram">
           <Icon v-if="colorful" name="icons:telegram" size="20"  />
           <Icon v-else name="icons:telegram-dark" size="20"  />
    </button>
</template>