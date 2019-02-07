const path = require('path')

const { getOptions } = require('./options')
const { readJSFiles } = require('./utils')

module.exports = function nuxtWorkbox (moduleOptions) {
  this.nuxt.hook('build:before', () => {
    // Get options
    const options = getOptions.call(this, moduleOptions)

    // Warning for dev option
    if (options.dev) {
      console.warn('`workbox.dev` enabled. Remember to clean application data and unregister service workers in your browser or you will experience infinity loop!')
    }

    // Register plugin
    if (options.autoRegister) {
      this.addPlugin({
        src: path.resolve(__dirname, '../templates/sw.register.js'),
        ssr: false,
        fileName: 'sw.register.js',
        options: {
          ...options
        }
      })
    }

    // Add sw.js
    if (options.swTemplate) {
      this.addTemplate({
        src: options.swTemplate,
        fileName: options.swDest,
        options: {
          ...options,
          routingExtensions: readJSFiles.call(this, options.routingExtensions),
          cachingExtensions: readJSFiles.call(this, options.cachingExtensions),
          workboxExtensions: readJSFiles.call(this, options.workboxExtensions)
        }
      })
    }
  })
}

module.exports.meta = require('../package.json')
