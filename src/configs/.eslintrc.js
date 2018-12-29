module.exports = {
  parser: 'typescript-eslint-parser',
  parserOptions: { jsx: true },
  env: { node: true, browser: true },
  globals: {
    // mocha (sans 'context')
    describe: true,
    it: true,
    before: true,
    after: true
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  plugins: ['typescript', 'css-modules'],
  rules: {
    'dot-notation': 'error',
    'no-console': 'error',
    'no-param-reassign': 'error',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'typescript/no-unused-vars': 'error',
    'css-modules/no-undef-class': 'error',
    'react/prefer-stateless-function': 'error',
    'react/no-array-index-key': 'error',
    'react/no-typos': 'error',
    'react/no-unknown-property': ['error', { ignore: ['class', 'for'] }],
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off'
  }
}
