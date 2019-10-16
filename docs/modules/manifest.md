---
sidebar: auto
---

# Manifest Module

[![npm](https://img.shields.io/npm/dt/@nuxtjs/manifest.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/manifest)
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/manifest/latest.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/manifest)

Manifest adds [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) with no pain.

You can pass options to `pwa.manifest` in `nuxt.config.js` to override defaults. Check the
[valid options](https://developer.mozilla.org/en-US/docs/Web/Manifest#Members) available and and it's
[default options](#default-options) for deeper insights.

```js
pwa: {
  manifest: {
    name: 'My Awesome App',
    lang: 'fa',
    // further configuration other than manifest valid keys
    // publicPath
    fileExtension: 'webmanifest' // Default is `json` but `webmanifest` is recommended.
  }
}
```

# Default options

| Property              | Default                                                             |
|-----------------------|---------------------------------------------------------------------|
| `name` *1             | `package.json` name property                                        |
| `short_name` *1       | `package.json` name property                                        |
| `description` *2      | `package.json` description property                                 |
| `icons` *1            | (See the [icon module](https://pwa.nuxtjs.org/modules/icon.html))   |
| `start_url` *1        | `routerBase + '?standalone=true'`                                   |
| `display` *1          | `'standalone'`                                                      |
| `background_color` *2 | `'#ffffff'`                                                         |
| `theme_color` *2      | `this.options.loading.color`                                        |
| `lang`                | `'en'`                                                              |
| `fileExtension`       | `json`                                                              |
| `publicPath`          | A combination of `routerBase` and `options.build.publicPath`        |


* (*1) Mandatory (according [to Google](https://web.dev/add-manifest)).
 Although [official documentation](https://w3c.github.io/manifest/#json-schema) only mentions `name` and `icons`
* (*2) Recommended (according [to Google](https://web.dev/add-manifest))

For more options, check out the spec: https://w3c.github.io/manifest/
