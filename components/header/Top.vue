<script setup lang="ts">
import { HeroButton } from '@/components/buttons'
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
        to: '/news',
    },
    {
        title: 'Контакты',
        to: '/contacts',
    },
]

const route = useRoute()

/**
 * Проверяет, является ли элемент меню активным на основе текущего маршрута.
 */
function isActiveItem(value: string) {
    return route.path.startsWith(value)
}
const isMenuOpen = ref(false);

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
    // Здесь можно добавить дополнительную логику (например, открытие/закрытие меню)
}
</script>




<template>

    <div class="app-header">
        <div class="container">

        </div>
        <div class="bottom container">
            <div class="name">
                <h2>Grand Stone</h2>
                <p>Производство памятников</p>
            </div>

            <div class="bottom-menu__list">
                <NuxtLink v-for="(item, index) in second_menu" :key="index" :to="item.to"
                    :class="[isActiveItem(item.to) && '_active']" class="bottom-menu__item"
                    @click="emits('route:change-page')">
                    {{ item.title }}
                </NuxtLink>
            </div>
            <div class="menu-buttons">
                <button class='icon-msg'> <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M15.821 14.1211C15.58 14.8033 14.622 15.3677 13.858 15.5327C13.335 15.6437 12.653 15.7316 10.355 14.7793C7.774 13.71 4.19 9.90097 4.19 7.36621C4.19 6.07582 4.934 4.57324 6.235 4.57324C6.861 4.57324 6.999 4.58545 7.205 5.07959C7.446 5.66177 8.034 7.09612 8.104 7.24316C8.393 7.84634 7.80999 8.19945 7.38699 8.72461C7.25199 8.88265 7.099 9.05358 7.27 9.34766C7.44 9.63575 8.028 10.5941 8.892 11.3633C10.008 12.3576 10.913 12.675 11.237 12.8101C11.478 12.9101 11.766 12.8868 11.942 12.6987C12.165 12.4577 12.442 12.0577 12.724 11.6636C12.923 11.3815 13.176 11.3463 13.441 11.4463C13.62 11.5083 15.895 12.5648 15.991 12.7339C16.062 12.8569 16.062 13.4389 15.821 14.1211ZM10.002 0H9.99699C4.48399 0 0 4.48535 0 10C0 12.1867 0.705007 14.2153 1.90401 15.8608L0.658005 19.5767L4.50101 18.3486C6.08201 19.395 7.969 20 10.002 20C15.515 20 20 15.5147 20 10C20 4.48535 15.515 0 10.002 0Z"
                                fill="#4CAF50" />
                        </svg></span></button>
                <button class='icon-msg'><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18"
                            viewBox="0 0 20 18" fill="none">
                            <path
                                d="M18.3037 0.881793C15.6653 1.97457 4.35197 6.66067 1.22611 7.93786C-0.870234 8.75594 0.356993 9.52299 0.356993 9.52299C0.356993 9.52299 2.14648 10.1365 3.68056 10.5967C5.21443 11.0569 6.03251 10.5456 6.03251 10.5456L13.2419 5.6882C15.7984 3.94975 15.1849 5.38134 14.5712 5.99506C13.2419 7.32457 11.0433 9.4207 9.20255 11.1081C8.38447 11.8239 8.7934 12.4374 9.15151 12.7443C10.4808 13.8692 14.1112 16.1701 14.3156 16.3234C15.3957 17.0881 17.5204 18.1888 17.8435 15.8633L19.1218 7.83579C19.5309 5.12594 19.9399 2.62045 19.9909 1.90466C20.1444 0.166 18.3037 0.881793 18.3037 0.881793Z"
                                fill="#1C8ADB" />
                        </svg></span></button>
                <HeroButton class="_hide"/>
                <button class="btn">Заказать звонок</button>
                <button class="mobile-btn"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none">
                            <path
                                d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z"
                                stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></span></button>
                <div class="menu btn2" :class="{ open: isMenuOpen }" @click="toggleMenu" data-menu="2">
                    <div class="icon"></div>
                </div>
            </div>
            <div v-if="isMenuOpen" class="burger-menu">
                <div class="burger-menu__list">
                    <h2>Меню</h2>
                    <NuxtLink v-for="(item, index) in second_menu" :key="index" :to="item.to"
                        :class="[isActiveItem(item.to) && '_active']" class="burger-menu__item"
                        @click="emits('route:change-page')">
                        {{ item.title }}
                    </NuxtLink>
                </div>
                
                <div>
                     <h2>Наши мессенджеры</h2>
                     <div class="burger-buttons">
                    <button class='mobile-icon-msg'> <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M15.821 14.1211C15.58 14.8033 14.622 15.3677 13.858 15.5327C13.335 15.6437 12.653 15.7316 10.355 14.7793C7.774 13.71 4.19 9.90097 4.19 7.36621C4.19 6.07582 4.934 4.57324 6.235 4.57324C6.861 4.57324 6.999 4.58545 7.205 5.07959C7.446 5.66177 8.034 7.09612 8.104 7.24316C8.393 7.84634 7.80999 8.19945 7.38699 8.72461C7.25199 8.88265 7.099 9.05358 7.27 9.34766C7.44 9.63575 8.028 10.5941 8.892 11.3633C10.008 12.3576 10.913 12.675 11.237 12.8101C11.478 12.9101 11.766 12.8868 11.942 12.6987C12.165 12.4577 12.442 12.0577 12.724 11.6636C12.923 11.3815 13.176 11.3463 13.441 11.4463C13.62 11.5083 15.895 12.5648 15.991 12.7339C16.062 12.8569 16.062 13.4389 15.821 14.1211ZM10.002 0H9.99699C4.48399 0 0 4.48535 0 10C0 12.1867 0.705007 14.2153 1.90401 15.8608L0.658005 19.5767L4.50101 18.3486C6.08201 19.395 7.969 20 10.002 20C15.515 20 20 15.5147 20 10C20 4.48535 15.515 0 10.002 0Z"
                                    fill="#4CAF50" />
                            </svg></span></button>
                    <button class='mobile-icon-msg'><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18"
                                viewBox="0 0 20 18" fill="none">
                                <path
                                    d="M18.3037 0.881793C15.6653 1.97457 4.35197 6.66067 1.22611 7.93786C-0.870234 8.75594 0.356993 9.52299 0.356993 9.52299C0.356993 9.52299 2.14648 10.1365 3.68056 10.5967C5.21443 11.0569 6.03251 10.5456 6.03251 10.5456L13.2419 5.6882C15.7984 3.94975 15.1849 5.38134 14.5712 5.99506C13.2419 7.32457 11.0433 9.4207 9.20255 11.1081C8.38447 11.8239 8.7934 12.4374 9.15151 12.7443C10.4808 13.8692 14.1112 16.1701 14.3156 16.3234C15.3957 17.0881 17.5204 18.1888 17.8435 15.8633L19.1218 7.83579C19.5309 5.12594 19.9399 2.62045 19.9909 1.90466C20.1444 0.166 18.3037 0.881793 18.3037 0.881793Z"
                                    fill="#1C8ADB" />
                            </svg></span></button>
                </div>
                 
                </div>
                <div class="burger-btn-container">
                 <HeroButton class="app-btn_mobile"/>
                 <button class="btn burger-btn">Заказать звонок</button>
                 </div>
            </div>
            <div v-if="isMenuOpen" class="overlay"></div>
        </div>

        <slot />
    </div>

</template>



<style lang="scss" scoped>
@reference "tailwindcss";

.container {
    @apply max-w-[90rem];
    @apply mx-auto;
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
    @apply text-[#888]
}

.menu-buttons {
    @apply flex;
    @apply items-center;
    @apply gap-3;
}

.icon-msg {
    @apply rounded-4xl;
    @apply w-12;
    @apply h-12;
    @apply border;
    @apply border-black/5;


}

.btn {
    @apply flex;
    @apply h-14;
    @apply py-4;
    @apply px-6;
    @apply justify-center;
    @apply items-center;
    @apply rounded-sm;

}

.mobile-btn {
    display: none;
}

.burger-menu {
    display: none;

}

@media (max-width: 1024px) {
    .app-header {
        width: 960px;
        @apply mx-8;
        

        position: relative;
        
    }

    .container {
        @apply max-w-full;
    }

    .bottom-menu__list {
        display: none;
    }

    .menu-buttons {
        @apply mr-17;
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
    }

    .bottom {
        @apply mt-6;


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
        content: "";
        top: $top;
    }

    @mixin icon-after($height, $width, $top) {
        transition-duration: 0.5s;
        position: absolute;
        width: $width;
        height: $height;
        background-color: $dark;
        content: "";
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
        @include btn(-30px, 0px);

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
        box-sizing: border-box;
        top: 80px;
        right: 0px;
        z-index: 500;
        @apply w-full;
        display: flex;
        padding: 32px 32px 48px 32px;
        flex-direction: column;
        align-items: flex-start;
        gap: 64px;
        align-self: stretch;
        background-color: #FFF;
        border-top: solid 1px #000;
    }
    .burger-menu h2{
        color: var(--Black-Color-950, #000);
        font-family: "Golos Text";
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
        font-family: "Golos Text";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        letter-spacing: 0.4px;
        text-decoration: none;
    }
    .burger-buttons{
        @apply flex;
        @apply gap-2;
    }
    .mobile-icon-msg{
        display: flex;
        width: 48px;
        height: 48px;
        justify-content: center;
        align-items: center;
        border-radius: 64px;
        border: 1px solid rgba(0, 0, 0, 0.05);
        background: var(--Black-Color-50, #F6F6F6);
    }
    .overlay { 
        position: fixed;
        top: 150px;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5); /* Полупрозрачное затемнение */
        z-index: 98; /* Ниже шапки и меню */
        display: block; /* По умолчанию скрыто */
}

}

@media (max-width: 480px) {
    .app-header {
        width: 416px;
        @apply mx-8;
    }
     .burger-btn{
          display: block;
          @apply w-full;
         
    }
    .burger-btn-container{
        @apply w-full;
        @apply flex;
        @apply flex-col;
        @apply gap-4;
    }
  
}
</style>