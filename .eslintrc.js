module.exports = {
  env: {
    node: true,
    browser: true,
    mocha: true
  },
  plugins: ['prettier'],
  extends: ['standard', 'prettier'],
  rules: {
    'no-console': 'warn',
    'prefer-const': 'error',
    'no-param-reassign': 'error',
    'prettier/prettier': 'error'
  }
}
