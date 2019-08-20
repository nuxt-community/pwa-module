const { readFile, exists, outputFile } = require('fs-extra')
const template = require('lodash.template')

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

async function compileTemplate ({ src, fileName, options }) {
  const fileContent = await readFile(src, 'utf8')
  try {
    const templateFunction = template(fileContent)
    const contents = templateFunction({
      dev: this.options.dev,
      options
    })
    await outputFile(fileName, contents, 'utf8')
  } catch (err) {
    throw new Error(`Could not compile template ${src}: ${err.message}`)
  }
}

module.exports = {
  readJSFiles,
  compileTemplate
}
