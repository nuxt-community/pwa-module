const { existsSync } = require('fs-extra')
const path = require('path')
const Jimp = require('jimp')
const { joinUrl, getRouteParams } = require('@nuxtjs/pwa-utils')

module.exports = function nuxtIcon (options) {
  const hook = () => {
    return generateIcons.call(this, options)
  }

  if (this.options.mode === 'spa') {
    return hook()
  }

  this.nuxt.hook('build:before', hook)
}

const defaults = {
  iconSrc: null,
  iconFileName: 'icon.png',
  sizes: [64, 120, 144, 152, 192, 384, 512],
  targetDir: 'icons'
}

function generateIcons (moduleOptions) {
  // Combine sources
  const options = Object.assign({}, defaults, this.options.icon, moduleOptions)

  const { publicPath } = getRouteParams(this.options)

  // Resolve iconSrc
  let iconSrc

  const iconSearchPath = [
    options.iconSrc,
    path.resolve(this.options.srcDir, this.options.dir.static, options.iconFileName),
    path.resolve(this.options.srcDir, this.options.dir.assets, options.iconFileName)
  ]

  for (const p of iconSearchPath) {
    if (existsSync(p)) {
      iconSrc = p
      break
    }
  }

  // Ensure icon file exists
  if (!existsSync(iconSrc)) {
    return
  }

  return Jimp.read(iconSrc).then(srcIcon => {
    // get base64 phash of source image
    const hash = srcIcon.hash()
    return Promise.all(options.sizes.map(size => new Promise((resolve, reject) => {
      srcIcon.clone().contain(size, size).getBuffer(Jimp.MIME_PNG, (err, buff) => {
        if (err) {
          return reject(err)
        }
        const fileName = `${options.targetDir}/icon_${size}.${hash}.png`
        resolve({ size, buff, fileName })
      })
    }))).then(icons => {
      // Fill manifest icons
      if (!this.options.manifest) {
        this.options.manifest = {}
      }
      if (!this.options.manifest.icons) {
        this.options.manifest.icons = []
      }
      const assetIcons = []
      const exportIcons = {}
      icons.forEach(icon => {
        const src = joinUrl(publicPath, icon.fileName)
        assetIcons.push({
          src,
          sizes: `${icon.size}x${icon.size}`,
          type: `image/png`
        })

        exportIcons[icon.size] = src
      })

      assetIcons.forEach(icon => { this.options.manifest.icons.push(icon) })

      // Add plugin to Vue to access icons
      let moduleOptions = Object.assign({
        accessibleIcons: true,
        iconProperty: '$icon',
        icons: exportIcons
      }, options)

      if (moduleOptions.accessibleIcons) {
        this.addPlugin({
          src: path.resolve(__dirname, './plugin.js'),
          fileName: 'nuxt-icons.js',
          options: moduleOptions
        })
      }

      // Register webpack plugin to emit icons
      this.options.build.plugins.push({
        apply (compiler) {
          compiler.hooks.emit.tap('nuxt-pwa-icon', compilation => {
            icons.forEach(icon => {
              compilation.assets[icon.fileName] = {
                source: () => icon.buff,
                size: () => icon.buff.length
              }
            })
          })
        }
      })
    })
  }).catch(err => {
    console.error('[icon] unable to read', err)
  })
}

module.exports.meta = require('./package.json')
