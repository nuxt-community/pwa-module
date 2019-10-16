const hash = require('hasha')

const { joinUrl, getRouteParams, find } = require('../utils')

module.exports = function nuxtManifest (pwa) {
  const hook = () => {
    addManifest.call(this, pwa)
  }

  if (this.options.mode === 'spa') {
    return hook()
  }

  this.nuxt.hook('build:before', hook)
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
    theme_color: this.options.loading && this.options.loading.color,
    lang: 'en',
    fileExtension: 'json'
  }

  const options = { ...defaults, ...pwa.manifest }

  const usingDisencouragedFileExtension = ('' + options.fileExtension).toLocaleLowerCase().match('json')

  if (usingDisencouragedFileExtension) {
    console.warn(
      'Manifest recommended file extension is "webmanifest" ' +
      '(https://www.w3.org/TR/appmanifest/#using-a-link-element-to-link-to-a-manifest). Consider ' +
      'changing the `fileExtension` property to "webmanifest" in the `manifest` section of your nuxt.config.js'
    )
  }

  // Remve extra fields from manifest
  const manifest = { ...options }
  delete manifest.src
  delete manifest.publicPath
  delete manifest.fileExtension

  // Stringify manifest & generate hash
  const manifestSource = JSON.stringify(manifest)
  const manifestFileName = `manifest.${hash(manifestSource).substr(0, 8)}.${options.fileExtension}`

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
