const { spawnSync } = require('child_process')

function run(command, opts, recommendedArgs) {
  const args = opts.recommended ? recommendedArgs : process.argv.slice(3).join(' ')
  const commandWithArgs = `${command} ${args}`

  console.log(`\nFLT Running: ${commandWithArgs}\n···\n`) // eslint-disable-line no-console
  return spawnSync(commandWithArgs, { shell: true, stdio: 'inherit' })
}

module.exports = run
