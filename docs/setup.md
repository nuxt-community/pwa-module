---

---

# Get Started

1. Install npm package:

```js
yarn add --dev @nuxtjs/pwa //or npm i --save-dev @nuxtjs/pwa
```

2. Edit your `nuxt.config.js` file to add pwa module:

```js
{
    buildModules: [
        '@nuxtjs/pwa',
    ],
}
```

ℹ️ If you are using `nuxt < 2.9.0` or `SPA` mode with `nuxt start`, use `modules` property instead.

3. Ensure `static` dir exists and optionally create `static/icon.png`. (Recommended to be square png and >= `512x512px`)

4. Create or add this to `.gitignore`:

```
sw.*
```

PWA module is a collection of smaller modules that are designed to magically work out of the box together. To disable each sub-module, you can pass `false` option with its name as key. For example to disable _icon_ module:

```js
buildModules: [
    ['@nuxtjs/pwa', { icon: false }],
],
```

Also each sub-module has its own configuration. Continue reading docs for detailed info.
