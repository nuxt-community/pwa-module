const path = require('path')
const swBuild = require('workbox-build')
const { readFileSync, writeFileSync } = require('fs')
const hashSum = require('hash-sum')
const debug = require('debug')('nuxt:pwa:workbox')

const fixUrl = url => url.replace(/\/\//g, '/').replace(':/', '://')
const isUrl = url => url.indexOf('http') === 0 || url.indexOf('//') === 0

// =============================================
// workboxModule
// =============================================

module.exports = function nuxtWorkbox (moduleOptions) {
  const options = Object.assign({}, moduleOptions, this.options.workbox)
  const ctx = { options }

  if (this.options.dev) {
    return
  }

  this.nuxt.plugin('build', builder => {
    debug('Adding workbox')
    getRouterBase.call(this, ctx)
    workboxInject.call(this, ctx)
    emitAssets.call(this, ctx)
    addTemplates.call(this, ctx)
  })
}

// =============================================
// getRouterBase
// =============================================

function getRouterBase (ctx) {
  const routerBase = this.options.router.base
  let publicPath = fixUrl(`${routerBase}/${this.options.build.publicPath}`)
  if (isUrl(this.options.build.publicPath)) { // CDN
    publicPath = this.options.build.publicPath
    if (publicPath.indexOf('//') === 0) {
      publicPath = '/' + publicPath // Escape fixUrl
    }
  }

  ctx.routerBase = routerBase
  ctx.publicPath = publicPath
}

// =============================================
// addTemplates
// =============================================

function addTemplates (ctx) {
  // Add sw.template.js
  this.addTemplate({
    src: path.resolve(__dirname, 'templates/sw.template.js'),
    fileName: 'sw.template.js',
    options: {
      importPath: ctx.wbDst,
      wb: ctx.workboxOptions
    }
  })

  // Add sw.plugin.js
  const swURL = `${ctx.routerBase}/${ctx.options.swURL || 'sw.js'}`
  this.addPlugin({
    src: path.resolve(__dirname, 'templates/sw.plugin.js'),
    ssr: false,
    fileName: 'sw.plugin.js',
    options: {
      swURL: fixUrl(swURL),
      swScope: fixUrl(`${ctx.routerBase}/`)
    }
  })
}

// =============================================
// emitAssets
// =============================================

function emitAssets (ctx) {
  const assets = []
  const emitAsset = (path, name, ext = 'js') => {
    const source = readFileSync(path)
    const hash = hashSum(source)
    const dst = `${name}.${hash}.${ext}`
    assets.push({source, dst})
    return dst
  }

  // Write assets after build
  this.nuxt.plugin('build', builder => {
    builder.plugin('built', () => {
      assets.forEach(({source, dst}) => {
        writeFileSync(path.resolve(this.options.buildDir, 'dist', dst), source, 'utf-8')
      })
    })
  })

  // workbox.js
  let wbPath = require.resolve('workbox-sw')
  if (ctx.options.dev) {
    wbPath = wbPath.replace(/prod/g, 'dev')
  }
  ctx.wbDst = fixUrl(ctx.publicPath + '/' + emitAsset(wbPath, 'workbox' + (ctx.options.dev ? '.dev' : '')))
}

// =============================================
// workboxInject
// =============================================

function workboxInject (ctx) {
  // https://workboxjs.org/reference-docs/latest/module-workbox-build.html#.generateSW
  ctx.workboxOptions = Object.assign({
    swSrc: path.resolve(this.options.buildDir, 'sw.template.js'),
    swDest: path.resolve(this.options.srcDir, 'static', 'sw.js'),
    directoryIndex: '/',
    cacheId: process.env.npm_package_name + '_' + process.env.npm_package_version,
    clientsClaim: true,
    globPatterns: ['**/*.{js,css}'],
    globDirectory: path.resolve(this.options.buildDir, 'dist'),
    modifyUrlPrefix: {
      '': fixUrl(ctx.publicPath)
    },
    runtimeCaching: [
      // Cache routes if offline
      {
        urlPattern: fixUrl(ctx.routerBase + '/**'),
        handler: 'networkFirst'
      },
      // Cache other _nuxt resources runtime
      // They are hashed by webpack so are safe to loaded by cacheFirst handler
      {
        urlPattern: fixUrl(ctx.publicPath + '/**'),
        handler: 'cacheFirst'
      }
    ]
  }, ctx.options)

  this.nuxt.plugin('build', builder => {
    builder.plugin('built', () => {
      const opts = Object.assign({}, ctx.workboxOptions)
      delete opts.runtimeCaching
      return swBuild.injectManifest(opts)
    })
  })
}

module.exports.meta = require('./package.json')
