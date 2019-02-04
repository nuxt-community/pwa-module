const path = require('path')

const defaults = require('./defaults')
const { fixUrl, isUrl } = require('./utils')

function getOptions (moduleOptions) {
  const options = Object.assign({}, defaults, moduleOptions, this.options.workbox)

  // routerBase
  if (!options.routerBase) {
    options.routerBase = this.options.router.base
  }

  // publicPath
  if (!options.publicPath) {
    if (isUrl(this.options.build.publicPath)) {
      // CDN
      options.publicPath = this.options.build.publicPath
      if (options.publicPath.indexOf('//') === 0) {
        options.publicPath = '/' + options.publicPath
      }
    } else {
      options.publicPath = fixUrl(`${options.routerBase}/${this.options.build.publicPath}`)
    }
  }

  // swTemplate
  if (!options.swTemplate) {
    options.swTemplate = path.resolve(__dirname, '../templates/sw.js')
  }

  // swDest
  if (!options.swDest) {
    options.swDest = path.resolve(this.options.srcDir, this.options.dir.static || 'static', 'sw.js')
  }

  // swURL
  if (!options.swURL) {
    options.swURL = fixUrl(`${options.routerBase}/sw.js`)
  }

  // swScope
  if (!options.swScope) {
    options.swScope = fixUrl(`${options.routerBase}/`)
  }

  // Cache all _nuxt resources at runtime
  // They are hashed by webpack so are safe to loaded by cacheFirst handler
  if (options.cacheAssets) {
    options.runtimeCaching.push({
      urlPattern: fixUrl(options.publicPath + '/.*'),
      handler: 'cacheFirst'
    })
  }

  // Optionally cache other routes for offline
  if (options.offline && !options.offlinePage) {
    options.runtimeCaching.push({
      urlPattern: fixUrl(`${options.routerBase}/.*`),
      handler: 'networkFirst'
    })
  }

  // Normalize runtimeCaching
  options.runtimeCaching = options.runtimeCaching.map(entry => ({
    ...entry,
    handler: entry.handler || 'networkFirst',
    method: entry.method || 'GET'
  }))

  // Workbox URL
  if (!options.workboxURL) {
    options.workboxURL = `https://cdn.jsdelivr.net/npm/workbox-cdn@${options.workboxVersion}/workbox/workbox-sw.js`
  }

  return options
}

module.exports = {
  getOptions
}
