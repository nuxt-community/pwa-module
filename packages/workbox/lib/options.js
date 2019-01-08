const path = require('path')

const defaults = require('./defaults')
const { fixUrl, isUrl } = require('./utils')

function getOptions (moduleOptions) {
  const options = Object.assign({}, defaults, moduleOptions, this.options.workbox)

  if (!options.swSrc) {
    options.swSrc = path.resolve(this.options.buildDir, 'sw.template.js')
  }

  if (!options.swDest) {
    options.swDest = path.resolve(this.options.srcDir, this.options.dir.static || 'static', 'sw.js')
  }

  if (!options.routerBase) {
    options.routerBase = this.options.router.base
  }

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

  if (!options.swURL) {
    options.swURL = fixUrl(`${options.routerBase}/${options.swURL || 'sw.js'}`)
  }

  if (!options.swScope) {
    options.swScope = fixUrl(`${options.routerBase}/`)
  }

  if (options.modifyUrlPrefix[''] === undefined) {
    options.modifyUrlPrefix[''] = options.publicPath
  }

  if (!options.clientBuildDir) {
    // TODO
    // options.clientBuildDir = config.output.path // + globDirectory
  }

  // Cache all _nuxt resources at runtime
  // They are hashed by webpack so are safe to loaded by cacheFirst handler
  options.runtimeCaching.push({
    urlPattern: fixUrl(options.publicPath + '/.*'),
    handler: 'cacheFirst'
  })

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

  return options
}

module.exports = {
  getOptions
}
