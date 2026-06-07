import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

export default [
  js.configs.recommended,
  ...svelte.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    rules: {
      // {@html} is used intentionally for formatted content
      'svelte/no-at-html-tags': 'off',
      // href attributes are external URLs or standard SvelteKit routes — resolve() not needed
      'svelte/no-navigation-without-resolve': 'off',
      // allow _underscore-prefixed vars as intentionally unused (destructuring rest pattern)
      'no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],
    },
  },
  {
    ignores: ['node_modules/', 'build/', '.svelte-kit/'],
  },
];
