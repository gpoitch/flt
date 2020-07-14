const format = require('./format')
const lint = require('./lint')
const test = require('./test')

const cli = require('yargs')
  .command('format', 'Format your code with prettier', {}, format)
  .command('lint', 'Lint your code with eslint', {}, lint)
  .command('test', 'Test your code with mocha', {}, test)

const argv = cli.argv
if (!argv._[0]) {
  format(argv)
  lint(argv)
  test(argv)
}

module.exports = cli
