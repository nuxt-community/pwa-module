const hash = require('hash-sum')

const { joinUrl, getRouteParams, find } = require('@nuxtjs/pwa-utils')

module.exports = function nuxtManifest (options) {
  const hook = () => {
    addManifest.call(this, options)
  }

  if (this.options.mode === 'spa') {
    return hook()
  }

  this.nuxt.hook('build:before', hook)
}

function addManifest (_options) {
  const { routerBase, publicPath } = getRouteParams(this.options)

  // Combine sources
  const defaults = {
    name: process.env.npm_package_name,
    short_name: process.env.npm_package_name,
    description: process.env.npm_package_description,
    publicPath,
    icons: [],
    start_url: routerBase + '?standalone=true',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: this.options.loading && this.options.loading.color,
    lang: 'en'
  }
  const options = { ...defaults, ...this.options.manifest, ..._options }

  // Remve extra fields from manifest
  const manifest = { ...options }
  delete manifest.src
  delete manifest.publicPath

  // Stringify manifest & generate hash
  const manifestSource = JSON.stringify(manifest)
  const manifestFileName = `manifest.${hash(manifestSource)}.json`

  // Merge final manifest into options.manifest for other modules
  if (!this.options.manifest) {
    this.options.manifest = {}
  }
  Object.assign(this.options.manifest, manifest)

  // Register webpack plugin to emit manifest
  this.options.build.plugins.push({
    apply (compiler) {
      compiler.hooks.emit.tap('nuxt-pwa-manifest', (compilation) => {
        compilation.assets[manifestFileName] = {
          source: () => manifestSource,
          size: () => manifestSource.length
        }
      })
    }
  })

  // Add manifest meta
  if (!find(this.options.head.link, 'rel', 'manifest')) {
    const baseAttribute = { rel: 'manifest', href: joinUrl(options.publicPath, manifestFileName) }
    const attribute = manifest.crossorigin ? Object.assign({}, baseAttribute, { crossorigin: manifest.crossorigin }) : baseAttribute
    this.options.head.link.push(attribute)
  } else {
    console.warn('Manifest meta already provided!')
  }
}

module.exports.meta = require('./package.json')
