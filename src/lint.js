const run = require('./run')
const hasOwnConfig = require('./has-own-config')

const hasOwnLintConfig = hasOwnConfig('eslint', 'eslintConfig')
const configPath = !hasOwnLintConfig && require.resolve('../config/eslint.config.js')
const recommendedArgs = [
  '. --ext .js,.ts,.tsx',
  '--ignore-path .gitignore',
  !hasOwnLintConfig && `--config "${configPath}"`,
  !process.env.CI && '--cache --fix'
]
  .filter(Boolean)
  .join(' ')

module.exports = (opts) => {
  process.env.DEBUG = 'eslint:cli-engine'
  return run('eslint', opts, recommendedArgs)
}
