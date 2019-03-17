const path = require('path')

const defaults = require('./defaults')
const { joinUrl, getRouteParams, startCase } = require('@nuxtjs/pwa-utils')

const HMRRegex = '(?!.*(__webpack_hmr|hot-update))'

function getOptions (moduleOptions) {
  const options = Object.assign({}, defaults, moduleOptions, this.options.workbox)

  // routerBase
  if (!options.routerBase) {
    options.routerBase = this.options.router.base
  }

  // publicPath
  if (!options.publicPath) {
    const { publicPath } = getRouteParams(this.options)
    options.publicPath = publicPath
  }

  // swTemplate
  if (!options.swTemplate) {
    const disabled = this.options.dev && !options.dev
    options.swTemplate = path.resolve(__dirname, `../templates/sw${disabled ? '.disable' : ''}.js`)
  }

  // swDest
  if (!options.swDest) {
    options.swDest = path.resolve(this.options.srcDir, this.options.dir.static || 'static', 'sw.js')
  }

  // swURL
  options.swURL = joinUrl(options.routerBase, options.swURL || 'sw.js')

  // swScope
  if (!options.swScope) {
    options.swScope = options.routerBase
  }

  // Cache all _nuxt resources at runtime
  if (!options.assetsURLPattern) {
    options.assetsURLPattern = joinUrl(options.publicPath, HMRRegex)
  }
  if (options.cacheAssets) {
    options.runtimeCaching.push({
      urlPattern: options.assetsURLPattern,
      handler: 'CacheFirst'
    })
  }

  // Optionally cache other routes for offline
  if (!options.pagesURLPattern) {
    options.pagesURLPattern = joinUrl(options.routerBase, HMRRegex)
  }
  if (options.offline && !options.offlinePage) {
    options.runtimeCaching.push({
      urlPattern: options.pagesURLPattern,
      handler: 'NetworkFirst'
    })
  }

  // Add offlineAssets to precaching
  if (options.offlineAssets.length) {
    options.preCaching.unshift(...options.offlineAssets)
  }

  // Add offlinePage to precaching
  if (options.offlinePage) {
    options.preCaching.unshift(options.offlinePage)
  }

  // Default cacheId
  if (options.cacheOptions.cacheId === undefined) {
    options.cacheOptions.cacheId = (process.env.npm_package_name || 'nuxt') + (this.options.dev ? '-dev' : '-prod')
  }

  // Normalize runtimeCaching
  options.runtimeCaching = options.runtimeCaching.map(entry => ({
    ...entry,
    handler: startCase(entry.handler) || 'NetworkFirst',
    method: entry.method || 'GET'
  }))

  // Workbox URL
  if (!options.workboxURL) {
    options.workboxURL = `https://cdn.jsdelivr.net/npm/workbox-cdn@${options.workboxVersion}/workbox/workbox-sw.js`
  }

  // Workbox Config
  if (options.config.debug === undefined) {
    // Debug field is by default set to true for localhost domain which is not always ideal
    options.config.debug = options.dev || this.options.dev
  }

  return options
}

module.exports = {
  getOptions
}
