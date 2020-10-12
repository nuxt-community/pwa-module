const { resolve } = require('path')
const { getOptions } = require('./options')
const { readJSFiles, pick, copyTemplate } = require('./utils')

module.exports = async function nuxtWorkbox (nuxt, pwa, moduleContainer) {
  const options = getOptions(nuxt, pwa)

  // Warning for dev option
  if (options.dev) {
    // eslint-disable-next-line no-console
    console.warn('Workbox is running in development mode')
  }

  // Register plugin
  if (options.autoRegister) {
    moduleContainer.addPlugin({
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
        routingExtensions: await readJSFiles(nuxt, options.routingExtensions),
        cachingExtensions: await readJSFiles(nuxt, options.cachingExtensions),
        workboxExtensions: await readJSFiles(nuxt, options.workboxExtensions)
      }
    })
  }
}
