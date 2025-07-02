<script setup lang="ts">
import { HeroButton } from '@/components/buttons';
import { WhatsAp, Telegram } from '@/components/buttons';

import { useScrollLock } from '@vueuse/core'
import { ref, onMounted } from 'vue'

const isLocked = ref(false)
let lockScroll = ref(null)

onMounted(() => {
  // Инициализация только на клиенте
  lockScroll = useScrollLock(document.body)
  lockScroll.value = isLocked.value
})

const toggleLock = () => {
  isLocked.value = !isLocked.value
  if (lockScroll) lockScroll.value = isLocked.value
}

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
    to: '/FAQ',
  },

  {
    title: 'Доставка',
    to: '/delivery',
  },

  {
    title: 'Гарантии',
    to: '/',
  },

  {
    title: 'Оплата',
    to: '/',
  },
  {
    title: 'Помощь',
    to: '/',
  },
];

const second_menu = [
  {
    title: 'Каталог',
    to: '/catalog',
  },

  {
    title: 'Установка',
    to: '/installation',
  },

  {
    title: 'О компании',
    to: '/about',
  },

  {
    title: 'Новости',
    to: '/',
  },
  {
    title: 'Контакты',
    to: '/contacts',
  },
];




const route = useRoute();

const isMainPage = computed(() => route.path === '/');

function isActiveItem(value: string) {
  return route.path.startsWith(value);
}
const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
   toggleLock(); 
 
}



</script>

<template>
  <div class="app-header">
    <div class="bottom container" >
      <div class="name" >
        <Icon v-if="isMainPage" name="icons:logo-head" class="logo" />
        <NuxtLink v-else to="/" @click="isMainPage">
          <Icon name="icons:logo-head" class="logo" />
        </NuxtLink>    
      </div>

      <div class="bottom-menu__list">
        <NuxtLink
          v-for="(item, index) in second_menu"
          :key="index"
          :to="item.to"
          :class="[isActiveItem(item.to) && '_active']"
          class="bottom-menu__item"
          @click="emits('route:change-page')"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
      <div class="menu-buttons">
        <WhatsAp :buttonClass="'icon-msg'"/>
        <Telegram :buttonClass="'icon-msg'"/>
        <HeroButton class="_hide" />
        <button class="btn">Заказать звонок</button>
        <button class="mobile-btn">
           <Icon name="icons:phone" size="24" />
        </button>
        <div
          class="menu btn2"
          :class="{ open: isMenuOpen }"
          @click="toggleMenu"
          data-menu="2"
        >
          <div class="icon"></div>
        </div>
      </div>
  
    </div>
        <div v-if="isMenuOpen" class="burger-menu" v-scroll-lock="isLocked" >
        <div class="burger-menu__list">
          <h2>Меню</h2>
          <NuxtLink
            v-for="(item, index) in second_menu"
            :key="index"
            :to="item.to"
            :class="[isActiveItem(item.to) && '_active']"
            class="burger-menu__item"
            @click="emits('route:change-page')"
          >
            {{ item.title }}
          </NuxtLink>
        </div>

        <div>
          <h2>Наши мессенджеры</h2>
          <div class="burger-buttons">
             <WhatsAp :buttonClass="'mobile-icon-msg'"/>
             <Telegram :buttonClass="'mobile-icon-msg'"/>
          </div>
        </div>
        <div class="burger-btn-container">
          <HeroButton class="app-btn_mobile" />
          <button class="btn burger-btn">Заказать звонок</button>
        </div>
      </div>
      <div v-if="isMenuOpen" class="overlay"></div>

    <slot />
  </div>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";

.container {
  @apply max-w-[90rem];
  @apply mx-auto;
}
.logo {
  @apply w-44;
  @apply h-9;
}
.bottom {
  @apply flex;
  @apply items-center;
  @apply justify-between;
  @apply mt-10;
}

.bottom-menu__list {
  @apply flex;
  @apply flex-row;
  @apply items-center;
  @apply gap-7.5;
}

.bottom-menu__item {
  @apply font-normal;
  @apply leading-6;
  @apply tracking-[0.02188rem];
  @apply no-underline;
  @apply text-[#888];
}

.menu-buttons {
  @apply flex;
  @apply items-center;
  @apply gap-3;
}

.icon-msg {
  @apply flex;
  @apply w-12;
  @apply h-12;
  @apply justify-center;
  @apply items-center;
  @apply rounded-4xl;
  @apply w-12;
  @apply h-12;
  @apply border;
  @apply border-black/5;
  @apply bg-[#F6F6F6];
  @apply cursor-pointer;
}

.btn {
  @apply flex;
  @apply h-14;
  @apply py-4;
  @apply px-6;
  @apply justify-center;
  @apply items-center;
  @apply rounded-sm;
  @apply cursor-pointer;
}

.mobile-btn {
  display: none;
}

.burger-menu {
  display: none;
}

@media (max-width: 1024px) {
  .app-header {
    @apply w-full;
    @apply px-8;
    @apply box-border;
  }

  .container {
    @apply w-full;
  }

  .bottom-menu__list {
    display: none;
  }

  .menu-buttons {
    @apply mr-12;
  }

  .icon-msg {
    display: none;
  }

  .btn {
    display: none;
  }

  .mobile-btn {
    display: block;
    @apply flex;
    @apply w-14;
    @apply h-14;
    @apply p-4;
    @apply justify-center;
    @apply items-center;
    @apply cursor-pointer;
  }

  .bottom {
    @apply mt-6;
    position: relative;
  }

  $dark: #212121;
  $light: #efefef;
  $color: #b3e5fc;

  @mixin btn($right, $top) {
    position: absolute;
    width: 60px;
    height: 60px;
    top: $top;
    right: $right;
    transition-duration: 0.5s;
  }

  @mixin icon($height, $width) {
    transition-duration: 0.5s;
    position: absolute;
    height: $height;
    width: $width;
    top: 30px;
    background-color: $dark;
  }

  @mixin icon-before($height, $width, $top) {
    transition-duration: 0.5s;
    position: absolute;
    width: $width;
    height: $height;
    background-color: $dark;
    content: '';
    top: $top;
  }

  @mixin icon-after($height, $width, $top) {
    transition-duration: 0.5s;
    position: absolute;
    width: $width;
    height: $height;
    background-color: $dark;
    content: '';
    top: $top;
  }

  @mixin icon-circle($height, $width) {
    transition-duration: 0.5s;
    position: absolute;
    height: $height;
    width: $width;
    top: 2px;
    border-radius: 100%;
    background: transparent;
    border: 4px solid black;
    left: -15px;
  }

  .btn2 {
    @include btn(0px, 0px);

    .icon {
      @include icon(3px, 24px);

      &:before {
        @include icon-before(3px, 24px, -10px);
      }

      &:after {
        @include icon-after(3px, 24px, 10px);
      }
    }

    &.open {
      .icon {
        transition-duration: 0.5s;
        background: transparent;

        &:before {
          transform: rotateZ(45deg) scaleX(1.25) translate(0px, 15px);
        }

        &:after {
          transform: rotateZ(-45deg) scaleX(1.25) translate(-1px, -14px);
        }
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  .burger-menu {
    position: absolute;

    top: 140px;
    right: 0px;
    z-index: 500;
    @apply w-full;
    @apply mx-auto;
    @apply box-border;
    display: flex;
    padding: 32px 32px 48px 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 64px;
    align-self: stretch;
    background-color: #fff;
    border-top: solid 1px #000;
  }
  .burger-menu h2 {
    color: var(--Black-Color-950, #000);
    font-family: 'Golos Text';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
    letter-spacing: 0.45px;
  }

  .burger-menu__list {
    @apply flex;
    @apply flex-col;
    @apply gap-6;
  }
  .burger-menu__item {
    color: var(--Black-Color-400, #888);
    font-family: 'Golos Text';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.4px;
    text-decoration: none;
  }
  .burger-buttons {
    @apply flex;
    @apply gap-2;
    @apply pt-4;
  }
  .mobile-icon-msg {
    display: flex;
    width: 48px;
    height: 48px;
    justify-content: center;
    align-items: center;
    border-radius: 64px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: var(--Black-Color-50, #f6f6f6);
  }
  .overlay {
    position: fixed;
    @apply w-full;
    top: 200px;
    left: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Полупрозрачное затемнение */
    z-index: 98; /* Ниже шапки и меню */
    display: block; /* По умолчанию скрыто */
  }
  .menu {
    @apply w-7.5;
    right: 0px;
  }
}

@media (max-width: 480px) {
  .app-header {
    @apply flex;
    @apply justify-center;
    @apply w-full;
    @apply px-8;
    @apply box-border;
  }
  .burger-btn {
    display: block;
    @apply w-full;
  }
  .burger-btn-container {
    @apply w-full;
    @apply flex;
    @apply flex-col;
    @apply gap-4;
  }
  .menu-buttons {
    @apply mr-15;
  }

  .burger-menu {
    @apply w-full;
  }
}
</style>
