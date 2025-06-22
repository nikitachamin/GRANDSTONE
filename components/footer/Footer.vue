<script lang="ts" setup>

interface Emits {
    (e: 'route:change-page'): void
}

const emits = defineEmits<Emits>()

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
]
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
]
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
]
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
    <div class="footer">
        <div class="container">
        <div class="bottom ">
            <div class="heading">
                <div>
                    <h2>GRAND STONE</h2>
                </div>
                <div class="heading_text">
                    <p>Мы гордимся тем, что реализовали работы для клиентов из множества
                        сфер — от стартапов до крупных бизнесов и предприятий.</p>
                </div>
            </div>

           
            <div class="menu-buttons">
                <button class='icon'> <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2389 12.709C14.022 13.323 13.1598 13.8309 12.4722 13.9794C12.0015 14.0794 11.3877 14.1584 9.3195 13.3014C6.9966 12.339 3.771 8.91087 3.771 6.62959C3.771 5.46824 4.4406 4.11592 5.6115 4.11592C6.1749 4.11592 6.2991 4.1269 6.4845 4.57163C6.7014 5.09559 7.2306 6.38651 7.2936 6.51885C7.5537 7.06171 7.02899 7.3795 6.64829 7.85215C6.52679 7.99438 6.3891 8.14822 6.543 8.41289C6.696 8.67217 7.2252 9.53465 8.0028 10.227C9.0072 11.1218 9.8217 11.4075 10.1133 11.5291C10.3302 11.6191 10.5894 11.5981 10.7478 11.4289C10.9485 11.2119 11.1978 10.8519 11.4516 10.4972C11.6307 10.2433 11.8584 10.2116 12.0969 10.3017C12.258 10.3575 14.3055 11.3084 14.3919 11.4605C14.4558 11.5712 14.4558 12.095 14.2389 12.709ZM9.0018 0H8.99729C4.03559 0 0 4.03682 0 9C0 10.968 0.634506 12.7938 1.71361 14.2748L0.592204 17.619L4.05091 16.5138C5.47381 17.4555 7.1721 18 9.0018 18C13.9635 18 18 13.9632 18 9C18 4.03682 13.9635 0 9.0018 0Z" fill="#888888"/>
</svg></span></button>
                <button class='icon'><span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
<path d="M16.4733 0.693376C14.0987 1.67687 3.91677 5.89437 1.1035 7.04384C-0.78321 7.78011 0.321294 8.47045 0.321294 8.47045C0.321294 8.47045 1.93183 9.02261 3.31251 9.43677C4.69299 9.85093 5.42926 9.39084 5.42926 9.39084L11.9177 5.01914C14.2186 3.45454 13.6664 4.74297 13.1141 5.29532C11.9177 6.49188 9.93895 8.37839 8.28229 9.89706C7.54602 10.5413 7.91406 11.0934 8.23636 11.3696C9.43273 12.382 12.7001 14.4529 12.884 14.5909C13.8561 15.2791 15.7683 16.2697 16.0592 14.1767L17.2096 6.95197C17.5778 4.51311 17.9459 2.25817 17.9918 1.61396C18.13 0.0491629 16.4733 0.693376 16.4733 0.693376Z" fill="#888888"/>
</svg></span></button>
                <button class="btn">Заказать звонок</button>
            </div>

        </div>
       <div class="line"></div>
        <div class="app-footer-menu">
            <div class="app-footer-menu__list">
                <h3>Навигация</h3>
                <NuxtLink v-for="(item, index) in navigation" :key="index" :to="item.to"
                    :class="[isActiveItem(item.to) && '_active']" class="app-footer-menu__item"
                    @click="emits('route:change-page')">
                    {{ item.title }}
                </NuxtLink>
            </div>
            <div class="app-footer-menu__list">
                <h3>Каталог</h3>
                <NuxtLink v-for="(item, index) in catalog" :key="index" :to="item.to"
                    :class="[isActiveItem(item.to) && '_active']" class="app-footer-menu__item"
                    @click="emits('route:change-page')">
                    {{ item.title }}
                </NuxtLink>
            </div>
            <div class="app-footer-menu__list">
                <h3>Помощь покупателю</h3>
                <NuxtLink v-for="(item, index) in help" :key="index" :to="item.to"
                    :class="[isActiveItem(item.to) && '_active']" class="app-footer-menu__item"
                    @click="emits('route:change-page')">
                    {{ item.title }}
                </NuxtLink>
            </div>
            <div class="app-footer-menu__list">
                <h3>Контакты</h3>
                <NuxtLink v-for="(item, index) in contacts" :key="index" :to="item.to"
                    :class="[isActiveItem(item.to) && '_active']" class="app-footer-menu__item"
                    @click="emits('route:change-page')">
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
.bottom{
    @apply flex;
    @apply items-center;
    @apply justify-between;
    @apply pt-16;
    @apply mb-8;
    
}
.heading{
    @apply flex;
    @apply items-center;

}
.heading h2{
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
.heading_text{
    @apply ml-24;
    width: 42.25rem;
}
.heading p{
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

}
.line{
    @apply w-full;
    height: 0.06rem;
    background-color: rgba(255, 255, 255, 0.10);
}
.app-footer-menu{
    @apply mt-8;
    @apply mb-16;
    @apply flex;
    @apply justify-around;
}
.app-footer-menu__list{
    @apply flex;
    @apply flex-col;
    @apply gap-4;
    @apply w-84;
   
}
.app-footer-menu__list h3{
    color: #FFF;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.25rem; 
    letter-spacing: 0.00663rem;
}
.app-footer-menu__list a{
    color: var(--Black-Color-400, #888);
    font-family: "Golos Text";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.025rem;
    text-decoration: none;
}
h4{
    color: var(--Black-Color-200, #D1D1D1);
    font-family: "Golos Text";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 171.429% */
    letter-spacing: 0.00519rem;
    padding-bottom: 2rem;
}

@media (max-width: 1024px) {
.footer{
    @apply px-8;
}
.heading{
    @apply flex; 
    @apply items-start;
    @apply flex-col;
    @apply gap-8;
}
.heading_text{
     @apply ml-0;
}
.bottom {
    @apply flex;
    @apply items-start;
    @apply flex-col;
    @apply gap-12;
}
.btn{
     @apply ml-8;
}
.app-footer-menu{
    @apply flex;
    @apply flex-wrap;
}
@media (max-width: 480px){
    .footer{    
     @apply w-104;
     @apply px-8;
     @apply mx-0;
    }
 
    .heading_text{
     @apply w-104;
     
    }
   
}
}
</style>