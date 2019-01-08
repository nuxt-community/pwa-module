const { readFileSync, existsSync } = require('fs')

function fixUrl (url) {
  return url.replace(/\/\//g, '/').replace(':/', '://')
}
function isUrl (url) {
  return url.indexOf('http') === 0 || url.indexOf('//') === 0
}

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
  fixUrl,
  isUrl,
  readJSFiles
}
