const fs = require('fs')
const path = require('path')

const appDirectory = fs.realpathSync(process.cwd())

module.exports = function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath)
}
