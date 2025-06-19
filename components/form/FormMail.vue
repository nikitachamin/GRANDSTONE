
<script setup lang="ts">
const isAgreed = ref(false);
</script>


<template>
    <section class="form-container">
        <div class="heading">
            <h2 class="heading__title">Обратная связь</h2>
            <p class="heading__text">Мы гордимся тем, что реализовали работы для клиентов из множества сфер — от стартапов до крупных бизнесов и предприятий.</p>
        </div>
        <form v-on:submit.prevent="console.log(isAgreed)" class="form">
            <div class="input-container">
                 <input type="text" placeholder="ФИО*" class="form__input">
            <input type="tel" placeholder="Номер телефона*" class="form__input">
            <input type="mail" placeholder="Электронная почта" class="form__input">
            </div>
           
            <div class="checkbox-container">
                <input 
                    type="checkbox" 
                    id="agreement" 
                    v-model="isAgreed"
                >
                <label class="form__label" for="agreement">Согласен(а) с обработкой персональных данных</label>
            </div>
            <button>Отправить</button>
        </form>
    </section>
</template>


<style scoped>
@reference "tailwindcss";
.form-container{
    @apply w-360;
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
    color: #FFF;
    font-family: "Golos Text";
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
    font-family: "Golos Text";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
    letter-spacing: -0.01rem;
    padding: 0;
    margin: 0;
}

.input-container{
  @apply flex;
  @apply gap-8;
}
.form{
    @apply flex;
    @apply flex-col;
    @apply gap-10;
}
.form__input{
    @apply flex;
    @apply bg-[#2F2F2F];
    height: 1.5rem;
    @apply w-106;
     background: transparent; /* Прозрачный фон */
    border: none; /* Убираем границу */
    color:#FFF;
    box-shadow: none; /* Отключаем тени */
    padding: 0.75rem 0rem;
    align-items: center;
    gap: 0.5rem;
    flex: 1 0 0;
    border-bottom: 1px solid var(--Black-Color-800, #454545);
}

.form__label{
    color: var(--Black-Color-400, #888);
    font-family: "Golos Text";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
    letter-spacing: -0.01rem;
    }
.checkbox-container{
    @apply flex;
    @apply gap-3;
}

button{
    color: #000;
    font-family: "Golos Text";
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
    background: #FFF;
    @apply w-28.5;
}


@media (max-width: 1024px) {
    .form-container{
        @apply px-8;
        width: 960px;
    }
  .input-container{
    @apply flex;
    @apply flex-col;

  }
}

@media (max-width: 480px){
    .form-container{    
     @apply w-104;
     @apply px-8;
     @apply mx-0;
    }
    .heading__text{
     @apply w-104;
     
    }
}
</style>