<script lang="ts" setup>
import { COMPANY_PHONE } from '#imports';

interface Emits {
  (e: 'route:change-page'): void;
}

const emits = defineEmits<Emits>();

/**
 * Меню навигации с элементами и их маршрутами.
 */
const menu = [
  {
    title: 'Вопросы и ответы',
    to: '/voprosi-i-otveti',
  },

  {
    title: 'Доставка',
    to: '/dostavka',
  },

  {
    title: 'Гарантии',
    to: '/garantii',
  },

  {
    title: 'Оплата',
    to: '/oplata',
  },
];
const route = useRoute();

/**
 * Проверяет, является ли элемент меню активным на основе текущего маршрута.
 */
function isActiveItem(value: string) {
  return route.path.startsWith(value);
}
</script>
<template>
  <div class="heading">
    <div class="heading__info">
      <p>{{ COMPANY_ADDRESS }}</p>
      <div class="tel_num">
        <a href="tel:+74952265171">{{ COMPANY_PHONE }}</a>
      </div>
    </div>

    <div class="app-header-menu">
      <div class="app-header-menu__list">
        <NuxtLink
          v-for="(item, index) in menu"
          :key="index"
          :to="item.to"
          :class="[isActiveItem(item.to) && '_active']"
          class="app-header-menu__item"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";

.heading {
  @apply flex;
  @apply items-center;
  @apply justify-between;
  @apply max-w-[90rem];
  @apply h-12;
  @apply mx-auto;
}
.heading__info {
  @apply flex;
  @apply items-center;
  @apply gap-3;
}
.app-header-menu {
  @apply relative;
}

.app-header-menu__list {
  @apply flex;
  @apply flex-row;
  @apply items-center;
  @apply gap-12;
}
.svg-size {
  @apply w-5 h-5;
}

.app-header-menu__item {
  @apply text-sm;
  @apply font-normal;
  @apply inline-flex;
  @apply items-center;
  @apply gap-0.5;
  @apply leading-6;
  @apply tracking-[0.02188rem];
  @apply no-underline;
  @apply text-[#000];
}

@media (max-width: 1024px) {
  .heading {
    margin: 0;
    @apply w-full;
    @apply justify-center;
    background-color: #f9f9f9;
  }
  .heading__info {
    @apply flex;
    @apply justify-between;
    @apply w-full;
  }

  .app-header-menu {
    display: none;
  }
}

@media (max-width: 480px) {
  .heading {
    @apply w-full;
    background-color: #f9f9f9;
  }
  .heading__info {
    @apply flex;
    @apply justify-between;
    @apply w-full;
  }
  .heading__info a {
    font-size: 14px;
  }
  .heading__info p {
    font-size: 14px;
  }

  .app-header-menu {
    display: none;
  }
}

@media (max-width: 426px) {
  .heading__info a {
    font-size: 12px;
  }
  .heading__info p {
    font-size: 12px;
  }
}
</style>
