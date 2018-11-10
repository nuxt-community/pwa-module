const path = require('path')
const { writeFileSync, readFileSync } = require('fs')
const hashSum = require('hash-sum')
const debug = require('debug')('nuxt:pwa')
const { defaultsDeep } = require('lodash')

const fixUrl = url => url.replace(/\/\//g, '/').replace(':/', '://')
const isUrl = url => url.indexOf('http') === 0 || url.indexOf('//') === 0

// =============================================
// oneSignal Module
// =============================================

module.exports = function nuxtOneSignal (moduleOptions) {
  const hook = () => {
    debug('Adding OneSignal')
    addOneSignal.call(this, moduleOptions)
  }

  if (this.options.mode === 'spa') {
    return hook()
  }

  this.nuxt.hook ? this.nuxt.hook('build:before', hook) : this.nuxt.plugin('build', hook)
}

// =============================================
// addOneSignal
// =============================================

function addOneSignal (moduleOptions) {
  // Router Base
  const routerBase = this.options.router.base
  let publicPath = fixUrl(`${routerBase}/${this.options.build.publicPath}`)
  if (isUrl(this.options.build.publicPath)) { // CDN
    publicPath = this.options.build.publicPath
    if (publicPath.indexOf('//') === 0) {
      publicPath = '/' + publicPath // Escape fixUrl
    }
  }

  // Merge options
  const defaults = {
    OneSignalSDK: undefined,
    cdn: false,
    GcmSenderId: '482941778795',
    importScripts: [
      '/sw.js'
    ],
    init: {
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true
      }
    }
  }

  const options = defaultsDeep({}, this.options.oneSignal, moduleOptions, defaults)

  if (options.OneSignalSDK === undefined) {
    if (options.cdn) {
      // Use OneSignalSDK.js from CDN
      options.OneSignalSDK = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js'
    } else {
      // Use OneSignalSDK.js from Dist
      const OneSignalSDKJS = readFileSync(path.resolve(__dirname, 'dist/OneSignalSDK.js'))
      const OneSignalSDKHash = hashSum(OneSignalSDKJS)
      const OneSignalSDKFile = `ons.${OneSignalSDKHash}.js`

      options.OneSignalSDK = fixUrl(publicPath + '/' + OneSignalSDKFile)

      this.options.build.plugins.push({
        apply (compiler) {
          compiler.hooks.emit.tap('nuxt-pwa-onesignal', (compilation) => {
            compilation.assets[OneSignalSDKFile] = {
              source: () => OneSignalSDKJS,
              size: () => OneSignalSDKJS.length
            }
          })
        }
      })
    }
  }

  // Add the oneSignal SDK script to head
  this.options.head.script.push({
    async: true,
    src: options.OneSignalSDK
  })

  // Adjust manifest for oneSignal
  if (!this.options.manifest) {
    this.options.manifest = {}
  }
  if (this.options.manifest.gcm_sender_id) {
    debug('WARNING: Overriding gcm_sender_id for OnSignal')
  }
  this.options.manifest.gcm_sender_id = options.GcmSenderId

  // Adjust swURL option of Workbox for oneSignal
  if (!this.options.workbox) {
    this.options.workbox = {}
  }
  if (this.options.workbox.swURL) {
    debug('WARNING: Overriding swURL for OneSignal')
  }
  this.options.workbox.swURL = 'OneSignalSDKWorker.js'

  // Provide OneSignalSDKWorker.js and OneSignalSDKUpdaterWorker.js
  const makeSW = (name, scripts) => {
    const workerScript = `importScripts(${scripts.map(i => `'${i}'`).join(', ')})\r\n`
    writeFileSync(path.resolve(this.options.srcDir, 'static', name), workerScript, 'utf-8')
  }

  makeSW('OneSignalSDKWorker.js', [].concat(options.importScripts || []).concat(options.OneSignalSDK))
  makeSW('OneSignalSDKUpdaterWorker.js', [options.OneSignalSDK])

  // Add OneSignal plugin
  this.addPlugin({
    src: path.resolve(__dirname, 'templates/plugin.js'),
    ssr: false,
    fileName: 'onesignal.js',
    options
  })
}

module.exports.meta = require('./package.json')
