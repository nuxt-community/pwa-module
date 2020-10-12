const { resolve } = require('path')
const { existsSync } = require('fs')
const mergeMeta = require('./meta.merge')

module.exports = function nuxtMetaRuntime () {
  const { nuxt } = this

  const spaSupport = () => {
    const metaJSON = resolve(nuxt.options.buildDir, 'pwa/meta.json')
    if (existsSync(metaJSON)) {
      mergeMeta(nuxt.options.head, require(metaJSON))
    }
  }

  nuxt.hook('render:resourcesLoaded', () => spaSupport())
}
