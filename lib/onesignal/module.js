const path = require('path')
const { writeFileSync, readFileSync } = require('fs')
const hasha = require('hasha')
const defu = require('defu')
const { getRouteParams, joinUrl } = require('../utils')

// =============================================
// oneSignal Module
// =============================================

module.exports = function nuxtOneSignal (oneSignalOptions) {
  const hook = () => {
    addOneSignal.call(this, oneSignalOptions)
  }

  if (this.options.mode === 'spa') {
    return hook()
  }

  this.nuxt.hook('build:before', hook)
}

// =============================================
// addOneSignal
// =============================================

function addOneSignal (oneSignalOptions) {
  const { publicPath } = getRouteParams(this.options)

  // Merge options
  const defaults = {
    OneSignalSDK: undefined,
    cdn: true,
    GcmSenderId: '482941778795',
    importScripts: [
      '/sw.js?' + Date.now()
    ],
    init: {
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true
      }
    }
  }

  const options = defu({ ...this.options.oneSignal, ...oneSignalOptions }, defaults)

  if (options.OneSignalSDK === undefined) {
    if (options.cdn) {
      // Use OneSignalSDK.js from CDN
      options.OneSignalSDK = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js'
    } else {
      // Use OneSignalSDK.js from Dist
      const OneSignalSDKJS = readFileSync(path.resolve(__dirname, 'dist/OneSignalSDK.js'))
      const OneSignalSDKHash = hasha(OneSignalSDKJS)
      const OneSignalSDKFile = `ons.${OneSignalSDKHash}.js`

      options.OneSignalSDK = joinUrl(publicPath, OneSignalSDKFile)

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
  if (!this.options.head.script.find(s => s.hid === 'onesignal')) {
    this.options.head.script.push({
      async: true,
      src: options.OneSignalSDK,
      hid: 'onesignal'
    })
  }

  // Adjust manifest for oneSignal
  if (!this.options.manifest) {
    this.options.manifest = {}
  }
  this.options.manifest.gcm_sender_id = options.GcmSenderId

  // Adjust swURL option of Workbox for oneSignal
  if (!this.options.workbox) {
    this.options.workbox = {}
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
