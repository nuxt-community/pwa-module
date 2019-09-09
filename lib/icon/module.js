const fs = require('fs-extra')
const path = require('path')
const hasha = require('hasha')
const { fork } = require('child_process')
const { joinUrl, getRouteParams } = require('../utils')

module.exports = function (pwa) {
  this.nuxt.hook('build:before', () => run.call(this, pwa, true))

  if (this.options.mode === 'spa' && !this.options.dev) {
    return run.call(this, pwa, false) // Fill meta
  }
}

async function run (pwa, _emitAssets) {
  const { publicPath } = getRouteParams(this.options)

  // Defaults
  const defaults = {
    iconFileName: 'icon.png',
    sizes: [64, 120, 144, 152, 192, 384, 512],
    targetDir: 'icons',
    accessibleIcons: true,
    iconProperty: '$icon',
    publicPath,
    iconSrc: null,

    _iconHash: null,
    _cacheDir: null,
    _icons: null,
    _assetIcons: null
  }

  // Merge options
  const options = {
    ...defaults,
    ...pwa.icon
  }

  // Find iconSrc
  options.iconSrc = await findIcon.call(this, options)

  // Disable module if no icon specified
  if (!options.iconSrc) {
    return
  }

  // Generate icons
  await generateIcons.call(this, options)

  // Add manifest
  addManifest.call(this, options, pwa)

  // Add plugin
  if (options.accessibleIcons) {
    addPlugin.call(this, options)
  }

  // Emit assets in background
  if (_emitAssets) {
    emitAssets.call(this, options)
  }
}

async function findIcon (options) {
  const iconSearchPath = [
    options.iconSrc,
    path.resolve(this.options.srcDir, this.options.dir.static, options.iconFileName),
    path.resolve(this.options.srcDir, this.options.dir.assets, options.iconFileName)
  ].filter(p => p)

  for (const iconSrc of iconSearchPath) {
    if (await fs.exists(iconSrc)) {
      return iconSrc
    }
  }
}

async function addPlugin (options) {
  const icons = {}
  for (const icon of options._assetIcons) {
    icons[icon.sizes] = icon.src
  }

  if (options.accessibleIcons) {
    this.addPlugin({
      src: path.resolve(__dirname, './plugin.js'),
      fileName: 'nuxt-icons.js',
      options: {
        iconProperty: options.iconProperty,
        icons
      }
    })
  }
}

async function generateIcons (options) {
  // Get hash of source image
  if (!options.iconHash) {
    options.iconHash = await hasha.fromFile(options.iconSrc).then(h => h.substring(0, 6))
  }
  if (!options._cacheDir) {
    options._cacheDir = path.join(__dirname, '.cache', options.iconHash)
  }

  // Generate _icons
  options._icons = {}
  for (const size of options.sizes) {
    options._icons[size] = `${options.targetDir}/icon_${size}.${options.iconHash}.png`
  }

  // Generate _assetIcons
  options._assetIcons = options.sizes.map(size => ({
    src: joinUrl(options.publicPath, options._icons[size]),
    sizes: `${size}x${size}`,
    type: 'image/png'
  }))
}

function addManifest (options, pwa) {
  if (!pwa.manifest) {
    pwa.manifest = {}
  }
  if (!pwa.manifest.icons) {
    pwa.manifest.icons = []
  }

  pwa.manifest.icons.push(...options._assetIcons)
}

function emitAssets (options) {
  // Start resize task in background
  const resizePromise = resizeIcons.call(this, options)

  // Register webpack plugin to emit icons
  this.extendBuild((config, { isClient }) => {
    if (isClient) {
      config.plugins.push({
        apply (compiler) {
          compiler.hooks.emit.tapPromise('nuxt-pwa-icon', async compilation => {
            await resizePromise
            await Promise.all(options.sizes.map(async size => {
              const targetFilename = options._icons[size]
              const srcFileName = path.join(options._cacheDir, `${size}.png`)
              const src = await fs.readFile(srcFileName)
              compilation.assets[targetFilename] = { source: () => src, size: () => src.length }
            }))
          })
        }
      })
    }
  })
}

async function resizeIcons (options) {
  if (await fs.exists(options._cacheDir)) {
    return
  }

  await fs.mkdirp(options._cacheDir)

  await new Promise((resolve, reject) => {
    const child = fork(require.resolve('./resize'), [
      JSON.stringify({
        input: options.iconSrc,
        distDir: options._cacheDir,
        sizes: options.sizes
      })
    ])
    child.on('exit', (code) => {
      return code ? reject(code) : resolve()
    })
  })
}
