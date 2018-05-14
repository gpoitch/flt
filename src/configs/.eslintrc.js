module.exports = {
  env: {
    node: true,
    browser: true,
    mocha: true
  },
  extends: ['standard', 'prettier'],
  rules: {
    'no-console': 'error',
    'prefer-const': 'error',
    'no-param-reassign': 'error',
    'dot-notation': 'error',
    'object-shorthand': 'error',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }]
  }
}
