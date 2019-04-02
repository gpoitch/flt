const run = require('./run')
const hasOwnConfig = require('./has-own-config')

const hasOwnLintConfig = hasOwnConfig('eslint', 'eslintConfig')
const configPath = !hasOwnLintConfig && require.resolve('./configs/.eslintrc.js')
const command = 'DEBUG=eslint:cli-engine eslint'
const recommendedArgs = `. --ext .js,.ts --ignore-path .gitignore ${hasOwnLintConfig ? '' : '--config ' + configPath} ${
  process.env.CI ? '' : '--cache --fix'
}`

module.exports = opts => run(command, opts, recommendedArgs)
