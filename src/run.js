const { spawnSync } = require('child_process')

function run(command, opts, recommendedArgs) {
  const args = opts.recommended ? recommendedArgs : process.argv.slice(3).join(' ')
  const commandWithArgs = `${command} ${args}`
  const binCommandWithArgs = `node_modules/.bin/${commandWithArgs}`

  console.log(`\nFLT Running: ${commandWithArgs}\n···\n`) // eslint-disable-line no-console
  return spawnSync(binCommandWithArgs, { shell: true, stdio: 'inherit' })
}

module.exports = run
