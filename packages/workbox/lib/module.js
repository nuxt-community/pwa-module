const path = require('path')

const { getOptions } = require('./options')
const { readJSFiles } = require('./utils')

module.exports = function nuxtWorkbox (moduleOptions) {
  // Options will be lazy evaluated on build only
  let options

  this.nuxt.hook('build:before', () => {
    // Ealuate options
    options = getOptions.call(this, moduleOptions)

    // Add sw.plugin.js
    if (options.autoRegister) {
      this.addPlugin({
        src: path.resolve(__dirname, '../templates/sw.plugin.js'),
        ssr: false,
        fileName: 'sw.plugin.js',
        options
      })
    }

    // Add sw.js
    this.addTemplate({
      src: path.resolve(__dirname, '../templates/sw.js'),
      fileName: 'sw.js',
      options: {
        ...options,
        routingExtensions: readJSFiles(options.routingExtensions),
        cachingExtensions: readJSFiles(options.cachingExtensions)
      }
    })
  })
}

module.exports.meta = require('../package.json')
