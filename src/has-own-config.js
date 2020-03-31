const { join } = require('path')
const { existsSync } = require('fs')

const pwd = process.cwd()

module.exports = function hasOwnConfig(moduleName, packageField) {
  return (
    existsSync(join(pwd, `.${moduleName}rc.js`)) ||
    existsSync(join(pwd, `.${moduleName}rc`)) ||
    existsSync(join(pwd, `${moduleName}.config.js`)) ||
    Boolean(require(join(pwd, 'package.json'))[packageField || moduleName])
  )
}
