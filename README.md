<h1 align="center">⚡ PWA Module</h1>

<p align="center">
<a href="https://circleci.com/gh/nuxt-community/pwa-module">
    <img alt="" src="https://img.shields.io/circleci/project/github/nuxt-community/pwa-module.svg?style=flat-square">
</a>
<a href="https://codecov.io/gh/nuxt-community/pwa-module">
    <img alt="" src="https://img.shields.io/codecov/c/github/nuxt-community/pwa-module.svg?style=flat-square">
</a>
</p>

> Progressive Web Apps (PWA) are reliable, fast,and engaging, although there are many things that can take a PWA from a baseline to exemplary experience. ([learn more](https://developers.google.com/web/progressive-web-apps))

Using Nuxt PWA you can supercharge your current or next Nuxt project with a heavily tested, updated and stable PWA solution and zero-config!


## Packages

Package  | Downloads | Latest | Changelog
---------|-----------|--------|-----------
@nuxtjs/pwa | [![npm](https://img.shields.io/npm/dt/@nuxtjs/pwa.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/pwa) | [![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/pwa/latest.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/pwa) | [Changelog](https://github.com/nuxt-community/pwa-module/blob/master/packages/pwa/CHANGELOG.md)
@nuxtjs/manifest | [![npm](https://img.shields.io/npm/dt/@nuxtjs/manifest.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/manifest) | [![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/manifest/latest.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/manifest) | [Changelog](https://github.com/nuxt-community/pwa-module/blob/master/packages/manifest/CHANGELOG.md)
@nuxtjs/meta | [![npm](https://img.shields.io/npm/dt/@nuxtjs/meta.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/meta) | [![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/meta/latest.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/meta) | [Changelog](https://github.com/nuxt-community/pwa-module/blob/master/packages/meta/CHANGELOG.md)
@nuxtjs/workbox | [![npm](https://img.shields.io/npm/dt/@nuxtjs/workbox.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/workbox) | [![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/workbox/latest.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/workbox) | [Changelog](https://github.com/nuxt-community/pwa-module/blob/master/packages/workbox/CHANGELOG.md)
@nuxtjs/icon | [![npm](https://img.shields.io/npm/dt/@nuxtjs/icon.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/icon) | [![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/icon/latest.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/icon) | [Changelog](https://github.com/nuxt-community/pwa-module/blob/master/packages/icon/CHANGELOG.md)
@nuxtjs/onesignal | [![npm](https://img.shields.io/npm/dt/@nuxtjs/onesignal.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/onesignal) | [![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/onesignal/latest.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/onesignal) | [Changelog](https://github.com/nuxt-community/pwa-module/blob/master/packages/onesignal/CHANGELOG.md)

## Contents

- [Quick Setup](#quick-setup)
- [Configuration](#configuration)
- [Manifest](#manifest)
- [Workbox](#workbox)
- [Icon](#icon)
- [Meta](#meta)
- [OneSignal](#onesignal)

## Quick Setup

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
```

PWA module is a collection of smaller modules that are designed to magically work out of the box together. To disable each sub-module, you can pass `false` option with it's name as key. For example to disable _icon_ module:

```js
modules: [
    ['@nuxtjs/pwa', { icon: false }],
],
```

Also each sub-module has it's own configuration. Continue reading docs for detailed info.

## Manifest
Manifest adds [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) with no pain.

You can pass options to `manifest` section in `nuxt.config.js` to override defaults.

```js
manifest: {
  name: 'My Awesome App',
  lang: 'fa'
}
```

## Workbox
Workbox is a collection of JavaScript libraries for Progressive Web Apps.
([Learn more](https://developers.google.com/web/tools/workbox)). This module adds full offline support using workbox.
Workbox module is only enabled on *production* builds.

You can pass options to `workbox` section in `nuxt.config.js` to override defaults.

```js
workbox: {
 // Workbox options
}
```

### Options

**dev** - Use dev build for workbox service worker lib.

**swURL** - If for any reason you need to register another service worker (OneSignal, etc) you can use this option.

**importScripts** (Array) - Additional scripts to be imported in service worker script. (Relative to `/`. Can be placed in `assets/` directory)

For list of all available options see [this table](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#abstract-types)

## Icon
This module automatically generates app icons and favicon with different sizes using [jimp](https://github.com/oliver-moran/jimp).

- This module fills `manifest.icons[]` with proper paths to generated assets that is used by [manifest](../manifest) module.
- Source icon is being resized using *cover* method.

### options

#### `iconSrc`
- Default: `[srcDir]/static/icon.png`

#### `sizes`
- Default: `[16, 120, 144, 152, 192, 384, 512]`

Array of sizes to be generated (Square).

## Meta
Meta easily adds common meta tags into your project with zero-config needed.
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
`viewport`                             | `viewport`            | `width=device-width, initial-scale=1`
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

By setting `meta.nativeUI` to `true` (Defaults to `false`) `viewport` defaults to `width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, minimal-ui` and `mobileAppIOS` will be enabled if not explicitly set to `false` which is suitable for native looking mobile apps.

Please read this resources if you want to enable `mobileAppIOS` option:

- https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
- https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb

## OneSignal
OneSignal is a Free, high volume and reliable push notification service for websites and mobile applications.[Learn More](https://documentation.onesignal.com/docs/product-overview)

Setting and and using this module is little tricky as OneSignal requires to register it's own Service worker. (see [Web Push SDK Setup (HTTPS)](https://documentation.onesignal.com/docs/web-push-sdk-setup-https))

First add dependency as it is not being installed by default when using PWA module:

```bash
yarn add @nuxtjs/onesignal
# OR
npm i @nuxtjs/onesignal
```

Then add module to `nuxt.config.js` **BEFORE** `@nuxtjs/pwa` and provide options under `oneSignal`:

```js
modules: [
  '@nuxtjs/onesignal',
  '@nuxtjs/pwa',
],

// Options
oneSignal: {
  appId: 'YOUR_APP_ID',
  // ...your other init settings
}
```

### Async Functions
This module exposes oneSignal as `$OneSignal` everywhere. So you can call it. 
Please note that because of async loading of OneSignal SDK script, every action should be pushed into `$OneSignal` stack.

```js
// Inside page components
this.$OneSignal.push(() => {
    this.$OneSignal.isPushNotificationsEnabled((isEnabled) => {
    if (isEnabled) {
      console.log('Push notifications are enabled!')
    } else {
      console.log('Push notifications are not enabled yet.')
    }
  })
})

// Using window and array form
window.$OneSignal.push(['addListenerForNotificationOpened', (data) => {
  console.log('Received NotificationOpened:', data }
]);
```

### Change OneSignal SDK Script URL

By default this modules ships with latest SDK dist.

You can use recommended CDN by using `cdn: true` or changing it to a custom value using `OneSignalSDK`.

```js
oneSignal: {
  // Use CDN
  cdn: true,

  // Use any custom URL
  OneSignalSDK: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js'
}
```

### References

Please see [Web Push SDK Reference](https://documentation.onesignal.com/docs/web-push-sdk) for all available options and API functions.

## License

MIT - Nuxt Community - Pooya Parsa
