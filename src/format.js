const run = require('./run')
const configPath = require.resolve('./configs/.prettierrc.js')

const command = 'prettier'
const recommendedArgs = `'**/*.{js,ts,graphql,css,md,json}' --config ${configPath} --ignore-path .gitignore \`[ -z "$CI" ] && echo '--write' || echo '--list-different'\``

module.exports = opts => run(command, opts, recommendedArgs)
