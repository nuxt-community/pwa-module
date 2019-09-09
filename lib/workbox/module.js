const path = require('path')

const { getOptions } = require('./options')
const { readJSFiles } = require('./utils')

module.exports = function nuxtWorkbox (pwa) {
  this.nuxt.hook('build:before', async () => {
    // Get options
    const options = getOptions.call(this, pwa)

    // Warning for dev option
    if (options.dev) {
      console.warn('Workbox running in `dev` mode. Please clear browser cache and prevent using this option for production!')
    }

    // Register plugin
    if (options.autoRegister) {
      this.addPlugin({
        src: path.resolve(__dirname, 'templates/workbox.js'),
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
          ...options,
          routingExtensions: await readJSFiles.call(this, options.routingExtensions),
          cachingExtensions: await readJSFiles.call(this, options.cachingExtensions),
          workboxExtensions: await readJSFiles.call(this, options.workboxExtensions)
        }
      })
    }
  })
}
