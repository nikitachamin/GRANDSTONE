
<script lang="ts" setup>

interface Emits {
    (e: 'route:change-page'): void
}

const emits = defineEmits<Emits>()

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
]
const route = useRoute()

/**
 * Проверяет, является ли элемент меню активным на основе текущего маршрута.
 */
function isActiveItem(value: string) {
    return route.path.startsWith(value)
}
</script>
<template>
<div class="heading">
            <div class="heading__info">
                <p>{{ COMPANY_ADDRESS }}</p>
                <div class="tel_num"> <a>{{ COMPANY_PHONE }}</a></div>
              
            </div>

            <div class="app-header-menu">
                  
                <div class="app-header-menu__list">
                    <NuxtLink v-for="(item, index) in menu" :key="index" :to="item.to"
                        :class="[isActiveItem(item.to) && '_active']" class="app-header-menu__item">
                        <!-- слот перед текстом -->
                        <template v-if="index === 0">
                            <Icon name="icons:question" class="svg-size"/>
                        </template>
                        <template v-if="index === menu.length - 1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <path
                                    d="M4.4107 7.74408C4.73614 7.41864 5.26378 7.41864 5.58922 7.74408L9.99996 12.1548L14.4107 7.74408C14.7361 7.41864 15.2638 7.41864 15.5892 7.74408C15.9147 8.06951 15.9147 8.59715 15.5892 8.92259L10.5892 13.9226C10.2638 14.248 9.73614 14.248 9.4107 13.9226L4.4107 8.92259C4.08527 8.59715 4.08527 8.06951 4.4107 7.74408Z"
                                    fill="#B0B0B0" />
                            </svg>
                        </template>
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
.svg-size{
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
    @apply text-[#000]
}

@media (max-width: 1024px) {
    .heading{
         margin: 0;
         width: 960px;
         @apply justify-center;
         background-color: #F9F9F9;
       
    }
    .heading__info{
        @apply flex;
        @apply justify-between;
        width: 960px;
       
    }
 
    .app-header-menu{
        display: none;
    }
}

@media (max-width: 1024px) {
    .heading{
         margin: 0;
         max-width: 416px;
         @apply justify-center;
         background-color: #F9F9F9;
       
    }
    .heading__info{
        @apply px-4;
        @apply flex;
        @apply justify-between;
        max-width: 416px;
       
       
    }
    .heading__info a{
        font-size: 14px;
    }
 
    .app-header-menu{
        display: none;
    }

}
</style>