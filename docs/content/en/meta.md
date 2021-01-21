---
title: Meta Module
description: Meta easily adds common meta tags into your project with zero-config needed
position: 3
category: Modules
---

[![npm](https://img.shields.io/npm/dt/@nuxtjs/meta.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/meta)
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/meta/latest.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/meta)

Meta easily adds common meta tags into your project with zero-config needed.
You can optionally override meta using `pwa.meta` in `nuxt.config.js`:

```js{}[nuxt.config.js]
pwa: {
  meta: {
    /* meta options */
  }
}
```

## options

### `charset`

- Default: `utf-8`

### `viewport`

- Default: `width=device-width, initial-scale=1`
- Meta: `viewport`

### `mobileApp`

- Default: `true`
- Meta: `mobile-web-app-capable`

### `mobileAppIOS`

- Default: `false`
- Meta: `apple-mobile-web-app-capable`

Please read this resources before you enable `mobileAppIOS` option:

- https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
- https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb

### `appleStatusBarStyle`

- Default: `default`
- Meta: `apple-mobile-web-app-status-bar-style`

There are three options for the status bar style:

1. `default`: The default status bar style for Safari PWAs; white background with black text and icons.
2. `black`: Black background with white text and icons.
3. `black-translucent`: Transparent background with white text and icons. It is [not possible](https://stackoverflow.com/a/40786240/8677167) to have a transparent status bar with black text and icons.

Note that with `black-translucent`, the web content is displayed on the entire screen, partially obscured by the status bar.

These articles will help you decide an appropriate value:

- https://medium.com/appscope/changing-the-ios-status-bar-of-your-progressive-web-app-9fc8fbe8e6ab.
- https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html#//apple_ref/doc/uid/TP40008193-SW4

### `favicon`

- Default: `true` (to use options.icons)
- Meta: `shortcut icon` + `apple-touch-icon`

### `name`

- Default: _npm_package_name_
- Meta: `title`

### `author`

- Default: _npm_package_author_name_
- Meta: `author`

### `description`

- Default: _npm_package_description_
- Meta: `description`

### `theme_color`

- Default: `'#ffffff'`
- Meta: `theme-color`

### `lang`

- Default: `en`
- Meta: `lang`

### `ogType`

- Default: `website`
- Meta: `og:type`

### `ogSiteName`

- Default: same as options.name
- Meta: `og:site_name`

### `ogTitle`

- Default: same as options.name
- Meta: `og:title`

### `ogDescription`

- Default: same as options.description
- Meta: `og:description`

### `ogHost`

Specify the domain that the site is hosted. Required for ogImage.

- Default: `undefined`
- Meta: `N/A`

### `ogImage`

- Default: `true`
- Meta: `og:image` and sub-tags

These types are accepted:

- Boolean: the icons from the `icon` module are used.
- String: the path is used.
- Object:
  - `path`: specify the path.
  - `width`, `height`: specify the dimensions, respectively.
  - `type`: specify the MIME type.

### `ogUrl`

- Default: ogHost (if defined)
- Meta: `og:url`

### `twitterCard`

- Default: `undefined`
- Meta: `twitter:card`

### `twitterSite`

- Default: `undefined`
- Meta: `twitter:site`

### `twitterCreator`

- Default: `undefined`
- Meta: `twitter:creator`

### `nativeUI`

- Default: `false`

By setting `meta.nativeUI` to `true` (Defaults to `false`) `viewport` defaults to `width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, minimal-ui` and `mobileAppIOS` will be enabled if not explicitly set to `false` which is suitable for native looking mobile apps.
