<h1 align="center">⚡ PWA Module</h1>

<p align="center">
<a href="https://www.npmjs.com/package/@nuxtjs/pwa">
    <img alt="" src="https://img.shields.io/npm/dt/@nuxtjs/pwa.svg?style=flat-square">
</a>
<a href="https://www.npmjs.com/package/@nuxtjs/pwa">
    <img alt="" src="https://img.shields.io/npm/v/@nuxtjs/pwa.svg?style=flat-square">
</a>
<a href="https://github.com/bakjs/@nuxtjs/pwa">
    <img alt="" src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square">
</a>
<a href="https://circleci.com/gh/nuxt-community/pwa-module">
    <img alt="" src="https://img.shields.io/circleci/project/github/nuxt-community/pwa-module.svg?style=flat-square">
</a>
<a href="https://codecov.io/gh/nuxt-community/pwa-module">
    <img alt="" src="https://img.shields.io/codecov/c/github/nuxt-community/pwa-module.svg?style=flat-square">
</a>
</p>

> Progressive Web Apps (PWA) are reliable, fast,and engaging, although there are many things that can take a PWA from a baseline to exemplary experience. ([learn more](https://developers.google.com/web/progressive-web-apps))

Using Nuxt PWA you can supercharge your current or next Nuxt project with a heavily tested, updated and stable PWA solution and zero-config!

<h2 align="center">Contents</h2>

- [Quick Setup](#quick-setup)
- [Configuration](#configuration)
- [Modules](#modules)
    - [Manifest](#manifest)
    - [Meta](#meta)
    - [Workbox](#workbox)
    - [Icon](#icon)
- [License](#license)

<!-- PWA -->
<h2 align="center">Quick Setup</h2>

1. Install npm package:

```js
yarn add @nuxtjs/pwa
```

2. Edit your `nuxt.config.js` file to add pwa module:

```js
{
    modules: [
        '@nuxtjs/pwa',
    ],
}
```

3. Ensure `static` dir exists and optionally create `static/icon.png`. (Recommended to be square png and >= `512x512px`)

4. Create or add this to `.gitignore`:

```
sw.*
workbox-*
```

<h2 align="center">Configuration</h2>

PWA module is actually a preset, with a collection of smaller modules and is designed to magically work out of the box **without need to any configs**. To disable each sub-module, you can pass `false` option with it's name as key. For example to disable _icon_ module:

```js
{
    modules: [
        ['@nuxtjs/pwa', { icon: false }],
    ]
}
```

Also each sub-module has it's own configuration. Continue reading this docs, for detailed info.


<h2 align="center">Modules</h2>

<!-- Manifest -->
## Manifest

[![npm](https://img.shields.io/npm/dt/@nuxtjs/manifest.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/manifest)
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/manifest/latest.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/manifest)

This module adds [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) with no pain!

You can add additional options to `manifest` section of `nuxt.config.js` to override defaults:

```js
{
  manifest: {
    name: 'My Awesome App',
    lang: 'fa'
  }
}
```

<!-- Meta -->
## Meta

[![npm](https://img.shields.io/npm/dt/@nuxtjs/meta.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/meta)
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/meta/latest.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/meta)

This module easily adds common meta tags into your project with zero-config needed.

You can optionally override meta using either `manifest` or `meta` section of `nuxt.config.js`:

```js
{
  meta: {
    // ...
  }
}
``` 

### options

Meta / Link                            | Customize With        |   Default value 
---------------------------------------|-----------------------|-------------------
`charset`                              | `charset`             | `utf-8`
`viewport`                             | `viewport`            | `width=device-width, initial-scale=1, minimal-ui`
`mobile-web-app-capable`               | `mobileApp`           | `true`
`apple-mobile-web-app-capable`         | `mobileAppIOS`*       | **`false`**
`apple-mobile-web-app-status-bar-style`| `appleStatusBarStyle`*| `default`
`shortcut icon` + `apple-touch-icon`   | `favicon`             | `true` (to use options.icons)
`title`                                | `name`                | npm_package_name
`description`                          | `description`         | npm_package_description
`theme-color`                          | `theme_color`         | options.loading.color
`lang`                                 | `lang`                | `en`
`og:type`                              | `ogType`              | `website`
`og:title`                             | `ogTitle`             | same as options.name
`og:description`                       | `ogDescription`       | same as options.description


Please read this resources before setting IOS specific options:

- https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
- https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb

<!-- Workbox -->
## Workbox

[![npm](https://img.shields.io/npm/dt/@nuxtjs/workbox.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/workbox)
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/workbox/latest.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/workbox)

Workbox is a collection of JavaScript libraries for Progressive Web Apps.
([Learn more](https://github.com/GoogleChrome/workbox))

This module adds full offline support using workbox.

### Options
For list of available options
see [generateSW](https://workboxjs.org/reference-docs/latest/module-workbox-build.html#.generateSW).

<!-- Icon -->
## Icon

[![npm](https://img.shields.io/npm/dt/@nuxtjs/icon.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/icon)
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/icon/latest.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/icon)

This module automatically generates app icons and favicon with different sizes using [jimp](https://github.com/oliver-moran/jimp).

- This module fills `manifest.icons[]` with proper paths to generated assets that is used by [manifest](../manifest) module. 
- Source icon is being resized using *cover* method. 

### options

#### `iconSrc`
- Default: `[srcDir]/static/icon.png`

#### `sizes`
- Default: `[16, 120, 144, 152, 192, 384, 512]`

Array of sizes to be generated (Square). 

<h2 align="center">License</h2>

MIT - Nuxt Community - Pooya Parsa
