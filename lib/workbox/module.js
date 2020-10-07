const path = require('path')

const { getOptions } = require('./options')
const { readJSFiles, pick } = require('./utils')

module.exports = function nuxtWorkbox (pwa) {
  this.nuxt.hook('build:before', async () => {
    // Get options
    const options = getOptions.call(this, pwa)

    // Warning for dev option
    if (options.dev) {
      // eslint-disable-next-line no-console
      console.warn('Workbox is running in development mode')
    }

    // Register plugin
    if (options.autoRegister) {
      this.addPlugin({
        src: path.resolve(__dirname, `templates/workbox${options.enabled ? '' : '.unregister'}.js`),
        ssr: false,
        fileName: 'workbox.js',
        options: {
          ...options
        }
      })
    }

    // Add sw.js
    if (options.swTemplate) {
      await this.addTemplate({
        src: options.swTemplate,
        fileName: options.swDest,
        options: {
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
  })
}
