const path = require('path').posix

function find (arr, key, val) {
  return arr.find(obj => val ? obj[key] === val : obj[key])
}

function isUrl (url) {
  return url.indexOf('http') === 0 || url.indexOf('//') === 0
}

function joinUrl (...args) {
  return path.join(...args).replace(':/', '://')
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

module.exports = {
  find,
  isUrl,
  joinUrl,
  getRouteParams,
  startCase,
  normalizeSize,
  sizeName
}
