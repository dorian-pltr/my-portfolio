/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  ignorePatterns: ['**/*.test.ts', '**/*.spec.ts'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Règles de sécurité
    'react/jsx-curly-brace-presence': 'error',
    'react/no-danger': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-script-url': 'error',

    // Règles de maintenabilité
    'prefer-spread': 'error',
    'react/destructuring-assignment': 'error',
    'react/jsx-props-no-spreading': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-class-component-methods': 'error',
    'react/no-unknown-property': 'error',
    'react/sort-prop-types': 'error',
    'react/jsx-curly-newline': 'error',
    'react/no-array-index-key': 'error',
    'react/jsx-key': 'error',
    'react/jsx-no-constructed-context-values': 'error',

    // Règles spécifiques à Next.js
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off',

    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
  },
}
