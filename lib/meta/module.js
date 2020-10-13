const { join, resolve } = require('path')
const { existsSync } = require('fs')
const { isUrl } = require('../utils')
const nuxtMetaRuntime = require('./module.runtime')

module.exports = function nuxtMeta (nuxt, pwa, moduleContainer) {
  // Defaults
  const defaults = {
    name: process.env.npm_package_name,
    author: process.env.npm_package_author_name,
    description: process.env.npm_package_description,
    charset: 'utf-8',
    viewport: undefined,
    mobileApp: true,
    nativeUI: false,
    favicon: true,
    mobileAppIOS: undefined,
    appleStatusBarStyle: undefined,
    theme_color: undefined,
    lang: 'en',
    ogType: 'website',
    ogSiteName: true,
    ogTitle: true,
    ogDescription: true,
    ogImage: true,
    ogHost: undefined,
    ogUrl: true,
    twitterCard: undefined,
    twitterSite: undefined,
    twitterCreator: undefined
  }

  // Combine sources
  const options = { ...defaults, ...pwa.manifest, ...pwa.meta }

  // Default value for viewport
  if (options.viewport === undefined) {
    options.viewport = options.nativeUI
      ? 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, minimal-ui'
      : 'width=device-width, initial-scale=1'
  }

  // Default value for mobileAppIOS
  if (options.mobileAppIOS === undefined) {
    options.mobileAppIOS = !!options.nativeUI
  }

  const head = {
    title: '',
    meta: [],
    link: [],
    htmlAttrs: {}
  }

  // Charset
  if (options.charset) {
    head.meta.push({ hid: 'charset', charset: options.charset })
  }

  // Viewport
  if (options.viewport) {
    head.meta.push({ hid: 'viewport', name: 'viewport', content: options.viewport })
  }

  // mobileApp
  if (options.mobileApp) {
    head.meta.push({ hid: 'mobile-web-app-capable', name: 'mobile-web-app-capable', content: 'yes' })
  }

  // mobileApp (IOS)
  if (options.mobileAppIOS) {
    head.meta.push({ hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' })
  }

  // statusBarStyle (IOS)
  if (options.mobileAppIOS || options.appleStatusBarStyle) {
    head.meta.push({
      hid: 'apple-mobile-web-app-status-bar-style',
      name: 'apple-mobile-web-app-status-bar-style',
      content: options.appleStatusBarStyle || 'default'
    })
  }

  // Icons
  if (options.icons && options.icons.length > 0) {
    const iconSmall = options.icons[0]
    const iconBig = options.icons[options.icons.length - 1]

    // Shortcut icon
    if (options.favicon) {
      head.link.push({ rel: 'shortcut icon', href: iconSmall.src })
      head.link.push({ rel: 'apple-touch-icon', href: iconBig.src, sizes: iconBig.sizes })
    }

    // Launch Screen Image (IOS)
    if (options.mobileAppIOS && pwa._iosSplash) {
      const splashes = [
        ['iphonese', '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)'],
        ['iphone6', '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)'],
        ['iphoneplus', '(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)'],
        ['iphonex', '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)'],
        ['iphonexr', '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)'],
        ['iphonexsmax', '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)'],
        ['ipad', '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)'],
        ['ipadpro1', '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)'],
        ['ipadpro2', '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)'],
        ['ipadpro3', '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)']
      ]

      for (const [type, media] of splashes) {
        head.link.push({
          href: pwa._iosSplash[type],
          media,
          rel: 'apple-touch-startup-image',
          hid: 'apple-touch-startup-image-' + type
        })
      }
    }
  } else {
    // favicon.ico as fallback
    // TODO: Drop support as it is harmful: https://mathiasbynens.be/notes/rel-shortcut-icon
    const favicon = join(nuxt.options.srcDir, nuxt.options.dir.static, 'favicon.ico')
    if (existsSync(favicon)) {
      head.link.push({ rel: 'shortcut icon', href: nuxt.options.router.base + 'favicon.ico' })
    }
  }

  // Title
  const title = options.name || options.title
  if (title) {
    head.title = options.name
    // IOS launch icon title
    head.meta.push({ hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: title })
  }

  // Author
  if (options.author) {
    head.meta.push({ hid: 'author', name: 'author', content: options.author })
  }

  // description meta
  if (options.description) {
    head.meta.push({ hid: 'description', name: 'description', content: options.description })
  }

  // theme-color meta
  if (options.theme_color) {
    head.meta.push({ hid: 'theme-color', name: 'theme-color', content: options.theme_color })
  }

  // Add lang to html tag
  if (options.lang) {
    head.htmlAttrs.lang = options.lang
  }

  // og:type
  if (options.ogType) {
    head.meta.push({ hid: 'og:type', name: 'og:type', property: 'og:type', content: options.ogType })
  }

  // og:title
  if (options.ogTitle === true) {
    options.ogTitle = options.name
  }
  if (options.ogTitle) {
    head.meta.push({ hid: 'og:title', name: 'og:title', property: 'og:title', content: options.ogTitle })
  }
  // og:site_name
  if (options.ogSiteName === true) {
    options.ogSiteName = options.name
  }
  if (options.ogSiteName) {
    head.meta.push({ hid: 'og:site_name', name: 'og:site_name', property: 'og:site_name', content: options.ogSiteName })
  }

  // og:description
  if (options.ogDescription === true) {
    options.ogDescription = options.description
  }
  if (options.ogDescription) {
    head.meta.push({ hid: 'og:description', name: 'og:description', property: 'og:description', content: options.ogDescription })
  }

  // og:url
  if (options.ogHost && options.ogUrl === true) {
    options.ogUrl = options.ogHost
  }
  if (options.ogUrl && options.ogUrl !== true) {
    head.meta.push({ hid: 'og:url', name: 'og:url', property: 'og:url', content: options.ogUrl })
  }

  // og:image
  if (options.ogImage === true) {
    if (options.icons && options.icons.length > 0) {
      const iconBig = options.icons[options.icons.length - 1]
      const [width, height] = iconBig.sizes.split('x').map(x => parseInt(x))
      options.ogImage = { path: iconBig.src, width, height, type: iconBig.type }
    } else {
      options.ogImage = false
    }
  } else if (typeof options.ogImage === 'string') {
    options.ogImage = { path: options.ogImage }
  }
  if (options.ogImage) {
    if (options.ogHost || isUrl(options.ogImage.path)) {
      head.meta.push({
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: isUrl(options.ogImage.path) ? options.ogImage.path : options.ogHost + options.ogImage.path
      })
      if (options.ogImage.width && options.ogImage.height) {
        head.meta.push({
          hid: 'og:image:width',
          name: 'og:image:width',
          property: 'og:image:width',
          content: options.ogImage.width
        })
        head.meta.push({
          hid: 'og:image:height',
          name: 'og:image:height',
          property: 'og:image:height',
          content: options.ogImage.height
        })
      }
      if (options.ogImage.type) {
        head.meta.push({
          hid: 'og:image:type',
          name: 'og:image:type',
          property: 'og:image:type',
          content: options.ogImage.type
        })
      }
    }
  }

  // twitter:card
  if (options.twitterCard) {
    head.meta.push({ hid: 'twitter:card', name: 'twitter:card', property: 'twitter:card', content: options.twitterCard })
  }

  // twitter:site
  if (options.twitterSite) {
    head.meta.push({ hid: 'twitter:site', name: 'twitter:site', property: 'twitter:site', content: options.twitterSite })
  }

  // twitter:creator
  if (options.twitterCreator) {
    head.meta.push({ hid: 'twitter:creator', name: 'twitter:creator', property: 'twitter:creator', content: options.twitterCreator })
  }

  // manifest meta
  if (pwa._manifestMeta) {
    head.link.push(pwa._manifestMeta)
  }

  moduleContainer.addPlugin({
    src: resolve(__dirname, './plugin.js'),
    fileName: 'pwa/meta.js',
    options: {}
  })

  moduleContainer.addTemplate({
    src: resolve(__dirname, 'meta.json'),
    fileName: 'pwa/meta.json',
    options: { head }
  })

  moduleContainer.addTemplate({
    src: resolve(__dirname, 'meta.merge.js'),
    fileName: 'pwa/meta.merge.js',
    options: { head }
  })

  nuxtMetaRuntime(nuxt)
}
