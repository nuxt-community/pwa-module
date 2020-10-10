const { resolve } = require('path')
const { existsSync, writeFile, readFile } = require('fs-extra')

const { getOptions } = require('./options')
const { readJSFiles, pick } = require('./utils')

module.exports = function nuxtWorkbox (pwa) {
  const { nuxt } = this
  const options = getOptions.call(this, pwa)

  this.nuxt.hook('build:before', async () => {
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
      const templateOptions = {
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

      this.addTemplate({
        src: options.swTemplate,
        fileName: 'pwa/sw.js',
        options: templateOptions
      })

      this.addTemplate({
        src: options.swTemplate,
        fileName: options.swDest,
        options: templateOptions
      })
    }
  })

  if (nuxt.options.target === 'static') {
    nuxt.hook('generate:before', async () => {
      const swJS = resolve(nuxt.options.buildDir, 'pwa/sw.js')
      if (existsSync(swJS)) {
        await writeFile(options.swDest, await readFile(swJS))
      }
    })
  }
}
