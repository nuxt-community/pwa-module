const path = require('path')
const swBuild = require('workbox-build')
const { readFileSync, writeFileSync } = require('fs')
const hashSum = require('hash-sum')
const debug = require('debug')('nuxt:pwa')
const { defaultsDeep } = require('lodash')

const fixUrl = url => url.replace(/\/\//g, '/').replace(':/', '://')
const isUrl = url => url.indexOf('http') === 0 || url.indexOf('//') === 0

// =============================================
// workboxModule
// =============================================

module.exports = function nuxtWorkbox (moduleOptions) {
  if (this.options.dev) {
    return
  }

  const hook = builder => {
    debug('Adding workbox')
    const options = getOptions.call(this, moduleOptions)
    workboxInject.call(this, options)
    emitAssets.call(this, options)
    addTemplates.call(this, options)
  }

  this.nuxt.hook ? this.nuxt.hook('build:before', hook) : this.nuxt.plugin('build', hook)
}

// =============================================
// getRouterBase
// =============================================

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
    swDest: path.resolve(this.options.srcDir, 'static', 'sw.js'),
    directoryIndex: '/',
    cacheId: process.env.npm_package_name || 'nuxt',
    clientsClaim: true,
    globPatterns: ['**/*.{js,css}'],
    globDirectory: path.resolve(this.options.buildDir, 'dist'),
    modifyUrlPrefix: {
      '': fixUrl(publicPath)
    },
    _runtimeCaching: [
      // Cache all _nuxt resources at runtime
      // They are hashed by webpack so are safe to loaded by cacheFirst handler
      {
        urlPattern: fixUrl(publicPath + '/.*'),
        handler: 'cacheFirst'
      },
      // Cache other routes if offline
      {
        urlPattern: fixUrl(routerBase + '/.*'),
        handler: 'networkFirst'
      }
    ],
    runtimeCaching: []
  }

  const options = defaultsDeep({}, this.options.workbox, moduleOptions, defaults)

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
      importScripts: [options.wbDst].concat(options.importScripts || []),
      runtimeCaching: [].concat(options._runtimeCaching, options.runtimeCaching).map(i => (Object.assign({}, i, {
        urlPattern: i.urlPattern,
        handler: i.handler || 'networkFirst',
        method: i.method || 'GET'
      }))),
      wbOptions: {
        cacheId: options.cacheId,
        clientsClaim: options.clientsClaim,
        directoryIndex: options.directoryIndex
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
    assets.push({source, dst})
    return dst
  }

  // Write assets after build
  const hook = builder => {
    assets.forEach(({source, dst}) => {
      writeFileSync(path.resolve(this.options.buildDir, 'dist', dst), source, 'utf-8')
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
    const opts = Object.assign({}, options)
    delete opts.runtimeCaching
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

module.exports.meta = require('./package.json')
