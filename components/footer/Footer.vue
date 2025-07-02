<script lang="ts" setup>

import { WhatsAp, Telegram } from '@/components/buttons';
interface Emits {
  (e: 'route:change-page'): void;
}

const emits = defineEmits<Emits>();

/**
 * Меню навигации с элементами и их маршрутами.
 */
const navigation = [
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
    to: '/',
  },
];
const catalog = [
  {
    title: 'Памятники',
    to: '/catalog',
  },

  {
    title: 'Цоколя',
    to: '/',
  },

  {
    title: 'Ограды',
    to: '/about',
  },

  {
    title: 'Надгробные плиты',
    to: '/',
  },
  {
    title: 'Мемориальные комплексы',
    to: '/',
  },
  {
    title: 'Лавочки и скамейки',
    to: '/',
  },
];
const help = [
  {
    title: 'Вопросы и ответы',
    to: '/catalog',
  },

  {
    title: 'Доставка',
    to: '/delivery',
  },

  {
    title: 'Гарантия',
    to: '/about',
  },

  {
    title: 'Оплата',
    to: '/',
  },
  {
    title: 'Помощи',
    to: '/',
  },
];
const contacts = [
  {
    title: 'Почта',
    to: '/catalog',
  },

  {
    title: 'Телефон',
    to: '/',
  },

  {
    title: 'Адрес',
    to: '/about',
  },
];
const route = useRoute();

const isMainPage = computed(() => route.path === '/');
/**
 * Проверяет, является ли элемент меню активным на основе текущего маршрута.
 */
function isActiveItem(value: string) {
  return route.path.startsWith(value);
}
</script>
<template>
  <div class="footer">
    <div class="container">
      <div class="bottom">
        <div class="heading">
           <div class="name" >
            <Icon v-if="isMainPage" name="icons:logo-footer" class="logo" />
            <NuxtLink v-else to="/" @click="isMainPage">
              <Icon name="icons:logo-footer" class="logo" />
            </NuxtLink>    
          </div>
          <div class="heading_text">
            <p>
              Мы гордимся тем, что реализовали работы для клиентов из множества
              сфер — от стартапов до крупных бизнесов и предприятий.
            </p>
          </div>
        </div>

        <div class="menu-buttons">
            <WhatsAp :buttonClass="'icon'" :colorful="false"/>
            <Telegram :buttonClass="'icon'" :colorful="false"/>
          <button class="btn">Заказать звонок</button>
        </div>
      </div>
      <div class="line"></div>
      <div class="app-footer-menu">
        <div class="app-footer-menu__list">
          <h3>Навигация</h3>
          <NuxtLink
            v-for="(item, index) in navigation"
            :key="index"
            :to="item.to"
            :class="[isActiveItem(item.to) && '_active']"
            class="app-footer-menu__item"
            @click="emits('route:change-page')"
          >
            {{ item.title }}
          </NuxtLink>
        </div>
        <div class="app-footer-menu__list">
          <h3>Каталог</h3>
          <NuxtLink
            v-for="(item, index) in catalog"
            :key="index"
            :to="item.to"
            :class="[isActiveItem(item.to) && '_active']"
            class="app-footer-menu__item"
            @click="emits('route:change-page')"
          >
            {{ item.title }}
          </NuxtLink>
        </div>
        <div class="app-footer-menu__list">
          <h3>Помощь покупателю</h3>
          <NuxtLink
            v-for="(item, index) in help"
            :key="index"
            :to="item.to"
            :class="[isActiveItem(item.to) && '_active']"
            class="app-footer-menu__item"
            @click="emits('route:change-page')"
          >
            {{ item.title }}
          </NuxtLink>
        </div>
        <div class="app-footer-menu__list">
          <h3>Контакты</h3>
          <NuxtLink
            v-for="(item, index) in contacts"
            :key="index"
            :to="item.to"
            :class="[isActiveItem(item.to) && '_active']"
            class="app-footer-menu__item"
            @click="emits('route:change-page')"
          >
            {{ item.title }}
          </NuxtLink>
        </div>
      </div>
      <div class="line"></div>
      <h4>Copyright © Grand Stone 2025. Все права защищены.</h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";
.footer {
  @apply bg-[#151515];
}
.container {
  @apply max-w-[90rem];
  @apply mx-auto;
}
.logo {
  @apply w-44;
  @apply h-4.5;
}
.bottom {
  @apply flex;
  @apply items-center;
  @apply justify-between;
  @apply pt-16;
  @apply mb-8;
}
.heading {
  @apply flex;
  @apply items-center;
}
.heading h2 {
  @apply text-[color:var(--White-Color-50,#FFF)];
  @apply [text-stroke:1px_#000];
  @apply font-['Golos_Text'];
  @apply text-2xl;
  @apply not-italic;
  @apply font-semibold;
  @apply leading-[1.625rem];
  @apply tracking-[0.03rem];
  @apply uppercase;
}
.heading_text {
  @apply ml-24;
  width: 42.25rem;
}
.heading p {
  @apply text-[#888];
}
.menu-buttons {
  @apply flex;
  @apply items-center;
  @apply gap-3;
}

.icon {
  @apply rounded-4xl;
  @apply w-12;
  @apply h-12;
  @apply border;
  @apply border-black/5;
  @apply bg-[#3D3D3D];
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
  @apply bg-[rgba(255,255,255,0.10)];
  @apply text-[#FFF];
  @apply cursor-pointer;
}
.line {
  @apply w-full;
  height: 0.06rem;
  background-color: rgba(255, 255, 255, 0.1);
}
.app-footer-menu {
  @apply mt-8;
  @apply mb-16;
  @apply flex;
  @apply justify-around;
}
.app-footer-menu__list {
  @apply flex;
  @apply flex-col;
  @apply gap-4;
  @apply w-84;
}
.app-footer-menu__list h3 {
  color: #fff;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.25rem;
  letter-spacing: 0.00663rem;
}
.app-footer-menu__list a {
  color: var(--Black-Color-400, #888);
  font-family: 'Golos Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
  letter-spacing: 0.025rem;
  text-decoration: none;
}
h4 {
  color: var(--Black-Color-200, #d1d1d1);
  font-family: 'Golos Text';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
  letter-spacing: 0.00519rem;
  padding-bottom: 2rem;
}

@media (max-width: 1024px) {
  .footer {
    @apply px-8;
  }
  .heading {
    @apply flex;
    @apply items-start;
    @apply flex-col;
    @apply gap-8;
  }
  .heading_text {
    @apply ml-0;
    @apply w-full;
  }
  .bottom {
    @apply flex;
    @apply items-start;
    @apply flex-col;
    @apply gap-12;
  }
  .btn {
    @apply ml-8;
  }
  .app-footer-menu {
    @apply flex;
    @apply flex-wrap;
  }
  @media (max-width: 480px) {
    .footer {
      @apply w-full;
      @apply px-8;
      @apply mx-0;
      @apply box-border;
    }

    .heading_text {
      @apply w-full;
    }
  }
}
</style>
