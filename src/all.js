const format = require('./format')
const lint = require('./lint')
const test = require('./test')

function all(opts) {
  format(opts)
  lint(opts)
  test(opts)
}

module.exports = all
