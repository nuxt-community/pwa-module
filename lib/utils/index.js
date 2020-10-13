const { posix, resolve, dirname } = require('path')
const { writeFile, mkdirp } = require('fs-extra')

function isUrl (url) {
  return url.indexOf('http') === 0 || url.indexOf('//') === 0
}

function joinUrl (...args) {
  return posix.join(...args).replace(':/', '://')
}

function normalizeSize (size) {
  if (!Array.isArray(size)) {
    size = [size, size]
  }
  if (size.length === 1) {
    size = [size, size]
  } else if (size.length === 0) {
    size = 64
  }
  return size
}

function sizeName (size) {
  size = normalizeSize(size)
  const prefix = size[2] ? (size[2] + '_') : ''
  return prefix + size[0] + 'x' + size[1]
}

function getRouteParams (options) {
  // routerBase
  const routerBase = options.router.base

  // publicPath
  let publicPath
  if (isUrl(options.build.publicPath)) {
    publicPath = options.build.publicPath
  } else {
    publicPath = joinUrl(routerBase, options.build.publicPath)
  }

  return {
    routerBase,
    publicPath
  }
}

function startCase (str) {
  return typeof str === 'string' ? str[0].toUpperCase() + str.substr(1) : str
}

async function writeData (path, data) {
  path = path.split('?')[0]
  await mkdirp(dirname(path))
  await writeFile(path, await data)
}

function emitAsset (nuxt, fileName, data) {
  const emitAsset = async () => {
    const buildPath = resolve(nuxt.options.buildDir, 'dist/client', fileName)
    await writeData(buildPath, data)
  }

  nuxt.hook('build:done', () => emitAsset())

  const isGenerate = nuxt.options.target === 'static' && !nuxt.options.dev
  if (isGenerate) {
    nuxt.hook('modules:done', () => emitAsset())
  }
}

module.exports = {
  isUrl,
  joinUrl,
  getRouteParams,
  startCase,
  normalizeSize,
  sizeName,
  emitAsset
}
