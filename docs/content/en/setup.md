---
title: Setup
description: 'Supercharge Nuxt with a heavily tested, updated and stable PWA solution'
position: 1
category: Guide
---

Check the [Nuxt.js documentation](https://nuxtjs.org/api/configuration-modules#the-modules-property) for more information about installing and using modules in Nuxt.js.

## Installation

Add `@nuxtjs/pwa` dependency to your project:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add --dev @nuxtjs/pwa
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm i --dev @nuxtjs/pwa
  ```

  </code-block>
</code-group>

Edit your `nuxt.config.js` file to add pwa module::

```js{}[nuxt.config.js]
{
  buildModules: [
    '@nuxtjs/pwa',
  ]
}
```

**NOTE:** If using `ssr: false` with production mode without `nuxt generate`, you have to use `modules` instead of `buildModules`

### Add Icon

Ensure `static` dir exists and optionally create `static/icon.png`. (Recommended to be square png and >= `512x512px`)

### Ignore Service Worker

Create or add this to `.gitignore`:

```{}[.gitignore]
sw.*
```

## Configuration

PWA module is a collection of smaller modules that are designed to magically work out of the box together. To disable each sub-module, you can pass `false` option with its name as key. For example to disable _icon_ module:

```js{}[nuxt.config.js]
{
  pwa: {
    icon: false // disables the icon module
  }
}
```

Also each sub-module has its own configuration. Continue reading docs for detailed info.
