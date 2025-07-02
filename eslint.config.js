import eslintVue from 'eslint-plugin-vue';
import nuxt from '@nuxt/eslint-config';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    plugins: { '@typescript-eslint': tseslint.plugin },
    languageOptions: {
      parser: tseslint.parser,
    },
    rules: {
      // ваши кастомные TypeScript-правила тут, если нужны
    },
  },
  {
    plugins: { vue: eslintVue },
    // Опционально: уточнить настройки для .vue-файлов
    rules: {
      // ваши кастомные vue-правила тут, если нужны
    },
  },
  {
    // Включаем Prettier (выключает конфликтующие правила)
    name: 'prettier',
    ...prettier,
  },
];
