<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import knownPaths from '@/utils/breadcrumbs';

/** выносить интерфейс */
interface BreadcrumbsProps {
  /** булеан переменные отвечают на вопрос, поэтому нейминг должен быть формата is... или has... */
  useRoutePath: boolean;
  /** breads => items */
  breads: Bread[];
}

/** более современный подход */
const props = withDefaults(defineProps<BreadcrumbsProps>(), {
  useRoutePath: true,
  breads: () => [],
});

/** выносить интерфейс в entity, а потом создать у фичи интерфейс пропсов (смотри структуру рефа рету) */
interface Bread {
  title: string;
  to?: string;
}

const route = useRoute();

const breadcrumbs = computed(() => {
  return props.useRoutePath ? generateBreads(route.path) : props.breads;
});

/** разбивать на несколько шагов и функций */
function generateBreads(path: string): Bread[] {
  const breads: Bread[] = [
    {
      title: knownPaths['/'] || 'Главная',
      to: '/',
    },
  ];

  const segments = path.split('/').filter(Boolean);
  let currentPath = '';

  segments.forEach((segment, i) => {
    currentPath += `/${segment}`;
    breads.push({
      title: `${knownPaths[currentPath] || segment}`,
      to: currentPath,
    });
  });

  return breads;
}
</script>

<template>
  <div class="bread-crumbs">
    <template v-for="(bread, index) in breadcrumbs" :key="index">
      <!-- Непоследние элементы: ссылки -->
      <NuxtLink
        v-if="index !== breadcrumbs.length - 1"
        :to="bread.to"
        class="bread-crumb"
      >
        {{ bread.title }}
      </NuxtLink>
       
      <template v-if="index !== breadcrumbs.length - 1">
        <span>/</span>
      </template>

      <span v-if="index !== breadcrumbs.length - 1">/</span>

      <!-- Последний элемент: текст (без ссылки) -->
      <span v-if="index === breadcrumbs.length - 1" class="bread-crumb _active">
        {{ bread.title }}
      </span>
    </template>
  </div>
</template>

<style>
@reference "tailwindcss";

.bread-crumbs {
  @apply flex;
  @apply flex-row;
  @apply gap-3;
  @apply items-center;
  @apply pt-12;
  @apply pb-6;
}

.bread-crumb {
  color: var(--Black-Color-600, #5d5d5d);
  font-family: 'Golos Text';
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
</style>
