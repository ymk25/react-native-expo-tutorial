// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const js = require('@eslint/js');

// https://docs.expo.dev/guides/using-eslint/
module.exports = defineConfig([
  // Base recommended config
  js.configs.recommended,

  // Expo config
  ...expoConfig,

  // TypeScript configuration
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: true,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      // TypeScript ESLint recommended rules
      ...typescriptEslint.configs.recommended.rules,
      ...typescriptEslint.configs['recommended-type-checked'].rules,
      ...typescriptEslint.configs['stylistic-type-checked'].rules,

      // Custom rules
      // @see https://typescript-eslint.io/rules/array-type
      '@typescript-eslint/array-type': 'off',
      // @see https://typescript-eslint.io/rules/consistent-type-definitions/
      '@typescript-eslint/consistent-type-definitions': 'off',
      // @see https://typescript-eslint.io/rules/consistent-type-imports/
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
      // @see https://typescript-eslint.io/rules/no-unused-vars/
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      // @see https://typescript-eslint.io/rules/require-await/
      '@typescript-eslint/require-await': 'off',
      // @see https://typescript-eslint.io/rules/no-misused-promises/
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: { attributes: false },
        },
      ],
      // https://typescript-eslint.io/rules/no-var-requires/
      '@typescript-eslint/no-var-requires': 'off',
    },
  },

  // Ignore patterns
  {
    ignores: [
      'babel.config.js',
      // Add other files to ignore as needed
      'node_modules/**',
      'dist/**',
      'build/**',
      '.expo/**',
      'ios/**',
      'android/**',
    ],
  },
]);
