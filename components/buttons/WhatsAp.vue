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
const openWhatsApp = () => {
  const phone = '79109725858'; // Номер в международном формате (без +)
  const message = encodeURIComponent('Здравствуйте! У меня вопрос'); // Опциональное сообщение
  const url = `https://wa.me/${phone}?text=${message}`;
  
  window.open(url, '_blank'); // Открыть в новой вкладке
};
</script>

<template>
    <button :class="buttonClass" @click="openWhatsApp">
           <Icon v-if="colorful" name="icons:whatsap" size="20"  />
           <Icon v-else name="icons:whatsap-dark" size="20"  />

    </button>
</template>