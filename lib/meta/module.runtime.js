const { resolve } = require('path')
const { existsSync } = require('fs')
const mergeMeta = require('./meta.merge')

module.exports = function nuxtMetaRuntime () {
  const { nuxt } = this

  const spaSupport = () => {
    const metaJSON = resolve(nuxt.options.buildDir, 'pwa/meta.json')
    if (existsSync(metaJSON)) {
      // eslint-disable-next-line no-console
      console.debug('[PWA] Loading meta from ' + metaJSON)
      mergeMeta(nuxt.options.head, require(metaJSON))
    } else {
      // eslint-disable-next-line no-console
      console.warn('[PWA] Cannot load meta from ' + metaJSON)
    }
  }

  if (nuxt.options.target === 'static') {
    nuxt.hook('generate:extendRoutes', () => spaSupport())
  } else {
    spaSupport()
  }
}
