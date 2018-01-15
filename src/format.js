const run = require('./run')

const command = 'prettier'
const recommendedArgs =
  "'**/*.{js,ts,graphql,css,md}' --ignore-path .gitignore `[ -z \"$CI\" ] && echo '--write' || echo '--list-different'`"

module.exports = opts => run(command, opts, recommendedArgs)
