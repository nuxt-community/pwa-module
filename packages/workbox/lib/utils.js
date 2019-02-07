const { readFileSync, existsSync } = require('fs')

function readJSFiles (files) {
  return Array.from(files)
    .map(Boolean)
    .map(path => {
      path = this.nuxt.resolveAlias(path)
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
