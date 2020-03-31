const run = require('./run')
const hasOwnConfig = require('./has-own-config')

const hasOwnFormatConfig = hasOwnConfig('prettier')
const configPath = !hasOwnFormatConfig && require.resolve('../config/prettier.config.js')
const recommendedArgs = [
  '"**/*.{js,ts,css,html,json,md,graphql}"',
  '--ignore-path .gitignore',
  !hasOwnFormatConfig && `--config "${configPath}"`,
  process.env.CI ? '--check' : '--write'
]
  .filter(Boolean)
  .join(' ')

module.exports = (opts) => run('prettier', opts, recommendedArgs)
