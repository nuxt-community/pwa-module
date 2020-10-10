const { resolve } = require('path')
const { getOptions } = require('./options')
const { readJSFiles, pick, copyTemplate } = require('./utils')

module.exports = async function nuxtWorkbox (pwa) {
  const { nuxt } = this

  const options = getOptions.call(this, pwa)

  // Warning for dev option
  if (options.dev) {
    // eslint-disable-next-line no-console
    console.warn('Workbox is running in development mode')
  }

  // Register plugin
  if (options.autoRegister) {
    this.addPlugin({
      src: resolve(__dirname, `templates/workbox${options.enabled ? '' : '.unregister'}.js`),
      ssr: false,
      fileName: 'workbox.js',
      options: {
        ...options
      }
    })
  }

  // Add sw.js
  if (options.swTemplate) {
    copyTemplate({
      src: options.swTemplate,
      dst: options.swDest,
      options: {
        dev: nuxt.options.dev,
        swOptions: pick(options, [
          'workboxURL',
          'importScripts',
          'config',
          'cacheNames',
          'clientsClaim',
          'skipWaiting',
          'cleanupOutdatedCaches',
          'offlineAnalytics',
          'preCaching',
          'runtimeCaching',
          'offlinePage',
          'pagesURLPattern',
          'offlineStrategy'
        ]),
        routingExtensions: await readJSFiles.call(this, options.routingExtensions),
        cachingExtensions: await readJSFiles.call(this, options.cachingExtensions),
        workboxExtensions: await readJSFiles.call(this, options.workboxExtensions)
      }
    })
  }
}
