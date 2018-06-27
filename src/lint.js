const run = require('./run')
const configPath = require.resolve('./configs/.eslintrc.js')

const command = 'DEBUG=eslint:cli-engine eslint'
const recommendedArgs = `. --config ${configPath} --ext .js,.ts,.graphql --ignore-path .gitignore \`[ -z "$CI" ] && echo '--cache --fix'\``

module.exports = opts => run(command, opts, recommendedArgs)
