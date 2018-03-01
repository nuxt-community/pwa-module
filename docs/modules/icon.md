# 📦 Icon Module

[![npm](https://img.shields.io/npm/dt/@nuxtjs/icon.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/icon)
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/icon/latest.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/icon)

This module automatically generates app icons and favicon with different sizes using [jimp](https://github.com/oliver-moran/jimp) and fills `manifest.icons[]` with proper paths to generated assets that is used by manifest module. Source icon is being resized using *cover* method.

### options

**iconSrc**
- Default: `[srcDir]/static/icon.png`

**sizes**
- Default: `[16, 120, 144, 152, 192, 384, 512]`

Array of sizes to be generated (Square).
