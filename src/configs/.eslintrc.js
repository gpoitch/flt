module.exports = {
  env: {
    node: true,
    browser: true,
    mocha: true
  },
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  plugins: ['css-modules'],
  settings: { react: { version: '16.0' } },
  rules: {
    'dot-notation': 'error',
    'no-console': 'error',
    'no-param-reassign': 'error',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'react/prefer-stateless-function': 'error',
    'react/no-array-index-key': 'error',
    'react/no-typos': 'error',
    'react/no-unknown-property': ['error', { ignore: ['class', 'for'] }],
    'react/no-deprecated': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off'
  },
  overrides: {
    files: ['**/*.ts'],
    parser: 'typescript-eslint-parser',
    rules: {
      'no-undef': 'off'
    }
  }
}
