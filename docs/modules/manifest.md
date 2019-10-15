---
sidebar: auto
---

# Manifest Module

[![npm](https://img.shields.io/npm/dt/@nuxtjs/manifest.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/manifest)
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/manifest/latest.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/manifest)

Manifest adds [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) with no pain.

You can pass options to `pwa.manifest` in `nuxt.config.js` to override defaults. Check the
[valid options](https://developer.mozilla.org/en-US/docs/Web/Manifest#Members) available and
[the module implementation](https://github.com/nuxt-community/pwa-module/blob/dev/lib/manifest/module.js) for deeper insights.

```js
pwa: {
  manifest: {
    name: 'My Awesome App',
    lang: 'fa',
    // further configuration other than manifest valid keys
    // src
    // publicPath
    fileExtension: 'webmanifest'
  }
}
```
