<template>
    <button class="app-btn -black">Рассчитать стоимость</button>
</template>

<style scope>
@reference "tailwindcss";

.app-btn {
    @apply flex;
    @apply h-14;
    @apply py-4;
    @apply px-6;
    @apply justify-center;
    @apply items-center;
    @apply rounded-sm;

}
.app-btn_mobile{
        display: none;
    }

.app-btn.-black {
    @apply bg-[#1A1A1A];
    @apply text-[#FFF];
}
@media (max-width: 480px){
    .app-btn_mobile{
        display: block;
        @apply w-full;
    }
    ._hide{
        display: none;
    }
}
</style>

