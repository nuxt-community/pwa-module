const path = require('path')

const { getOptions } = require('./options')
const { readJSFiles } = require('./utils')

module.exports = function nuxtWorkbox (moduleOptions) {
  this.nuxt.hook('build:before', () => {
    // Get options
    const options = getOptions.call(this, moduleOptions)

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
          routingExtensions: readJSFiles(options.routingExtensions),
          cachingExtensions: readJSFiles(options.cachingExtensions)
        }
      })
    }
  })
}

module.exports.meta = require('../package.json')
