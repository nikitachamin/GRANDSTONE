<script setup>
const isVisible = ref([false, false, false, false, false, false]);

function toggleTheText(index) {
  isVisible.value[index] = !isVisible.value[index];
  console.log('привет');
}
</script>

<template>
  <section class="question-section">
    <div class="header">
      <BreadCrumbs />
    </div>
    <HeroImg alt="Большая книга>" />
    <div class="question-content">
      <div class="title-block">
        <h1 class="question-content__title">Часто задаваемые вопросы</h1>
      </div>
      <div class="questions">
        <div class="question">
          <div class="question__heading">
            <h3>Какая документация нужна для установки памятника?</h3>
            <button class="btn" @click="toggleTheText(0)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
                  fill="#495B71"
                />
              </svg>
            </button>
          </div>
          <p v-show="isVisible[0]" class="question__text">Оформление памятника начинается с разрешения администрации кладбища. Чаще всего потребуется паспорт участка на кладбище, заявление от родственника и согласование размеров балки или фундамента. Все разрешительные этапы мы берём на себя, работая с документами вдумчиво и прозрачно. Наш опыт позволяет не только изготовить памятник, но и решить возможные бюрократические вопросы: вы просто выбираете, мы делаем установку.</p>
        </div>
        <div class="question">
          <div class="question__heading">
            <h3>Как правильно оформить документы для похорон?</h3>
            <button class="btn" @click="toggleTheText(1)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
                  fill="#495B71"
                />
              </svg>
            </button>
          </div>
          <p v-show="isVisible[1]" class="question__text">
            Для организации похорон необходимо получить несколько обязательных
            документов. В первую очередь оформляется медицинское свидетельство
            о смерти — его выдают в больнице, морге или поликлинике по месту
            жительства. С этим документом нужно обратиться в ЗАГС,
            где на основании медицинского свидетельства выдадут свидетельство
            о смерти.
          </p>
        </div>
        <div class="question">
          <div class="question__heading">
            <h3>Сколько стоит изготовление и установка памятника из гранита?</h3>
            <button class="btn" @click="toggleTheText(2)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
                  fill="#495B71"
                />
              </svg>
            </button>
          </div>
          <p v-show="isVisible[2]" class="question__text">Памятники на кладбище цены зависят от выбранного гранита, размеров, сложности резьбы и дополнительных услуг. Купить памятник на могилу недорого возможно даже при индивидуальном подходе: наша мастерская специально подбирает оптимальные решения и всегда предлагает варианты на любой бюджет. Заказать памятник на могилу из гранита — значит получить долговечный результат, не переплачивая за посредников. Посмотреть примеры работ и памятник купить цена можно <NuxtLink to="/katalog">здесь</NuxtLink>.</p>
        </div>
        <div class="question">
          <div class="question__heading">
            <h3>
              Можно ли купить памятник с доставкой и установкой “под ключ”?
            </h3>
            <button class="btn" @click="toggleTheText(3)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
                  fill="#495B71"
                />
              </svg>
            </button>
          </div>
          <p v-show="isVisible[3]" class="question__text">Современные технологии и опытные мастера позволяют нам организовать изготовление и установку памятников в Москве и области — от эскиза до монтажа. Если вы ищете, где заказать памятник на могилу недорого, мы предложим прозрачную схему работы, гарантию на работу и бесплатную консультацию.</p>
        </div>
        <div class="question">
          <div class="question__heading">
            <h3>Как выбрать тип памятника и гравировку?</h3>
            <button class="btn" @click="toggleTheText(4)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
                  fill="#495B71"
                />
              </svg>
            </button>
          </div>
          <p v-show="isVisible[4]" class="question__text">Изготовление памятников из гранита открывает почти неограниченные возможности: портрет, эпитафия, фото — всё делается по вашему эскизу, с примерами наших работ вы всегда можете ознакомиться на сайте, чтобы выбрать, какие памятники на кладбище цены и вид соответствуют вашим представлениям о качестве. </p>
        </div>
        <div class="question">
          <div class="question__heading">
            <h3>Где заказать памятник, чтобы остаться довольным</h3>
            <button class="btn" @click="toggleTheText(5)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
                  fill="#495B71"
                />
              </svg>
            </button>
          </div>
          <p v-show="isVisible[5]" class="question__text">Когда нужно купить гранитный памятник, главное — доверять мастерам, которые слушают ваши пожелания и честно объясняют “подводные камни”. Мы знаем — заказать памятник в Москве или области важное и личное решение, поэтому сопровождаем вас на каждом этапе, бесплатно консультируем и даём гарантию на результат. Хотите узнать, где заказать памятник из гранита недорого, какая окончательная цена установки и что нужно для заказа? Оставьте заявку или позвоните, и получите подробную смету, фото ранее выполненных работ и ответы на любые вопросы. Выбирайте память, которой можно доверять.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";

* {
  padding: 0;
  margin: 0;
}

.question-section {
  @apply max-w-360;
  @apply flex;
  @apply flex-col;
  @apply mx-auto;
  @apply mt-12;
  @apply mb-24;
}

.bread-crum {
  color: var(--Black-Color-600, #5d5d5d);
  font-family: 'Golos Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
  letter-spacing: -0.01rem;
  text-decoration: none;
}

._active {
  color: var(--Black-Color-950, #000);
}

.header h3 {
  color: #000;
  font-family: 'Golos Text';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.25rem;
  letter-spacing: 0.00888rem;
}

.hero {
  @apply mt-8;
}

.hero__img {
  @apply w-360;
  @apply h-140.5;
}

.question-content {
  @apply flex;
  @apply gap-6;
  @apply mt-12;
}

.title-block {
  @apply w-85.5;
}

.question-content__title {
  color: #000;
  font-family: 'Golos Text';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;

  letter-spacing: -0.00325rem;
}

.question-content__text {
  color: var(--Black-Color-600, #5d5d5d);
  font-family: 'Golos Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;

  letter-spacing: -0.01rem;
}
.questions {
  @apply w-full;
  @apply box-border;
}
.question {
  border-radius: 0.5rem;
  border: 1px solid var(--Black-Color-100, #e7e7e7);
  background: #fff;
  @apply p-6;
  @apply mb-6;
}
.question__heading {
  @apply flex;
  @apply justify-between;
  @apply items-center;
}
.question__heading h3 {
  color: var(--Black-Color-950, #000);
  font-family: 'Golos Text';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
}

.btn {
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  aspect-ratio: 1/1;
  border-radius: 6.25rem;
  background: #f4f4f4;
}

.btn svg {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
}
.question__text {
  @apply mt-13;
  color: var(--Black-Color-900, #3d3d3d);
  font-family: 'Golos Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
  letter-spacing: -0.01rem;
}

@media (max-width: 1024px) {
  .question-section {
    @apply mx-8;
  }
  .hero__img {
    @apply w-240;
    @apply h-97.5;
  }

  .question-content {
    @apply flex-col;
    @apply gap-6;
  }
}
@media (max-width: 480px) {
  .hero__img {
    @apply w-104;
    @apply h-65;
  }

  .title-block {
    @apply w-104;
  }
  .question-lvl {
    @apply w-104;
    @apply min-w-104;
    @apply max-w-104;
  }
  .question-content__text {
    @apply w-104;
  }
}
</style>
