const path = require('path')

const { getOptions } = require('./options')
const { readJSFiles } = require('./utils')

module.exports = function nuxtWorkbox (moduleOptions) {
  this.nuxt.hook('build:before', () => {
    // Get options
    const options = getOptions.call(this, moduleOptions)

    // Disable if on dev mode and dev options is false
    if (this.options.dev && !options.dev) {
      return
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
    this.addTemplate({
      src: options.swTemplate,
      fileName: options.swDest,
      options: {
        ...options,
        routingExtensions: readJSFiles(options.routingExtensions),
        cachingExtensions: readJSFiles(options.cachingExtensions)
      }
    })
  })
}

module.exports.meta = require('../package.json')
