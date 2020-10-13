const path = require('path')
const { fork } = require('child_process')
const { join } = require('path')
const fs = require('fs-extra')
const hasha = require('hasha')
const { joinUrl, getRouteParams, sizeName, emitAsset } = require('../utils')
const { version } = require('../../package.json')

module.exports = async function (nuxt, pwa, moduleContainer) {
  const { publicPath } = getRouteParams(nuxt.options)

  // Defaults
  const defaults = {
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

    fileName: 'icon.png',
    source: null,
    purpose: ['any', 'maskable'],
    cacheDir: join(nuxt.options.rootDir, 'node_modules/.cache/pwa/icon'),

    targetDir: 'icons',

    plugin: true,
    pluginName: '$icon',

    publicPath,

    _iconHash: null,
    _assets: null,
    _manifestIcons: null,
    _iosSplash: null
  }

  // Merge options
  const options = {
    ...defaults,
    ...pwa.icon
  }

  // Find source
  options.source = await findIcon(nuxt, options)

  // Disable module if no icon specified
  if (!options.source) {
    // eslint-disable-next-line no-console
    console.warn('[pwa] [icon] Icon not found in ' + path.resolve(nuxt.options.srcDir, nuxt.options.dir.static, options.fileName))
    return
  }

  // Verify purpose
  if (options.purpose) {
    if (!Array.isArray(options.purpose)) {
      options.purpose = [options.purpose]
    }
    const validPurpose = ['badge', 'maskable', 'any']
    if (options.purpose.find(p => !validPurpose.includes(p))) {
      // eslint-disable-next-line no-console
      console.warn('[pwa] [icon] Some invalid items removed from `options.purpose`. Valid values: ' + validPurpose)
    }
  }

  // Generate icons
  await generateIcons(nuxt, options)

  // Add manifest
  addManifest(nuxt, options, pwa)

  // Add plugin
  if (options.plugin) {
    addPlugin(nuxt, options, moduleContainer)
  }

  // Emit assets in background
  emitAssets(nuxt, options)
}

function findIcon (nuxt, options) {
  const iconSearchPath = [
    options.source,
    path.resolve(nuxt.options.srcDir, nuxt.options.dir.static, options.fileName),
    path.resolve(nuxt.options.srcDir, nuxt.options.dir.assets, options.fileName)
  ].filter(p => p)

  for (const source of iconSearchPath) {
    if (fs.existsSync(source)) {
      return source
    }
  }
}

function addPlugin (_nuxt, options, moduleContainer) {
  const icons = {}
  for (const asset of options._assets) {
    icons[asset.name] = joinUrl(options.publicPath, asset.target)
  }

  if (options.plugin) {
    moduleContainer.addPlugin({
      src: path.resolve(__dirname, './plugin.js'),
      fileName: 'pwa/icons.js',
      options: {
        pluginName: options.pluginName,
        icons
      }
    })
  }
}

async function generateIcons (_nuxt, options) {
  // Get hash of source image
  if (!options.iconHash) {
    options.iconHash = await hasha.fromFile(options.source).then(h => h.substring(0, 6))
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

function addManifest (_nuxt, options, pwa) {
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

function emitAssets (nuxt, options) {
  // Start resize task in background
  const resizePromise = resizeIcons(nuxt, options)

  for (const { name, target } of options._assets) {
    const srcFileName = path.join(options.cacheDir, `${name}.png`)
    emitAsset(nuxt, target, resizePromise.then(() => fs.readFile(srcFileName)))
  }
}

async function resizeIcons (_nuxt, options) {
  const resizeOpts = JSON.stringify({
    version,
    input: options.source,
    distDir: options.cacheDir,
    sizes: [
      ...options.sizes,
      ...options.iosSizes
    ]
  })

  const integrityFile = path.join(options.cacheDir, '.' + hasha(resizeOpts).substr(0, 8))

  if (fs.existsSync(integrityFile)) {
    return
  }
  await fs.remove(options.cacheDir)
  await fs.mkdirp(options.cacheDir)

  await new Promise((resolve, reject) => {
    const child = fork(require.resolve('./resize'), [resizeOpts], { execArgv: [] })
    child.on('exit', (code) => {
      return code ? reject(code) : resolve()
    })
  })

  await fs.writeFile(integrityFile, '')
}
