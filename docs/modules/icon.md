---
sidebar: auto
---

# Icon Module

[![npm](https://img.shields.io/npm/dt/@nuxtjs/icon.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/icon)
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/icon/latest.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/icon)

This module automatically generates app icons and favicon with different sizes using [jimp](https://github.com/oliver-moran/jimp) and fills `manifest.icons[]` with proper paths to generated assets that is used by manifest module. Source icon is being resized using *cover* method.


You can pass options to `pwa.icon` in `nuxt.config.js` to override defaults.

```js
pwa: {
  icon: {
    /* icon options */
  }
}
```

## options

**iconSrc**
- Default: `[srcDir]/[staticDir]/icon.png`

**iconFileName**
- Default: `icon.png`

**sizes**
- Default: `[64, 120, 144, 152, 192, 384, 512]`

**targetDir**
- Default: `icons`

Array of sizes to be generated (Square).

**accessibleIcons**
- Default: true

Make icons accessible through `ctx` or Vue instances.

Example: `ctx.$icon(512)` will return the url for the icon with the size of `512px`.
Will return an empty string when no icon in the given size is available (eg. when the size is not in `sizes` array).

**iconProperty**
- Default: '$icon'

Name of property for accessible icons.

**purpose**
- Default: null

Array of icon purpose.
Example:
```js
purpose: [ 'maskable', 'any' ]
```
