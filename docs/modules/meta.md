# 📦 Meta Module

[![npm](https://img.shields.io/npm/dt/@nuxtjs/meta.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/meta)
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/meta/latest.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/meta)

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

**charset**
- Default: `utf-8`

**viewport**
- Default: `width=device-width, initial-scale=1`
- Meta: `viewport`

**mobileApp**
- Default: `true`
- Meta: `mobile-web-app-capable`

**mobileAppIOS**
- Default: `false`
- Meta: `apple-mobile-web-app-capable`

Please read this resources before you enable `mobileAppIOS` option:

- https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
- https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb

**appleStatusBarStyle**
- Default: `default`

**favicon**
- Default: `true` (to use options.icons)
- Meta: `shortcut icon` + `apple-touch-icon`

**name**
- Default: *npm_package_name*
- Meta: `title`

**author**
- Default: *npm_package_author_name*
- Meta: `author`

**description**
- Default: *npm_package_description*
- Meta: `description`

**theme_color**
- Default: options.loading.color
- Meta: `theme-color`

**lang**
- Default: `en`
- Meta: `lang`

**ogType**
- Default: `website`
- Meta: `og:type`

**ogSiteName**
- Default: same as options.name
- Meta: `og:site_name`

**ogTitle**
- Default: same as options.name
- Meta: `og:title`

**ogDescription**
- Default: same as options.description
- Meta: `og:description`

**ogHost**
Specify the domain that the site is hosted. Required for ogImage.
- Default: `undefined`
- Meta: `N/A`

**ogImage**
- Default: `true`
- Meta: `og:image` and sub-tags

These types are accepted:

- Boolean: the icons from the `icon` module are used.
- String: the path is used.
- Object:
  * `path`: specify the path.
  * `width`, `height`: specify the dimensions, respectively.
  * `type`: specify the MIME type.

**ogUrl**
- Default: ogHost (if defined)
- Meta: `og:url`


**twitterCard**
- Default: `undefined`
- Meta: `twitter:card

**twitterSite**
- Default: `undefined`
- Meta: `twitter:site

**twitterCreator**
- Default: `undefined`
- Meta: `twitter:creator`

**nativeUI**
- Default: `false`

By setting `meta.nativeUI` to `true` (Defaults to `false`) `viewport` defaults to `width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, minimal-ui` and `mobileAppIOS` will be enabled if not explicitly set to `false` which is suitable for native looking mobile apps.
