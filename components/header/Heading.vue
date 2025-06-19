
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
        to: '/гарантии',
    },

    {
        title: 'Оплата',
        to: '/payment',
    },
    {
        title: 'Помощь',
        to: '/help',
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
                <div> <a>{{ COMPANY_PHONE }}</a></div>
              
            </div>

            <div class="app-header-menu">
                <div class="app-header-menu__list">
                    <NuxtLink v-for="(item, index) in menu" :key="index" :to="item.to"
                        :class="[isActiveItem(item.to) && '_active']" class="app-header-menu__item">
                        <!-- слот перед текстом -->
                        <template v-if="index === 0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <path
                                    d="M9.99996 3.33333C6.31806 3.33333 3.33329 6.3181 3.33329 10C3.33329 13.6819 6.31806 16.6667 9.99996 16.6667C13.6819 16.6667 16.6666 13.6819 16.6666 10C16.6666 6.3181 13.6819 3.33333 9.99996 3.33333ZM1.66663 10C1.66663 5.39763 5.39759 1.66667 9.99996 1.66667C14.6023 1.66667 18.3333 5.39763 18.3333 10C18.3333 14.6024 14.6023 18.3333 9.99996 18.3333C5.39759 18.3333 1.66663 14.6024 1.66663 10Z"
                                    fill="#B0B0B0" />
                                <path
                                    d="M9.99996 11.6667C9.53972 11.6667 9.16663 11.2936 9.16663 10.8333V10C9.16663 9.53976 9.53972 9.16667 9.99996 9.16667C10.4602 9.16667 10.8333 9.53976 10.8333 10V10.8333C10.8333 11.2936 10.4602 11.6667 9.99996 11.6667Z"
                                    fill="#B0B0B0" />
                                <path
                                    d="M8.74996 13.75C8.74996 13.0596 9.3096 12.5 9.99996 12.5C10.6903 12.5 11.25 13.0596 11.25 13.75C11.25 14.4404 10.6903 15 9.99996 15C9.3096 15 8.74996 14.4404 8.74996 13.75Z"
                                    fill="#B0B0B0" />
                                <path
                                    d="M10.3249 6.50948C9.52738 6.4715 8.85862 6.917 8.73862 7.637C8.66296 8.09098 8.2336 8.39766 7.77963 8.322C7.32565 8.24634 7.01897 7.81698 7.09463 7.363C7.3913 5.583 9.01421 4.77851 10.4042 4.8447C11.1162 4.8786 11.8479 5.13416 12.4114 5.66065C12.9888 6.20023 13.3333 6.97314 13.3333 7.91667C13.3333 8.99276 12.9099 9.79076 12.181 10.2767C11.5117 10.7229 10.6912 10.8333 9.99996 10.8333C9.53972 10.8333 9.16663 10.4602 9.16663 10C9.16663 9.53976 9.53972 9.16667 9.99996 9.16667C10.5587 9.16667 10.9882 9.06877 11.2565 8.88996C11.465 8.75091 11.6666 8.50725 11.6666 7.91667C11.6666 7.40186 11.4903 7.08103 11.2735 6.87841C11.0426 6.66272 10.7066 6.52765 10.3249 6.50948Z"
                                    fill="#B0B0B0" />
                            </svg>
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
         width: 416px;
         @apply justify-center;
         background-color: #F9F9F9;
       
    }
    .heading__info{
        @apply flex;
        @apply justify-between;
        width: 416px;
       
    }
 
    .app-header-menu{
        display: none;
    }
}
</style>