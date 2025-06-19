<script setup>
import img1 from '@/assets/img/installation/installation.png';
</script>


<template>

    <section class="installation-section">
        <div class="header">
            <div class="bread-crumps">
                <NuxtLink class="bread-crum" to="/">Главная</NuxtLink> /
                <NuxtLink class="bread-crum _active" to="/installation">Установка</NuxtLink>
            </div>
        </div>
        <div class="hero">
            <img class="hero__img" :src="img1" alt="Надгробная плита" />

        </div>
         <div class="installation-about">
            <div class="installation-about__title">
                <h3>Процесс установки</h3>
            </div>
            <div class="installation-lvls">
                <div class="installation-lvl">
                    <div class="installation-lvl__heading">
                    <div class=installation-lvl__number> <p>1</p></div>
                    <h3 class="installation-lvl__title">Подготовка и согласование</h3>
                    </div>
                    <div class="installation-lvl__ul">
                        <li>Подписание договора, выбор места установки</li>
                        <li>Получение необходимых разрешений и согласование с администрацией кладбища (если требуется)</li>
                        <li>Подготовка технической документации</li>
                    </div>
                </div>
                 <div class="installation-lvl">
                    <div class="installation-lvl__heading">
                    <div class=installation-lvl__number> <p>2</p></div>
                    <h3 class="installation-lvl__title">Доставка памятника</h3>
                    </div>
                    <div class="installation-lvl__ul">
                        <li>Аккуратная транспортировка изделия с нашего производства на место установки</li>
                        <li>Использование специализированного транспорта и упаковки для предотвращения повреждений</li>
                    </div>
                </div>
                 <div class="installation-lvl">
                    <div class="installation-lvl__heading">
                    <div class=installation-lvl__number> <p>3</p></div>
                    <h3 class="installation-lvl__title">Подготовка фундамента</h3>
                    </div>
                    <div class="installation-lvl__ul">
                        <li>Выемка грунта, установка армированного основания</li>
                        <li>Монтаж бетонной плиты (при необходимости) с учётом типа почвы и рельефа</li>
                        <li>Гарантия надёжности и устойчивости конструкции на долгие годы</li>
                    </div>
                </div>
               
                  <div class="installation-lvl _wide">
                    <div class="installation-lvl__heading">
                    <div class=installation-lvl__number> <p>4</p></div>
                    <h3 class="installation-lvl__title">Монтаж памятника и элементов комплекса</h3>
                    </div>
                    <div class="installation-lvl__ul">
                        <li>Подписание договора, выбор места установки</li>
                        <li>Получение необходимых разрешений и согласование с администрацией кладбища (если требуется)</li>
                        <li>Подготовка технической документации</li>
                    </div>
                </div>
                   <div class="installation-lvl _wide">
                    <div class="installation-lvl__heading">
                    <div class=installation-lvl__number> <p>5</p></div>
                    <h3 class="installation-lvl__title">Завершающие работы и уборка</h3>
                    </div>
                    <div class="installation-lvl__ul">
                        <li>Подписание договора, выбор места установки</li>
                        <li>Получение необходимых разрешений и согласование с администрацией кладбища (если требуется)</li>
                        <li>Подготовка технической документации</li>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="installation-content">
            <div class="title-block">
                <h2 class="installation-content__title">Установка памятников<br>
                    с гарантией качества</h2>
            </div>
       
            <div class="text-block">
            <p class="installation-content__text">Установка памятника — это не просто монтаж изделия, а важный процесс, от которого зависит долговечность, внешний вид и сохранность места захоронения. Мы подходим к этой работе с особым вниманием и ответственностью, ведь каждый памятник несёт в себе память о близких людях.</p>
            <p class="installation-content__text">Все работы выполняются нашими опытными специалистами с использованием профессионального оборудования и проверенных материалов. Мы учитываем особенности грунта, расположение захоронения и погодные условия, чтобы обеспечить максимально надёжное исполнение.</p>
            <p class="installation-content__text">Большое внимание мы уделяем не только монтажу, но и качественной подготовке основания. Именно это позволяет памятникам сохранять устойчивость и внешний вид на протяжении многих лет.</p>
        </div>
    </div>
    </section>

</template>


<style lang="scss" scoped>
@reference "tailwindcss";


.installation-section {
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
.installation-content{
    @apply flex;
    @apply gap-6;
    @apply mt-12;
}
.title-block{
    @apply w-85.5;
}
.installation-content__title{
    color: #000;
    font-family: "Golos Text";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem; /* 160% */
    letter-spacing: -0.00325rem;
    padding: 0;
    margin: 0;
}
.text-block{
    @apply flex;
    @apply flex-col;
    @apply gap-6;
}
.installation-content__text{
    color: var(--Black-Color-600, #5D5D5D);
    font-family: "Golos Text";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
    letter-spacing: -0.01rem;
    @apply w-177;
    padding: 0;
    margin: 0;
}
.installation-about__title{
    @apply my-8;
}
.installation-about__title h3{
    color: var(--Black-Color-950, #000);
    font-family: "Golos Text";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem; /* 160% */
    letter-spacing: -0.00325rem;
}
.installation-lvls {
    @apply flex;
    @apply gap-6;
    @apply flex-wrap;
}
.installation-lvl {
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
    @apply min-w-116;
    @apply max-w-116;
    box-sizing: border-box;
    min-height: 17.5rem;
}
._wide{
    @apply min-w-177;
}
.installation-lvl__heading {
    @apply flex;
    @apply gap-3;
    @apply items-center;
}
.installation-lvl__number{
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
.installation-lvl__number p{  
     color: #000;
    font-family: "Golos Text";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.25rem; /* 180% */
    letter-spacing: 0.00738rem;
}
.installation-lvl__ul{
    @apply pb-6;
}
.installation-lvl__ul li{
  color: var(--Black-Color-600, #5D5D5D);
font-family: "Golos Text";
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1.75rem; /* 175% */
letter-spacing: -0.01rem;
}

@media (max-width: 1024px) {
    .installation-section{
        @apply mx-8;
    }
    .hero__img {
      @apply w-240;
      @apply h-97.5;
    }

    .installation-content{
        @apply flex-col;
        @apply gap-6;
    }
    .title-block{
        @apply w-150;
    }
    .installation-lvl{
     @apply w-240;
     @apply min-w-240;
     @apply max-w-240;
    }

}
@media (max-width: 480px) {
  
    .hero__img {
      @apply w-104;
      @apply h-65;
    }

 
    .title-block{
        @apply w-104;
    }
    .installation-lvl{
     @apply w-104;
     @apply min-w-104;
     @apply max-w-104;
    }
    .installation-content__text{
        @apply w-104;
    }

}
</style>