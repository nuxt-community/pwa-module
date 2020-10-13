const { readFile, existsSync, writeFile } = require('fs-extra')
const template = require('lodash.template')

async function readJSFiles (nuxt, files) {
  const contents = []

  for (const file of Array.isArray(files) ? files : [files]) {
    const path = nuxt.resolver.resolvePath(file)
    if (path && existsSync(path)) {
      contents.push(await readFile(path, 'utf8').then(s => s.trim()))
    } else {
      throw new Error('Can not read ' + path)
    }
  }

  return contents.join('\n\n')
}

function pick (obj, props) {
  const newObj = {}
  props.forEach((prop) => {
    newObj[prop] = obj[prop]
  })
  return newObj
}

async function copyTemplate ({ src, dst, options }) {
  const compile = template(await readFile(src, 'utf8'))
  await writeFile(dst, compile({ options }))
}

module.exports = {
  readJSFiles,
  pick,
  copyTemplate
}
