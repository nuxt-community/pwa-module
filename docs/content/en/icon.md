---
title: Icon Module
description: This module automatically generates app icons and favicon with different sizes
position: 2
category: Modules
---

This module automatically generates app icons and favicon with different sizes using [jimp](https://github.com/oliver-moran/jimp) and fills `manifest.icons[]` with proper paths to generated assets that is used by manifest module. Source icon is being resized using *cover* method.


You can pass options to `pwa.icon` in `nuxt.config.js` to override defaults.

```js{}[nuxt.config.js]
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

Array of sizes to be generated (Square).

**targetDir**
- Default: `icons`

**iconPlugin**
- Default: true

Make icons accessible through `ctx` or Vue instances.

Example: `ctx.$icon(512)` will return the url for the icon with the size of `512px`.
Will return an empty string when no icon in the given size is available (eg. when the size is not in `sizes` array).

**iconProperty**
- Default: '$icon'

Name of property for accessible icons.

**purpose**
- Default: `['any', 'maskable']`

Array or string of icon purpose.

Example:

```js
purpose: 'maskable'
```

More detail of "purpose": [https://w3c.github.io/manifest/#purpose-member](https://w3c.github.io/manifest/#purpose-member)
