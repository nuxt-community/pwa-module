const { readFileSync, existsSync } = require('fs')

function isString (value) {
  return typeof value === "string"
}

function readJSFiles (files) {
  return Array.from(isString(files) ? [files] : files)
    .map(path => {
      path = this.nuxt.resolver.resolvePath(path)
      if (path && existsSync(path)) {
        return readFileSync(path, 'utf8')
      } else {
        throw new Error('Can not read ' + path)
      }
    })
    .join('\n\n')
}

module.exports = {
  readJSFiles
}
