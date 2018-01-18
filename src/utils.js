function useRecommended(argv) {
  const command = argv._[0]
  return !command || ['format', 'lint', 'test'].indexOf(command) === -1
}

module.exports = { useRecommended }
