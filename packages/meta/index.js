const debug = require('debug')('nuxt:pwa')

const find = (arr, key, val) => arr.find(obj => val ? obj[key] === val : obj[key])

module.exports = function nuxtMeta (_options) {
  const hook = () => {
    debug('Adding meta')
    generateMeta.call(this, _options)
  }

  if (this.options.mode === 'spa') {
    return hook()
  }

  this.nuxt.hook ? this.nuxt.hook('build:before', hook) : this.nuxt.plugin('build', hook)
}

function generateMeta (_options) {
  // Defaults
  const defaults = {
    name: process.env.npm_package_name,
    description: process.env.npm_package_description,
    charset: 'utf-8',
    viewport: undefined,
    mobileApp: true,
    nativeUI: false,
    favicon: true,
    mobileAppIOS: undefined,
    appleStatusBarStyle: 'default',
    theme_color: this.options.loading && this.options.loading.color,
    lang: 'en',
    ogType: 'website',
    ogTitle: true,
    ogDescription: true
  }

  // Combine sources
  const options = Object.assign({}, defaults, this.options.manifest, this.options.meta, _options)

  // Default value for viewport
  if (options.viewport === undefined) {
    options.viewport = options.nativeUI ? 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, minimal-ui' : 'width=device-width, initial-scale=1'
  }

  // Default value for mobileAppIOS
  if (options.mobileAppIOS === undefined) {
    options.mobileAppIOS = !!options.nativeUI
  }

  // Charset
  if (options.charset && !find(this.options.head.meta, 'charset')) {
    this.options.head.meta.push({ hid: 'charset', charset: options.charset })
  }

  // Viewport
  if (options.viewport && !find(this.options.head.meta, 'name', 'viewport')) {
    this.options.head.meta.push({ hid: 'viewport', name: 'viewport', content: options.viewport })
  }

  // mobileApp
  if (options.mobileApp && !find(this.options.head.meta, 'name', 'mobile-web-app-capable')) {
    this.options.head.meta.push({ hid: 'mobile-web-app-capable', name: 'mobile-web-app-capable', content: 'yes' })
  }

  // mobileApp (IOS)
  if (options.mobileAppIOS && !find(this.options.head.meta, 'name', 'apple-mobile-web-app-capable')) {
    this.options.head.meta.push({ hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' })
  }

  // statusBarStyle (IOS)
  if (options.mobileAppIOS && options.appleStatusBarStyle && !find(this.options.head.meta, 'name', 'apple-mobile-web-app-status-bar-style')) {
    this.options.head.meta.push({ hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: options.appleStatusBarStyle })
  }

  // Icons
  if (options.favicon && options.icons && options.icons.length > 0) {
    const iconSmall = options.icons[0]
    const iconBig = options.icons[options.icons.length - 1]

    if (!find(this.options.head.link, 'rel', 'shortcut icon')) {
      this.options.head.link.push({ rel: 'shortcut icon', href: iconSmall.src })
    }

    if (!find(this.options.head.link, 'rel', 'apple-touch-icon')) {
      this.options.head.link.push({ rel: 'apple-touch-icon', href: iconBig.src, sizes: iconBig.sizes })
    }

    // Launch Screen Image (IOS)
    if (options.mobileAppIOS && !find(this.options.head.link, 'rel', 'apple-touch-startup-image')) {
      this.options.head.link.push({ rel: 'apple-touch-startup-image', href: iconBig.src })
    }
  }

  // Title
  if (options.name && !this.options.head.title) {
    this.options.head.title = options.name
  }

  // IOS launch icon title
  const title = options.name || this.options.head.title || false
  if (title && !find(this.options.head.meta, 'name', 'apple-mobile-web-app-title')) {
    this.options.head.meta.push({ hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: title })
  }

  // description meta
  if (options.description && !find(this.options.head.meta, 'name', 'description')) {
    this.options.head.meta.push({ hid: 'description', name: 'description', content: options.description })
  }

  // theme-color meta
  if (options.theme_color && !find(this.options.head.meta, 'name', 'theme-color')) {
    this.options.head.meta.push({ hid: 'theme-color', name: 'theme-color', content: options.theme_color })
  }

  // Add lang to html tag
  if (options.lang && !(this.options.head.htmlAttrs && this.options.head.htmlAttrs.lang)) {
    if (!this.options.head.htmlAttrs) {
      this.options.head.htmlAttrs = {}
    }
    this.options.head.htmlAttrs.lang = options.lang
  }

  // og:type
  if (options.ogType && !find(this.options.head.meta, 'property', 'og:type') && !find(this.options.head.meta, 'name', 'og:type')) {
    this.options.head.meta.push({ hid: 'og:type', name: 'og:type', property: 'og:type', content: options.ogType })
  }

  // og:title
  if (options.ogTitle === true) {
    options.ogTitle = options.name
  }
  if (options.ogTitle && !find(this.options.head.meta, 'property', 'og:title') && !find(this.options.head.meta, 'name', 'og:title')) {
    this.options.head.meta.push({ hid: 'og:title', name: 'og:title', property: 'og:title', content: options.ogTitle })
  }

  // og:description
  if (options.ogDescription === true) {
    options.ogDescription = options.description
  }
  if (options.ogDescription && !find(this.options.head.meta, 'property', 'og:description') && !find(this.options.head.meta, 'name', 'og:description')) {
    this.options.head.meta.push({ hid: 'og:description', name: 'og:description', property: 'og:description', content: options.ogDescription })
  }
}

module.exports.meta = require('./package.json')
