const { spawnSync } = require('child_process')

function useRecommended(argv) {
  const commands = argv._
  const mainCommand = commands[0]
  return !mainCommand || (commands.length === 1 && ['format', 'lint', 'test'].indexOf(mainCommand) > -1)
}

function run(command, argv, recommendedArgs) {
  const args = useRecommended(argv) ? recommendedArgs : process.argv.slice(3).join(' ')
  const commandWithArgs = `${command} ${args}`
  console.log(`\n\x1b[36m[FLT]\x1b[0m ${commandWithArgs}\n`) // eslint-disable-line no-console
  return spawnSync(commandWithArgs, { shell: true, stdio: 'inherit' })
}

module.exports = run
