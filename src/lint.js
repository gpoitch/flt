const run = require('./run')

const command = 'eslint'
const recommendedArgs =
  'DEBUG=eslint:cli-engine eslint . --ext .js,.ts,.graphql --ignore-path .gitignore `[ -z "$CI" ] && echo \'--cache --fix\'`'

module.exports = opts => run(command, opts, recommendedArgs)
