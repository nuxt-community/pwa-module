const path = require('path')
const { fork } = require('child_process')
const fs = require('fs-extra')
const hasha = require('hasha')
const { joinUrl, getRouteParams, sizeName } = require('../utils')

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
    iosSizes: [
      [1536, 2048, 'ipad'], // Ipad
      [1536, 2048, 'ipadpro9'], // Ipad Pro 9.7"
      [1668, 2224, 'ipadpro10'], // Ipad Pro 10.5"
      [2048, 2732, 'ipadpro12'], // Ipad Pro 12.9"
      [640, 1136, 'iphonese'], // Iphone SE
      [50, 1334, 'iphone6'], // Iphone 6
      [1080, 1920, 'iphoneplus'], // Iphone Plus
      [1125, 2436, 'iphonex'], // Iphone X
      [828, 1792, 'iphonexr'], // Iphone XR
      [1242, 2688, 'iphonexsmax'] // Iphone XS Max
    ],
    targetDir: 'icons',
    accessibleIcons: true,
    iconProperty: '$icon',
    publicPath,
    iconSrc: null,
    purpose: null,

    _iconHash: null,
    _cacheDir: null,
    _assets: null,
    _manifestIcons: null,
    _iosSplash: null
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

  // Verify purpose
  if (options.purpose) {
    const purpose = Array.isArray(options.purpose) ? options.purpose : [options.purpose]
    const len = purpose.length
    const validPurpose = ['badge', 'maskable', 'any']
    options.purpose = purpose.filter(item => validPurpose.includes(item))
    if (len !== options.purpose.length) {
      // eslint-disable-next-line no-console
      console.warn('[pwa] [icon] Some invalid items removed from `options.purpose`. Valid values: ' + validPurpose)
    }
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

function addPlugin (options) {
  const icons = {}
  for (const asset of options._assets) {
    icons[asset.name] = asset.target
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

  // Resize cache dir
  if (!options._cacheDir) {
    options._cacheDir = path.join(__dirname, '.cache', options.iconHash)
  }

  // Icons to be emited by webpack
  options._assets = []

  // Manifest icons
  const purpose = options.purpose ? options.purpose.join(' ') : undefined
  options._manifestIcons = []
  for (const size of options.sizes) {
    const name = sizeName(size)
    const target = `${options.targetDir}/icon_${name}.${options.iconHash}.png`
    options._assets.push({ name, target })
    options._manifestIcons.push({
      src: joinUrl(options.publicPath, target),
      sizes: name,
      type: 'image/png',
      purpose
    })
  }

  // Generate _iosSplash
  options._iosSplash = {}
  for (const size of options.iosSizes) {
    const name = sizeName(size)
    const target = `${options.targetDir}/splash_${name}.${options.iconHash}.png`
    options._assets.push({ name, target })
    options._iosSplash[size[2]] = joinUrl(options.publicPath, target)
  }
}

function addManifest (options, pwa) {
  if (!pwa.manifest) {
    pwa.manifest = {}
  }

  if (!pwa.manifest.icons) {
    pwa.manifest.icons = []
  }
  pwa.manifest.icons.push(...options._manifestIcons)

  pwa._iosSplash = {
    ...options._iosSplash
  }
}

function emitAssets (options) {
  // Start resize task in background
  const resizePromise = resizeIcons.call(this, options)

  // Register webpack plugin to emit icons
  this.extendBuild((config, { isClient }) => {
    if (isClient) {
      config.plugins.push({
        apply (compiler) {
          compiler.hooks.emit.tapPromise('nuxt-pwa-icon', async (compilation) => {
            await resizePromise
            await Promise.all(options._assets.map(async ({ name, target }) => {
              const srcFileName = path.join(options._cacheDir, `${name}.png`)
              const src = await fs.readFile(srcFileName)
              compilation.assets[target] = { source: () => src, size: () => src.length }
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
        sizes: [
          ...options.sizes,
          ...options.iosSizes
        ]
      })
    ])
    child.on('exit', (code) => {
      return code ? reject(code) : resolve()
    })
  })
}
