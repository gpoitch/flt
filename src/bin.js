#!/usr/bin/env node

const format = require('./format')
const lint = require('./lint')
const test = require('./test')
const all = require('./all')

const cli = require('yargs')
  .command('format', 'Format your code with prettier', {}, format)
  .command('lint', 'Lint your code with eslint', {}, lint)
  .command('test', 'Test your code with mocha', {}, test)
  .command('all', 'Format, lint & test your code', {}, all)
  .option('recommended', {
    alias: 'r',
    describe: 'Use the recommended flags for each command',
    boolean: true
  }).argv

module.exports = cli
