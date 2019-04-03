const run = require('./run')
const hasOwnConfig = require('./has-own-config')

const hasOwnFormatConfig = hasOwnConfig('prettier')
const configPath = !hasOwnFormatConfig && require.resolve('./configs/.prettierrc.js')
const recommendedArgs = `"**/*.{js,ts,graphql,css,md,json}" --ignore-path .gitignore ${
  hasOwnFormatConfig ? '' : '--config ' + configPath
} ${process.env.CI ? '--list-different' : '--write'}`

module.exports = opts => run('prettier', opts, recommendedArgs)
