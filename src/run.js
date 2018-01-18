const { spawnSync } = require('child_process')
const { useRecommended } = require('./utils')

function run(command, argv, recommendedArgs) {
  const args = useRecommended(argv) ? recommendedArgs : process.argv.slice(3).join(' ')
  const commandWithArgs = `${command} ${args}`

  console.log(`\n[FLT]: ${commandWithArgs}\n`) // eslint-disable-line no-console
  return spawnSync(commandWithArgs, { shell: true, stdio: 'inherit' })
}

module.exports = run
