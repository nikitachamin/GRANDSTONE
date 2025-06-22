<script setup>
import img1 from '@/assets/img/about/about.png';
</script>


<template>

    <section class="about-section">
        <div class="header">
            <!-- TODO: создать общий глобальный компонент хлебных крошек, который принимает массив элементов. -->
            <div class="bread-crumps">
                <NuxtLink class="bread-crum" to="/">Главная</NuxtLink> /
                <NuxtLink class="bread-crum _active" to="/about">О компании</NuxtLink>
            </div>
        </div>
        <div class="hero">
            <img class="hero__img" :src="img1" alt="Надгробная плита" />

        </div>
        <div class="about-content">
            <div class="title-block">
                <h2 class="about-content__title">Работаем для людей,
                    сохраняем важное.</h2>
            </div>
            <div class='about-content__list' >
                <p class="about-content__text">Наша компания более 16 лет занимается изготовлением и установкой памятников из натурального камня. Мы глубоко осознаём значимость памяти о близких и подходим к своей работе с особым уважением, тактом и ответственностью.</p>
                <p class="about-content__text">Благодаря собственному производству, оснащённому современными технологиями, мы обеспечиваем высокий уровень качества на каждом этапе — от проектирования до монтажа. Используем только проверенные материалы, чтобы создать долговечные и достойные памятники, которые сохранят память на поколения вперёд.</p>
                <p class="about-content__text">Мы ценим доверие наших клиентов и стремимся не просто выполнить заказ, а помочь увековечить светлую память о родных людях. Каждый проект для нас — это не просто работа, а часть большой миссии по сохранению семейных историй и традиций.</p>
             </div>
        </div>
    </section>

</template>


<style lang="scss" scoped>
/** TODO: проверить необходимость использования `@reference`. */
@reference "tailwindcss";

/** TODO: перевести на `@apply`. */

.about-section {
    @apply max-w-360;
    @apply flex;
    @apply flex-col;
    @apply mx-auto;
    @apply mt-12;
    @apply mb-24;

}

.bread-crum {
    color: var(--Black-Color-600, #5D5D5D);
    font-family: "Golos Text";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    /* 175% */
    letter-spacing: -0.01rem;
    text-decoration: none;
}

._active {
    color: var(--Black-Color-950, #000);
}

.header h3 {
    color: #000;
    font-family: "Golos Text";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.25rem;
    /* 150% */
    letter-spacing: 0.00888rem;
    margin: 0;
}

.hero {
    @apply mt-8;
}

.hero__img {
    @apply w-360;
    @apply h-140.5;
}
.about-content{
    @apply flex;
    @apply gap-6;
    @apply mt-12;
}
.title-block{
    @apply w-85.5;
}
.about-content__title{
    color: #000;
    font-family: "Golos Text";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem; /* 160% */
    letter-spacing: -0.00325rem;
    margin: 0;
}
.about-content__list{
    @apply flex;
    @apply flex-col;
}
.about-content__text{
    color: var(--Black-Color-600, #5D5D5D);
    font-family: "Golos Text";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
    letter-spacing: -0.01rem;
    @apply w-177;
}

@media (max-width: 1024px) {
    .about-section{
        @apply mx-8;
    }
    .hero__img {
      @apply w-240;
      @apply h-97.5;
    }

    .about-content{
        @apply flex-col;
        @apply gap-6;
    }
    .title-block{
        @apply w-150;
    }
}

@media (max-width: 480px) {
    .about-section{
        @apply mx-8;
    }
    .hero__img {
      @apply w-104;
      @apply h-65;
    }

    .about-content__text{
        @apply w-104;
       
    }
    .title-block{
        @apply w-150;
    }
}
</style>