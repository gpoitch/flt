const format = require('./format')
const lint = require('./lint')
const test = require('./test')
const all = require('./all')
const { useRecommended } = require('./utils')

const cli = require('yargs')
  .command('', 'Format, lint & test your code')
  .command('format', 'Format your code with prettier', {}, format)
  .command('lint', 'Lint your code with eslint', {}, lint)
  .command('test', 'Test your code with mocha', {}, test)

const argv = cli.argv
if (useRecommended(argv)) {
  all(argv)
}

module.exports = cli
