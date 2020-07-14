module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { jsx: true, sourceType: 'module' },
  env: { browser: true, node: true, es6: true },
  settings: {
    react: { version: 'detect' },
    node: {
      tryExtensions: ['.js', '.json', '.ts', '.d.ts', '.tsx']
    }
  },
  plugins: ['@typescript-eslint', 'node', 'css-modules', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  rules: {
    // Enforce
    'no-console': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-param-reassign': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'node/no-missing-import': 'error',
    'node/no-missing-require': 'error',
    'node/no-deprecated-api': 'error',
    'css-modules/no-undef-class': 'error',
    'react/prefer-stateless-function': 'error',
    'react/no-array-index-key': 'error',
    'react/no-typos': 'error',
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    // Disable (i.e. override extends)
    'prefer-rest-params': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unknown-property': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off'
  },
  overrides: [
    {
      files: ['*.test.*'],
      env: { mocha: true }
    }
  ]
}