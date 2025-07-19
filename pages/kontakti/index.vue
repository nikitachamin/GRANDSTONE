<script setup>
import PageText from '~/components/pageContent/PageText.vue';
import { WhatsAp, Telegram } from '@/components/buttons';
import YanMap from '~/components/yMap/YanMap.vue';

const data = [
  {
    numberOfCard: 1,
    title: 'Комфортный размер аванса',
    texts: [
      `
<strong>60% предоплата</strong>
— после согласования проекта и заключения договора`,
      `
<strong>40% остаток</strong>
— оплачивается после приёмки готового памятника, перед установкой`,
    ],
    wide: true,
  },
  {
    numberOfCard: 2,
    title: 'Удобные формы оплаты:',
    texts: [
      `Наличный и безналичный расчёт`,
      `Оплата по счёту для физ. и юр. лиц`,
      `Беспроцентная рассрочка через Тинькофф Банк — быстрое оформление, без скрытых условий и переплат`,
    ],
    wide: true,
  },
];
</script>

<template>
  <section class="contacts-section">
    <div class="header">
      <BreadCrumbs />
      <div>
        <h1 class="header-title">Наши контакты</h1>
      </div>
    </div>
    <div class="contacts-main">
      <div class="contacts-main-heading">
        <div class="contacts-main-info">
          <h2>Телефон</h2>
          <a class="contacts-main-info--text" href="tel:+74952265171">{{
            COMPANY_PHONE
          }}</a>
        </div>
        <div class="contacts-main-info">
          <h2>Наш адрес</h2>
          <p class="contacts-main-info--text">{{ COMPANY_ADDRESS }}</p>
        </div>
      </div>
      <div class="contacts-main-bottom">
        <div class="contacts-main-bottom--msg">
          <h2>Наши мессенджеры</h2>
          <div class="buttons">
            <WhatsAp :buttonClass="'icon-msg'" />
            <Telegram :buttonClass="'icon-msg'" />
          </div>
        </div>
      </div>
    </div>
    <YanMap />
    <PageText />
    <div class="contacts-data">
      <div class="contacts-data-heading">
        <h2>Название организации</h2>
        <p class="contacts-main-info--text">
          Индивидуальный предприниматель Лопатин Сергей Викторович
        </p>
      </div>
      <div class="contacts-data-main">
        <div class="contacts-main-info">
          <h2>Юридический адрес</h2>
          <p class="contacts-main-info--text">
            129346, РОССИЯ, г. Москва, ул. Малыгина, д. 3, корп. 2
          </p>
        </div>
        <div class="contacts-main-info">
          <h2>ИНН</h2>
          <p class="contacts-main-info--text">771673499501</p>
        </div>
        <div class="contacts-main-info">
          <h2>ОГРНИП</h2>
          <p class="contacts-main-info--text">324774600299403</p>
        </div>
      </div>
      <div class="contacts-data-bottom">
        <h2>Банковские реквизиты</h2>
        <p><strong>Расчётный счет:</strong> 40802810600006212680</p>
        <p><strong>Банк АО:</strong> "ТИНЬКОФФ БАНК"</p>
        <p><strong>ИНН:</strong> 7710140679</p>
        <p><strong>БИК:</strong> 044525974</p>
        <p><strong>Корр. счет:</strong> 30101810145250000974</p>
        <p>
          <strong>Юр. адрес банка:</strong> Москва, 127287, ул. Хуторская 2-я,
          д. 38А, стр. 26
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";

.contacts-section {
  @apply max-w-360;
  @apply flex;
  @apply flex-col;
  @apply mx-auto;
  @apply mt-12;
  @apply mb-24;
}
.header-title {
  color: #000;
  font-family: 'Golos Text';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0.142px;
}
.contacts-main {
  @apply flex;
  @apply flex-col;
  @apply gap-8;
  @apply my-12;
}
.contacts-main-heading {
  @apply flex;
  @apply gap-32;
}
.contacts-main-heading h2 {
  color: var(--Black-Color-950, #000);
  font-family: 'Golos Text';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 177.778% */
}
.contacts-main-info {
  @apply flex;
  @apply flex-col;
  @apply gap-1;
}
.contacts-main-info--text {
  color: var(--Black-Color-600, #5d5d5d);
  font-family: 'Golos Text';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
  letter-spacing: -0.16px;
}
.buttons {
  @apply flex;
  @apply gap-2;
  @apply pt-4;
}
.icon-msg {
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 64px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: var(--Black-Color-50, #f6f6f6);
  @apply cursor-pointer;
}
.contacts-data {
  @apply mt-8;
  @apply p-8;
  @apply flex;
  @apply flex-col;
  @apply gap-8;
  border-radius: 8px;
  background: #f9f9f9;
}
.contacts-data h2 {
  color: var(--Black-Color-950, #000);
  font-family: 'Golos Text';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 177.778% */
}
.contacts-data p {
  color: var(--Black-Color-600, #5d5d5d);
  font-family: 'Golos Text';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
  letter-spacing: -0.16px;
}
.contacts-data-main {
  @apply flex;
  @apply justify-between;
}
.contacts-data-bottom {
  @apply flex;
  @apply flex-col;
  @apply gap-2;
}
@media (max-width: 1024px) {
  .contacts-section {
    @apply mx-0;
    @apply px-8;
    @apply w-full;
    @apply box-border;
  }
}
@media (max-width: 768px) {
  .contacts-main-heading {
    @apply flex;
    @apply flex-col;
    @apply gap-4;
  }
  .contacts-data-main {
    @apply flex;
    @apply flex-col;
  }
}
</style>
