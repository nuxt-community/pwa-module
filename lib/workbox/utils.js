const { readFile, exists } = require('fs-extra')

async function readJSFiles (files) {
  const contents = []

  for (const file of Array.isArray(files) ? files : [files]) {
    const path = this.nuxt.resolver.resolvePath(file)
    if (path && await exists(path)) {
      contents.push(await readFile(path, 'utf8'))
    } else {
      throw new Error('Can not read ' + path)
    }
  }

  return contents.join('\n\n')
}

module.exports = {
  readJSFiles
}
