const path = require('path')
const swBuild = require('workbox-build')
const { readFileSync, writeFileSync, existsSync } = require('fs')
const hashSum = require('hash-sum')
const debug = require('debug')('nuxt:pwa')
const { defaultsDeep, pick } = require('lodash')

const fixUrl = url => url.replace(/\/\//g, '/').replace(':/', '://')
const isUrl = url => url.indexOf('http') === 0 || url.indexOf('//') === 0

// =============================================
// workboxModule
// =============================================

module.exports = function nuxtWorkbox (moduleOptions) {
  if (this.options.dev) {
    return
  }

  let options

  const hook = builder => {
    debug('Adding workbox')
    options = getOptions.call(this, moduleOptions)
    workboxInject.call(this, options)
    setHeaders.call(this, options)
    emitAssets.call(this, options)
    addTemplates.call(this, options)
  }

  // Get client output path (#83)
  this.extendBuild((config, { isClient }) => {
    if (!isClient) {
      return
    }

    if (!options.clientBuildDir) {
      options.clientBuildDir = config.output.path
    }

    if (!options.globDirectory) {
      options.globDirectory = options.clientBuildDir
    }
  })

  this.nuxt.hook ? this.nuxt.hook('build:before', hook) : this.nuxt.plugin('build', hook)
}

// =============================================
// getRouterBase
// =============================================

function loadScriptExtension (scriptExtension) {
  if (scriptExtension) {
    const extPath = this.nuxt.resolveAlias(scriptExtension)
    if (existsSync(extPath)) {
      return readFileSync(extPath, 'utf8')
    }
    return null
  }
}

function getOptions (moduleOptions) {
  // Router Base
  const routerBase = this.options.router.base
  let publicPath = fixUrl(`${routerBase}/${this.options.build.publicPath}`)
  if (isUrl(this.options.build.publicPath)) { // CDN
    publicPath = this.options.build.publicPath
    if (publicPath.indexOf('//') === 0) {
      publicPath = '/' + publicPath // Escape fixUrl
    }
  }

  const defaults = {
    autoRegister: true,
    routerBase,
    publicPath,
    swSrc: path.resolve(this.options.buildDir, 'sw.template.js'),
    swDest: path.resolve(this.options.srcDir, this.options.dir.static || 'static', 'sw.js'),
    directoryIndex: '/',
    cachingExtensions: null,
    routingExtensions: null,
    config: null,
    cacheId: process.env.npm_package_name || 'nuxt',
    clientsClaim: true,
    skipWaiting: true,
    globPatterns: ['**/*.{js,css}'],
    globDirectory: undefined,
    modifyUrlPrefix: {
      '': fixUrl(publicPath)
    },
    offline: true,
    offlinePage: null,
    offlineAssets: [],
    _runtimeCaching: [
      // Cache all _nuxt resources at runtime
      // They are hashed by webpack so are safe to loaded by cacheFirst handler
      {
        urlPattern: fixUrl(publicPath + '/.*'),
        handler: 'cacheFirst'
      }
    ],
    runtimeCaching: []
  }

  const options = defaultsDeep({}, this.options.workbox, moduleOptions, defaults)

  // Backward compatibility
  // https://github.com/nuxt-community/pwa-module/pull/86
  if (Array.isArray(options.offlinePageAssets)) {
    options.offlineAssets = options.offlineAssets.concat(options.offlinePageAssets)
    delete options.offlinePageAssets
  }

  // Optionally cache other routes for offline
  if (options.offline && !options.offlinePage) {
    options._runtimeCaching.push({
      urlPattern: fixUrl(`${routerBase}/.*`),
      handler: 'networkFirst'
    })
  }

  if (options.cachingExtensions) {
    options.cachingExtensions = loadScriptExtension.call(this, options.cachingExtensions)
  }

  if (options.routingExtensions) {
    options.routingExtensions = loadScriptExtension.call(this, options.routingExtensions)
  }

  return options
}

// =============================================
// addTemplates
// =============================================

function addTemplates (options) {
  // Add sw.template.js
  this.addTemplate({
    src: path.resolve(__dirname, 'templates/sw.template.js'),
    fileName: 'sw.template.js',
    options: {
      offlinePage: options.offlinePage,
      offlineAssets: options.offlineAssets,
      cachingExtensions: options.cachingExtensions,
      routingExtensions: options.routingExtensions,
      config: options.config,
      importScripts: [options.wbDst].concat(options.importScripts || []),
      runtimeCaching: [].concat(options._runtimeCaching, options.runtimeCaching).map(i => (Object.assign({}, i, {
        urlPattern: i.urlPattern,
        handler: i.handler || 'networkFirst',
        method: i.method || 'GET'
      }))),
      clientsClaim: options.clientsClaim,
      skipWaiting: options.skipWaiting,
      wbOptions: {
        cacheId: options.cacheId,
        directoryIndex: options.directoryIndex,
        cleanUrls: false
      }
    }
  })

  // Add sw.plugin.js
  if (options.autoRegister) {
    const swURL = `${options.routerBase}/${options.swURL || 'sw.js'}`
    this.addPlugin({
      src: path.resolve(__dirname, 'templates/sw.plugin.js'),
      ssr: false,
      fileName: 'sw.plugin.js',
      options: {
        swURL: fixUrl(swURL),
        swScope: fixUrl(`${options.routerBase}/`)
      }
    })
  }
}

// =============================================
// emitAssets
// =============================================

function emitAssets (options) {
  const assets = []
  const emitAsset = (path, name, ext = 'js') => {
    const source = readFileSync(path)
    const hash = hashSum(source)
    const dst = `${name}.${hash}.${ext}`
    assets.push({ source, dst })
    return dst
  }

  // Write assets after build
  const hook = builder => {
    assets.forEach(({ source, dst }) => {
      writeFileSync(path.resolve(options.clientBuildDir, dst), source, 'utf-8')
    })
  }

  if (this.nuxt.hook) {
    this.nuxt.hook('build:done', hook)
  } else {
    this.nuxt.plugin('build', builder => {
      builder.plugin('built', hook)
    })
  }

  // workbox.js
  let wbPath = require.resolve('workbox-sw')
  if (options.dev) {
    wbPath = wbPath.replace(/prod/g, 'dev')
  }
  options.wbDst = fixUrl(options.publicPath + '/' + emitAsset(wbPath, 'workbox' + (options.dev ? '.dev' : '')))
}

// =============================================
// workboxInject
// =============================================

function workboxInject (options) {
  const hook = () => {
    const opts = pick(options, [
      'swDest', 'swSrc', 'globDirectory', 'globFollow', 'globIgnores', 'globPatterns', 'dontCacheBustUrlsMatching',
      'globStrict', 'templatedUrls', 'maximumFileSizeToCacheInBytes', 'modifyUrlPrefix', 'manifestTransforms'
    ])
    return swBuild.injectManifest(opts)
  }

  if (this.nuxt.hook) {
    this.nuxt.hook('build:done', hook)
  } else {
    this.nuxt.plugin('build', builder => {
      builder.plugin('built', hook)
    })
  }
}

// =============================================
// setHeaders
// =============================================

function setHeaders (options) {
  if (options.customHeaders) {
    return
  }

  const originalSetHeadersMethod = this.options.render.static.setHeaders

  this.options.render.static.setHeaders = (res, path) => {
    if (path.match(/sw\.js$/)) {
      // Prevent caching service worker
      res.setHeader('Cache-Control', 'no-cache')
    } else {
      if (typeof originalSetHeadersMethod !== 'undefined') {
        originalSetHeadersMethod(res, path)
      }
    }
  }
}

module.exports.meta = require('./package.json')
