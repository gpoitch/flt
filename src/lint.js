const { join } = require('path')
const { existsSync } = require('fs')
const run = require('./run')
const configPath = require.resolve('./configs/.eslintrc.js')

const pwd = process.cwd()
const hasOwnConfig =
  existsSync(join(pwd, '.eslintrc.js')) ||
  existsSync(join(pwd, '.eslintrc')) ||
  Boolean(require(join(pwd, 'package.json')).eslintConfig)

const command = 'DEBUG=eslint:cli-engine eslint'
const recommendedArgs = `. --ext .js,.ts --ignore-path .gitignore \`[ -z "$CI" ] && echo '--cache --fix'\` ${
  hasOwnConfig ? '' : '--config ' + configPath
}`

module.exports = opts => run(command, opts, recommendedArgs)
