const hash = require('hasha')

const { joinUrl, getRouteParams } = require('../utils')

module.exports = function nuxtManifest (pwa) {
  this.nuxt.hook('build:before', () => addManifest.call(this, pwa))
}

function addManifest (pwa) {
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
    theme_color: pwa.meta.theme_color,
    lang: 'en',
    useWebmanifestExtension: false,
    fileName: 'manifest.[hash].[ext]'
  }

  const options = { ...defaults, ...pwa.manifest }

  // Remove extra fields from manifest
  const manifest = { ...options }
  delete manifest.src
  delete manifest.publicPath
  delete manifest.useWebmanifestExtension
  delete manifest.fileName

  // Generate file name
  const manifestFileName = options.fileName
    .replace('[hash]', hash(JSON.stringify(manifest)).substr(0, 8))
    .replace('[ext]', options.useWebmanifestExtension ? 'webmanifest' : 'json')

  // Merge final manifest into options.manifest for other modules
  if (!this.options.manifest) {
    this.options.manifest = {}
  }
  Object.assign(this.options.manifest, manifest)

  // Register webpack plugin to emit manifest
  const manifestSource = JSON.stringify(manifest, null, 2)
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
  const manifestMeta = { rel: 'manifest', href: joinUrl(options.publicPath, manifestFileName), hid: 'manifest' }
  if (manifest.crossorigin) {
    manifestMeta.crossorigin = manifest.crossorigin
  }
  pwa._manifestMeta = manifestMeta
}
