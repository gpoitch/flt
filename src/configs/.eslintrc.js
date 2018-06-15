module.exports = {
  env: {
    node: true,
    browser: true,
    mocha: true
  },
  extends: ['standard', 'prettier'],
  rules: {
    'dot-notation': 'error',
    'no-console': 'error',
    'no-param-reassign': 'error',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'object-shorthand': 'error',
    'prefer-const': 'error'
  }
}
