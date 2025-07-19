<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
import { object, string, boolean } from 'yup';

import { inject } from 'vue';
const formRef = inject('formRef');

// Схема валидации
const schema = object({
  fullName: string().required('Нужно ввести Ваше имя').min(2),
  phone: string()
    .required('Введите номер телефона')
    .matches(
      /^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
      'Введите номер через +7 или 8',
    ),
  email: string().email('Некорректный email').required('Введите Вашу почту'),
  agreement: boolean()
    .oneOf([true], 'Вы должны согласиться с обработкой данных')
    .required('Дайте согласие перед отправкой'),
});

const { handleSubmit, errors } = useForm({
  validationSchema: schema,
  initialValues: {
    agreement: true, // Галочка по умолчанию стоит
  },
});

const onSubmit = handleSubmit(async (values) => {
  try {
    const response = await fetch(
      'https://grandstone-memorial.ru/telegram.php',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      },
    );
    const result = await response.json();
    if (result.status === 'ok') {
      // Успех
      alert('Спасибо, сообщение отправлено!');
    } else {
      // Ошибка
      alert('Произошла ошибка, попробуйте снова.');
    }
  } catch (e) {
    alert('Не удалось отправить форму.');
  }
});

const { value: fullName } = useField('fullName');
const { value: phone } = useField('phone');
const { value: email } = useField('email');
const { value: agreement } = useField('agreement');
</script>

<template>
  <section class="form-container">
    <div class="heading">
      <h2 class="heading__title">Оставь контакты, мы поможем!</h2>
      <p class="heading__text">
      Остались вопросы? Оставьте свои контактные данные — мы перезвоним вам, подробно проконсультируем и поможем выбрать гранитный памятник, полностью учитывая ваши пожелания и требования.
      </p>
    </div>
    <form @submit.prevent="onSubmit" class="form" ref="formRef">
      <div class="input-container">
        <!-- Поле ФИО -->
        <div>
          <input
            v-model="fullName"
            type="text"
            placeholder="ФИО*"
            class="form__input"
          />
          <span v-if="errors.fullName" class="error">{{
            errors.fullName
          }}</span>
        </div>

        <!-- Поле Телефон -->
        <div>
          <input
            v-model="phone"
            type="tel"
            placeholder="Номер телефона*"
            class="form__input"
          />
          <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
        </div>

        <!-- Поле Email -->
        <div>
          <input
            v-model="email"
            type="email"
            placeholder="Электронная почта"
            class="form__input"
          />
          <span v-if="errors.email" class="error">{{ errors.email }}</span>
        </div>
      </div>

      <!-- Чекбокс согласия -->
      <div class="checkbox-container">
        <input v-model="agreement" type="checkbox" id="agreement" checked />
        <label class="form__label" for="agreement">
          Согласен(а) с обработкой персональных данных
        </label>
        <span v-if="errors.agreement" class="error error-checkbox">{{
          errors.agreement
        }}</span>
      </div>

      <button>Отправить</button>
    </form>
  </section>
</template>

<style scoped>
@reference "tailwindcss";
.form-container {
  @apply max-w-360;
  @apply box-border;
  @apply p-12;
  @apply flex;
  @apply flex-col;
  @apply items-start;
  @apply gap-10;
  @apply self-stretch;
  @apply bg-[#2F2F2F];

  @apply mx-auto;
}
.heading {
  @apply flex;
  @apply flex-col;
  @apply items-start;
  @apply gap-6;
  @apply self-stretch;
}

.heading__title {
  color: #fff;
  font-family: 'Golos Text';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.25rem; /* 150% */
  letter-spacing: 0.00888rem;
  margin: 0;
}

.heading__text {
  width: 36.3125rem;
  color: var(--Black-Color-400, #888);
  font-family: 'Golos Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  letter-spacing: -0.01rem;
  padding: 0;
  margin: 0;
}

.input-container {
  @apply flex;
  @apply flex-wrap;
  @apply gap-8;
}
.form {
  @apply flex;
  @apply flex-col;
  @apply gap-10;
}
.form__input {
  @apply flex;
  @apply bg-[#2F2F2F];
  height: 1.5rem;
  @apply w-106;
  background: transparent; /* Прозрачный фон */
  border: none; /* Убираем границу */
  color: #fff;
  box-shadow: none; /* Отключаем тени */
  padding: 0.75rem 0rem;
  align-items: center;
  gap: 0.5rem;
  flex: 1 0 0;
  border-bottom: 1px solid var(--Black-Color-800, #454545);
}

.form__label {
  color: var(--Black-Color-400, #888);
  font-family: 'Golos Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  letter-spacing: -0.01rem;
}
.checkbox-container {
  @apply flex;
  @apply gap-3;
}

button {
  color: #000;
  font-family: 'Golos Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  letter-spacing: -0.01rem;
  display: flex;
  padding: 0.75rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.25rem;
  background: #fff;
  @apply w-28.5;
}

@media (max-width: 1024px) {
  .form-container {
    @apply px-8;
    @apply w-full;
    @apply box-border;
  }
  .input-container {
    @apply flex;
    @apply flex-col;
  }
  .heading__text {
    @apply ml-0;
    @apply w-full;
  }
}

@media (max-width: 480px) {
  .form-container {
    @apply mx-0;
  }
  .heading__text {
    @apply w-full;
  }
  .form__input {
    @apply w-full;
  }
}
</style>
