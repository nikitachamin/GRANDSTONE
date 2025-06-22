<script setup>
import img1 from '@/assets/img/delivery/delivery.png';

/** TODO: исправить нейминги классов, `delivery-lvl` - слишком абстрактно и не понятно. */
</script>


<template>

    <section class="delivery-section">
        <div class="header">
            <!-- TODO: создать общий глобальный компонент хлебных крошек, который принимает массив элементов. -->
            <div class="bread-crumps">
                <NuxtLink class="bread-crum" to="/">Главная</NuxtLink> /
                <NuxtLink class="bread-crum _active" to="/delivery">Доставка</NuxtLink>
            </div>
        </div>
        <div class="hero">
            <img class="hero__img" :src="img1" alt="Надгробная плита" />

        </div>
        <div class="delivery-delivery">
            <div class="delivery-delivery__title">
                <h3>Особенности нашей доставки</h3>
            </div>
            <div class="delivery-lvls">
                <div class="delivery-lvl">
                    <div class="delivery-lvl__heading">
                        <!-- TODO: отказаться от использования SVG напрямую, использовать библиотеку. -->
                        <div class=delivery-lvl__number> <span><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M10.5 16C10.5 15.6022 10.658 15.2206 10.9393 14.9393C11.2206 14.658 11.6022 14.5 12 14.5C12.3978 14.5 12.7794 14.658 13.0607 14.9393C13.342 15.2206 13.5 15.6022 13.5 16C13.5 16.3978 13.342 16.7794 13.0607 17.0607C12.7794 17.342 12.3978 17.5 12 17.5C11.6022 17.5 11.2206 17.342 10.9393 17.0607C10.658 16.7794 10.5 16.3978 10.5 16Z"
                                        fill="black" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7.62104 10.597L7.30504 7.75799C7.26496 7.39409 7.26496 7.02689 7.30504 6.66299L7.32804 6.45799C7.45629 5.30887 8.00362 4.24735 8.86537 3.47643C9.72711 2.70551 10.8428 2.2793 11.999 2.2793C13.1553 2.2793 14.271 2.70551 15.1327 3.47643C15.9945 4.24735 16.5418 5.30887 16.67 6.45799L16.693 6.66299C16.733 7.02766 16.733 7.39266 16.693 7.75799L16.377 10.598L17.064 10.652C17.5902 10.6938 18.0871 10.9108 18.4754 11.2683C18.8637 11.6258 19.1209 12.1031 19.206 12.624C19.572 14.8598 19.572 17.1402 19.206 19.376C19.1209 19.8969 18.8637 20.3742 18.4754 20.7317C18.0871 21.0891 17.5902 21.3061 17.064 21.348L15.568 21.468C13.192 21.658 10.806 21.658 8.43004 21.468L6.93404 21.348C6.40792 21.3061 5.911 21.0891 5.52271 20.7317C5.13441 20.3742 4.87716 19.8969 4.79204 19.376C4.42609 17.1402 4.42609 14.8598 4.79204 12.624C4.87716 12.1031 5.13441 11.6258 5.52271 11.2683C5.911 10.9108 6.40792 10.6938 6.93404 10.652L7.62104 10.597ZM11.625 3.79999C12.0441 3.75074 12.4688 3.78485 12.8746 3.90037C13.2805 4.01588 13.6595 4.21053 13.9898 4.47309C14.3201 4.73565 14.5952 5.06095 14.7993 5.43026C15.0034 5.79958 15.1325 6.20561 15.179 6.62499L15.202 6.82999C15.23 7.08399 15.23 7.33866 15.202 7.59399L14.881 10.484C12.9617 10.3608 11.0364 10.3608 9.11704 10.484L8.79704 7.59399C8.76917 7.34009 8.76917 7.0839 8.79704 6.82999L8.81904 6.62499C8.89881 5.90635 9.2196 5.23591 9.72915 4.72291C10.2387 4.20991 10.907 3.8846 11.625 3.79999ZM15.449 12.029C13.1527 11.8459 10.8454 11.8459 8.54904 12.029L7.05404 12.149C6.86201 12.164 6.68055 12.2429 6.53876 12.3733C6.39697 12.5037 6.30304 12.6779 6.27204 12.868C5.93251 14.9429 5.93251 17.0591 6.27204 19.134C6.30284 19.3243 6.39667 19.4987 6.53849 19.6293C6.6803 19.7598 6.86186 19.839 7.05404 19.854L8.55004 19.974C10.846 20.157 13.152 20.157 15.449 19.974L16.945 19.854C17.137 19.8388 17.3184 19.7595 17.46 19.629C17.6016 19.4984 17.6953 19.3241 17.726 19.134C18.0656 17.0591 18.0656 14.9429 17.726 12.868C17.6953 12.6779 17.6016 12.5035 17.46 12.373C17.3184 12.2424 17.137 12.1632 16.945 12.148L15.449 12.029Z"
                                        fill="black" />
                                </svg></span></div>

                    </div>
                    <div class="delivery-lvl__title-block">
                        <h3 class="delivery-lvl__title">Надёжная упаковка</h3>
                    </div>

                    <div class="delivery-lvl__ul">
                        <p>Каждое изделие упаковывается с учётом веса, формы и особенностей материала, чтобы исключить
                            сколы, трещины и повреждения в пути.</p>
                    </div>
                </div>
                <div class="delivery-lvl">
                    <div class="delivery-lvl__heading">
                        <!-- TODO: отказаться от использования SVG напрямую, использовать библиотеку. -->
                        <div class=delivery-lvl__number> <span><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M8 19C8.53043 19 9.03914 18.7893 9.41421 18.4142C9.78929 18.0391 10 17.5304 10 17C10 16.4696 9.78929 15.9609 9.41421 15.5858C9.03914 15.2107 8.53043 15 8 15C7.46957 15 6.96086 15.2107 6.58579 15.5858C6.21071 15.9609 6 16.4696 6 17C6 17.5304 6.21071 18.0391 6.58579 18.4142C6.96086 18.7893 7.46957 19 8 19ZM18 19C18.5304 19 19.0391 18.7893 19.4142 18.4142C19.7893 18.0391 20 17.5304 20 17C20 16.4696 19.7893 15.9609 19.4142 15.5858C19.0391 15.2107 18.5304 15 18 15C17.4696 15 16.9609 15.2107 16.5858 15.5858C16.2107 15.9609 16 16.4696 16 17C16 17.5304 16.2107 18.0391 16.5858 18.4142C16.9609 18.7893 17.4696 19 18 19Z"
                                        stroke="black" stroke-width="1.5" stroke-miterlimit="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10.05 17H15V6.6C15 6.44087 14.9368 6.28826 14.8243 6.17574C14.7117 6.06321 14.5591 6 14.4 6H1M5.65 17H3.6C3.52121 17 3.44319 16.9845 3.37039 16.9543C3.29759 16.9242 3.23145 16.88 3.17574 16.8243C3.12002 16.7685 3.07583 16.7024 3.04567 16.6296C3.01552 16.5568 3 16.4788 3 16.4V11.5"
                                        stroke="black" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M2 9H6" stroke="black" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M15 9H20.61C20.726 9.00003 20.8395 9.03367 20.9367 9.09685C21.034 9.16003 21.1108 9.25005 21.158 9.356L22.948 13.384C22.9821 13.4605 22.9998 13.5433 23 13.627V16.4C23 16.4788 22.9845 16.5568 22.9543 16.6296C22.9242 16.7024 22.88 16.7685 22.8243 16.8243C22.7685 16.88 22.7024 16.9242 22.6296 16.9543C22.5568 16.9845 22.4788 17 22.4 17H20.5M15 17H16"
                                        stroke="black" stroke-width="1.5" stroke-linecap="round" />
                                </svg></span></div>

                    </div>
                    <div class="delivery-lvl__title-block">
                        <h3 class="delivery-lvl__title">Погрузка и разгрузка опытными специалистами</h3>
                    </div>

                    <div class="delivery-lvl__ul">
                        <p>Работы выполняют специалисты с использованием спецтехники, что обеспечивает аккуратную
                            и безопасную доставку.</p>
                    </div>
                </div>
                <div class="delivery-lvl">
                    <div class="delivery-lvl__heading">
                        <!-- TODO: отказаться от использования SVG напрямую, использовать библиотеку. -->
                        <div class=delivery-lvl__number> <span><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M15.75 13C15.75 12.8011 15.671 12.6103 15.5303 12.4697C15.3897 12.329 15.1989 12.25 15 12.25H9C8.80109 12.25 8.61032 12.329 8.46967 12.4697C8.32902 12.6103 8.25 12.8011 8.25 13C8.25 13.1989 8.32902 13.3897 8.46967 13.5303C8.61032 13.671 8.80109 13.75 9 13.75H15C15.1989 13.75 15.3897 13.671 15.5303 13.5303C15.671 13.3897 15.75 13.1989 15.75 13ZM15.75 17C15.75 16.8011 15.671 16.6103 15.5303 16.4697C15.3897 16.329 15.1989 16.25 15 16.25H9C8.80109 16.25 8.61032 16.329 8.46967 16.4697C8.32902 16.6103 8.25 16.8011 8.25 17C8.25 17.1989 8.32902 17.3897 8.46967 17.5303C8.61032 17.671 8.80109 17.75 9 17.75H15C15.1989 17.75 15.3897 17.671 15.5303 17.5303C15.671 17.3897 15.75 17.1989 15.75 17Z"
                                        fill="black" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7 2.25C6.27065 2.25 5.57118 2.53973 5.05546 3.05546C4.53973 3.57118 4.25 4.27065 4.25 5V19C4.25 19.7293 4.53973 20.4288 5.05546 20.9445C5.57118 21.4603 6.27065 21.75 7 21.75H17C17.7293 21.75 18.4288 21.4603 18.9445 20.9445C19.4603 20.4288 19.75 19.7293 19.75 19V7.968C19.75 7.587 19.626 7.217 19.396 6.913L16.398 2.945C16.2349 2.72912 16.0239 2.554 15.7817 2.43341C15.5395 2.31282 15.2726 2.25004 15.002 2.25H7ZM5.75 5C5.75 4.31 6.31 3.75 7 3.75H14.25V8.147C14.25 8.561 14.586 8.897 15 8.897H18.25V19C18.25 19.69 17.69 20.25 17 20.25H7C6.31 20.25 5.75 19.69 5.75 19V5Z"
                                        fill="black" />
                                </svg></span></div>

                    </div>
                    <div class="delivery-lvl__title-block">
                        <h3 class="delivery-lvl__title">Страхование всех этапов доставки</h3>
                    </div>

                    <div class="delivery-lvl__ul">
                        <p>Мы страхуем груз от момента погрузки до установки, чтобы в случае непредвиденных ситуаций
                            все расходы взяли на себя.</p>
                    </div>
                </div>
                <div class="delivery-lvl">
                    <div class="delivery-lvl__heading">
                        <!-- TODO: отказаться от использования SVG напрямую, использовать библиотеку. -->
                        <div class=delivery-lvl__number> <span><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12.75 7C12.75 6.80109 12.671 6.61032 12.5303 6.46967C12.3897 6.32902 12.1989 6.25 12 6.25C11.8011 6.25 11.6103 6.32902 11.4697 6.46967C11.329 6.61032 11.25 6.80109 11.25 7V12C11.2499 12.1272 11.2822 12.2522 11.3438 12.3635C11.4054 12.4747 11.4942 12.5685 11.602 12.636L14.602 14.511C14.7707 14.6166 14.9744 14.6508 15.1683 14.6061C15.2643 14.584 15.355 14.5433 15.4353 14.4861C15.5155 14.4289 15.5837 14.3565 15.636 14.273C15.6883 14.1895 15.7236 14.0965 15.7399 13.9993C15.7562 13.9022 15.7532 13.8027 15.7311 13.7067C15.709 13.6107 15.6683 13.52 15.6111 13.4397C15.5539 13.3595 15.4815 13.2913 15.398 13.239L12.75 11.584V7Z"
                                        fill="black" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 3.25C9.67936 3.25 7.45376 4.17187 5.81282 5.81282C4.17187 7.45376 3.25 9.67936 3.25 12C3.25 14.3206 4.17187 16.5462 5.81282 18.1872C7.45376 19.8281 9.67936 20.75 12 20.75C14.3206 20.75 16.5462 19.8281 18.1872 18.1872C19.8281 16.5462 20.75 14.3206 20.75 12C20.75 9.67936 19.8281 7.45376 18.1872 5.81282C16.5462 4.17187 14.3206 3.25 12 3.25ZM4.75 12C4.75 11.0479 4.93753 10.1052 5.30187 9.22554C5.66622 8.34593 6.20025 7.5467 6.87348 6.87348C7.5467 6.20025 8.34593 5.66622 9.22554 5.30187C10.1052 4.93753 11.0479 4.75 12 4.75C12.9521 4.75 13.8948 4.93753 14.7745 5.30187C15.6541 5.66622 16.4533 6.20025 17.1265 6.87348C17.7997 7.5467 18.3338 8.34593 18.6981 9.22554C19.0625 10.1052 19.25 11.0479 19.25 12C19.25 13.9228 18.4862 15.7669 17.1265 17.1265C15.7669 18.4862 13.9228 19.25 12 19.25C10.0772 19.25 8.23311 18.4862 6.87348 17.1265C5.51384 15.7669 4.75 13.9228 4.75 12Z"
                                        fill="black" />
                                </svg></span></div>

                    </div>
                    <div class="delivery-lvl__title-block">
                        <h3 class="delivery-lvl__title">Доставка точно в оговорённый срок</h3>
                    </div>

                    <div class="delivery-lvl__ul">
                        <p>Доставляем памятники в строго согласованный день и время, учитывая график кладбища
                            и пожелания клиента.</p>
                    </div>
                </div>

            </div>

        </div>
        <!-- TODO: создать отдельный компонент. -->
        <div class="delivery-content">
            <div class="title-block">
                <h2 class="delivery-content__title">Аккуратная транспортировка с гарантией целостности</h2>
            </div>

            <div class="text-block">
                <p class="delivery-content__text">Мы обеспечиваем надёжную и безопасную доставку памятников по Москве
                    и Московской области, а также в другие регионы. За транспортировку отвечают профессиональные логисты
                    и водители с большим опытом работы в сфере перевозки изделий из камня.</p>
                <p class="delivery-content__text">Перед отправкой каждый памятник проходит финальный контроль качества
                    на нашем производстве. Мы приглашаем клиента лично осмотреть готовую работу, задать вопросы, внести
                    уточнения и убедиться, что всё выполнено в соответствии с ожиданиями. Это важный этап, который
                    позволяет быть уверенным в результате ещё до монтажа.</p>
                <p class="delivery-content__text">Мы понимаем, насколько важно обеспечить сохранность изделия, созданного
                    с вниманием и уважением к памяти вашего близкого.</p>
            </div>
        </div>
    </section>

</template>


<style lang="scss" scoped>
/** TODO: проверить необходимость использования `@reference`. */
@reference "tailwindcss";

* {
    padding: 0;
    margin: 0;
}

.delivery-section {
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
}

.hero {
    @apply mt-8;
}

.hero__img {
    @apply w-360;
    @apply h-140.5;
}

.delivery-content {
    @apply flex;
    @apply gap-6;
    @apply mt-12;
}

.title-block {
    @apply w-85.5;
}

.delivery-content__title {
    color: #000;
    font-family: "Golos Text";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem;
    /* 160% */
    letter-spacing: -0.00325rem;
    padding: 0;
    margin: 0;
}

.text-block {
    @apply flex;
    @apply flex-col;
    @apply gap-6;
}

.delivery-content__text {
    color: var(--Black-Color-600, #5D5D5D);
    font-family: "Golos Text";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    /* 175% */
    letter-spacing: -0.01rem;
    @apply w-177;
    padding: 0;
    margin: 0;
}

.delivery-lvl__title-block {
    @apply h-16;
}

.delivery-lvl__title {
    color: var(--Black-Color-950, #000);
    font-family: "Golos Text";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem;
}

.delivery-delivery__title {
    @apply my-8;

}

.delivery-delivery__title h3 {
    color: var(--Black-Color-950, #000);
    font-family: "Golos Text";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem;
    /* 160% */
    letter-spacing: -0.00325rem;
}

.delivery-lvls {
    @apply flex;
    @apply gap-6;
    @apply flex-wrap;
}

.delivery-lvl {
    display: flex;
    padding: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 0.5rem;
    border: 1px solid var(--Black-Color-100, #E7E7E7);
    background: #FFF;
    @apply min-w-85.5;
    @apply max-w-85.5;
    box-sizing: border-box;
    @apply h-85;
}

._wide {
    @apply min-w-177;
}

.delivery-lvl__heading {
    @apply flex;
    @apply gap-3;
    @apply items-center;
}

.delivery-lvl__number {
    display: flex;
    width: 2.5rem;
    height: 2.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    aspect-ratio: 1/1;
    border-radius: 0.5rem;
    background: #F4F4F4;
}

.delivery-lvl__number p {
    color: #000;
    font-family: "Golos Text";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.25rem;
    /* 180% */
    letter-spacing: 0.00738rem;
}

.delivery-lvl__ul {
    @apply pb-6;
}

.delivery-lvl__ul li {
    color: var(--Black-Color-600, #5D5D5D);
    font-family: "Golos Text";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    /* 175% */
    letter-spacing: -0.01rem;
}
@media (max-width: 1024px) {
    .delivery-section{
        @apply mx-8;
    }
    .hero__img {
      @apply w-240;
      @apply h-97.5;
    }

    .delivery-content{
        @apply flex-col;
        @apply gap-6;
    }
    .title-block{
        @apply w-150;
    }
    .delivery-lvl{
     @apply w-117;
     @apply min-w-117;
     @apply max-w-117;
    }
@media (max-width: 480px) {
  
    .hero__img {
      @apply w-104;
      @apply h-65;
    }

 
    .title-block{
        @apply w-104;
    }
    .delivery-lvl{
     @apply w-104;
     @apply min-w-104;
     @apply max-w-104;
    }
    .delivery-content__text{
        @apply w-104;
    }

}
}
</style>